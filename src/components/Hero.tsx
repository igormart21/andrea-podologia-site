import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-modern-clinic.jpg";
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
        ref={bgRef}
        className="absolute inset-0 z-0 md:hidden block bg-center bg-cover will-change-transform pointer-events-none select-none"
        style={{
          backgroundImage: `url(${heroImage})`,
          transform: "translate3d(0,0,0)",
        }}
      />
      {/* Desktop (md+): background fixed para efeito parallax suave */}
      <div 
        className="absolute inset-0 z-0 hidden md:block bg-center bg-cover bg-fixed"
        style={{
          backgroundImage: `url(${heroImage})`
        }}
      />
      <div className="absolute inset-0 bg-[var(--gradient-overlay)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80" />
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 py-20 pb-8">
        <div className="max-w-3xl">
          <div className="rounded-3xl border border-white/20 bg-white/10 backdrop-blur-md shadow-xl p-6 md:p-10">
            <h2 className="text-5xl md:text-7xl font-bold mb-4 leading-tight text-white drop-shadow-lg animate-fade-in-up">
              Podologia sem dor
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight animate-fade-in-up">
              <span className="text-white drop-shadow-lg">
                Cuidar dos seus pés é cuidar da sua{" "}
              </span>
              <span className="text-primary">
                saúde
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/95 mb-10 leading-relaxed drop-shadow-md max-w-2xl animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              Atendimento humanizado e especializado com a Podóloga Andrea Lima. 
              Cada paciente é acolhido com carinho, respeito e cuidado individualizado.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <Button 
                variant="hero" 
                size="lg"
                className="text-lg px-8 py-6 shadow-[var(--shadow-hero)] hover:scale-105 transition-transform duration-300"
                onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank')}
              >
                <MessageCircle className="h-5 w-5" />
                Agendar Atendimento
              </Button>
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
