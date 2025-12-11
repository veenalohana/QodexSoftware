import { Card, CardContent } from "@/components/ui/card";

const Technologies = () => {
  const techStacks = [
    {
      category: "Frontend",
      technologies: ["React", "Vue.js", "Angular", "Next.js", "TypeScript", "Tailwind CSS"]
    },
    {
      category: "Backend",
      technologies: ["Node.js", "Python", "Java", "PHP", "PostgreSQL", "MongoDB"]
    },
    {
      category: "Mobile",
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Ionic", "Firebase"]
    },
    {
      category: "Design",
      technologies: ["Figma", "Adobe XD", "Illustrator", "Photoshop", "Sketch", "InVision"]
    }
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-primary">
              Technology <span className="text-secondary">Stack</span>
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto" />
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We work with the latest and most powerful technologies to deliver cutting-edge solutions
            </p>
          </div>

          {/* Tech Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {techStacks.map((stack, index) => (
              <Card 
                key={index}
                className="border-2 border-border hover:border-secondary transition-all duration-300 hover:shadow-elegant group"
              >
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-primary group-hover:text-secondary transition-colors mb-6">
                    {stack.category}
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {stack.technologies.map((tech, techIndex) => (
                      <div
                        key={techIndex}
                        className="p-4 rounded-lg bg-muted hover:bg-secondary hover:text-white transition-all duration-300 text-center font-medium cursor-pointer transform hover:scale-105"
                      >
                        {tech}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-border">
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              And many more! We constantly evolve our technology stack to ensure we're using the best tools for your project.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;