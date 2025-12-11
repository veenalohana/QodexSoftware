import { Globe, Code2, Rocket, Shield, Zap, CheckCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const WebsiteDevelopment = () => {
  const features = [
    { icon: Code2, title: "Custom Development", description: "Tailored solutions built from scratch to match your exact requirements" },
    { icon: Zap, title: "High Performance", description: "Lightning-fast load times and optimized performance for better user experience" },
    { icon: Shield, title: "Secure & Reliable", description: "Industry-standard security practices and robust infrastructure" },
    { icon: Rocket, title: "Scalable Solutions", description: "Built to grow with your business, handling increased traffic seamlessly" },
  ];

  const services = [
    "Custom Website Design & Development",
    "E-commerce Solutions (WooCommerce, Shopify, Custom)",
    "Progressive Web Apps (PWA)",
    "Content Management Systems (WordPress, Custom CMS)",
    "API Development & Integration",
    "Responsive & Mobile-First Design",
    "Website Maintenance & Support",
    "Performance Optimization & SEO",
  ];

  const process = [
    { step: "01", title: "Discovery", description: "Understanding your business goals and requirements" },
    { step: "02", title: "Design", description: "Creating wireframes and visual designs for approval" },
    { step: "03", title: "Development", description: "Building your website with clean, scalable code" },
    { step: "04", title: "Testing", description: "Rigorous quality assurance and user testing" },
    { step: "05", title: "Launch", description: "Deploying your website and ensuring smooth go-live" },
    { step: "06", title: "Support", description: "Ongoing maintenance and continuous improvements" },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary to-secondary relative overflow-hidden">
        <div className="absolute inset-0 tech-grid opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white space-y-6">
            <Globe className="w-20 h-20 mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold">Website Development</h1>
            <p className="text-xl text-white/90">
              Build stunning, responsive websites that captivate your audience and drive conversions. 
              From simple landing pages to complex web applications.
            </p>
            <Button 
              size="lg" 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
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
              Why Choose Our Web Development Services?
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
              Our Web Development <span className="text-secondary">Services</span>
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
            <h2 className="text-4xl font-bold">Ready to Build Your Dream Website?</h2>
            <p className="text-xl text-white/90">
              Let's discuss your project and create a website that drives real results for your business.
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

export default WebsiteDevelopment;
