
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const PortfolioSection = () => {
  const projects = [
    {
      title: "Fetal.AI",
      description: "AI/ML system analyzing fetal health data for early complication detection using advanced machine learning algorithms.",
      image: "https://images.unsplash.com/photo-1609188076864-c35269136351?w=600&h=400&fit=crop",
      tags: ["AI/ML", "Python", "Healthcare", "Data Analysis"],
      featured: true,
    },
    {
      title: "Railway Sentry Safety System",
      description: "AI-powered railway safety alerts system designed to prevent collisions and enhance transportation safety.",
      image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=600&h=400&fit=crop",
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
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      tags: ["AI Agents", "LangChain", "Python", "Automation"],
      featured: false,
    },
    {
      title: "AI Agent Browser UI",
      description: "Intuitive user interface for controlling web browsers through AI commands and natural language processing.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      tags: ["AI", "Browser Control", "React", "UI/UX"],
      featured: false,
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-background relative overflow-hidden scroll-fade-in">
      {/* Neon background elements */}
      <div className="absolute top-20 left-10 w-96 h-96 rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-400/20 blur-3xl animate-pulse animation-duration-[8s]"></div>
      <div className="absolute bottom-40 right-10 w-80 h-80 rounded-full bg-gradient-to-r from-orange-400/20 to-red-400/20 blur-3xl animate-pulse animation-duration-[6s]"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 animate-fade-in">
            My <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in animation-delay-300">
            Showcasing innovative projects that blend AI intelligence with practical solutions
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 animate-fade-in animation-delay-600">Featured Projects</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.filter(project => project.featured).map((project, index) => (
              <div key={project.title} className="glass-morphism group overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-[2000ms] hover:scale-105 animate-slide-up" style={{ animationDelay: `${(index + 1) * 300}ms` }}>
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-[1500ms]"></div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-[1500ms]">
                    {project.title}
                  </h4>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-[1500ms] border-primary/50 text-primary">
                    Learn More
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-8 animate-fade-in animation-delay-1200">Other Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.filter(project => !project.featured).map((project, index) => (
              <div key={project.title} className="glass-morphism group border-none shadow-lg hover:shadow-xl transition-all duration-[1500ms] hover:scale-105 animate-slide-up" style={{ animationDelay: `${(index + 3) * 200}ms` }}>
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-[1500ms] group-hover:scale-110"
                  />
                </div>
                <div className="p-5">
                  <h4 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-[1500ms]">
                    {project.title}
                  </h4>
                  <p className="text-muted-foreground mb-3 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-primary/20 text-primary rounded text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button size="sm" variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-[1500ms] border-primary/50 text-primary">
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
