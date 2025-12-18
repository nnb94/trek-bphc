import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Mountain, Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-primary flex items-center justify-center p-4">
      <div className="text-center max-w-md">
        <div className="w-20 h-20 rounded-2xl bg-accent flex items-center justify-center mx-auto mb-8">
          <Mountain className="w-10 h-10 text-accent-foreground" />
        </div>
        
        <h1 className="font-heading text-7xl font-bold text-primary-foreground mb-4">
          404
        </h1>
        
        <h2 className="font-heading text-2xl font-semibold text-primary-foreground mb-4">
          Trail Not Found
        </h2>
        
        <p className="text-primary-foreground/70 mb-8">
          Looks like you've wandered off the beaten path. The page you're looking for 
          doesn't exist or has been moved to a different trail.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button variant="hero" size="lg" className="gap-2 w-full sm:w-auto">
              <Home className="w-4 h-4" />
              Back to Home
            </Button>
          </Link>
          <Button
            variant="hero-outline"
            size="lg"
            onClick={() => window.history.back()}
            className="gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;