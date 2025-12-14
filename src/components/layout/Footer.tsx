'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Instagram, Facebook, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { RESTAURANT_CONFIG, FOOTER_LINKS } from '@/lib/constants';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1A1A1A] text-white">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="font-playfair text-2xl text-[#C9A227] mb-4">
              Restez informés
            </h3>
            <p className="text-white/70 mb-6">
              Inscrivez-vous à notre newsletter pour recevoir nos actualités,
              menus saisonniers et événements exclusifs.
            </p>
            <form className="flex gap-3" onSubmit={(e) => e.preventDefault()}>
              <Input
                type="email"
                placeholder="Votre email"
                className="bg-white/5 border-white/20 text-white placeholder:text-white/40 focus:border-[#C9A227]"
              />
              <Button className="bg-[#C9A227] hover:bg-[#B8911F] text-[#1A1A1A] font-semibold px-8">
                S'inscrire
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-6">
              <span className="font-playfair text-2xl text-[#C9A227]">
                {RESTAURANT_CONFIG.name}
              </span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              {RESTAURANT_CONFIG.description}
            </p>
            <div className="flex gap-4">
              <motion.a
                href={RESTAURANT_CONFIG.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#C9A227] hover:text-[#1A1A1A] transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a
                href={RESTAURANT_CONFIG.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#C9A227] hover:text-[#1A1A1A] transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-playfair text-lg text-[#C9A227] mb-6">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={`https://maps.google.com/?q=${RESTAURANT_CONFIG.address.street}, ${RESTAURANT_CONFIG.address.city}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-white/70 hover:text-white transition-colors"
                >
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#C9A227]" />
                  <span className="text-sm">
                    {RESTAURANT_CONFIG.address.street}
                    <br />
                    {RESTAURANT_CONFIG.address.postalCode}{' '}
                    {RESTAURANT_CONFIG.address.city}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${RESTAURANT_CONFIG.phone}`}
                  className="flex items-center gap-3 text-white/70 hover:text-white transition-colors"
                >
                  <Phone className="w-5 h-5 flex-shrink-0 text-[#C9A227]" />
                  <span className="text-sm">{RESTAURANT_CONFIG.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${RESTAURANT_CONFIG.email}`}
                  className="flex items-center gap-3 text-white/70 hover:text-white transition-colors"
                >
                  <Mail className="w-5 h-5 flex-shrink-0 text-[#C9A227]" />
                  <span className="text-sm">{RESTAURANT_CONFIG.email}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-playfair text-lg text-[#C9A227] mb-6">Horaires</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/70">
                <Clock className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#C9A227]" />
                <div className="text-sm">
                  <p className="font-medium text-white mb-1">Déjeuner</p>
                  <p>
                    {RESTAURANT_CONFIG.hours.lunch.days.join(', ')}
                    <br />
                    {RESTAURANT_CONFIG.hours.lunch.start} -{' '}
                    {RESTAURANT_CONFIG.hours.lunch.end}
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3 text-white/70">
                <Clock className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#C9A227]" />
                <div className="text-sm">
                  <p className="font-medium text-white mb-1">Dîner</p>
                  <p>
                    {RESTAURANT_CONFIG.hours.dinner.days.join(', ')}
                    <br />
                    {RESTAURANT_CONFIG.hours.dinner.start} -{' '}
                    {RESTAURANT_CONFIG.hours.dinner.end}
                  </p>
                </div>
              </li>
              <li className="text-sm text-white/50 mt-4">
                Fermé : {RESTAURANT_CONFIG.hours.closed.join(' et ')}
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair text-lg text-[#C9A227] mb-6">
              Liens rapides
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/reservation"
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  Réserver une table
                </Link>
              </li>
              <li>
                <Link
                  href="/carte"
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  Voir la carte
                </Link>
              </li>
              <li>
                <Link
                  href="/privatisation"
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  Privatisation
                </Link>
              </li>
              <li>
                <Link
                  href="/actualites"
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  Actualités
                </Link>
              </li>
              <Separator className="my-4 bg-white/10" />
              {FOOTER_LINKS.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 hover:text-white/70 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-white/50">
              &copy; {currentYear} {RESTAURANT_CONFIG.name}. Tous droits réservés.
            </p>
            <div className="flex items-center gap-6 text-sm text-white/50">
              <span>Étoile Michelin depuis 2020</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
