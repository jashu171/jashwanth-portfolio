
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Get In <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Let's connect and discuss how we can work together on your next project
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-blue-600 font-semibold">📧</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <a 
                        href="mailto:jashwanthboddupally@gmail.com"
                        className="text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        jashwanthboddupally@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-green-600 font-semibold">📱</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Phone</p>
                      <a 
                        href="tel:+919010767269"
                        className="text-green-600 hover:text-green-700 transition-colors"
                      >
                        +91 9010767269
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-purple-600 font-semibold">📍</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Location</p>
                      <p className="text-gray-600">India</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Connect With Me</h3>
                <div className="space-y-3">
                  <a
                    href="https://linkedin.com/in/jashwanth-boddupally"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-all duration-300 hover:scale-105"
                  >
                    <Linkedin className="w-6 h-6 text-blue-600 mr-3" />
                    <span className="font-medium text-gray-900">LinkedIn</span>
                  </a>
                  <a
                    href="https://github.com/jashwanth-boddupally"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-all duration-300 hover:scale-105"
                  >
                    <Github className="w-6 h-6 text-gray-800 mr-3" />
                    <span className="font-medium text-gray-900">GitHub</span>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Me a Message</h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="Tell me about your project or just say hello!"
                    ></textarea>
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-gray-200">
          <p className="text-gray-600">
            © 2024 Jashwanth Boddupally. Built with ❤️ and React.js
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
