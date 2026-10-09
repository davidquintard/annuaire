import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-background shadow-soft border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">A</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-primary">AREAS</h1>
              <p className="text-sm text-muted-foreground">Assurance & Conseils</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#accueil" className="text-foreground hover:text-primary transition-colors">
              Accueil
            </a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">
              Services
            </a>
            <a href="#apropos" className="text-foreground hover:text-primary transition-colors">
              À propos
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>

          {/* Contact Info */}
          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-2 text-sm text-muted-foreground">
              <Phone className="w-4 h-4" />
              <span>02 37 81 XX XX</span>
            </div>
            <Button variant="default" className="bg-primary hover:bg-primary-dark">
              Devis gratuit
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;