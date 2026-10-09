import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import menuPlatterImage from "@/assets/menu-platter.jpg";
import donerImage from "@/assets/doner-cooking.jpg";

const Menu = () => {
  const menuItems = [
    {
      category: "Kebabs Signature",
      items: [
        {
          name: "Kebab Classique",
          description: "Viande grillée, salade, tomates, oignons, sauce blanche",
          price: "7,50€"
        },
        {
          name: "Kebab Ada Spécial",
          description: "Double viande, crudités fraîches, frites, sauce samuraï",
          price: "9,50€"
        },
        {
          name: "Kebab Végétarien",
          description: "Falafels maison, houmous, légumes grillés, sauce tahini",
          price: "8,00€"
        }
      ]
    },
    {
      category: "Assiettes",
      items: [
        {
          name: "Assiette Mixte",
          description: "Viande de kebab, merguez, frites, salade composée",
          price: "12,00€"
        },
        {
          name: "Assiette Döner",
          description: "Viande döner, riz pilaf, légumes grillés, pain pita",
          price: "11,50€"
        }
      ]
    },
    {
      category: "Accompagnements",
      items: [
        {
          name: "Frites Maison",
          description: "Frites fraîches coupées sur place",
          price: "3,50€"
        },
        {
          name: "Salade Orientale",
          description: "Salade mixte aux herbes fraîches",
          price: "4,00€"
        }
      ]
    }
  ];

  return (
    <section id="menu" className="py-20 bg-gradient-to-b from-cream to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Notre <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Menu</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Des saveurs authentiques préparées avec les meilleurs ingrédients
          </p>
        </div>

        {/* Featured Images */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="relative rounded-2xl overflow-hidden shadow-elegant">
            <img 
              src={menuPlatterImage} 
              alt="Plateau de kebabs variés" 
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
              <p className="text-white p-6 text-lg font-semibold">Nos spécialités maison</p>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-elegant">
            <img 
              src={donerImage} 
              alt="Viande döner en préparation" 
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
              <p className="text-white p-6 text-lg font-semibold">Viandes fraîches du jour</p>
            </div>
          </div>
        </div>

        {/* Menu Items */}
        <div className="grid lg:grid-cols-3 gap-8">
          {menuItems.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="border-0 shadow-warm hover:shadow-elegant transition-all duration-300">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-primary">
                  {category.category}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="border-b border-border/30 pb-4 last:border-b-0">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-foreground">{item.name}</h4>
                      <span className="text-primary font-bold text-lg">{item.price}</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            * Tous nos plats sont préparés sur place avec des ingrédients frais
          </p>
        </div>
      </div>
    </section>
  );
};

export default Menu;