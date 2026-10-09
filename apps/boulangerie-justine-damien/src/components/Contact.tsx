import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Phone, Mail } from "lucide-react";

const Contact = () => {
  const hours = [
    { day: "Mardi - Vendredi", time: "6h30 - 13h30 & 15h30 - 19h30" },
    { day: "Samedi", time: "6h30 - 19h30" },
    { day: "Dimanche", time: "7h00 - 13h00" },
    { day: "Lundi", time: "Fermé" }
  ];

  return (
    <section className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-warm-brown mb-6">
            Nous Trouver
          </h2>
          <p className="text-xl text-warm-brown/70 max-w-2xl mx-auto">
            Venez découvrir notre boulangerie au cœur de La Loupe
          </p>
          <div className="w-20 h-1 bg-gradient-accent rounded-full mx-auto mt-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="border-golden/20 shadow-warm">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-gradient-accent p-3 rounded-xl text-primary-foreground">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-warm-brown mb-2">Adresse</h3>
                    <p className="text-warm-brown/70">
                      3 rue de Chateaudun<br />
                      28240 La Loupe<br />
                      France
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-accent p-3 rounded-xl text-primary-foreground">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-warm-brown mb-2">Téléphone</h3>
                    <p className="text-warm-brown/70">02 37 XX XX XX</p>
                    <p className="text-sm text-warm-brown/60 mt-1">Pour vos commandes et réservations</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-golden/20 shadow-warm">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-gradient-accent p-3 rounded-xl text-primary-foreground">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-xl font-semibold text-warm-brown mb-4">Horaires d'ouverture</h3>
                    <div className="space-y-3">
                      {hours.map((schedule, index) => (
                        <div key={index} className="flex justify-between items-center">
                          <span className="text-warm-brown/80 font-medium">{schedule.day}</span>
                          <span className={`text-sm ${schedule.day.includes('Lundi') ? 'text-golden font-semibold' : 'text-warm-brown/70'}`}>
                            {schedule.time}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="bg-golden/10 p-4 rounded-xl">
                  <p className="text-sm text-warm-brown/80">
                    <strong className="text-golden">Astuce :</strong> Venez tôt le matin pour profiter de nos produits tout juste sortis du four !
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Map Placeholder & Actions */}
          <div className="space-y-8">
            <Card className="border-golden/20 shadow-warm">
              <CardContent className="p-8">
                <h3 className="font-serif text-xl font-semibold text-warm-brown mb-6">Comment nous trouver</h3>
                
                {/* Map Placeholder */}
                <div className="bg-gradient-to-br from-golden/10 to-golden/5 rounded-xl p-8 mb-6 text-center">
                  <MapPin className="h-12 w-12 text-golden mx-auto mb-4" />
                  <p className="text-warm-brown/70 mb-4">
                    Nous sommes situés au centre-ville de La Loupe, facilement accessible à pied ou en voiture.
                  </p>
                  <Button variant="warm" className="mb-4">
                    Voir sur Google Maps
                  </Button>
                </div>

                {/* Directions */}
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-golden rounded-full mt-2"></div>
                    <p className="text-warm-brown/70">Parking gratuit disponible rue de Chateaudun</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-golden rounded-full mt-2"></div>
                    <p className="text-warm-brown/70">Accès facilité pour les personnes à mobilité réduite</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-golden rounded-full mt-2"></div>
                    <p className="text-warm-brown/70">À 5 minutes à pied de la gare de La Loupe</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Form */}
            <Card className="border-golden/20 shadow-warm">
              <CardContent className="p-8">
                <h3 className="font-serif text-xl font-semibold text-warm-brown mb-6">Nous contacter</h3>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-warm-brown/70 mb-4">
                      Une question ? Une commande spéciale ? N'hésitez pas à nous contacter !
                    </p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button variant="golden" className="flex-1">
                      <Phone className="h-4 w-4 mr-2" />
                      Appeler
                    </Button>
                    <Button variant="warm" className="flex-1">
                      <Mail className="h-4 w-4 mr-2" />
                      Email
                    </Button>
                  </div>
                  
                  <div className="bg-cream/50 p-4 rounded-xl mt-6">
                    <p className="text-sm text-warm-brown/80">
                      <strong>Commandes spéciales :</strong> Merci de nous prévenir 48h à l'avance pour gâteaux d'anniversaire et pièces montées.
                    </p>
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