import { Search, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface HeaderProps {
  onSearch?: (query: string) => void;
}

export const Header = ({ onSearch }: HeaderProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.(searchQuery);
  };

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-hero rounded-full flex items-center justify-center">
              <MapPin className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">
                Annuaire La Loupe
              </h1>
              <p className="text-sm text-muted-foreground">
                Votre guide local du Perche
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="hidden md:flex items-center space-x-2 flex-1 max-w-md ml-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                type="text"
                placeholder="Rechercher un commerce..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-muted/50 border-border/60 focus:bg-background"
              />
            </div>
            <Button type="submit" size="sm" className="bg-primary hover:bg-primary/90">
              Rechercher
            </Button>
          </form>

          <nav className="hidden lg:flex items-center space-x-6">
            <a href="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Accueil
            </a>
            <a href="/categories" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Catégories
            </a>
            <a href="/businesses" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Tous les commerces
            </a>
          </nav>
        </div>

        {/* Mobile search */}
        <form onSubmit={handleSubmit} className="md:hidden mt-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              type="text"
              placeholder="Rechercher un commerce..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-muted/50 border-border/60"
            />
          </div>
        </form>
      </div>
    </header>
  );
};