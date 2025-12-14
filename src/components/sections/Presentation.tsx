'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useInView } from '@/hooks/useInView';
import { distinctions } from '@/lib/data';

export function Presentation() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-[#FAFAFA]">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
              <Image
                src="/images/chef-portrait.jpg"
                alt="Chef Pierre Dubois"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 border-2 border-[#C9A227] rounded-lg -z-10" />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            <span className="text-[#C9A227] text-sm tracking-[0.3em] uppercase mb-4 block">
              Notre histoire
            </span>
            <h2 className="font-playfair text-4xl lg:text-5xl text-[#1A1A1A] mb-6">
              L'Excellence de la{' '}
              <span className="text-[#C9A227]">Gastronomie Française</span>
            </h2>
            <div className="w-16 h-1 bg-[#C9A227] mb-8" />
            <p className="text-[#666666] leading-relaxed mb-6">
              Depuis 2015, L'Excellence incarne le raffinement de la cuisine française
              contemporaine. Notre Chef Pierre Dubois, formé dans les plus prestigieuses
              maisons étoilées, propose une carte qui célèbre les produits d'exception
              et le savoir-faire artisanal.
            </p>
            <p className="text-[#666666] leading-relaxed mb-8">
              Chaque plat raconte une histoire, celle de producteurs passionnés et
              d'une équipe dévouée à l'art culinaire. Notre engagement : vous offrir
              une expérience gastronomique inoubliable.
            </p>

            {/* Distinctions */}
            <div className="flex flex-wrap gap-6 mb-10">
              {distinctions.slice(0, 3).map((distinction, index) => (
                <motion.div
                  key={distinction.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-12 h-12 rounded-full bg-[#1A1A1A] flex items-center justify-center">
                    <span className="text-[#C9A227] text-lg">★</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#1A1A1A]">
                      {distinction.name}
                    </p>
                    <p className="text-xs text-[#666666]">{distinction.year}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Button
              asChild
              variant="outline"
              className="border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white"
            >
              <Link href="/a-propos">En savoir plus</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
