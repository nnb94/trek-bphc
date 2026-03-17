import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Target, Eye, Heart, Shield, Users, Leaf, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import forestImg from "@/assets/forest-trek.jpg";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Safety First",
      description: "Every adventure begins with proper preparation and risk assessment.",
    },
    {
      icon: Users,
      title: "Teamwork",
      description: "We believe in the power of collective effort and mutual support.",
    },
    {
      icon: Heart,
      title: "Discipline",
      description: "Consistent training and responsible conduct are our foundations.",
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description: "We leave no trace and respect every environment we explore.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${forestImg})` }}
        />
        <div className="absolute inset-0 hero-overlay" />
        
        <div className="relative z-10 container mx-auto px-4 text-center pt-20">
          <div className="max-w-3xl mx-auto space-y-6 animate-fade-up">
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-cream">
              About TAS
            </h1>
            <p className="text-xl text-cream/80">
              Building resilient trekkers, one mountain at a time
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8">
              Who We Are
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p>
                The <strong className="text-foreground">Trekking & Adventure Society (TAS)</strong> is the official 
                adventure society of BITS Pilani, Hyderabad Campus. Founded with a vision to promote outdoor 
                activities, physical fitness, and a spirit of adventure among students, TAS has grown into 
                one of the most active societies on campus.
              </p>
              <p>
                We organize a wide range of activities throughout the year, including treks and other adventure activities as well. Our programs 
                are designed to be inclusive, welcoming beginners while also challenging experienced trekkers.
              </p>
              <p>
                Beyond the mountains, TAS is about building character. We believe that the lessons learned 
                on the trail—perseverance, teamwork, self-reliance, and respect for nature—translate into 
                every aspect of life. We don't just become better trekkers; we become better individuals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card rounded-2xl p-8 card-elevated">
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                Our Mission
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To build resilient, responsible, and skilled trekkers by providing structured training, 
                safe expeditions, and a supportive community that encourages personal growth through 
                outdoor adventures.
              </p>
            </div>
            
            <div className="bg-card rounded-2xl p-8 card-elevated">
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                Our Vision
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To make adventure accessible and safe for every student at BPHC, fostering a campus 
                culture where physical fitness, environmental responsibility, and the spirit of 
                exploration are celebrated values.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do, from planning expeditions to training new members.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="text-center p-6 rounded-2xl border border-border hover:border-accent/30 transition-colors"
              >
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
