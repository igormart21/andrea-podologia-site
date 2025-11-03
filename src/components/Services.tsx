import { Footprints, Scissors, Eye, HeartPulse, Puzzle, Sparkles, Shield } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import unhaEncravadaImg from "@/assets/exerese-de-unha-e-uma-cirurgia-segura-1024x536.jpg";
import micoseImg from "@/assets/tratamento-para-micose-de-unha-em-sorocaba-feet-house.jpg";
import olhoDePeixeImg from "@/assets/oAqyxEfORzCvk8pmCbLIgXGZIzAjmuMQQ1efSZ~tplv-tiktokx-origin.image.jpeg";
import pesDiabeticosImg from "@/assets/iStock-175483656-min.jpg";
import calosFissurasImg from "@/assets/20-calos-o-que-fazer.jpg";
import laserImg from "@/assets/micose.jpg";
import autismoImg from "@/assets/fisioterapia-no-autismo.jpg";

type ServiceItem = {
  icon: any;
  title: string;
  description: string;
  details: string;
  highlights: string[];
  image?: string;
};

const services: ServiceItem[] = [
  {
    icon: Scissors,
    title: "Unha Encravada (Onicriptose)",
    description: "Tratamento especializado e seguro para alívio da dor e correção do quadro.",
    details:
      "Atuação precisa com técnicas minimamente invasivas para liberar a espícula e orientar a curvatura da unha. Foco em conforto imediato e prevenção de recidivas.",
    highlights: [
      "Alívio rápido da dor",
      "Técnicas seguras e higiênicas",
      "Orientações para cuidados em casa",
    ],
    image: unhaEncravadaImg,
  },
  {
    icon: Shield,
    title: "Micose (Onicomicose)",
    description: "Abordagem clínica com orientações e acompanhamento para recuperação eficaz.",
    details:
      "Identificação do tipo de micose, indicação de terapias adjuntas e rotina de cuidados para restabelecer a saúde e a estética das unhas.",
    highlights: [
      "Avaliação personalizada",
      "Orientações de higiene e prevenção",
      "Acompanhamento periódico",
    ],
    image: micoseImg,
  },
  {
    icon: Eye,
    title: "Olho de Peixe (Adultos e Crianças)",
    description: "Remoção precisa e cuidadosa, com técnicas confortáveis e seguras.",
    details:
      "Atendimento acolhedor, especialmente em crianças, com técnicas que visam reduzir o desconforto e acelerar a recuperação.",
    highlights: [
      "Técnica delicada",
      "Materiais esterilizados",
      "Cuidados pós-procedimento",
    ],
    image: olhoDePeixeImg,
  },
  {
    icon: HeartPulse,
    title: "Pés Diabéticos e Geriátricos",
    description: "Cuidados preventivos e terapêuticos com atenção a riscos e sensibilidades.",
    details:
      "Avaliação vascular e sensorial, corte técnico e medidas de proteção para evitar lesões, infecções e complicações.",
    highlights: [
      "Prevenção de feridas",
      "Corte técnico e seguro",
      "Educação em autocuidado",
    ],
    image: pesDiabeticosImg,
  },
  {
    icon: Footprints,
    title: "Calos e Fissuras",
    description: "Redução, hidratação e proteção para restaurar o conforto ao caminhar.",
    details:
      "Remoção controlada de calosidade, alinhada a hidratação profunda e recomendações de palmilhas/proteções quando necessário.",
    highlights: [
      "Remoção segura",
      "Hidratação intensiva",
      "Indicações de palmilhas",
    ],
    image: calosFissurasImg,
  },
  {
    icon: Sparkles,
    title: "Tratamento a Laser",
    description: "Tecnologia como aliada no cuidado com unhas e pele, conforme avaliação.",
    details:
      "Aplicação focada para auxiliar em processos inflamatórios e apoio em protocolos específicos (conforme elegibilidade).",
    highlights: [
      "Tecnologia moderna",
      "Apoio à cicatrização",
      "Sessões rápidas",
    ],
    image: laserImg,
  },
  {
    icon: Puzzle,
    title: "Especializada Crianças com Autismo 🎗️",
    description: "Atendimento adaptado, acolhedor e sensível às necessidades do TEA.",
    details:
      "Abordagem gradual, ambiente tranquilo e comunicação respeitosa para reduzir estímulos e aumentar o conforto da criança.",
    highlights: [
      "Ambiente acolhedor",
      "Ritmo da criança respeitado",
      "Protocolos sensoriais",
    ],
    image: autismoImg,
  },
];

const Services = () => {
  const whatsappNumber = "5511972492829";
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de agendar um atendimento.");

  return (
    <section id="tratamentos" className="py-14 md:py-20 bg-[#6d9c7f] [content-visibility:auto] [contain-intrinsic-size:1px_1000px]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <div className="inline-block mb-4 px-4 py-2 bg-[#6d9c7f] rounded-full border border-primary/10">
            <p className="text-sm font-medium text-primary-foreground">
              Procedimentos
            </p>
          </div>
          
          <h2 className="text-4xl font-bold mb-6 text-foreground">
            Tratamentos Especializados para Seus Pés
          </h2>
          
          <p className="text-lg text-white/90">
            Oferecemos uma gama completa de procedimentos de podologia, com foco no seu bem-estar e conforto.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
                <div className="h-56 md:h-60 w-full overflow-hidden rounded-2xl bg-card border border-border/50 shadow-sm flex items-center justify-center mb-4">
                  {service.image ? (
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                      <Icon className="h-12 w-12 text-primary" />
                    </div>
                  )}
                </div>
                <Card className="border border-border/50 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.01] bg-card overflow-hidden group">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl flex items-start gap-2">
                      <Icon className="h-5 w-5 text-primary mt-1" />
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed mt-1">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {service.details}
                    </p>
                    <ul className="text-muted-foreground text-sm space-y-2 mb-6 list-disc pl-5">
                      {service.highlights.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                    <Button 
                      variant="hero"
                      className="w-full"
                      onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank')}
                    >
                      Agendar no WhatsApp
                    </Button>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
