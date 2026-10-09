import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, ShoppingCart } from "lucide-react";
import teamImage from "@/assets/team.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-6 text-coccinelle-black">
            À propos de Coccinelle
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Depuis plus de 15 ans, la supérette Coccinelle est le commerce de proximité 
            incontournable de La Loupe, alliant qualité, fraîcheur et service personnalisé.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="animate-fade-in-up">
            <img
              src={teamImage}
              alt="L'équipe de la supérette Coccinelle"
              className="w-full h-auto rounded-2xl shadow-elegant"
            />
          </div>

          {/* Content */}
          <div className="animate-fade-in-up">
            <h3 className="text-2xl font-bold mb-6 text-coccinelle-red">
              Notre engagement quotidien
            </h3>
            <p className="text-lg mb-8 text-muted-foreground leading-relaxed">
              Située au cœur de La Loupe, place de l'hôtel de ville, notre supérette 
              s'engage à vous offrir des produits frais et de qualité, dans une 
              ambiance chaleureuse et conviviale.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-coccinelle-red/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Heart className="h-6 w-6 text-coccinelle-red" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Passion du service</h4>
                  <p className="text-muted-foreground">
                    Notre équipe vous accueille avec le sourire et vous conseille au quotidien.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-coccinelle-red/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="h-6 w-6 text-coccinelle-red" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Proximité et convivialité</h4>
                  <p className="text-muted-foreground">
                    Un commerce de quartier qui connaît ses clients et leurs habitudes.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-coccinelle-red/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <ShoppingCart className="h-6 w-6 text-coccinelle-red" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Produits sélectionnés</h4>
                  <p className="text-muted-foreground">
                    Une gamme complète de produits frais et d'épicerie fine pour tous vos besoins.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;