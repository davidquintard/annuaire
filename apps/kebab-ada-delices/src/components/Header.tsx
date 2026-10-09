import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    // Si on est sur la page de commande, naviguer vers l'accueil
    if (location.pathname === '/commande') {
      navigate('/');
      return;
    }
    
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
            Ada Délices
          </h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <button 
            onClick={() => scrollToSection('accueil')}
            className="text-gray-700 hover:text-orange-500 transition-colors font-medium"
          >
            Accueil
          </button>
          <button 
            onClick={() => scrollToSection('menu')}
            className="text-gray-700 hover:text-orange-500 transition-colors font-medium"
          >
            Menu
          </button>
          <button 
            onClick={() => scrollToSection('a-propos')}
            className="text-gray-700 hover:text-orange-500 transition-colors font-medium"
          >
            À propos
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-gray-700 hover:text-orange-500 transition-colors font-medium"
          >
            Contact
          </button>
        </nav>

        <Button 
          variant="default" 
          className="hidden md:inline-flex bg-orange-500 hover:bg-orange-600 text-white"
          onClick={() => navigate('/commande')}
        >
          Commander
        </Button>
      </div>
    </header>
  );
};

export default Header;