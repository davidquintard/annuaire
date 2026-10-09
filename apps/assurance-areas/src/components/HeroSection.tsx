import { Button } from "@/components/ui/button";
import { Shield, Users, Award } from "lucide-react";
import heroImage from "@/assets/hero-insurance.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Bureau AREAS - Agence d'assurance moderne" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/80"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
            Votre sécurité,
            <span className="block text-secondary"> notre priorité</span>
          </h1>
          
          <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
            Depuis plus de 15 ans, AREAS vous accompagne dans tous vos projets d'assurance. 
            Expertise, proximité et confiance au service de votre tranquillité d'esprit.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button 
              size="lg" 
              className="bg-secondary text-secondary-foreground hover:bg-secondary-light font-semibold px-8"
            >
              Obtenir un devis
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              Nos services
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <div className="text-2xl font-bold text-primary-foreground">500+</div>
                <div className="text-primary-foreground/80 text-sm">Clients satisfaits</div>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <div className="text-2xl font-bold text-primary-foreground">15+</div>
                <div className="text-primary-foreground/80 text-sm">Années d'expérience</div>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center">
                <Award className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <div className="text-2xl font-bold text-primary-foreground">100%</div>
                <div className="text-primary-foreground/80 text-sm">Engagement qualité</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;