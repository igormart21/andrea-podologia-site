import { Heart, Award, Shield } from "lucide-react";
import profileImage from "@/assets/andrea-profile.jpg";

const About = () => {
  return (
    <section id="sobre" className="pt-6 md:pt-8 pb-16 md:pb-24 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden [content-visibility:auto] [contain-intrinsic-size:1px_900px]">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Image */}
          <div className="flex justify-center animate-fade-in-up">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl blur-lg opacity-25 group-hover:opacity-40 transition-opacity duration-500" />
              <img 
                src={profileImage} 
                alt="Podóloga Andrea Lima" 
                className="relative rounded-2xl w-full max-w-md h-auto object-cover shadow-[var(--shadow-elevated)] transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
          </div>
          
          {/* Content */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <p className="text-sm font-semibold text-primary mb-2 uppercase tracking-wider">
              Sobre a Profissional
            </p>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
              Andrea Lima
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Sou Andrea Lima, podóloga especializada em cuidados com os pés, dedicada a proporcionar 
              bem-estar e saúde aos meus pacientes. Com anos de experiência e formação atualizada, 
              meu compromisso é oferecer um atendimento humanizado, respeitoso e de excelência.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Acredito que cada pessoa merece cuidado individualizado e atenção especial. 
              Por isso, minha clínica é um espaço acolhedor e inclusivo, onde todos são bem-vindos.
            </p>
            
            {/* Values */}
            <div className="grid grid-cols-3 gap-6 mt-8">
              <div className="text-center group animate-scale-in" style={{ animationDelay: "0.3s" }}>
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/70 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-[var(--shadow-soft)] group-hover:shadow-[var(--shadow-elevated)] transition-all duration-300 group-hover:scale-110">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-sm font-bold text-foreground">Cuidado</h3>
              </div>
              
              <div className="text-center group animate-scale-in" style={{ animationDelay: "0.4s" }}>
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/70 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-[var(--shadow-soft)] group-hover:shadow-[var(--shadow-elevated)] transition-all duration-300 group-hover:scale-110">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-sm font-bold text-foreground">Excelência</h3>
              </div>
              
              <div className="text-center group animate-scale-in" style={{ animationDelay: "0.5s" }}>
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/70 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-[var(--shadow-soft)] group-hover:shadow-[var(--shadow-elevated)] transition-all duration-300 group-hover:scale-110">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-sm font-bold text-foreground">Segurança</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
