import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Mail, Navigation } from "lucide-react";

const Contact = () => {
  const openingHours = [
    { day: "Lundi", hours: "Fermé" },
    { day: "Mardi", hours: "8h00 - 12h30 | 15h00 - 19h00" },
    { day: "Mercredi", hours: "8h00 - 12h30 | 15h00 - 19h00" },
    { day: "Jeudi", hours: "8h00 - 12h30 | 15h00 - 19h00" },
    { day: "Vendredi", hours: "8h00 - 12h30 | 15h00 - 19h00" },
    { day: "Samedi", hours: "8h00 - 12h30 | 15h00 - 19h00" },
    { day: "Dimanche", hours: "Fermé" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* En-tête */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Venez nous
            <span className="text-butcher-red font-serif block">Rencontrer</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Notre équipe vous accueille dans une ambiance chaleureuse pour vous conseiller 
            et vous proposer les meilleurs produits de notre terroir.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Informations de contact */}
          <div className="space-y-8">
            <Card className="border-border/50 hover:shadow-soft transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-foreground">
                  <div className="w-10 h-10 bg-butcher-red/10 rounded-lg flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-butcher-red" />
                  </div>
                  <span>Notre Adresse</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <address className="not-italic text-muted-foreground">
                  <strong className="text-foreground">Boucherie Charcuterie La Loupe</strong><br />
                  5 rue de Chateaudun<br />
                  28240 La Loupe<br />
                  Eure-et-Loir, France
                </address>
                <Button variant="outline-butcher" className="mt-4" size="sm">
                  <Navigation className="h-4 w-4" />
                  Itinéraire
                </Button>
              </CardContent>
            </Card>

            <Card className="border-border/50 hover:shadow-soft transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-foreground">
                  <div className="w-10 h-10 bg-butcher-red/10 rounded-lg flex items-center justify-center">
                    <Phone className="h-5 w-5 text-butcher-red" />
                  </div>
                  <span>Nous Contacter</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-butcher-red" />
                  <a href="tel:+33237810000" className="text-muted-foreground hover:text-butcher-red transition-colors">
                    02 37 81 XX XX
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-butcher-red" />
                  <a href="mailto:contact@boucherie-laloupe.fr" className="text-muted-foreground hover:text-butcher-red transition-colors">
                    contact@boucherie-laloupe.fr
                  </a>
                </div>
                <Button variant="butcher" className="w-full mt-4">
                  <Phone className="h-4 w-4" />
                  Appeler maintenant
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Horaires d'ouverture */}
          <div>
            <Card className="border-border/50 hover:shadow-soft transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-foreground">
                  <div className="w-10 h-10 bg-butcher-red/10 rounded-lg flex items-center justify-center">
                    <Clock className="h-5 w-5 text-butcher-red" />
                  </div>
                  <span>Horaires d'Ouverture</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {openingHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-border/30 last:border-b-0">
                      <span className="font-medium text-foreground">{schedule.day}</span>
                      <span className={`text-sm ${schedule.hours === "Fermé" ? "text-destructive" : "text-muted-foreground"}`}>
                        {schedule.hours}
                      </span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-butcher-gold/10 rounded-lg border border-butcher-gold/20">
                  <p className="text-sm text-butcher-brown">
                    <strong>Information :</strong> Fermé les jours fériés. 
                    Commandes spéciales sur rendez-vous en dehors des heures d'ouverture.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to action final */}
        <div className="text-center mt-16 p-8 bg-gradient-gold/10 rounded-2xl border border-butcher-gold/20">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Une question ? Un conseil ?
          </h3>
          <p className="text-muted-foreground mb-6">
            Notre équipe d'experts est à votre disposition pour vous accompagner 
            dans le choix de vos viandes et vous proposer des conseils de préparation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="butcher" size="lg">
              Prendre rendez-vous
            </Button>
            <Button variant="gold" size="lg">
              Nous écrire
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;