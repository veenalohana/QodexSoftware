import { Code2, Globe, Smartphone, Palette, Layers } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const AllServices = () => {
  const navigate = useNavigate();
  

  const services = [
    {
      icon: Code2,
      title: "Custom Software Development",
      description: "Tailored software solutions designed to meet your unique business requirements. From enterprise applications to automation tools.",
      features: [
        "Enterprise Software Solutions",
        "Business Process Automation",
        "Cloud-Based Applications",
        "System Integration",
        "Legacy System Modernization"
      ],
      color: "from-blue-600 to-cyan-500",
      route: "/services/custom-software"
    },
    {
      icon: Globe,
      title: "Website Design & Development",
      description: "Build stunning, responsive websites that captivate your audience and drive conversions. From landing pages to complex web applications.",
      features: [
        "Custom Website Design",
        "E-commerce Solutions",
        "Progressive Web Apps",
        "CMS Development",
        "API Integration"
      ],
      color: "from-blue-500 to-cyan-500",
      route: "/services/website-development"
    },
    {
      icon: Smartphone,
      title: "Mobile Application Development",
      description: "Create powerful mobile experiences for iOS and Android. Native or cross-platform solutions tailored to your business needs.",
      features: [
        "iOS & Android Apps",
        "Cross-Platform Development",
        "Mobile UI/UX Design",
        "App Maintenance & Support",
        "Backend Integration"
      ],
      color: "from-purple-500 to-pink-500",
      route: "/services/mobile-app"
    },
    {
      icon: Layers,
      title: "UI/UX Designing",
      description: "Design intuitive, user-centered interfaces that delight users and drive engagement. Beautiful meets functional.",
      features: [
        "User Research & Analysis",
        "Wireframing & Prototyping",
        "Interface Design",
        "Usability Testing",
        "Design Systems"
      ],
      color: "from-green-500 to-teal-500",
      route: "/services/ui-ux"
    },
    {
      icon: Palette,
      title: "Graphic Designing and Branding",
      description: "Transform your brand with stunning visual identity. From logos to complete brand packages that make you stand out.",
      features: [
        "Logo Design & Brand Identity",
        "Marketing Materials",
        "Social Media Graphics",
        "Print Design",
        "Brand Guidelines"
      ],
      color: "from-orange-500 to-red-500",
      route: "/services/graphic-branding"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className=" bg-gradient-to-br from-primary to-secondary pt-32 pb-20 bg-card">
        <div>
          <div className="container mx-auto px-4">
           <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16 space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold text-white">
                Our <span className="text-secondary">Services</span>
              </h1>
              <div className="w-24 h-1 bg-secondary mx-auto" />
              <p className="text-lg text-black max-w-3xl mx-auto">
                Comprehensive digital solutions to transform your business and elevate your brand
              </p>
            </div>
           </div>
          </div>
        </div>
       </section>
       

            {/* Services Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-12 m-10">
              {services.map((service, index) => (
                <Card 
                  key={index} 
                  className="border-2 border-border hover:border-secondary transition-all duration-300 hover:shadow-elegant group overflow-hidden"
                >
                  <CardHeader className="space-y-4 pb-4">
                    <div className="flex items-start justify-between">
                      <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-6xl font-bold text-muted/10">0{index + 1}</div>
                    </div>
                    <CardTitle className="text-2xl text-primary group-hover:text-secondary transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button 
                      variant="outline" 
                      className="w-full border-secondary text-secondary hover:bg-secondary hover:text-white group-hover:shadow-glow transition-all"
                      onClick={() => navigate(service.route)}
                    >
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* CTA Section */}
            <div className="text-center p-12 rounded-2xl bg-gradient-to-br from-primary to-secondary relative  overflow-hidden">
              <div className="absolute inset-0 tech-grid opacity-10" />
              <div className="relative z-10 space-y-6">
                <h3 className="text-3xl font-bold text-white">
                  Ready to Start Your Project?
                </h3>
                <p className="text-white/90 max-w-2xl mx-auto">
                  Let's discuss how we can help bring your vision to life with our comprehensive digital solutions
                </p>
                <Button 
                  size="lg"
                   onClick={() => window.location.href = ('/#contact')}
                  className="bg-white text-primary hover:bg-white/90 shadow-glow"
                >
                  Get a Free Consultation
                </Button>
              </div>
            </div>
        

      <Footer />
    </div>
  );
};

export default AllServices;