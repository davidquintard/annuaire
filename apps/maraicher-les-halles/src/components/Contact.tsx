import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock, Mail } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Téléphone",
      content: "02 37 81 27 42",
      action: "Appelez-nous",
      href: "tel:0237812742"
    },
    {
      icon: MapPin,
      title: "Adresse",
      content: "6 rue de Chateaudun\n28240 La Loupe",
      action: "Itinéraire",
      href: "https://maps.google.com/?q=6+rue+de+Chateaudun+28240+La+Loupe"
    },
    {
      icon: Mail,
      title: "Email",
      content: "contact@hallesloupe.fr",
      action: "Nous écrire",
      href: "mailto:contact@hallesloupe.fr"
    }
  ];

  const openingHours = [
    { day: "Lundi", hours: "Fermé" },
    { day: "Mardi - Samedi", hours: "8h00 - 12h30 / 15h00 - 19h00" },
    { day: "Dimanche", hours: "8h00 - 12h30" }
  ];

  return (
    <section className="py-20 bg-gradient-earth">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            Nous Contacter
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Venez nous rendre visite dans notre magasin ou contactez-nous pour toute information. 
            Nous serons ravis de vous accueillir !
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold mb-8 text-primary animate-fade-in">
              Informations Pratiques
            </h3>
            
            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="border-0 bg-card hover:shadow-natural transition-all duration-300 animate-fade-in" style={{animationDelay: `${0.1 * index}s`}}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg mb-2 text-primary">
                          {info.title}
                        </h4>
                        <p className="text-muted-foreground mb-3 whitespace-pre-line">
                          {info.content}
                        </p>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="group"
                          onClick={() => window.open(info.href, '_blank')}
                        >
                          {info.action}
                          <info.icon className="w-4 h-4 ml-2 group-hover:animate-bounce" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Opening Hours */}
          <div className="animate-fade-in" style={{animationDelay: '0.3s'}}>
            <h3 className="text-3xl font-bold mb-8 text-primary">
              Horaires d'Ouverture
            </h3>
            
            <Card className="border-0 bg-card shadow-natural">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="w-6 h-6 text-primary" />
                  <span className="text-xl font-semibold text-primary">Nos horaires</span>
                </div>
                
                <div className="space-y-4">
                  {openingHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-3 border-b border-border last:border-0">
                      <span className="font-medium text-foreground">{schedule.day}</span>
                      <span className={`font-semibold ${schedule.hours === 'Fermé' ? 'text-destructive' : 'text-primary'}`}>
                        {schedule.hours}
                      </span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-accent/10 rounded-lg">
                  <p className="text-sm text-muted-foreground text-center">
                    <strong>Note :</strong> Horaires susceptibles de varier pendant les périodes de fêtes
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* CTA */}
            <div className="mt-8 text-center">
              <Card className="border-0 bg-gradient-nature">
                <CardContent className="p-8">
                  <h4 className="text-2xl font-bold mb-4 text-primary-foreground">
                    Visitez-nous !
                  </h4>
                  <p className="text-primary-foreground/90 mb-6">
                    Découvrez notre sélection de produits frais et profitez de nos conseils personnalisés.
                  </p>
                  <Button variant="secondary" size="lg" className="group">
                    <MapPin className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                    Voir sur la carte
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;