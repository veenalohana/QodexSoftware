import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ExternalLink, Github, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

interface Project {
  title: string;
  category: string;
  description: string;
  tags: string[];
  color: string;
  fullDescription?: string;
  features?: string[];
}

const Portfolio = () => {
  const navigate = useNavigate();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  const projects: Project[] = [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      description: "Full-stack e-commerce solution with payment integration and inventory management",
      tags: ["React", "Node.js", "MongoDB"],
      color: "from-blue-500/20 to-cyan-500/20",
      fullDescription: "A comprehensive e-commerce platform built for a retail client, featuring secure payment processing, real-time inventory management, and an intuitive admin dashboard.",
      features: ["Secure payment gateway integration", "Real-time inventory tracking", "Customer analytics dashboard", "Mobile-responsive design"]
    },
    {
      title: "Fitness Tracking App",
      category: "Mobile App",
      description: "Cross-platform mobile app for workout tracking and nutrition planning",
      tags: ["React Native", "Firebase"],
      color: "from-purple-500/20 to-pink-500/20",
      fullDescription: "A feature-rich fitness application that helps users track their workouts, monitor nutrition, and achieve their health goals with personalized recommendations.",
      features: ["Workout logging and tracking", "Nutrition calculator", "Progress analytics", "Social sharing features"]
    },
    {
      title: "Brand Identity Design",
      category: "Graphic Design",
      description: "Complete brand identity package for startup including logo, guidelines, and assets",
      tags: ["Illustrator", "Figma"],
      color: "from-orange-500/20 to-red-500/20",
      fullDescription: "A complete brand identity overhaul for an emerging tech startup, including logo design, color palette, typography guidelines, and marketing collateral.",
      features: ["Logo design and variations", "Brand style guide", "Marketing templates", "Social media assets"]
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-primary">
              Our <span className="text-secondary">Portfolio</span>
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto" />
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Explore our latest projects and see how we've helped businesses achieve their digital goals
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="group border-2 border-border hover:border-secondary transition-all duration-300 hover:shadow-elegant overflow-hidden"
              >
                <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 tech-grid opacity-30" />
                  <div className="relative z-10 text-center space-y-2 p-6">
                    <div className="text-5xl font-bold text-primary/20">0{index + 1}</div>
                    <div className="text-sm font-semibold text-secondary bg-white/90 px-3 py-1 rounded-full inline-block">
                      {project.category}
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
                </div>
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-primary group-hover:text-secondary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span 
                        key={idx}
                        className="text-xs px-3 py-1 bg-muted text-foreground rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2 pt-2">
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="flex-1 border-secondary text-secondary hover:bg-secondary hover:text-white"
                      onClick={() => setSelectedProject(project)}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View
                    </Button>
                    
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* View More */}
          <div className="text-center">
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-white"
              onClick={() => navigate('/portfolio')}
            >
              View All Projects
            </Button>
          </div>
        </div>
      </div>

      {/* Project Detail Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-primary">
              {selectedProject?.title}
            </DialogTitle>
            <DialogDescription className="text-secondary font-medium">
              {selectedProject?.category}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-6 py-4">
            <div className={`h-40 bg-gradient-to-br ${selectedProject?.color} rounded-lg flex items-center justify-center`}>
              <div className="text-6xl font-bold text-primary/20">
                {selectedProject?.title?.charAt(0)}
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              {selectedProject?.fullDescription}
            </p>
            {selectedProject?.features && (
              <div>
                <h4 className="font-semibold text-primary mb-3">Key Features</h4>
                <ul className="space-y-2">
                  {selectedProject.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="flex flex-wrap gap-2">
              {selectedProject?.tags.map((tag, idx) => (
                <span 
                  key={idx}
                  className="text-xs px-3 py-1 bg-muted text-foreground rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Portfolio;