'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { Calendar, ArrowRight, Tag } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useInView } from '@/hooks/useInView';
import { articles } from '@/lib/data';

const categoryLabels: Record<string, string> = {
  evenement: 'Événement',
  menu: 'Menu',
  actualite: 'Actualité',
  distinction: 'Distinction',
};

const categoryColors: Record<string, string> = {
  evenement: 'bg-purple-100 text-purple-700',
  menu: 'bg-green-100 text-green-700',
  actualite: 'bg-blue-100 text-blue-700',
  distinction: 'bg-[#C9A227]/20 text-[#C9A227]',
};

export default function ActualitesPage() {
  const { ref: heroRef, isInView: heroInView } = useInView({ threshold: 0.3 });

  const sortedArticles = [...articles].sort(
    (a, b) => b.publishedAt.getTime() - a.publishedAt.getTime()
  );

  const featuredArticle = sortedArticles[0];
  const otherArticles = sortedArticles.slice(1);

  return (
    <>
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative h-[50vh] min-h-[400px] flex items-center justify-center"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/actualites-hero.jpg)' }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4"
        >
          <span className="text-[#C9A227] text-sm tracking-[0.3em] uppercase mb-4 block">
            Nos Nouvelles
          </span>
          <h1 className="font-playfair text-4xl md:text-6xl text-white mb-6">
            Actualités
          </h1>
          <div className="w-24 h-1 bg-[#C9A227] mx-auto" />
        </motion.div>
      </section>

      {/* Featured Article */}
      <section className="py-24 bg-[#FAFAFA]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <Link href={`/actualites/${featuredArticle.slug}`}>
              <div className="grid lg:grid-cols-2 gap-8 bg-white rounded-xl overflow-hidden shadow-lg group">
                <div className="relative aspect-[16/10] lg:aspect-auto">
                  <Image
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <Badge
                    className={`absolute top-4 left-4 ${
                      categoryColors[featuredArticle.category]
                    }`}
                  >
                    {categoryLabels[featuredArticle.category]}
                  </Badge>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-sm text-[#666666] mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {format(featuredArticle.publishedAt, 'd MMMM yyyy', {
                        locale: fr,
                      })}
                    </span>
                    <span>•</span>
                    <span>{featuredArticle.author}</span>
                  </div>
                  <h2 className="font-playfair text-3xl text-[#1A1A1A] mb-4 group-hover:text-[#C9A227] transition-colors">
                    {featuredArticle.title}
                  </h2>
                  <p className="text-[#666666] leading-relaxed mb-6">
                    {featuredArticle.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-2 text-[#C9A227] font-medium">
                    Lire la suite
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Other Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherArticles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={`/actualites/${article.slug}`}>
                  <article className="bg-white rounded-lg overflow-hidden shadow-md group h-full flex flex-col">
                    <div className="relative aspect-[16/10]">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <Badge
                        className={`absolute top-4 left-4 ${
                          categoryColors[article.category]
                        }`}
                      >
                        {categoryLabels[article.category]}
                      </Badge>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center gap-2 text-sm text-[#999] mb-3">
                        <Calendar className="w-4 h-4" />
                        {format(article.publishedAt, 'd MMMM yyyy', {
                          locale: fr,
                        })}
                      </div>
                      <h3 className="font-playfair text-xl text-[#1A1A1A] mb-3 group-hover:text-[#C9A227] transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-[#666666] text-sm leading-relaxed mb-4 flex-1">
                        {article.excerpt}
                      </p>
                      <span className="inline-flex items-center gap-2 text-[#C9A227] text-sm font-medium">
                        Lire la suite
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </article>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
