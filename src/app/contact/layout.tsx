import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contactez L\'Excellence Restaurant à Paris. 15 Avenue des Champs-Élysées, 75008 Paris. Téléphone : +33 1 42 65 15 15.',
  openGraph: {
    title: 'Contact | L\'Excellence Restaurant',
    description: 'Contactez-nous pour toute demande d\'information ou de réservation.',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
