import { Button } from "@/components/ui/button";
import { Phone, Clock, MapPin } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-card/95 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          {/* Logo et nom */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center">
              <span className="text-2xl font-bold text-primary-foreground">B</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">Boucherie Charcuterie</h1>
              <p className="text-sm text-muted-foreground">La Loupe - Artisan depuis 1958</p>
            </div>
          </div>

          {/* Informations de contact */}
          <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 text-sm">
            <div className="flex items-center space-x-2 text-muted-foreground">
              <MapPin className="h-4 w-4 text-butcher-red" />
              <span>5 rue de Chateaudun, 28240 La Loupe</span>
            </div>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Clock className="h-4 w-4 text-butcher-red" />
              <span>Mar-Sam 8h-12h30 | 15h-19h</span>
            </div>
            <Button variant="butcher" size="sm" className="w-fit">
              <Phone className="h-4 w-4" />
              Nous contacter
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;