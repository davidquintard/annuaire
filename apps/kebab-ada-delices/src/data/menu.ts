export interface MenuItem {
  id: string;
  nom: string;
  description: string;
  prix: number;
  image: string;
  categorie: string;
  ingredients: string[];
  allergenes: string[];
  disponibilite: boolean;
  options?: MenuOption[];
}

export interface MenuOption {
  id: string;
  nom: string;
  prix: number;
  obligatoire: boolean;
}

export interface CartItem {
  item: MenuItem;
  quantite: number;
  optionsSelectionnees: MenuOption[];
  commentaires?: string;
}

// Menu des kebabs
export const menuKebabs: MenuItem[] = [
  {
    id: "kebab-classique",
    nom: "Kebab Classique",
    description: "Pain pita, viande, salade, tomates, oignons",
    prix: 8.90,
    image: "/images/kebab-classique.jpg",
    categorie: "Kebabs",
    ingredients: ["Pain pita", "Viande", "Salade", "Tomates", "Oignons"],
    allergenes: ["Gluten"],
    disponibilite: true,
    options: [
      { id: "viande-agneau", nom: "Agneau", prix: 0, obligatoire: true },
      { id: "viande-dinde", nom: "Dinde", prix: 0, obligatoire: false },
      { id: "viande-mixte", nom: "Mixte", prix: 1, obligatoire: false }
    ]
  },
  {
    id: "kebab-deluxe",
    nom: "Kebab Deluxe",
    description: "Pain pita, viande, salade, tomates, oignons, frites",
    prix: 10.90,
    image: "/images/kebab-deluxe.jpg",
    categorie: "Kebabs",
    ingredients: ["Pain pita", "Viande", "Salade", "Tomates", "Oignons", "Frites"],
    allergenes: ["Gluten"],
    disponibilite: true,
    options: [
      { id: "viande-agneau", nom: "Agneau", prix: 0, obligatoire: true },
      { id: "viande-dinde", nom: "Dinde", prix: 0, obligatoire: false },
      { id: "viande-mixte", nom: "Mixte", prix: 1, obligatoire: false }
    ]
  },
  {
    id: "kebab-vegetarien",
    nom: "Kebab Végétarien",
    description: "Pain pita, falafels, salade, tomates, oignons",
    prix: 9.90,
    image: "/images/kebab-vegetarien.jpg",
    categorie: "Végétariens",
    ingredients: ["Pain pita", "Falafels", "Salade", "Tomates", "Oignons"],
    allergenes: ["Gluten"],
    disponibilite: true,
    options: [
      { id: "falafels", nom: "Falafels", prix: 0, obligatoire: true }
    ]
  },
  {
    id: "kebab-wrap",
    nom: "Kebab Wrap",
    description: "Tortilla, viande, salade, tomates, oignons",
    prix: 9.50,
    image: "/images/kebab-wrap.jpg",
    categorie: "Kebabs",
    ingredients: ["Tortilla", "Viande", "Salade", "Tomates", "Oignons"],
    allergenes: ["Gluten"],
    disponibilite: true,
    options: [
      { id: "viande-agneau", nom: "Agneau", prix: 0, obligatoire: true },
      { id: "viande-dinde", nom: "Dinde", prix: 0, obligatoire: false },
      { id: "viande-mixte", nom: "Mixte", prix: 1, obligatoire: false }
    ]
  }
];

// Sauces
export const menuSauces: MenuItem[] = [
  {
    id: "sauce-blanche",
    nom: "Sauce Blanche",
    description: "Sauce blanche traditionnelle",
    prix: 0,
    image: "/images/sauce-blanche.jpg",
    categorie: "Sauces",
    ingredients: ["Yaourt", "Ail", "Persil"],
    allergenes: ["Lactose"],
    disponibilite: true
  },
  {
    id: "sauce-harissa",
    nom: "Sauce Harissa",
    description: "Sauce épicée orientale",
    prix: 0,
    image: "/images/sauce-harissa.jpg",
    categorie: "Sauces",
    ingredients: ["Harissa", "Tomate"],
    allergenes: [],
    disponibilite: true
  },
  {
    id: "sauce-barbecue",
    nom: "Sauce Barbecue",
    description: "Sauce barbecue américaine",
    prix: 0,
    image: "/images/sauce-barbecue.jpg",
    categorie: "Sauces",
    ingredients: ["Tomate", "Vinaigre", "Épices"],
    allergenes: [],
    disponibilite: true
  }
];

// Boissons et accompagnements
export const menuBoissons: MenuItem[] = [
  {
    id: "coca-cola",
    nom: "Coca-Cola",
    description: "Boisson gazeuse 33cl",
    prix: 2.50,
    image: "/images/coca-cola.jpg",
    categorie: "Boissons",
    ingredients: ["Coca-Cola"],
    allergenes: [],
    disponibilite: true
  },
  {
    id: "eau",
    nom: "Eau",
    description: "Eau minérale 50cl",
    prix: 1.50,
    image: "/images/eau.jpg",
    categorie: "Boissons",
    ingredients: ["Eau"],
    allergenes: [],
    disponibilite: true
  },
  {
    id: "frites",
    nom: "Frites",
    description: "Frites maison",
    prix: 4.50,
    image: "/images/frites.jpg",
    categorie: "Accompagnements",
    ingredients: ["Pommes de terre"],
    allergenes: [],
    disponibilite: true
  }
];

// Menu complet
export const menuComplet = [...menuKebabs, ...menuSauces, ...menuBoissons];

// Catégories disponibles
export const categories = [
  { id: "all", nom: "Tous" },
  { id: "Kebabs", nom: "Kebabs" },
  { id: "Végétariens", nom: "Végétariens" },
  { id: "Sauces", nom: "Sauces" },
  { id: "Boissons", nom: "Boissons" },
  { id: "Accompagnements", nom: "Accompagnements" }
];

