import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    // Si on est sur la page de commande, naviguer vers l'accueil
    if (location.pathname === '/commande') {
      navigate('/');
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">Pizza Napoli</h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-gray-700 hover:text-red-500 transition-colors font-medium"
            >
              Accueil
            </button>
            <button 
              onClick={() => scrollToSection('menu')}
              className="text-gray-700 hover:text-red-500 transition-colors font-medium"
            >
              Menu
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-red-500 transition-colors font-medium"
            >
              À propos
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-red-500 transition-colors font-medium"
            >
              Contact
            </button>
            <Button 
              variant="default" 
              size="sm"
              className="bg-red-500 hover:bg-red-600 text-white"
              onClick={() => navigate('/commande')}
            >
              Commander
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;