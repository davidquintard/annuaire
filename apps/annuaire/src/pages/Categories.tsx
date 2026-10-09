import { useState } from "react";
import { Header } from "@/components/layout/header";
import { CategoryGrid } from "@/components/categories/category-grid";
import { BusinessCard } from "@/components/ui/business-card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { categories, getBusinessesByCategory } from "@/data/businesses";

export const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const selectedCategoryData = selectedCategory 
    ? categories.find(cat => cat.id === selectedCategory)
    : null;

  const businesses = selectedCategory 
    ? getBusinessesByCategory(selectedCategory).filter(business =>
        business.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        business.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setSearchQuery("");
  };

  const handleBackToCategories = () => {
    setSelectedCategory(null);
    setSearchQuery("");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onSearch={setSearchQuery} />
      
      <main className="container mx-auto px-4 py-8">
        {!selectedCategory ? (
          <>
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-foreground mb-4">
                Catégories de commerces
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Explorez les différents types de commerces et services disponibles à La Loupe
              </p>
            </div>
            
            <CategoryGrid 
              categories={categories}
              onCategorySelect={handleCategorySelect}
            />
          </>
        ) : (
          <>
            <div className="flex items-center gap-4 mb-8">
              <Button
                variant="ghost"
                onClick={handleBackToCategories}
                className="flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Retour aux catégories
              </Button>
            </div>
            
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-foreground mb-2">
                {selectedCategoryData?.name}
              </h1>
              <p className="text-muted-foreground">
                {selectedCategoryData?.description}
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                {businesses.length} {businesses.length === 1 ? 'établissement trouvé' : 'établissements trouvés'}
                {searchQuery && ` pour "${searchQuery}"`}
              </p>
            </div>
            
            {businesses.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {businesses.map((business) => (
                  <BusinessCard 
                    key={business.id} 
                    business={business} 
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">
                  {searchQuery 
                    ? `Aucun établissement trouvé pour "${searchQuery}"` 
                    : "Aucun établissement dans cette catégorie pour le moment"
                  }
                </p>
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
};