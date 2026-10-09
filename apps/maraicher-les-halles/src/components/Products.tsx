import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Apple, Carrot, Salad, Cherry } from "lucide-react";
import freshProducts from "@/assets/fresh-products.jpg";

const Products = () => {
  const categories = [
    {
      icon: Apple,
      title: "Fruits de Saison",
      description: "Pommes, poires, prunes, et fruits locaux selon la saison",
      badge: "Français",
      color: "bg-red-500/10 text-red-600"
    },
    {
      icon: Salad,
      title: "Légumes Verts",
      description: "Salades, épinards, courgettes, haricots verts frais",
      badge: "Bio",
      color: "bg-green-500/10 text-green-600"
    },
    {
      icon: Carrot,
      title: "Légumes Racines",
      description: "Carottes, navets, betteraves, pommes de terre",
      badge: "Local",
      color: "bg-orange-500/10 text-orange-600"
    },
    {
      icon: Cherry,
      title: "Produits du Terroir",
      description: "Confitures, miels, conserves artisanales locales",
      badge: "Artisanal",
      color: "bg-purple-500/10 text-purple-600"
    }
  ];

  const services = [
    "Commandes personnalisées",
    "Livraison à domicile sur La Loupe",
    "Paniers de légumes hebdomadaires",
    "Conseils culinaires et de conservation"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            Nos Produits
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez notre large gamme de fruits et légumes frais, sélectionnés avec soin 
            pour leur qualité et leur goût authentique.
          </p>
        </div>

        {/* Featured Image */}
        <div className="mb-16 animate-scale-in">
          <div className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-warm">
            <img 
              src={freshProducts} 
              alt="Nos produits frais - Les Halles de La Loupe" 
              className="w-full h-[300px] md:h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
            <div className="absolute bottom-6 left-6 text-primary-foreground">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">Fraîcheur Garantie</h3>
              <p className="text-lg">Renouvelés quotidiennement</p>
            </div>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {categories.map((category, index) => (
            <Card key={index} className="group border-0 bg-card hover:shadow-natural transition-all duration-300 animate-fade-in" style={{animationDelay: `${0.1 * index}s`}}>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${category.color}`}>
                    <category.icon className="w-6 h-6" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {category.badge}
                  </Badge>
                </div>
                <h4 className="text-xl font-semibold mb-3 text-primary group-hover:text-accent transition-colors">
                  {category.title}
                </h4>
                <p className="text-muted-foreground">
                  {category.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Services Section */}
        <div className="bg-gradient-nature rounded-2xl p-8 md:p-12 text-center animate-fade-in">
          <h3 className="text-3xl font-bold mb-6 text-primary-foreground">
            Nos Services
          </h3>
          <p className="text-lg mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Pour vous faciliter la vie, nous proposons plusieurs services personnalisés.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="flex items-center bg-primary-foreground/10 rounded-lg p-4 animate-fade-in" style={{animationDelay: `${0.1 * index}s`}}>
                <div className="w-3 h-3 bg-accent rounded-full mr-3 animate-pulse" />
                <span className="text-primary-foreground font-medium">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;