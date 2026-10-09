import { Card, CardContent } from "@/components/ui/card";
import { Clock, MapPin, Phone, Award } from "lucide-react";

const About = () => {
  const stats = [
    { number: "15", label: "Années d'expérience", icon: <Award className="w-6 h-6" /> },
    { number: "500+", label: "Clients satisfaits", icon: <Clock className="w-6 h-6" /> },
    { number: "100%", label: "Satisfaction garantie", icon: <Award className="w-6 h-6" /> },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-gradient-hero text-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              L'Art de la <span className="text-red">Coiffure</span>
            </h2>
            
            <p className="text-xl mb-6 text-gray-300 leading-relaxed">
              Depuis plus de 15 ans, Samsoum Coiff perpétue la tradition barbière française 
              en alliant techniques ancestrales et tendances contemporaines.
            </p>
            
            <p className="text-lg mb-8 text-gray-400 leading-relaxed">
              Notre salon, situé au cœur de La Loupe, vous accueille dans un cadre élégant 
              et chaleureux où chaque détail a été pensé pour votre confort et votre satisfaction.
            </p>
            
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-red mb-2 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-red mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-6">
            <Card className="bg-white/10 border-red/20 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <MapPin className="w-6 h-6 text-red mr-3" />
                  <h3 className="text-xl font-semibold">Adresse</h3>
                </div>
                <p className="text-gray-300">
                  3 rue Paul Éluard<br />
                  28240 La Loupe
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 border-red/20 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Clock className="w-6 h-6 text-red mr-3" />
                  <h3 className="text-xl font-semibold">Horaires</h3>
                </div>
                <div className="space-y-2 text-gray-300">
                  <div className="flex justify-between">
                    <span>Lundi - Vendredi</span>
                    <span>9h - 19h</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Samedi</span>
                    <span>9h - 18h</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Dimanche</span>
                    <span>Fermé</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 border-red/20 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Phone className="w-6 h-6 text-red mr-3" />
                  <h3 className="text-xl font-semibold">Contact</h3>
                </div>
                <p className="text-gray-300">
                  <a href="tel:0237810000" className="hover:text-red transition-colors">
                    02 37 81 00 00
                  </a>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;