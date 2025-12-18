import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Mountain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Treks", path: "/treks" },
  { name: "Fitness", path: "/fitness" },
  { name: "Team", path: "/team" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

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
              <Mountain className={cn(
                "w-6 h-6 transition-colors",
                scrolled ? "text-primary-foreground" : "text-cream"
              )} />
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
            <Link to="/join" className="ml-2">
              <Button variant={scrolled ? "accent" : "hero"} size="sm">
                Join TAS
              </Button>
            </Link>
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
            <Link to="/join" className="mt-2">
              <Button variant="hero" className="w-full">
                Join TAS
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
