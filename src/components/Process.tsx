import { CalendarCheck, ClipboardCheck, HandHeart, MessageCircle, NotebookPen } from "lucide-react";

const steps = [
  {
    icon: CalendarCheck,
    title: "Agendamento",
    description: "Você escolhe o melhor horário e confirmamos seu atendimento de forma rápida.",
  },
  {
    icon: ClipboardCheck,
    title: "Avaliação",
    description: "Realizamos uma avaliação detalhada para entender suas necessidades.",
  },
  {
    icon: HandHeart,
    title: "Tratamento",
    description: "Aplicamos técnicas seguras, indolores e personalizadas para cada caso.",
  },
  {
    icon: NotebookPen,
    title: "Orientações",
    description: "Você recebe orientações claras para manter seus pés saudáveis por mais tempo.",
  },
];

const Process = () => {
  const whatsappNumber = "5511972492829";
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de entender melhor as etapas do atendimento.");

  return (
    <section id="processo" className="py-14 md:py-20 bg-[#6d9c7f] [content-visibility:auto] [contain-intrinsic-size:1px_900px]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-[#7FA384] rounded-full border border-primary/10">
            <p className="text-sm font-medium text-white">Como funciona</p>
          </div>
          <h2 className="text-4xl font-bold mb-6 text-white">Seu cuidado em 4 etapas</h2>
          <p className="text-lg text-muted-foreground">
            Um fluxo simples, humano e acolhedor, pensado para sua melhor experiência.
          </p>
        </div>

        <div className="max-w-5xl mx-auto relative">
          <div className="absolute left-1.5 sm:left-1/2 sm:-translate-x-1/2 top-0 bottom-0 w-1 bg-border/60 rounded-full hidden sm:block" />
          <div className="grid sm:grid-cols-1 gap-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;
              return (
                <div key={index} className={`grid sm:grid-cols-2 items-center gap-6 ${isEven ? '' : 'sm:direction-rtl'}`}>
                  <div className={`flex ${isEven ? 'sm:justify-end' : 'sm:justify-start'} justify-center`}>
                    <div className="bg-card border border-border/60 rounded-2xl p-6 shadow-sm max-w-md w-full">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#7FA384] to-accent/20 flex items-center justify-center">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <span className="text-sm font-semibold text-muted-foreground">Etapa {index + 1}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                  <div className="hidden sm:flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center border-4 border-background shadow-lg">
                      {index + 1}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 flex justify-center">
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
    </section>
  );
};

export default Process;
