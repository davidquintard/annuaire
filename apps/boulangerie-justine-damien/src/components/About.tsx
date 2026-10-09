import justineDamienImage from "@/assets/justine-damien.jpg";

const About = () => {
  return (
    <section className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-elegant">
              <img 
                src={justineDamienImage} 
                alt="Justine et Damien, artisans boulangers" 
                className="w-full h-[600px] object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-warm-brown/20 to-transparent"></div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-golden/20 rounded-full animate-warm-glow"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-golden-light/30 rounded-full"></div>
          </div>
          
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-warm-brown mb-6">
                Notre Histoire
              </h2>
              <div className="w-20 h-1 bg-gradient-accent rounded-full mb-8"></div>
            </div>
            
            <div className="space-y-6 text-lg text-warm-brown/80">
              <p>
                Justine et Damien ont ouvert leur boulangerie au cœur de La Loupe avec une passion commune : 
                créer des produits authentiques et savoureux selon les traditions artisanales françaises.
              </p>
              
              <p>
                Formés dans les meilleures écoles de boulangerie, ils mettent leur expertise au service 
                de produits de qualité, préparés chaque jour avec des ingrédients soigneusement sélectionnés.
              </p>
              
              <p>
                De l'aube au crépuscule, ils pétrissent, façonnent et cuisent avec amour pour vous offrir 
                le meilleur du savoir-faire boulanger français.
              </p>
            </div>
            
            {/* Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
              <div className="text-center p-6 bg-cream/50 rounded-xl">
                <h3 className="font-serif text-xl font-semibold text-warm-brown mb-2">Tradition</h3>
                <p className="text-warm-brown/70">Recettes authentiques transmises de génération en génération</p>
              </div>
              <div className="text-center p-6 bg-cream/50 rounded-xl">
                <h3 className="font-serif text-xl font-semibold text-warm-brown mb-2">Qualité</h3>
                <p className="text-warm-brown/70">Ingrédients locaux et de première qualité</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;