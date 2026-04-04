import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImg from "@/assets/hero-mountains.jpg";
import nirvanPhoto from "@/assets/team/nirvan.jpeg";
import vishPhoto from "@/assets/team/vishesh.jpeg";
import bhavitPhoto from "@/assets/team/bhavit.jpeg";
import defaultPhoto from "@/assets/team/default.avif";
import brundaPhoto from "@/assets/team/brunda.jpeg";
import nishantPhoto from "@/assets/team/nishant.jpeg";
import saumPhoto from "@/assets/team/saum.jpeg";
import kanishkPhoto from "@/assets/team/kanishk.jpeg";
import ojasviPhoto from "@/assets/team/ojasvi.jpeg";
import mihirPhoto from "@/assets/team/mihir.jpeg";
import arnavPhoto from "@/assets/team/arnav.jpeg";
import harshPhoto from "@/assets/team/harsh.jpeg";
import paramPhoto from "@/assets/team/param.jpeg";
import vaishnaviPhoto from "@/assets/team/vaishnavi.jpeg";

interface TeamMember {
  name: string;
  role: string;
  team?: string;
  photo: string;
}


const coreTeam: TeamMember[] = [
  { name: "Harshvardhan Mundada", role: "President", photo: harshPhoto },
  { name: "Nirvan Bhagabati", role: "Trek Leader", photo: nirvanPhoto },
  { name: "Vishesh Agarwal", role: "Trek Leader", photo: vishPhoto },
  { name: "Param Patel", role: "Media Head", photo: paramPhoto },
];

const managementTeam: TeamMember[] = [
  { name: "Bhavit Bansal", role: "Management ", photo: bhavitPhoto },
  { name: "Brunda SK", role: "Management", photo: brundaPhoto },
  { name: "Nishant Maggirwar", role: "Management", photo: nishantPhoto },
  { name: "Amogh Soma", role: "Management", photo: defaultPhoto },
  { name: "Suryanath A", role: "Video Editing", photo: defaultPhoto },
  { name: "Saum Abeer Khan", role: "Management", photo: saumPhoto },
  { name: "Kanishk Daga", role: "Management", photo: kanishkPhoto },
  { name: "Ojasvi Cheruku", role: "Management", photo: ojasviPhoto },
  { name: "Mihir Kumar", role: "Design", photo: mihirPhoto },
  { name: "Arnav Tuknait", role: "Management", photo: arnavPhoto },
  { name: "Pasumarthi Vaishnavi", role: "Management", photo: vaishnaviPhoto },
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
              PoRs
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
                <div className="w-40 h-40 rounded-2xl overflow-hidden bg-muted flex items-center justify-center mx-auto mb-4">
                  <img
                    src={member.photo}
                    alt={`${member.name} photo`}
                    className="w-full h-full object-cover"
                  />
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
              Team Members
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
                <div className="w-32 h-32 rounded-xl overflow-hidden bg-muted flex items-center justify-center mx-auto mb-4">
                  <img
                    src={member.photo}
                    alt={`${member.name} photo`}
                    className="w-full h-full object-cover"
                  />
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
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;
