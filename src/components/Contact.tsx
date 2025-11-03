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
                    <h3 className="font-semibold text-foreground mb-1 md:mb-2">Telefone</h3>
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
                      Estrada do Campo Limpo, 1062<br />
                      São Paulo - SP
                    </p>
                    <Button 
                      variant="link" 
                      className="p-0 h-auto text-primary text-sm md:text-base"
                      onClick={() => window.open("https://maps.google.com/?q=Estrada+do+Campo+Limpo+1062", '_blank')}
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.0!2d-46.7!3d-23.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDM2JzAwLjAiUyA0NsKwNDInMDAuMCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890!5m2!1spt-BR!2sbr"
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
            <Button 
              variant="hero" 
              className="w-full sm:w-auto h-12 md:h-auto"
              onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank')}
            >
              <MessageCircle className="h-5 w-5" />
              Agendar pelo WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
