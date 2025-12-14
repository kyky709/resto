import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Notre Histoire',
  description: 'Découvrez l\'histoire de L\'Excellence, restaurant gastronomique étoilé Paris. Le Chef Pierre Dubois et son équipe vous accueillent depuis 2015.',
  openGraph: {
    title: 'Notre Histoire | L\'Excellence Restaurant',
    description: 'Découvrez l\'histoire de L\'Excellence et rencontrez notre équipe passionnée.',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
