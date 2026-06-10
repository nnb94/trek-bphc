import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, LogOut, LayoutDashboard, User as UserIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import TASLogo from '../assets/TAS_logo.png';


const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Treks", path: "/treks" },
  { name: "Fitness", path: "/fitness" },
  { name: "Essentials", path: "/essentials" },
  { name: "Team", path: "/team" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, signOut } = useAuth();

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-soft"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className={cn(
              "w-10 h-10 rounded-lg flex items-center justify-center transition-colors",
              scrolled ? "bg-primary" : "bg-cream/20 backdrop-blur-sm"
            )}>
              <img src={TASLogo} alt="TAS Logo" className="w-full h-full object-cover rounded-xl" />
            </div>
            <div className="flex flex-col">
              <span className={cn(
                "font-heading font-bold text-lg leading-tight transition-colors",
                scrolled ? "text-foreground" : "text-cream"
              )}>
                TAS
              </span>
              <span className={cn(
                "text-xs font-medium transition-colors",
                scrolled ? "text-muted-foreground" : "text-cream/70"
              )}>
                BPHC
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200",
                  location.pathname === link.path
                    ? scrolled
                      ? "bg-primary text-primary-foreground"
                      : "bg-cream/20 text-cream backdrop-blur-sm"
                    : scrolled
                    ? "text-muted-foreground hover:text-foreground hover:bg-muted"
                    : "text-cream/80 hover:text-cream hover:bg-cream/10"
                )}
              >
                {link.name}
              </Link>
            ))}
            {user ? (
              <>
                <Link to="/dashboard" title="Dashboard"
                  className={cn("px-3 py-2 rounded-lg flex items-center gap-1 text-sm font-medium",
                    scrolled ? "text-foreground hover:bg-muted" : "text-cream hover:bg-cream/10")}>
                  <LayoutDashboard className="w-4 h-4" />
                </Link>
                <button onClick={handleSignOut} title="Sign out"
                  className={cn("px-3 py-2 rounded-lg flex items-center gap-1 text-sm font-medium",
                    scrolled ? "text-foreground hover:bg-muted" : "text-cream hover:bg-cream/10")}>
                  <LogOut className="w-4 h-4" />
                </button>
              </>
            ) : (
              <Link to="/auth" className={cn("ml-2 px-4 py-2 rounded-lg text-sm font-semibold",
                scrolled ? "bg-accent text-accent-foreground" : "bg-cream/20 text-cream backdrop-blur-sm hover:bg-cream/30")}>
                Sign In
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "lg:hidden p-2 rounded-lg transition-colors",
              scrolled
                ? "text-foreground hover:bg-muted"
                : "text-cream hover:bg-cream/10"
            )}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300",
            isOpen ? "max-h-[500px] pb-6" : "max-h-0"
          )}
        >
          <div className={cn(
            "flex flex-col gap-2 pt-4 rounded-xl p-4",
            scrolled ? "bg-muted" : "bg-forest/90 backdrop-blur-md"
          )}>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "px-4 py-3 rounded-lg font-medium transition-colors",
                  location.pathname === link.path
                    ? scrolled
                      ? "bg-primary text-primary-foreground"
                      : "bg-cream/20 text-cream"
                    : scrolled
                    ? "text-foreground hover:bg-background"
                    : "text-cream/80 hover:text-cream hover:bg-cream/10"
                )}
              >
                {link.name}
              </Link>
            ))}
            {user ? (
              <>
                <Link to="/dashboard" className={cn("px-4 py-3 rounded-lg font-medium flex items-center gap-2",
                  scrolled ? "text-foreground hover:bg-background" : "text-cream hover:bg-cream/10")}>
                  <LayoutDashboard className="w-4 h-4" />Dashboard
                </Link>
                <button onClick={handleSignOut} className={cn("px-4 py-3 rounded-lg font-medium flex items-center gap-2 text-left",
                  scrolled ? "text-foreground hover:bg-background" : "text-cream hover:bg-cream/10")}>
                  <LogOut className="w-4 h-4" />Sign Out
                </button>
              </>
            ) : (
              <Link to="/auth" className={cn("px-4 py-3 rounded-lg font-medium",
                scrolled ? "bg-accent text-accent-foreground" : "bg-cream/20 text-cream")}>
                Sign In
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
