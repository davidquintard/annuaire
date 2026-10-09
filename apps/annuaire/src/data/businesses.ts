import { Business } from "@/components/ui/business-card";
import { Category } from "@/components/categories/category-grid";

export const categories: Category[] = [
  {
    id: "restaurants",
    name: "Restaurants & Cafés",
    description: "Découvrez la gastronomie locale de La Loupe",
    icon: "restaurant",
    count: 4,
    color: "heritage-gold"
  },
  {
    id: "commerces",
    name: "Commerces",
    description: "Boutiques et magasins de proximité",
    icon: "commerce",
    count: 5,
    color: "accent"
  },
  {
    id: "services",
    name: "Services",
    description: "Artisans et services techniques",
    icon: "service",
    count: 3,
    color: "nature-green"
  },
  {
    id: "professionnels",
    name: "Professionnels",
    description: "Cabinets et services professionnels",
    icon: "professional",
    count: 1,
    color: "heritage-brown"
  },
  {
    id: "sante",
    name: "Santé & Bien-être",
    description: "Professionnels de santé et bien-être",
    icon: "health",
    count: 0,
    color: "sky-blue"
  },
  {
    id: "education",
    name: "Éducation",
    description: "Écoles et formations",
    icon: "education",
    count: 1,
    color: "primary"
  },
  {
    id: "automobile",
    name: "Automobile",
    description: "Garages et services auto",
    icon: "automotive",
    count: 0,
    color: "muted-foreground"
  },
  {
    id: "immobilier",
    name: "Immobilier",
    description: "Agences immobilières",
    icon: "real_estate",
    count: 0,
    color: "secondary"
  }
];

export const businesses: Business[] = [
  // Restaurants & Cafés
  {
    id: "bistrot-cafe-de-paris",
    name: "Bistrot Café de Paris",
    category: "Restaurants & Cafés",
    description: "Bistrot traditionnel au cœur de La Loupe, proposant une cuisine française authentique et des spécialités locales.",
    address: "Place du Marché, 28240 La Loupe",
    phone: "02 37 81 15 20",
    website: "https://cafe-de-paris.laloupe.net"
  },
  {
    id: "bistrot-lecommerce",
    name: "Le Commerce",
    category: "Restaurants & Cafés",
    description: "Restaurant et bar à vin proposant une cuisine moderne et des produits du terroir percheron.",
    address: "Rue du Commerce, 28240 La Loupe",
    phone: "02 37 81 12 34",
    website: "https://le-commerce.laloupe.net"
  },
  {
    id: "pizza-napoli",
    name: "Pizza Napoli",
    category: "Restaurants & Cafés",
    description: "Pizzeria italienne traditionnelle, pizzas au feu de bois et spécialités napolitaines authentiques.",
    address: "Avenue de Châteaudun, 28240 La Loupe",
    phone: "02 37 81 18 75",
    website: "https://di-napoli.laloupe.net"
  },
  {
    id: "kebab-ada-delices",
    name: "Ada Délices",
    category: "Restaurants & Cafés",
    description: "Kebab et restauration rapide, spécialités orientales et grillades dans une ambiance conviviale.",
    address: "Rue de la République, 28240 La Loupe",
    phone: "02 37 81 14 56",
    website: "https://ada-delices.laloupe.net"
  },

  // Commerces alimentaires
  {
    id: "boucherie-laloupe",
    name: "Boucherie La Loupe",
    category: "Commerces",
    description: "Boucherie artisanale proposant viandes fraîches, charcuterie et spécialités locales de qualité.",
    address: "Rue du Commerce, 28240 La Loupe",
    phone: "02 37 81 11 22",
    website: "https://boucherie-vaze.laloupe.net"
  },
  {
    id: "boulangerie-justine-damien",
    name: "Boulangerie Justine & Damien",
    category: "Commerces",
    description: "Boulangerie-pâtisserie artisanale, pains traditionnels, viennoiseries et pâtisseries maison.",
    address: "Place de l'Église, 28240 La Loupe",
    phone: "02 37 81 16 89",
    website: "https://boulangerie.laloupe.net"
  },
  {
    id: "superette-coccinelle",
    name: "Superette Coccinelle",
    category: "Commerces",
    description: "Épicerie de proximité proposant produits frais, conserves et produits du quotidien.",
    address: "Rue Saint-Hilaire, 28240 La Loupe",
    phone: "02 37 81 13 45",
    website: "https://coccinelle.laloupe.net"
  },
  {
    id: "maraicher-les-halles",
    name: "Maraîcher Les Halles",
    category: "Commerces",
    description: "Primeur et maraîcher proposant fruits et légumes frais, produits locaux et de saison.",
    address: "Place des Halles, 28240 La Loupe",
    phone: "02 37 81 17 92",
    website: "https://les-halles.laloupe.net"
  },
  {
    id: "fleuriste-aux-fleurs-zodiaque",
    name: "Aux Fleurs du Zodiaque",
    category: "Commerces",
    description: "Fleuriste créatif proposant bouquets, compositions florales et décoration pour tous vos événements.",
    address: "Avenue de la Gare, 28240 La Loupe",
    phone: "02 37 81 19 03",
    website: "https://fleurs-du-zodiaque.laloupe.net"
  },

  // Services de beauté et bien-être
  {
    id: "barbier-samsoum",
    name: "Barbier Samsoum",
    category: "Services",
    description: "Salon de coiffure pour hommes, coupes traditionnelles, rasage et soins de la barbe.",
    address: "Rue de la Mairie, 28240 La Loupe",
    phone: "02 37 81 20 14",
    website: "https://samsoum-coiff.laloupe.net"
  },
  {
    id: "salon-coiffure-mixte",
    name: "Salon Coiffure Mixte",
    category: "Services",
    description: "Salon de coiffure mixte, coupes, colorations et soins capillaires pour toute la famille.",
    address: "Boulevard de la Liberté, 28240 La Loupe",
    phone: "02 37 81 21 25",
    website: "https://coiffure-mixte.laloupe.net"
  },
  {
    id: "salon-philb",
    name: "Salon Philb",
    category: "Services",
    description: "Institut de beauté proposant soins du visage, épilation, manucure et relaxation.",
    address: "Rue de la Santé, 28240 La Loupe",
    phone: "02 37 81 22 36",
    website: "https://phil-b.laloupe.net"
  },

  // Services professionnels
  {
    id: "assurance-areas",
    name: "Assurance Areas",
    category: "Professionnels",
    description: "Conseil en assurance et courtage, protection des particuliers et des entreprises.",
    address: "Zone d'Activités, 28240 La Loupe",
    phone: "02 37 81 23 47",
    website: "https://areas.laloupe.net"
  },
  {
    id: "autoecole-loupeenne",
    name: "Auto-École Loupéenne",
    category: "Éducation",
    description: "Formation à la conduite automobile, permis B, conduite accompagnée et perfectionnement.",
    address: "Avenue de Nogent-le-Rotrou, 28240 La Loupe",
    phone: "02 37 81 24 58",
    website: "https://loupeenne.laloupe.net"
  }
];

export const getBusinessesByCategory = (categoryId: string): Business[] => {
  const categoryNames: { [key: string]: string } = {
    "restaurants": "Restaurants & Cafés",
    "commerces": "Commerces", 
    "services": "Services",
    "professionnels": "Professionnels",
    "sante": "Santé & Bien-être",
    "education": "Éducation",
    "automobile": "Automobile",
    "immobilier": "Immobilier"
  };
  
  const categoryName = categoryNames[categoryId];
  if (!categoryName) return [];
  
  return businesses.filter(business => business.category === categoryName);
};