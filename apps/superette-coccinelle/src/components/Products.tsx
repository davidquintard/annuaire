import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Apple, Milk, Cookie, Wine } from "lucide-react";
import produceImage from "@/assets/fresh-produce.jpg";

const Products = () => {
  const categories = [
    {
      icon: Apple,
      title: "Fruits & Légumes",
      description: "Produits frais locaux et de saison",
      badge: "Fraîcheur garantie"
    },
    {
      icon: Milk,
      title: "Produits laitiers",
      description: "Fromages, yaourts et produits de la ferme",
      badge: "Origine France"
    },
    {
      icon: Cookie,
      title: "Boulangerie",
      description: "Pain frais quotidien et viennoiseries",
      badge: "Livraison quotidienne"
    },
    {
      icon: Wine,
      title: "Épicerie fine",
      description: "Sélection de produits du terroir",
      badge: "Producteurs locaux"
    }
  ];

  return (
    <section id="produits" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-6 text-coccinelle-black">
            Nos Produits
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Découvrez notre large gamme de produits frais et de qualité, 
            sélectionnés avec soin pour répondre à tous vos besoins quotidiens.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <div className="animate-fade-in-up">
            <img
              src={produceImage}
              alt="Rayon fruits et légumes de la supérette Coccinelle"
              className="w-full h-auto rounded-2xl shadow-elegant"
            />
          </div>

          {/* Categories Grid */}
          <div className="grid sm:grid-cols-2 gap-6 animate-fade-in-up">
            {categories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card key={index} className="group hover:shadow-soft transition-smooth border-2 hover:border-coccinelle-red/20">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-coccinelle-red/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-coccinelle-red/20 transition-smooth">
                      <IconComponent className="h-6 w-6 text-coccinelle-red" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{category.title}</h3>
                    <p className="text-muted-foreground mb-3">{category.description}</p>
                    <Badge variant="secondary" className="bg-coccinelle-cream text-coccinelle-red">
                      {category.badge}
                    </Badge>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Additional Services */}
        <div className="bg-coccinelle-cream rounded-2xl p-8 animate-fade-in-up">
          <h3 className="text-2xl font-bold text-center mb-8 text-coccinelle-black">
            Services supplémentaires
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="w-16 h-16 bg-coccinelle-red rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📦</span>
              </div>
              <h4 className="font-semibold mb-2">Commandes spéciales</h4>
              <p className="text-sm text-muted-foreground">Sur demande et selon disponibilités</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-coccinelle-red rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎁</span>
              </div>
              <h4 className="font-semibold mb-2">Paniers cadeaux</h4>
              <p className="text-sm text-muted-foreground">Compositions personnalisées</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-coccinelle-red rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚚</span>
              </div>
              <h4 className="font-semibold mb-2">Livraison</h4>
              <p className="text-sm text-muted-foreground">Pour les seniors et PMR</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-coccinelle-red rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💳</span>
              </div>
              <h4 className="font-semibold mb-2">Paiement facile</h4>
              <p className="text-sm text-muted-foreground">Espèces, CB, chèques acceptés</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;