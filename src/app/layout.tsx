import type { Metadata, Viewport } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "@/components/layout";
import { JsonLd } from "@/components/seo";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1A1A1A",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://lexcellence-restaurant.fr"),
  title: {
    default: "L'Excellence | Restaurant Gastronomique Paris",
    template: "%s | L'Excellence Restaurant",
  },
  description:
    "Découvrez L'Excellence, restaurant gastronomique étoilé au cœur de Paris. Une expérience culinaire d'exception mêlant tradition française et touches contemporaines. Réservez votre table.",
  keywords: [
    "restaurant gastronomique",
    "Paris",
    "étoile Michelin",
    "cuisine française",
    "fine dining",
    "réservation restaurant",
    "chef étoilé",
    "gastronomie",
  ],
  authors: [{ name: "L'Excellence Restaurant" }],
  creator: "L'Excellence Restaurant",
  publisher: "L'Excellence Restaurant",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://lexcellence-restaurant.fr",
    siteName: "L'Excellence Restaurant",
    title: "L'Excellence | Restaurant Gastronomique Paris",
    description:
      "Restaurant gastronomique étoilé au cœur de Paris. Réservez votre table pour une expérience culinaire inoubliable.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "L'Excellence Restaurant Gastronomique",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "L'Excellence | Restaurant Gastronomique Paris",
    description:
      "Restaurant gastronomique étoilé au cœur de Paris. Réservez votre table.",
    images: ["/images/og-image.jpg"],
  },
  alternates: {
    canonical: "https://lexcellence-restaurant.fr",
  },
  icons: {
    icon: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "votre-code-google-verification",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <JsonLd type="restaurant" />
      </head>
      <body
        className={`${playfair.variable} ${lato.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
