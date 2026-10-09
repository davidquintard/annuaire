import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-6 text-coccinelle-black">
            Contact & Localisation
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Venez nous rendre visite au cœur de La Loupe ou contactez-nous 
            pour toute question ou demande particulière.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="animate-fade-in-up">
            <h3 className="text-2xl font-bold mb-8 text-coccinelle-red">
              Nos coordonnées
            </h3>
            
            <div className="space-y-6">
              <Card className="shadow-soft hover:shadow-elegant transition-smooth">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-coccinelle-red/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-coccinelle-red" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Adresse</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        11 place de l'hôtel de ville<br />
                        28240 La Loupe<br />
                        Eure-et-Loir, France
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-soft hover:shadow-elegant transition-smooth">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-coccinelle-red/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-coccinelle-red" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Téléphone</h4>
                      <p className="text-muted-foreground">02 37 81 XX XX</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Du lundi au samedi de 8h à 19h30
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-soft hover:shadow-elegant transition-smooth">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-coccinelle-red/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-coccinelle-red" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Email</h4>
                      <p className="text-muted-foreground">contact@coccinelle-laloupe.fr</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Réponse sous 24h en semaine
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-soft hover:shadow-elegant transition-smooth">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-coccinelle-red/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-coccinelle-red" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Horaires d'ouverture</h4>
                      <div className="text-muted-foreground space-y-1">
                        <p>Lun - Sam : 8h00 - 19h30</p>
                        <p>Dimanche : 8h30 - 12h30</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Map and CTA */}
          <div className="animate-fade-in-up">
            <h3 className="text-2xl font-bold mb-8 text-coccinelle-red">
              Comment nous trouver
            </h3>
            
            {/* Map Placeholder */}
            <Card className="mb-8 shadow-elegant">
              <CardContent className="p-0">
                <div className="h-80 bg-gradient-to-br from-coccinelle-cream to-coccinelle-beige rounded-t-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-16 w-16 text-coccinelle-red mx-auto mb-4" />
                    <h4 className="text-xl font-semibold mb-2">Plan d'accès</h4>
                    <p className="text-muted-foreground mb-4">
                      Située en plein cœur de La Loupe<br />
                      Place de l'hôtel de ville
                    </p>
                    <Button className="bg-coccinelle-red hover:bg-coccinelle-red-dark">
                      Voir sur Google Maps
                    </Button>
                  </div>
                </div>
                <div className="p-6">
                  <h5 className="font-semibold mb-3">Accès et stationnement</h5>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>• Parking gratuit sur la place de l'hôtel de ville</p>
                    <p>• Accès facile en voiture et à pied</p>
                    <p>• Proche des transports en commun</p>
                    <p>• Magasin accessible aux personnes à mobilité réduite</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTA Section */}
            <div className="bg-gradient-hero text-white p-8 rounded-2xl">
              <h4 className="text-xl font-bold mb-4">Une question ? Un besoin particulier ?</h4>
              <p className="text-white/90 mb-6 leading-relaxed">
                N'hésitez pas à nous contacter ! Notre équipe sera ravie de vous renseigner 
                et de répondre à toutes vos demandes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="secondary"
                  className="bg-white text-coccinelle-red hover:bg-white/90"
                >
                  📞 Nous appeler
                </Button>
                <Button 
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-coccinelle-red"
                >
                  ✉️ Nous écrire
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;