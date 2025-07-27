
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const skills = [
    { name: "Python", level: 90 },
    { name: "AI/ML", level: 85 },
    { name: "React.js", level: 88 },
    { name: "Flask", level: 82 },
    { name: "Flutter", level: 78 },
    { name: "LangChain", level: 80 },
    { name: "HTML/CSS", level: 92 },
    { name: "LLMs", level: 75 },
  ];

  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden">
      {/* Neon background elements */}
      <div className="absolute top-40 right-20 w-64 h-64 rounded-full bg-gradient-to-r from-green-400/20 to-blue-400/20 blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-gradient-to-r from-purple-400/20 to-pink-400/20 blur-3xl"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            About <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about creating intelligent solutions that make a difference
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="glass-morphism p-6 border-none shadow-lg hover:shadow-xl transition-all duration-[2000ms]">
              <div className="p-0">
                <h3 className="text-2xl font-bold text-foreground mb-4">My Journey</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I'm a final-year B.Tech Computer Science student specializing in AI and Machine Learning, 
                  graduating in 2025. My passion lies in developing intelligent systems that solve real-world 
                  problems and creating seamless web experiences.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  With expertise in Python, AI/ML frameworks, and modern web technologies, I've worked on 
                  diverse projects ranging from healthcare AI systems to railway safety solutions. I'm 
                  particularly excited about the intersection of AI and web development.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I'm always eager to collaborate on innovative projects and learn new technologies. 
                  Let's build something amazing together!
                </p>
              </div>
            </div>

            <div className="glass-morphism p-6 border-none shadow-lg hover:shadow-xl transition-all duration-[2000ms]">
              <div className="p-0">
                <h3 className="text-2xl font-bold text-foreground mb-4">Education</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-foreground">B.Tech Computer Science (AI & ML)</h4>
                    <p className="text-muted-foreground">Expected Graduation: 2025</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8">Technical Skills</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={skill.name} className="skill-item transition-all duration-[2000ms]" style={{ animationDelay: `${index * 200}ms` }}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-foreground">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-[3000ms] ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
