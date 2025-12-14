// Configuration du restaurant
export const RESTAURANT_CONFIG = {
  name: "L'Excellence",
  tagline: "L'art de la gastronomie française",
  description: "Restaurant gastronomique au coeur de Paris, offrant une expérience culinaire d'exception",
  siteUrl: "https://lexcellence-restaurant.fr",
  address: {
    street: "15 Avenue des Champs-Élysées",
    city: "Paris",
    postalCode: "75008",
    country: "France",
  },
  phone: "+33 1 42 65 15 15",
  email: "contact@lexcellence-restaurant.fr",
  coordinates: {
    lat: 48.8698,
    lng: 2.3078,
  },
  social: {
    instagram: "https://instagram.com/lexcellence",
    facebook: "https://facebook.com/lexcellence",
    tripadvisor: "https://tripadvisor.com/lexcellence",
  },
  hours: {
    lunch: {
      start: "12:00",
      end: "14:00",
      days: ["Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"],
    },
    dinner: {
      start: "19:00",
      end: "22:00",
      days: ["Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"],
    },
    closed: ["Dimanche", "Lundi"],
  },
};

// Palette de couleurs
export const COLORS = {
  primary: "#C9A227", // Or/Champagne
  secondary: "#1A1A1A", // Noir profond
  accent: "#722F37", // Bordeaux
  background: "#FAFAFA", // Blanc cassé
  text: "#333333", // Gris anthracite
  textLight: "#666666",
  white: "#FFFFFF",
  black: "#000000",
};

// Créneaux horaires pour la réservation
export const TIME_SLOTS = {
  lunch: [
    "12:00", "12:15", "12:30", "12:45",
    "13:00", "13:15", "13:30", "13:45",
  ],
  dinner: [
    "19:00", "19:15", "19:30", "19:45",
    "20:00", "20:15", "20:30", "20:45",
    "21:00", "21:15", "21:30",
  ],
};

// Options pour le nombre de couverts
export const GUEST_OPTIONS = Array.from({ length: 12 }, (_, i) => i + 1);

// Options d'occasions spéciales
export const OCCASION_OPTIONS = [
  { value: "birthday", label: "Anniversaire" },
  { value: "business", label: "Repas d'affaires" },
  { value: "romantic", label: "Soirée romantique" },
  { value: "other", label: "Autre" },
];

// Options de préférences alimentaires
export const DIETARY_OPTIONS = [
  { value: "vegetarian", label: "Végétarien" },
  { value: "vegan", label: "Végan" },
  { value: "gluten-free", label: "Sans gluten" },
  { value: "lactose-free", label: "Sans lactose" },
  { value: "nut-allergy", label: "Allergie aux noix" },
  { value: "shellfish-allergy", label: "Allergie aux crustacés" },
];

// Options de placement
export const SEATING_OPTIONS = [
  { value: "terrace", label: "Terrasse" },
  { value: "view", label: "Vue panoramique" },
  { value: "private", label: "Salon privé" },
];

// Types d'événements pour privatisation
export const EVENT_TYPES = [
  { value: "wedding", label: "Mariage" },
  { value: "seminar", label: "Séminaire" },
  { value: "birthday", label: "Anniversaire" },
  { value: "corporate", label: "Événement d'entreprise" },
  { value: "other", label: "Autre" },
];

// Navigation principale
export const NAV_LINKS = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos", label: "Notre Histoire" },
  { href: "/carte", label: "La Carte" },
  { href: "/galerie", label: "Galerie" },
  { href: "/actualites", label: "Actualités" },
  { href: "/privatisation", label: "Privatisation" },
  { href: "/contact", label: "Contact" },
];

// Liens du footer
export const FOOTER_LINKS = {
  legal: [
    { href: "/mentions-legales", label: "Mentions légales" },
    { href: "/confidentialite", label: "Politique de confidentialité" },
    { href: "/cgv", label: "CGV" },
  ],
};

// Catégories de la galerie
export const GALLERY_CATEGORIES = [
  { value: "all", label: "Tous" },
  { value: "plats", label: "Plats" },
  { value: "ambiance", label: "Ambiance" },
  { value: "equipe", label: "Équipe" },
  { value: "evenements", label: "Événements" },
];

// Catégories de menu
export const MENU_CATEGORIES = [
  { value: "starter", label: "Entrées" },
  { value: "main", label: "Plats" },
  { value: "cheese", label: "Fromages" },
  { value: "dessert", label: "Desserts" },
];

// Types de menu
export const MENU_TYPES = [
  { value: "lunch", label: "Déjeuner" },
  { value: "dinner", label: "Dîner" },
  { value: "tasting", label: "Menu Dégustation" },
  { value: "wine", label: "Carte des Vins" },
];
