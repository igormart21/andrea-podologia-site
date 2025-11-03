import andreaProfile from "@/assets/andrea-profile.jpg";
import { TestimonialsColumn, type Testimonial } from "@/components/TestimonialsColumn";

const testimonialsData: Testimonial[] = [
  {
    text:
      "Cheguei com muita dor por causa de unha encravada e saí aliviada. A Andrea tem mãos leves e explica cada passo com muita calma.",
    image: andreaProfile,
    name: "Maria Silva",
    role: "Paciente",
  },
  {
    text:
      "Ambiente impecável e acolhedor. Foi a primeira vez que levei meu filho e ele ficou super tranquilo durante o atendimento.",
    image: "/placeholder.svg",
    name: "João Santos",
    role: "Pai de paciente",
  },
  {
    text:
      "Tratamento de micose com acompanhamento sério e orientações claras. Em poucas semanas já vi grande diferença.",
    image: "/placeholder.svg",
    name: "Ana Paula",
    role: "Paciente",
  },
  {
    text:
      "Profissional incrível! Resolveu meu problema crônico de calosidades sem dor e com muito cuidado.",
    image: "/placeholder.svg",
    name: "Carlos Eduardo",
    role: "Paciente",
  },
  {
    text:
      "Gostei do atendimento humanizado e da atenção aos detalhes. Recomendo a todos que buscam podologia de confiança.",
    image: "/placeholder.svg",
    name: "Patrícia Gomes",
    role: "Paciente",
  },
  {
    text:
      "Atendimento pontual e muito caprichoso. Saí com orientações práticas para o dia a dia.",
    image: "/placeholder.svg",
    name: "Beatriz Souza",
    role: "Paciente",
  },
  {
    text:
      "Levei minha mãe e ela foi tratada com todo carinho. Voltaremos com certeza!",
    image: "/placeholder.svg",
    name: "Ricardo Lima",
    role: "Filho de paciente",
  },
  {
    text:
      "Meu tratamento de órtese foi tranquilo e eficaz. Resultado acima do esperado.",
    image: "/placeholder.svg",
    name: "Fernanda Alves",
    role: "Paciente",
  },
  {
    text:
      "Clínica limpa, organizada e com excelente atendimento. A Andrea explica tudo.",
    image: "/placeholder.svg",
    name: "Paulo Henrique",
    role: "Paciente",
  },
  {
    text:
      "Senti muita confiança desde a avaliação. Em poucas sessões já melhorei bastante.",
    image: "/placeholder.svg",
    name: "Letícia Rodrigues",
    role: "Paciente",
  },
  {
    text:
      "Sofria com rachaduras nos calcanhares. Agora estão macios e sem dor.",
    image: "/placeholder.svg",
    name: "Gustavo Nunes",
    role: "Paciente",
  },
  {
    text:
      "Ótima profissional! Delicada e atenciosa. Senti que fui realmente ouvida.",
    image: "/placeholder.svg",
    name: "Camila Moreira",
    role: "Paciente",
  },
  {
    text:
      "Depois do atendimento, caminhar voltou a ser prazeroso. Gratidão pelo cuidado!",
    image: "/placeholder.svg",
    name: "Rafaela Martins",
    role: "Paciente",
  },
  {
    text:
      "Acompanhei todo o processo do meu pai. Atendimento humanizado do começo ao fim.",
    image: "/placeholder.svg",
    name: "Eduardo Farias",
    role: "Filho de paciente",
  },
  {
    text:
      "Excelente experiência! Já recomendei para amigas do trabalho.",
    image: "/placeholder.svg",
    name: "Vanessa Carvalho",
    role: "Paciente",
  },
  {
    text:
      "Tinha medo de procedimentos nos pés, mas me senti segura e sem dor.",
    image: "/placeholder.svg",
    name: "Bruno Almeida",
    role: "Paciente",
  },
  {
    text:
      "Muito cuidadosa com crianças. Meu filho saiu feliz e sem medo de voltar.",
    image: "/placeholder.svg",
    name: "Tatiane Rocha",
    role: "Mãe de paciente",
  },
];

// Remove quaisquer duplicados por combinação nome+texto
const uniqueTestimonials: Testimonial[] = Array.from(
  new Map(testimonialsData.map((t) => [`${t.name}|${t.text}`, t])).values()
);

// Distribui itens únicos em 3 colunas sem repetição entre colunas (balanceado)
const col1: Testimonial[] = [];
const col2: Testimonial[] = [];
const col3: Testimonial[] = [];
uniqueTestimonials.forEach((t, i) => {
  const mod = i % 3;
  if (mod === 0) col1.push(t);
  else if (mod === 1) col2.push(t);
  else col3.push(t);
});

const TestimonialsMarquee = () => {
  return (
    <section id="avaliacoes" className="relative overflow-hidden py-20 bg-muted/20 [content-visibility:auto] [contain-intrinsic-size:1px_900px]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-[#6d9c7f] rounded-full border border-primary/10">
            <p className="text-sm font-medium text-primary-foreground">Depoimentos</p>
          </div>
          <h2 className="text-4xl font-bold mb-6 text-foreground">O que dizem nossos pacientes</h2>
          <p className="text-lg text-muted-foreground">Relatos reais de quem já foi cuidado por nós.</p>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-muted/20 to-transparent z-10 hidden sm:block" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-muted/20 to-transparent z-10 hidden sm:block" />
          <div className="pointer-events-none absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-muted/20 to-transparent z-10 sm:hidden" />
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-muted/20 to-transparent z-10 sm:hidden" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <TestimonialsColumn testimonials={col1} duration={18} />
            <TestimonialsColumn testimonials={col2} duration={22} />
            <TestimonialsColumn testimonials={col3} duration={20} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsMarquee;
