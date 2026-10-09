import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, Heart, Sparkles } from "lucide-react";
import heroBouquet from "@/assets/hero-bouquet.jpg";
import weddingBouquet from "@/assets/wedding-bouquet.jpg";
import seasonalArrangement from "@/assets/seasonal-arrangement.jpg";

const Gallery = () => {
  const galleryItems = [
    {
      image: heroBouquet,
      title: "Bouquet de Saison Premium",
      category: "Composition florale",
      description: "Arrangement saisonnier avec roses, pivoines et eucalyptus"
    },
    {
      image: weddingBouquet,
      title: "Bouquet de Mariée Romantique", 
      category: "Mariage",
      description: "Roses blanches et gypsophile pour un mariage de rêve"
    },
    {
      image: seasonalArrangement,
      title: "Centre de Table Automnal",
      category: "Décoration",
      description: "Composition colorée avec tournesols et fleurs sauvages"
    },
    {
      image: heroBouquet,
      title: "Bouquet Zodiaque Verseau",
      category: "Collection Zodiaque", 
      description: "Création inspirée par les énergies du Verseau"
    },
    {
      image: weddingBouquet,
      title: "Décoration Corporate",
      category: "Événementiel",
      description: "Arrangement élégant pour réception d'entreprise"
    },
    {
      image: seasonalArrangement,
      title: "Atelier Créatif",
      category: "Formation",
      description: "Résultat d'un atelier d'art floral avec nos clients"
    }
  ];

  return (
    <section id="galerie" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-accent mb-4">
            <Sparkles className="w-5 h-5" />
            <span className="text-sm font-medium uppercase tracking-wider">Galerie</span>
            <Sparkles className="w-5 h-5" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-floral bg-clip-text text-transparent">
              Nos Créations
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez quelques-unes de nos plus belles réalisations, chaque création étant unique 
            et personnalisée selon vos goûts et votre signe astrologique.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <Card key={index} className="group overflow-hidden border-border/50 hover:shadow-elegant transition-smooth">
              <div className="relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-smooth"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-smooth"></div>
                
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-smooth">
                  <span className="inline-block bg-accent/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium mb-2">
                    {item.category}
                  </span>
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                </div>

                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-smooth">
                  <Button variant="secondary" size="icon" className="bg-white/20 backdrop-blur-sm border-white/20 hover:bg-white/30">
                    <Eye className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-accent font-medium">{item.category}</span>
                    <Heart className="w-4 h-4 text-muted-foreground hover:text-red-500 cursor-pointer transition-colors" />
                  </div>
                  <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Vous aimez nos créations ? Contactez-nous pour un projet personnalisé !
          </p>
          <Button variant="zodiac" size="lg" className="px-12 py-6 text-lg">
            <Sparkles className="w-5 h-5 mr-2" />
            Voir plus de créations
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;