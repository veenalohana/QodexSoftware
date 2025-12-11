import { Code2, Zap, Shield, Rocket, CheckCircle, Cloud } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CustomSoftware = () => {
  const features = [
    { icon: Code2, title: "Custom Solutions", description: "Tailored software built specifically for your business needs and workflows" },
    { icon: Zap, title: "High Performance", description: "Optimized code and architecture for maximum efficiency and speed" },
    { icon: Shield, title: "Secure & Reliable", description: "Enterprise-grade security and robust infrastructure" },
    { icon: Rocket, title: "Scalable Architecture", description: "Built to grow with your business and handle increased demands" },
  ];

  const services = [
    "Enterprise Software Solutions",
    "Business Process Automation",
    "Cloud-Based Applications",
    "System Integration & APIs",
    "Legacy System Modernization",
    "Custom CRM & ERP Systems",
    "Data Analytics & Reporting Tools",
    "Workflow Management Systems",
  ];

  const process = [
    { step: "01", title: "Requirements Analysis", description: "Deep dive into your business processes and needs" },
    { step: "02", title: "Architecture Design", description: "Creating scalable system architecture and technical specifications" },
    { step: "03", title: "Development", description: "Agile development with regular updates and feedback loops" },
    { step: "04", title: "Testing & QA", description: "Comprehensive testing including unit, integration, and user acceptance" },
    { step: "05", title: "Deployment", description: "Smooth rollout with training and documentation" },
    { step: "06", title: "Support & Maintenance", description: "Ongoing support and continuous improvement" },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary to-secondary relative overflow-hidden">
        <div className="absolute inset-0 tech-grid opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white space-y-6">
            <Code2 className="w-20 h-20 mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold">Custom Software Development</h1>
            <p className="text-xl text-white/90">
              Tailored software solutions designed to meet your unique business requirements. 
              From enterprise applications to automation tools that transform your operations.
            </p>
            <Button 
              size="lg" 
              onClick={() => window.location.href = '/#contact'}
              className="bg-white text-primary hover:bg-white/90 shadow-glow mt-8"
            >
              Start Your Project
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-primary">
              Why Choose Our Custom Software Development?
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
              Our Custom Software <span className="text-secondary">Services</span>
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
              Our Development Process
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
            <h2 className="text-4xl font-bold">Ready to Build Your Custom Solution?</h2>
            <p className="text-xl text-white/90">
              Let's discuss your unique requirements and create software that perfectly fits your business.
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

export default CustomSoftware;