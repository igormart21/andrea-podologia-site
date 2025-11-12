import whatsappLogo from "@/assets/whatsapp-logo-whatsapp-icon-whatsapp-transparent-free-png-1.webp";

const FloatingWhatsApp = () => {
  const whatsappNumber = "5511972492829";
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de agendar um atendimento.");

  return (
    <button
      aria-label="Abrir WhatsApp"
      onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, "_blank")}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-white hover:bg-white border border-border/50 shadow-xl flex items-center justify-center transition-transform hover:scale-105"
    >
      <img src={whatsappLogo} alt="WhatsApp" className="h-12 w-12" />
    </button>
  );
};

export default FloatingWhatsApp;
