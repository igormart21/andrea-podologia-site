import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import heroImage from "@/assets/WhatsApp Image 2025-11-06 at 08.04.28.jpeg";
import { useEffect, useRef } from "react";

const Hero = () => {
  const whatsappNumber = "5511972492829";
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de agendar um atendimento.");
  const bgRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        if (bgRef.current) {
          // Intensidade aumentada
          const offset = y * 0.7;
          bgRef.current.style.transform = `translate3d(0, ${offset}px, 0)`;
        }
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with enhanced overlay and responsive attachment */}
      {/* Mobile/Small screens: parallax suave via transform */}
      <div 
        id="parallax-bg"
        ref={bgRef}
        className="absolute inset-0 z-0 block bg-cover bg-no-repeat bg-[position:70%_center] md:bg-[position:center_60%] will-change-transform pointer-events-none select-none"
        style={{
          backgroundImage: `url(${heroImage})`,
          transform: "translate3d(0,0,0)",
        }}
      />
      {/* Desktop (md+): background fixed para efeito parallax suave */}
      <div className="hidden" />
      <div className="absolute inset-0 bg-[var(--gradient-overlay)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80" />
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 py-20 pb-8">
        <div className="w-full max-w-3xl mx-auto md:mx-0 md:mr-auto">
          <div className="rounded-3xl border border-white/20 bg-white/10 backdrop-blur-md shadow-xl p-3 md:p-6 max-w-sm sm:max-w-md md:max-w-2xl mx-auto md:mx-0">
            
            <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight animate-fade-in-up text-center">
              <span className="text-white drop-shadow-lg block">Podologa</span>
              <span className="text-white drop-shadow-lg block">Pés Saudáveis e Sem Dor!</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/95 mb-8 leading-relaxed drop-shadow-md max-w-2xl animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              Cuidado acolhedor e sem dor para seus pés.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8 animate-fade-in-up justify-start" style={{ animationDelay: "0.4s" }}>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
                className="group relative overflow-hidden rounded-2xl bg-white px-6 py-2 text-sm font-medium tracking-wide no-underline border-2 border-transparent hover:border-[#7FA384] text-white transition-colors duration-400 hover:text-[#7FA384] active:text-[#7FA384]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <MessageCircle className="h-4 w-4" />
                  Agendar Agora
                </span>
                <span className="absolute left-[-10%] top-0 z-0 h-full w-[120%] -skew-x-12 bg-[#7FA384] transition-transform duration-400 group-hover:translate-x-full active:translate-x-full" />
              </a>
            </div>

            
          </div>
          
        </div>
      </div>
      
      {/* Decorative gradient */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-background via-background/50 to-transparent z-10" />
    </section>
  );
};

export default Hero;
