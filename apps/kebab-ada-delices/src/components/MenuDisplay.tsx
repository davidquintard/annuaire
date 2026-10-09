import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ShoppingCart, Plus, Minus, Euro, Filter, Search } from "lucide-react";
import { MenuItem, MenuOption, CartItem, menuComplet, categories } from "@/data/menu";

interface MenuDisplayProps {
  onOrder: (cart: CartItem[]) => void;
}

const MenuDisplay = ({ onOrder }: MenuDisplayProps) => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [selectedOptions, setSelectedOptions] = useState<MenuOption[]>([]);
  const [quantity, setQuantity] = useState(1);
  const [commentaires, setCommentaires] = useState("");

  // Filtrer les éléments du menu
  const filteredItems = menuComplet.filter(item => {
    const matchesCategory = selectedCategory === "all" || item.categorie === selectedCategory;
    const matchesSearch = 
      item.nom.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.ingredients.some(ing => ing.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch && item.disponibilite;
  });

  const addToCart = () => {
    if (!selectedItem) return;

    // Vérifier les options obligatoires
    const requiredOptions = selectedItem.options?.filter(opt => opt.obligatoire) || [];
    const selectedRequiredOptions = selectedOptions.filter(opt => 
      requiredOptions.some(req => req.id === opt.id)
    );

    if (requiredOptions.length > 0 && selectedRequiredOptions.length === 0) {
      alert("Veuillez sélectionner au moins une option obligatoire");
      return;
    }

    const cartItem: CartItem = {
      item: selectedItem,
      quantite: quantity,
      optionsSelectionnees: selectedOptions,
      commentaires: commentaires || undefined
    };

    setCart(prev => [...prev, cartItem]);
    setSelectedItem(null);
    setSelectedOptions([]);
    setQuantity(1);
    setCommentaires("");
  };

  const updateCartQuantity = (index: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      setCart(prev => prev.filter((_, i) => i !== index));
      return;
    }
    
    setCart(prev => prev.map((item, i) => 
      i === index ? { ...item, quantite: newQuantity } : item
    ));
  };

  const getTotal = () => {
    return cart.reduce((total, item) => {
      const itemPrix = item.item.prix + item.optionsSelectionnees.reduce((sum, opt) => sum + opt.prix, 0);
      return total + (itemPrix * item.quantite);
    }, 0);
  };

  const handleOrder = () => {
    if (cart.length === 0) {
      alert("Votre panier est vide");
      return;
    }
    onOrder(cart);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Menu principal */}
        <div className="lg:col-span-3">
          {/* Filtres */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Rechercher un plat..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full md:w-48">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Catégorie" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category.id} value={category.id}>
                    {category.nom}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Grille des plats */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredItems.map((item) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                <div className="h-48 bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
                  <span className="text-white text-lg font-semibold">{item.nom}</span>
                </div>
                <CardContent className="p-4">
                  <CardTitle className="text-lg mb-2">{item.nom}</CardTitle>
                  <p className="text-muted-foreground text-sm mb-3">{item.description}</p>
                  
                  <div className="flex flex-wrap gap-1 mb-3">
                    {item.allergenes.map((allergene) => (
                      <Badge key={allergene} variant="secondary" className="text-xs">
                        {allergene}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Euro className="w-4 h-4" />
                      <span className="font-bold text-lg">{item.prix.toFixed(2)}</span>
                    </div>
                    <Button 
                      onClick={() => setSelectedItem(item)}
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
                  <div className="space-y-3 mb-4 max-h-64 overflow-y-auto">
                    {cart.map((cartItem, index) => {
                      const itemTotal = (cartItem.item.prix + cartItem.optionsSelectionnees.reduce((sum, opt) => sum + opt.prix, 0)) * cartItem.quantite;
                      
                      return (
                        <div key={index} className="p-3 bg-muted rounded">
                          <div className="flex items-center justify-between mb-2">
                            <p className="font-medium text-sm">{cartItem.item.nom}</p>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => updateCartQuantity(index, 0)}
                              className="h-6 w-6 p-0 text-red-500 hover:text-red-700"
                            >
                              ×
                            </Button>
                          </div>
                          
                          {cartItem.optionsSelectionnees.length > 0 && (
                            <p className="text-xs text-muted-foreground mb-2">
                              + {cartItem.optionsSelectionnees.map(opt => opt.nom).join(', ')}
                            </p>
                          )}
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => updateCartQuantity(index, cartItem.quantite - 1)}
                                className="h-6 w-6 p-0"
                              >
                                <Minus className="w-3 h-3" />
                              </Button>
                              <span className="w-8 text-center">{cartItem.quantite}</span>
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => updateCartQuantity(index, cartItem.quantite + 1)}
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
                  </div>
                </>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Modal de sélection d'options */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <Card className="w-full max-w-md mx-4">
            <CardHeader>
              <CardTitle>{selectedItem.nom}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">{selectedItem.description}</p>
              
              {/* Options */}
              {selectedItem.options && selectedItem.options.length > 0 && (
                <div>
                  <h4 className="font-medium mb-2">Options :</h4>
                  <div className="space-y-2">
                    {selectedItem.options.map((option) => (
                      <div key={option.id} className="flex items-center space-x-2">
                        <Checkbox
                          id={option.id}
                          checked={selectedOptions.some(opt => opt.id === option.id)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              setSelectedOptions(prev => [...prev, option]);
                            } else {
                              setSelectedOptions(prev => prev.filter(opt => opt.id !== option.id));
                            }
                          }}
                        />
                        <label htmlFor={option.id} className="text-sm">
                          {option.nom}
                          {option.prix > 0 && ` (+${option.prix.toFixed(2)}€)`}
                          {option.obligatoire && " (obligatoire)"}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Quantité */}
              <div>
                <label className="text-sm font-medium mb-2 block">Quantité :</label>
                <div className="flex items-center gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    <Minus className="w-3 h-3" />
                  </Button>
                  <span className="w-12 text-center">{quantity}</span>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Plus className="w-3 h-3" />
                  </Button>
                </div>
              </div>
              
              {/* Commentaires */}
              <div>
                <label className="text-sm font-medium mb-2 block">Commentaires :</label>
                <Textarea
                  placeholder="Instructions spéciales..."
                  value={commentaires}
                  onChange={(e) => setCommentaires(e.target.value)}
                  className="min-h-20"
                />
              </div>
              
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  onClick={() => setSelectedItem(null)}
                  className="flex-1"
                >
                  Annuler
                </Button>
                <Button
                  onClick={addToCart}
                  className="flex-1 bg-orange-500 hover:bg-orange-600"
                >
                  Ajouter au panier
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default MenuDisplay;

