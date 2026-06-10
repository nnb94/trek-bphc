import { useState } from "react";
import { z } from "zod";
import { Mail, Instagram, MapPin, Send, Loader2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";
import heroImg from "@/assets/hero-mountains.jpg";

const schema = z.object({
  name: z.string().trim().min(2, "Name too short").max(80),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(5, "Message too short").max(2000),
});

const Contact = () => {
  const { user } = useAuth();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) return toast.error(parsed.error.issues[0].message);
    setLoading(true);
    const { error } = await supabase.from("feedback").insert({
      name: parsed.data.name,
      email: parsed.data.email,
      message: parsed.data.message,
      user_id: user?.id ?? null,
    });
    setLoading(false);
    if (error) toast.error(error.message);
    else {
      toast.success("Thanks for your feedback!");
      setForm({ name: "", email: "", message: "" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroImg})` }} />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative z-10 container mx-auto px-4 text-center pt-20">
          <div className="max-w-3xl mx-auto space-y-6 animate-fade-up">
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-cream">Contact Us</h1>
            <p className="text-xl text-cream/80">We'd love to hear from you</p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 max-w-5xl">
          {/* Contact Info */}
          <div>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Get in Touch</h2>
            <p className="text-muted-foreground mb-6">Have questions about TAS, our treks, or the induction process? Reach out via any channel below.</p>
            <div className="space-y-4">
              <a href="mailto:tas@gmail.com" className="flex items-start gap-4 p-3 rounded-xl bg-muted hover:bg-muted/80 transition-colors group">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent transition-colors">
                  <Mail className="w-5 h-5 text-accent group-hover:text-accent-foreground" />
                </div>
                <div><h3 className="font-semibold text-foreground">Email</h3><p className="text-muted-foreground text-sm">tas@gmail.com</p></div>
              </a>
              <a href="https://instagram.com/tas.bphc" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 p-3 rounded-xl bg-muted hover:bg-muted/80 transition-colors group">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent transition-colors">
                  <Instagram className="w-5 h-5 text-accent group-hover:text-accent-foreground" />
                </div>
                <div><h3 className="font-semibold text-foreground">Instagram</h3><p className="text-muted-foreground text-sm">@tas.bphc</p></div>
              </a>
              <div className="flex items-start gap-4 p-3 rounded-xl bg-muted">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div><h3 className="font-semibold text-foreground">Address</h3>
                  <p className="text-muted-foreground text-sm">BITS Pilani, Hyderabad Campus<br />Jawahar Nagar, Shameerpet<br />Hyderabad, Telangana - 500078</p>
                </div>
              </div>
            </div>
          </div>

          {/* Feedback Form */}
          <div className="bg-card rounded-2xl p-6 card-elevated">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-2">Leave Feedback</h2>
            <p className="text-sm text-muted-foreground mb-4">Suggestions, complaints, kudos — we read every message.</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="cf-name">Name</Label>
                <Input id="cf-name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
              </div>
              <div>
                <Label htmlFor="cf-email">Email</Label>
                <Input id="cf-email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
              </div>
              <div>
                <Label htmlFor="cf-message">Message</Label>
                <Textarea id="cf-message" rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required />
              </div>
              <Button type="submit" variant="accent" size="lg" className="w-full" disabled={loading}>
                {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                Send Feedback
              </Button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
