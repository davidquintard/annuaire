import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Utensils, 
  ShoppingBag, 
  Wrench, 
  Briefcase, 
  Heart, 
  GraduationCap,
  Car,
  Home
} from "lucide-react";

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  count: number;
  color: string;
}

const iconMap = {
  restaurant: Utensils,
  commerce: ShoppingBag,
  service: Wrench,
  professional: Briefcase,
  health: Heart,
  education: GraduationCap,
  automotive: Car,
  real_estate: Home,
};

interface CategoryGridProps {
  categories: Category[];
  onCategorySelect: (categoryId: string) => void;
}

export const CategoryGrid = ({ categories, onCategorySelect }: CategoryGridProps) => {
  return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {categories.map((category) => {
        const IconComponent = iconMap[category.icon as keyof typeof iconMap] || Briefcase;
        
        return (
          <Card
            key={category.id}
            className="group cursor-pointer hover:shadow-hover-shadow transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-border/50"
            onClick={() => onCategorySelect(category.id)}
          >
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <IconComponent className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="font-semibold text-lg mb-2 text-foreground">
                {category.name}
              </h3>
              
              <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
                {category.description}
              </p>
              
              <Badge 
                variant="secondary"
                className="bg-primary/10 text-primary border-primary/20"
              >
                {category.count} {category.count === 1 ? 'établissement' : 'établissements'}
              </Badge>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};