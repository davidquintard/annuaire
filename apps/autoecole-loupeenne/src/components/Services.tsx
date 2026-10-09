import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Car, Users, BookOpen, Clock, Award, Heart } from "lucide-react";
import servicesIcon from "@/assets/services-icon.jpg";

const Services = () => {
  const services = [
    {
      icon: Car,
      title: "Permis B",
      description: "Formation complète au permis de conduire avec véhicules récents et sécurisés",
      features: ["20h de conduite minimum", "Véhicules doubles commandes", "Instructeurs diplômés"],
      price: "À partir de 1200€",
      popular: true,
    },
    {
      icon: Users,
      title: "Conduite Accompagnée",
      description: "Apprentissage anticipé de la conduite dès 15 ans pour plus d'expérience",
      features: ["Formation initiale 20h", "3000 km accompagnés", "2 rendez-vous pédagogiques"],
      price: "À partir de 1100€",
      popular: false,
    },
    {
      icon: BookOpen,
      title: "Code de la Route",
      description: "Préparation intensive au code avec cours théoriques et tests en ligne",
      features: ["Cours en salle", "Tests illimités en ligne", "Suivi personnalisé"],
      price: "300€",
      popular: false,
    },
  ];

  const advantages = [
    {
      icon: Award,
      title: "Taux de réussite 85%",
      description: "L'un des meilleurs taux de la région",
    },
    {
      icon: Clock,
      title: "Horaires flexibles",
      description: "Adaptation à votre emploi du temps",
    },
    {
      icon: Heart,
      title: "Accompagnement personnalisé",
      description: "Suivi individuel de votre progression",
    },
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Nos Services
          </Badge>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Formations adaptées à{" "}
            <span className="bg-hero-gradient bg-clip-text text-transparent">tous vos besoins</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Découvrez nos différentes formules de formation pour obtenir votre permis de conduire 
            dans les meilleures conditions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`relative transition-all duration-300 hover:shadow-strong hover:-translate-y-1 ${
                service.popular ? 'ring-2 ring-accent' : ''
              }`}
            >
              {service.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground">
                  Populaire
                </Badge>
              )}
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-hero-gradient flex items-center justify-center">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
                <p className="text-muted-foreground">{service.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">{service.price}</span>
                  <Button variant={service.popular ? "default" : "outline"}>
                    En savoir plus
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Advantages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-accent/10 flex items-center justify-center">
                <advantage.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{advantage.title}</h3>
              <p className="text-muted-foreground">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;