import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Accueil", href: "#" },
    { label: "Services", href: "#services" },
    { label: "À propos", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-black/95 backdrop-blur-md shadow-lg" : "bg-transparent"
    }`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <button 
              onClick={() => scrollToSection("#")}
              className="text-2xl font-bold text-red hover:text-red-dark transition-colors"
            >
              Samsoum Coiff
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-white hover:text-red transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
            
            <Button variant="gold" size="sm" asChild>
              <a href="tel:0237810000" className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                Réserver
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-red transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-red/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-3 py-2 text-white hover:text-red transition-colors font-medium"
                >
                  {item.label}
                </button>
              ))}
              
              <div className="px-3 py-2">
                <Button variant="gold" size="sm" className="w-full" asChild>
                  <a href="tel:0237810000" className="flex items-center justify-center">
                    <Phone className="w-4 h-4 mr-2" />
                    Réserver
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;