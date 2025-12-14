'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useInView } from '@/hooks/useInView';
import { galleryImages } from '@/lib/data';

export function GalleryPreview() {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const previewImages = galleryImages.slice(0, 6);

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-[#FAFAFA]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-[#C9A227] text-sm tracking-[0.3em] uppercase mb-4 block">
            Galerie
          </span>
          <h2 className="font-playfair text-4xl lg:text-5xl text-[#1A1A1A] mb-6">
            L'Art de la Table
          </h2>
          <div className="w-16 h-1 bg-[#C9A227] mx-auto mb-6" />
          <p className="text-[#666666]">
            Plongez dans l'univers visuel de notre restaurant,
            où chaque instant est capturé avec élégance.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
          {previewImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-lg group cursor-pointer ${
                index === 0 || index === 3 ? 'row-span-2 aspect-[3/4]' : 'aspect-square'
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <span className="text-white font-medium tracking-wider uppercase text-sm">
                  Voir
                </span>
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
            className="border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white"
          >
            <Link href="/galerie">Voir la galerie complète</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
