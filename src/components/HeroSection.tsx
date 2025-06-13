
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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 via-transparent to-gray-100/50"></div>
      <div className="absolute top-0 left-0 w-full h-full opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23E5E5E5' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Profile Image */}
          <div className="lg:order-2 relative">
            <div className="relative w-80 h-80 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-sky-200 to-sky-300 rounded-full animate-pulse opacity-30 animation-duration-[8s]"></div>
              <img
                src="https://i.ibb.co/wZnbCLf3/image.png"
                alt="Jashwanth Boddupally"
                className="relative z-10 w-full h-full object-cover rounded-full border-4 border-white shadow-2xl hover:scale-105 transition-transform duration-[2000ms] ease-out"
              />
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-sky-400 rounded-full animate-bounce animation-duration-[6s]"></div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-cyan-500 rounded-full animate-pulse animation-duration-[4s]"></div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:order-1 flex-1 text-left">
            <div className="inline-block px-4 py-2 bg-sky-100 text-slate-600 rounded-full text-sm font-medium mb-6 animate-fade-in animation-duration-[3s]">
              👋 Welcome to my portfolio
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-slate-600 mb-6 animate-fade-in animation-delay-300 animation-duration-[3s]">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-slate-500 to-slate-700 bg-clip-text text-transparent">
                Jashwanth Boddupally
              </span>
            </h1>
            
            <h2 className="text-2xl lg:text-3xl text-slate-500 mb-8 animate-fade-in animation-delay-600 animation-duration-[3s]">
              AI Engineer | Python Developer | Web Developer
            </h2>
            
            <p className="text-xl text-slate-500 mb-10 max-w-2xl animate-fade-in animation-delay-900 animation-duration-[3s]">
              Final-year B.Tech CSE (AI & ML) student passionate about building intelligent systems 
              and interactive web experiences. Specializing in AI/ML, Python, React.js, and modern web technologies.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in animation-delay-1200 animation-duration-[3s]">
              <Button 
                onClick={() => scrollToSection("portfolio")}
                className="bg-gradient-to-r from-slate-500 to-slate-700 hover:from-slate-600 hover:to-slate-800 text-white px-8 py-3 rounded-lg font-medium transition-all duration-[1500ms] hover:scale-105 shadow-lg hover:shadow-xl"
              >
                View My Work
              </Button>
              <Button 
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="border-2 border-slate-400 hover:border-slate-600 text-slate-600 hover:text-slate-700 px-8 py-3 rounded-lg font-medium transition-all duration-[1500ms] hover:scale-105"
              >
                Get In Touch
              </Button>
              <Button 
                variant="outline"
                onClick={() => window.open("https://drive.google.com/file/d/1IzHmmV0DJNk_DmHP_1FFtjrjR9tHDWMW/view?usp=sharing", "_blank")}
                className="border-2 border-slate-400 bg-slate-50 hover:bg-slate-100 hover:border-slate-600 text-slate-700 hover:text-slate-800 px-8 py-3 rounded-lg font-medium transition-all duration-[1500ms] hover:scale-105"
              >
                My Resume
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 animate-fade-in animation-delay-1500 animation-duration-[3s]">
              <a
                href="https://linkedin.com/in/jashwanth-boddupally"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-[1500ms] hover:scale-110 border border-slate-200"
              >
                <Linkedin className="w-6 h-6 text-blue-600" />
              </a>
              <a
                href="https://github.com/jashwanth-boddupally"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-[1500ms] hover:scale-110 border border-slate-200"
              >
                <Github className="w-6 h-6 text-slate-700" />
              </a>
              <a
                href="mailto:jashwanthboddupally@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-[1500ms] hover:scale-110 border border-slate-200"
              >
                <Mail className="w-6 h-6 text-red-600" />
              </a>
              <a
                href="https://www.instagram.com/jash_you_x_x/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-[1500ms] hover:scale-110 border border-slate-200"
              >
                <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-sm flex items-center justify-center">
                  <span className="text-white text-xs font-bold">📷</span>
                </div>
              </a>
              <a
                href="https://wa.me/919010767269"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-[1500ms] hover:scale-110 border border-slate-200"
              >
                <MessageCircle className="w-6 h-6 text-green-600" />
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={() => scrollToSection("about")}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce animation-duration-[4s]"
        >
          <ChevronDown className="w-8 h-8 text-slate-400" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
