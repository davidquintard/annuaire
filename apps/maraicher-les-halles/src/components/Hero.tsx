import { Button } from "@/components/ui/button";
import { Phone, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-vegetables.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary-foreground leading-tight">
          Les Halles de La Loupe
        </h1>
        
        <p className="text-xl md:text-2xl mb-4 text-primary-foreground/90 font-medium">
          Fruits et légumes frais du terroir
        </p>
        
        <p className="text-lg mb-8 text-primary-foreground/80 max-w-2xl mx-auto">
          Découvrez notre sélection de produits locaux et de saison, cultivés avec passion dans le respect de la nature.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button variant="hero" size="lg" className="group">
            <Phone className="w-5 h-5 mr-2 group-hover:animate-bounce" />
            Nous contacter
          </Button>
          <Button variant="outline-hero" size="lg" className="group">
            <MapPin className="w-5 h-5 mr-2 group-hover:animate-bounce" />
            Nous trouver
          </Button>
        </div>
        
        {/* Address */}
        <div className="flex items-center justify-center text-primary-foreground/80">
          <MapPin className="w-4 h-4 mr-2" />
          <span>6 rue de Chateaudun, 28240 La Loupe</span>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-10 left-10 w-20 h-20 bg-accent/20 rounded-full animate-float" />
      <div className="absolute top-20 right-10 w-16 h-16 bg-primary/20 rounded-full animate-float" style={{animationDelay: '1s'}} />
      <div className="absolute top-1/2 left-20 w-12 h-12 bg-warm-orange/30 rounded-full animate-float" style={{animationDelay: '2s'}} />
    </section>
  );
};

export default Hero;