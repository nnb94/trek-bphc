import { Mail, Instagram, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImg from "@/assets/hero-mountains.jpg";

const Contact = () => {

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImg})` }}
        />
        <div className="absolute inset-0 hero-overlay" />
        
        <div className="relative z-10 container mx-auto px-4 text-center pt-20">
          <div className="max-w-3xl mx-auto space-y-6 animate-fade-up">
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-cream">
              Contact Us
            </h1>
            <p className="text-xl text-cream/80">
              We'd love to hear from you
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            {/* Contact Info */}
            <div>
              <h2 className="font-heading text-3xl font-bold text-foreground mb-6">
                Get in Touch
              </h2>
              <p className="text-muted-foreground mb-8">
                Have questions about TAS, our treks, or the induction process? 
                Reach out to us through any of the channels below.
              </p>

              <div className="space-y-6">
                <a
                  href="mailto:tas@gmail.com"
                  className="flex items-start gap-4 p-3 rounded-xl bg-muted hover:bg-muted/80 transition-colors group mx-auto max-w-sm min-h-[60px]"
                >
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                    <Mail className="w-5 h-5 text-accent group-hover:text-accent-foreground" />
                  </div>
                  <div className="self-center">
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <p className="text-muted-foreground text-sm">tas@gmail.com</p>
                  </div>
                </a>

                <a
                  href="https://instagram.com/tas.bphc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-3 rounded-xl bg-muted hover:bg-muted/80 transition-colors group mx-auto max-w-sm min-h-[60px]"
                >
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                    <Instagram className="w-5 h-5 text-accent group-hover:text-accent-foreground" />
                  </div>
                  <div className="self-center">
                    <h3 className="font-semibold text-foreground">Instagram</h3>
                    <p className="text-muted-foreground text-sm">@tas.bphc</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-3 rounded-xl bg-muted mx-auto max-w-sm min-h-[80px]">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div className="self-center">
                    <h3 className="font-semibold text-foreground">Address</h3>
                    <p className="text-muted-foreground text-sm">
                      BITS Pilani, Hyderabad Campus<br />
                      Jawahar Nagar, Shameerpet<br />
                      Hyderabad, Telangana - 500078
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
