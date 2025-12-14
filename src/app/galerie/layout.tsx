import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Galerie',
  description: 'Découvrez L\'Excellence en images : nos plats signatures, l\'ambiance de notre restaurant, notre équipe et nos événements.',
  openGraph: {
    title: 'Galerie | L\'Excellence Restaurant',
    description: 'Découvrez L\'Excellence en images : plats, ambiance et événements.',
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
