import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Prendre <span className="text-red">Rendez-vous</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Contactez-nous pour réserver votre créneau et découvrir l'excellence Samsoum Coiff
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="hover:shadow-red transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-red/10 p-3 rounded-full mr-4">
                    <MapPin className="w-6 h-6 text-red" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Adresse</h3>
                    <p className="text-muted-foreground">
                      3 rue Paul Éluard<br />
                      28240 La Loupe, France
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-red transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-red/10 p-3 rounded-full mr-4">
                    <Phone className="w-6 h-6 text-red" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Téléphone</h3>
                    <a 
                      href="tel:0237810000" 
                      className="text-red hover:text-red-dark transition-colors text-lg font-medium"
                    >
                      02 37 81 00 00
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-red transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-red/10 p-3 rounded-full mr-4">
                    <Clock className="w-6 h-6 text-red" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Horaires d'ouverture</h3>
                    <div className="space-y-2 text-muted-foreground">
                      <div className="flex justify-between">
                        <span>Lundi - Vendredi</span>
                        <span className="font-medium">9h00 - 19h00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Samedi</span>
                        <span className="font-medium">9h00 - 18h00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Dimanche</span>
                        <span className="font-medium text-red-500">Fermé</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Call to Action */}
          <div className="flex flex-col justify-center">
            <Card className="bg-gradient-hero text-white border-red">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-red rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Réservation Recommandée</h3>
                  <p className="text-gray-300 mb-6">
                    Pour garantir votre créneau et éviter l'attente, 
                    nous vous recommandons de prendre rendez-vous par téléphone.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <Button 
                    variant="gold" 
                    size="lg" 
                    className="w-full text-lg py-6"
                    asChild
                  >
                    <a href="tel:0237810000">
                      <Phone className="w-5 h-5 mr-2" />
                      Appeler Maintenant
                    </a>
                  </Button>
                  
                  <p className="text-sm text-gray-400">
                    Appelez-nous pour réserver votre créneau ou pour toute question
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <div className="mt-8 p-6 bg-red/5 rounded-lg border border-red/20">
              <h4 className="font-semibold text-red mb-3">💡 Conseils pratiques</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Arrivez 5 minutes avant votre rendez-vous</li>
                <li>• Stationnement gratuit à proximité</li>
                <li>• Paiement par carte bancaire accepté</li>
                <li>• Annulation possible jusqu'à 2h avant</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;