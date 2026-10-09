import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Award, MapPin, Calendar } from "lucide-react";
import instructorImage from "@/assets/instructor-image.jpg";

const About = () => {
  const stats = [
    {
      icon: Calendar,
      number: "35+",
      label: "Années d'expérience",
    },
    {
      icon: Users,
      number: "2000+",
      label: "Élèves formés",
    },
    {
      icon: Award,
      number: "85%",
      label: "Taux de réussite",
    },
    {
      icon: MapPin,
      number: "1",
      label: "Agence à La Loupe",
    },
  ];

  return (
    <section id="apropos" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <Badge variant="outline" className="mb-4">
              À propos de nous
            </Badge>
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Plus de 35 ans au service de{" "}
              <span className="bg-hero-gradient bg-clip-text text-transparent">
                votre réussite
              </span>
            </h2>
            
            <div className="space-y-4 text-muted-foreground mb-8">
              <p className="text-lg leading-relaxed">
                Créée en 1985, l'Auto-École Loupéenne s'est imposée comme une référence 
                dans la formation à la conduite à La Loupe et ses environs. Notre équipe 
                d'instructeurs diplômés met tout en œuvre pour vous accompagner vers la réussite.
              </p>
              
              <p className="text-lg leading-relaxed">
                Nous privilégions une approche personnalisée et bienveillante, adaptée au 
                rythme de chacun. Avec des véhicules récents et sécurisés, nous vous offrons 
                les meilleures conditions d'apprentissage.
              </p>
              
              <p className="text-lg leading-relaxed">
                Notre philosophie : votre sécurité et votre confiance au volant sont notre priorité. 
                C'est pourquoi nous investissons constamment dans la formation de nos équipes 
                et le renouvellement de notre parc automobile.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Découvrir nos tarifs
              </Button>
              <Button size="lg" variant="outline">
                Nous contacter
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 mx-auto mb-2 rounded-xl bg-primary/10 flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-foreground">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-strong">
              <img 
                src={instructorImage} 
                alt="Instructeur Auto-École Loupéenne" 
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent" />
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-surface-elevated border border-border rounded-xl p-6 shadow-strong">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Award className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <div className="text-lg font-bold text-foreground">Certification</div>
                  <div className="text-sm text-muted-foreground">École agréée préfecture</div>
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