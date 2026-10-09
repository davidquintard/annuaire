import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import coffeeImage from "@/assets/coffee-specialties.jpg";

const Menu = () => {
  const menuItems = {
    boissons: [
      { name: "Café Espresso", price: "2.50€", description: "Torréfaction artisanale, intense et parfumé" },
      { name: "Café Allongé", price: "3.00€", description: "Doux et équilibré, idéal à toute heure" },
      { name: "Cappuccino", price: "4.50€", description: "Mousse de lait onctueuse, art latte inclus" },
      { name: "Chocolat Viennois", price: "5.00€", description: "Chocolat chaud maison avec chantilly" },
    ],
    patisseries: [
      { name: "Croissant Beurre", price: "1.80€", description: "Pur beurre, feuilletage croustillant" },
      { name: "Pain au Chocolat", price: "2.00€", description: "Chocolat noir de qualité supérieure" },
      { name: "Tarte du Jour", price: "4.50€", description: "Pâtisserie maison selon la saison" },
      { name: "Éclair au Café", price: "3.80€", description: "Crème pâtissière au café, glaçage fondant" },
    ],
    dejeuner: [
      { name: "Croque Monsieur", price: "8.50€", description: "Jambon de pays, béchamel, fromage gratiné" },
      { name: "Salade Parisienne", price: "12.00€", description: "Salade verte, chèvre chaud, noix, vinaigrette miel" },
      { name: "Quiche Lorraine", price: "9.50€", description: "Recette traditionnelle, salade verte" },
      { name: "Tartine Avocat", price: "11.00€", description: "Pain complet, avocat, œuf poché, graines" },
    ]
  };

  return (
    <section id="menu" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-coffee mb-6">
            Notre Carte
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Découvrez nos spécialités préparées avec passion et des produits de qualité
          </p>
          
          <div className="relative max-w-md mx-auto mb-12">
            <img 
              src={coffeeImage} 
              alt="Spécialités café et pâtisseries" 
              className="w-full h-48 object-cover rounded-lg shadow-warm"
            />
            <Badge className="absolute top-4 right-4 bg-gold text-coffee">
              Fait Maison
            </Badge>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-coffee/20 shadow-warm">
            <CardHeader className="bg-gradient-warm text-center">
              <CardTitle className="font-playfair text-2xl text-primary-foreground">
                Boissons Chaudes
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                {menuItems.boissons.map((item, index) => (
                  <div key={index} className="border-b border-accent/20 pb-3 last:border-b-0">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-medium text-coffee">{item.name}</h4>
                      <span className="text-gold font-semibold">{item.price}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-coffee/20 shadow-warm">
            <CardHeader className="bg-gradient-warm text-center">
              <CardTitle className="font-playfair text-2xl text-primary-foreground">
                Pâtisseries
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                {menuItems.patisseries.map((item, index) => (
                  <div key={index} className="border-b border-accent/20 pb-3 last:border-b-0">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-medium text-coffee">{item.name}</h4>
                      <span className="text-gold font-semibold">{item.price}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-coffee/20 shadow-warm">
            <CardHeader className="bg-gradient-warm text-center">
              <CardTitle className="font-playfair text-2xl text-primary-foreground">
                Déjeuner
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                {menuItems.dejeuner.map((item, index) => (
                  <div key={index} className="border-b border-accent/20 pb-3 last:border-b-0">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-medium text-coffee">{item.name}</h4>
                      <span className="text-gold font-semibold">{item.price}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Menu;