import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Scissors, Shield, Clock } from "lucide-react";
import butcherWorkImage from "@/assets/butcher-work.jpg";

const About = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Contenu texte */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Tradition &
                <span className="text-butcher-red font-serif block">Savoir-faire</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Depuis 1958, notre famille perpétue l'art de la boucherie traditionnelle française. 
                Chaque coupe, chaque préparation est réalisée avec le respect des méthodes ancestrales 
                et la passion du métier bien fait.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-border/50 hover:shadow-soft transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 bg-butcher-red/10 rounded-lg flex items-center justify-center">
                      <Scissors className="h-5 w-5 text-butcher-red" />
                    </div>
                    <h3 className="font-semibold text-foreground">Découpe Artisanale</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Chaque pièce est découpée selon vos besoins avec précision et expertise.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50 hover:shadow-soft transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 bg-butcher-red/10 rounded-lg flex items-center justify-center">
                      <Shield className="h-5 w-5 text-butcher-red" />
                    </div>
                    <h3 className="font-semibold text-foreground">Qualité Garantie</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Sélection rigoureuse auprès d'éleveurs locaux pour une traçabilité parfaite.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50 hover:shadow-soft transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 bg-butcher-red/10 rounded-lg flex items-center justify-center">
                      <Clock className="h-5 w-5 text-butcher-red" />
                    </div>
                    <h3 className="font-semibold text-foreground">Fraîcheur Quotidienne</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Approvisionnement quotidien pour vous garantir la fraîcheur optimale.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50 hover:shadow-soft transition-all duration-300 md:col-span-1">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 bg-butcher-gold/20 rounded-lg flex items-center justify-center">
                      <span className="text-sm font-bold text-butcher-gold">3G</span>
                    </div>
                    <h3 className="font-semibold text-foreground">Famille Artisan</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Trois générations de passion transmise de père en fils.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Button variant="butcher" size="lg" className="w-fit">
              En savoir plus sur notre histoire
            </Button>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-warm">
              <img 
                src={butcherWorkImage} 
                alt="Notre maître boucher au travail"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-butcher-brown/30 to-transparent" />
            </div>
            
            {/* Badge décoratif */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-gold rounded-full flex items-center justify-center shadow-soft">
              <div className="text-center">
                <div className="text-xl font-bold text-butcher-brown">1958</div>
                <div className="text-xs text-butcher-brown/80">Depuis</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;