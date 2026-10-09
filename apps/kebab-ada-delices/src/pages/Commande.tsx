import { useState } from "react";
import Header from "@/components/Header";
import MenuDisplay from "@/components/MenuDisplay";
import ReservationForm from "@/components/ReservationForm";
import { CartItem } from "@/data/menu";

const Commande = () => {
  const [currentStep, setCurrentStep] = useState<'menu' | 'reservation'>('menu');
  const [cart, setCart] = useState<CartItem[]>([]);

  const handleOrder = (cartItems: CartItem[]) => {
    setCart(cartItems);
    setCurrentStep('reservation');
  };

  const handleSuccess = (orderData: any) => {
    // Optionnel : afficher un message de succès
    alert('Commande envoyée avec succès !');
    setCurrentStep('menu');
    setCart([]);
  };

  const handleBack = () => {
    setCurrentStep('menu');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-br from-orange-500 to-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">
            Commandez votre kebab
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Kebabs frais et savoureux, préparés avec des ingrédients de qualité
          </p>
        </div>
      </section>

      {/* Contenu principal */}
      {currentStep === 'menu' ? (
        <MenuDisplay onOrder={handleOrder} />
      ) : (
        <ReservationForm 
          cart={cart} 
          onBack={handleBack} 
          onSuccess={handleSuccess} 
        />
      )}

      {/* Informations pratiques */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="font-semibold text-lg mb-2">⏱️ Préparation</h3>
              <p className="text-muted-foreground">
                Nos kebabs sont préparés à la commande en 10-15 minutes
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">🚗 Livraison</h3>
              <p className="text-muted-foreground">
                Livraison gratuite à La Loupe pour toute commande supérieure à 20€
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">📞 Contact</h3>
              <p className="text-muted-foreground">
                Appelez-nous au 02 37 81 14 56 pour vos commandes
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Commande;

