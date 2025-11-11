import { Button } from "@/components/ui/button";
import { MessageCircle, Instagram, Facebook, MapPin, Phone, Clock } from "lucide-react";

const Contact = () => {
  const whatsappNumber = "5511972492829";
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de agendar um atendimento.");
  
  return (
    <section id="localizacao" className="py-14 md:py-20 bg-background [content-visibility:auto] [contain-intrinsic-size:1px_1000px]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16 animate-fade-in">
            <div className="inline-block mb-4 px-4 py-2 bg-[#7FA384] rounded-full">
              <p className="text-sm font-medium text-primary-foreground">
                Entre em Contato
              </p>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-foreground">
              Agende Seu Atendimento
            </h2>
            
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Estamos prontos para cuidar de você. Entre em contato e agende sua consulta!
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* Contact Info */}
            <div className="space-y-4 md:space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="bg-card p-5 md:p-6 rounded-xl border border-border/50 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-[#7FA384] rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 md:h-6 md:w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1 md:mb-2">Telefone <span className="text-muted-foreground">/ WhatsApp</span></h3>
                    <p className="text-foreground font-medium text-lg">
                      <a href="tel:+5511972492829">(11) 97249-2829</a>
                    </p>
                    <Button 
                      variant="link" 
                      className="p-0 h-auto text-primary text-sm md:text-base"
                      onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank')}
                    >
                      Enviar mensagem
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="bg-card p-5 md:p-6 rounded-xl border border-border/50 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-[#7FA384] rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 md:h-6 md:w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1 md:mb-2">Endereço</h3>
                    <p className="text-foreground font-medium mb-2">
                      Estr. do Campo Limpo, 1062 - Vila Prel, São Paulo - SP, 05777-000
                    </p>
                    <Button
                      variant="link"
                      className="p-0 h-auto text-primary text-sm md:text-base"
                      onClick={() =>
                        window.open(
                          "https://maps.google.com/?q=Estr.+do+Campo+Limpo,+1062+-+Vila+Prel,+S%C3%A3o+Paulo+-+SP,+05777-000",
                          "_blank"
                        )
                      }
                    >
                      Ver no Google Maps
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="bg-card p-5 md:p-6 rounded-xl border border-border/50 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-[#7FA384] rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5 md:h-6 md:w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1 md:mb-2">Horário de Atendimento</h3>
                    <p className="text-foreground font-medium">
                      Segunda à Sexta: 10hrs às 20hrs<br />
                      Sábados: 10hrs às 15hrs
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Social Media */}
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                <Button 
                  variant="outline" 
                  className="h-11 md:h-12"
                  onClick={() => window.open("https://www.instagram.com/andrealima_podologa", '_blank')}
                >
                  <Instagram className="h-5 w-5" />
                  Instagram
                </Button>
                <Button 
                  variant="outline" 
                  className="h-11 md:h-12"
                  onClick={() => window.open("https://www.facebook.com/AndreaLimaPodologa", '_blank')}
                >
                  <Facebook className="h-5 w-5" />
                  Facebook
                </Button>
              </div>
            </div>
            
            {/* Map */}
            <div className="bg-card rounded-xl border border-border/50 shadow-sm overflow-hidden h-[360px] md:h-[500px] animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <iframe
                src="https://www.google.com/maps?q=Estr.+do+Campo+Limpo,+1062+-+Vila+Prel,+S%C3%A3o+Paulo+-+SP,+05777-000&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          
          {/* CTA */}
          <div className="mt-12 md:mt-16 text-center bg-gradient-to-r from-[#7FA384]/30 to-[#7FA384]/10 p-8 md:p-12 rounded-2xl border border-primary/10">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3 md:mb-4">
              Pronto para Cuidar dos Seus Pés?
            </h3>
            <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto">
              Agende agora seu atendimento e descubra como podemos ajudar você a ter pés mais saudáveis e felizes!
            </p>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noreferrer"
              className="group relative inline-flex overflow-hidden rounded-2xl bg-white px-6 py-2 text-sm font-medium tracking-wide no-underline border-2 border-transparent hover:border-[#7FA384] text-white transition-colors duration-400 hover:text-[#7FA384] active:text-[#7FA384]"
            >
              <span className="relative z-10 flex items-center gap-2">
                <MessageCircle className="h-5 w-5" />
                Agendar pelo WhatsApp
              </span>
              <span className="absolute left-[-10%] top-0 z-0 h-full w-[120%] -skew-x-12 bg-[#7FA384] transition-transform duration-400 group-hover:translate-x-full active:translate-x-full" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
