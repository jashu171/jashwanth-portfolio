
import { useState, useEffect } from "react";
import { ChevronDown, Github, Linkedin, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PortfolioSection from "@/components/PortfolioSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import Navigation from "@/components/Navigation";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
      
      // Update active section based on scroll position
      const sections = ["home", "about", "portfolio", "services", "contact"];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <Navigation activeSection={activeSection} />
      
      <main className="relative">
        <HeroSection />
        <AboutSection />
        <PortfolioSection />
        <ServicesSection />
        <ContactSection />
      </main>

      {/* Scroll to top button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 shadow-lg transition-all duration-300 hover:scale-110 z-50"
          size="icon"
        >
          <ArrowUp className="w-5 h-5" />
        </Button>
      )}

      {/* Floating elements for visual appeal */}
      <div className="fixed top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-60"></div>
      <div className="fixed top-40 right-20 w-1 h-1 bg-purple-400 rounded-full animate-pulse opacity-40 animation-delay-1000"></div>
      <div className="fixed bottom-32 left-16 w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse opacity-50 animation-delay-2000"></div>
    </div>
  );
};

export default Index;
