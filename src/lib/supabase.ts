import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Types for database tables
export interface DbReservation {
  id: string;
  reservation_number: string;
  date: string;
  time: string;
  guests: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  occasion?: string;
  special_requests?: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  created_at: string;
  updated_at: string;
}

export interface DbContact {
  id: string;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  status: 'new' | 'read' | 'replied';
  created_at: string;
}

export interface DbNewsletter {
  id: string;
  email: string;
  subscribed_at: string;
  unsubscribed_at?: string;
  status: 'active' | 'unsubscribed';
}

export interface DbPrivatisation {
  id: string;
  request_number: string;
  name: string;
  email: string;
  phone: string;
  event_type: string;
  event_date: string;
  guest_count: number;
  budget?: string;
  message: string;
  status: 'pending' | 'contacted' | 'confirmed' | 'cancelled';
  created_at: string;
  updated_at: string;
}

// Helper functions for database operations
export async function createReservation(data: Omit<DbReservation, 'id' | 'created_at' | 'updated_at'>) {
  const { data: reservation, error } = await supabase
    .from('reservations')
    .insert({
      ...data,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    })
    .select()
    .single();

  if (error) throw error;
  return reservation;
}

export async function getAvailableSlots(date: string) {
  const { data: reservations, error } = await supabase
    .from('reservations')
    .select('time, guests')
    .eq('date', date)
    .neq('status', 'cancelled');

  if (error) throw error;
  return reservations;
}

export async function createContactMessage(data: Omit<DbContact, 'id' | 'created_at' | 'status'>) {
  const { data: contact, error } = await supabase
    .from('contacts')
    .insert({
      ...data,
      status: 'new',
      created_at: new Date().toISOString(),
    })
    .select()
    .single();

  if (error) throw error;
  return contact;
}

export async function subscribeNewsletter(email: string) {
  // Check if already subscribed
  const { data: existing } = await supabase
    .from('newsletters')
    .select('id, status')
    .eq('email', email)
    .single();

  if (existing) {
    if (existing.status === 'unsubscribed') {
      // Resubscribe
      const { data, error } = await supabase
        .from('newsletters')
        .update({ status: 'active', unsubscribed_at: null })
        .eq('id', existing.id)
        .select()
        .single();
      if (error) throw error;
      return data;
    }
    return existing; // Already subscribed
  }

  // New subscription
  const { data: newsletter, error } = await supabase
    .from('newsletters')
    .insert({
      email,
      subscribed_at: new Date().toISOString(),
      status: 'active',
    })
    .select()
    .single();

  if (error) throw error;
  return newsletter;
}

export async function createPrivatisationRequest(data: Omit<DbPrivatisation, 'id' | 'created_at' | 'updated_at' | 'status'>) {
  const { data: request, error } = await supabase
    .from('privatisation_requests')
    .insert({
      ...data,
      status: 'pending',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    })
    .select()
    .single();

  if (error) throw error;
  return request;
}

// SQL Schema for Supabase (run this in SQL editor)
export const databaseSchema = `
-- Reservations table
CREATE TABLE reservations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  reservation_number TEXT UNIQUE NOT NULL,
  date DATE NOT NULL,
  time TIME NOT NULL,
  guests INTEGER NOT NULL CHECK (guests >= 1 AND guests <= 12),
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  occasion TEXT,
  special_requests TEXT,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Contacts table
CREATE TABLE contacts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'read', 'replied')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Newsletter subscribers table
CREATE TABLE newsletters (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  subscribed_at TIMESTAMPTZ DEFAULT NOW(),
  unsubscribed_at TIMESTAMPTZ,
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'unsubscribed'))
);

-- Privatisation requests table
CREATE TABLE privatisation_requests (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  request_number TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  event_type TEXT NOT NULL,
  event_date DATE NOT NULL,
  guest_count INTEGER NOT NULL CHECK (guest_count >= 1),
  budget TEXT,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'contacted', 'confirmed', 'cancelled')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes for better performance
CREATE INDEX idx_reservations_date ON reservations(date);
CREATE INDEX idx_reservations_status ON reservations(status);
CREATE INDEX idx_contacts_status ON contacts(status);
CREATE INDEX idx_newsletters_email ON newsletters(email);
CREATE INDEX idx_privatisation_status ON privatisation_requests(status);

-- Row Level Security (RLS)
ALTER TABLE reservations ENABLE ROW LEVEL SECURITY;
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletters ENABLE ROW LEVEL SECURITY;
ALTER TABLE privatisation_requests ENABLE ROW LEVEL SECURITY;

-- Policies for anon users (API access)
CREATE POLICY "Allow insert reservations" ON reservations FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow insert contacts" ON contacts FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow insert newsletters" ON newsletters FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow select newsletters by email" ON newsletters FOR SELECT USING (true);
CREATE POLICY "Allow update newsletters" ON newsletters FOR UPDATE USING (true);
CREATE POLICY "Allow insert privatisation" ON privatisation_requests FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow select reservations by date" ON reservations FOR SELECT USING (true);
`;
