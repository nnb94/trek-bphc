import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CheckCircle, Users, Award, Calendar, ArrowRight, HelpCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImg from "@/assets/hero-mountains.jpg";

const Join = () => {
  const benefits = [
    "Access to certified Himalayan treks at subsidized rates",
    "Regular fitness sessions and training programs",
    "Weekend hikes and campus activities",
    "Workshops on navigation, first aid, and outdoor skills",
    "Professional gear access and guidance",
    "Be part of a passionate adventure community",
    "Leadership opportunities within the society",
    "Networking with TAS alumni across the country",
  ];

  const selectionProcess = [
    {
      step: "01",
      title: "Apply During Inductions",
      description: "Watch out for our induction announcements at the start of each semester. Fill out the application form.",
    },
    {
      step: "02",
      title: "Attend the Orientation",
      description: "Learn about TAS, our activities, and what it means to be a member. Ask questions and meet current members.",
    },
    {
      step: "03",
      title: "Interview Round",
      description: "A short interaction to understand your interest in adventure, fitness level, and commitment.",
    },
    {
      step: "04",
      title: "Welcome to TAS!",
      description: "Selected candidates become TAS members and can participate in all our activities and treks.",
    },
  ];

  const faqs = [
    {
      question: "Do I need prior trekking experience to join?",
      answer: "No, prior experience is not required. We welcome beginners and provide training to help you build the necessary skills. All you need is enthusiasm and a willingness to learn.",
    },
    {
      question: "Is trekking with TAS safe?",
      answer: "Safety is our top priority. All our treks are conducted with certified trek leaders, proper safety equipment, and detailed emergency protocols. We also ensure proper acclimatization and fitness assessment before major treks.",
    },
    {
      question: "What is the time commitment?",
      answer: "Regular members are expected to attend fitness sessions (2-3 per week), monthly meetings, and participate in at least one major trek per year. Weekend hikes are optional but encouraged.",
    },
    {
      question: "How much do treks cost?",
      answer: "Trek costs vary depending on the destination and duration. TAS organizes treks at subsidized rates for members. Typically, costs cover travel, accommodation, food, permits, and professional guide fees.",
    },
    {
      question: "Can I join if I'm not physically fit?",
      answer: "Yes! We have a dedicated fitness training program to help you prepare. Many of our members started with minimal fitness and worked their way up. The key is consistency and dedication.",
    },
    {
      question: "When are inductions held?",
      answer: "Inductions are typically held at the beginning of each semester (August/January). Follow our Instagram page and watch for campus announcements.",
    },
    {
      question: "What gear do I need?",
      answer: "For beginners, basic athletic wear and good walking shoes are sufficient. TAS provides guidance on gear and often has rental options for major equipment like sleeping bags and trekking poles.",
    },
    {
      question: "Are there leadership opportunities?",
      answer: "Yes! Active members can grow into trek leaders, training coordinators, media leads, and other positions. We believe in developing leadership skills through hands-on experience.",
    },
  ];

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
              Join TAS
            </h1>
            <p className="text-xl text-cream/80">
              Your adventure begins here
            </p>
          </div>
        </div>
      </section>

      {/* Why Join */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Join TAS?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Joining TAS isn't just about trekking—it's about joining a community of like-minded 
                adventurers who push each other to be better, support each other through challenges, 
                and create memories that last a lifetime.
              </p>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card rounded-2xl p-6 card-elevated text-center">
                <Users className="w-10 h-10 text-accent mx-auto mb-3" />
                <p className="text-3xl font-heading font-bold text-foreground">100+</p>
                <p className="text-muted-foreground text-sm">Active Members</p>
              </div>
              <div className="bg-card rounded-2xl p-6 card-elevated text-center">
                <Award className="w-10 h-10 text-accent mx-auto mb-3" />
                <p className="text-3xl font-heading font-bold text-foreground">15+</p>
                <p className="text-muted-foreground text-sm">Treks Completed</p>
              </div>
              <div className="bg-card rounded-2xl p-6 card-elevated text-center col-span-2">
                <Calendar className="w-10 h-10 text-accent mx-auto mb-3" />
                <p className="text-foreground font-semibold">Next Inductions</p>
                <p className="text-accent font-heading font-bold">January 2025</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Can Join */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
              Who Can Join?
            </h2>
            <p className="text-muted-foreground">
              Any student of BITS Pilani Hyderabad Campus can apply to join TAS. We don't discriminate 
              based on branch, year, or prior experience. All you need is a passion for adventure and 
              the willingness to push your limits.
            </p>
          </div>
        </div>
      </section>

      {/* Selection Process */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Selection Process
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our selection process is designed to find passionate individuals who are ready for the adventure.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {selectionProcess.map((step, index) => (
                <div
                  key={step.step}
                  className="bg-card rounded-2xl p-6 card-elevated relative overflow-hidden"
                >
                  <span className="absolute top-4 right-4 text-6xl font-heading font-bold text-accent/10">
                    {step.step}
                  </span>
                  <div className="relative">
                    <h3 className="font-heading font-semibold text-xl text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
              <HelpCircle className="w-7 h-7 text-accent" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Got questions? We've got answers.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card rounded-xl px-6 border-none card-elevated"
                >
                  <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Follow us on Instagram and stay tuned for our next induction announcements. 
            For any queries, feel free to reach out to us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://instagram.com/tas_bphc"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="hero" size="lg" className="gap-2">
                Follow on Instagram
                <ArrowRight className="w-5 h-5" />
              </Button>
            </a>
            <Link to="/contact">
              <Button variant="hero-outline" size="lg">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Join;
