import { Button } from "@/components/ui/button";
import { MapPin, Clock } from "lucide-react";
import storefrontImage from "@/assets/coccinelle-storefront.jpg";

const Hero = () => {
  return (
    <section id="accueil" className="bg-gradient-hero text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center min-h-[600px] py-16">
          {/* Content */}
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Bienvenue chez
              <br />
              <span className="text-white drop-shadow-lg">Coccinelle</span>
            </h1>
            <p className="text-xl mb-8 text-white/90 leading-relaxed">
              Votre supérette de proximité au cœur de La Loupe. 
              Produits frais, service personnalisé et convivialité depuis plus de 15 ans.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="flex items-center gap-2 text-white/90">
                <MapPin className="h-5 w-5" />
                <span>11 place de l'hôtel de ville, La Loupe</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <Clock className="h-5 w-5" />
                <span>Ouvert 7j/7</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="secondary" 
                size="lg"
                className="bg-white text-coccinelle-red hover:bg-white/90 shadow-elegant"
              >
                Voir nos produits
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-coccinelle-red"
              >
                Nous contacter
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-fade-in-up">
            <div className="absolute inset-0 bg-white/10 rounded-2xl backdrop-blur-sm"></div>
            <img
              src={storefrontImage}
              alt="Façade de la supérette Coccinelle à La Loupe"
              className="w-full h-auto rounded-2xl shadow-elegant relative z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;