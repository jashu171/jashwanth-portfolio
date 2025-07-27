
import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Github, Linkedin, Mail, MessageCircle } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      {/* Dark gradient background with neon glowing circles */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background"></div>
      
      {/* Neon glowing circles */}
      <div className="absolute top-20 left-20 w-96 h-96 rounded-full bg-gradient-to-r from-green-400 to-yellow-400 opacity-20 blur-3xl animate-pulse animation-duration-[6s]"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-gradient-to-r from-orange-400 to-red-400 opacity-20 blur-3xl animate-pulse animation-duration-[8s]"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 opacity-10 blur-2xl animate-float"></div>

      {/* Glassmorphism container */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-morphism p-8 lg:p-12 rounded-3xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* 3D Illustration */}
            <div className="lg:order-2 relative">
              <div className="relative w-96 h-96 mx-auto">
                <img
                  src="/lovable-uploads/8929fc30-000a-4554-b419-b37f7f38f087.png"
                  alt="AI Engineer 3D Illustration"
                  className="relative z-10 w-full h-full object-contain hover:scale-105 transition-transform duration-[2000ms] ease-out"
                />
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-bounce animation-duration-[6s]"></div>
                <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-accent rounded-full animate-pulse animation-duration-[4s]"></div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:order-1 flex-1 text-left">
              <div className="inline-block px-6 py-3 bg-primary/20 text-primary rounded-full text-sm font-medium mb-6 animate-fade-in animation-duration-[3s]">
                👋 Welcome
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-in animation-delay-300 animation-duration-[3s]">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Jashwanth Boddupally
                </span>
              </h1>
              
              <h2 className="text-2xl lg:text-3xl text-muted-foreground mb-8 animate-fade-in animation-delay-600 animation-duration-[3s]">
                To our AI Engineer passion
              </h2>
              
              <p className="text-lg text-muted-foreground/80 mb-10 max-w-2xl animate-fade-in animation-delay-900 animation-duration-[3s]">
                Final-year B.Tech CSE (AI & ML) student passionate about building intelligent systems 
                and interactive web experiences. Specializing in AI/ML, Python, React.js, and modern web technologies.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in animation-delay-1200 animation-duration-[3s]">
                <Button 
                  onClick={() => scrollToSection("portfolio")}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-xl font-medium transition-all duration-[1500ms] hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  View Projects
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => scrollToSection("contact")}
                  className="border-2 border-primary/50 bg-transparent hover:bg-primary/10 text-primary hover:text-primary px-8 py-4 rounded-xl font-medium transition-all duration-[1500ms] hover:scale-105"
                >
                  Contact Us
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 animate-fade-in animation-delay-1500 animation-duration-[3s]">
                <a
                  href="https://linkedin.com/in/jashwanth-boddupally"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 glass-morphism rounded-full shadow-lg hover:shadow-xl transition-all duration-[1500ms] hover:scale-110"
                >
                  <Linkedin className="w-6 h-6 text-blue-400" />
                </a>
                <a
                  href="https://github.com/jashwanth-boddupally"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 glass-morphism rounded-full shadow-lg hover:shadow-xl transition-all duration-[1500ms] hover:scale-110"
                >
                  <Github className="w-6 h-6 text-foreground" />
                </a>
                <a
                  href="mailto:jashwanthboddupally@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 glass-morphism rounded-full shadow-lg hover:shadow-xl transition-all duration-[1500ms] hover:scale-110"
                >
                  <Mail className="w-6 h-6 text-red-400" />
                </a>
                <a
                  href="https://www.instagram.com/jash_you_x_x/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 glass-morphism rounded-full shadow-lg hover:shadow-xl transition-all duration-[1500ms] hover:scale-110"
                >
                  <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-sm flex items-center justify-center">
                    <span className="text-white text-xs font-bold">📷</span>
                  </div>
                </a>
                <a
                  href="https://wa.me/919010767269"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 glass-morphism rounded-full shadow-lg hover:shadow-xl transition-all duration-[1500ms] hover:scale-110"
                >
                  <MessageCircle className="w-6 h-6 text-green-400" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <button
          onClick={() => scrollToSection("about")}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce animation-duration-[4s]"
        >
          <ChevronDown className="w-8 h-8 text-muted-foreground" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
