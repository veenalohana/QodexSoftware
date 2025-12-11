import { Layers, Zap, Users, CheckCircle, Lightbulb, Target } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const UiUx = () => {
  const features = [
    { icon: Users, title: "User-Centered", description: "Designs based on real user research and behavioral insights" },
    { icon: Lightbulb, title: "Innovative Solutions", description: "Creative approaches to solve complex UX challenges" },
    { icon: Target, title: "Goal-Oriented", description: "Every design decision aligned with your business objectives" },
    { icon: Zap, title: "Iterative Process", description: "Continuous testing and refinement for optimal results" },
  ];

  const services = [
    "User Research & Analysis",
    "Persona Development",
    "Information Architecture",
    "Wireframing & Prototyping",
    "Interface Design (UI)",
    "Interaction Design",
    "Usability Testing",
    "Design Systems & Style Guides",
  ];

  const process = [
    { step: "01", title: "Research", description: "Understanding users, competitors, and market landscape" },
    { step: "02", title: "Define", description: "Creating user personas and mapping user journeys" },
    { step: "03", title: "Ideate", description: "Brainstorming and sketching potential solutions" },
    { step: "04", title: "Prototype", description: "Building interactive prototypes for testing" },
    { step: "05", title: "Test", description: "Conducting usability tests and gathering feedback" },
    { step: "06", title: "Refine", description: "Iterating based on insights and delivering final designs" },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary to-secondary relative overflow-hidden">
        <div className="absolute inset-0 tech-grid opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white space-y-6">
            <Layers className="w-20 h-20 mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold">UI/UX Designing</h1>
            <p className="text-xl text-white/90">
              Design intuitive, user-centered interfaces that delight users and drive engagement. 
              Beautiful meets functional with our comprehensive design approach.
            </p>
            <Button 
              size="lg" 
              onClick={() => window.location.href = '/#contact'}
              className="bg-white text-primary hover:bg-white/90 shadow-glow mt-8"
            >
              Start Your Design Project
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-primary">
              Why Choose Our UI/UX Design Services?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="border-2 border-border hover:border-secondary transition-all">
                  <CardHeader>
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-4">
                      <feature.icon className="w-7 h-7 text-white" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services List Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-primary">
              Our UI/UX Design <span className="text-secondary">Services</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-lg hover:bg-background transition-colors">
                  <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <span className="text-foreground font-medium">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-primary">
              Our Design Process
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {process.map((item, index) => (
                <Card key={index} className="border-2 border-border hover:border-secondary transition-all">
                  <CardHeader>
                    <div className="text-6xl font-bold text-secondary/20 mb-2">{item.step}</div>
                    <CardTitle className="text-xl text-primary">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white space-y-6">
            <h2 className="text-4xl font-bold">Ready to Transform Your User Experience?</h2>
            <p className="text-xl text-white/90">
              Let's create interfaces that users love and that drive measurable business results.
            </p>
            <Button 
              size="lg"
              onClick={() => window.location.href = '/#contact'}
              className="bg-white text-primary hover:bg-white/90 shadow-glow"
            >
              Get a Free Consultation
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default UiUx;