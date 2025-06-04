
import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Github, Linkedin } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50"></div>
      <div className="absolute top-0 left-0 w-full h-full opacity-40" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Profile Image */}
          <div className="lg:order-2 relative">
            <div className="relative w-80 h-80 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-pulse opacity-20"></div>
              <img
                src="/lovable-uploads/98538b36-6367-4c26-9295-90df03b5245e.png"
                alt="Jashwanth Boddupally"
                className="relative z-10 w-full h-full object-cover rounded-full border-4 border-white shadow-2xl hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-400 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-blue-400 rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:order-1 flex-1 text-left">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6 animate-fade-in">
              👋 Welcome to my portfolio
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 animate-fade-in animation-delay-300">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Jashwanth
              </span>
            </h1>
            
            <h2 className="text-2xl lg:text-3xl text-gray-600 mb-8 animate-fade-in animation-delay-600">
              AI Engineer & Web Developer
            </h2>
            
            <p className="text-xl text-gray-600 mb-10 max-w-2xl animate-fade-in animation-delay-900">
              Final-year B.Tech CSE (AI & ML) student passionate about building intelligent systems 
              and interactive web experiences. Specializing in AI/ML, Python, React.js, and modern web technologies.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in animation-delay-1200">
              <Button 
                onClick={() => scrollToSection("portfolio")}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                View My Work
              </Button>
              <Button 
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="border-2 border-gray-300 hover:border-blue-500 px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105"
              >
                Get In Touch
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 animate-fade-in animation-delay-1500">
              <a
                href="https://linkedin.com/in/jashwanth-boddupally"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-200"
              >
                <Linkedin className="w-6 h-6 text-blue-600" />
              </a>
              <a
                href="https://github.com/jashwanth-boddupally"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-200"
              >
                <Github className="w-6 h-6 text-gray-800" />
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={() => scrollToSection("about")}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ChevronDown className="w-8 h-8 text-gray-400" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
