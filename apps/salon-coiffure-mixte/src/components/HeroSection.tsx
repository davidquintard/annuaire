import { Button } from "@/components/ui/button";
import salonInterior from "@/assets/salon-interior.jpg";

const HeroSection = () => {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${salonInterior})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-elegant-black/80 via-elegant-black/60 to-transparent"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center md:text-left">
        <div className="max-w-2xl animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-elegant-white">Coiffure</span>
            <br />
            <span className="text-gradient-gold">Mixte</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-elegant-white/90 mb-8 leading-relaxed">
            Votre salon de coiffure de confiance au cœur de La Loupe. 
            Expertise, style et élégance pour homme et femme.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button 
              size="lg" 
              className="bg-gradient-gold hover:bg-gold-dark text-elegant-black font-semibold shadow-gold text-lg px-8 py-4"
            >
              Prendre rendez-vous
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-elegant-white text-elegant-white hover:bg-elegant-white hover:text-elegant-black text-lg px-8 py-4"
            >
              Nos services
            </Button>
          </div>
          
          <div className="flex items-center justify-center md:justify-start text-elegant-white/80">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-gold rounded-full"></div>
              <span className="text-sm">14 place de l'Hôtel de Ville</span>
            </div>
            <div className="mx-4 w-px h-4 bg-elegant-white/20"></div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-gold rounded-full"></div>
              <span className="text-sm">28240 La Loupe</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-elegant-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gold rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;