import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Menu = () => {
  const pizzas = [
    {
      name: "Margherita",
      description: "Tomate, mozzarella, basilic frais, huile d'olive",
      price: "12€"
    },
    {
      name: "Napoletana",
      description: "Tomate, mozzarella, anchois, olives, câpres",
      price: "14€"
    },
    {
      name: "Quattro Stagioni",
      description: "Tomate, mozzarella, jambon, champignons, artichauts, olives",
      price: "16€"
    },
    {
      name: "Diavola",
      description: "Tomate, mozzarella, salami piquant, piment",
      price: "15€"
    },
    {
      name: "Prosciutto",
      description: "Tomate, mozzarella, jambon de Parme, roquette, parmesan",
      price: "17€"
    },
    {
      name: "Calzone",
      description: "Chausson fourré tomate, mozzarella, jambon, champignons",
      price: "14€"
    }
  ];

  return (
    <section id="menu" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Notre Menu
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez nos pizzas artisanales préparées avec des ingrédients frais et de qualité, 
            selon les traditions ancestrales de Naples.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pizzas.map((pizza, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-muted">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl text-foreground group-hover:text-italian-red transition-colors">
                    {pizza.name}
                  </CardTitle>
                  <span className="text-xl font-bold text-italian-red">
                    {pizza.price}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {pizza.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Toutes nos pizzas sont disponibles en pâte fine ou épaisse
          </p>
          <p className="text-sm text-muted-foreground">
            * Prix pour pizza taille normale. Supplément pour grande taille: +3€
          </p>
        </div>
      </div>
    </section>
  );
};

export default Menu;