import { Baby, Heart, Puzzle, Rainbow } from "lucide-react";

const differentials = [
  {
    icon: Baby,
    title: "Atendimento Infantil",
    description: "Cuidado especial e gentil para os pequeninos"
  },
  {
    icon: Heart,
    title: "Recém-Nascidos",
    description: "Atenção delicada desde os primeiros dias"
  },
  {
    icon: Puzzle,
    title: "Espectro Autista",
    description: "Ambiente adaptado e acolhedor"
  },
  {
    icon: Rainbow,
    title: "LGBTQI+",
    description: "Respeito e inclusão para todos"
  }
];

const Differentials = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-muted/20 to-background [content-visibility:auto] [contain-intrinsic-size:1px_800px]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <div className="inline-block mb-4 px-4 py-2 bg-[#7FA384] rounded-full border border-primary/10">
            <p className="text-sm font-medium text-white">
              Nossos Diferenciais
            </p>
          </div>
          
          <h2 className="text-4xl font-bold mb-6 text-foreground">
            Acolhimento e Inclusão para Todos
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            Aqui, cada paciente é acolhido com carinho, respeito e cuidado individualizado. 
            Nossa clínica é um espaço seguro e inclusivo, onde todos são bem-vindos.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {differentials.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="bg-card p-8 rounded-2xl border border-border/50 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] text-center group animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#7FA384] to-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all duration-300">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
        
        {/* Additional features */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">100%</div>
            <p className="text-muted-foreground">Protocolos de Segurança</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">Ambiente</div>
            <p className="text-muted-foreground">Confortável e Acolhedor</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">Cuidado</div>
            <p className="text-muted-foreground">Personalizado e Humanizado</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentials;
