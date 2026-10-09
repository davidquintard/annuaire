import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-accent/20 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <h1 className="font-playfair text-2xl font-bold text-coffee">
              Café de Paris
            </h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#accueil" className="text-foreground hover:text-coffee transition-colors">
              Accueil
            </a>
            <a href="#about" className="text-foreground hover:text-coffee transition-colors">
              À propos
            </a>
            <a href="#menu" className="text-foreground hover:text-coffee transition-colors">
              Notre Carte
            </a>
            <a href="#contact" className="text-foreground hover:text-coffee transition-colors">
              Contact
            </a>
          </nav>

          <Button variant="outline" className="hidden md:block border-coffee text-coffee hover:bg-coffee hover:text-primary-foreground">
            Réserver
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;