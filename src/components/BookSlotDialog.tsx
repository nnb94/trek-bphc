import { useState } from "react";
import { z } from "zod";
import { Loader2 } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().trim().min(2, "Name too short").max(80),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().min(7, "Invalid phone").max(20),
});

interface Props {
  open: boolean;
  onOpenChange: (o: boolean) => void;
  trekSlug: string;
  trekName: string;
}

const BookSlotDialog = ({ open, onOpenChange, trekSlug, trekName }: Props) => {
  const { user } = useAuth();
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) return toast.error(parsed.error.issues[0].message);
    setLoading(true);
    const { error } = await supabase.from("trek_interests").insert({
      trek_slug: trekSlug,
      trek_name: trekName,
      name: parsed.data.name,
      email: parsed.data.email,
      phone: parsed.data.phone,
      user_id: user?.id ?? null,
    });
    setLoading(false);
    if (error) toast.error(error.message);
    else {
      toast.success("Slot booked! We'll be in touch soon.");
      setForm({ name: "", email: "", phone: "" });
      onOpenChange(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Book Your Slot — {trekName}</DialogTitle>
          <DialogDescription>Share your details and we'll reach out with the next steps.</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="bs-name">Name</Label>
            <Input id="bs-name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
          </div>
          <div>
            <Label htmlFor="bs-email">Email</Label>
            <Input id="bs-email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
          </div>
          <div>
            <Label htmlFor="bs-phone">Phone</Label>
            <Input id="bs-phone" type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} required />
          </div>
          <Button type="submit" variant="accent" className="w-full" disabled={loading}>
            {loading && <Loader2 className="w-4 h-4 animate-spin" />}
            Submit
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookSlotDialog;
