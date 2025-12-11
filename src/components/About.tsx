import { Award, Target, Users, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";


const About = () => {
  const values = [
    {
      icon: Target,
      title: "Precision",
      description: "Every line of code, every pixel perfectly crafted for excellence"
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Cutting-edge solutions that push technological boundaries"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working hand-in-hand with clients to achieve their vision"
    },
    {
      icon: Award,
      title: "Quality",
      description: "Uncompromising standards in every project we deliver"
    }
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-primary">
              About <span className="text-secondary">Qodex Software</span>
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto" />
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We are a team of passionate developers, designers, and innovators dedicated to transforming ideas into digital reality
            </p>
          </div>

          {/* Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-primary">
                Crafting Digital Excellence Since Day One
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Qodex Software is more than just a software house – we're your technology partner in the digital age. 
                Our mission is to empower businesses with innovative, scalable, and beautiful digital solutions that drive growth and success.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                From startups to enterprises, we've helped hundreds of clients bring their visions to life through 
                cutting-edge web development, mobile applications, and stunning design work. Our team combines technical 
                expertise with creative excellence to deliver solutions that exceed expectations.
              </p>
              {/* <div className="flex gap-4 pt-4">
                <div className="flex-1 p-4 bg-card rounded-lg border border-border">
                  <div className="text-3xl font-bold text-secondary mb-1">10+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="flex-1 p-4 bg-card rounded-lg border border-border">
                  <div className="text-3xl font-bold text-secondary mb-1">500+</div>
                  <div className="text-sm text-muted-foreground">Projects Delivered</div>
                </div>
                <div className="flex-1 p-4 bg-card rounded-lg border border-border">
                  <div className="text-3xl font-bold text-secondary mb-1">50+</div>
                  <div className="text-sm text-muted-foreground">Team Members</div>
                </div>
              </div> */}
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary to-secondary p-1">
                <div className="w-full h-full bg-background rounded-xl flex items-center justify-center tech-grid">
                  <div className="text-center space-y-4 p-8">
                    <div className="text-6xl font-bold text-secondary">Code</div>
                    <div className="text-2xl text-muted-foreground">the</div>
                    <div className="text-6xl font-bold text-primary">Future</div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 w-24 h-24 border-4 border-accent rounded-lg animate-float opacity-50" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 border-4 border-secondary rounded-full animate-float opacity-30" style={{ animationDelay: '1s' }} />
            </div>
          </div>

          {/* Values */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="border-border hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-secondary to-accent rounded-xl flex items-center justify-center">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-primary">{value.title}</h4>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;