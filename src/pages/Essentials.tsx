import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Mountain,
  Shirt,
  Glasses,
  Droplet,
  HeartPulse,
  AlertTriangle,
  Lightbulb,
  Backpack,
  Footprints,
  Flashlight,
  Snowflake,
  Sun,
  Hand,
  Pill,
  FileText,
  Package,
  ArrowRight,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import forestImg from "@/assets/forest-trek.jpg";

const Essentials = () => {
  const coreEssentials = [
    {
      icon: Footprints,
      title: "Trekking Shoes",
      detail: "Ankle support, solid grip, water resistance are desirable.",
    },
    {
      icon: Backpack,
      title: "50–60L Backpack",
      detail: "Ensure you have rain cover, padded straps and a hip belt.",
    },
    {
      icon: Snowflake,
      title: "Warm Padded Jacket",
      detail: "Down or synthetic. Should pack small and block wind.",
    },
    {
      icon: Flashlight,
      title: "Headlamp",
      detail: "Hands-free light for early morning summits and campsite use.",
    },
    {
      icon: Mountain,
      title: "Trekking Poles",
      detail: "Save your knees on descents. A pair > a single pole.",
    },
  ];

  const accessories = [
    { icon: Glasses, title: "UV Sunglasses", detail: "Prevents snow blindness at altitude." },
    { icon: Sun, title: "Sun Cap", detail: "Wide brim preferred for neck protection." },
    { icon: Snowflake, title: "Woollen Cap / Balaclava", detail: "Heat escapes from the head — cover it." },
    { icon: Hand, title: "Waterproof Gloves", detail: "Inner fleece + outer waterproof shell." },
    { icon: Footprints, title: "3 Pairs of Socks", detail: "Including one warm woollen pair for camp." },
    { icon: Droplet, title: "Rainwear", detail: "Poncho preferred — covers you and your backpack." },
  ];

  const utility = [
    { title: "Toilet kit", detail: "Travel-size only. Toothbrush, paste, soap, tissues." },
    { title: "Steel lunch box, mug, spoon", detail: "Reusable. No plastic on the mountains." },
    { title: "2L water capacity", detail: "Bottles AND thermos. Hydrate constantly." },
    { title: "Plastic covers", detail: "Waterproof gear inside the bag and segregate wet/dry." },
  ];

  const medical = [
    { icon: Pill, title: "Basic Medication", detail: "Diamox, Dolo 650, ORS, Combiflam, antacids." },
    { icon: HeartPulse, title: "Personal Medical Kit", detail: "Any prescription meds, blister patches, crepe bandage." },
    { icon: FileText, title: "ID Proof", detail: "Original + photocopy. Aadhaar / passport." },
    { icon: FileText, title: "Medical Certificate", detail: "From a registered doctor, signed within 30 days." },
    { icon: FileText, title: "Disclaimer Form", detail: "Filled and signed before departure." },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${forestImg})` }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative z-10 container mx-auto px-4 text-center pt-20">
          <div className="max-w-3xl mx-auto space-y-6 animate-fade-up">
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-cream">
              Himalayan Trek Essentials
            </h1>
            <p className="text-lg md:text-xl text-cream/85 italic max-w-2xl mx-auto">
              Carry only what you need —
              not what you might need.
            </p>
          </div>
        </div>
      </section>

      {/* Section 1: Core Essentials */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <SectionHeader
              number="01"
              icon={Mountain}
              title="Core Essentials"
              subtitle="Non-negotiable. If you skip these, you don't go."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
              {coreEssentials.map((item) => (
                <div
                  key={item.title}
                  className="bg-card rounded-2xl p-6 card-elevated card-hover border border-border"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Section 2: Clothing */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <SectionHeader
              number="02"
              icon={Shirt}
              title="Clothing System"
              subtitle="Master the layering concept. Layer smart, don't overpack."
            />

            <div className="bg-card rounded-2xl p-6 md:p-8 card-elevated mt-10 max-w-2xl mx-auto">
              <ul className="space-y-4">
                <li className="flex items-start gap-4 pb-4 border-b border-border">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Shirt className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Dry-fit T-shirts</h4>
                    <p className="text-sm text-muted-foreground mt-0.5">3 pieces (no cotton — it stays wet)</p>
                  </div>
                </li>

                <li className="flex items-start gap-4 pb-4 border-b border-border">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Shirt className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Trek Pants</h4>
                    <p className="text-sm text-muted-foreground mt-0.5">2 pairs, quick-dry</p>
                  </div>
                </li>

                <li className="flex items-start gap-4 pb-4 border-b border-border">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Shirt className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Fleece Layers</h4>
                    <p className="text-sm text-muted-foreground mt-0.5">Essential for insulation</p>
                  </div>
                </li>

                <li className="flex items-start gap-4 pb-4 border-b border-border">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Shirt className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Sweater</h4>
                    <p className="text-sm text-muted-foreground mt-0.5">Optional extra warmth layer</p>
                  </div>
                </li>

                <li className="flex items-start gap-4 pb-4 border-b border-border">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Shirt className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Padded Jacket</h4>
                    <p className="text-sm text-muted-foreground mt-0.5">Always carry</p>
                  </div>
                </li>

                <li className="flex items-start gap-4 last:pb-0">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Shirt className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Thermals</h4>
                    <p className="text-sm text-muted-foreground mt-0.5">If required (cold treks)</p>
                  </div>
                </li>
              </ul>
            </div>

            <ProTip text="Cotton kills. It absorbs sweat, dries slowly, and can cause hypothermia at altitude. Stick to synthetics." />
          </div>
        </div>
      </section>

      {/* Section 3: Accessories */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <SectionHeader
              number="03"
              icon={Glasses}
              title="Mandatory Accessories"
              subtitle="Small items, big difference."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
              {accessories.map((item) => (
                <div
                  key={item.title}
                  className="bg-card rounded-2xl p-5 border border-border card-hover"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-foreground mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{item.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Utility & Hygiene */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <SectionHeader
              number="04"
              icon={Droplet}
              title="Utility & Hygiene"
              subtitle="Keep it minimal. Every gram counts."
            />

            <div className="bg-card rounded-2xl p-6 md:p-8 card-elevated mt-10">
              <ul className="space-y-4">
                {utility.map((item) => (
                  <li key={item.title} className="flex items-start gap-4 pb-4 border-b border-border last:border-0 last:pb-0">
                    <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Package className="w-4 h-4 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{item.title}</h4>
                      <p className="text-sm text-muted-foreground mt-0.5">{item.detail}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <ProTip text="Carry zip-lock bags. They keep electronics dry, separate dirty clothes, and weigh almost nothing." />
          </div>
        </div>
      </section>

      {/* Section 5: Medical & Documents */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <SectionHeader
              number="05"
              icon={HeartPulse}
              title="Medical & Documents"
              subtitle="DISCLAIMER: This information is for general guidance only and is not a substitute for professional medical advice.
"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
              {medical.map((item) => (
                <div
                  key={item.title}
                  className="bg-card rounded-2xl p-6 border border-border card-hover"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-foreground mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{item.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Golden Rule Highlight */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="w-8 h-8 text-accent-foreground" />
            </div>
            <p className="text-accent font-semibold uppercase tracking-widest text-sm mb-4">
              Golden Rule of Packing
            </p>
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Don't pack for "what if."
              <br />
              Pack for reality.
            </h2>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Every extra item = extra weight = less comfort.
              <br />
              Your back will thank you on Day 3.
            </p>
          </div>
        </div>
      </section>

      {/* Rental note + CTA */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-card rounded-2xl p-8 md:p-10 card-elevated">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Lightbulb className="w-7 h-7 text-accent" />
              </div>
              <div className="flex-1">
                <h3 className="font-heading font-bold text-2xl text-foreground mb-3">
                  First trek? Rent before you buy.
                </h3>
                <p className="text-muted-foreground mb-5 leading-relaxed">
                  Padded jackets, trekking poles, and rain ponchos can all be rented at base camp. Try the gear on a trek before investing in your own.
                </p>
                <Link to="/contact">
                  <Button variant="accent" className="gap-2">
                    Ask us what to rent
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

/* ---------- Helpers ---------- */

const SectionHeader = ({
  number,
  icon: Icon,
  title,
  subtitle,
}: {
  number: string;
  icon: any;
  title: string;
  subtitle: string;
}) => (
  <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 border-b border-border pb-6">
    <div className="flex items-center gap-4">
      <div className="w-14 h-14 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center">
        <Icon className="w-7 h-7" />
      </div>
      <div>
        <span className="text-accent font-semibold text-sm tracking-widest">
          {number}
        </span>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground leading-tight">
          {title}
        </h2>
      </div>
    </div>
    <p className="text-muted-foreground md:text-right md:max-w-xs">{subtitle}</p>
  </div>
);

const ProTip = ({ text }: { text: string }) => (
  <div className="mt-8 flex items-start gap-4 bg-accent/10 border-l-4 border-accent rounded-r-xl p-5">
    <Lightbulb className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
    <div>
      <p className="font-semibold text-foreground text-sm uppercase tracking-wide mb-1">
        Pro Tip
      </p>
      <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
    </div>
  </div>
);

const ChecklistItem = ({ text }: { text: string }) => (
  <li className="flex items-start gap-3 text-muted-foreground">
    <span className="w-5 h-5 rounded border-2 border-accent flex-shrink-0 mt-0.5" />
    <span>{text}</span>
  </li>
);

const SeasonRow = ({
  season,
  layers,
  tone,
}: {
  season: string;
  layers: string;
  tone: string;
}) => (
  <div className="flex items-center justify-between p-3 rounded-lg bg-muted">
    <span className="font-semibold text-foreground">{season}</span>
    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${tone}`}>
      {layers}
    </span>
  </div>
);

export default Essentials;
