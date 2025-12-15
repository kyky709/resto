# 🍽️ L'Élysée - Site Restaurant Gastronomique

Un site vitrine haut de gamme pour un restaurant gastronomique étoilé, développé avec les dernières technologies web pour offrir une expérience utilisateur premium.

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=flat-square&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-FF0055?style=flat-square&logo=framer)

## ✨ Aperçu

L'Élysée est un projet de site web complet pour un restaurant gastronomique fictif. Il démontre les meilleures pratiques en matière de développement front-end moderne, d'UI/UX design, d'accessibilité et de SEO.

### 🎯 Objectifs du projet

- Créer une expérience utilisateur immersive et élégante
- Implémenter un système de réservation en ligne complet
- Optimiser les performances et le référencement naturel
- Respecter les normes d'accessibilité WCAG 2.1
- Assurer la conformité RGPD

## 🚀 Stack Technique

| Catégorie | Technologies |
|-----------|-------------|
| **Framework** | Next.js 16 (App Router) |
| **Langage** | TypeScript (mode strict) |
| **Styling** | Tailwind CSS 4 |
| **Composants UI** | shadcn/ui + Radix UI |
| **Animations** | Framer Motion |
| **Formulaires** | React Hook Form + Zod |
| **Base de données** | Supabase (PostgreSQL) |
| **Emails** | Resend |
| **Déploiement** | Vercel |

## 📁 Structure du projet

```
src/
├── app/                    # App Router (pages et routes)
│   ├── (pages)/           # Groupe de routes
│   │   ├── a-propos/
│   │   ├── actualites/
│   │   │   └── [slug]/    # Routes dynamiques
│   │   ├── carte/
│   │   ├── carte-des-vins/
│   │   ├── contact/
│   │   ├── galerie/
│   │   ├── privatisation/
│   │   └── reservation/
│   ├── api/               # API Routes
│   ├── mentions-legales/
│   ├── confidentialite/
│   └── cgv/
├── components/
│   ├── layout/            # Header, Footer, Navigation
│   ├── sections/          # Sections réutilisables
│   ├── forms/             # Composants de formulaires
│   └── ui/                # Composants shadcn/ui
├── lib/                   # Utilitaires et configurations
├── data/                  # Données statiques (menus, vins, etc.)
└── types/                 # Définitions TypeScript
```

## 🎨 Design System

### Palette de couleurs

| Couleur | Hex | Usage |
|---------|-----|-------|
| **Or** | `#C9A227` | Accent, CTA, éléments de luxe |
| **Noir** | `#1A1A1A` | Texte principal, arrière-plans |
| **Bordeaux** | `#722F37` | Accent secondaire, vins |
| **Crème** | `#FAFAFA` | Arrière-plans clairs |
| **Gris foncé** | `#2D2D2D` | Texte secondaire |

### Typographies

- **Titres** : Playfair Display (serif élégant)
- **Corps** : Lato (sans-serif lisible)

## 📄 Pages

| Page | Description |
|------|-------------|
| `/` | Accueil avec hero, présentation, témoignages |
| `/a-propos` | Histoire, chef, équipe, valeurs, timeline |
| `/carte` | Menus déjeuner, dîner, dégustation |
| `/carte-des-vins` | Sélection de vins par région et type |
| `/galerie` | Photos avec filtres et lightbox |
| `/actualites` | Événements et actualités du restaurant |
| `/reservation` | Formulaire de réservation en 3 étapes |
| `/privatisation` | Espaces privatisables et demande de devis |
| `/contact` | Coordonnées, horaires, formulaire, carte |

## ⚡ Fonctionnalités

### Réservation en ligne
- Processus intuitif en 3 étapes
- Sélection de date avec calendrier interactif
- Validation en temps réel des formulaires
- Champs pour préférences alimentaires et occasions spéciales

### SEO optimisé
- Métadonnées dynamiques par page
- Schema.org JSON-LD (Restaurant, Menu, LocalBusiness)
- Sitemap XML automatique
- Open Graph et Twitter Cards
- URLs canoniques

### Accessibilité (WCAG 2.1)
- Skip links pour navigation clavier
- Labels explicites sur tous les formulaires
- Alt text sur toutes les images
- Focus visible et contraste suffisant
- Navigation clavier complète

### RGPD
- Bandeau de consentement cookies
- Politique de confidentialité complète
- Gestion du consentement utilisateur

### Animations
- Transitions de pages fluides
- Animations au scroll (fade-in, slide)
- Micro-interactions sur les éléments interactifs
- Lightbox galerie avec navigation

## 🛠️ Installation

### Prérequis

- Node.js 18.17 ou supérieur
- npm, yarn ou pnpm

### Étapes

1. **Cloner le repository**
   ```bash
   git clone https://github.com/votre-username/restaurant-elysee.git
   cd restaurant-elysee
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   # ou
   yarn install
   # ou
   pnpm install
   ```

3. **Configurer les variables d'environnement**
   ```bash
   cp .env.example .env.local
   ```
   Puis remplir les variables dans `.env.local`

4. **Lancer le serveur de développement**
   ```bash
   npm run dev
   ```

5. **Ouvrir dans le navigateur**
   ```
   http://localhost:3000
   ```

## 📝 Variables d'environnement

Créer un fichier `.env.local` à la racine du projet :

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key

# Resend (Emails)
RESEND_API_KEY=your_resend_api_key

# Google Maps (optionnel)
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_maps_key
```

## 🚀 Déploiement

### Vercel (recommandé)

1. Connecter le repository à Vercel
2. Configurer les variables d'environnement
3. Déployer

```bash
npm run build
```

### Autres plateformes

Le projet est compatible avec toute plateforme supportant Next.js :
- Netlify
- AWS Amplify
- Railway
- Self-hosted (Node.js)

## 📊 Performance

- **Lighthouse Score** : 95+ sur toutes les métriques
- **Core Web Vitals** : Optimisés
- **Images** : Optimisation automatique avec next/image
- **Code splitting** : Automatique avec Next.js
- **Prefetching** : Liens préchargés automatiquement

## 🧪 Scripts disponibles

```bash
# Développement
npm run dev

# Build production
npm run build

# Lancer en production
npm start

# Linting
npm run lint

# Type checking
npm run type-check
```

## 📱 Responsive Design

Le site est entièrement responsive avec des breakpoints Tailwind :

- **Mobile** : < 640px
- **Tablette** : 640px - 1024px
- **Desktop** : > 1024px

## 🔒 Sécurité

- Validation côté serveur avec Zod
- Headers de sécurité configurés
- Protection CSRF sur les formulaires
- HTTPS forcé en production

## 📚 Documentation additionnelle

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Framer Motion Documentation](https://www.framer.com/motion/)

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

---

**Développé avec ❤️ pour démontrer les meilleures pratiques du développement web moderne.**
