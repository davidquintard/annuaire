import { Card, CardContent } from "@/components/ui/card";
import { Clock, Calendar } from "lucide-react";

const Schedule = () => {
  const scheduleData = [
    { day: "Lundi", hours: "8h00 - 19h30", isToday: false },
    { day: "Mardi", hours: "8h00 - 19h30", isToday: false },
    { day: "Mercredi", hours: "8h00 - 19h30", isToday: false },
    { day: "Jeudi", hours: "8h00 - 19h30", isToday: true },
    { day: "Vendredi", hours: "8h00 - 19h30", isToday: false },
    { day: "Samedi", hours: "8h00 - 19h30", isToday: false },
    { day: "Dimanche", hours: "8h30 - 12h30", isToday: false },
  ];

  return (
    <section id="horaires" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-6 text-coccinelle-black">
            Horaires d'ouverture
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Nous sommes ouverts 7 jours sur 7 pour vous servir et répondre à vos besoins quotidiens.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Schedule Table */}
            <Card className="shadow-elegant animate-fade-in-up">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-coccinelle-red/10 rounded-lg flex items-center justify-center">
                    <Calendar className="h-6 w-6 text-coccinelle-red" />
                  </div>
                  <h3 className="text-2xl font-bold">Planning hebdomadaire</h3>
                </div>
                
                <div className="space-y-3">
                  {scheduleData.map((item, index) => (
                    <div
                      key={index}
                      className={`flex justify-between items-center py-3 px-4 rounded-lg transition-smooth ${
                        item.isToday
                          ? 'bg-coccinelle-red text-white'
                          : 'bg-coccinelle-cream hover:bg-coccinelle-beige'
                      }`}
                    >
                      <span className="font-medium">{item.day}</span>
                      <span className={item.isToday ? 'text-white' : 'text-muted-foreground'}>
                        {item.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Additional Info */}
            <div className="space-y-6 animate-fade-in-up">
              <Card className="shadow-soft">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-coccinelle-red/10 rounded-lg flex items-center justify-center">
                      <Clock className="h-5 w-5 text-coccinelle-red" />
                    </div>
                    <h4 className="text-lg font-semibold">Ouvert actuellement</h4>
                  </div>
                  <p className="text-muted-foreground mb-3">
                    Nous sommes ouverts et à votre service !
                  </p>
                  <p className="text-sm text-coccinelle-red font-medium">
                    Fermeture aujourd'hui à 19h30
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold mb-4">Informations pratiques</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="text-xl">🎄</span>
                      <div>
                        <p className="font-medium">Horaires des fêtes</p>
                        <p className="text-sm text-muted-foreground">
                          Consultez nos horaires spéciaux pendant les périodes de fêtes
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-xl">📞</span>
                      <div>
                        <p className="font-medium">Urgences</p>
                        <p className="text-sm text-muted-foreground">
                          N'hésitez pas à nous appeler en cas de besoin urgent
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-gradient-hero text-white p-6 rounded-2xl">
                <h4 className="text-lg font-semibold mb-3">Besoin d'aide ?</h4>
                <p className="text-white/90 mb-4">
                  Notre équipe reste à votre disposition pour tout renseignement ou service particulier.
                </p>
                <p className="font-medium">📞 02 37 81 XX XX</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;