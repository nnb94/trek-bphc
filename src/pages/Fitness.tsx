import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Dumbbell, Timer, Shield, CheckCircle, ArrowRight, AlertCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import forestImg from "@/assets/forest-trek.jpg";

const Fitness = () => {
  const exercises = [
    { name: "Squats", reps: "3 sets of 15", description: "Builds leg strength for uphill climbs" },
    { name: "Lunges", reps: "3 sets of 12 each leg", description: "Improves balance and leg endurance" },
    { name: "Planks", reps: "3 sets of 45 seconds", description: "Core stability for backpack carrying" },
    { name: "Stair Climbing", reps: "20-30 minutes", description: "Best simulation of trekking conditions" },
    { name: "Burpees", reps: "3 sets of 10", description: "Full body conditioning" },
    { name: "Calf Raises", reps: "3 sets of 20", description: "Essential for steep descents" },
  ];

  const weeklyPlan = [
    { week: "Week 1-2", focus: "Foundation", activities: "Light cardio, basic strength training, 2-3 km walks" },
    { week: "Week 3-4", focus: "Build Up", activities: "Increase cardio intensity, add weights, 4-5 km walks with light pack" },
    { week: "Week 5-6", focus: "Endurance", activities: "Long cardio sessions, strength circuits, 6-8 km hikes with pack" },
    { week: "Week 7-8", focus: "Peak Training", activities: "High-intensity intervals, full strength routine, 10+ km hikes" },
  ];

  const safetyTips = [
    "Stay hydrated—drink water regularly, even if you don't feel thirsty",
    "Listen to your body and rest when needed",
    "Acclimatize properly at higher altitudes",
    "Always trek with a buddy or in a group",
    "Inform someone about your trekking plans",
    "Carry a basic first aid kit",
    "Know the signs of altitude sickness",
    "Protect yourself from the sun with sunscreen and headwear",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${forestImg})` }}
        />
        <div className="absolute inset-0 hero-overlay" />
        
        <div className="relative z-10 container mx-auto px-4 text-center pt-20">
          <div className="max-w-3xl mx-auto space-y-6 animate-fade-up">
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-cream">
              Fitness & Preparation
            </h1>
            <p className="text-xl text-cream/80">
              Train smart, trek strong
            </p>
          </div>
        </div>
      </section>

      {/* Why Fitness Matters */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                <Heart className="w-7 h-7 text-accent" />
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                Why Fitness Matters
              </h2>
            </div>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                Trekking in the Himalayas is not just a walk in the park—it's a physical and mental challenge 
                that requires preparation. Proper fitness ensures you can enjoy the beauty around you instead 
                of struggling with every step.
              </p>
              <p>
                A well-prepared trekker is a safe trekker. When your body is conditioned for the demands of 
                high-altitude trekking, you reduce the risk of injury, altitude sickness, and exhaustion. 
                You also become a stronger team member, able to help others when needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Beginner Fitness Plan */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
              <Dumbbell className="w-7 h-7 text-accent" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Beginner Fitness Plan
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Start training 8 weeks before your trek. Focus on building cardio endurance, leg strength, and core stability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-card rounded-2xl p-6 card-elevated text-center">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-2">Cardio</h3>
              <p className="text-muted-foreground text-sm">
                Running, cycling, swimming—anything that gets your heart pumping for 30-45 minutes, 4-5 times a week.
              </p>
            </div>
            <div className="bg-card rounded-2xl p-6 card-elevated text-center">
              <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center mx-auto mb-4">
                <Dumbbell className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-2">Strength</h3>
              <p className="text-muted-foreground text-sm">
                Focus on legs, core, and back. These muscle groups bear the most load during treks.
              </p>
            </div>
            <div className="bg-card rounded-2xl p-6 card-elevated text-center">
              <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center mx-auto mb-4">
                <Timer className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-2">Endurance</h3>
              <p className="text-muted-foreground text-sm">
                Gradually increase walk/hike duration. Aim to comfortably walk 10+ km with a 5-8 kg backpack.
              </p>
            </div>
          </div>

          {/* Exercises */}
          <div className="max-w-4xl mx-auto">
            <h3 className="font-heading font-semibold text-2xl text-foreground mb-6 text-center">
              Recommended Exercises
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {exercises.map((exercise) => (
                <div
                  key={exercise.name}
                  className="bg-card rounded-xl p-4 flex items-start gap-4 card-elevated"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{exercise.name}</h4>
                    <p className="text-sm text-accent font-medium">{exercise.reps}</p>
                    <p className="text-sm text-muted-foreground mt-1">{exercise.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8-Week Timeline */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              8-Week Training Timeline
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A structured approach to get you trek-ready
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border md:left-1/2 md:-translate-x-0.5" />
              
              {weeklyPlan.map((phase, index) => (
                <div
                  key={phase.week}
                  className={`relative flex flex-col md:flex-row gap-4 mb-8 ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full bg-accent -translate-x-1.5 mt-6" />
                  
                  {/* Content */}
                  <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                    <div className="bg-card rounded-xl p-6 card-elevated">
                      <span className="text-accent font-semibold text-sm">{phase.week}</span>
                      <h3 className="font-heading font-bold text-lg text-foreground mt-1 mb-2">
                        {phase.focus}
                      </h3>
                      <p className="text-muted-foreground text-sm">{phase.activities}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Safety & Recovery */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center">
                <Shield className="w-7 h-7 text-accent-foreground" />
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold">
                Safety & Recovery Tips
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {safetyTips.map((tip, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-primary-foreground/5 rounded-xl p-4"
                >
                  <AlertCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-primary-foreground/90 text-sm">{tip}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-primary-foreground/80 mb-6">
                Ready to put your training to the test?
              </p>
              <Link to="/treks">
                <Button variant="hero" size="lg" className="gap-2">
                  Explore Our Treks
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Fitness;
