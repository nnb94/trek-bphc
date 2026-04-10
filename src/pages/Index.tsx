import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Mountain, Users, Award, Compass, ArrowRight, MapPin, TrendingUp, Calendar } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-mountains.jpg";
import kedarkanthaImg from "@/assets/kedarkantha.jpeg";
import brahmatalImg from "@/assets/brahmatal.jpeg";
import valleyImg from "@/assets/valley-of-flowers.jpeg";
import hamptaImg from "@/assets/hampta-pass.jpg";
import rupinPassImg from "@/assets/rupin-pass.jpg";
import BITSLogo from "@/assets/BITS_Pilani-Logo.png";
import { MessageCircle, FileText } from "lucide-react";

const Index = () => {
  const featuredTreks = [ 
    {
      name: "Kedarkantha",
      image: kedarkanthaImg,
      difficulty: "Easy-Moderate",
      altitude: "12,500 ft",
      location: "Uttarakhand",
    },
    {
      name: "Brahmatal",
      image: brahmatalImg,
      difficulty: "Easy-Moderate",
      altitude: "12,250 ft",
      location: "Uttarakhand",
    },
    {
      name: "Valley of Flowers",
      image: valleyImg,
      difficulty: "Easy-Moderate",
      altitude: "14,100 ft",
      location: "Uttarakhand",
    },
    {
      name: "Hampta Pass",
      image: hamptaImg,
      difficulty: "Moderate",
      altitude: "14,100 ft",
      location: "Himachal Pradesh",
    },
  ];

  const activities = [
    {
      icon: Mountain,
      title: "Himalayan Treks",
      description: "Experience certified multi-day treks across the majestic Himalayas.",
    },
    {
      icon: Compass,
      title: "Campus Hikes",
      description: "Regular weekend hikes around Hyderabad's scenic trails and outcrops.",
    },
    {
      icon: Users,
      title: "Fitness Sessions",
      description: "Structured training programs to build endurance and strength.",
    },
    {
      icon: Award,
      title: "Workshops",
      description: "Learn navigation, first aid, and outdoor survival skills.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[110vh] pt-20 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 hero-overlay" />
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-6 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cream/10 backdrop-blur-sm border border-cream/20 text-cream text-sm font-medium">
              <img 
                src={BITSLogo} 
                alt="BITS Logo" 
                className="w-5 h-5 object-cover rounded-full" 
              />
              BITS Pilani Hyderabad Campus
            </div>
            
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-cream leading-tight">
              Trekking &<br />
              <span className="text-accent">Adventure</span> Society
            </h1>
            
            <p className="text-xl md:text-2xl text-cream/80 font-light max-w-2xl mx-auto">
              Explore. Endure. Evolve.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Link to="/treks">
                <Button variant="hero" size="xl" className="gap-2">
                  View Our Treks
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-cream/40 flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-cream/60 rounded-full" />
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Who We Are
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The Trekking & Adventure Society (TAS) is the official adventure society of BITS Pilani, Hyderabad Campus. 
              We're a community of outdoor enthusiasts dedicated to fostering a culture of trekking, fitness, and 
              responsible adventure among students. Our goal is to help you discover the trekker within.
            </p>
            <Link to="/about">
              <Button variant="outline" className="gap-2 mt-4">
                Learn More About Us
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Upcoming Trek */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <span className="inline-block px-6 py-2.5 rounded-full bg-accent/10 text-accent text-lg font-semibold tracking-wide mb-4">
                UPCOMING TREK
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                Rupin Pass
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="rounded-2xl overflow-hidden card-elevated">
                <img
                  src={rupinPassImg}
                  alt="Rupin Pass Trek"
                  className="w-full aspect-[4/3] object-cover"
                  loading="lazy"
                  width={1024}
                  height={768}
                />
              </div>
              
              <div className="space-y-4">
                <div className="flex flex-wrap gap-3">
                  <span className="badge-difficulty badge-moderate">Moderate-Difficult</span>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Rupin Pass is one of the most stunning crossover treks in India. 
                  Known for its dramatic waterfalls, hanging villages, and snow bridges, this trek offers an unforgettable Himalayan experience.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 text-accent" />
                    Himachal Pradesh
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <TrendingUp className="w-4 h-4 text-accent" />
                    15,250 ft
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 text-accent" />
                    May 23rd - May 28th
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Mountain className="w-4 h-4 text-accent" />
                    6 Days
                  </div>
                  {/* WhatsApp */}
                  <a
                    href="https://chat.whatsapp.com/I7Zrv6AxdeZKONFBc4zObA?mode=gi_t"
                    target="_blank"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent"
                  >
                    <MessageCircle className="w-4 h-4 text-accent" />
                    WhatsApp Group
                  </a>
                  {/* Google Form */}
                  <a
                    href="https://forms.gle/M4UDP2nbBEFsQFjRA"
                    target="_blank"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent"
                  >
                    <FileText className="w-4 h-4 text-accent" />
                    Register Here
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Treks */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-2">
                Featured Treks
              </h2>
              <p className="text-muted-foreground">
                Take a look at some of our previous treks.
              </p>
            </div>
            <Link to="/treks">
              <Button variant="outline" className="gap-2">
                View All Treks
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredTreks.map((trek, index) => (
              <Link
                key={trek.name}
                to="/treks"
                className="group relative overflow-hidden rounded-2xl aspect-[3/4] card-hover"
              >
                <img
                  src={trek.image}
                  alt={trek.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/90 via-forest/20 to-transparent" />
                
                <div className="absolute top-4 left-4">
                  <span className={`badge-difficulty ${
                    trek.difficulty === "Easy" ? "badge-easy" :
                    trek.difficulty === "Moderate" ? "badge-moderate" : "badge-difficult"
                  }`}>
                    {trek.difficulty}
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 text-cream">
                  <h3 className="font-heading font-bold text-xl mb-2">{trek.name}</h3>
                  <div className="flex items-center gap-4 text-sm text-cream/80">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {trek.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" />
                      {trek.altitude}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
