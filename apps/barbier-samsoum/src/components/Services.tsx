import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import haircutImage from "@/assets/haircut-service.jpg";
import beardImage from "@/assets/beard-service.jpg";
import { Scissors, Zap, Sparkles } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Coupe Classique",
      description: "Coupe traditionnelle personnalisée selon votre style et votre personnalité",
      price: "35€",
      image: haircutImage,
      icon: <Scissors className="w-8 h-8" />,
      features: ["Consultation personnalisée", "Shampoing inclus", "Finition soignée"]
    },
    {
      title: "Taille de Barbe",
      description: "Sculpture et entretien de votre barbe par nos maîtres barbiers",
      price: "25€",
      image: beardImage,
      icon: <Zap className="w-8 h-8" />,
      features: ["Taille précise", "Modelage", "Soins hydratants"]
    },
    {
      title: "Forfait Premium",
      description: "L'expérience complète : coupe, barbe et soins du visage",
      price: "55€",
      image: haircutImage,
      icon: <Sparkles className="w-8 h-8" />,
      features: ["Coupe + barbe", "Soins du visage", "Massage relaxant"]
    }
  ];

  return (
    <section id="services" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Nos <span className="text-red">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Des prestations d'excellence pour sublimer votre style avec le savoir-faire artisanal français
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-red transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-red">
                  {service.icon}
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                  <span className="text-2xl font-bold text-red">{service.price}</span>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-red rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button variant="outline" className="w-full group-hover:bg-red group-hover:text-white transition-colors">
                  Réserver
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;