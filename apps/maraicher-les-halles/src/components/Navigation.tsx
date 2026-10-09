import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, MapPin } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const menuItems = [
    { label: "Accueil", id: "hero" },
    { label: "À propos", id: "about" },
    { label: "Nos produits", id: "products" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-primary">Les Halles de La Loupe</h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
            
            {/* Contact Buttons */}
            <div className="flex items-center gap-2 ml-4">
              <Button variant="ghost" size="sm" onClick={() => window.open('tel:0237812742', '_blank')}>
                <Phone className="w-4 h-4" />
              </Button>
              <Button variant="default" size="sm" onClick={() => scrollToSection('contact')}>
                <MapPin className="w-4 h-4 mr-2" />
                Nous trouver
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col space-y-2">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left py-2 px-4 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  {item.label}
                </button>
              ))}
              
              {/* Mobile Contact Buttons */}
              <div className="flex flex-col gap-2 mt-4 px-4">
                <Button variant="outline" size="sm" onClick={() => window.open('tel:0237812742', '_blank')}>
                  <Phone className="w-4 h-4 mr-2" />
                  Appeler
                </Button>
                <Button variant="default" size="sm" onClick={() => scrollToSection('contact')}>
                  <MapPin className="w-4 h-4 mr-2" />
                  Localisation
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