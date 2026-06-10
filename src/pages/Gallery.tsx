import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { supabase } from "@/integrations/supabase/client";
import kedarkanthaImg from "@/assets/kedarkantha.jpeg";
import kedarkanthaImg1 from "@/assets/kedarkantha/kedarkantha1.jpeg";
import kedarkanthaImg2 from "@/assets/kedarkantha/kedarkantha2.jpeg";
import kedarkanthaImg3 from "@/assets/kedarkantha/kedarkantha3.jpeg";
import kedarkanthaImg4 from "@/assets/kedarkantha/kedarkantha4.jpeg";
import kedarkanthaImg5 from "@/assets/kedarkantha/kedarkantha5.jpeg";
import kedarkanthaImg6 from "@/assets/kedarkantha/kedarkantha6.jpeg";
import brahmatalImg from "@/assets/brahmatal.jpeg";
import brahmatalImg1 from "@/assets/brahmatal/brahmatal1.jpeg";
import brahmatalImg2 from "@/assets/brahmatal/brahmatal2.jpeg";
import brahmatalImg3 from "@/assets/brahmatal/brahmatal3.jpeg";
import brahmatalImg4 from "@/assets/brahmatal/brahmatal4.jpeg";
import brahmatalImg5 from "@/assets/brahmatal/brahmatal5.jpeg";
import brahmatalImg6 from "@/assets/brahmatal/brahmatal6.jpeg";
import brahmatalImg7 from "@/assets/brahmatal/brahmatal7.jpeg";
import brahmatalImg8 from "@/assets/brahmatal/brahmatal8.jpeg";
import brahmatalImg9 from "@/assets/brahmatal/brahmatal9.jpeg";
import brahmatalImg10 from "@/assets/brahmatal/brahmatal10.jpeg";
import valleyImg from "@/assets/valley-of-flowers.jpeg";
import valleyImg1 from "@/assets/valley/valley1.jpg";
import valleyImg2 from "@/assets/valley/valley2.jpg";
import valleyImg3 from "@/assets/valley/valley3.jpg";
import valleyImg4 from "@/assets/valley/valley4.jpg";
import valleyImg5 from "@/assets/valley/valley5.jpg";
import valleyImg6 from "@/assets/valley/valley6.jpg";
import valleyImg7 from "@/assets/valley/valley7.jpeg";
import valleyImg8 from "@/assets/valley/valley8.jpeg";
import valleyImg9 from "@/assets/valley/valley9.jpeg";
import valleyImg10 from "@/assets/valley/valley10.jpeg";
import valleyImg11 from "@/assets/valley/valley11.jpeg";
import valleyImg12 from "@/assets/valley/valley12.jpeg";
import valleyImg13 from "@/assets/valley/valley13.jpeg";
import valleyImg14 from "@/assets/valley/valley14.jpeg";
import valleyImg15 from "@/assets/valley/valley15.jpeg";
import valleyImg16 from "@/assets/valley/valley16.jpeg";
import valleyImg17 from "@/assets/valley/valley17.jpeg";
import valleyImg18 from "@/assets/valley/valley18.jpeg";
import valleyImg19 from "@/assets/valley/valley19.jpeg";
import hamptaImg from "@/assets/hampta-pass.jpg";
import hamptaImg1 from "@/assets/hampta/hampta1.jpg";
import hamptaImg2 from "@/assets/hampta/hampta2.jpg";
import hamptaImg3 from "@/assets/hampta/hampta3.jpg";
import hamptaImg4 from "@/assets/hampta/hampta4.jpg";
import hamptaImg5 from "@/assets/hampta/hampta5.jpg";
import hamptaImg6 from "@/assets/hampta/hampta6.jpg";
import hamptaImg7 from "@/assets/hampta/hampta7.jpg";

import sarPassImg1 from "@/assets/sar/sar4.jpeg";
import sarPassImg2 from "@/assets/sar/sar2.jpeg";
import sarPassImg3 from "@/assets/sar/sar3.jpeg";
import sarPassImg4 from "@/assets/sar/sar1.jpeg";
import sarPassImg5 from "@/assets/sar/sar5.jpeg";
import sarPassImg6 from "@/assets/sar/sar6.jpeg";
import sarPassImg7 from "@/assets/sar/sar7.jpeg";
import sarPassImg8 from "@/assets/sar/sar8.jpeg";
import sarPassImg9 from "@/assets/sar/sar9.jpeg";
import sarPassImg10 from "@/assets/sar/sar10.png";
import kuariImg from "@/assets/kuari-pass.png";
import kuariImg1 from "@/assets/kuari/kuari1.jpg";
import kuariImg2 from "@/assets/kuari/kuari2.jpg";
import kuariImg3 from "@/assets/kuari/kuari3.jpg";
import kuariImg4 from "@/assets/kuari/kuari4.jpg";
import kuariImg5 from "@/assets/kuari/kuari5.jpg";
import bhriguImg from "@/assets/bhrigu-lake.jpeg";
import bhriguImg1 from "@/assets/bhrigu/bhrigu1.jpeg";
import bhriguImg2 from "@/assets/bhrigu/bhrigu2.jpeg";
import bhriguImg3 from "@/assets/bhrigu/bhrigu3.jpeg";
import bhriguImg4 from "@/assets/bhrigu/bhrigu4.jpeg";
import bhriguImg5 from "@/assets/bhrigu/bhrigu5.jpeg";
import bhriguImg6 from "@/assets/bhrigu/bhrigu6.jpeg";
import bhriguImg7 from "@/assets/bhrigu/bhrigu7.jpeg";
import bhriguImg8 from "@/assets/bhrigu/bhrigu8.jpeg";

interface TrekGallery {
  name: string;
  images: Array<{
    src: string;
    alt: string;
  }>;
}

const trekGalleries: TrekGallery[] = [
  {
    name: "Kedarkantha",
    images: [
      { src: kedarkanthaImg, alt: "Kedarkantha Summit Push" },
      { src: kedarkanthaImg1, alt: "Juda Ka Talaab" },
      { src: kedarkanthaImg2, alt: "View from Hargaon Camp" },
      { src: kedarkanthaImg3, alt: "Snow-filled route before summit" },
      { src: kedarkanthaImg4, alt: "Kedarkantha Summit Push" },
      { src: kedarkanthaImg5, alt: "Trees covered with snow" },
      { src: kedarkanthaImg6, alt: "Inside the tents" }
    ],
  },
  {
    name: "Kuari Pass",
    images: [{ src: kuariImg, alt: "Kuari Pass summit" },
            { src: kuariImg1, alt: "Kuari Pass summit" },
            { src: kuariImg2, alt: "Kuari Pass summit" },
            { src: kuariImg3, alt: "Kuari Pass summit" },
            { src: kuariImg4, alt: "Kuari Pass summit" },
            { src: kuariImg5, alt: "Kuari Pass summit" },
    ],
  },
  {
    name: "Bhrigu Lake",
    images: [
      { src: bhriguImg, alt: "Bhrigu Lake" },
      { src: bhriguImg1, alt: "Snow at the top" },
      { src: bhriguImg2, alt: "Stream before the suummit" },
      { src: bhriguImg3, alt: "Flowers" },
      { src: bhriguImg4, alt: "Meadows" },
      { src: bhriguImg5, alt: "View from the meadows" },
      { src: bhriguImg6, alt: "View from the meadows" },
      { src: bhriguImg7, alt: "View from the meadows" },
      { src: bhriguImg8, alt: "View near the summit" }
    ],
  },
  {
    name: "Valley of Flowers",
    images: [{ src: valleyImg, alt: "Valley of Flowers" },
              { src: valleyImg1, alt: "Valley of Flowers" },
              { src: valleyImg2, alt: "Valley of Flowers" },
              { src: valleyImg3, alt: "Valley of Flowers" },
              { src: valleyImg4, alt: "Khunt Khal Glacier" },
              { src: valleyImg5, alt: "Waterfall enroute to Hemkund" },
              { src: valleyImg6, alt: "View from the route to Hemkund" },
              { src: valleyImg7, alt: "Valley of Flowers Map" },
              { src: valleyImg8, alt: "Flowers in the valley" },
              { src: valleyImg9, alt: "Flowers in the valley" },
              { src: valleyImg10, alt: "Flowers in the valley" },
              { src: valleyImg11, alt: "Flowers in the valley" },
              { src: valleyImg12, alt: "Flowers in the valley" },
              { src: valleyImg13, alt: "Flowers in the valley" },
              { src: valleyImg14, alt: "Flowers in the valley" },
              { src: valleyImg15, alt: "Flowers in the valley" },
              { src: valleyImg16, alt: "Flowers in the valley" },
              { src: valleyImg17, alt: "Flowers in the valley" },
              { src: valleyImg18, alt: "Hemkund Lake" },
              { src: valleyImg19, alt: "Hemkund Sahib Gurudwara" },
    ],
  },
  {
    name: "Hampta Pass",
    images: [{ src: hamptaImg, alt: "Hampta Pass" },
            { src: hamptaImg1, alt: "Hampta Pass" },
            { src: hamptaImg2, alt: "Briefing" },
            { src: hamptaImg3, alt: "Tents" },
            { src: hamptaImg4, alt: "Hampta Pass crossing" },
            { src: hamptaImg5, alt: "Stream" },
            { src: hamptaImg6, alt: "Hampta Pass summit" },
            { src: hamptaImg7, alt: "Meadows" },
    ],
  },
  {
    name: "Brahmatal",
    images: [{ src: brahmatalImg, alt: "Brahmatal view" },
      { src: brahmatalImg1, alt: "Snow" },
      { src: brahmatalImg2, alt: "Brahmatal trek route" },
      { src: brahmatalImg3, alt: "Brahmatal campsite" },
      { src: brahmatalImg4, alt: "Brahmatal campsite" },
      { src: brahmatalImg5, alt: "Brahmatal view" },
      { src: brahmatalImg6, alt: "Brahmatal view" },
      { src: brahmatalImg7, alt: "Brahmatal view" },
      { src: brahmatalImg8, alt: "Brahmatal view" },
      { src: brahmatalImg9, alt: "Brahmatal summit area" },
      { src: brahmatalImg10, alt: "Brahmatal trek route" },
    ],
  },
  {
    name: "Sar Pass",
    images: [
            { src: sarPassImg1, alt: "Sar Pass" },
            { src: sarPassImg2, alt: "Furball" },
            { src: sarPassImg3, alt: "Sar Pass view" },
            { src: sarPassImg4, alt: "Sar Pass view" },
            { src: sarPassImg5, alt: "Sar Pass view" },
            { src: sarPassImg6, alt: "Sar Pass meadows" },
            { src: sarPassImg7, alt: "Sar Pass campsite" },
            { src: sarPassImg8, alt: "Sar Pass campsite" },
            { src: sarPassImg9, alt: "Sar Pass meadows" },
            { src: sarPassImg10, alt: "Sar Pass view" },
    ],
  },
];

const Gallery = () => {
  const [openSections, setOpenSections] = useState<boolean[]>(
    () => trekGalleries.map(() => false)
  );
  const [lightboxImage, setLightboxImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);
  const [dynamicGalleries, setDynamicGalleries] = useState<TrekGallery[]>([]);

  useEffect(() => {
    (async () => {
      const { data } = await supabase
        .from("gallery_photos")
        .select("trek_name, image_url, caption, storage_path")
        .order("created_at", { ascending: false });
      if (!data) return;
      const grouped = new Map<string, Array<{ src: string; alt: string }>>();
      for (const p of data) {
        let src = p.image_url;
        if (p.storage_path) {
          const { data: signed } = await supabase.storage.from("gallery").createSignedUrl(p.storage_path, 60 * 60);
          if (signed?.signedUrl) src = signed.signedUrl;
        }
        const key = p.trek_name;
        if (!grouped.has(key)) grouped.set(key, []);
        grouped.get(key)!.push({ src, alt: p.caption ?? p.trek_name });
      }
      setDynamicGalleries(Array.from(grouped.entries()).map(([name, images]) => ({ name, images })));
    })();
  }, []);

  const allGalleries = [...dynamicGalleries, ...trekGalleries];

  useEffect(() => {
    setOpenSections((prev) => {
      if (prev.length === allGalleries.length) return prev;
      return allGalleries.map((_, i) => prev[i] ?? false);
    });
  }, [allGalleries.length]);

  const toggleSection = (index: number) => {
    setOpenSections((prev) => {
      const next = [...prev];
      next[index] = !next[index];
      return next;
    });
  };

  const openLightbox = (image: { src: string; alt: string }) => {
    setLightboxImage(image);
  };

  const closeLightbox = () => setLightboxImage(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeLightbox();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-[#dfc9b0] dark:bg-[#3b2f23]">
      <Navbar />

      {/* Gallery Sections */}
      <section className="section-padding bg-transparent">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-forest dark:text-cream mb-12 text-center">
            Trek Galleries
          </h1>

          <div className="space-y-16">
            {allGalleries.map((trek, index) => {
              const isOpen = openSections[index];

              return (
                <div key={index} className="relative">
                  <button
                    type="button"
                    onClick={() => toggleSection(index)}
                    className="flex w-full items-center justify-start gap-3 text-left mb-8"
                  >
                    <h2 className="text-3xl font-bold text-forest dark:text-cream">
                      {trek.name}
                    </h2>
                    <span className="text-3xl text-forest dark:text-cream">
                      {isOpen ? "–" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
                      {trek.images.map((image, imageIndex) => (
                        <div
                          key={imageIndex}
                          onClick={() => openLightbox(image)}
                          role="button"
                          tabIndex={0}
                          className="break-inside-avoid group relative cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-forest/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="absolute bottom-4 left-4 right-4">
                              <p className="text-cream text-sm font-medium">
                                {image.alt}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {index < allGalleries.length - 1 && (
                    <div className="mt-16 h-px bg-gradient-to-r from-transparent via-forest/30 to-transparent dark:via-cream/30"></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={closeLightbox}
        >
          <div
            className="relative flex flex-col items-center justify-center max-h-[90vh] max-w-[90vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeLightbox}
              className="absolute right-2 top-2 rounded-full bg-black/60 px-3 py-1 text-xl font-semibold text-white hover:bg-black"
            >
              ✕
            </button>
            <img
              src={lightboxImage.src}
              alt={lightboxImage.alt}
              className="max-h-[80vh] max-w-[90vw] w-auto h-auto rounded-lg object-contain"
            />
            <p className="mt-2 text-center text-sm text-cream">
              {lightboxImage.alt}
            </p>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Gallery;
