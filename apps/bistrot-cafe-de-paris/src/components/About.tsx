import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-coffee mb-6">
            Notre Histoire
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Au cœur de La Loupe, le Café de Paris perpétue la tradition du bistrot français 
            avec passion et authenticité depuis des années.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card className="border-none shadow-warm bg-card/50">
              <CardContent className="p-6">
                <h3 className="font-playfair text-2xl font-semibold text-coffee mb-3">
                  Tradition & Qualité
                </h3>
                <p className="text-muted-foreground">
                  Nos produits sont sélectionnés avec soin auprès de producteurs locaux. 
                  Café torréfié artisanalement, pâtisseries fraîches préparées chaque matin.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-warm bg-card/50">
              <CardContent className="p-6">
                <h3 className="font-playfair text-2xl font-semibold text-coffee mb-3">
                  Ambiance Chaleureuse  
                </h3>
                <p className="text-muted-foreground">
                  Que ce soit pour un café matinal, un déjeuner entre amis ou un moment de détente, 
                  notre équipe vous accueille dans une atmosphère conviviale et authentique.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4">
            <div className="bg-coffee-light/10 rounded-lg p-8 text-center">
              <h4 className="font-playfair text-3xl font-bold text-coffee mb-2">
                25+
              </h4>
              <p className="text-muted-foreground">Années d'expérience</p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gold/10 rounded-lg p-6 text-center">
                <h4 className="font-playfair text-2xl font-bold text-coffee mb-1">
                  100%
                </h4>
                <p className="text-sm text-muted-foreground">Produits frais</p>
              </div>
              <div className="bg-accent/20 rounded-lg p-6 text-center">
                <h4 className="font-playfair text-2xl font-bold text-coffee mb-1">
                  Local
                </h4>
                <p className="text-sm text-muted-foreground">& artisanal</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;