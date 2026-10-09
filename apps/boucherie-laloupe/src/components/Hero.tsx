import { Button } from "@/components/ui/button";
import { Award, Heart, Users } from "lucide-react";
import heroImage from "@/assets/hero-butchery.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[70vh] bg-gradient-warm">
      {/* Image de fond avec overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Intérieur de notre boucherie artisanale"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-butcher-brown/60" />
      </div>

      {/* Contenu principal */}
      <div className="relative container mx-auto px-4 py-20 lg:py-32">
        <div className="max-w-3xl text-center mx-auto text-primary-foreground">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Votre Boucherie
            <span className="block text-butcher-gold font-serif">Artisanale</span>
          </h1>
          
          <p className="text-xl lg:text-2xl mb-8 text-primary-foreground/90 animate-slide-up">
            Depuis trois générations, nous perpétuons l'art de la boucherie traditionnelle au cœur de La Loupe
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-bounce-in">
            <Button variant="gold" size="lg" className="text-lg px-8">
              Découvrir nos produits
            </Button>
            <Button variant="outline-butcher" size="lg" className="text-lg px-8 bg-background/20 backdrop-blur-sm">
              Nos horaires
            </Button>
          </div>

          {/* Statistiques */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-butcher-gold/20 rounded-full mb-4">
                <Award className="h-8 w-8 text-butcher-gold" />
              </div>
              <h3 className="text-2xl font-bold text-butcher-gold">65 ans</h3>
              <p className="text-primary-foreground/80">d'expertise artisanale</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-butcher-gold/20 rounded-full mb-4">
                <Heart className="h-8 w-8 text-butcher-gold" />
              </div>
              <h3 className="text-2xl font-bold text-butcher-gold">100%</h3>
              <p className="text-primary-foreground/80">viandes françaises</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-butcher-gold/20 rounded-full mb-4">
                <Users className="h-8 w-8 text-butcher-gold" />
              </div>
              <h3 className="text-2xl font-bold text-butcher-gold">3000+</h3>
              <p className="text-primary-foreground/80">clients fidèles</p>
            </div>
          </div>
        </div>
      </div>

      {/* Vague décorative */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" fill="none" className="w-full h-12 lg:h-16">
          <path d="M1200 120L0 120V0C0 0 300 40 600 40C900 40 1200 0 1200 0V120Z" fill="currentColor" className="text-background"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;