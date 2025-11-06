import { useState, useEffect } from "react";
import logo from "@/assets/logo.png";

const menuItems = [
  { label: "Início", href: "#inicio" },
  { label: "Tratamentos", href: "#tratamentos" },
  { label: "Avaliações", href: "#avaliacoes" },
  { label: "Sobre Nós", href: "#sobre" },
  { label: "Onde Estamos", href: "#local" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  
  const whatsappNumber = "5511972492829";
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de agendar um atendimento.");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 96;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <header 
      className={`absolute top-0 left-1/2 -translate-x-1/2 mt-3.5 z-50 transition-all duration-300 ${
        isScrolled ? "shadow-xl" : "shadow-xl"
      } w-[92%] sm:w-[90%] max-w-[1280px] rounded-full bg-white dark:bg-white px-8 py-4`}
    >
      <div className="flex justify-between items-center">
          {/* Logo */}
        <button onClick={() => scrollToSection("#inicio")} className="shrink-0">
          <img src={logo} alt="Logo-Header" className="h-16 sm:h-18 w-auto" />
          </button>

        <div className="flex items-center gap-4">
          {/* Menu Desktop */}
          <nav className="hidden md:flex gap-4 text-[#4F705C] text-sm">
            {menuItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="hover:text-[#dedede] transition-all"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Desktop */}
          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noreferrer"
            className="hidden md:block group relative overflow-hidden rounded-2xl bg-white px-6 py-2 text-sm font-medium tracking-wide no-underline border-2 border-transparent hover:border-[#7FA384] text-white transition-colors duration-400 hover:text-[#7FA384] active:text-[#7FA384]"
          >
            <span className="relative z-10">
              Agendar Agora
            </span>
            <span className="absolute left-[-10%] top-0 z-0 h-full w-[120%] -skew-x-12 bg-[#7FA384] transition-transform duration-400 group-hover:translate-x-full active:translate-x-full" />
          </a>
        </div>

        {/* Botão sanduíche */}
        <div
          className={`sanduiche block md:hidden w-10 h-10 cursor-pointer z-50 ${isOpen ? "active" : ""}`}
          onClick={() => setIsOpen((v) => !v)}
        >
          <div className="group relative w-full h-full flex flex-col justify-center items-center gap-1.5">
            <span
              className={`barra block h-1 w-8 bg-[#4F705C] rounded transition-all duration-300 ${
                isOpen ? "translate-y-[10px] rotate-45" : ""
              }`}
            />
            <span
              className={`barra block h-1 w-8 bg-[#4F705C] rounded transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`barra block h-1 w-8 bg-[#4F705C] rounded transition-all duration-300 ${
                isOpen ? "-translate-y-[10px] -rotate-45" : ""
              }`}
            />
          </div>
        </div>
      </div>

      {/* Menu Mobile fullscreen */}
      <nav
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-white py-10 flex flex-col items-center gap-6 text-[#4F705C] text-base transition-all duration-300 z-40 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
                  {menuItems.map((item) => (
                    <button
                      key={item.href}
                      onClick={() => scrollToSection(item.href)}
            className="hover:text-[#dedede] transition-all"
                    >
                      {item.label}
                    </button>
                  ))}
        <a
          href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
          target="_blank"
          rel="noreferrer"
          className="group relative overflow-hidden rounded-2xl bg-white px-6 py-2 text-sm font-medium tracking-wide no-underline border-2 border-[#7FA384] text-white transition-colors duration-400 hover:text-[#7FA384] active:text-[#7FA384]"
          onClick={() => setIsOpen(false)}
        >
          <span className="relative z-10">Agendar Agora</span>
          <span className="absolute left-[-10%] top-0 z-0 h-full w-[120%] -skew-x-12 bg-[#7FA384] transition-transform duration-400 group-hover:translate-x-full active:translate-x-full" />
        </a>
      </nav>
    </header>
  );
};

export default Header;
