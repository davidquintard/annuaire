import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              À propos de <span className="text-luxury-gold">Phil B</span>
            </h2>
            <div className="prose prose-lg text-muted-foreground space-y-6">
              <p>
                Depuis plus de 15 ans, Phil B vous accueille dans son salon de coiffure 
                situé au cœur de La Loupe. Passionné par son métier, Phil se forme 
                continuellement aux dernières tendances et techniques pour vous offrir 
                des prestations d'excellence.
              </p>
              <p>
                Dans une ambiance chaleureuse et conviviale, notre équipe vous conseille 
                et vous accompagne pour révéler votre beauté naturelle. Chaque coupe, 
                chaque couleur est pensée selon votre personnalité et votre style de vie.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-3 gap-6">
              <Card className="text-center p-4 bg-gradient-card border-luxury-gold/20">
                <CardContent className="p-0">
                  <div className="text-2xl font-bold text-luxury-gold">15+</div>
                  <div className="text-sm text-muted-foreground">Années d'expérience</div>
                </CardContent>
              </Card>
              <Card className="text-center p-4 bg-gradient-card border-luxury-gold/20">
                <CardContent className="p-0">
                  <div className="text-2xl font-bold text-luxury-gold">500+</div>
                  <div className="text-sm text-muted-foreground">Clients satisfaits</div>
                </CardContent>
              </Card>
              <Card className="text-center p-4 bg-gradient-card border-luxury-gold/20">
                <CardContent className="p-0">
                  <div className="text-2xl font-bold text-luxury-gold">100%</div>
                  <div className="text-sm text-muted-foreground">Passion du métier</div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative bg-gradient-hero rounded-2xl p-8 shadow-luxury">
              <div className="bg-background/95 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-2xl font-bold text-foreground mb-4">Notre Philosophie</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-luxury-gold mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-muted-foreground">Écoute et conseil personnalisé</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-luxury-gold mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-muted-foreground">Techniques modernes et respect du cheveu</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-luxury-gold mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-muted-foreground">Produits de qualité professionnelle</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-luxury-gold mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-muted-foreground">Ambiance détendue et professionnelle</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;