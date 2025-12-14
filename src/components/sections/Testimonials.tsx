'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useInView } from '@/hooks/useInView';
import { testimonials } from '@/lib/data';

export function Testimonials() {
  const { ref, isInView } = useInView({ threshold: 0.2 });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-[#722F37] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 border border-white/20 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 border border-white/20 rounded-full translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-[#C9A227] text-sm tracking-[0.3em] uppercase mb-4 block">
            Témoignages
          </span>
          <h2 className="font-playfair text-4xl lg:text-5xl text-white mb-6">
            Ce Que Disent Nos Clients
          </h2>
          <div className="w-16 h-1 bg-[#C9A227] mx-auto" />
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Quote Icon */}
            <Quote className="absolute -top-8 left-0 w-16 h-16 text-[#C9A227]/20" />

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="text-center px-8 md:px-16"
              >
                {/* Stars */}
                <div className="flex justify-center gap-1 mb-6">
                  {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-[#C9A227] text-[#C9A227]"
                    />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8 font-light italic">
                  "{testimonials[currentIndex].content}"
                </blockquote>

                {/* Author */}
                <div>
                  <p className="text-[#C9A227] font-semibold text-lg">
                    {testimonials[currentIndex].author}
                  </p>
                  <p className="text-white/60 text-sm mt-1">
                    {testimonials[currentIndex].date} •{' '}
                    {testimonials[currentIndex].source === 'google' && 'Google'}
                    {testimonials[currentIndex].source === 'tripadvisor' && 'TripAdvisor'}
                    {testimonials[currentIndex].source === 'internal' && 'Avis vérifié'}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex justify-center items-center gap-4 mt-12">
              <Button
                variant="ghost"
                size="icon"
                onClick={prevTestimonial}
                className="text-white/70 hover:text-white hover:bg-white/10"
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'w-6 bg-[#C9A227]'
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                    aria-label={`Voir témoignage ${index + 1}`}
                  />
                ))}
              </div>

              <Button
                variant="ghost"
                size="icon"
                onClick={nextTestimonial}
                className="text-white/70 hover:text-white hover:bg-white/10"
              >
                <ChevronRight className="w-6 h-6" />
              </Button>
            </div>
          </div>

          {/* Rating Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-6 mt-16"
          >
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#C9A227] text-[#C9A227]" />
                ))}
              </div>
              <span className="text-white text-sm">4.9/5 sur Google</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#C9A227] text-[#C9A227]" />
                ))}
              </div>
              <span className="text-white text-sm">4.8/5 sur TripAdvisor</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
