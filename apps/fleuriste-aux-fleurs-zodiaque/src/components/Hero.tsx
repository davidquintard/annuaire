import { Button } from "@/components/ui/button";
import { Sparkles, Heart } from "lucide-react";
import heroBouquet from "@/assets/hero-bouquet.jpg";

const Hero = () => {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 gradient-hero"></div>
      
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Content */}
        <div className="text-center lg:text-left space-y-8">
          <div className="space-y-4">
            <div className="flex items-center justify-center lg:justify-start gap-2 text-accent">
              <Sparkles className="w-5 h-5" />
              <span className="text-sm font-medium">Créations florales uniques</span>
              <Sparkles className="w-5 h-5" />
            </div>
            
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="gradient-floral bg-clip-text text-transparent">Aux Fleurs</span>
              <br />
              <span className="gradient-zodiac bg-clip-text text-transparent">du Zodiaque</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
              Votre artisan fleuriste à La Loupe vous accompagne dans tous vos moments précieux 
              avec des créations florales inspirées par la beauté de la nature.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button variant="zodiac" size="lg" className="text-lg px-8 py-6">
              <Heart className="w-5 h-5 mr-2" />
              Découvrir nos créations
            </Button>
            <Button variant="elegant" size="lg" className="text-lg px-8 py-6">
              Prendre rendez-vous
            </Button>
          </div>
          
          <div className="flex items-center justify-center lg:justify-start gap-8 text-sm text-muted-foreground">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">15+</div>
              <div>Années d'expérience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">500+</div>
              <div>Mariages accompagnés</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">100%</div>
              <div>Satisfaction client</div>
            </div>
          </div>
        </div>
        
        {/* Image */}
        <div className="relative">
          <div className="relative rounded-3xl overflow-hidden shadow-elegant">
            <img 
              src={heroBouquet} 
              alt="Magnifique arrangement floral aux Fleurs du Zodiaque"
              className="w-full h-[600px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
          
          {/* Floating elements */}
          <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent rounded-full shadow-glow opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-primary rounded-full shadow-elegant opacity-30 animate-pulse delay-1000"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;