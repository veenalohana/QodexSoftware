import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Alex Thompson",
      company: "TechStart Inc.",
      role: "CEO",
      content: "Qodex Software transformed our vision into a stunning reality. Their attention to detail and technical expertise is unmatched.",
      rating: 5
    },
    {
      name: "Maria Garcia",
      company: "DesignHub",
      role: "Creative Director",
      content: "Working with Qodex was an absolute pleasure. They delivered beyond our expectations and on time!",
      rating: 5
    },
    {
      name: "David Kim",
      company: "E-Shop Solutions",
      role: "Founder",
      content: "The mobile app they developed for us has significantly improved our customer engagement. Highly recommended!",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-card relative overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-primary">
              Client <span className="text-secondary">Testimonials</span>
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto" />
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Don't just take our word for it - hear what our clients have to say
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index}
                className="border-2 border-border hover:border-secondary transition-all duration-300 hover:shadow-elegant group relative overflow-hidden"
              >
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote className="w-16 h-16 text-secondary" />
                </div>
                <CardContent className="p-6 space-y-4 relative z-10">
                  {/* Rating */}
                  <div className="flex gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-muted-foreground italic leading-relaxed">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="pt-4 border-t border-border">
                    <div className="font-bold text-primary group-hover:text-secondary transition-colors">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "200+", label: "Happy Clients" },
              { value: "4.9/5", label: "Average Rating" },
              { value: "99%", label: "Satisfaction Rate" },
              { value: "150+", label: "5-Star Reviews" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;