import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { User, Crown, Mountain, Camera, Package, Megaphone, Dumbbell } from "lucide-react";
import heroImg from "@/assets/hero-mountains.jpg";

interface TeamMember {
  name: string;
  role: string;
  team?: string;
  icon: React.ElementType;
}

const coreTeam: TeamMember[] = [
  { name: "President", role: "President", icon: Crown },
  { name: "Trek Lead 1", role: "Trek Leader", icon: Mountain },
  { name: "Trek Lead 2", role: "Trek Leader", icon: Mountain },
  { name: "Media Head", role: "Media Head", icon: Camera },
];

const managementTeam: TeamMember[] = [
  { name: "Logistics Lead", role: "Logistics", team: "Management", icon: Package },
  { name: "Training Lead", role: "Training", team: "Management", icon: Dumbbell },
  { name: "Media Coordinator", role: "Media", team: "Management", icon: Camera },
  { name: "Outreach Lead", role: "Outreach", team: "Management", icon: Megaphone },
];

const Team = () => {
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
              Our Team
            </h1>
            <p className="text-xl text-cream/80">
              The people behind your adventures
            </p>
          </div>
        </div>
      </section>

      {/* Core Team */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Core Team
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our leadership team ensures every trek is safe, well-organized, and unforgettable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {coreTeam.map((member, index) => (
              <div
                key={member.role + index}
                className="bg-card rounded-2xl p-6 text-center card-elevated card-hover"
              >
                <div className="w-24 h-24 rounded-2xl bg-muted flex items-center justify-center mx-auto mb-4">
                  <member.icon className="w-10 h-10 text-accent" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-accent font-medium text-sm">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Management Team */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Management Team
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Behind every successful trek is a dedicated team handling logistics, training, media, and outreach.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {managementTeam.map((member, index) => (
              <div
                key={member.role + index}
                className="bg-card rounded-2xl p-6 text-center card-elevated card-hover"
              >
                <div className="w-20 h-20 rounded-xl bg-muted flex items-center justify-center mx-auto mb-4">
                  <member.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-accent font-medium text-sm">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join the Team */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Want to be part of TAS?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            We're always looking for passionate individuals to join our team. Whether you want to lead treks, 
            manage logistics, or capture memories through media—there's a place for you in TAS.
          </p>
          <a href="/join" className="inline-flex">
            <button className="px-8 py-4 bg-accent text-accent-foreground rounded-lg font-heading font-semibold hover:bg-accent/90 transition-colors">
              Apply to Join TAS
            </button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;
