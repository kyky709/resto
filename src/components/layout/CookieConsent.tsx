'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Cookie, X } from 'lucide-react';

const COOKIE_CONSENT_KEY = 'cookie-consent';

type ConsentType = 'all' | 'essential' | null;

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      // Delay showing banner for better UX
      const timer = setTimeout(() => setShowBanner(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleConsent = (type: ConsentType) => {
    if (type) {
      localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify({ type, date: new Date().toISOString() }));
      // Here you would initialize analytics based on consent
      if (type === 'all') {
        // Initialize Google Analytics, etc.
        console.log('All cookies accepted');
      }
    }
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed bottom-0 left-0 right-0 z-[100] p-4"
        >
          <div className="container mx-auto max-w-4xl">
            <div className="bg-[#1A1A1A] border border-[#333] rounded-xl shadow-2xl overflow-hidden">
              {/* Main Banner */}
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="hidden sm:flex w-12 h-12 rounded-full bg-[#C9A227]/10 items-center justify-center flex-shrink-0">
                    <Cookie className="w-6 h-6 text-[#C9A227]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-playfair text-lg text-white mb-2">
                      Nous respectons votre vie privée
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed">
                      Nous utilisons des cookies pour améliorer votre expérience, analyser le trafic
                      et personnaliser le contenu. En cliquant sur « Accepter tout », vous consentez
                      à notre utilisation des cookies.{' '}
                      <Link href="/confidentialite" className="text-[#C9A227] hover:underline">
                        Politique de confidentialité
                      </Link>
                    </p>
                  </div>
                  <button
                    onClick={() => setShowBanner(false)}
                    className="text-white/50 hover:text-white transition-colors"
                    aria-label="Fermer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mt-6">
                  <Button
                    onClick={() => handleConsent('all')}
                    className="bg-[#C9A227] hover:bg-[#B8911F] text-[#1A1A1A] font-semibold"
                  >
                    Accepter tout
                  </Button>
                  <Button
                    onClick={() => handleConsent('essential')}
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/10"
                  >
                    Cookies essentiels uniquement
                  </Button>
                  <button
                    onClick={() => setShowDetails(!showDetails)}
                    className="text-sm text-white/60 hover:text-white transition-colors underline"
                  >
                    {showDetails ? 'Masquer les détails' : 'Personnaliser'}
                  </button>
                </div>
              </div>

              {/* Details Panel */}
              <AnimatePresence>
                {showDetails && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-[#333] overflow-hidden"
                  >
                    <div className="p-6 space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-white font-medium">Cookies essentiels</h4>
                          <p className="text-white/60 text-sm">
                            Nécessaires au fonctionnement du site
                          </p>
                        </div>
                        <span className="text-[#C9A227] text-sm">Toujours actifs</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-white font-medium">Cookies analytiques</h4>
                          <p className="text-white/60 text-sm">
                            Nous aident à comprendre comment vous utilisez le site
                          </p>
                        </div>
                        <span className="text-white/50 text-sm">Optionnels</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-white font-medium">Cookies marketing</h4>
                          <p className="text-white/60 text-sm">
                            Permettent de personnaliser les publicités
                          </p>
                        </div>
                        <span className="text-white/50 text-sm">Optionnels</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
