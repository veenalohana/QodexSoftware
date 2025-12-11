import { Palette, Zap, Sparkles, CheckCircle, Brush, Award } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const GraphicBranding = () => {
  const features = [
    { icon: Brush, title: "Creative Excellence", description: "Unique, eye-catching designs that capture your brand essence" },
    { icon: Award, title: "Professional Quality", description: "Print-ready and web-optimized files meeting industry standards" },
    { icon: Sparkles, title: "Brand Consistency", description: "Cohesive visual identity across all touchpoints" },
    { icon: Zap, title: "Fast Turnaround", description: "Quick delivery without compromising on quality" },
  ];

  const services = [
    "Logo Design & Brand Identity",
    "Brand Guidelines & Style Guides",
    "Business Cards & Stationery",
    "Marketing Materials (Brochures, Flyers)",
    "Social Media Graphics",
    "Packaging Design",
    "Print Design (Posters, Banners)",
    "Brand Refresh & Redesign",
  ];

  const process = [
    { step: "01", title: "Brief", description: "Understanding your brand values and visual preferences" },
    { step: "02", title: "Research", description: "Analyzing competitors and industry design trends" },
    { step: "03", title: "Concept", description: "Creating initial design concepts and mood boards" },
    { step: "04", title: "Design", description: "Developing refined designs based on feedback" },
    { step: "05", title: "Refinement", description: "Polishing and perfecting the chosen direction" },
    { step: "06", title: "Delivery", description: "Providing all files and brand guidelines" },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary to-secondary relative overflow-hidden">
        <div className="absolute inset-0 tech-grid opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white space-y-6">
            <Palette className="w-20 h-20 mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold">Graphic Designing and Branding</h1>
            <p className="text-xl text-white/90">
              Transform your brand with stunning visual identity. From logos to complete brand packages 
              that make you stand out and leave a lasting impression.
            </p>
            <Button 
              size="lg" 
              onClick={() => window.location.href = '/#contact'}
              className="bg-white text-primary hover:bg-white/90 shadow-glow mt-8"
            >
              Start Your Brand Journey
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-primary">
              Why Choose Our Design & Branding Services?
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
              Our Design & Branding <span className="text-secondary">Services</span>
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
            <h2 className="text-4xl font-bold">Ready to Elevate Your Brand?</h2>
            <p className="text-xl text-white/90">
              Let's create a visual identity that captures your essence and connects with your audience.
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

export default GraphicBranding;