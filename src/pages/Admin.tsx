import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { Loader2, Users, MessageSquare, Calendar, Image as ImageIcon, Trash2, Upload } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";

const Admin = () => {
  const { user, loading: authLoading, isAdmin } = useAuth();
  const [interests, setInterests] = useState<any[]>([]);
  const [feedback, setFeedback] = useState<any[]>([]);
  const [users, setUsers] = useState<any[]>([]);
  const [photos, setPhotos] = useState<any[]>([]);
  const [photoUrls, setPhotoUrls] = useState<Record<string, string>>({});
  const [upload, setUpload] = useState({ trekName: "", caption: "", file: null as File | null });
  const [uploading, setUploading] = useState(false);

  const loadAll = async () => {
    const [{ data: i }, { data: f }, { data: p }, { data: ph }] = await Promise.all([
      supabase.from("trek_interests").select("*").order("created_at", { ascending: false }),
      supabase.from("feedback").select("*").order("created_at", { ascending: false }),
      supabase.from("profiles").select("*").order("created_at", { ascending: false }),
      supabase.from("gallery_photos").select("*").order("created_at", { ascending: false }),
    ]);
    setInterests(i ?? []);
    setFeedback(f ?? []);
    setUsers(p ?? []);
    setPhotos(ph ?? []);

    // Sign URLs for photos
    const urls: Record<string, string> = {};
    for (const photo of ph ?? []) {
      if (photo.storage_path) {
        const { data } = await supabase.storage.from("gallery").createSignedUrl(photo.storage_path, 60 * 60);
        if (data?.signedUrl) urls[photo.id] = data.signedUrl;
      } else {
        urls[photo.id] = photo.image_url;
      }
    }
    setPhotoUrls(urls);
  };

  useEffect(() => { if (isAdmin) loadAll(); }, [isAdmin]);

  if (authLoading) return <div className="min-h-screen flex items-center justify-center"><Loader2 className="animate-spin" /></div>;
  if (!user) return <Navigate to="/auth" replace />;
  if (!isAdmin) return <Navigate to="/dashboard" replace />;

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!upload.file || !upload.trekName) return toast.error("Trek name and file required");
    setUploading(true);
    const path = `${upload.trekName.toLowerCase().replace(/\s+/g, "-")}/${Date.now()}-${upload.file.name}`;
    const { error: upErr } = await supabase.storage.from("gallery").upload(path, upload.file);
    if (upErr) { toast.error(upErr.message); setUploading(false); return; }
    const { data: signed } = await supabase.storage.from("gallery").createSignedUrl(path, 60 * 60 * 24 * 365);
    const { error: insErr } = await supabase.from("gallery_photos").insert({
      trek_name: upload.trekName,
      caption: upload.caption,
      image_url: signed?.signedUrl ?? "",
      storage_path: path,
      uploaded_by: user.id,
    });
    setUploading(false);
    if (insErr) toast.error(insErr.message);
    else {
      toast.success("Photo uploaded");
      setUpload({ trekName: "", caption: "", file: null });
      loadAll();
    }
  };

  const deletePhoto = async (id: string, storage_path: string | null) => {
    if (storage_path) await supabase.storage.from("gallery").remove([storage_path]);
    await supabase.from("gallery_photos").delete().eq("id", id);
    setPhotos(photos.filter((p) => p.id !== id));
    toast.success("Deleted");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 pt-28 pb-16 max-w-6xl">
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-2">Admin Dashboard</h1>
        <p className="text-muted-foreground mb-8">Manage submissions, users, and gallery photos.</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Stat icon={Calendar} label="Trek Interests" value={interests.length} />
          <Stat icon={MessageSquare} label="Feedback" value={feedback.length} />
          <Stat icon={Users} label="Users" value={users.length} />
          <Stat icon={ImageIcon} label="Gallery Photos" value={photos.length} />
        </div>

        <Tabs defaultValue="interests">
          <TabsList className="grid grid-cols-4 w-full">
            <TabsTrigger value="interests">Trek Interests</TabsTrigger>
            <TabsTrigger value="feedback">Feedback</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="gallery">Gallery</TabsTrigger>
          </TabsList>

          <TabsContent value="interests" className="mt-4">
            <DataTable rows={interests} cols={[
              { k: "trek_name", l: "Trek" }, { k: "name", l: "Name" }, { k: "email", l: "Email" },
              { k: "phone", l: "Phone" }, { k: "created_at", l: "Date", fmt: (v) => new Date(v).toLocaleString() }
            ]} />
          </TabsContent>

          <TabsContent value="feedback" className="mt-4">
            <DataTable rows={feedback} cols={[
              { k: "name", l: "Name" }, { k: "email", l: "Email" }, { k: "message", l: "Message" },
              { k: "created_at", l: "Date", fmt: (v) => new Date(v).toLocaleString() }
            ]} />
          </TabsContent>

          <TabsContent value="users" className="mt-4">
            <DataTable rows={users} cols={[
              { k: "full_name", l: "Name" }, { k: "email", l: "Email" },
              { k: "created_at", l: "Joined", fmt: (v) => new Date(v).toLocaleDateString() }
            ]} />
          </TabsContent>

          <TabsContent value="gallery" className="mt-4 space-y-6">
            <form onSubmit={handleUpload} className="bg-card rounded-2xl p-6 card-elevated grid md:grid-cols-4 gap-4 items-end">
              <div>
                <Label>Trek Name</Label>
                <Input value={upload.trekName} onChange={(e) => setUpload({ ...upload, trekName: e.target.value })} placeholder="e.g. Rupin Pass" required />
              </div>
              <div>
                <Label>Caption</Label>
                <Input value={upload.caption} onChange={(e) => setUpload({ ...upload, caption: e.target.value })} placeholder="Optional" />
              </div>
              <div>
                <Label>Photo</Label>
                <Input type="file" accept="image/*" onChange={(e) => setUpload({ ...upload, file: e.target.files?.[0] ?? null })} required />
              </div>
              <Button type="submit" variant="accent" disabled={uploading}>
                {uploading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Upload className="w-4 h-4" />}Upload
              </Button>
            </form>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {photos.map((p) => (
                <div key={p.id} className="relative group rounded-xl overflow-hidden bg-muted aspect-square">
                  {photoUrls[p.id] && <img src={photoUrls[p.id]} alt={p.caption ?? p.trek_name} className="w-full h-full object-cover" />}
                  <div className="absolute inset-0 bg-foreground/60 opacity-0 group-hover:opacity-100 transition flex flex-col items-center justify-center gap-2 text-cream p-3 text-center">
                    <p className="text-xs font-semibold">{p.trek_name}</p>
                    {p.caption && <p className="text-xs">{p.caption}</p>}
                    <button onClick={() => deletePhoto(p.id, p.storage_path)} className="text-red-300 hover:text-red-100">
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
      <Footer />
    </div>
  );
};

const Stat = ({ icon: Icon, label, value }: { icon: any; label: string; value: number }) => (
  <div className="bg-card rounded-2xl p-5 card-elevated">
    <Icon className="w-5 h-5 text-accent mb-2" />
    <p className="text-2xl font-heading font-bold text-foreground">{value}</p>
    <p className="text-xs text-muted-foreground">{label}</p>
  </div>
);

interface Col { k: string; l: string; fmt?: (v: any) => string }
const DataTable = ({ rows, cols }: { rows: any[]; cols: Col[] }) => (
  <div className="bg-card rounded-2xl card-elevated overflow-x-auto">
    <table className="w-full text-sm">
      <thead className="border-b border-border">
        <tr>{cols.map((c) => <th key={c.k} className="text-left p-3 font-heading font-semibold text-foreground">{c.l}</th>)}</tr>
      </thead>
      <tbody>
        {rows.length === 0 ? (
          <tr><td colSpan={cols.length} className="p-6 text-center text-muted-foreground">No records yet.</td></tr>
        ) : rows.map((r, idx) => (
          <tr key={r.id ?? idx} className="border-b border-border/50 hover:bg-muted/50">
            {cols.map((c) => <td key={c.k} className="p-3 text-muted-foreground max-w-xs truncate">{c.fmt ? c.fmt(r[c.k]) : (r[c.k] ?? "—")}</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default Admin;
