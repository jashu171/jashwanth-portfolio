
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
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            About <span className="bg-gradient-to-r from-gray-600 to-gray-800 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate about creating intelligent solutions that make a difference
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <Card className="p-6 border-none shadow-lg hover:shadow-xl transition-all duration-[2000ms] bg-white/80 backdrop-blur-sm">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">My Journey</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  I'm a final-year B.Tech Computer Science student specializing in AI and Machine Learning, 
                  graduating in 2025. My passion lies in developing intelligent systems that solve real-world 
                  problems and creating seamless web experiences.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  With expertise in Python, AI/ML frameworks, and modern web technologies, I've worked on 
                  diverse projects ranging from healthcare AI systems to railway safety solutions. I'm 
                  particularly excited about the intersection of AI and web development.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  I'm always eager to collaborate on innovative projects and learn new technologies. 
                  Let's build something amazing together!
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 border-none shadow-lg hover:shadow-xl transition-all duration-[2000ms] bg-white/80 backdrop-blur-sm">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Education</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-gray-900">B.Tech Computer Science (AI & ML)</h4>
                    <p className="text-gray-600">Expected Graduation: 2025</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Technical Skills</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={skill.name} className="skill-item transition-all duration-[2000ms]" style={{ animationDelay: `${index * 200}ms` }}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-gray-900">{skill.name}</span>
                    <span className="text-sm text-gray-600">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-gray-500 to-gray-700 h-2 rounded-full transition-all duration-[3000ms] ease-out"
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
