import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const PortfolioSection = () => {
  const projects = [
    {
      title: "Fetal.AI",
      description: "AI/ML system analyzing fetal health data for early complication detection using advanced machine learning algorithms.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
      tags: ["AI/ML", "Python", "Healthcare", "Data Analysis"],
      featured: true,
    },
    {
      title: "Railway Sentry Safety System",
      description: "AI-powered railway safety alerts system designed to prevent collisions and enhance transportation safety.",
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&h=400&fit=crop",
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
    <section id="portfolio" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing innovative projects that blend AI intelligence with practical solutions
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Featured Projects</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.filter(project => project.featured).map((project, index) => (
              <Card key={project.title} className="group overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button variant="outline" className="group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Other Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.filter(project => !project.featured).map((project, index) => (
              <Card key={project.title} className="group border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <CardContent className="p-5">
                  <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
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
                  <Button size="sm" variant="outline" className="w-full group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
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
