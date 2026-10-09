import { Card, CardContent } from "@/components/ui/card";
import pastriesImage from "@/assets/pastries-display.jpg";
import { Wheat, Coffee, Heart, Star } from "lucide-react";

const Products = () => {
  const products = [
    {
      icon: Wheat,
      title: "Pains Artisanaux",
      description: "Baguettes traditionnelles, pain de campagne, pain aux céréales, faits au levain naturel",
      specialties: ["Baguette tradition", "Pain de campagne", "Pain aux noix", "Pain complet"]
    },
    {
      icon: Coffee,
      title: "Viennoiseries",
      description: "Croissants dorés, pains au chocolat, chaussons aux pommes, préparés avec du beurre AOP",
      specialties: ["Croissants", "Pain au chocolat", "Pain aux raisins", "Chaussons aux pommes"]
    },
    {
      icon: Heart,
      title: "Pâtisseries",
      description: "Éclairs, tartes aux fruits de saison, millefeuilles, créées avec passion et savoir-faire",
      specialties: ["Éclairs", "Tartes aux fruits", "Millefeuille", "Paris-Brest"]
    },
    {
      icon: Star,
      title: "Spécialités Maison",
      description: "Nos créations uniques qui font la renommée de la boulangerie",
      specialties: ["Brioche feuilletée", "Fougasse aux olives", "Cookies maison", "Cake aux fruits"]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-warm-brown mb-6">
            Nos Spécialités
          </h2>
          <p className="text-xl text-warm-brown/70 max-w-3xl mx-auto">
            Découvrez notre gamme complète de produits artisanaux, préparés chaque jour avec des ingrédients de qualité
          </p>
          <div className="w-20 h-1 bg-gradient-accent rounded-full mx-auto mt-8"></div>
        </div>

        {/* Featured Image */}
        <div className="mb-16">
          <div className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-elegant">
            <img 
              src={pastriesImage} 
              alt="Assortiment de pâtisseries et viennoiseries" 
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-warm-brown/40 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-cream">
              <h3 className="font-serif text-2xl font-bold mb-2">Fraîcheur Quotidienne</h3>
              <p className="text-cream/90">Tous nos produits sont préparés chaque matin</p>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="group hover:shadow-warm transition-all duration-300 hover:-translate-y-2 border-golden/20">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="bg-gradient-accent p-4 rounded-xl text-primary-foreground group-hover:animate-warm-glow">
                    <product.icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-2xl font-semibold text-warm-brown mb-3">
                      {product.title}
                    </h3>
                    <p className="text-warm-brown/70 mb-6">
                      {product.description}
                    </p>
                    <div className="space-y-2">
                      {product.specialties.map((specialty, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-golden rounded-full"></div>
                          <span className="text-warm-brown/80">{specialty}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-warm p-8 rounded-2xl max-w-2xl mx-auto shadow-elegant">
            <h3 className="font-serif text-2xl font-bold text-warm-brown mb-4">
              Commandes Spéciales
            </h3>
            <p className="text-warm-brown/70 mb-6">
              Gâteaux d'anniversaire, pièces montées, buffets... Nous réalisons vos commandes sur mesure
            </p>
            <p className="text-golden font-semibold">
              Contactez-nous 48h à l'avance
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;