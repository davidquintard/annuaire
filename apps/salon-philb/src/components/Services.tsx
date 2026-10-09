import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import service1 from "@/assets/service-1.jpg";
import service2 from "@/assets/service-2.jpg";
import service3 from "@/assets/service-3.jpg";

const services = [
  {
    title: "Coupe & Styling",
    description: "Coupe personnalisée selon votre style et morphologie. Techniques modernes et classiques.",
    image: service1,
    price: "À partir de 35€",
    features: ["Consultation personnalisée", "Shampoing inclus", "Coiffage final"]
  },
  {
    title: "Coloration",
    description: "Colorations naturelles et tendances, balayage, mèches et soins colorants.",
    image: service2,
    price: "À partir de 55€",
    features: ["Diagnostic capillaire", "Couleurs sur mesure", "Soin post-coloration"]
  },
  {
    title: "Soins Capillaires",
    description: "Traitements réparateurs, masques nourrissants et soins spécialisés.",
    image: service3,
    price: "À partir de 25€",
    features: ["Soins hydratants", "Traitements réparateurs", "Conseils personnalisés"]
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-gradient-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Nos <span className="text-luxury-gold">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez notre gamme complète de services de coiffure professionnels, 
            adaptés à tous vos besoins et envies.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2 bg-card/80 backdrop-blur-sm border-luxury-gold/20">
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-luxury-gold text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    {service.price}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl mb-3 text-foreground">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground mb-4">
                  {service.description}
                </CardDescription>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <svg className="w-4 h-4 text-luxury-gold mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button variant="elegant" className="w-full">
                  Réserver ce service
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;