import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Instagram, Github } from "lucide-react";
import LogoImage from '@/assets/image.png'


const Footer = () => {
  const footerLinks = {
    Company: ["About Us", "Our Team", "Contact"],
    Services: ["Custom Software Development", "Website Design & Development", "Mobile Application Development", "Graphic Designing and Branding", "UI/UX Design"],
    Legal: ["Privacy Policy", "Terms of Service"]
  };

  const socialLinks = [
    { icon: Facebook, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: Instagram, href: "#" },
   
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <img  src={LogoImage}  className=" w-18 h-20 " />
              <span className="text-2xl font-bold">Qodex Software</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Transforming ideas into exceptional digital experiences. Your trusted partner in software development.
            </p>
            <div className="flex gap-3 pt-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-secondary flex items-center justify-center transition-all hover:scale-110"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

         {Object.entries(footerLinks).map(([title, links]) => 
          ( <div key={title}> 
          <h3 className="font-bold text-lg mb-4 text-secondary">{title}</h3> 
          <ul className="space-y-2"> {links.map((link, index) => ( <li key={index}>
            <a href="/" className="text-primary-foreground/80 hover:text-secondary transition-colors" > 
              {link}
            </a> 
            </li> 
                ))} 
              </ul>
             </div> 
            ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/10 flex justify-center">
         <p className="text-primary-foreground/80 text-sm  ">
              © {new Date().getFullYear()} Qodex Software. All rights reserved.
         </p>
           
         
        </div>
      </div>
    </footer>
  );
};

export default Footer;