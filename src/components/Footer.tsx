import { Link } from "react-router-dom";
import { Instagram, Mail, Mountain, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                <Mountain className="w-7 h-7 text-accent-foreground" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl">TAS</h3>
                <p className="text-sm text-primary-foreground/70">BITS Pilani Hyderabad</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Building resilient trekkers and creating unforgettable mountain memories since our founding at BPHC.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "About Us", path: "/about" },
                { name: "Our Treks", path: "/treks" },
                { name: "Fitness Guide", path: "/fitness" },
                { name: "Meet the Team", path: "/team" },
                { name: "Gallery", path: "/gallery" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <Mail className="w-4 h-4 text-accent" />
                <a href="mailto:tas@hyderabad.bits-pilani.ac.in" className="hover:text-accent transition-colors">
                  tas@hyderabad.bits-pilani.ac.in
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-primary-foreground/70">
                <MapPin className="w-4 h-4 text-accent mt-0.5" />
                <span>
                  BITS Pilani, Hyderabad Campus<br />
                  Jawahar Nagar, Shameerpet<br />
                  Hyderabad - 500078
                </span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Follow Us</h4>
            <p className="text-primary-foreground/70 text-sm mb-4">
              Stay updated with our latest adventures and events.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com/tas_bphc"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="mailto:tas@hyderabad.bits-pilani.ac.in"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} Trekking & Adventure Society, BPHC. All rights reserved.
          </p>
          <p className="text-primary-foreground/60 text-sm">
            Explore. Endure. Evolve.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
