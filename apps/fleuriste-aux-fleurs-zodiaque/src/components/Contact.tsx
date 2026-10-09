import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Sparkles } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-accent mb-4">
            <Sparkles className="w-5 h-5" />
            <span className="text-sm font-medium uppercase tracking-wider">Contact</span>
            <Sparkles className="w-5 h-5" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-zodiac bg-clip-text text-transparent">
              Contactez-nous
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nous sommes là pour réaliser vos projets floraux les plus beaux. 
            N'hésitez pas à nous contacter pour un devis personnalisé.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-elegant border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl">Envoyez-nous un message</CardTitle>
              <CardDescription>
                Décrivez-nous votre projet et nous vous répondrons rapidement
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Prénom</label>
                  <Input placeholder="Votre prénom" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Nom</label>
                  <Input placeholder="Votre nom" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <Input type="email" placeholder="votre@email.com" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Téléphone</label>
                <Input type="tel" placeholder="Votre numéro de téléphone" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Type de projet</label>
                <select className="w-full p-3 border border-input rounded-md bg-background">
                  <option>Mariage</option>
                  <option>Bouquet personnalisé</option>
                  <option>Décoration événement</option>
                  <option>Abonnement floral</option>
                  <option>Autre</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <Textarea 
                  placeholder="Décrivez-nous votre projet, vos goûts, votre signe du zodiaque..."
                  className="min-h-32"
                />
              </div>
              
              <Button variant="floral" size="lg" className="w-full">
                <Mail className="w-5 h-5 mr-2" />
                Envoyer le message
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="shadow-elegant border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl">Informations pratiques</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10 text-primary">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Adresse</h3>
                    <p className="text-muted-foreground">
                      1 rue du château<br />
                      28240 La Loupe<br />
                      France
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-accent/10 text-accent">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Téléphone</h3>
                    <p className="text-muted-foreground">02 37 81 XX XX</p>
                    <p className="text-sm text-muted-foreground">Lundi - Samedi</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-green-100 text-green-600">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Email</h3>
                    <p className="text-muted-foreground">contact@auxfleursduzodiaque.fr</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Horaires d'ouverture</h3>
                    <div className="text-muted-foreground space-y-1">
                      <p>Lundi - Vendredi: 9h00 - 19h00</p>
                      <p>Samedi: 9h00 - 18h00</p>
                      <p>Dimanche: Fermé</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="gradient-hero border-border/50">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Urgence florale ?</h3>
                <p className="text-muted-foreground mb-6">
                  Pour vos demandes urgentes, appelez-nous directement. 
                  Nous ferons notre possible pour vous aider !
                </p>
                <Button variant="zodiac" size="lg">
                  <Phone className="w-5 h-5 mr-2" />
                  Appeler maintenant
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;