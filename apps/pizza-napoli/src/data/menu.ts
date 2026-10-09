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

// Menu des pizzas
export const menuPizzas: MenuItem[] = [
  {
    id: "margherita",
    nom: "Margherita",
    description: "Tomate, mozzarella, basilic frais",
    prix: 12.90,
    image: "/images/pizza-margherita.jpg",
    categorie: "Classiques",
    ingredients: ["Tomate", "Mozzarella", "Basilic"],
    allergenes: ["Gluten", "Lactose"],
    disponibilite: true,
    options: [
      { id: "taille-petite", nom: "Petite", prix: -2, obligatoire: false },
      { id: "taille-moyenne", nom: "Moyenne", prix: 0, obligatoire: true },
      { id: "taille-grande", nom: "Grande", prix: 3, obligatoire: false }
    ]
  },
  {
    id: "pepperoni",
    nom: "Pepperoni",
    description: "Tomate, mozzarella, pepperoni, olives",
    prix: 15.90,
    image: "/images/pizza-pepperoni.jpg",
    categorie: "Classiques",
    ingredients: ["Tomate", "Mozzarella", "Pepperoni", "Olives"],
    allergenes: ["Gluten", "Lactose"],
    disponibilite: true,
    options: [
      { id: "taille-petite", nom: "Petite", prix: -2, obligatoire: false },
      { id: "taille-moyenne", nom: "Moyenne", prix: 0, obligatoire: true },
      { id: "taille-grande", nom: "Grande", prix: 3, obligatoire: false }
    ]
  },
  {
    id: "quatre-fromages",
    nom: "Quatre Fromages",
    description: "Tomate, mozzarella, gorgonzola, parmesan, chèvre",
    prix: 16.90,
    image: "/images/pizza-quatre-fromages.jpg",
    categorie: "Spécialités",
    ingredients: ["Tomate", "Mozzarella", "Gorgonzola", "Parmesan", "Chèvre"],
    allergenes: ["Gluten", "Lactose"],
    disponibilite: true,
    options: [
      { id: "taille-petite", nom: "Petite", prix: -2, obligatoire: false },
      { id: "taille-moyenne", nom: "Moyenne", prix: 0, obligatoire: true },
      { id: "taille-grande", nom: "Grande", prix: 3, obligatoire: false }
    ]
  },
  {
    id: "vegetarienne",
    nom: "Végétarienne",
    description: "Tomate, mozzarella, légumes grillés, basilic",
    prix: 14.90,
    image: "/images/pizza-vegetarienne.jpg",
    categorie: "Végétariennes",
    ingredients: ["Tomate", "Mozzarella", "Courgettes", "Aubergines", "Poivrons", "Basilic"],
    allergenes: ["Gluten", "Lactose"],
    disponibilite: true,
    options: [
      { id: "taille-petite", nom: "Petite", prix: -2, obligatoire: false },
      { id: "taille-moyenne", nom: "Moyenne", prix: 0, obligatoire: true },
      { id: "taille-grande", nom: "Grande", prix: 3, obligatoire: false }
    ]
  },
  {
    id: "prosciutto",
    nom: "Prosciutto",
    description: "Tomate, mozzarella, prosciutto, roquette",
    prix: 17.90,
    image: "/images/pizza-prosciutto.jpg",
    categorie: "Gourmet",
    ingredients: ["Tomate", "Mozzarella", "Prosciutto", "Roquette"],
    allergenes: ["Gluten", "Lactose"],
    disponibilite: true,
    options: [
      { id: "taille-petite", nom: "Petite", prix: -2, obligatoire: false },
      { id: "taille-moyenne", nom: "Moyenne", prix: 0, obligatoire: true },
      { id: "taille-grande", nom: "Grande", prix: 3, obligatoire: false }
    ]
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
export const menuComplet = [...menuPizzas, ...menuBoissons];

// Catégories disponibles
export const categories = [
  { id: "all", nom: "Tous" },
  { id: "Classiques", nom: "Classiques" },
  { id: "Spécialités", nom: "Spécialités" },
  { id: "Végétariennes", nom: "Végétariennes" },
  { id: "Gourmet", nom: "Gourmet" },
  { id: "Boissons", nom: "Boissons" },
  { id: "Accompagnements", nom: "Accompagnements" }
];

