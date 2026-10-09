import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Plus, Minus, Euro } from "lucide-react";

interface Pizza {
  id: string;
  nom: string;
  description: string;
  prix: number;
  image: string;
  ingredients: string[];
  allergenes: string[];
}

interface CartItem {
  pizza: Pizza;
  quantite: number;
  taille: string;
  options: string[];
}

const pizzas: Pizza[] = [
  {
    id: "margherita",
    nom: "Margherita",
    description: "Tomate, mozzarella, basilic frais",
    prix: 12.90,
    image: "/images/pizza-margherita.jpg",
    ingredients: ["Tomate", "Mozzarella", "Basilic"],
    allergenes: ["Gluten", "Lactose"]
  },
  {
    id: "pepperoni",
    nom: "Pepperoni",
    description: "Tomate, mozzarella, pepperoni, olives",
    prix: 15.90,
    image: "/images/pizza-pepperoni.jpg",
    ingredients: ["Tomate", "Mozzarella", "Pepperoni", "Olives"],
    allergenes: ["Gluten", "Lactose"]
  },
  {
    id: "quatre-fromages",
    nom: "Quatre Fromages",
    description: "Tomate, mozzarella, gorgonzola, parmesan, chèvre",
    prix: 16.90,
    image: "/images/pizza-quatre-fromages.jpg",
    ingredients: ["Tomate", "Mozzarella", "Gorgonzola", "Parmesan", "Chèvre"],
    allergenes: ["Gluten", "Lactose"]
  },
  {
    id: "vegetarienne",
    nom: "Végétarienne",
    description: "Tomate, mozzarella, légumes grillés, basilic",
    prix: 14.90,
    image: "/images/pizza-vegetarienne.jpg",
    ingredients: ["Tomate", "Mozzarella", "Courgettes", "Aubergines", "Poivrons", "Basilic"],
    allergenes: ["Gluten", "Lactose"]
  }
];

const OrderForm = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedPizza, setSelectedPizza] = useState<Pizza | null>(null);

  const addToCart = (pizza: Pizza) => {
    const existingItem = cart.find(item => item.pizza.id === pizza.id);
    
    if (existingItem) {
      setCart(cart.map(item => 
        item.pizza.id === pizza.id 
          ? { ...item, quantite: item.quantite + 1 }
          : item
      ));
    } else {
      setCart([...cart, {
        pizza,
        quantite: 1,
        taille: "Moyenne",
        options: []
      }]);
    }
  };

  const removeFromCart = (pizzaId: string) => {
    setCart(cart.filter(item => item.pizza.id !== pizzaId));
  };

  const updateQuantity = (pizzaId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(pizzaId);
      return;
    }
    
    setCart(cart.map(item => 
      item.pizza.id === pizzaId 
        ? { ...item, quantite: newQuantity }
        : item
    ));
  };

  const getTotal = () => {
    return cart.reduce((total, item) => total + (item.pizza.prix * item.quantite), 0);
  };

  const handleOrder = () => {
    // Redirection vers Kizeo Forms avec les données du panier
    const orderData = {
      items: cart.map(item => ({
        nom: item.pizza.nom,
        prix: item.pizza.prix,
        quantite: item.quantite,
        total: item.pizza.prix * item.quantite
      })),
      total: getTotal(),
      timestamp: new Date().toISOString()
    };

    // Encodage des données pour Kizeo Forms
    const encodedData = encodeURIComponent(JSON.stringify(orderData));
    
    // Redirection vers le formulaire Kizeo Forms
    window.open(`https://forms.kizeo.com/forms/1112226?data=${encodedData}`, '_blank');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Menu des pizzas */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold mb-6">Nos Pizzas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pizzas.map((pizza) => (
              <Card key={pizza.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
                  <span className="text-white text-lg font-semibold">{pizza.nom}</span>
                </div>
                <CardContent className="p-4">
                  <CardTitle className="text-lg mb-2">{pizza.nom}</CardTitle>
                  <p className="text-muted-foreground text-sm mb-3">{pizza.description}</p>
                  
                  <div className="flex flex-wrap gap-1 mb-3">
                    {pizza.allergenes.map((allergene) => (
                      <Badge key={allergene} variant="secondary" className="text-xs">
                        {allergene}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Euro className="w-4 h-4" />
                      <span className="font-bold text-lg">{pizza.prix.toFixed(2)}</span>
                    </div>
                    <Button 
                      onClick={() => addToCart(pizza)}
                      className="bg-orange-500 hover:bg-orange-600"
                    >
                      <Plus className="w-4 h-4 mr-1" />
                      Ajouter
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Panier */}
        <div className="lg:col-span-1">
          <Card className="sticky top-4">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ShoppingCart className="w-5 h-5" />
                Panier ({cart.length} article{cart.length > 1 ? 's' : ''})
              </CardTitle>
            </CardHeader>
            <CardContent>
              {cart.length === 0 ? (
                <p className="text-muted-foreground text-center py-4">
                  Votre panier est vide
                </p>
              ) : (
                <>
                  <div className="space-y-3 mb-4">
                    {cart.map((item) => (
                      <div key={item.pizza.id} className="flex items-center justify-between p-2 bg-muted rounded">
                        <div className="flex-1">
                          <p className="font-medium text-sm">{item.pizza.nom}</p>
                          <p className="text-muted-foreground text-xs">
                            {item.pizza.prix.toFixed(2)}€ × {item.quantite}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => updateQuantity(item.pizza.id, item.quantite - 1)}
                          >
                            <Minus className="w-3 h-3" />
                          </Button>
                          <span className="w-8 text-center">{item.quantite}</span>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => updateQuantity(item.pizza.id, item.quantite + 1)}
                          >
                            <Plus className="w-3 h-3" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center mb-4">
                      <span className="font-bold text-lg">Total :</span>
                      <span className="font-bold text-lg flex items-center gap-1">
                        <Euro className="w-4 h-4" />
                        {getTotal().toFixed(2)}
                      </span>
                    </div>
                    
                    <Button 
                      onClick={handleOrder}
                      className="w-full bg-orange-500 hover:bg-orange-600"
                      size="lg"
                    >
                      Commander maintenant
                    </Button>
                    
                    <p className="text-xs text-muted-foreground text-center mt-2">
                      Vous serez redirigé vers notre formulaire de commande sécurisé
                    </p>
                  </div>
                </>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default OrderForm;
