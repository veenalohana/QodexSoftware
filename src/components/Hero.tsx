import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-tech.jpg";

  const Counter = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    let start = 1;
    const totalSteps = 60; 
    const increment = end / totalSteps;
    const intervalTime = duration / totalSteps;

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(counter);
        setCount(end);
      } else {
        setCount(Math.floor(start));
      }
    }, intervalTime);

    return () => clearInterval(counter);
  }, [end, duration]);

  return <span>{count}</span>;
};

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });

 
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Technology Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-secondary/90" />
      </div>

      {/* Animated Tech Grid */}
      <div className="absolute inset-0 tech-grid opacity-20 z-0" />

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border-2 border-secondary rounded-lg animate-float opacity-30" />
      <div className="absolute bottom-40 right-20 w-16 h-16 border-2 border-accent rounded-full animate-float opacity-30" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/3 right-1/4 w-12 h-12 border-2 border-secondary rounded-lg animate-float opacity-20" style={{ animationDelay: '2s' }} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-5xl mx-auto space-y-8 animate-fade-in">
          {/* Logo/Brand */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground">
              Qodex <span className="text-secondary">Software</span>
            </h1>
          </div>

          {/* Tagline */}
          <div className="flex items-center justify-center gap-2">
            <Sparkles className="w-6 h-6 text-accent animate-pulse" />
            <p className="text-2xl md:text-3xl text-accent font-semibold">
              Code the Future
            </p>
            <Sparkles className="w-6 h-6 text-accent animate-pulse" />
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Transform your digital vision into reality with cutting-edge software solutions. 
            We craft exceptional websites, mobile applications, and stunning designs that drive your business forward.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              size="lg"
              onClick={() => scrollToSection('services')}
              className="bg-secondary hover:bg-secondary/90 text-white shadow-glow group px-8 py-6 text-lg"
            >
              Explore Our Services
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('contact')}
              className="border-2 border-primary-foreground text-gray-500 hover:bg-primary-foreground hover:text-primary px-8 py-6 text-lg">
              Get In Touch
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 max-w-4xl mx-auto">
            {[
              { number: "500", label: "Projects Completed" },
              { number: "200", label: "Happy Clients" },
              { number: "50", label: "Team Members" },
              { number: "99", label: "Client Satisfaction", isPercent: true }
            ].map((stat, index) => (
              <div key={index} className="space-y-2">
                <h3 className="text-3xl md:text-4xl font-bold text-primary-foreground/90">
                  <Counter end={stat.number} />
                   {stat.isPercent ? "%" : "+"}
                </h3>
                <p className="text-sm text-primary-foreground/80">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-10 border-2 border-primary-foreground rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-secondary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;