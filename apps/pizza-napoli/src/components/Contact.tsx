import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nous Contacter
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Venez découvrir l'authenticité italienne au cœur de La Loupe. 
            Réservation conseillée pour les groupes.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Informations de contact */}
          <div className="space-y-6">
            <Card className="border-muted">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-3 text-italian-red">
                  <MapPin className="w-5 h-5" />
                  Adresse
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  11 rue du château<br />
                  28240 La Loupe<br />
                  France
                </p>
              </CardContent>
            </Card>

            <Card className="border-muted">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-3 text-italian-red">
                  <Phone className="w-5 h-5" />
                  Téléphone
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  02 37 81 XX XX
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Pour vos commandes et réservations
                </p>
              </CardContent>
            </Card>

            <Card className="border-muted">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-3 text-italian-red">
                  <Clock className="w-5 h-5" />
                  Horaires d'ouverture
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Mardi - Samedi</span>
                  <span className="text-foreground">18h00 - 22h00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Dimanche</span>
                  <span className="text-foreground">18h00 - 21h30</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Lundi</span>
                  <span className="text-italian-red">Fermé</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-muted">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-3 text-italian-red">
                  <Mail className="w-5 h-5" />
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  contact@pizzanapoli-laloupe.fr
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Carte ou call-to-action */}
          <div className="bg-card rounded-lg p-8 border border-muted">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Réservez votre table
            </h3>
            <p className="text-muted-foreground mb-6">
              Pour une expérience optimale, nous vous recommandons de réserver votre table, 
              surtout en fin de semaine. Notre équipe se fera un plaisir de vous accueillir 
              dans notre ambiance chaleureuse et authentique.
            </p>
            
            <div className="space-y-4">
              <Button variant="hero" size="lg" className="w-full">
                Réserver par téléphone
              </Button>
              <Button variant="italian" size="lg" className="w-full">
                Commander à emporter
              </Button>
            </div>

            <div className="mt-6 p-4 bg-muted/50 rounded-lg">
              <p className="text-sm text-muted-foreground text-center">
                <strong>Livraison gratuite</strong> dans un rayon de 5km<br />
                Commande minimum: 20€
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;