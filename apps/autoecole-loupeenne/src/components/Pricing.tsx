import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star } from "lucide-react";

const Pricing = () => {
  const packages = [
    {
      name: "Forfait Code",
      price: "300",
      description: "Idéal pour préparer l'examen théorique",
      features: [
        "Cours de code en salle",
        "Accès plateforme en ligne illimité",
        "Tests blancs",
        "Suivi personnalisé",
        "Présentation à l'examen incluse"
      ],
      popular: false,
      cta: "Choisir ce forfait"
    },
    {
      name: "Forfait Traditionnel",
      price: "1200",
      description: "Formation complète au permis B",
      features: [
        "Tout le forfait Code inclus",
        "20h de conduite obligatoires",
        "Véhicules récents doubles commandes",
        "Instructeurs diplômés d'État",
        "Présentation à l'examen pratique",
        "Suivi personnalisé de progression"
      ],
      popular: true,
      cta: "Le plus populaire"
    },
    {
      name: "Conduite Accompagnée",
      price: "1100",
      description: "AAC - Dès 15 ans",
      features: [
        "Formation initiale 20h minimum",
        "Rendez-vous préalable",
        "3000 km accompagnés minimum",
        "2 rendez-vous pédagogiques",
        "Livret d'apprentissage",
        "Assurance responsabilité civile"
      ],
      popular: false,
      cta: "Commencer l'AAC"
    }
  ];

  const additionalServices = [
    { service: "Heure de conduite supplémentaire", price: "45€" },
    { service: "Présentation examen pratique", price: "60€" },
    { service: "Evaluation de conduite", price: "45€" },
    { service: "Cours de perfectionnement", price: "50€" },
  ];

  return (
    <section id="tarifs" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Nos Tarifs
          </Badge>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Des formules{" "}
            <span className="bg-hero-gradient bg-clip-text text-transparent">
              transparentes
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choisissez la formule qui correspond à vos besoins et votre budget. 
            Tous nos tarifs sont affichés TTC, sans surprise.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <Card 
              key={index}
              className={`relative transition-all duration-300 hover:shadow-strong hover:-translate-y-1 ${
                pkg.popular ? 'ring-2 ring-accent scale-105' : ''
              }`}
            >
              {pkg.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground">
                  <Star className="w-4 h-4 mr-1" />
                  Recommandé
                </Badge>
              )}
              
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold">{pkg.name}</CardTitle>
                <p className="text-muted-foreground mb-4">{pkg.description}</p>
                <div className="flex items-center justify-center">
                  <span className="text-4xl font-bold text-primary">{pkg.price}€</span>
                </div>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${
                    pkg.popular 
                      ? 'bg-accent hover:bg-accent/90 text-accent-foreground' 
                      : 'bg-primary hover:bg-primary/90'
                  }`}
                  size="lg"
                >
                  {pkg.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">
            Services à la carte
          </h3>
          
          <Card>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {additionalServices.map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-4 rounded-lg bg-muted/30">
                    <span className="text-foreground font-medium">{item.service}</span>
                    <span className="text-primary font-bold">{item.price}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
                <p className="text-sm text-muted-foreground text-center">
                  💡 <strong>Bon à savoir :</strong> Possibilité de paiement en plusieurs fois sans frais. 
                  Aide au financement CPF disponible pour certaines formations.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Pricing;