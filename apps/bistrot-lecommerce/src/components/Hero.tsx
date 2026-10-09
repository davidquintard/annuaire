import { Button } from "@/components/ui/button";
import { MapPin, Clock, Phone } from "lucide-react";
import heroBistrot from "@/assets/hero-bistrot.jpg";

const Hero = () => {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center">
      {/* Image de fond */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBistrot})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-burgundy/40" />
      
      {/* Contenu */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Le Commerce
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-4">
            Votre bar tabac de proximité au cœur de La Loupe
          </p>
          
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl">
            Depuis des années, Le Commerce vous accueille dans une ambiance chaleureuse 
            et conviviale. Venez découvrir notre sélection de boissons, nos jeux et 
            nos services tabac dans un cadre authentique.
          </p>

          {/* Informations rapides */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-4 border border-primary-foreground/20">
              <div className="flex items-center space-x-2 text-primary-foreground">
                <MapPin className="h-5 w-5 text-warm-gold" />
                <div>
                  <div className="font-semibold">Adresse</div>
                  <div className="text-sm opacity-90">2 rue de Châteaudun</div>
                  <div className="text-sm opacity-90">28240 La Loupe</div>
                </div>
              </div>
            </div>

            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-4 border border-primary-foreground/20">
              <div className="flex items-center space-x-2 text-primary-foreground">
                <Clock className="h-5 w-5 text-warm-gold" />
                <div>
                  <div className="font-semibold">Horaires</div>
                  <div className="text-sm opacity-90">Lun-Sam: 7h-20h</div>
                  <div className="text-sm opacity-90">Dim: 8h-13h</div>
                </div>
              </div>
            </div>

            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-4 border border-primary-foreground/20">
              <div className="flex items-center space-x-2 text-primary-foreground">
                <Phone className="h-5 w-5 text-warm-gold" />
                <div>
                  <div className="font-semibold">Contact</div>
                  <div className="text-sm opacity-90">02 37 81 XX XX</div>
                  <div className="text-sm opacity-90">Appelez-nous</div>
                </div>
              </div>
            </div>
          </div>

          {/* Boutons d'action */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-warm-gold hover:bg-warm-gold/90 text-foreground font-semibold shadow-warm transition-bounce"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Nous contacter
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-smooth"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Nos services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;