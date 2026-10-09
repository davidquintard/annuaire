import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-salon.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Salon de coiffure Phil B - intérieur moderne et élégant"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
              <span className="block text-foreground">Salon de</span>
              <span className="block bg-gradient-hero bg-clip-text text-transparent">
                Coiffure
              </span>
              <span className="block text-luxury-gold text-4xl lg:text-6xl mt-2">
                Phil B
              </span>
            </h1>
            
            <p className="mt-6 text-xl lg:text-2xl text-muted-foreground max-w-2xl">
              Votre coiffeur expert à La Loupe. Coupe, couleur, soins capillaires dans une ambiance chaleureuse et professionnelle.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="luxury" size="lg" className="text-lg px-8 py-6">
                Prendre Rendez-vous
              </Button>
              <Button variant="cream" size="lg" className="text-lg px-8 py-6">
                Nos Services
              </Button>
            </div>
            
            <div className="mt-12 flex items-center justify-center lg:justify-start text-muted-foreground">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-luxury-gold mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>6 rue de la gare, 28240 La Loupe</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;