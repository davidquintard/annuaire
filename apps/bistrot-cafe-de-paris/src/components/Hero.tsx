import { Button } from "@/components/ui/button";
import heroImage from "@/assets/cafe-hero.jpg";

const Hero = () => {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${heroImage})`,
          filter: 'brightness(0.7)'
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-r from-coffee/80 via-coffee/50 to-transparent" />
      
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6">
          Café de Paris
        </h1>
        <p className="text-xl md:text-2xl font-light mb-4 text-cream">
          Bistrot traditionnel au cœur de La Loupe
        </p>
        <p className="text-lg md:text-xl mb-8 text-cream/90 max-w-2xl mx-auto">
          Savourez l'authenticité française dans une ambiance chaleureuse et conviviale
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-gold hover:bg-gold/90 text-coffee font-medium px-8 py-3 shadow-glow"
          >
            Découvrir notre carte
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-cream text-cream hover:bg-cream hover:text-coffee px-8 py-3"
          >
            Nous contacter
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;