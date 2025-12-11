import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Twitter, Github } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      initials: "SJ",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Michael Chen",
      role: "CTO",
      initials: "MC",
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Emily Davis",
      role: "Lead Designer",
      initials: "ED",
      color: "from-orange-500 to-red-500"
    },
    {
      name: "James Wilson",
      role: "Senior Developer",
      initials: "JW",
      color: "from-green-500 to-teal-500"
    },
     {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      initials: "SJ",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Michael Chen",
      role: "CTO",
      initials: "MC",
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Emily Davis",
      role: "Lead Designer",
      initials: "ED",
      color: "from-orange-500 to-red-500"
    },
    {
      name: "James Wilson",
      role: "Senior Developer",
      initials: "JW",
      color: "from-green-500 to-teal-500"
    }
  ];

  // Duplicate data for infinite scrolling
  const movingMembers = [...teamMembers, ...teamMembers];

  return (
    <section id="team" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className=" mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-primary">
              Meet Our <span className="text-secondary">Team</span>
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto" />
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Talented professionals passionate about creating exceptional digital experiences
            </p>
          </div>

          {/* Team Grid */}
          {/* <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {teamMembers.map((member, index) => (
              <Card 
                key={index}
                className="border-2 border-border hover:border-secondary transition-all duration-300 hover:shadow-elegant group"
              >
                <CardContent className="p-6 text-center space-y-4">
                  
                  <div className={`w-32 h-32 mx-auto bg-gradient-to-br ${member.color} rounded-full flex items-center justify-center text-4xl font-bold text-white group-hover:scale-110 transition-transform duration-300`}>
                    {member.initials}
                  </div>
                  
                 
                  <div>
                    <h3 className="text-xl font-bold text-primary group-hover:text-secondary transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                  </div>

                  
                  <div className="flex justify-center gap-3 pt-2">
                    <button className="w-9 h-9 rounded-full bg-muted hover:bg-secondary hover:text-white transition-all flex items-center justify-center">
                      <Linkedin className="w-4 h-4" />
                    </button>
                    <button className="w-9 h-9 rounded-full bg-muted hover:bg-secondary hover:text-white transition-all flex items-center justify-center">
                      <Twitter className="w-4 h-4" />
                    </button>
                    <button className="w-9 h-9 rounded-full bg-muted hover:bg-secondary hover:text-white transition-all flex items-center justify-center">
                      <Github className="w-4 h-4" />
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div> */}

          {/* Join Team CTA */}
          {/* <div className="text-center p-12 rounded-2xl bg-card border-2 border-border">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Want to Join Our Team?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              We're always looking for talented individuals who are passionate about technology and innovation
            </p>
            <button className="px-8 py-3 bg-secondary hover:bg-secondary/90 text-white rounded-lg font-medium transition-all shadow-glow">
              View Open Positions
            </button>
          </div> */}

            {/*  MOVING SLIDER  */}
          <div className="overflow-hidden relative">
            <div className="flex gap-8 animate-scroll whitespace-nowrap">
              {movingMembers.map((member, index) => (
                <Card
                  key={index}
                  className="min-w-[260px] border-2 border-border hover:border-secondary transition-all duration-300 hover:shadow-elegant"
                >
                  <CardContent className="p-6 text-center space-y-4">
                    {/* Avatar */}
                    <div className={`w-28 h-28 mx-auto bg-gradient-to-br ${member.color} rounded-full flex items-center justify-center text-3xl font-bold text-white`}>
                      {member.initials}
                    </div>

                    {/* Info */}
                    <div>
                      <h3 className="text-lg font-bold text-primary">{member.name}</h3>
                      <p className="text-sm text-muted-foreground">{member.role}</p>
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-center gap-3 pt-2">
                      <button className="w-9 h-9 rounded-full bg-muted hover:bg-secondary hover:text-white transition-all flex items-center justify-center">
                        <Linkedin className="w-4 h-4" />
                      </button>
                      <button className="w-9 h-9 rounded-full bg-muted hover:bg-secondary hover:text-white transition-all flex items-center justify-center">
                        <Twitter className="w-4 h-4" />
                      </button>
                      <button className="w-9 h-9 rounded-full bg-muted hover:bg-secondary hover:text-white transition-all flex items-center justify-center">
                        <Github className="w-4 h-4" />
                      </button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

        </div>
      </div>
        {/* Animation CSS */}
      <style>
        {`
          .animate-scroll {
            animation: scroll-left 15s linear infinite;
          }

          @keyframes scroll-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
    </section>
  );
};

export default Team;