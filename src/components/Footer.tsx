import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">Clínica da Podóloga Andrea Lima</h3>
              <p className="text-secondary-foreground leading-relaxed">
                Podóloga especializada em cuidados com os pés, oferecendo atendimento humanizado e de excelência.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-lg">Links Rápidos</h4>
              <ul className="space-y-2 text-secondary-foreground/90">
                <li><a href="#tratamentos" className="hover:underline">Tratamentos</a></li>
                <li><a href="#processo" className="hover:underline">Processo</a></li>
                <li><a href="#galeria" className="hover:underline">Galeria</a></li>
                <li><a href="#faq" className="hover:underline">FAQ</a></li>
                <li><a href="#avaliacoes" className="hover:underline">Avaliações</a></li>
                <li><a href="#localizacao" className="hover:underline">Contato</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-lg">Contato</h4>
              <ul className="space-y-2 text-secondary-foreground">
                <li className="font-medium">(11) 97249-2829</li>
                <li>Estr. do Campo Limpo, 1062 - Vila Prel</li>
                <li>São Paulo - SP, 05777-000</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-secondary-foreground/20 pt-8 text-center">
            <p className="text-secondary-foreground flex items-center justify-center gap-2">
              Feito com <Heart className="h-4 w-4 fill-current" /> por Clínica da Podóloga Andrea Lima
            </p>
            <p className="text-sm text-secondary-foreground mt-2">
              © {new Date().getFullYear()} - Todos os direitos reservados • CNPJ: 205.860.538-16
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
