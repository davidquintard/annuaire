import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Beef, Ham, ChefHat } from "lucide-react";
import charcuterieDisplay from "@/assets/charcuterie-display.jpg";

const Products = () => {
  const specialties = [
    {
      icon: Beef,
      title: "Viandes Fraîches",
      items: ["Bœuf de race locale", "Veau fermier", "Porc du terroir", "Agneau de Sologne"],
      badge: "Origine France"
    },
    {
      icon: Ham,
      title: "Charcuterie Maison",
      items: ["Rillettes artisanales", "Pâtés traditionnels", "Terrines de campagne", "Saucissons secs"],
      badge: "Fait maison"
    },
    {
      icon: ChefHat,
      title: "Préparations Traiteur",
      items: ["Plats cuisinés", "Quiches lorraines", "Gratins de saison", "Rôtis marinés"],
      badge: "Sur commande"
    }
  ];

  return (
    <section className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4">
        {/* En-tête */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Nos
            <span className="text-butcher-red font-serif block">Spécialités</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez notre sélection de produits d'exception, préparés avec passion 
            selon les méthodes traditionnelles de l'artisanat français.
          </p>
        </div>

        {/* Image mise en avant */}
        <div className="mb-16">
          <div className="relative max-w-4xl mx-auto">
            <img 
              src={charcuterieDisplay} 
              alt="Notre sélection de charcuterie artisanale"
              className="w-full h-[400px] lg:h-[500px] object-cover rounded-2xl shadow-warm"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-butcher-brown/40 to-transparent rounded-2xl" />
            
            {/* Badge qualité */}
            <div className="absolute top-6 right-6 bg-background/90 backdrop-blur-sm rounded-full px-4 py-2 flex items-center space-x-2">
              <Star className="h-4 w-4 text-butcher-gold fill-current" />
              <span className="text-sm font-medium text-foreground">Qualité Premium</span>
            </div>
          </div>
        </div>

        {/* Grille des spécialités */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {specialties.map((specialty, index) => {
            const IconComponent = specialty.icon;
            return (
              <Card key={index} className="border-border/50 hover:shadow-soft transition-all duration-300 bg-card/80 backdrop-blur-sm">
                <CardHeader className="text-center pb-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-butcher-red/10 rounded-full mb-4 mx-auto">
                    <IconComponent className="h-8 w-8 text-butcher-red" />
                  </div>
                  <CardTitle className="text-xl text-foreground">{specialty.title}</CardTitle>
                  <Badge variant="secondary" className="w-fit mx-auto bg-butcher-gold/20 text-butcher-brown border-0">
                    {specialty.badge}
                  </Badge>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-3">
                    {specialty.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-butcher-red rounded-full flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to action */}
        <div className="text-center">
          <p className="text-muted-foreground mb-6">
            Envie de découvrir nos autres spécialités ? Venez nous rendre visite !
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="butcher" size="lg">
              Voir tous nos produits
            </Button>
            <Button variant="outline-butcher" size="lg">
              Commander en ligne
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;