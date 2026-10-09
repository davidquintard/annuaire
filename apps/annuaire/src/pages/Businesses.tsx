import { useState } from "react";
import { Header } from "@/components/layout/header";
import { BusinessCard } from "@/components/ui/business-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter, ArrowLeft } from "lucide-react";
import { businesses, categories } from "@/data/businesses";

const Businesses = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Filtrer les commerces selon la recherche et la catégorie
  const filteredBusinesses = businesses.filter(business => {
    const matchesSearch = 
      business.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      business.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      business.address.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory = selectedCategory === "all" || business.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const handleBackClick = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onSearch={setSearchQuery} />
      
      {/* Page Header */}
      <section className="py-12 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-6">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={handleBackClick}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour
            </Button>
          </div>
          
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Tous les commerces
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Découvrez l'ensemble des commerces, restaurants et services de La Loupe
            </p>
          </div>

          {/* Filtres et recherche */}
          <div className="flex flex-col md:flex-row gap-4 max-w-4xl mx-auto">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Rechercher un commerce..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full md:w-48">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Toutes les catégories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Toutes les catégories</SelectItem>
                {categories.map((category) => (
                  <SelectItem key={category.id} value={category.name}>
                    {category.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Liste des commerces */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Compteur de résultats */}
          <div className="mb-8">
            <p className="text-muted-foreground">
              {filteredBusinesses.length} commerce{filteredBusinesses.length > 1 ? 's' : ''} trouvé{filteredBusinesses.length > 1 ? 's' : ''}
              {selectedCategory !== "all" && ` dans la catégorie "${selectedCategory}"`}
              {searchQuery && ` pour "${searchQuery}"`}
            </p>
          </div>

          {/* Grille des commerces */}
          {filteredBusinesses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredBusinesses.map((business) => (
                <BusinessCard key={business.id} business={business} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Aucun commerce trouvé
              </h3>
              <p className="text-muted-foreground mb-6">
                {searchQuery 
                  ? `Aucun résultat pour "${searchQuery}"`
                  : "Essayez de modifier vos critères de recherche"
                }
              </p>
              <Button 
                variant="outline"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                }}
              >
                Effacer les filtres
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Search className="w-5 h-5 text-accent" />
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

export default Businesses;

