'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { NAV_LINKS, RESTAURANT_CONFIG } from '@/lib/constants';
import { useScrollDirection } from '@/hooks/useScrollDirection';
import { cn } from '@/lib/utils';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScrollDirection();

  const isScrolled = scrollY > 50;
  const isHomePage = pathname === '/';

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  if (!mounted) {
    return null;
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled || !isHomePage
          ? 'bg-[#1A1A1A]/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4">
        <nav id="main-navigation" className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link href="/" className="relative z-10">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center"
            >
              <span className="font-playfair text-2xl lg:text-3xl font-bold text-[#C9A227]">
                {RESTAURANT_CONFIG.name}
              </span>
              <span className="text-[10px] lg:text-xs tracking-[0.3em] text-white/70 uppercase">
                Restaurant Gastronomique
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'relative text-sm tracking-wide transition-colors duration-300',
                  pathname === link.href
                    ? 'text-[#C9A227]'
                    : 'text-white/80 hover:text-white'
                )}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#C9A227]"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center gap-4">
            <Button
              asChild
              className="hidden sm:flex bg-[#C9A227] hover:bg-[#B8911F] text-[#1A1A1A] font-semibold"
            >
              <Link href="/reservation">Réserver</Link>
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" className="text-white">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-full sm:w-96 bg-[#1A1A1A] border-[#333] p-0"
              >
                <SheetTitle className="sr-only">Menu de navigation</SheetTitle>
                <div className="flex flex-col h-full">
                  {/* Mobile Header */}
                  <div className="flex items-center justify-between p-6 border-b border-[#333]">
                    <span className="font-playfair text-xl text-[#C9A227]">
                      {RESTAURANT_CONFIG.name}
                    </span>
                  </div>

                  {/* Mobile Navigation */}
                  <nav className="flex-1 p-6">
                    <ul className="space-y-4">
                      {NAV_LINKS.map((link, index) => (
                        <motion.li
                          key={link.href}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <Link
                            href={link.href}
                            className={cn(
                              'block py-3 text-lg transition-colors',
                              pathname === link.href
                                ? 'text-[#C9A227]'
                                : 'text-white/80 hover:text-white'
                            )}
                          >
                            {link.label}
                          </Link>
                        </motion.li>
                      ))}
                    </ul>
                  </nav>

                  {/* Mobile CTA */}
                  <div className="p-6 border-t border-[#333]">
                    <Button
                      asChild
                      className="w-full bg-[#C9A227] hover:bg-[#B8911F] text-[#1A1A1A] font-semibold py-6"
                    >
                      <Link href="/reservation">Réserver une table</Link>
                    </Button>
                  </div>

                  {/* Contact Info */}
                  <div className="p-6 text-center text-sm text-white/60">
                    <p>{RESTAURANT_CONFIG.phone}</p>
                    <p className="mt-1">{RESTAURANT_CONFIG.address.street}</p>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </motion.header>
  );
}
