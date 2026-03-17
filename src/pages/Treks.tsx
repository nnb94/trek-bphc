import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, TrendingUp, Clock, Calendar, Mountain, ChevronRight, X } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImg from "@/assets/hero-mountains.jpg";
import kedarkanthaImg from "@/assets/kedarkantha.jpeg";
import brahmatalImg from "@/assets/brahmatal.jpg";
import valleyImg from "@/assets/valley-of-flowers.jpeg";
import hamptaImg from "@/assets/hampta-pass.jpg";
import sarPassImg from "@/assets/sar-pass.jpg";
import kuariImg from "@/assets/kuari-pass.jpg";
import bhriguImg from "@/assets/bhrigu-lake.jpeg";

interface Trek {
  id: string;
  name: string;
  image: string;
  location: string;
  difficulty: "Easy" | "Moderate" | "Difficult";
  altitude: string;
  duration: string;
  season: string;
  description: string;
  highlights: string[];
  fitnessLevel: string;
  yearConducted?: string;
}

const treks: Trek[] = [
  {
    id: "kedarkantha",
    name: "Kedarkantha",
    image: kedarkanthaImg,
    location: "Uttarakhand",
    difficulty: "Moderate",
    altitude: "12,500 ft",
    duration: "6 Days",
    season: "Dec - Apr",
    description: "Kedarkantha is one of the most popular winter treks in India, offering stunning views of snow-capped Himalayan peaks. The trek takes you through beautiful pine forests, quaint villages, and pristine campsites before the summit push.",
    highlights: ["360° summit views", "Snow camping", "Pine forests", "Village trails"],
    fitnessLevel: "Moderate fitness required. Should be able to walk 6-8 km per day with a backpack.",
    yearConducted: "2023, 2024",
  },
  {
    id: "brahmatal",
    name: "Brahmatal",
    image: brahmatalImg,
    location: "Uttarakhand",
    difficulty: "Moderate",
    altitude: "12,250 ft",
    duration: "6 Days",
    season: "Dec - Mar",
    description: "Brahmatal offers spectacular views of Mt. Trishul and Mt. Nanda Ghunti. The frozen Brahmatal lake at the summit is a mesmerizing sight, making this one of the most scenic winter treks.",
    highlights: ["Frozen lake", "Mt. Trishul views", "Alpine meadows", "Pristine snow trails"],
    fitnessLevel: "Moderate fitness required. Regular cardio training recommended.",
    yearConducted: "2024",
  },
  {
    id: "valley-of-flowers",
    name: "Valley of Flowers",
    image: valleyImg,
    location: "Uttarakhand",
    difficulty: "Easy",
    altitude: "14,100 ft",
    duration: "6 Days",
    season: "Jul - Sep",
    description: "A UNESCO World Heritage Site, the Valley of Flowers is a botanical paradise with over 600 species of flowering plants. Combined with the spiritual Hemkund Sahib, this trek is a visual and cultural feast.",
    highlights: ["UNESCO World Heritage", "600+ flower species", "Hemkund Sahib", "Gentle trails"],
    fitnessLevel: "Beginner friendly. Basic fitness sufficient.",
    yearConducted: "2023",
  },
  {
    id: "hampta-pass",
    name: "Hampta Pass",
    image: hamptaImg,
    location: "Himachal Pradesh",
    difficulty: "Moderate",
    altitude: "14,100 ft",
    duration: "5 Days",
    season: "Jun - Oct",
    description: "Hampta Pass is known for its dramatic landscape transition—from the lush green Kullu valley to the barren Spiti desert. The river crossings and the stunning Chandratal lake make this trek unforgettable.",
    highlights: ["Landscape contrast", "River crossings", "Chandratal lake", "Dramatic views"],
    fitnessLevel: "Moderate fitness. River crossing experience helpful but not required.",
    yearConducted: "2024",
  },
  {
    id: "sar-pass",
    name: "Sar Pass",
    image: sarPassImg,
    location: "Himachal Pradesh",
    difficulty: "Moderate",
    altitude: "13,800 ft",
    duration: "5 Days",
    season: "Apr - Jun, Sep - Nov",
    description: "Sar Pass takes you through dense forests of pine and oak, open meadows, and offers the unique experience of snow sliding. The trek provides excellent views of the Parvati valley.",
    highlights: ["Snow sliding", "Pine forests", "Parvati valley views", "Scenic meadows"],
    fitnessLevel: "Moderate fitness required. Snow experience is a plus.",
  },
  {
    id: "kuari-pass",
    name: "Kuari Pass",
    image: kuariImg,
    location: "Uttarakhand",
    difficulty: "Moderate",
    altitude: "12,516 ft",
    duration: "6 Days",
    season: "Mar - Jun, Sep - Nov",
    description: "Also known as the Curzon Trail, Kuari Pass offers panoramic views of major Himalayan peaks including Nanda Devi, Dronagiri, and Kamet. The trek passes through pristine oak and rhododendron forests.",
    highlights: ["Nanda Devi views", "Curzon Trail", "Oak forests", "Rhododendron blooms"],
    fitnessLevel: "Moderate fitness. Good for first-time Himalayan trekkers.",
  },
  {
    id: "bhrigu-lake",
    name: "Bhrigu Lake",
    image: bhriguImg,
    location: "Himachal Pradesh",
    difficulty: "Moderate",
    altitude: "14,100 ft",
    duration: "4 Days",
    season: "May - Oct",
    description: "Bhrigu Lake is a high-altitude glacial lake associated with the sage Bhrigu. The trek offers stunning views of the Pir Panjal range and the pristine blue-green waters of the sacred lake.",
    highlights: ["Sacred lake", "Pir Panjal views", "Short duration", "Glacial landscape"],
    fitnessLevel: "Moderate to good fitness. Steep sections require stamina.",
    yearConducted: "2023",
  },
];

const Treks = () => {
  const [selectedTrek, setSelectedTrek] = useState<Trek | null>(null);
  const [filter, setFilter] = useState<string>("all");

  const filteredTreks = filter === "all" 
    ? treks 
    : treks.filter(trek => trek.difficulty === filter);

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
              Our Treks
            </h1>
            <p className="text-xl text-cream/80">
              Discover the Himalayas with TAS
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-muted border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="text-sm text-muted-foreground mr-2">Filter by difficulty:</span>
            {["all", "Easy", "Moderate", "Difficult"].map((option) => (
              <button
                key={option}
                onClick={() => setFilter(option)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  filter === option
                    ? "bg-primary text-primary-foreground"
                    : "bg-background text-muted-foreground hover:text-foreground"
                }`}
              >
                {option === "all" ? "All Treks" : option}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Trek Grid */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTreks.map((trek) => (
              <div
                key={trek.id}
                className="bg-card rounded-2xl overflow-hidden card-elevated card-hover cursor-pointer"
                onClick={() => setSelectedTrek(trek)}
              >
                <div className="relative aspect-[4/3]">
                  <img
                    src={trek.image}
                    alt={trek.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`badge-difficulty ${
                      trek.difficulty === "Easy" ? "badge-easy" :
                      trek.difficulty === "Moderate" ? "badge-moderate" : "badge-difficult"
                    }`}>
                      {trek.difficulty}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-heading font-bold text-xl text-foreground mb-3">
                    {trek.name}
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 text-accent" />
                      {trek.location}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <TrendingUp className="w-4 h-4 text-accent" />
                      {trek.altitude}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 text-accent" />
                      {trek.duration}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 text-accent" />
                      {trek.season}
                    </div>
                  </div>
                  
                  <button className="flex items-center gap-2 text-accent font-medium text-sm hover:gap-3 transition-all">
                    View Details
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trek Detail Modal */}
      {selectedTrek && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/50 backdrop-blur-sm">
          <div className="bg-card rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto card-elevated">
            <div className="relative aspect-video">
              <img
                src={selectedTrek.image}
                alt={selectedTrek.name}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedTrek(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-foreground/50 backdrop-blur-sm flex items-center justify-center text-cream hover:bg-foreground/70 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-4">
                <span className={`badge-difficulty ${
                  selectedTrek.difficulty === "Easy" ? "badge-easy" :
                  selectedTrek.difficulty === "Moderate" ? "badge-moderate" : "badge-difficult"
                }`}>
                  {selectedTrek.difficulty}
                </span>
              </div>
            </div>
            
            <div className="p-8">
              <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
                {selectedTrek.name}
              </h2>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-muted rounded-xl p-4 text-center">
                  <MapPin className="w-5 h-5 text-accent mx-auto mb-2" />
                  <p className="text-xs text-muted-foreground">Location</p>
                  <p className="font-semibold text-foreground">{selectedTrek.location}</p>
                </div>
                <div className="bg-muted rounded-xl p-4 text-center">
                  <TrendingUp className="w-5 h-5 text-accent mx-auto mb-2" />
                  <p className="text-xs text-muted-foreground">Max Altitude</p>
                  <p className="font-semibold text-foreground">{selectedTrek.altitude}</p>
                </div>
                <div className="bg-muted rounded-xl p-4 text-center">
                  <Clock className="w-5 h-5 text-accent mx-auto mb-2" />
                  <p className="text-xs text-muted-foreground">Duration</p>
                  <p className="font-semibold text-foreground">{selectedTrek.duration}</p>
                </div>
                <div className="bg-muted rounded-xl p-4 text-center">
                  <Calendar className="w-5 h-5 text-accent mx-auto mb-2" />
                  <p className="text-xs text-muted-foreground">Best Season</p>
                  <p className="font-semibold text-foreground">{selectedTrek.season}</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                    Description
                  </h3>
                  <p className="text-muted-foreground">
                    {selectedTrek.description}
                  </p>
                </div>
                
                <div>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                    Highlights
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedTrek.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                    Fitness Requirements
                  </h3>
                  <p className="text-muted-foreground">
                    {selectedTrek.fitnessLevel}
                  </p>
                </div>
                
                {selectedTrek.yearConducted && (
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                      Conducted by TAS
                    </h3>
                    <p className="text-muted-foreground">
                      {selectedTrek.yearConducted}
                    </p>
                  </div>
                )}
              </div>
              
              <div className="mt-8 flex gap-4">
                <Link to="/fitness" className="flex-1">
                  <Button variant="outline" className="w-full">
                    Fitness Guide
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Treks;
