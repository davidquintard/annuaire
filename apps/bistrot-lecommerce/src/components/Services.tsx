import { Card, CardContent } from "@/components/ui/card";
import { Coffee, Cigarette, Gamepad2, Newspaper, CreditCard, Users } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Coffee,
      title: "Bar & Café",
      description: "Large sélection de boissons chaudes et froides, bières pression, vins et spiritueux dans une ambiance conviviale."
    },
    {
      icon: Cigarette,
      title: "Tabac & Presse",
      description: "Tous vos produits tabac, journaux quotidiens, magazines et accessoires fumeurs."
    },
    {
      icon: Gamepad2,
      title: "Jeux & Loisirs",
      description: "Jeux de grattage, Loto, PMU et autres jeux. Ambiance détendue pour vos moments de détente."
    },
    {
      icon: CreditCard,
      title: "Services Pratiques",
      description: "Retraits d'espèces, paiements divers, recharge de cartes téléphoniques et services de proximité."
    },
    {
      icon: Newspaper,
      title: "Presse Locale",
      description: "Toute la presse locale et nationale, magazines spécialisés et publications régionales."
    },
    {
      icon: Users,
      title: "Lieu de Rencontre",
      description: "Point de rendez-vous des habitants de La Loupe, ambiance chaleureuse et accueil familial."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nos Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Le Commerce vous propose une gamme complète de services dans un cadre convivial 
            au cœur de La Loupe. Votre lieu de rencontre quotidien.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-warm transition-all duration-300 hover:-translate-y-1 border-border/50 bg-card/80 backdrop-blur-sm"
            >
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-gradient-accent rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-6 w-6 text-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {service.title}
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Section spéciale */}
        <div className="mt-16 text-center">
          <div className="bg-card/60 backdrop-blur-sm rounded-2xl p-8 border border-border/50 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Une tradition de convivialité
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Depuis des années, Le Commerce est le point de rencontre incontournable 
              des habitants de La Loupe. Venez partager un moment de détente dans 
              une atmosphère authentique et chaleureuse.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-burgundy mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Années d'expérience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-burgundy mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Local & Authentique</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-burgundy mb-2">7j/7</div>
                <div className="text-sm text-muted-foreground">Ouvert toute la semaine</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;