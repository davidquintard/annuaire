import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Clock, Mail, Car, Calendar } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Adresse",
      info: "8 rue de Châteaudun",
      details: "28240 La Loupe",
    },
    {
      icon: Phone,
      title: "Téléphone",
      info: "02 37 XX XX XX",
      details: "Appel gratuit",
    },
    {
      icon: Clock,
      title: "Horaires",
      info: "Lun - Ven : 8h - 19h",
      details: "Sam : 8h - 12h",
    },
    {
      icon: Mail,
      title: "Email",
      info: "contact@auto-ecole-loupeenne.fr",
      details: "Réponse sous 24h",
    },
  ];

  const openingHours = [
    { day: "Lundi", hours: "8h00 - 19h00" },
    { day: "Mardi", hours: "8h00 - 19h00" },
    { day: "Mercredi", hours: "8h00 - 19h00" },
    { day: "Jeudi", hours: "8h00 - 19h00" },
    { day: "Vendredi", hours: "8h00 - 19h00" },
    { day: "Samedi", hours: "8h00 - 12h00" },
    { day: "Dimanche", hours: "Fermé" },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Contact
          </Badge>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Prêt à commencer votre{" "}
            <span className="bg-hero-gradient bg-clip-text text-transparent">
              formation ?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Contactez-nous dès aujourd'hui pour démarrer votre apprentissage de la conduite. 
            Notre équipe est là pour répondre à toutes vos questions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactInfo.map((item, index) => (
                <Card key={index} className="transition-all duration-300 hover:shadow-soft">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                        <p className="text-foreground font-medium">{item.info}</p>
                        <p className="text-sm text-muted-foreground">{item.details}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Opening Hours */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  Horaires d'ouverture
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {openingHours.map((item, index) => (
                    <div key={index} className="flex justify-between items-center py-2">
                      <span className="text-foreground font-medium">{item.day}</span>
                      <span className={`text-sm ${item.hours === 'Fermé' ? 'text-muted-foreground' : 'text-primary font-medium'}`}>
                        {item.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="space-y-4">
              <Button size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                <Phone className="w-5 h-5 mr-2" />
                Appeler maintenant
              </Button>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button variant="outline" size="lg" className="w-full">
                  <Calendar className="w-5 h-5 mr-2" />
                  Prendre RDV
                </Button>
                <Button variant="outline" size="lg" className="w-full">
                  <Car className="w-5 h-5 mr-2" />
                  Leçon d'essai
                </Button>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="space-y-6">
            <Card className="overflow-hidden">
              <div className="h-80 bg-muted/30 flex items-center justify-center relative">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Auto-École Loupéenne
                  </h3>
                  <p className="text-muted-foreground">
                    8 rue de Châteaudun<br />
                    28240 La Loupe
                  </p>
                </div>
              </div>
            </Card>

            {/* Additional Info */}
            <Card>
              <CardHeader>
                <CardTitle>Informations pratiques</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Car className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">Parking gratuit</p>
                    <p className="text-sm text-muted-foreground">Stationnement facile devant l'auto-école</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">Transports en commun</p>
                    <p className="text-sm text-muted-foreground">Arrêt de bus à 100m</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">Prise de rendez-vous</p>
                    <p className="text-sm text-muted-foreground">Par téléphone ou sur place</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;