import { Footprints, Scissors, Eye, HeartPulse, Puzzle, Sparkles, Shield } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import unhaEncravadaImg from "@/assets/exerese-de-unha-e-uma-cirurgia-segura-1024x536.jpg";
import micoseImg from "@/assets/WhatsApp Image 2025-11-05 at 05.41.58.jpeg";
import olhoDePeixeImg from "@/assets/oAqyxEfORzCvk8pmCbLIgXGZIzAjmuMQQ1efSZ~tplv-tiktokx-origin.image.jpeg";
import pesDiabeticosImg from "@/assets/Pe-diabetico-causas-e-tratamentos.png";
import calosFissurasImg from "@/assets/20-calos-o-que-fazer.jpg";
import laserImg from "@/assets/micose.jpg";
import autismoImg from "@/assets/fisioterapia-no-autismo.jpg";
import orteseImg from "@/assets/WhatsApp Image 2025-11-04 at 07.26.29.jpeg";

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
    description: "Tratamento seguro e sem dor para alívio rápido e correção.",
    details:
      "Técnica minimamente invasiva para liberar a espícula e ajustar a curvatura, com conforto e prevenção de recidivas.",
    highlights: [
      "Procedimento indolor",
      "Técnica minimamente invasiva",
      "Cuidados claros para casa",
    ],
    image: unhaEncravadaImg,
  },
  {
    icon: Shield,
    title: "Órtese (Correção da Curvatura)",
    description:
      "Uma Órtese é um Tratamento usado para correção da curvatura da unha, usado para tratar unhas encravadas, para evitar recidiva.",
    details: "",
    highlights: [],
    image: orteseImg,
  },
  {
    icon: Shield,
    title: "Micose (Onicomicose)",
    description: "Abordagem clínica com orientação e acompanhamento.",
    details:
      "Identificação do tipo, terapias adjuntas e rotina de cuidados para recuperar a saúde das unhas.",
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
    description: "Remoção precisa, confortável e segura.",
    details:
      "Atendimento acolhedor que reduz o desconforto e acelera a recuperação.",
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
    description: "Cuidados preventivos e terapêuticos com atenção a riscos.",
    details:
      "Avaliação vascular e sensorial, corte técnico e proteção para evitar lesões e infecções.",
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
    description: "Redução, hidratação e proteção para voltar a caminhar bem.",
    details:
      "Remoção controlada, hidratação profunda e indicação de palmilhas quando necessário.",
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
    description: "Tecnologia aliada ao cuidado, conforme avaliação.",
    details:
      "Aplicação focada para apoiar processos inflamatórios e protocolos específicos.",
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
    description: "Atendimento adaptado e acolhedor ao TEA.",
    details:
      "Abordagem gradual, ambiente tranquilo e comunicação respeitosa para maior conforto.",
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
    <section id="tratamentos" className="relative z-10 -mt-6 md:mt-0 py-14 md:py-20 bg-[#2f5d46] rounded-t-3xl shadow-xl [content-visibility:auto] [contain-intrinsic-size:1px_1000px]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <div className="inline-block mb-4 px-4 py-2 bg-white/10 rounded-full border border-white/20">
            <p className="text-sm font-medium text-white">
              Procedimentos
            </p>
          </div>
          
          <h2 className="text-4xl font-bold mb-6 text-white">
            Tratamentos Especializados para Seus Pés
          </h2>
          
          <p className="text-lg text-white/90">
            Oferecemos uma gama completa de procedimentos de podologia, com foco no seu bem-estar e conforto.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto items-stretch">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="animate-fade-in flex flex-col h-full" style={{ animationDelay: `${index * 0.05}s` }}>
                <div className="h-56 md:h-60 w-full overflow-hidden rounded-2xl bg-white/10 border border-white/20 shadow-sm flex items-center justify-center mb-4">
                  {service.image ? (
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className={`w-full h-full object-cover ${service.title === "Micose (Onicomicose)" ? "object-[center_35%]" : "object-[center_60%]"}`}
                    />
                  ) : (
                    <div className="W-full h-full bg-white/10 flex items-center justify-center">
                      <Icon className="h-12 w-12 text-white" />
                    </div>
                  )}
                </div>
                <Card className="border border-white/20 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.01] bg-[#7FA384] overflow-hidden group h-full flex flex-col">
                  <CardHeader className="pb-2">
                    <div className="w-max mx-auto mb-2 px-3 py-1 rounded-full bg-white/15 text-white text-xs font-semibold tracking-wide text-center">
                      <span className="text-xs font-semibold text-white">Podologia sem dor</span>
                    </div>
                    <CardTitle className="text-xl flex items-start gap-2 text-white">
                      <Icon className="h-5 w-5 text-white mt-1" />
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed mt-1 text-white/90">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0 flex-1 flex flex-col">
                    <p className="text-white/90 leading-relaxed mb-4">
                      {service.details}
                    </p>
                    <Button 
                      variant="default"
                      className="w-full mt-auto bg-white text-[#7FA384] hover:bg-white/90 border border-white"
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
