import { useEffect, useState } from "react";
import { Heart, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

interface Props {
  trekSlug: string;
  trekName: string;
  className?: string;
}

const FavoriteButton = ({ trekSlug, trekName, className }: Props) => {
  const { user } = useAuth();
  const [favorited, setFavorited] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!user) { setFavorited(false); return; }
    supabase.from("favorites").select("id").eq("user_id", user.id).eq("trek_slug", trekSlug)
      .maybeSingle().then(({ data }) => setFavorited(!!data));
  }, [user, trekSlug]);

  const toggle = async (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    if (!user) {
      toast.error("Sign in to save favorites");
      return;
    }
    setLoading(true);
    if (favorited) {
      await supabase.from("favorites").delete().eq("user_id", user.id).eq("trek_slug", trekSlug);
      setFavorited(false);
    } else {
      await supabase.from("favorites").insert({ user_id: user.id, trek_slug: trekSlug, trek_name: trekName });
      setFavorited(true);
    }
    setLoading(false);
  };

  return (
    <button
      onClick={toggle}
      aria-label={favorited ? "Remove from favorites" : "Add to favorites"}
      className={cn(
        "w-9 h-9 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center shadow-md hover:scale-110 transition-transform",
        className
      )}
    >
      {loading ? <Loader2 className="w-4 h-4 animate-spin" /> :
        <Heart className={cn("w-4 h-4", favorited ? "fill-accent text-accent" : "text-muted-foreground")} />}
    </button>
  );
};

export default FavoriteButton;
