import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-elegant">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-elegant-white">
            Prenez <span className="text-gradient-gold">Rendez-vous</span>
          </h2>
          <p className="text-xl text-elegant-white/80 max-w-2xl mx-auto">
            Contactez-nous pour réserver votre créneau ou pour toute information
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="bg-elegant-white/10 backdrop-blur-sm border-elegant-white/20 animate-scale-in">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-elegant-white">
                Informations de contact
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">📍</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-elegant-white mb-1">Adresse</h4>
                    <p className="text-elegant-white/80">
                      14 place de l'Hôtel de Ville<br />
                      28240 La Loupe
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">📞</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-elegant-white mb-1">Téléphone</h4>
                    <p className="text-elegant-white/80">02 37 81 XX XX</p>
                    <p className="text-sm text-elegant-white/60">Appelez pour prendre rendez-vous</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">🕒</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-elegant-white mb-1">Horaires d'ouverture</h4>
                    <div className="text-elegant-white/80 space-y-1">
                      <p>Mardi - Vendredi : 9h00 - 18h00</p>
                      <p>Samedi : 8h30 - 17h00</p>
                      <p className="text-sm text-elegant-white/60">Fermé dimanche et lundi</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-elegant-white/10 backdrop-blur-sm border-elegant-white/20 animate-scale-in">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-elegant-white">
                Réservation rapide
              </h3>
              
              <p className="text-elegant-white/80 mb-6">
                Pour prendre rendez-vous, appelez-nous directement ou passez nous voir au salon. 
                Notre équipe se fera un plaisir de vous accueillir et de vous conseiller.
              </p>
              
              <div className="space-y-4">
                <Button 
                  size="lg" 
                  className="w-full bg-gradient-gold hover:bg-gold-dark text-elegant-black font-semibold shadow-gold text-lg py-4"
                >
                  Appeler le salon
                </Button>
                
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full border-elegant-white text-elegant-white hover:bg-elegant-white hover:text-elegant-black text-lg py-4"
                >
                  Voir sur Google Maps
                </Button>
              </div>
              
              <div className="mt-8 p-6 bg-elegant-white/5 rounded-lg border border-elegant-white/10">
                <h4 className="font-semibold text-elegant-white mb-2">💡 Conseil</h4>
                <p className="text-elegant-white/70 text-sm">
                  Nous recommandons de prendre rendez-vous à l'avance, 
                  particulièrement pour les colorations et les services le samedi.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;