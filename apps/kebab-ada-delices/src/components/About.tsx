import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const features = [
    {
      icon: "🥩",
      title: "Viandes Fraîches",
      description: "Sélection quotidienne des meilleures viandes pour garantir qualité et saveur"
    },
    {
      icon: "👨‍🍳",
      title: "Savoir-faire Traditionnel",
      description: "Techniques authentiques transmises de génération en génération"
    },
    {
      icon: "🌿",
      title: "Ingrédients Locaux",
      description: "Légumes frais et épices sélectionnées chez nos producteurs de confiance"
    },
    {
      icon: "⚡",
      title: "Service Rapide",
      description: "Préparation express sans compromis sur la qualité et le goût"
    }
  ];

  return (
    <section id="a-propos" className="py-20 bg-gradient-to-b from-background to-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            À propos d'<span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Ada Délices</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Depuis notre ouverture à La Loupe, nous nous efforçons de vous offrir une expérience culinaire 
            authentique avec des kebabs préparés selon les traditions orientales.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold mb-6 text-foreground">
              Notre Histoire
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Ada Délices est né de la passion pour la cuisine orientale authentique. 
                Situé au cœur de La Loupe, notre restaurant familial perpétue les traditions 
                culinaires transmises à travers les générations.
              </p>
              <p>
                Chaque jour, nous préparons nos viandes avec soin, marinons nos épices selon 
                des recettes traditionnelles, et sélectionnons les meilleurs légumes frais 
                pour vous offrir une expérience gustative inoubliable.
              </p>
              <p>
                Notre équipe met un point d'honneur à maintenir les standards de qualité les 
                plus élevés tout en préservant l'authenticité des saveurs orientales.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="text-center border-0 shadow-warm hover:shadow-elegant transition-all duration-300 hover:transform hover:scale-105">
                <CardContent className="p-6">
                  <div className="text-4xl mb-3">{feature.icon}</div>
                  <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 text-center text-white shadow-elegant">
          <h3 className="text-2xl font-bold mb-4">Notre Engagement</h3>
          <p className="text-lg leading-relaxed max-w-2xl mx-auto">
            Nous nous engageons à vous servir des plats de qualité, préparés avec passion 
            dans le respect des traditions culinaires orientales, pour faire de chaque visite 
            un moment de plaisir gustatif.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;