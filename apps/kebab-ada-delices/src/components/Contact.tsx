import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: "📍",
      title: "Adresse",
      details: ["3 rue du Château", "28240 La Loupe"],
      link: "https://maps.google.com/?q=3+rue+du+Château+28240+La+Loupe"
    },
    {
      icon: "📞",
      title: "Téléphone",
      details: ["02 37 XX XX XX"],
      link: "tel:0237XXXXXX"
    },
    {
      icon: "🕒",
      title: "Horaires",
      details: [
        "Lun - Sam: 11h30 - 14h30",
        "17h30 - 22h30",
        "Dimanche: 18h00 - 22h00"
      ]
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-cream to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nous <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Contacter</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Venez nous rendre visite ou contactez-nous pour toute question
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, index) => (
            <Card key={index} className="text-center border-0 shadow-warm hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <div className="text-4xl mb-2">{info.icon}</div>
                <CardTitle className="text-xl text-primary">{info.title}</CardTitle>
              </CardHeader>
              <CardContent>
                {info.details.map((detail, detailIndex) => (
                  <p key={detailIndex} className="text-muted-foreground leading-relaxed">
                    {detail}
                  </p>
                ))}
                {info.link && (
                  <Button 
                    variant="outline" 
                    className="mt-4"
                    onClick={() => window.open(info.link, '_blank')}
                  >
                    {info.title === "Adresse" ? "Voir sur Maps" : "Appeler"}
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Map placeholder */}
        <div className="bg-muted rounded-2xl h-64 flex items-center justify-center shadow-warm">
          <div className="text-center">
            <div className="text-4xl mb-2">🗺️</div>
            <p className="text-muted-foreground">Carte interactive</p>
            <Button 
              variant="default" 
              className="mt-4"
              onClick={() => window.open("https://maps.google.com/?q=3+rue+du+Château+28240+La+Loupe", '_blank')}
            >
              Voir l'itinéraire
            </Button>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 text-white shadow-elegant">
            <h3 className="text-2xl font-bold mb-4">Prêt à commander ?</h3>
            <p className="text-lg mb-6">
              Appelez-nous pour passer commande ou venez directement nous voir !
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="secondary" 
                size="lg"
                className="bg-white text-primary hover:bg-gray-100"
              >
                Appeler maintenant
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                Commander en ligne
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;