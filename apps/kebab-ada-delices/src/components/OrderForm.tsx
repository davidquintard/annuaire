import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { ShoppingCart, Plus, Minus, Euro } from "lucide-react";

interface Kebab {
  id: string;
  nom: string;
  description: string;
  prix: number;
  image: string;
  ingredients: string[];
  allergenes: string[];
}

interface KebabOption {
  id: string;
  nom: string;
  prix: number;
}

interface CartItem {
  kebab: Kebab;
  quantite: number;
  taille: string;
  options: KebabOption[];
}

const kebabs: Kebab[] = [
  {
    id: "kebab-classique",
    nom: "Kebab Classique",
    description: "Pain pita, viande, salade, tomates, oignons",
    prix: 8.90,
    image: "/images/kebab-classique.jpg",
    ingredients: ["Pain pita", "Viande", "Salade", "Tomates", "Oignons"],
    allergenes: ["Gluten"]
  },
  {
    id: "kebab-deluxe",
    nom: "Kebab Deluxe",
    description: "Pain pita, viande, salade, tomates, oignons, frites",
    prix: 10.90,
    image: "/images/kebab-deluxe.jpg",
    ingredients: ["Pain pita", "Viande", "Salade", "Tomates", "Oignons", "Frites"],
    allergenes: ["Gluten"]
  },
  {
    id: "kebab-vegetarien",
    nom: "Kebab Végétarien",
    description: "Pain pita, falafels, salade, tomates, oignons",
    prix: 9.90,
    image: "/images/kebab-vegetarien.jpg",
    ingredients: ["Pain pita", "Falafels", "Salade", "Tomates", "Oignons"],
    allergenes: ["Gluten"]
  }
];

const options: KebabOption[] = [
  { id: "sauce-blanche", nom: "Sauce Blanche", prix: 0 },
  { id: "sauce-harissa", nom: "Sauce Harissa", prix: 0 },
  { id: "sauce-barbecue", nom: "Sauce Barbecue", prix: 0 },
  { id: "frites", nom: "Frites", prix: 3.50 },
  { id: "boisson", nom: "Boisson", prix: 2.50 }
];

const OrderForm = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const addToCart = (kebab: Kebab) => {
    const selectedKebabOptions = options.filter(option => 
      selectedOptions.includes(option.id)
    );

    const existingItem = cart.find(item => 
      item.kebab.id === kebab.id && 
      JSON.stringify(item.options.map(o => o.id)) === JSON.stringify(selectedOptions)
    );
    
    if (existingItem) {
      setCart(cart.map(item => 
        item.kebab.id === kebab.id && 
        JSON.stringify(item.options.map(o => o.id)) === JSON.stringify(selectedOptions)
          ? { ...item, quantite: item.quantite + 1 }
          : item
      ));
    } else {
      setCart([...cart, {
        kebab,
        quantite: 1,
        taille: "Normal",
        options: selectedKebabOptions
      }]);
    }
    
    setSelectedOptions([]);
  };

  const removeFromCart = (index: number) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const updateQuantity = (index: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(index);
      return;
    }
    
    setCart(cart.map((item, i) => 
      i === index ? { ...item, quantite: newQuantity } : item
    ));
  };

  const getTotal = () => {
    return cart.reduce((total, item) => {
      const itemTotal = (item.kebab.prix + item.options.reduce((sum, option) => sum + option.prix, 0)) * item.quantite;
      return total + itemTotal;
    }, 0);
  };

  const handleOrder = () => {
    // Redirection vers Kizeo Forms avec les données du panier
    const orderData = {
      items: cart.map(item => ({
        nom: item.kebab.nom,
        prix: item.kebab.prix,
        quantite: item.quantite,
        options: item.options.map(opt => opt.nom),
        total: (item.kebab.prix + item.options.reduce((sum, option) => sum + option.prix, 0)) * item.quantite
      })),
      total: getTotal(),
      timestamp: new Date().toISOString()
    };

    // Encodage des données pour Kizeo Forms
    const encodedData = encodeURIComponent(JSON.stringify(orderData));
    
    // Redirection vers le formulaire Kizeo Forms
    window.open(`https://forms.kizeo.com/forms/1112227?data=${encodedData}`, '_blank');
  };

  const toggleOption = (optionId: string) => {
    setSelectedOptions(prev => 
      prev.includes(optionId) 
        ? prev.filter(id => id !== optionId)
        : [...prev, optionId]
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Menu des kebabs */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold mb-6">Nos Kebabs</h2>
          <div className="space-y-6">
            {kebabs.map((kebab) => (
              <Card key={kebab.id} className="overflow-hidden">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{kebab.nom}</CardTitle>
                      <p className="text-muted-foreground mb-3">{kebab.description}</p>
                      
                      <div className="flex flex-wrap gap-1 mb-3">
                        {kebab.allergenes.map((allergene) => (
                          <Badge key={allergene} variant="secondary" className="text-xs">
                            {allergene}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-1 ml-4">
                      <Euro className="w-4 h-4" />
                      <span className="font-bold text-lg">{kebab.prix.toFixed(2)}</span>
                    </div>
                  </div>

                  {/* Options disponibles */}
                  <div className="mb-4">
                    <h4 className="font-medium mb-2">Options disponibles :</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {options.map((option) => (
                        <div key={option.id} className="flex items-center space-x-2">
                          <Checkbox
                            id={`${kebab.id}-${option.id}`}
                            checked={selectedOptions.includes(option.id)}
                            onCheckedChange={() => toggleOption(option.id)}
                          />
                          <label 
                            htmlFor={`${kebab.id}-${option.id}`}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {option.nom}
                            {option.prix > 0 && (
                              <span className="text-muted-foreground ml-1">
                                (+{option.prix.toFixed(2)}€)
                              </span>
                            )}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button 
                    onClick={() => addToCart(kebab)}
                    className="w-full bg-orange-500 hover:bg-orange-600"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Ajouter au panier
                  </Button>
                </div>
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
                    {cart.map((item, index) => {
                      const itemTotal = (item.kebab.prix + item.options.reduce((sum, option) => sum + option.prix, 0)) * item.quantite;
                      
                      return (
                        <div key={index} className="p-3 bg-muted rounded">
                          <div className="flex items-center justify-between mb-2">
                            <p className="font-medium text-sm">{item.kebab.nom}</p>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => removeFromCart(index)}
                              className="h-6 w-6 p-0 text-red-500 hover:text-red-700"
                            >
                              ×
                            </Button>
                          </div>
                          
                          {item.options.length > 0 && (
                            <p className="text-xs text-muted-foreground mb-2">
                              + {item.options.map(opt => opt.nom).join(', ')}
                            </p>
                          )}
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => updateQuantity(index, item.quantite - 1)}
                                className="h-6 w-6 p-0"
                              >
                                <Minus className="w-3 h-3" />
                              </Button>
                              <span className="w-8 text-center">{item.quantite}</span>
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => updateQuantity(index, item.quantite + 1)}
                                className="h-6 w-6 p-0"
                              >
                                <Plus className="w-3 h-3" />
                              </Button>
                            </div>
                            <span className="font-medium text-sm">
                              {itemTotal.toFixed(2)}€
                            </span>
                          </div>
                        </div>
                      );
                    })}
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
