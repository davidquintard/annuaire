import { useState } from "react";
import { Header } from "@/components/layout/header";
import { HeroSection } from "@/components/sections/hero-section";
import { CategoryGrid } from "@/components/categories/category-grid";
import { BusinessCard } from "@/components/ui/business-card";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Clock, Phone } from "lucide-react";
import { categories, businesses } from "@/data/businesses";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBusinesses = businesses
    .filter(business =>
      business.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      business.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      business.category.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .slice(0, 6); // Show only first 6 on homepage

  const handleExploreClick = () => {
    document.getElementById('categories-section')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  const handleCategorySelect = (categoryId: string) => {
    // Navigate to categories page with selected category
    window.location.href = `/categories?selected=${categoryId}`;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onSearch={setSearchQuery} />
      
      <HeroSection onExploreClick={handleExploreClick} />
      
      {/* Categories Section */}
      <section id="categories-section" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Explorez par catégorie
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Trouvez facilement ce que vous cherchez grâce à notre organisation par secteurs d'activité
            </p>
          </div>
          
          <CategoryGrid 
            categories={categories} 
            onCategorySelect={handleCategorySelect}
          />
          
          <div className="text-center mt-8">
            <Button 
              variant="outline" 
              size="lg"
              className="shadow-card-shadow"
              onClick={() => window.location.href = '/categories'}
            >
              Voir toutes les catégories
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Businesses */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              {searchQuery ? "Résultats de recherche" : "Commerces à découvrir"}
            </h2>
            <p className="text-lg text-muted-foreground">
              {searchQuery 
                ? `${filteredBusinesses.length} résultat(s) pour "${searchQuery}"`
                : "Quelques-uns de nos commerces locaux recommandés"
              }
            </p>
          </div>
          
          {filteredBusinesses.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {filteredBusinesses.map((business) => (
                  <BusinessCard key={business.id} business={business} />
                ))}
              </div>
              
              <div className="text-center">
                <Button 
                  variant="outline"
                  size="lg" 
                  className="shadow-card-shadow"
                  onClick={() => window.location.href = '/businesses'}
                >
                  Voir tous les commerces
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </>
          ) : searchQuery ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                Aucun résultat trouvé pour "{searchQuery}"
              </p>
              <Button 
                variant="ghost" 
                onClick={() => setSearchQuery("")}
                className="mt-4"
              >
                Effacer la recherche
              </Button>
            </div>
          ) : null}
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-gradient-card border-t border-border/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="text-center lg:text-left">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto lg:mx-0 mb-4">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-foreground">
                Découverte locale
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Explorez les commerces authentiques de La Loupe et soutenez l'économie locale de notre belle commune du Perche.
              </p>
            </div>
            
            <div className="text-center lg:text-left">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto lg:mx-0 mb-4">
                <Clock className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-foreground">
                Toujours à jour
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Informations régulièrement mises à jour pour vous garantir des données fiables sur les horaires et services.
              </p>
            </div>
            
            <div className="text-center lg:text-left">
              <div className="w-12 h-12 bg-secondary/50 rounded-full flex items-center justify-center mx-auto lg:mx-0 mb-4">
                <Phone className="w-6 h-6 text-secondary-foreground" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-foreground">
                Contact direct
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Accédez facilement aux coordonnées et sites web des commerces pour prendre contact rapidement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <MapPin className="w-5 h-5 text-accent" />
            <span className="font-semibold">Annuaire La Loupe</span>
          </div>
          <p className="text-primary-foreground/80">
            Votre guide des commerces locaux dans le Perche • 28240 La Loupe
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
