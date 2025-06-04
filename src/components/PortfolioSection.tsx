
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const PortfolioSection = () => {
  const projects = [
    {
      title: "Fetal.AI",
      description: "AI/ML system analyzing fetal health data for early complication detection using advanced machine learning algorithms.",
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=600&h=400&fit=crop",
      tags: ["AI/ML", "Python", "Healthcare", "Data Analysis"],
      featured: true,
    },
    {
      title: "Railway Sentry Safety System",
      description: "AI-powered railway safety alerts system designed to prevent collisions and enhance transportation safety.",
      image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=600&h=400&fit=crop",
      tags: ["AI", "Safety", "IoT", "Python"],
      featured: true,
    },
    {
      title: "Kerax Meeting Assistant",
      description: "Intelligent AI meeting tool providing real-time transcription, summarization, and automated task tracking.",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop",
      tags: ["AI", "NLP", "React", "Productivity"],
      featured: false,
    },
    {
      title: "Chart Bot",
      description: "AI-powered chatbot that generates interactive charts and visualizations from natural language queries.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      tags: ["AI", "Data Viz", "NLP", "Charts"],
      featured: false,
    },
    {
      title: "Multi AI Agents",
      description: "Collaborative AI agent system designed to solve complex tasks through intelligent agent coordination.",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&h=400&fit=crop",
      tags: ["AI Agents", "LangChain", "Python", "Automation"],
      featured: false,
    },
    {
      title: "AI Agent Browser UI",
      description: "Intuitive user interface for controlling web browsers through AI commands and natural language processing.",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop",
      tags: ["AI", "Browser Control", "React", "UI/UX"],
      featured: false,
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-slate-50 to-gray-50/30 scroll-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
            My <span className="bg-gradient-to-r from-gray-600 to-gray-800 bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in animation-delay-300">
            Showcasing innovative projects that blend AI intelligence with practical solutions
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 animate-fade-in animation-delay-600">Featured Projects</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.filter(project => project.featured).map((project, index) => (
              <Card key={project.title} className="group overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-[2000ms] hover:scale-105 animate-slide-up" style={{ animationDelay: `${(index + 1) * 300}ms` }}>
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-[1500ms]"></div>
                </div>
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors duration-[1500ms]">
                    {project.title}
                  </h4>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button variant="outline" className="group-hover:bg-gray-700 group-hover:text-white transition-all duration-[1500ms]">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 animate-fade-in animation-delay-1200">Other Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.filter(project => !project.featured).map((project, index) => (
              <Card key={project.title} className="group border-none shadow-lg hover:shadow-xl transition-all duration-[1500ms] hover:scale-105 animate-slide-up" style={{ animationDelay: `${(index + 3) * 200}ms` }}>
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-[1500ms] group-hover:scale-110"
                  />
                </div>
                <CardContent className="p-5">
                  <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors duration-[1500ms]">
                    {project.title}
                  </h4>
                  <p className="text-gray-600 mb-3 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button size="sm" variant="outline" className="w-full group-hover:bg-gray-700 group-hover:text-white transition-all duration-[1500ms]">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
