import { Lightbulb, FileText, Code, Rocket } from "lucide-react";

const Process = () => {
  const steps = [
    {
      icon: Lightbulb,
      title: "Discovery",
      description: "We start by understanding your vision, goals, and target audience to create a solid foundation"
    },
    {
      icon: FileText,
      title: "Planning",
      description: "Strategic planning and detailed roadmap to ensure every aspect is covered before development"
    },
    {
      icon: Code,
      title: "Development",
      description: "Expert team builds your solution using cutting-edge technologies and best practices"
    },
    {
      icon: Rocket,
      title: "Launch",
      description: "Rigorous testing, deployment, and ongoing support to ensure your success"
    }
  ];

  return (
    <section id="process" className="py-24 bg-card relative overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-primary">
              Our <span className="text-secondary">Process</span>
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto" />
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A proven methodology that delivers exceptional results every time
            </p>
          </div>

          {/* Process Steps */}
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent -translate-y-1/2 z-0" />
            
            <div className="grid md:grid-cols-4 gap-8 relative z-10">
              {steps.map((step, index) => (
                <div key={index} className="text-center space-y-4">
                  {/* Icon Circle */}
                  <div className="relative mx-auto">
                    <div className="w-24 h-24 mx-auto bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-glow">
                      <step.icon className="w-12 h-12 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-10 h-10 bg-accent rounded-full flex items-center justify-center text-white font-bold border-4 border-card">
                      {index + 1}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-primary">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline Info */}
          <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-border">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-secondary mb-2">2-4 Weeks</div>
                <div className="text-sm text-muted-foreground">Average Project Timeline</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Support Available</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Client Involvement</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;