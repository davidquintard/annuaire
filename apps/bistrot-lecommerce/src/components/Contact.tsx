import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock, Mail, Navigation } from "lucide-react";
import tabacExterior from "@/assets/tabac-exterior.jpg";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nous Contacter
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Trouvez-nous facilement au cœur de La Loupe. Nous sommes là pour vous accueillir 
            et répondre à toutes vos questions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Informations de contact */}
          <div className="space-y-6">
            <Card className="shadow-elegant hover:shadow-warm transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gradient-accent rounded-lg">
                    <MapPin className="h-6 w-6 text-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Adresse</h3>
                    <p className="text-muted-foreground mb-2">
                      2 rue de Châteaudun<br />
                      28240 La Loupe<br />
                      France
                    </p>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => window.open('https://maps.google.com/?q=2+rue+de+Châteaudun+28240+La+Loupe', '_blank')}
                      className="border-burgundy text-burgundy hover:bg-burgundy hover:text-primary-foreground"
                    >
                      <Navigation className="h-4 w-4 mr-2" />
                      Voir sur Google Maps
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-elegant hover:shadow-warm transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gradient-accent rounded-lg">
                    <Phone className="h-6 w-6 text-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Téléphone</h3>
                    <p className="text-muted-foreground mb-2">
                      02 37 81 XX XX
                    </p>
                    <p className="text-sm text-muted-foreground">
                      N'hésitez pas à nous appeler pour toute question
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-elegant hover:shadow-warm transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gradient-accent rounded-lg">
                    <Clock className="h-6 w-6 text-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Horaires</h3>
                    <div className="space-y-1 text-muted-foreground">
                      <p>Lundi - Samedi: 7h00 - 20h00</p>
                      <p>Dimanche: 8h00 - 13h00</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-burgundy/5 border-burgundy/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Comment nous trouver ?
                </h3>
                <div className="space-y-2 text-muted-foreground">
                  <p className="flex items-start space-x-2">
                    <span className="text-burgundy mt-1">•</span>
                    <span>En plein centre-ville de La Loupe</span>
                  </p>
                  <p className="flex items-start space-x-2">
                    <span className="text-burgundy mt-1">•</span>
                    <span>Proche de tous commerces et services</span>
                  </p>
                  <p className="flex items-start space-x-2">
                    <span className="text-burgundy mt-1">•</span>
                    <span>Parking gratuit à proximité</span>
                  </p>
                  <p className="flex items-start space-x-2">
                    <span className="text-burgundy mt-1">•</span>
                    <span>Accessible aux personnes à mobilité réduite</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Image et carte */}
          <div className="space-y-6">
            <Card className="overflow-hidden shadow-elegant">
              <div className="aspect-video relative">
                <img 
                  src={tabacExterior} 
                  alt="Façade du bar tabac Le Commerce"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-burgundy/30 to-transparent" />
                <div className="absolute bottom-4 left-4 text-primary-foreground">
                  <p className="text-sm font-medium">Le Commerce - La Loupe</p>
                </div>
              </div>
            </Card>

            {/* Carte intégrée */}
            <Card className="overflow-hidden shadow-elegant">
              <CardContent className="p-0">
                <div className="aspect-video bg-secondary/20 flex items-center justify-center">
                  <div className="text-center p-8">
                    <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h4 className="font-semibold text-foreground mb-2">Carte Interactive</h4>
                    <p className="text-muted-foreground mb-4">
                      Cliquez pour ouvrir la carte dans Google Maps
                    </p>
                    <Button 
                      onClick={() => window.open('https://maps.google.com/?q=2+rue+de+Châteaudun+28240+La+Loupe', '_blank')}
                      className="bg-burgundy hover:bg-burgundy-dark text-primary-foreground"
                    >
                      Ouvrir Google Maps
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Section supplémentaire */}
        <div className="mt-16 text-center">
          <Card className="bg-card/60 backdrop-blur-sm border-border/50 max-w-3xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Venez nous rendre visite !
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                L'équipe du Commerce vous attend dans un cadre chaleureux et convivial. 
                Que ce soit pour un café matinal, un moment de détente ou vos achats quotidiens, 
                nous sommes là pour vous servir avec le sourire.
              </p>
              <Button 
                size="lg"
                onClick={() => window.open('tel:0237817XXX', '_self')}
                className="bg-warm-gold hover:bg-warm-gold/90 text-foreground font-semibold shadow-warm"
              >
                <Phone className="h-5 w-5 mr-2" />
                Appelez-nous maintenant
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;