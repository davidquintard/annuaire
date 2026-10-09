const AboutSection = () => {
  return (
    <section id="a-propos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="text-elegant-black">À propos de</span>{" "}
            <span className="text-gradient-gold">Coiffure Mixte</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
            <div className="text-left">
              <h3 className="text-2xl font-semibold mb-4 text-elegant-black">
                Notre histoire
              </h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Depuis notre ouverture au cœur de La Loupe, Coiffure Mixte s'est imposé 
                comme le salon de référence pour tous ceux qui recherchent excellence 
                et créativité.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Notre équipe passionnée met son savoir-faire au service de votre beauté, 
                en alliant techniques traditionnelles et tendances contemporaines.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center">
                  <span className="text-2xl">👥</span>
                </div>
                <div>
                  <h4 className="font-semibold text-elegant-black">Équipe experte</h4>
                  <p className="text-muted-foreground">Stylistes diplômés et formés aux dernières techniques</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center">
                  <span className="text-2xl">⭐</span>
                </div>
                <div>
                  <h4 className="font-semibold text-elegant-black">Excellence</h4>
                  <p className="text-muted-foreground">Un service de qualité supérieure depuis des années</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center">
                  <span className="text-2xl">🎨</span>
                </div>
                <div>
                  <h4 className="font-semibold text-elegant-black">Créativité</h4>
                  <p className="text-muted-foreground">Des looks personnalisés qui révèlent votre personnalité</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-elegant-cream rounded-lg p-8 shadow-soft">
            <h3 className="text-2xl font-semibold mb-4 text-elegant-black">
              Notre philosophie
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              "Chez Coiffure Mixte, nous croyons que chaque personne est unique. 
              Notre mission est de révéler votre beauté naturelle à travers des coupes, 
              des colorations et des coiffages qui vous ressemblent vraiment. 
              Venez découvrir un salon où l'art de la coiffure rencontre la passion du métier."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;