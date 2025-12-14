import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Carte des Vins',
  description: 'Découvrez notre sélection de plus de 500 vins, soigneusement choisis par notre sommelier. Grands crus de Bourgogne, Bordeaux, Champagne et plus encore.',
  openGraph: {
    title: 'Carte des Vins | L\'Excellence Restaurant',
    description: 'Découvrez notre sélection de plus de 500 vins, soigneusement choisis par notre sommelier.',
  },
};

export default function WineLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
