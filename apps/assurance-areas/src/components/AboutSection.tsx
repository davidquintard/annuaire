import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, MapPin, Clock, Phone } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="apropos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-6">
              AREAS, votre partenaire assurance à La Loupe
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Implantée au cœur de La Loupe depuis 2008, l'agence AREAS s'est forgé une solide 
              réputation grâce à son approche personnalisée et sa connaissance approfondie du marché 
              de l'assurance.
            </p>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Notre équipe d'experts vous accompagne dans tous vos projets, en vous proposant 
              des solutions adaptées à votre situation et votre budget. Proximité, réactivité 
              et professionnalisme sont nos maîtres mots.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Conseil personnalisé et gratuit",
                "Gestion de sinistres simplifiée",
                "Réseau de partenaires de confiance",
                "Disponibilité et réactivité"
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>

            <Button size="lg" className="bg-primary hover:bg-primary-dark">
              Prendre rendez-vous
            </Button>
          </div>

          {/* Info Cards */}
          <div className="space-y-6">
            <Card className="shadow-soft border-0 gradient-card">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Notre adresse</h3>
                    <p className="text-muted-foreground">
                      11 rue du Château<br />
                      28240 La Loupe
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-soft border-0 gradient-card">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Horaires d'ouverture</h3>
                    <div className="text-muted-foreground space-y-1">
                      <p>Lun - Ven: 9h00 - 12h30 / 14h00 - 18h00</p>
                      <p>Samedi: 9h00 - 12h00</p>
                      <p>Dimanche: Fermé</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-soft border-0 gradient-card">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Contact</h3>
                    <div className="text-muted-foreground space-y-1">
                      <p>Tél: 02 37 81 XX XX</p>
                      <p>Email: contact@areas-assurance.fr</p>
                    </div>
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

export default AboutSection;