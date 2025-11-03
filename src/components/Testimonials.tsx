import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Maria Silva",
    text: "Amei o atendimento! A Andrea é super atenciosa e cuidadosa. Minha filha foi super bem cuidada e ficou tranquila durante todo o procedimento.",
    rating: 5
  },
  {
    name: "João Santos",
    text: "Profissional excelente! Ambiente limpo, acolhedor e a Andrea é muito competente. Recomendo demais!",
    rating: 5
  },
  {
    name: "Ana Paula",
    text: "Melhor podóloga da região! Atendimento humanizado, preços justos e resultado impecável. Meus pés nunca estiveram tão bem cuidados.",
    rating: 5
  },
  {
    name: "Carlos Eduardo",
    text: "Estava com unha encravada há meses e a Andrea resolveu em uma sessão. Sem dor, com muito cuidado e profissionalismo. Gratidão!",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section id="avaliacoes" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <div className="inline-block mb-4 px-4 py-2 bg-[#7FA384]/30 rounded-full border border-primary/10">
            <p className="text-sm font-medium text-primary">
              Depoimentos
            </p>
          </div>
          
          <h2 className="text-4xl font-bold mb-6 text-foreground">
            O Que Nossos Pacientes Dizem
          </h2>
          
          <p className="text-lg text-muted-foreground">
            A satisfação de quem confia no nosso trabalho é nossa maior conquista.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="border border-border/50 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] bg-card animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <p className="font-semibold text-foreground">
                  {testimonial.name}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
