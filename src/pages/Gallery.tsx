import { useState } from "react";
import { X } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import kedarkanthaImg from "@/assets/kedarkantha.jpeg";
import brahmatalImg from "@/assets/brahmatal.jpg";
import valleyImg from "@/assets/valley-of-flowers.jpeg";
import hamptaImg from "@/assets/hampta-pass.jpg";
import sarPassImg from "@/assets/sar-pass.jpg";
import kuariImg from "@/assets/kuari-pass.jpg";
import bhriguImg from "@/assets/bhrigu-lake.jpeg";

interface GalleryImage {
  src: string;
  alt: string;
}

const galleryImages: GalleryImage[] = [
  { src: kedarkanthaImg, alt: "Kedarkantha summit" },
  { src: brahmatalImg, alt: "Brahmatal frozen lake" },
  { src: valleyImg, alt: "Valley of Flowers" },
  { src: hamptaImg, alt: "Hampta Pass crossing" },
  { src: sarPassImg, alt: "Sar Pass meadows" },
  { src: kuariImg, alt: "Kuari Pass panorama" },
  { src: bhriguImg, alt: "Bhrigu Lake" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <div className="min-h-screen bg-[#dfc9b0] dark:bg-[#3b2f23]">
      <Navbar />

      {/* Gallery Grid */}
      <section className="section-padding bg-transparent">
        <div className="container mx-auto px-4">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {galleryImages.map((image, index) => (
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
                    <p className="text-cream text-sm">{image.alt}</p>
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
              <p className="text-cream">{selectedImage.alt}</p>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Gallery;
