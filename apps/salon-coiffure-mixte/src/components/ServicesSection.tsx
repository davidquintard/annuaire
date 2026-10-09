import { Card, CardContent } from "@/components/ui/card";
import salonServices from "@/assets/salon-services.jpg";

const services = [
  {
    title: "Coupe Femme",
    description: "Coupes modernes et classiques adaptées à votre style et morphologie",
    price: "À partir de 35€",
    icon: "✂️"
  },
  {
    title: "Coupe Homme",
    description: "Coupes tendance et intemporelles pour un look soigné",
    price: "À partir de 25€",
    icon: "✂️"
  },
  {
    title: "Coloration",
    description: "Colorations personnalisées avec des produits haut de gamme",
    price: "À partir de 50€",
    icon: "🎨"
  },
  {
    title: "Balayage",
    description: "Techniques de mèches et balayage pour sublimer vos cheveux",
    price: "À partir de 70€",
    icon: "✨"
  },
  {
    title: "Coiffage",
    description: "Mise en plis et coiffage pour événements spéciaux",
    price: "À partir de 30€",
    icon: "💫"
  },
  {
    title: "Soins",
    description: "Masques et soins réparateurs pour cheveux abîmés",
    price: "À partir de 20€",
    icon: "🌿"
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-elegant-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-elegant-black">Nos</span>{" "}
            <span className="text-gradient-gold">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Découvrez notre gamme complète de services pour sublimer votre beauté
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-soft transition-all duration-300 hover:-translate-y-2 border-none bg-card animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-gold transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>
                <div className="text-lg font-semibold text-gradient-gold">
                  {service.price}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h3 className="text-3xl font-bold mb-6 text-elegant-black">
              Une expérience sur mesure
            </h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Chez Coiffure Mixte, chaque client bénéficie d'un service personnalisé. 
              Nos stylistes expérimentés prennent le temps de vous conseiller et 
              de créer le look parfait qui vous correspond.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-gold rounded-full"></div>
                <span className="text-foreground">Consultation personnalisée</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-gold rounded-full"></div>
                <span className="text-foreground">Produits professionnels haut de gamme</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-gold rounded-full"></div>
                <span className="text-foreground">Équipe de stylistes qualifiés</span>
              </li>
            </ul>
          </div>
          
          <div className="animate-scale-in">
            <img 
              src={salonServices} 
              alt="Services du salon" 
              className="rounded-lg shadow-elegant w-full h-96 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;