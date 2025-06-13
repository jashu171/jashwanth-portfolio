
import { Card, CardContent } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      title: "AI Engineering",
      description: "Developing intelligent systems using machine learning, natural language processing, and deep learning technologies to solve complex real-world problems.",
      features: [
        "Machine Learning Model Development",
        "Natural Language Processing",
        "Computer Vision Solutions",
        "AI Integration & Deployment",
        "LLM Implementation",
        "Intelligent Automation"
      ],
      icon: "🤖",
      color: "from-sky-500 to-cyan-500"
    },
    {
      title: "Web Development",
      description: "Creating modern, responsive web applications with cutting-edge technologies, focusing on user experience and performance optimization.",
      features: [
        "React.js Applications",
        "Flask Backend Development",
        "Responsive Design",
        "API Integration",
        "Database Management",
        "Performance Optimization"
      ],
      icon: "💻",
      color: "from-cyan-500 to-sky-500"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-sky-700 mb-6">
            My <span className="bg-gradient-to-r from-sky-500 to-cyan-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-sky-600 max-w-3xl mx-auto">
            Comprehensive solutions combining AI innovation with modern web development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={service.title} className="group border-none shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden">
              <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <span className="text-4xl mr-4">{service.icon}</span>
                  <h3 className="text-2xl font-bold text-sky-700 group-hover:text-sky-600 transition-colors">
                    {service.title}
                  </h3>
                </div>
                
                <p className="text-sky-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-3">
                  <h4 className="font-semibold text-sky-700 mb-3">Key Offerings:</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={feature} className="flex items-center">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} mr-3 flex-shrink-0`}></div>
                        <span className="text-sky-600 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-sky-100">
                  <div className="flex items-center text-sm text-sky-500">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                    Available for new projects
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-sky-50 to-cyan-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-sky-700 mb-4">
              Ready to bring your ideas to life?
            </h3>
            <p className="text-sky-600 mb-6 max-w-2xl mx-auto">
              Let's collaborate on your next project and create something amazing together. 
              I'm passionate about delivering innovative solutions that make a real impact.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-gradient-to-r from-sky-500 to-cyan-600 hover:from-sky-600 hover:to-cyan-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
