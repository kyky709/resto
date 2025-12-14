import { MenuItem, GalleryImage, Article, TeamMember, Testimonial, Distinction } from '@/types';

// Données des plats signature pour la page d'accueil
export const signatureDishes: MenuItem[] = [
  {
    id: '1',
    name: "Homard Bleu de Bretagne",
    description: "Rôti au beurre d'agrumes, émulsion de corail, légumes croquants de saison",
    price: 68,
    category: 'main',
    menuType: 'dinner',
    image: "/images/plats/homard.jpg",
    tags: ['gluten-free'],
    allergens: ['crustacés'],
    isSignature: true,
    isAvailable: true,
    order: 1,
  },
  {
    id: '2',
    name: "Foie Gras de Canard",
    description: "Mi-cuit maison, chutney de figues au Porto, brioche toastée",
    price: 42,
    category: 'starter',
    menuType: 'dinner',
    image: "/images/plats/foie-gras.jpg",
    tags: [],
    allergens: ['gluten'],
    isSignature: true,
    isAvailable: true,
    order: 2,
  },
  {
    id: '3',
    name: "Soufflé au Grand Marnier",
    description: "Crème anglaise à la vanille de Madagascar, zestes d'orange confits",
    price: 24,
    category: 'dessert',
    menuType: 'dinner',
    image: "/images/plats/souffle.jpg",
    tags: ['vegetarian'],
    allergens: ['gluten', 'oeufs', 'lait'],
    isSignature: true,
    isAvailable: true,
    order: 3,
  },
];

// Menu complet
export const menuItems: MenuItem[] = [
  // Entrées
  {
    id: 'e1',
    name: "Foie Gras de Canard",
    description: "Mi-cuit maison, chutney de figues au Porto, brioche toastée",
    price: 42,
    category: 'starter',
    menuType: 'dinner',
    image: "/images/plats/foie-gras.jpg",
    tags: [],
    allergens: ['gluten'],
    isSignature: true,
    isAvailable: true,
    order: 1,
  },
  {
    id: 'e2',
    name: "Saint-Jacques Snackées",
    description: "Purée de céleri-rave truffée, jus de veau réduit",
    price: 38,
    category: 'starter',
    menuType: 'dinner',
    image: "/images/plats/saint-jacques.jpg",
    tags: ['gluten-free'],
    allergens: ['mollusques', 'lait'],
    isSignature: false,
    isAvailable: true,
    order: 2,
  },
  {
    id: 'e3',
    name: "Velouté de Butternut",
    description: "Mousse de châtaignes, huile de noisette, chips de pancetta",
    price: 26,
    category: 'starter',
    menuType: 'dinner',
    image: "/images/plats/veloute.jpg",
    tags: ['gluten-free'],
    allergens: ['lait', 'fruits à coque'],
    isSignature: false,
    isAvailable: true,
    order: 3,
  },
  {
    id: 'e4',
    name: "Tartare de Thon Rouge",
    description: "Avocat, mangue, sésame noir, vinaigrette au yuzu",
    price: 32,
    category: 'starter',
    menuType: 'dinner',
    image: "/images/plats/tartare-thon.jpg",
    tags: ['gluten-free'],
    allergens: ['poisson', 'sésame'],
    isSignature: false,
    isAvailable: true,
    order: 4,
  },
  // Plats
  {
    id: 'p1',
    name: "Homard Bleu de Bretagne",
    description: "Rôti au beurre d'agrumes, émulsion de corail, légumes croquants de saison",
    price: 68,
    category: 'main',
    menuType: 'dinner',
    image: "/images/plats/homard.jpg",
    tags: ['gluten-free'],
    allergens: ['crustacés'],
    isSignature: true,
    isAvailable: true,
    order: 1,
  },
  {
    id: 'p2',
    name: "Filet de Bœuf Wagyu",
    description: "Pommes soufflées, sauce Périgueux, légumes de saison",
    price: 75,
    category: 'main',
    menuType: 'dinner',
    image: "/images/plats/wagyu.jpg",
    tags: ['gluten-free'],
    allergens: [],
    isSignature: true,
    isAvailable: true,
    order: 2,
  },
  {
    id: 'p3',
    name: "Pigeon en Deux Cuissons",
    description: "Cuisse confite, suprême rôti, jus corsé aux épices douces",
    price: 52,
    category: 'main',
    menuType: 'dinner',
    image: "/images/plats/pigeon.jpg",
    tags: ['gluten-free'],
    allergens: [],
    isSignature: false,
    isAvailable: true,
    order: 3,
  },
  {
    id: 'p4',
    name: "Turbot Sauvage",
    description: "Cuit sur l'arête, beurre blanc aux algues, fenouil braisé",
    price: 58,
    category: 'main',
    menuType: 'dinner',
    image: "/images/plats/turbot.jpg",
    tags: ['gluten-free'],
    allergens: ['poisson', 'lait'],
    isSignature: false,
    isAvailable: true,
    order: 4,
  },
  {
    id: 'p5',
    name: "Risotto aux Cèpes",
    description: "Parmesan affiné 24 mois, huile de truffe noire",
    price: 38,
    category: 'main',
    menuType: 'dinner',
    image: "/images/plats/risotto.jpg",
    tags: ['vegetarian', 'gluten-free'],
    allergens: ['lait'],
    isSignature: false,
    isAvailable: true,
    order: 5,
  },
  // Fromages
  {
    id: 'f1',
    name: "Plateau de Fromages Affinés",
    description: "Sélection de 5 fromages de nos producteurs, pain aux noix, confiture de cerises noires",
    price: 22,
    category: 'cheese',
    menuType: 'dinner',
    image: "/images/plats/fromages.jpg",
    tags: ['vegetarian'],
    allergens: ['lait', 'gluten', 'fruits à coque'],
    isSignature: false,
    isAvailable: true,
    order: 1,
  },
  // Desserts
  {
    id: 'd1',
    name: "Soufflé au Grand Marnier",
    description: "Crème anglaise à la vanille de Madagascar, zestes d'orange confits",
    price: 24,
    category: 'dessert',
    menuType: 'dinner',
    image: "/images/plats/souffle.jpg",
    tags: ['vegetarian'],
    allergens: ['gluten', 'oeufs', 'lait'],
    isSignature: true,
    isAvailable: true,
    order: 1,
  },
  {
    id: 'd2',
    name: "Tarte Tatin Revisitée",
    description: "Pommes caramélisées, glace au calvados, crumble de spéculoos",
    price: 18,
    category: 'dessert',
    menuType: 'dinner',
    image: "/images/plats/tatin.jpg",
    tags: ['vegetarian'],
    allergens: ['gluten', 'lait', 'oeufs'],
    isSignature: false,
    isAvailable: true,
    order: 2,
  },
  {
    id: 'd3',
    name: "Sphère Chocolat Noir",
    description: "Cœur praliné, coulis de fruits rouges, tuile dentelle",
    price: 20,
    category: 'dessert',
    menuType: 'dinner',
    image: "/images/plats/chocolat.jpg",
    tags: ['vegetarian'],
    allergens: ['gluten', 'lait', 'fruits à coque'],
    isSignature: false,
    isAvailable: true,
    order: 3,
  },
];

// Images de la galerie
export const galleryImages: GalleryImage[] = [
  { id: '1', src: '/images/galerie/plat-1.jpg', alt: 'Création culinaire du Chef', category: 'plats', width: 800, height: 600 },
  { id: '2', src: '/images/galerie/plat-2.jpg', alt: 'Entrée raffinée', category: 'plats', width: 800, height: 600 },
  { id: '3', src: '/images/galerie/plat-3.jpg', alt: 'Dessert signature', category: 'plats', width: 800, height: 600 },
  { id: '4', src: '/images/galerie/salle-1.jpg', alt: 'Salle principale du restaurant', category: 'ambiance', width: 800, height: 600 },
  { id: '5', src: '/images/galerie/salle-2.jpg', alt: 'Salon privé', category: 'ambiance', width: 800, height: 600 },
  { id: '6', src: '/images/galerie/terrasse.jpg', alt: 'Terrasse d\'été', category: 'ambiance', width: 800, height: 600 },
  { id: '7', src: '/images/galerie/chef.jpg', alt: 'Chef en cuisine', category: 'equipe', width: 800, height: 600 },
  { id: '8', src: '/images/galerie/equipe.jpg', alt: 'Équipe en salle', category: 'equipe', width: 800, height: 600 },
  { id: '9', src: '/images/galerie/event-1.jpg', alt: 'Soirée privée', category: 'evenements', width: 800, height: 600 },
  { id: '10', src: '/images/galerie/event-2.jpg', alt: 'Événement gastronomique', category: 'evenements', width: 800, height: 600 },
  { id: '11', src: '/images/galerie/plat-4.jpg', alt: 'Plat principal', category: 'plats', width: 800, height: 600 },
  { id: '12', src: '/images/galerie/bar.jpg', alt: 'Bar et cave à vins', category: 'ambiance', width: 800, height: 600 },
];

// Articles d'actualités
export const articles: Article[] = [
  {
    id: '1',
    slug: 'menu-automne-2024',
    title: "Nouveau Menu d'Automne",
    excerpt: "Découvrez notre nouvelle carte célébrant les saveurs de l'automne avec des produits de saison soigneusement sélectionnés.",
    content: `Notre Chef a créé une nouvelle carte qui met à l'honneur les produits d'automne les plus nobles.

Parmi les nouveautés, vous pourrez découvrir notre Velouté de Butternut aux châtaignes, notre Pigeon des Dombes en deux cuissons, et notre irrésistible Tarte Tatin revisitée.

Chaque plat a été pensé pour offrir une expérience gustative unique, mêlant tradition française et touches de modernité.

Réservez dès maintenant pour découvrir ces créations d'exception.`,
    image: '/images/actualites/menu-automne.jpg',
    category: 'menu',
    publishedAt: new Date('2024-10-01'),
    author: 'Chef Pierre Dubois',
  },
  {
    id: '2',
    slug: 'etoile-michelin-2024',
    title: "Nous conservons notre Étoile Michelin",
    excerpt: "C'est avec une immense fierté que nous vous annonçons le maintien de notre distinction au Guide Michelin 2024.",
    content: `L'équipe de L'Excellence est honorée d'annoncer que notre restaurant conserve son étoile au prestigieux Guide Michelin pour l'année 2024.

Cette reconnaissance récompense le travail passionné de toute notre équipe, en cuisine comme en salle, et notre engagement constant pour l'excellence culinaire.

Nous tenons à remercier chaleureusement nos clients fidèles qui nous font confiance année après année.`,
    image: '/images/actualites/michelin.jpg',
    category: 'distinction',
    publishedAt: new Date('2024-03-15'),
    author: "L'équipe L'Excellence",
  },
  {
    id: '3',
    slug: 'soiree-truffe-2024',
    title: "Soirée Dégustation Truffe Noire",
    excerpt: "Rejoignez-nous pour une soirée exceptionnelle dédiée à la truffe noire du Périgord, or noir de la gastronomie.",
    content: `Le vendredi 15 décembre, nous vous invitons à une soirée d'exception entièrement dédiée à la truffe noire du Périgord.

Au programme :
- Champagne de bienvenue
- Menu dégustation en 7 services
- Accord mets et vins
- Présentation par notre Chef

Places limitées à 30 convives. Réservation obligatoire.

Tarif : 280€ par personne, vins inclus.`,
    image: '/images/actualites/truffe.jpg',
    category: 'evenement',
    publishedAt: new Date('2024-11-15'),
    author: 'Chef Pierre Dubois',
  },
];

// Équipe
export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: "Pierre Dubois",
    role: "Chef Exécutif",
    bio: "Formé dans les plus grandes maisons étoilées, le Chef Pierre Dubois dirige les cuisines de L'Excellence depuis 2015. Sa cuisine, à la fois respectueuse des traditions et résolument moderne, lui a valu de nombreuses distinctions.",
    image: "/images/equipe/chef.jpg",
    order: 1,
  },
  {
    id: '2',
    name: "Marie Laurent",
    role: "Chef Pâtissière",
    bio: "Artiste du sucré, Marie Laurent crée des desserts qui sont de véritables œuvres d'art. Son soufflé au Grand Marnier est devenu la signature sucrée de la maison.",
    image: "/images/equipe/patissiere.jpg",
    order: 2,
  },
  {
    id: '3',
    name: "Jean-Marc Petit",
    role: "Directeur de Salle & Sommelier",
    bio: "Fort de 20 ans d'expérience dans les établissements gastronomiques, Jean-Marc veille à ce que chaque service soit une expérience mémorable. Sa cave compte plus de 500 références.",
    image: "/images/equipe/sommelier.jpg",
    order: 3,
  },
];

// Témoignages
export const testimonials: Testimonial[] = [
  {
    id: '1',
    author: "Sophie M.",
    content: "Une expérience gastronomique inoubliable. Chaque plat était une œuvre d'art, le service impeccable. Nous y retournerons sans hésiter.",
    rating: 5,
    date: "Octobre 2024",
    source: 'google',
  },
  {
    id: '2',
    author: "Philippe D.",
    content: "Le menu dégustation est un voyage culinaire exceptionnel. Le sommelier a su parfaitement accorder les vins. Bravo à toute l'équipe !",
    rating: 5,
    date: "Septembre 2024",
    source: 'tripadvisor',
  },
  {
    id: '3',
    author: "Claire & Thomas",
    content: "Nous avons fêté notre anniversaire de mariage ici. Un moment magique dans un cadre somptueux. Le soufflé au Grand Marnier est à tomber.",
    rating: 5,
    date: "Août 2024",
    source: 'google',
  },
];

// Distinctions
export const distinctions: Distinction[] = [
  {
    id: '1',
    name: "Étoile Michelin",
    year: 2024,
    description: "Distinction maintenue pour la 5ème année consécutive",
    image: "/images/distinctions/michelin.jpg",
  },
  {
    id: '2',
    name: "Gault & Millau",
    year: 2024,
    description: "16/20 - Deux toques",
    image: "/images/distinctions/gault-millau.jpg",
  },
  {
    id: '3',
    name: "La Liste",
    year: 2024,
    description: "Top 500 des meilleurs restaurants du monde",
    image: "/images/distinctions/la-liste.jpg",
  },
];
