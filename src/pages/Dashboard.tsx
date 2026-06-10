import { useEffect, useState } from "react";
import { Navigate, Link } from "react-router-dom";
import { Heart, Calendar, User as UserIcon, Loader2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";

interface Profile { id: string; full_name: string | null; email: string | null; avatar_url: string | null; }
interface Favorite { id: string; trek_slug: string; trek_name: string; created_at: string; }
interface Interest { id: string; trek_name: string; created_at: string; phone: string; }

const Dashboard = () => {
  const { user, loading: authLoading, isAdmin } = useAuth();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [favorites, setFavorites] = useState<Favorite[]>([]);
  const [interests, setInterests] = useState<Interest[]>([]);
  const [fullName, setFullName] = useState("");
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [avatarSignedUrl, setAvatarSignedUrl] = useState<string | null>(null);

  useEffect(() => {
    if (!user) return;
    (async () => {
      const [{ data: p }, { data: f }, { data: i }] = await Promise.all([
        supabase.from("profiles").select("*").eq("id", user.id).maybeSingle(),
        supabase.from("favorites").select("*").eq("user_id", user.id).order("created_at", { ascending: false }),
        supabase.from("trek_interests").select("id, trek_name, created_at, phone").eq("user_id", user.id).order("created_at", { ascending: false }),
      ]);
      setProfile(p);
      setFullName(p?.full_name ?? "");
      setFavorites(f ?? []);
      setInterests(i ?? []);
      if (p?.avatar_url) {
        const { data } = await supabase.storage.from("avatars").createSignedUrl(p.avatar_url, 60 * 60);
        setAvatarSignedUrl(data?.signedUrl ?? null);
      }
    })();
  }, [user]);

  if (authLoading) return <div className="min-h-screen flex items-center justify-center"><Loader2 className="animate-spin" /></div>;
  if (!user) return <Navigate to="/auth" replace />;

  const saveProfile = async () => {
    setSaving(true);
    await supabase.from("profiles").update({ full_name: fullName }).eq("id", user.id);
    setSaving(false);
    toast.success("Profile updated");
  };

  const uploadAvatar = async (file: File) => {
    setUploading(true);
    const path = `${user.id}/avatar-${Date.now()}-${file.name}`;
    const { error } = await supabase.storage.from("avatars").upload(path, file, { upsert: true });
    if (error) { toast.error(error.message); setUploading(false); return; }
    await supabase.from("profiles").update({ avatar_url: path }).eq("id", user.id);
    const { data } = await supabase.storage.from("avatars").createSignedUrl(path, 60 * 60);
    setAvatarSignedUrl(data?.signedUrl ?? null);
    setUploading(false);
    toast.success("Avatar updated");
  };

  const removeFavorite = async (id: string) => {
    await supabase.from("favorites").delete().eq("id", id);
    setFavorites(favorites.filter((f) => f.id !== id));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 pt-28 pb-16 max-w-5xl">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground">My Dashboard</h1>
          {isAdmin && <Link to="/admin"><Button variant="forest">Admin Panel</Button></Link>}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Profile */}
          <div className="md:col-span-1 bg-card rounded-2xl p-6 card-elevated">
            <div className="flex items-center gap-2 mb-4">
              <UserIcon className="w-5 h-5 text-accent" />
              <h2 className="font-heading font-bold text-lg">Profile</h2>
            </div>
            <div className="flex flex-col items-center mb-4">
              <div className="w-24 h-24 rounded-full bg-muted overflow-hidden mb-3 flex items-center justify-center">
                {avatarSignedUrl ? (
                  <img src={avatarSignedUrl} alt="Avatar" className="w-full h-full object-cover" />
                ) : (
                  <UserIcon className="w-10 h-10 text-muted-foreground" />
                )}
              </div>
              <label className="text-sm text-accent cursor-pointer hover:underline">
                {uploading ? "Uploading..." : "Change photo"}
                <input type="file" accept="image/*" className="hidden"
                  onChange={(e) => e.target.files?.[0] && uploadAvatar(e.target.files[0])} />
              </label>
            </div>
            <div className="space-y-3">
              <div>
                <Label htmlFor="fn">Full Name</Label>
                <Input id="fn" value={fullName} onChange={(e) => setFullName(e.target.value)} />
              </div>
              <div>
                <Label>Email</Label>
                <Input value={profile?.email ?? ""} disabled />
              </div>
              <Button onClick={saveProfile} variant="accent" className="w-full" disabled={saving}>
                {saving && <Loader2 className="w-4 h-4 animate-spin" />}Save
              </Button>
            </div>
          </div>

          {/* Right column */}
          <div className="md:col-span-2 space-y-6">
            <div className="bg-card rounded-2xl p-6 card-elevated">
              <div className="flex items-center gap-2 mb-4">
                <Heart className="w-5 h-5 text-accent" />
                <h2 className="font-heading font-bold text-lg">Favorite Treks</h2>
              </div>
              {favorites.length === 0 ? (
                <p className="text-muted-foreground text-sm">No favorites yet. <Link to="/treks" className="text-accent hover:underline">Explore treks</Link></p>
              ) : (
                <ul className="space-y-2">
                  {favorites.map((f) => (
                    <li key={f.id} className="flex items-center justify-between p-3 rounded-lg bg-muted">
                      <span className="font-medium text-foreground">{f.trek_name}</span>
                      <button onClick={() => removeFavorite(f.id)} className="text-sm text-destructive hover:underline">Remove</button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="bg-card rounded-2xl p-6 card-elevated">
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="w-5 h-5 text-accent" />
                <h2 className="font-heading font-bold text-lg">My Trek Interests</h2>
              </div>
              {interests.length === 0 ? (
                <p className="text-muted-foreground text-sm">No submissions yet.</p>
              ) : (
                <ul className="space-y-2">
                  {interests.map((i) => (
                    <li key={i.id} className="flex items-center justify-between p-3 rounded-lg bg-muted">
                      <div>
                        <p className="font-medium text-foreground">{i.trek_name}</p>
                        <p className="text-xs text-muted-foreground">Submitted {new Date(i.created_at).toLocaleDateString()}</p>
                      </div>
                      <span className="text-xs text-muted-foreground">{i.phone}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
