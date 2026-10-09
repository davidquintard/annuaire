import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Calendar, Coffee, AlertCircle } from "lucide-react";

const Horaires = () => {
  const horaires = [
    { jour: "Lundi", heures: "7h00 - 20h00", type: "normal" },
    { jour: "Mardi", heures: "7h00 - 20h00", type: "normal" },
    { jour: "Mercredi", heures: "7h00 - 20h00", type: "normal" },
    { jour: "Jeudi", heures: "7h00 - 20h00", type: "normal" },
    { jour: "Vendredi", heures: "7h00 - 20h00", type: "normal" },
    { jour: "Samedi", heures: "7h00 - 20h00", type: "normal" },
    { jour: "Dimanche", heures: "8h00 - 13h00", type: "reduit" }
  ];

  return (
    <section id="horaires" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Horaires d'Ouverture
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Le Commerce vous accueille tout au long de la semaine. 
            Retrouvez nos horaires d'ouverture détaillés.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Tableau des horaires */}
            <Card className="shadow-elegant">
              <CardHeader className="bg-gradient-hero text-primary-foreground">
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="h-6 w-6" />
                  <span>Planning Hebdomadaire</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y divide-border">
                  {horaires.map((horaire, index) => (
                    <div 
                      key={index}
                      className={`flex justify-between items-center p-4 hover:bg-secondary/50 transition-smooth ${
                        horaire.type === 'reduit' ? 'bg-warm-gold/10' : ''
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className={`font-medium ${
                          horaire.type === 'reduit' ? 'text-warm-gold' : 'text-foreground'
                        }`}>
                          {horaire.jour}
                        </span>
                      </div>
                      <span className={`font-semibold ${
                        horaire.type === 'reduit' ? 'text-warm-gold' : 'text-foreground'
                      }`}>
                        {horaire.heures}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Informations complémentaires */}
            <div className="space-y-6">
              <Card className="border-warm-gold/20 bg-warm-gold/5">
                <CardContent className="p-6">
                  <h3 className="flex items-center space-x-2 text-xl font-semibold text-foreground mb-4">
                    <Coffee className="h-5 w-5 text-warm-gold" />
                    <span>Service Petit-Déjeuner</span>
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Nos cafés et viennoiseries sont disponibles dès l'ouverture 
                    pour bien commencer votre journée.
                  </p>
                  <div className="text-sm font-medium text-burgundy">
                    ☕ Ouverture dès 7h du lundi au samedi
                  </div>
                </CardContent>
              </Card>

              <Card className="border-burgundy/20 bg-burgundy/5">
                <CardContent className="p-6">
                  <h3 className="flex items-center space-x-2 text-xl font-semibold text-foreground mb-4">
                    <AlertCircle className="h-5 w-5 text-burgundy" />
                    <span>Informations Importantes</span>
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start space-x-2">
                      <span className="text-burgundy mt-1">•</span>
                      <span>Horaires susceptibles de changer les jours fériés</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-burgundy mt-1">•</span>
                      <span>Service de bar disponible pendant toutes les heures d'ouverture</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-burgundy mt-1">•</span>
                      <span>Presse disponible dès l'ouverture</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gradient-accent">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Toujours ouvert pour vous !
                  </h3>
                  <p className="text-muted-foreground">
                    7 jours sur 7, Le Commerce vous accueille 
                    dans une ambiance chaleureuse et conviviale.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Horaires;