import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Users, Store } from "lucide-react";
import heroImage from "@/assets/la-loupe-hero.jpg";

interface HeroSectionProps {
  onExploreClick: () => void;
}

export const HeroSection = ({ onExploreClick }: HeroSectionProps) => {
  return (
    <section className="relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage}
          alt="La Loupe - Patrimoine et commerces locaux"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/80" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-24 lg:py-32">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-6">
            <MapPin className="w-6 h-6 text-accent" />
            <span className="text-accent font-medium">28240 La Loupe, Eure-et-Loir</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Découvrez les
            <span className="block text-accent">
              commerces locaux
            </span>
            de La Loupe
          </h1>
          
          <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl">
            Votre annuaire numérique pour explorer les commerces, restaurants et services 
            de notre belle commune du Perche. Soutenons ensemble notre économie locale.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-elegant"
              onClick={onExploreClick}
            >
              Explorer les commerces
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 shadow-card-shadow"
            >
              À propos de La Loupe
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                <Store className="w-5 h-5 text-accent" />
                <span className="text-2xl font-bold text-white">63+</span>
              </div>
              <p className="text-white/80">Commerces référencés</p>
            </div>
            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                <Users className="w-5 h-5 text-accent" />
                <span className="text-2xl font-bold text-white">8</span>
              </div>
              <p className="text-white/80">Catégories</p>
            </div>
            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                <MapPin className="w-5 h-5 text-accent" />
                <span className="text-2xl font-bold text-white">100%</span>
              </div>
              <p className="text-white/80">Local</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};