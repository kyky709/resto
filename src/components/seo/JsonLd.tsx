import { RESTAURANT_CONFIG } from '@/lib/constants';

interface JsonLdProps {
  type?: 'restaurant' | 'article' | 'event' | 'breadcrumb';
  data?: Record<string, unknown>;
}

export function JsonLd({ type = 'restaurant', data }: JsonLdProps) {
  const getStructuredData = () => {
    switch (type) {
      case 'restaurant':
        return getRestaurantSchema();
      case 'article':
        return getArticleSchema(data as unknown as ArticleData);
      case 'event':
        return getEventSchema(data as unknown as EventData);
      case 'breadcrumb':
        return getBreadcrumbSchema(data as unknown as BreadcrumbData);
      default:
        return getRestaurantSchema();
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(getStructuredData()) }}
    />
  );
}

interface ArticleData {
  title: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
}

interface EventData {
  name: string;
  description: string;
  startDate: string;
  endDate?: string;
  image?: string;
}

interface BreadcrumbData {
  items: Array<{ name: string; url: string }>;
}

function getRestaurantSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    '@id': `${RESTAURANT_CONFIG.siteUrl}/#restaurant`,
    name: RESTAURANT_CONFIG.name,
    description: RESTAURANT_CONFIG.description,
    url: RESTAURANT_CONFIG.siteUrl,
    telephone: RESTAURANT_CONFIG.phone,
    email: RESTAURANT_CONFIG.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: RESTAURANT_CONFIG.address.street,
      addressLocality: RESTAURANT_CONFIG.address.city,
      postalCode: RESTAURANT_CONFIG.address.postalCode,
      addressCountry: 'FR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: RESTAURANT_CONFIG.coordinates.lat,
      longitude: RESTAURANT_CONFIG.coordinates.lng,
    },
    image: [
      `${RESTAURANT_CONFIG.siteUrl}/images/restaurant-exterior.jpg`,
      `${RESTAURANT_CONFIG.siteUrl}/images/restaurant-interior.jpg`,
      `${RESTAURANT_CONFIG.siteUrl}/images/signature-dish.jpg`,
    ],
    priceRange: '€€€€',
    servesCuisine: 'French',
    hasMenu: `${RESTAURANT_CONFIG.siteUrl}/carte`,
    acceptsReservations: true,
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: RESTAURANT_CONFIG.hours.lunch.start,
        closes: RESTAURANT_CONFIG.hours.lunch.end,
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: RESTAURANT_CONFIG.hours.dinner.start,
        closes: RESTAURANT_CONFIG.hours.dinner.end,
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '247',
      bestRating: '5',
      worstRating: '1',
    },
    award: [
      'Étoile Michelin depuis 2020',
      'Gault & Millau 3 toques',
    ],
    sameAs: [
      RESTAURANT_CONFIG.social.instagram,
      RESTAURANT_CONFIG.social.facebook,
    ],
    potentialAction: {
      '@type': 'ReserveAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${RESTAURANT_CONFIG.siteUrl}/reservation`,
        actionPlatform: [
          'http://schema.org/DesktopWebPlatform',
          'http://schema.org/MobileWebPlatform',
        ],
      },
      result: {
        '@type': 'Reservation',
        name: 'Table Reservation',
      },
    },
  };
}

function getArticleSchema(data: ArticleData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: data.title,
    description: data.description,
    image: data.image,
    datePublished: data.datePublished,
    dateModified: data.dateModified || data.datePublished,
    author: {
      '@type': 'Organization',
      name: RESTAURANT_CONFIG.name,
      url: RESTAURANT_CONFIG.siteUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: RESTAURANT_CONFIG.name,
      logo: {
        '@type': 'ImageObject',
        url: `${RESTAURANT_CONFIG.siteUrl}/images/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': RESTAURANT_CONFIG.siteUrl,
    },
  };
}

function getEventSchema(data: EventData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: data.name,
    description: data.description,
    startDate: data.startDate,
    endDate: data.endDate || data.startDate,
    image: data.image || `${RESTAURANT_CONFIG.siteUrl}/images/event.jpg`,
    location: {
      '@type': 'Place',
      name: RESTAURANT_CONFIG.name,
      address: {
        '@type': 'PostalAddress',
        streetAddress: RESTAURANT_CONFIG.address.street,
        addressLocality: RESTAURANT_CONFIG.address.city,
        postalCode: RESTAURANT_CONFIG.address.postalCode,
        addressCountry: 'FR',
      },
    },
    organizer: {
      '@type': 'Organization',
      name: RESTAURANT_CONFIG.name,
      url: RESTAURANT_CONFIG.siteUrl,
    },
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
  };
}

function getBreadcrumbSchema(data: BreadcrumbData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: data.items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// Menu Schema for the Menu page
export function MenuJsonLd() {
  const menuSchema = {
    '@context': 'https://schema.org',
    '@type': 'Menu',
    name: `Carte du ${RESTAURANT_CONFIG.name}`,
    description: 'Notre carte gastronomique française',
    hasMenuSection: [
      {
        '@type': 'MenuSection',
        name: 'Menu Découverte',
        description: '5 services - Une introduction à notre cuisine',
        offers: {
          '@type': 'Offer',
          price: '95',
          priceCurrency: 'EUR',
        },
      },
      {
        '@type': 'MenuSection',
        name: 'Menu Signature',
        description: '7 services - Le voyage culinaire complet',
        offers: {
          '@type': 'Offer',
          price: '145',
          priceCurrency: 'EUR',
        },
      },
      {
        '@type': 'MenuSection',
        name: 'Menu Prestige',
        description: '9 services avec accords mets-vins',
        offers: {
          '@type': 'Offer',
          price: '195',
          priceCurrency: 'EUR',
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(menuSchema) }}
    />
  );
}

// Local Business Schema (more detailed)
export function LocalBusinessJsonLd() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${RESTAURANT_CONFIG.siteUrl}/#localbusiness`,
    name: RESTAURANT_CONFIG.name,
    image: `${RESTAURANT_CONFIG.siteUrl}/images/restaurant.jpg`,
    telephone: RESTAURANT_CONFIG.phone,
    email: RESTAURANT_CONFIG.email,
    url: RESTAURANT_CONFIG.siteUrl,
    address: {
      '@type': 'PostalAddress',
      streetAddress: RESTAURANT_CONFIG.address.street,
      addressLocality: RESTAURANT_CONFIG.address.city,
      postalCode: RESTAURANT_CONFIG.address.postalCode,
      addressCountry: 'FR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: RESTAURANT_CONFIG.coordinates.lat,
      longitude: RESTAURANT_CONFIG.coordinates.lng,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '12:00',
        closes: '14:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '19:00',
        closes: '22:00',
      },
    ],
    priceRange: '€€€€',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
    />
  );
}
