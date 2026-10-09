import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft, Euro, CreditCard, MapPin, Clock } from "lucide-react";
import { CartItem } from "@/data/menu";

interface ReservationFormProps {
  cart: CartItem[];
  onBack: () => void;
  onSuccess: (orderData: any) => void;
}

interface ClientInfo {
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  adresse: string;
  codePostal: string;
  ville: string;
  commentaires: string;
}

interface OrderInfo {
  typeLivraison: "livraison" | "emporter";
  heureLivraison: string;
  modePaiement: "especes" | "carte" | "cheque";
}

const ReservationForm = ({ cart, onBack, onSuccess }: ReservationFormProps) => {
  const [clientInfo, setClientInfo] = useState<ClientInfo>({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    adresse: "",
    codePostal: "28240",
    ville: "La Loupe",
    commentaires: ""
  });

  const [orderInfo, setOrderInfo] = useState<OrderInfo>({
    typeLivraison: "livraison",
    heureLivraison: "",
    modePaiement: "especes"
  });

  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const getTotal = () => {
    return cart.reduce((total, item) => {
      const itemPrix = item.item.prix + item.optionsSelectionnees.reduce((sum, opt) => sum + opt.prix, 0);
      return total + (itemPrix * item.quantite);
    }, 0);
  };

  const getFraisLivraison = () => {
    return orderInfo.typeLivraison === "livraison" ? (getTotal() < 25 ? 3.50 : 0) : 0;
  };

  const getTotalFinal = () => {
    return getTotal() + getFraisLivraison();
  };

  const validateForm = () => {
    if (!clientInfo.nom || !clientInfo.prenom || !clientInfo.telephone) {
      alert("Veuillez remplir les champs obligatoires");
      return false;
    }

    if (orderInfo.typeLivraison === "livraison" && (!clientInfo.adresse || !orderInfo.heureLivraison)) {
      alert("Veuillez renseigner votre adresse et l'heure de livraison");
      return false;
    }

    if (!acceptedTerms) {
      alert("Veuillez accepter les conditions générales");
      return false;
    }

    return true;
  };

  const handleSubmit = () => {
    if (!validateForm()) return;

    const orderData = {
      client: clientInfo,
      commande: orderInfo,
      items: cart.map(item => ({
        nom: item.item.nom,
        prix: item.item.prix,
        quantite: item.quantite,
        options: item.optionsSelectionnees.map(opt => opt.nom),
        commentaires: item.commentaires
      })),
      total: getTotal(),
      fraisLivraison: getFraisLivraison(),
      totalFinal: getTotalFinal(),
      timestamp: new Date().toISOString()
    };

    // Redirection vers Kizeo Forms avec toutes les données
    const encodedData = encodeURIComponent(JSON.stringify(orderData));
    window.open(`https://forms.kizeo.com/forms/1112226?data=${encodedData}`, '_blank');
    
    onSuccess(orderData);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <Button variant="ghost" onClick={onBack}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour au menu
          </Button>
          <h1 className="text-2xl font-bold">Finaliser votre commande</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Formulaire de commande */}
          <div className="lg:col-span-2 space-y-6">
            {/* Informations client */}
            <Card>
              <CardHeader>
                <CardTitle>Informations client</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="nom">Nom *</Label>
                    <Input
                      id="nom"
                      value={clientInfo.nom}
                      onChange={(e) => setClientInfo(prev => ({ ...prev, nom: e.target.value }))}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="prenom">Prénom *</Label>
                    <Input
                      id="prenom"
                      value={clientInfo.prenom}
                      onChange={(e) => setClientInfo(prev => ({ ...prev, prenom: e.target.value }))}
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={clientInfo.email}
                      onChange={(e) => setClientInfo(prev => ({ ...prev, email: e.target.value }))}
                    />
                  </div>
                  <div>
                    <Label htmlFor="telephone">Téléphone *</Label>
                    <Input
                      id="telephone"
                      value={clientInfo.telephone}
                      onChange={(e) => setClientInfo(prev => ({ ...prev, telephone: e.target.value }))}
                      required
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Livraison */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  Livraison
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <RadioGroup
                  value={orderInfo.typeLivraison}
                  onValueChange={(value: "livraison" | "emporter") => 
                    setOrderInfo(prev => ({ ...prev, typeLivraison: value }))
                  }
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="livraison" id="livraison" />
                    <Label htmlFor="livraison">Livraison à domicile</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="emporter" id="emporter" />
                    <Label htmlFor="emporter">À emporter</Label>
                  </div>
                </RadioGroup>

                {orderInfo.typeLivraison === "livraison" && (
                  <>
                    <div>
                      <Label htmlFor="adresse">Adresse de livraison *</Label>
                      <Input
                        id="adresse"
                        value={clientInfo.adresse}
                        onChange={(e) => setClientInfo(prev => ({ ...prev, adresse: e.target.value }))}
                        placeholder="Numéro et nom de rue"
                        required
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="codePostal">Code postal</Label>
                        <Input
                          id="codePostal"
                          value={clientInfo.codePostal}
                          onChange={(e) => setClientInfo(prev => ({ ...prev, codePostal: e.target.value }))}
                        />
                      </div>
                      <div>
                        <Label htmlFor="ville">Ville</Label>
                        <Input
                          id="ville"
                          value={clientInfo.ville}
                          onChange={(e) => setClientInfo(prev => ({ ...prev, ville: e.target.value }))}
                        />
                      </div>
                    </div>
                  </>
                )}

                <div>
                  <Label htmlFor="heureLivraison">Heure souhaitée</Label>
                  <Select
                    value={orderInfo.heureLivraison}
                    onValueChange={(value) => setOrderInfo(prev => ({ ...prev, heureLivraison: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionner une heure" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="12:00">12:00</SelectItem>
                      <SelectItem value="12:30">12:30</SelectItem>
                      <SelectItem value="13:00">13:00</SelectItem>
                      <SelectItem value="13:30">13:30</SelectItem>
                      <SelectItem value="19:00">19:00</SelectItem>
                      <SelectItem value="19:30">19:30</SelectItem>
                      <SelectItem value="20:00">20:00</SelectItem>
                      <SelectItem value="20:30">20:30</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Mode de paiement */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="w-5 h-5" />
                  Mode de paiement
                </CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup
                  value={orderInfo.modePaiement}
                  onValueChange={(value: "especes" | "carte" | "cheque") => 
                    setOrderInfo(prev => ({ ...prev, modePaiement: value }))
                  }
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="especes" id="especes" />
                    <Label htmlFor="especes">Espèces</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="carte" id="carte" />
                    <Label htmlFor="carte">Carte bancaire</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="cheque" id="cheque" />
                    <Label htmlFor="cheque">Chèque</Label>
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>

            {/* Commentaires */}
            <Card>
              <CardHeader>
                <CardTitle>Commentaires</CardTitle>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="Instructions spéciales pour votre commande..."
                  value={clientInfo.commentaires}
                  onChange={(e) => setClientInfo(prev => ({ ...prev, commentaires: e.target.value }))}
                  className="min-h-20"
                />
              </CardContent>
            </Card>

            {/* Conditions */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="terms"
                    checked={acceptedTerms}
                    onCheckedChange={setAcceptedTerms}
                  />
                  <Label htmlFor="terms" className="text-sm">
                    J'accepte les conditions générales de vente *
                  </Label>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Récapitulatif */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle>Récapitulatif</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Articles */}
                <div className="space-y-2">
                  {cart.map((item, index) => {
                    const itemTotal = (item.item.prix + item.optionsSelectionnees.reduce((sum, opt) => sum + opt.prix, 0)) * item.quantite;
                    
                    return (
                      <div key={index} className="flex justify-between text-sm">
                        <div>
                          <p className="font-medium">{item.item.nom}</p>
                          {item.optionsSelectionnees.length > 0 && (
                            <p className="text-muted-foreground text-xs">
                              + {item.optionsSelectionnees.map(opt => opt.nom).join(', ')}
                            </p>
                          )}
                          <p className="text-muted-foreground text-xs">× {item.quantite}</p>
                        </div>
                        <span className="font-medium">{itemTotal.toFixed(2)}€</span>
                      </div>
                    );
                  })}
                </div>

                {/* Totaux */}
                <div className="border-t pt-4 space-y-2">
                  <div className="flex justify-between">
                    <span>Sous-total :</span>
                    <span>{getTotal().toFixed(2)}€</span>
                  </div>
                  
                  {getFraisLivraison() > 0 && (
                    <div className="flex justify-between">
                      <span>Frais de livraison :</span>
                      <span>{getFraisLivraison().toFixed(2)}€</span>
                    </div>
                  )}
                  
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total :</span>
                    <span className="flex items-center gap-1">
                      <Euro className="w-4 h-4" />
                      {getTotalFinal().toFixed(2)}
                    </span>
                  </div>
                </div>

                <Button 
                  onClick={handleSubmit}
                  className="w-full bg-red-500 hover:bg-red-600"
                  size="lg"
                >
                  Confirmer la commande
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Vous serez redirigé vers notre formulaire de commande sécurisé
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationForm;

