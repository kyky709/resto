import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Actualités',
  description: 'Suivez les actualités de L\'Excellence : nouveaux menus, événements spéciaux, distinctions et coulisses du restaurant.',
  openGraph: {
    title: 'Actualités | L\'Excellence Restaurant',
    description: 'Suivez les actualités de L\'Excellence : nouveaux menus, événements et coulisses.',
  },
};

export default function ActualitesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
