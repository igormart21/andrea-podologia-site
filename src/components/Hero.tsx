import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-modern-clinic.jpg";

const Hero = () => {
  const whatsappNumber = "5511972492829";
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de agendar um atendimento.");
  
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with enhanced overlay and responsive attachment */}
      {/* Mobile/Small screens: normal attachment (melhor desempenho) */}
      <div 
        className="absolute inset-0 z-0 md:hidden block bg-center bg-cover"
        style={{
          backgroundImage: `url(${heroImage})`
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

            {/* Trust Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-6 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                <div className="text-3xl font-extrabold text-primary">8+</div>
                <div className="text-primary/90 text-sm">Anos de experiência</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                <div className="text-3xl font-extrabold text-primary">2k+</div>
                <div className="text-primary/90 text-sm">Atendimentos</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                <div className="text-3xl font-extrabold text-primary">5★</div>
                <div className="text-primary/90 text-sm">Avaliações</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                <div className="text-3xl font-extrabold text-primary">100%</div>
                <div className="text-primary/90 text-sm">Acolhimento</div>
              </div>
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
