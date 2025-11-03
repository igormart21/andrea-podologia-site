import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "O tratamento de unha encravada dói?",
    a: "Utilizamos técnicas delicadas e seguras para minimizar o desconforto. A maioria dos pacientes relata alívio imediato.",
  },
  {
    q: "Atendem crianças e recém-nascidos?",
    a: "Sim. Temos acolhimento especial para crianças, recém-nascidos e pessoas no espectro autista.",
  },
  {
    q: "Preciso de preparo antes da consulta?",
    a: "Não é necessário. Se possível, evite usar cremes nos pés no dia do atendimento.",
  },
  {
    q: "Vocês fazem aplicação de órtese?",
    a: "Sim. Indicamos e aplicamos órteses conforme avaliação individual para correção e proteção das unhas.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-14 md:py-20 bg-[#6d9c7f] [content-visibility:auto] [contain-intrinsic-size:1px_800px]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-block mb-4 px-4 py-2 bg-[#6d9c7f] rounded-full border border-primary/10">
            <p className="text-sm font-medium text-primary-foreground">FAQ</p>
          </div>
          <h2 className="text-4xl font-bold mb-6 text-foreground">Perguntas Frequentes</h2>
          <p className="text-lg text-muted-foreground">Tire suas dúvidas mais comuns sobre nossos atendimentos.</p>
        </div>

        <div className="max-w-3xl mx-auto bg-card border border-border/50 rounded-2xl p-2">
          <Accordion type="single" collapsible className="w-full divide-y divide-border/60">
            {faqs.map((item, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`}>
                <AccordionTrigger className="text-left text-foreground">{item.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
