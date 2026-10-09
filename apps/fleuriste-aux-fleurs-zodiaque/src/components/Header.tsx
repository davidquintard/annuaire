import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4">
        {/* Top bar with contact info */}
        <div className="hidden md:flex items-center justify-between py-2 text-sm text-muted-foreground border-b border-border/50">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>1 rue du château, 28240 La Loupe</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Lun-Sam 9h-19h</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span>02 37 81 XX XX</span>
          </div>
        </div>
        
        {/* Main navigation */}
        <div className="flex items-center justify-between py-4">
          <div className="flex-1">
            <h1 className="text-2xl md:text-3xl font-bold gradient-zodiac bg-clip-text text-transparent">
              Aux Fleurs du Zodiaque
            </h1>
            <p className="text-sm text-muted-foreground">Artisan fleuriste à La Loupe</p>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <a href="#accueil" className="text-foreground hover:text-primary transition-smooth">
              Accueil
            </a>
            <a href="#services" className="text-foreground hover:text-primary transition-smooth">
              Services
            </a>
            <a href="#galerie" className="text-foreground hover:text-primary transition-smooth">
              Galerie
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-smooth">
              Contact
            </a>
          </nav>
          
          <Button variant="floral" size="lg" className="ml-6">
            Nous contacter
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;