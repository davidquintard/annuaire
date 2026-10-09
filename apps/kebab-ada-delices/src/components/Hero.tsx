import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-kebab.jpg";

const Hero = () => {
  const scrollToMenu = () => {
    const element = document.getElementById('menu');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="block">Ada</span>
          <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Délices
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed">
          Découvrez les saveurs authentiques du kebab traditionnel dans le cœur de La Loupe
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            onClick={scrollToMenu}
            className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 transform hover:scale-105 transition-all duration-300 shadow-warm"
          >
            Voir notre Menu
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-primary transition-all duration-300"
          >
            Nous Contacter
          </Button>
        </div>
        
        <div className="mt-12 text-sm text-gray-300">
          📍 3 rue du Château, 28240 La Loupe
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;