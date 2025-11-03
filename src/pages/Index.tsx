import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Differentials from "@/components/Differentials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Process from "@/components/Process";
import Gallery from "@/components/Gallery";
import FAQ from "@/components/FAQ";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import TestimonialsMarquee from "@/components/TestimonialsMarquee";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      <About />
      <Process />
      <Differentials />
      <Gallery />
      <TestimonialsMarquee />
      <FAQ />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default Index;
