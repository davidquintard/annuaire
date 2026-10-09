import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Heart, Clock, Award } from "lucide-react";
import farmerImage from "@/assets/farmer-portrait.jpg";

const About = () => {
  const values = [
    {
      icon: Leaf,
      title: "Produits Locaux",
      description: "Nous privilégions les circuits courts et les producteurs locaux de la région."
    },
    {
      icon: Heart,
      title: "Qualité Garantie",
      description: "Sélection rigoureuse de nos produits pour vous offrir le meilleur."
    },
    {
      icon: Clock,
      title: "Fraîcheur Quotidienne",
      description: "Nos produits sont renouvelés chaque jour pour une fraîcheur optimale."
    },
    {
      icon: Award,
      title: "Savoir-faire",
      description: "Plus de 20 ans d'expérience dans la vente de fruits et légumes."
    }
  ];

  return (
    <section className="py-20 bg-gradient-earth">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            Notre Histoire
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Depuis des années, nous nous engageons à vous proposer les meilleurs produits du terroir, 
            dans le respect des traditions et de la nature.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <div className="relative animate-scale-in">
            <div className="rounded-2xl overflow-hidden shadow-warm">
              <img 
                src={farmerImage} 
                alt="Les Halles de La Loupe - Notre équipe" 
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent rounded-full opacity-30 animate-float" />
          </div>

          {/* Text Content */}
          <div className="animate-fade-in" style={{animationDelay: '0.2s'}}>
            <h3 className="text-3xl font-bold mb-6 text-primary">
              Une passion familiale
            </h3>
            <p className="text-lg mb-6 text-foreground leading-relaxed">
              Installés au cœur de La Loupe, nous sommes fiers de perpétuer une tradition 
              familiale de maraîchage et de commerce de proximité. Notre magasin vous accueille 
              dans une atmosphère chaleureuse et conviviale.
            </p>
            <p className="text-lg mb-8 text-foreground leading-relaxed">
              Chaque matin, nous sélectionnons avec soin nos fruits et légumes auprès de 
              producteurs locaux de confiance, garantissant fraîcheur et qualité à nos clients.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-card rounded-xl shadow-natural">
                <div className="text-3xl font-bold text-accent mb-1">20+</div>
                <div className="text-sm text-muted-foreground">Années d'expérience</div>
              </div>
              <div className="text-center p-4 bg-card rounded-xl shadow-natural">
                <div className="text-3xl font-bold text-accent mb-1">50+</div>
                <div className="text-sm text-muted-foreground">Variétés disponibles</div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="border-0 bg-card/80 backdrop-blur-sm hover:bg-card transition-all duration-300 animate-fade-in" style={{animationDelay: `${0.1 * index}s`}}>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-xl font-semibold mb-3 text-primary">
                  {value.title}
                </h4>
                <p className="text-muted-foreground">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;