import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privatisation',
  description: 'Privatisez L\'Excellence pour vos événements : mariages, séminaires, anniversaires. Un cadre d\'exception pour des moments inoubliables.',
  openGraph: {
    title: 'Privatisation | L\'Excellence Restaurant',
    description: 'Privatisez L\'Excellence pour vos événements exceptionnels.',
  },
};

export default function PrivatisationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
