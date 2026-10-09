import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Gift, Sparkles, Home, Calendar, Users } from "lucide-react";
import weddingBouquet from "@/assets/wedding-bouquet.jpg";
import seasonalArrangement from "@/assets/seasonal-arrangement.jpg";

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: "Mariages & Événements",
      description: "Créations sur mesure pour vos moments les plus précieux",
      details: "Bouquets de mariée, décoration florale, centres de table",
      image: weddingBouquet,
      color: "text-pink-500"
    },
    {
      icon: Gift,
      title: "Bouquets & Compositions",
      description: "Arrangements floraux pour toutes occasions",
      details: "Bouquets personnalisés, compositions modernes, fleurs de saison",
      image: seasonalArrangement,
      color: "text-accent"
    },
    {
      icon: Home,
      title: "Décoration Intérieure",
      description: "Sublimez vos espaces avec nos créations",
      details: "Arrangements décoratifs, plantes d'intérieur, conseils personnalisés",
      color: "text-primary"
    },
    {
      icon: Calendar,
      title: "Abonnements Floraux",
      description: "Fleurs fraîches livrées régulièrement",
      details: "Formules hebdomadaires ou mensuelles adaptées à vos besoins",
      color: "text-green-500"
    },
    {
      icon: Users,
      title: "Événements Corporate",
      description: "Fleurissement professionnel et événementiel",
      details: "Bureaux, réceptions, inaugurations, séminaires",
      color: "text-blue-500"
    },
    {
      icon: Sparkles,
      title: "Ateliers Créatifs",
      description: "Apprenez l'art floral avec passion",
      details: "Cours particuliers, ateliers de groupe, stages découverte",
      color: "text-purple-500"
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-accent mb-4">
            <Sparkles className="w-5 h-5" />
            <span className="text-sm font-medium uppercase tracking-wider">Nos Services</span>
            <Sparkles className="w-5 h-5" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-floral bg-clip-text text-transparent">
              Un savoir-faire artisanal
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Depuis plus de 15 ans, nous mettons notre passion et notre expertise à votre service 
            pour créer des arrangements floraux d'exception, inspirés par votre signe du zodiaque.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-smooth border-border/50 hover:border-primary/20">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 rounded-full bg-background shadow-md ${service.color}`}>
                    <service.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <CardTitle className="text-xl group-hover:text-primary transition-smooth">
                      {service.title}
                    </CardTitle>
                  </div>
                </div>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {service.image && (
                  <div className="relative rounded-lg overflow-hidden shadow-md">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-smooth"
                    />
                  </div>
                )}
                
                <p className="text-muted-foreground">
                  {service.details}
                </p>
                
                <Button variant="outline" className="w-full group-hover:border-primary/30">
                  En savoir plus
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button variant="zodiac" size="lg" className="px-12 py-6 text-lg">
            <Calendar className="w-5 h-5 mr-2" />
            Prendre rendez-vous
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;