import { Button } from "@/components/ui/button";

const Navigation = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-gold rounded-full"></div>
            <span className="text-xl font-bold text-gradient-gold">Coiffure Mixte</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => scrollToSection('accueil')}
              className="text-foreground hover:text-gold transition-colors"
            >
              Accueil
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-foreground hover:text-gold transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('a-propos')}
              className="text-foreground hover:text-gold transition-colors"
            >
              À propos
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-gold transition-colors"
            >
              Contact
            </button>
            
            <Button variant="default" className="bg-gradient-gold hover:bg-gold-dark text-elegant-black font-semibold shadow-gold">
              Prendre RDV
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;