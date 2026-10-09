import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Contactez-nous
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Une question ? Un projet ? Notre équipe est à votre disposition pour vous conseiller.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-medium border-0 gradient-card">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">
                Demande de contact
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Prénom *
                  </label>
                  <Input placeholder="Votre prénom" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Nom *
                  </label>
                  <Input placeholder="Votre nom" />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Email *
                </label>
                <Input type="email" placeholder="votre@email.com" />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Téléphone
                </label>
                <Input type="tel" placeholder="06 XX XX XX XX" />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Type d'assurance
                </label>
                <select className="w-full px-3 py-2 bg-input border border-border rounded-md text-foreground">
                  <option value="">Sélectionnez un type</option>
                  <option value="auto">Assurance Auto</option>
                  <option value="habitation">Assurance Habitation</option>
                  <option value="sante">Assurance Santé</option>
                  <option value="pro">Assurance Professionnelle</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Message *
                </label>
                <Textarea 
                  placeholder="Décrivez votre demande..."
                  className="min-h-[120px]"
                />
              </div>

              <Button className="w-full bg-primary hover:bg-primary-dark text-primary-foreground">
                Envoyer ma demande
              </Button>

              <p className="text-xs text-muted-foreground">
                * Champs obligatoires. Vos données sont protégées et ne seront jamais transmises à des tiers.
              </p>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Nos coordonnées
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Adresse</h4>
                    <p className="text-muted-foreground">
                      11 rue du Château<br />
                      28240 La Loupe
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Téléphone</h4>
                    <p className="text-muted-foreground">02 37 81 XX XX</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Email</h4>
                    <p className="text-muted-foreground">contact@areas-assurance.fr</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Horaires</h4>
                    <div className="text-muted-foreground space-y-1 text-sm">
                      <p>Lundi - Vendredi: 9h00 - 12h30 / 14h00 - 18h00</p>
                      <p>Samedi: 9h00 - 12h00</p>
                      <p>Dimanche: Fermé</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Card className="gradient-primary text-primary-foreground">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-3">Urgence sinistre</h4>
                <p className="text-sm mb-4 opacity-90">
                  En cas de sinistre urgent, contactez notre ligne dédiée 24h/24, 7j/7
                </p>
                <Button 
                  variant="outline" 
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Urgence: 02 37 81 XX XX
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;