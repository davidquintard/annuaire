import { useState } from "react";
import { Menu, X, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-hero shadow-elegant sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-primary-foreground">
              Le Commerce
            </div>
            <div className="hidden sm:block text-sm text-primary-foreground/80">
              Bar • Tabac • La Loupe
            </div>
          </div>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#accueil" className="text-primary-foreground hover:text-warm-gold transition-smooth">
              Accueil
            </a>
            <a href="#services" className="text-primary-foreground hover:text-warm-gold transition-smooth">
              Services
            </a>
            <a href="#horaires" className="text-primary-foreground hover:text-warm-gold transition-smooth">
              Horaires
            </a>
            <a href="#contact" className="text-primary-foreground hover:text-warm-gold transition-smooth">
              Contact
            </a>
          </nav>

          {/* Contact rapide */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-1 text-primary-foreground">
              <Phone className="h-4 w-4" />
              <span className="text-sm">02 37 81 XX XX</span>
            </div>
            <div className="flex items-center space-x-1 text-primary-foreground">
              <MapPin className="h-4 w-4" />
              <span className="text-sm">La Loupe</span>
            </div>
          </div>

          {/* Menu Mobile */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-primary-foreground hover:bg-primary-foreground/10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Menu Mobile Déroulant */}
        {isMenuOpen && (
          <div className="md:hidden bg-primary-foreground/10 backdrop-blur-sm">
            <nav className="py-4 space-y-4">
              <a 
                href="#accueil" 
                className="block text-primary-foreground hover:text-warm-gold transition-smooth"
                onClick={() => setIsMenuOpen(false)}
              >
                Accueil
              </a>
              <a 
                href="#services" 
                className="block text-primary-foreground hover:text-warm-gold transition-smooth"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a 
                href="#horaires" 
                className="block text-primary-foreground hover:text-warm-gold transition-smooth"
                onClick={() => setIsMenuOpen(false)}
              >
                Horaires
              </a>
              <a 
                href="#contact" 
                className="block text-primary-foreground hover:text-warm-gold transition-smooth"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;