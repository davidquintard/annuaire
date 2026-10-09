import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, MapPin, Phone } from "lucide-react";

export interface Business {
  id: string;
  name: string;
  category: string;
  description: string;
  address: string;
  phone?: string;
  website?: string;
  image?: string;
}

interface BusinessCardProps {
  business: Business;
}

export const BusinessCard = ({ business }: BusinessCardProps) => {
  return (
    <Card className="group hover:shadow-hover-shadow transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-border/50">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-lg font-semibold text-foreground mb-1">
              {business.name}
            </CardTitle>
            <Badge 
              variant="secondary" 
              className="bg-primary/10 text-primary border-primary/20 mb-2"
            >
              {business.category}
            </Badge>
          </div>
          {business.image && (
            <div className="w-16 h-16 rounded-lg bg-muted flex-shrink-0 ml-3 overflow-hidden">
              <img 
                src={business.image} 
                alt={business.name}
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>
      </CardHeader>
      
      <CardContent className="pb-3">
        <CardDescription className="text-muted-foreground leading-relaxed mb-3">
          {business.description}
        </CardDescription>
        
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="w-4 h-4 text-primary" />
            <span>{business.address}</span>
          </div>
          {business.phone && (
            <div className="flex items-center gap-2 text-muted-foreground">
              <Phone className="w-4 h-4 text-primary" />
              <span>{business.phone}</span>
            </div>
          )}
        </div>
      </CardContent>
      
      <CardFooter className="pt-0">
        {business.website && (
          <Button 
            variant="outline" 
            size="sm" 
            className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
            asChild
          >
            <a href={business.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
              <ExternalLink className="w-4 h-4" />
              Visiter le site
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};