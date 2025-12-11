import { Smartphone, Zap, Shield, Rocket, CheckCircle, Users } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const MobileApp = () => {
  const features = [
    { icon: Smartphone, title: "Native & Cross-Platform", description: "iOS, Android, or both - we build apps that feel native to each platform" },
    { icon: Zap, title: "High Performance", description: "Smooth animations and fast response times for excellent user experience" },
    { icon: Shield, title: "Secure & Reliable", description: "Robust security measures and reliable app architecture" },
    { icon: Users, title: "User-Centered Design", description: "Intuitive interfaces designed with your users in mind" },
  ];

  const services = [
    "Native iOS Apps (Swift/SwiftUI)",
    "Native Android Apps (Kotlin/Java)",
    "Cross-Platform Apps (React Native, Flutter)",
    "Mobile UI/UX Design",
    "Backend Integration & APIs",
    "App Store Optimization",
    "App Maintenance & Updates",
    "Performance Optimization",
  ];

  const process = [
    { step: "01", title: "Discovery", description: "Understanding your app vision and target audience" },
    { step: "02", title: "Design", description: "Creating wireframes and beautiful UI designs" },
    { step: "03", title: "Development", description: "Building your app with clean, maintainable code" },
    { step: "04", title: "Testing", description: "Thorough testing on multiple devices and OS versions" },
    { step: "05", title: "Launch", description: "App store submission and deployment support" },
    { step: "06", title: "Support", description: "Ongoing maintenance and feature updates" },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary to-secondary relative overflow-hidden">
        <div className="absolute inset-0 tech-grid opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white space-y-6">
            <Smartphone className="w-20 h-20 mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold">Mobile Application Development</h1>
            <p className="text-xl text-white/90">
              Create powerful mobile experiences for iOS and Android. Native or cross-platform solutions 
              tailored to your business needs and user expectations.
            </p>
            <Button 
              size="lg" 
              onClick={() => window.location.href = '/#contact'}
              className="bg-white text-primary hover:bg-white/90 shadow-glow mt-8"
            >
              Start Your App Project
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-primary">
              Why Choose Our Mobile App Development?
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
              Our Mobile App <span className="text-secondary">Services</span>
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
            <h2 className="text-4xl font-bold">Ready to Build Your Mobile App?</h2>
            <p className="text-xl text-white/90">
              Let's create a mobile experience that your users will love and that drives real results.
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

export default MobileApp;