import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const hours = [
    { day: "Mardi", time: "9h00 - 18h00" },
    { day: "Mercredi", time: "9h00 - 18h00" },
    { day: "Jeudi", time: "9h00 - 18h00" },
    { day: "Vendredi", time: "9h00 - 19h00" },
    { day: "Samedi", time: "8h30 - 17h00" },
    { day: "Dimanche", time: "Fermé", closed: true },
    { day: "Lundi", time: "Fermé", closed: true }
  ];

  return (
    <section className="py-20 bg-gradient-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Nous <span className="text-luxury-gold">Contacter</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Prenez rendez-vous dès aujourd'hui pour une expérience coiffure unique à La Loupe.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <Card className="bg-card/80 backdrop-blur-sm border-luxury-gold/20 shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center text-luxury-gold">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Adresse
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                6 rue de la gare<br />
                28240 La Loupe<br />
                France
              </p>
              <Button variant="cream" className="mt-4 w-full">
                Voir sur Google Maps
              </Button>
            </CardContent>
          </Card>

          {/* Phone */}
          <Card className="bg-card/80 backdrop-blur-sm border-luxury-gold/20 shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center text-luxury-gold">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Téléphone
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-2">
                Pour prendre rendez-vous :
              </p>
              <p className="text-xl font-semibold text-foreground mb-4">
                02 37 81 XX XX
              </p>
              <Button variant="luxury" className="w-full">
                Appeler Maintenant
              </Button>
            </CardContent>
          </Card>

          {/* Horaires */}
          <Card className="bg-card/80 backdrop-blur-sm border-luxury-gold/20 shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center text-luxury-gold">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Horaires d'ouverture
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {hours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center py-1">
                    <span className="text-muted-foreground">{schedule.day}</span>
                    <span className={`font-medium ${schedule.closed ? 'text-destructive' : 'text-foreground'}`}>
                      {schedule.time}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-hero rounded-2xl p-8 shadow-luxury">
            <h3 className="text-3xl font-bold text-primary-foreground mb-4">
              Prêt pour une nouvelle coupe ?
            </h3>
            <p className="text-xl text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
              Réservez votre créneau et laissez-vous chouchouter par notre équipe de professionnels.
            </p>
            <Button variant="cream" size="lg" className="text-lg px-12 py-6">
              Prendre Rendez-vous
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;