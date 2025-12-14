'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useInView } from '@/hooks/useInView';
import { signatureDishes } from '@/lib/data';

export function SignatureDishes() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-[#1A1A1A]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-[#C9A227] text-sm tracking-[0.3em] uppercase mb-4 block">
            Nos Créations
          </span>
          <h2 className="font-playfair text-4xl lg:text-5xl text-white mb-6">
            Plats Signature
          </h2>
          <div className="w-16 h-1 bg-[#C9A227] mx-auto mb-6" />
          <p className="text-white/70">
            Découvrez les créations emblématiques de notre Chef,
            véritables expressions de son art culinaire.
          </p>
        </motion.div>

        {/* Dishes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {signatureDishes.map((dish, index) => (
            <motion.div
              key={dish.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-6">
                <Image
                  src={dish.image || '/images/placeholder-dish.jpg'}
                  alt={dish.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Price Badge */}
                <div className="absolute top-4 right-4 bg-[#C9A227] text-[#1A1A1A] px-4 py-1 rounded-full font-semibold">
                  {dish.price}€
                </div>

                {/* Tags */}
                {dish.tags.length > 0 && (
                  <div className="absolute bottom-4 left-4 flex gap-2">
                    {dish.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="bg-white/90 text-[#1A1A1A] text-xs"
                      >
                        {tag === 'vegetarian' && 'Végétarien'}
                        {tag === 'vegan' && 'Végan'}
                        {tag === 'gluten-free' && 'Sans gluten'}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>

              <div className="text-center">
                <h3 className="font-playfair text-2xl text-white mb-3">
                  {dish.name}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {dish.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Button
            asChild
            variant="outline"
            className="border-[#C9A227] text-[#C9A227] hover:bg-[#C9A227] hover:text-[#1A1A1A]"
          >
            <Link href="/carte">Voir la carte complète</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
