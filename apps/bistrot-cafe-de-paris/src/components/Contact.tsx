import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

const Contact = () => {
  const horaires = [
    { jour: "Lundi - Vendredi", heures: "7h00 - 19h00" },
    { jour: "Samedi", heures: "8h00 - 19h00" },
    { jour: "Dimanche", heures: "8h30 - 17h00" },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-coffee mb-6">
            Nous Contacter
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Venez nous rendre visite au cœur de La Loupe pour un moment de détente authentique
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="border-coffee/20 shadow-warm">
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-gradient-warm rounded-full flex items-center justify-center mx-auto mb-3">
                <MapPin className="w-6 h-6 text-primary-foreground" />
              </div>
              <CardTitle className="font-playfair text-xl text-coffee">
                Adresse
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground">
                2 Place de l'Hôtel de Ville<br />
                28240 La Loupe<br />
                France
              </p>
              <Button variant="outline" className="mt-4 border-coffee text-coffee hover:bg-coffee hover:text-primary-foreground">
                Voir sur la carte
              </Button>
            </CardContent>
          </Card>

          <Card className="border-coffee/20 shadow-warm">
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-gradient-warm rounded-full flex items-center justify-center mx-auto mb-3">
                <Clock className="w-6 h-6 text-primary-foreground" />
              </div>
              <CardTitle className="font-playfair text-xl text-coffee">
                Horaires
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {horaires.map((horaire, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-muted-foreground">{horaire.jour}</span>
                    <span className="font-medium text-coffee">{horaire.heures}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-coffee/20 shadow-warm md:col-span-2 lg:col-span-1">
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-gradient-warm rounded-full flex items-center justify-center mx-auto mb-3">
                <Phone className="w-6 h-6 text-primary-foreground" />
              </div>
              <CardTitle className="font-playfair text-xl text-coffee">
                Contact
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <div>
                <div className="flex items-center justify-center gap-2 text-muted-foreground mb-2">
                  <Phone className="w-4 h-4" />
                  <span>02 37 81 XX XX</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-muted-foreground">
                  <Mail className="w-4 h-4" />
                  <span>contact@cafedeparis-laloupe.fr</span>
                </div>
              </div>
              <Button className="bg-gold hover:bg-gold/90 text-coffee">
                Réserver une table
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 bg-card rounded-lg p-8 shadow-warm">
          <div className="text-center">
            <h3 className="font-playfair text-2xl font-semibold text-coffee mb-4">
              Événements & Privatisation
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Le Café de Paris peut accueillir vos événements privés, réunions d'affaires ou célébrations. 
              Contactez-nous pour discuter de vos besoins spécifiques.
            </p>
            <Button variant="outline" size="lg" className="border-coffee text-coffee hover:bg-coffee hover:text-primary-foreground">
              Demander un devis
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;