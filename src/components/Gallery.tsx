import { useState, useEffect } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";
import spaceVideo from "@/assets/WhatsApp Video 2025-10-30 at 09.04.23.mp4";
import video1 from "@/assets/WhatsApp Video 2025-10-30 at 09.04.57 (1).mp4";
import video2 from "@/assets/WhatsApp Video 2025-11-04 at 05.57.15.mp4";
import video3 from "@/assets/WhatsApp Video 2025-10-30 at 09.04.01.mp4";
import { Dialog, DialogContent } from "@/components/ui/dialog";

type GalleryItem = { src: string; alt: string; caption: string; type?: "image" | "video" };

const items: GalleryItem[] = [
  { src: video1, alt: "Vídeo ambiente 1", caption: "", type: "video" },
  { src: video2, alt: "Vídeo ambiente 2", caption: "", type: "video" },
  { src: video3, alt: "Vídeo ambiente 3", caption: "", type: "video" },
];

const Gallery = () => {
  const [openSrc, setOpenSrc] = useState<string | null>(null);
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);

  useEffect(() => {
    if (!carouselApi || openSrc) return;
    const id = setInterval(() => {
      try {
        carouselApi.scrollNext();
      } catch {}
    }, 4000);
    return () => clearInterval(id);
  }, [carouselApi, openSrc]);

  return (
    <section id="galeria" className="relative py-14 md:py-20">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video className="w-full h-full object-cover" autoPlay muted loop playsInline preload="metadata">
          <source src={spaceVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[#7FA384]/40" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-[#7FA384] rounded-full border border-primary/10">
            <p className="text-sm font-medium text-primary-foreground">Nosso Espaço</p>
          </div>
          <h2 className="text-4xl font-bold mb-6 text-foreground">Nosso Espaço</h2>
          <p className="text-lg text-white/90">Nosso ambiente foi criado para proporcionar bem-estar, segurança e aconchego. Cada elemento foi cuidadosamente pensado para que você se sinta acolhido(a) e à vontade desde o primeiro momento.</p>
        </div>

        <div className="max-w-5xl mx-auto overflow-hidden">
          <Carousel className="relative" setApi={setCarouselApi} opts={{ loop: true }}>
            <CarouselContent>
              {items.map((item, idx) => (
                <CarouselItem key={idx} className="md:basis-1/2 lg:basis-1/3">
                  <div className="group bg-card border border-border/50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
                    <button className="h-56 md:h-60 w-full overflow-hidden cursor-pointer" onClick={() => setOpenSrc(item.src)}>
                      <video
                        className="h-full w-full object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                      >
                        <source src={item.src} type="video/mp4" />
                      </video>
                    </button>
                    {item.caption && (
                      <div className="p-4">
                        <p className="text-sm text-muted-foreground text-center">{item.caption}</p>
                      </div>
                    )}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-6" />
            <CarouselNext className="-right-6" />
          </Carousel>
        </div>
      </div>

      <Dialog open={!!openSrc} onOpenChange={(o) => !o && setOpenSrc(null)}>
        <DialogContent className="max-w-5xl p-0 overflow-hidden">
          {openSrc && (
            <video className="w-full h-full" controls autoPlay playsInline>
              <source src={openSrc} type="video/mp4" />
            </video>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Gallery;
