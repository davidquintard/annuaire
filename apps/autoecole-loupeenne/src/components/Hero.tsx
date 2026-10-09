import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Clock } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl pt-16">
          <Badge variant="secondary" className="mb-6 text-sm font-medium">
            ✨ Auto-École Agréée depuis 1985
          </Badge>
          
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            Réussissez votre{" "}
            <span className="bg-hero-gradient bg-clip-text text-transparent">
              permis de conduire
            </span>{" "}
            avec l'Auto-École Loupéenne
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed animate-slide-up">
            Formation personnalisée au permis B, conduite accompagnée et code de la route. 
            Plus de 30 ans d'expérience à votre service à La Loupe.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-slide-up">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-soft">
              <Phone className="w-5 h-5 mr-2" />
              Nous contacter
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Découvrir nos services
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 animate-fade-in">
            <div className="flex items-center gap-3 p-4 rounded-lg bg-surface-elevated border border-border shadow-soft">
              <MapPin className="w-5 h-5 text-primary" />
              <div>
                <p className="font-medium text-foreground">8 rue de Châteaudun</p>
                <p className="text-sm text-muted-foreground">28240 La Loupe</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 p-4 rounded-lg bg-surface-elevated border border-border shadow-soft">
              <Phone className="w-5 h-5 text-primary" />
              <div>
                <p className="font-medium text-foreground">02 37 XX XX XX</p>
                <p className="text-sm text-muted-foreground">Du lundi au vendredi</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 p-4 rounded-lg bg-surface-elevated border border-border shadow-soft">
              <Clock className="w-5 h-5 text-primary" />
              <div>
                <p className="font-medium text-foreground">8h - 19h</p>
                <p className="text-sm text-muted-foreground">Samedi 8h - 12h</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;