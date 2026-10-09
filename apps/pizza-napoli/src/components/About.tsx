import chefImage from "@/assets/chef-pizza.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Notre Histoire
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Fondée en 2015 par la famille Rossi, <strong className="text-italian-red">Pizza Napoli</strong> 
                vous transporte directement dans les ruelles authentiques de Naples.
              </p>
              <p>
                Notre chef, formé dans les meilleures pizzerias de Campanie, maîtrise l'art 
                ancestral de la pizza napolitaine. Chaque pizza est façonnée à la main et cuite 
                dans notre four à bois traditionnel importé directement d'Italie.
              </p>
              <p>
                Nous sélectionnons nos ingrédients avec le plus grand soin : 
                mozzarella di Bufala DOP, tomates San Marzano, huile d'olive extra vierge, 
                et basilic frais pour vous offrir un goût authentique et inoubliable.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              <div className="p-4">
                <div className="text-2xl font-bold text-italian-red">2015</div>
                <div className="text-sm text-muted-foreground">Année de création</div>
              </div>
              <div className="p-4">
                <div className="text-2xl font-bold text-italian-red">500°C</div>
                <div className="text-sm text-muted-foreground">Four traditionnel</div>
              </div>
              <div className="p-4">
                <div className="text-2xl font-bold text-italian-red">90sec</div>
                <div className="text-sm text-muted-foreground">Cuisson rapide</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg shadow-xl">
              <img 
                src={chefImage} 
                alt="Chef pizzaiolo préparant une pizza" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-italian-red/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-italian-green/10 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;