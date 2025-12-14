# L'Excellence - Restaurant Gastronomique

> **Projet fictif de portfolio** - Ce site web a été conçu pour démontrer mes compétences en développement front-end moderne.

## Apercu du Projet

Site vitrine haut de gamme pour un restaurant gastronomique fictif parisien. Ce projet met en avant une expérience utilisateur raffinée avec des animations fluides, un design élégant et une architecture moderne.

## Technologies Utilisées

| Catégorie | Technologies |
|-----------|-------------|
| **Framework** | Next.js 14 (App Router) |
| **Langage** | TypeScript (mode strict) |
| **Styling** | Tailwind CSS 3.x |
| **Composants UI** | shadcn/ui, Radix UI |
| **Animations** | Framer Motion |
| **Formulaires** | React Hook Form + Zod |
| **Base de données** | Supabase (PostgreSQL) |
| **Icons** | Lucide React |

## Fonctionnalités Principales

### Pages
- **Accueil** - Hero immersif, sections signature, témoignages
- **Notre Histoire** - Présentation du chef et de l'équipe
- **La Carte** - Menu dégustation avec descriptions détaillées
- **Carte des Vins** - Sélection de vins par région
- **Expériences** - Dîners privés, cours de cuisine, événements
- **Galerie** - Grille masonry avec lightbox
- **Distinctions** - Étoiles Michelin, récompenses
- **Actualités** - Blog avec articles
- **Contact** - Formulaire et carte Google Maps
- **Réservation** - Système complet avec calendrier
- **FAQ** - Questions fréquentes avec accordéon
- **Mentions Légales** - CGU, politique de confidentialité

### Fonctionnalités Techniques
- Design responsive (mobile-first)
- Animations au scroll optimisées
- Formulaire de newsletter avec validation
- SEO optimisé (meta tags, JSON-LD, sitemap)
- Accessibilité WCAG 2.1
- Performance optimisée (lazy loading, image optimization)

## Charte Graphique

| Élément | Valeur |
|---------|--------|
| **Or/Accent** | `#C9A227` |
| **Noir Principal** | `#1A1A1A` |
| **Bordeaux** | `#722F37` |
| **Typographie Titres** | Playfair Display |
| **Typographie Corps** | Lato |

## Installation

```bash
# Cloner le repository
git clone https://github.com/kyky709/resto.git

# Installer les dépendances
cd restaurant-gastronomique
npm install

# Lancer le serveur de développement
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## Scripts Disponibles

```bash
npm run dev      # Serveur de développement
npm run build    # Build de production
npm run start    # Démarrer en production
npm run lint     # Vérification ESLint
```

## Structure du Projet

```
src/
├── app/                    # Pages (App Router)
│   ├── page.tsx           # Accueil
│   ├── carte/             # Menu
│   ├── reservation/       # Réservation
│   └── ...
├── components/
│   ├── layout/            # Header, Footer
│   ├── sections/          # Sections réutilisables
│   ├── ui/                # Composants shadcn/ui
│   └── seo/               # JSON-LD, meta
├── hooks/                 # Custom hooks
├── lib/                   # Utilitaires, données
└── types/                 # Types TypeScript
```

## Compétences Démontrées

- Architecture Next.js 14 avec App Router
- TypeScript avancé avec typage strict
- Design System avec Tailwind CSS
- Animations complexes avec Framer Motion
- Gestion de formulaires avec validation
- Intégration API et base de données
- Bonnes pratiques SEO et accessibilité
- Code propre et maintenable

## Auteur

Développé par **kyky709** dans le cadre d'un projet portfolio.

---

*Ce projet est purement fictif et destiné à des fins de démonstration uniquement. Toutes les informations (adresse, téléphone, avis) sont inventées.*
