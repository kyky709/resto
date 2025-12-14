import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Réservation',
  description: 'Réservez votre table au restaurant L\'Excellence à Paris. Réservation en ligne simple et rapide pour une expérience gastronomique inoubliable.',
  openGraph: {
    title: 'Réservation | L\'Excellence Restaurant',
    description: 'Réservez votre table pour une expérience gastronomique inoubliable.',
  },
};

export default function ReservationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
