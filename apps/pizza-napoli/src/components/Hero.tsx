import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-pizza.jpg";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
          Pizza Napoli
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto drop-shadow-md">
          L'authenticité italienne au cœur de La Loupe
        </p>
        <p className="text-lg mb-10 opacity-90 drop-shadow-md">
          Découvrez nos pizzas artisanales préparées avec passion selon les traditions napolitaines
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="hero" size="lg" className="text-lg px-8 py-4">
            Voir notre menu
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-white/10 border-white text-white hover:bg-white hover:text-black">
            Nous contacter
          </Button>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" fill="none" className="w-full h-auto text-background">
          <path d="M0,96L48,80C96,64 192,32 288,37.3C384,43 480,85 576,85.3C672,85 768,43 864,42.7C960,43 1056,85 1152,96L1200,107L1200,120L1152,120C1056,120 960,120 864,120C768,120 672,120 576,120C480,120 384,120 288,120C192,120 96,120 48,120L0,120Z" fill="currentColor"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;