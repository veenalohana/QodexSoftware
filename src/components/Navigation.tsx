import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Code2, Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import LogoImage from "@/assets/image.png";



const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("");

 

useEffect(() => {

    // Check if the URL has a hash (e.g., #services)

    if (location.hash) {

      const id = location.hash.substring(1); // Get the section ID without '#'
      const element = document.getElementById(id);

     

      // Use a small timeout to ensure the component has rendered

      // and the browser has processed the route change.

      setTimeout(() => {

        element?.scrollIntoView({ behavior: 'smooth' });
          }, 100);
           }
            }, [location.hash]); // Rerun effect when the hash changes





  useEffect(() => {
    const handleScroll = () => {
     setIsScrolled(window.scrollY > 50);
   };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  // const scrollToSection = (id: string) => {

  //   const element = document.getElementById(id);

  //   element?.scrollIntoView({ behavior: "smooth" });

  //   setIsMobileMenuOpen(false);

  // };



  const scrollToSection = (id: string) => {

    if (location.pathname === "/") {
     const element = document.getElementById(id);
     element?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(`/#${id}`);
    }
    setIsMobileMenuOpen(false);
  };



  const navItems = [
   { label: "Home", id: "home" },
   { label: "About", id: "about" },
   { label: "Services", id: "services" },
   { label: "Portfolio", id: "portfolio" },
   { label: "Process", id: "process" },
   { label: "Team", id: "team" },
   { label: "Contact", id: "contact" }
  ];



  return (

    <nav
    className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled
       ? "bg-card/95 backdrop-blur-md shadow-elegant"
       : "bg-transparent"
      }`}
   >

      <div className="container mx-auto px-4">
         <div className="flex items-center justify-between h-20">

          {/* Logo */}

          <div
           className="flex items-center gap-2 cursor-pointer"
           onClick={() => scrollToSection('home')}
         >
           <img  src={LogoImage}  className=" w-18 h-20 " />
           <span className={`text-2xl font-bold ${isScrolled ? 'text-primary' : 'text-primary-foreground'}`}>
              Qodex
            </span>
          </div>



          {/* Desktop Navigation */}

          <div className="hidden md:flex items-center gap-8">
                  {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveItem(item.id);
                  scrollToSection(item.id);
                   }}

                 className={`text-sm font-medium hover:text-secondary transition-colors ${

                  // isScrolled ? 'text-foreground' : 'text-primary-foreground'

                   activeItem === item.id

                    ? "text-secondary "

                    : isScrolled

                    ? "text-foreground hover:text-secondary"

                    : "text-primary-foreground hover:text-secondary"

                   }

                  `}

                   >

                {item.label}

              </button>

             

            ))}



            <Button

              onClick={() => {

                 scrollToSection('contact');

                setActiveItem('contact');}

              }

              className="bg-secondary hover:bg-secondary/90 text-white"

            >

              Get Started

            </Button>

          </div>



          {/* Mobile Menu Button */}

          <button

            className="md:hidden"

            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}

          >

            {isMobileMenuOpen ? (

              <X className={`w-6 h-6 ${isScrolled ? 'text-foreground' : 'text-primary-foreground'}`} />

            ) : (

              <Menu className={`w-6 h-6 ${isScrolled ? 'text-foreground' : 'text-primary-foreground'}`} />

            )}

          </button>

        </div>

      </div>



      {/* Mobile Menu */}

      {isMobileMenuOpen && (

        <div className="md:hidden bg-card border-t border-border">

          <div className="container mx-auto px-4 py-4 space-y-4">

            {navItems.map((item) => (

              <button

                key={item.id}

                onClick={() => scrollToSection(item.id)}

                className="block w-full text-left text-foreground hover:text-secondary transition-colors py-2"

              >

                {item.label}

              </button>

            ))}

            <Button

              onClick={() => scrollToSection('contact')}

              className="w-full bg-secondary hover:bg-secondary/90 text-white"

            >

              Get Started

            </Button>

          </div>

        </div>

      )}

    </nav>

  );

};



export default Navigation;