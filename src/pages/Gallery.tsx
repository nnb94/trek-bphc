import { useState } from "react";
import { X } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImg from "@/assets/hero-mountains.jpg";
import kedarkanthaImg from "@/assets/kedarkantha.jpg";
import brahmatalImg from "@/assets/brahmatal.jpg";
import valleyImg from "@/assets/valley-of-flowers.jpg";
import hamptaImg from "@/assets/hampta-pass.jpg";
import sarPassImg from "@/assets/sar-pass.jpg";
import kuariImg from "@/assets/kuari-pass.jpg";
import bhriguImg from "@/assets/bhrigu-lake.jpg";
import forestImg from "@/assets/forest-trek.jpg";

interface GalleryImage {
  src: string;
  alt: string;
  category: "Treks" | "Training" | "Campus";
}

const galleryImages: GalleryImage[] = [
  { src: heroImg, alt: "Himalayan trek group", category: "Treks" },
  { src: kedarkanthaImg, alt: "Kedarkantha summit", category: "Treks" },
  { src: brahmatalImg, alt: "Brahmatal frozen lake", category: "Treks" },
  { src: valleyImg, alt: "Valley of Flowers", category: "Treks" },
  { src: hamptaImg, alt: "Hampta Pass crossing", category: "Treks" },
  { src: sarPassImg, alt: "Sar Pass meadows", category: "Treks" },
  { src: kuariImg, alt: "Kuari Pass panorama", category: "Treks" },
  { src: bhriguImg, alt: "Bhrigu Lake", category: "Treks" },
  { src: forestImg, alt: "Forest trail training", category: "Training" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [filter, setFilter] = useState<string>("all");

  const filteredImages = filter === "all"
    ? galleryImages
    : galleryImages.filter(img => img.category === filter);

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
              Gallery
            </h1>
            <p className="text-xl text-cream/80">
              Moments from our adventures
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-muted border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {["all", "Treks", "Training", "Campus"].map((option) => (
              <button
                key={option}
                onClick={() => setFilter(option)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  filter === option
                    ? "bg-primary text-primary-foreground"
                    : "bg-background text-muted-foreground hover:text-foreground"
                }`}
              >
                {option === "all" ? "All Photos" : option}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="break-inside-avoid cursor-pointer group relative overflow-hidden rounded-xl"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="px-3 py-1 rounded-full bg-accent/90 text-accent-foreground text-xs font-medium">
                      {image.category}
                    </span>
                    <p className="text-cream text-sm mt-2">{image.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/90 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-cream/10 backdrop-blur-sm flex items-center justify-center text-cream hover:bg-cream/20 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div
            className="max-w-5xl max-h-[90vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-foreground/80 to-transparent rounded-b-lg">
              <span className="px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-medium">
                {selectedImage.category}
              </span>
              <p className="text-cream mt-2">{selectedImage.alt}</p>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Gallery;
