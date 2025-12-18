import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Mountain, Users, Award, Compass, ArrowRight, MapPin, TrendingUp, Calendar } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-mountains.jpg";
import kedarkanthaImg from "@/assets/kedarkantha.jpg";
import brahmatalImg from "@/assets/brahmatal.jpg";
import valleyImg from "@/assets/valley-of-flowers.jpg";
import hamptaImg from "@/assets/hampta-pass.jpg";

const Index = () => {
  const featuredTreks = [
    {
      name: "Kedarkantha",
      image: kedarkanthaImg,
      difficulty: "Moderate",
      altitude: "12,500 ft",
      location: "Uttarakhand",
    },
    {
      name: "Brahmatal",
      image: brahmatalImg,
      difficulty: "Moderate",
      altitude: "12,250 ft",
      location: "Uttarakhand",
    },
    {
      name: "Valley of Flowers",
      image: valleyImg,
      difficulty: "Easy",
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

  const benefits = [
    "Build physical and mental resilience",
    "Develop leadership & teamwork skills",
    "Experience certified Himalayan treks",
    "Join a passionate alumni network",
    "Access professional gear & guidance",
    "Create lifelong memories",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 hero-overlay" />
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-6 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cream/10 backdrop-blur-sm border border-cream/20 text-cream text-sm font-medium">
              <Mountain className="w-4 h-4" />
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
              <Link to="/join">
                <Button variant="hero-outline" size="xl">
                  Join TAS
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
              The Trekking & Adventure Society (TAS) is the official adventure club of BITS Pilani, Hyderabad Campus. 
              We're a community of outdoor enthusiasts dedicated to fostering a culture of trekking, fitness, and 
              responsible adventure among students. From local weekend hikes to certified Himalayan expeditions, 
              we help you discover the trekker within.
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

      {/* What We Do */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              What We Do
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From challenging Himalayan expeditions to skill-building workshops, we offer diverse experiences for every adventure seeker.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {activities.map((activity, index) => (
              <div
                key={activity.title}
                className="bg-card rounded-2xl p-6 card-elevated card-hover"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <activity.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  {activity.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {activity.description}
                </p>
              </div>
            ))}
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
                Discover the adventures that await you
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

      {/* Why Join TAS */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Why Join TAS?
              </h2>
              <p className="text-primary-foreground/80 text-lg mb-8">
                Being part of TAS is more than just trekking—it's about personal growth, 
                building lasting friendships, and pushing your limits in the great outdoors.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-accent-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-primary-foreground/90">{benefit}</span>
                  </li>
                ))}
              </ul>
              <Link to="/join" className="inline-block mt-8">
                <Button variant="hero" size="lg" className="gap-2">
                  Become a Member
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden card-elevated">
                <img
                  src={kedarkanthaImg}
                  alt="TAS members on a trek"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-accent rounded-2xl p-6 card-elevated">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent-foreground/20 flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <p className="text-accent-foreground/70 text-sm">Next Trek</p>
                    <p className="text-accent-foreground font-heading font-bold">Winter 2025</p>
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

export default Index;
