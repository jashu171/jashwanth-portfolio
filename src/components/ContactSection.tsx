
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-background relative overflow-hidden">
      {/* Neon background elements */}
      <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-gradient-to-r from-pink-400/20 to-purple-400/20 blur-3xl animate-pulse animation-duration-[8s]"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-gradient-to-r from-green-400/20 to-cyan-400/20 blur-3xl animate-float"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Get In <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Let's connect and discuss how we can work together on your next project
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="glass-morphism border-none shadow-lg hover:shadow-xl transition-all duration-300 p-6">
              <h3 className="text-xl font-bold text-foreground mb-4">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary font-semibold">📧</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <a 
                      href="mailto:jashwanthboddupally@gmail.com"
                      className="text-primary hover:text-accent transition-colors"
                    >
                      jashwanthboddupally@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-10 h-10 bg-green-400/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-green-400 font-semibold">📱</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Phone</p>
                    <a 
                      href="tel:+919010767269"
                      className="text-green-400 hover:text-green-300 transition-colors"
                    >
                      +91 9010767269
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-10 h-10 bg-purple-400/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-purple-400 font-semibold">📍</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Location</p>
                    <p className="text-muted-foreground">India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-morphism border-none shadow-lg hover:shadow-xl transition-all duration-300 p-6">
              <h3 className="text-xl font-bold text-foreground mb-4">Connect With Me</h3>
              <div className="space-y-3">
                <a
                  href="https://linkedin.com/in/jashwanth-boddupally"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-3 bg-primary/10 hover:bg-primary/20 rounded-lg transition-all duration-300 hover:scale-105"
                >
                  <Linkedin className="w-6 h-6 text-primary mr-3" />
                  <span className="font-medium text-foreground">LinkedIn</span>
                </a>
                <a
                  href="https://github.com/jashwanth-boddupally"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-3 bg-muted/50 hover:bg-muted rounded-lg transition-all duration-300 hover:scale-105"
                >
                  <Github className="w-6 h-6 text-foreground mr-3" />
                  <span className="font-medium text-foreground">GitHub</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="glass-morphism border-none shadow-lg hover:shadow-xl transition-all duration-300 p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Send Me a Message</h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 bg-background text-foreground"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 bg-background text-foreground"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 bg-background text-foreground"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 bg-background text-foreground"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      rows={6}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 resize-none bg-background text-foreground"
                      placeholder="Tell me about your project or just say hello!"
                    ></textarea>
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-border">
          <p className="text-muted-foreground">
            © 2024 Jashwanth Boddupally. Built with ❤️ and React.js
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
