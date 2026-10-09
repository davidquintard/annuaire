import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bakery.jpg";
import { MapPin, Clock, Phone } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-warm-brown/80 via-warm-brown/50 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center lg:text-left">
        <div className="max-w-4xl mx-auto lg:mx-0">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-cream mb-6 animate-fade-in-up">
            Boulangerie
            <span className="block text-golden-light">Justine & Damien</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-cream/90 mb-8 max-w-2xl animate-fade-in-up [animation-delay:200ms]">
            Artisans boulangers passionnés, nous préparons chaque jour avec amour du pain frais et des pâtisseries traditionnelles.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-up [animation-delay:400ms]">
            <Button variant="golden" size="lg" className="text-lg">
              Découvrir nos spécialités
            </Button>
            <Button variant="outline" size="lg" className="border-golden-light text-golden-light hover:bg-golden-light hover:text-warm-brown">
              Nous contacter
            </Button>
          </div>
          
          {/* Quick Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in-up [animation-delay:600ms]">
            <div className="flex items-center gap-3 text-cream">
              <MapPin className="h-5 w-5 text-golden-light" />
              <span>3 rue de Chateaudun, 28240 La Loupe</span>
            </div>
            <div className="flex items-center gap-3 text-cream">
              <Clock className="h-5 w-5 text-golden-light" />
              <span>Ouvert du mardi au dimanche</span>
            </div>
            <div className="flex items-center gap-3 text-cream">
              <Phone className="h-5 w-5 text-golden-light" />
              <span>Appelez-nous</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-4 h-4 bg-golden-light rounded-full animate-float opacity-60"></div>
      <div className="absolute bottom-40 left-20 w-6 h-6 bg-golden rounded-full animate-float [animation-delay:1s] opacity-40"></div>
      <div className="absolute top-60 left-1/4 w-3 h-3 bg-cream rounded-full animate-float [animation-delay:2s] opacity-50"></div>
    </section>
  );
};

export default Hero;