// Types pour le système de réservation
export interface Reservation {
  id: string;
  date: Date;
  time: string;
  guests: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  occasion?: 'birthday' | 'business' | 'romantic' | 'other';
  dietaryRestrictions?: string[];
  specialRequests?: string;
  seatingPreference?: 'terrace' | 'view' | 'private';
  status: 'pending' | 'confirmed' | 'cancelled';
  confirmationNumber: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ReservationFormData {
  date: Date;
  time: string;
  guests: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  occasion?: 'birthday' | 'business' | 'romantic' | 'other';
  dietaryRestrictions?: string[];
  specialRequests?: string;
  seatingPreference?: 'terrace' | 'view' | 'private';
}

// Types pour le menu
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'starter' | 'main' | 'dessert' | 'cheese';
  menuType: 'lunch' | 'dinner' | 'tasting';
  image?: string;
  tags: ('vegetarian' | 'vegan' | 'gluten-free')[];
  allergens: string[];
  isSignature: boolean;
  isAvailable: boolean;
  order: number;
}

export interface Menu {
  id: string;
  name: string;
  description: string;
  type: 'lunch' | 'dinner' | 'tasting' | 'wine';
  price?: number;
  items: MenuItem[];
}

// Types pour la galerie
export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: 'plats' | 'ambiance' | 'equipe' | 'evenements';
  width: number;
  height: number;
}

// Types pour les actualités
export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: 'evenement' | 'menu' | 'actualite' | 'distinction';
  publishedAt: Date;
  author: string;
}

// Types pour l'équipe
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  order: number;
}

// Types pour le contact
export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

// Types pour la privatisation
export interface PrivatisationRequest {
  name: string;
  email: string;
  phone: string;
  eventType: 'wedding' | 'seminar' | 'birthday' | 'corporate' | 'other';
  eventDate: Date;
  guestCount: number;
  budget?: string;
  message: string;
}

// Types pour la newsletter
export interface NewsletterSubscription {
  email: string;
}

// Types pour les disponibilités
export interface TimeSlot {
  time: string;
  available: boolean;
  remainingSeats: number;
}

export interface DayAvailability {
  date: string;
  slots: TimeSlot[];
  isClosed: boolean;
}

// Types pour les témoignages
export interface Testimonial {
  id: string;
  author: string;
  content: string;
  rating: number;
  date: string;
  source: 'google' | 'tripadvisor' | 'internal';
}

// Types pour les distinctions
export interface Distinction {
  id: string;
  name: string;
  year: number;
  description: string;
  image?: string;
}
