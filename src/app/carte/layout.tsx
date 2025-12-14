import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'La Carte',
  description: 'Découvrez notre menu gastronomique : entrées raffinées, plats signatures et desserts d\'exception. Cuisine française contemporaine avec les meilleurs produits de saison.',
  openGraph: {
    title: 'La Carte | L\'Excellence Restaurant',
    description: 'Découvrez notre menu gastronomique : entrées raffinées, plats signatures et desserts d\'exception.',
  },
};

export default function CarteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
