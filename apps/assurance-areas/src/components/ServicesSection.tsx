import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Car, Home, Heart, Building, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Car,
    title: "Assurance Auto",
    description: "Protection complète pour tous vos véhicules avec des garanties adaptées à vos besoins.",
    features: ["Responsabilité civile", "Tous risques", "Conducteur novice", "Véhicules de collection"]
  },
  {
    icon: Home,
    title: "Assurance Habitation",
    description: "Sécurisez votre logement et vos biens avec nos solutions personnalisées.",
    features: ["Multirisque habitation", "Garantie vol", "Catastrophes naturelles", "Responsabilité civile vie privée"]
  },
  {
    icon: Heart,
    title: "Assurance Santé",
    description: "Complémentaires santé adaptées pour vous et votre famille.",
    features: ["Mutuelle individuelle", "Mutuelle famille", "Dentaire & optique", "Hospitalisation"]
  },
  {
    icon: Building,
    title: "Assurance Professionnelle",
    description: "Solutions dédiées aux entreprises et professions libérales.",
    features: ["Responsabilité civile pro", "Multirisque professionnelle", "Perte d'exploitation", "Cyber-risques"]
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Nos Services d'Assurance
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Des solutions sur mesure pour protéger ce qui compte le plus pour vous
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="gradient-card shadow-soft border-0 hover:shadow-medium transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 gradient-primary rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl text-foreground">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant="outline" 
                    className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    En savoir plus
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;