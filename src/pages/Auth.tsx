import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";
import { Mountain, Mail, Lock, User as UserIcon, Loader2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";

const signUpSchema = z.object({
  fullName: z.string().trim().min(2, "Name too short").max(80),
  email: z.string().trim().email("Invalid email").max(255),
  password: z.string().min(8, "Password must be at least 8 characters").max(72),
});

const signInSchema = z.object({
  email: z.string().trim().email("Invalid email"),
  password: z.string().min(1, "Password required"),
});

const Auth = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [mode, setMode] = useState<"signin" | "signup" | "forgot">("signin");
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ fullName: "", email: "", password: "" });

  useEffect(() => {
    if (user) navigate("/dashboard", { replace: true });
  }, [user, navigate]);

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = signUpSchema.safeParse(form);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }
    setLoading(true);
    const { error } = await supabase.auth.signUp({
      email: parsed.data.email,
      password: parsed.data.password,
      options: {
        emailRedirectTo: `${window.location.origin}/`,
        data: { full_name: parsed.data.fullName },
      },
    });
    setLoading(false);
    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Check your email to verify your account.");
      setMode("signin");
    }
  };

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = signInSchema.safeParse({ email: form.email, password: form.password });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword(parsed.data);
    setLoading(false);
    if (error) {
      toast.error(error.message.includes("Email not confirmed") ? "Please verify your email first." : error.message);
    } else {
      toast.success("Welcome back!");
      navigate("/dashboard");
    }
  };

  const handleForgot = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.email) return toast.error("Enter your email");
    setLoading(true);
    const { error } = await supabase.auth.resetPasswordForEmail(form.email, {
      redirectTo: `${window.location.origin}/reset-password`,
    });
    setLoading(false);
    if (error) toast.error(error.message);
    else toast.success("Password reset email sent.");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 pt-32 pb-16">
        <div className="max-w-md mx-auto bg-card rounded-2xl p-8 card-elevated">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Mountain className="w-8 h-8 text-accent" />
            <h1 className="font-heading text-2xl font-bold text-foreground">
              {mode === "signin" ? "Welcome Back" : mode === "signup" ? "Join TAS" : "Reset Password"}
            </h1>
          </div>

          <form onSubmit={mode === "signin" ? handleSignIn : mode === "signup" ? handleSignUp : handleForgot} className="space-y-4">
            {mode === "signup" && (
              <div>
                <Label htmlFor="fullName">Full Name</Label>
                <div className="relative">
                  <UserIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input id="fullName" className="pl-9" value={form.fullName}
                    onChange={(e) => setForm({ ...form, fullName: e.target.value })} required />
                </div>
              </div>
            )}
            <div>
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input id="email" type="email" className="pl-9" value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })} required />
              </div>
            </div>
            {mode !== "forgot" && (
              <div>
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input id="password" type="password" className="pl-9" value={form.password}
                    onChange={(e) => setForm({ ...form, password: e.target.value })} required />
                </div>
              </div>
            )}

            <Button type="submit" variant="accent" size="lg" className="w-full" disabled={loading}>
              {loading && <Loader2 className="w-4 h-4 animate-spin" />}
              {mode === "signin" ? "Sign In" : mode === "signup" ? "Create Account" : "Send Reset Link"}
            </Button>
          </form>

          <div className="mt-6 text-center text-sm text-muted-foreground space-y-2">
            {mode === "signin" && (
              <>
                <button onClick={() => setMode("forgot")} className="text-accent hover:underline">Forgot password?</button>
                <p>No account? <button onClick={() => setMode("signup")} className="text-accent font-semibold hover:underline">Sign up</button></p>
              </>
            )}
            {mode === "signup" && (
              <p>Already have an account? <button onClick={() => setMode("signin")} className="text-accent font-semibold hover:underline">Sign in</button></p>
            )}
            {mode === "forgot" && (
              <button onClick={() => setMode("signin")} className="text-accent hover:underline">Back to sign in</button>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Auth;
