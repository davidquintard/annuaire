import { Button } from "@/components/ui/button";
import heroImage from "@/assets/barbershop-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Samsoum Coiff Barbershop Interior" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="animate-fadeInUp">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="block text-red">Samsoum</span>
            <span className="block">Coiff</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed">
            L'art de la coiffure masculine dans un cadre d'exception. 
            Découvrez l'élégance et le savoir-faire français.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="gold" size="lg" className="text-lg px-8 py-4">
              Prendre Rendez-vous
            </Button>
            <Button variant="premium" size="lg" className="text-lg px-8 py-4">
              Nos Services
            </Button>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-red rounded-full flex justify-center">
            <div className="w-1 h-3 bg-red rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;