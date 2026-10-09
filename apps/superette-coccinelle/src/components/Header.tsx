import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, MapPin, Phone } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-card shadow-soft sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="hidden md:flex justify-between items-center py-2 text-sm text-muted-foreground border-b border-border">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              <span>11 place de l'hôtel de ville, 28240 La Loupe</span>
            </div>
            <div className="flex items-center gap-1">
              <Phone className="h-4 w-4" />
              <span>02 37 81 XX XX</span>
            </div>
          </div>
          <div>
            <span>Ouvert du lundi au samedi - 8h à 19h30</span>
          </div>
        </div>

        {/* Main Header */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center shadow-soft animate-float">
              <span className="text-2xl">🐞</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-coccinelle-red">Coccinelle</h1>
              <p className="text-sm text-muted-foreground">Supérette</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#accueil" className="font-medium hover:text-primary transition-smooth">
              Accueil
            </a>
            <a href="#about" className="font-medium hover:text-primary transition-smooth">
              À propos
            </a>
            <a href="#produits" className="font-medium hover:text-primary transition-smooth">
              Produits
            </a>
            <a href="#horaires" className="font-medium hover:text-primary transition-smooth">
              Horaires
            </a>
            <a href="#contact" className="font-medium hover:text-primary transition-smooth">
              Contact
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMenu}
            aria-label="Menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-border pt-4 animate-fade-in-up">
            <div className="flex flex-col gap-4">
              <a
                href="#accueil"
                className="font-medium hover:text-primary transition-smooth py-2"
                onClick={toggleMenu}
              >
                Accueil
              </a>
              <a
                href="#about"
                className="font-medium hover:text-primary transition-smooth py-2"
                onClick={toggleMenu}
              >
                À propos
              </a>
              <a
                href="#produits"
                className="font-medium hover:text-primary transition-smooth py-2"
                onClick={toggleMenu}
              >
                Produits
              </a>
              <a
                href="#horaires"
                className="font-medium hover:text-primary transition-smooth py-2"
                onClick={toggleMenu}
              >
                Horaires
              </a>
              <a
                href="#contact"
                className="font-medium hover:text-primary transition-smooth py-2"
                onClick={toggleMenu}
              >
                Contact
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;