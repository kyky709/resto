'use client';

import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { Calendar, User, ArrowLeft, Share2, Facebook, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
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

export default function ArticlePage() {
  const params = useParams();
  const slug = params.slug as string;

  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-playfair text-4xl text-[#1A1A1A] mb-4">
            Article non trouvé
          </h1>
          <Link href="/actualites">
            <Button variant="outline">Retour aux actualités</Button>
          </Link>
        </div>
      </div>
    );
  }

  const otherArticles = articles
    .filter((a) => a.id !== article.id)
    .slice(0, 2);

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px]">
        <div className="absolute inset-0">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        </div>
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Link
                href="/actualites"
                className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6"
              >
                <ArrowLeft className="w-4 h-4" />
                Retour aux actualités
              </Link>
              <Badge className={`${categoryColors[article.category]} mb-4`}>
                {categoryLabels[article.category]}
              </Badge>
              <h1 className="font-playfair text-4xl md:text-5xl text-white mb-6 max-w-4xl">
                {article.title}
              </h1>
              <div className="flex items-center gap-6 text-white/80">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {format(article.publishedAt, 'd MMMM yyyy', { locale: fr })}
                </span>
                <span className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  {article.author}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-[#FAFAFA]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-lg shadow-md p-8 lg:p-12">
                <div className="prose prose-lg max-w-none">
                  <p className="text-xl text-[#666666] leading-relaxed mb-8">
                    {article.excerpt}
                  </p>
                  <Separator className="my-8" />
                  {article.content.split('\n\n').map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-[#666666] leading-relaxed mb-6"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Share */}
                <Separator className="my-8" />
                <div className="flex items-center justify-between">
                  <span className="text-[#666666] text-sm">
                    Partager cet article
                  </span>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" className="text-[#666666]">
                      <Facebook className="w-5 h-5" />
                    </Button>
                    <Button variant="ghost" size="icon" className="text-[#666666]">
                      <Twitter className="w-5 h-5" />
                    </Button>
                    <Button variant="ghost" size="icon" className="text-[#666666]">
                      <Share2 className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </motion.article>

            {/* Sidebar */}
            <aside>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="sticky top-24"
              >
                {/* Reservation CTA */}
                <div className="bg-[#1A1A1A] rounded-lg p-8 mb-8">
                  <h3 className="font-playfair text-xl text-white mb-4">
                    Réservez votre table
                  </h3>
                  <p className="text-white/70 text-sm mb-6">
                    Venez découvrir notre cuisine d'exception dans un cadre
                    raffiné.
                  </p>
                  <Button
                    asChild
                    className="w-full bg-[#C9A227] hover:bg-[#B8911F] text-[#1A1A1A]"
                  >
                    <Link href="/reservation">Réserver</Link>
                  </Button>
                </div>

                {/* Other Articles */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="font-playfair text-xl text-[#1A1A1A] mb-6">
                    À lire également
                  </h3>
                  <div className="space-y-6">
                    {otherArticles.map((otherArticle) => (
                      <Link
                        key={otherArticle.id}
                        href={`/actualites/${otherArticle.slug}`}
                        className="group block"
                      >
                        <div className="flex gap-4">
                          <div className="relative w-20 h-20 rounded overflow-hidden flex-shrink-0">
                            <Image
                              src={otherArticle.image}
                              alt={otherArticle.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="font-medium text-[#1A1A1A] group-hover:text-[#C9A227] transition-colors line-clamp-2">
                              {otherArticle.title}
                            </h4>
                            <p className="text-sm text-[#999] mt-1">
                              {format(otherArticle.publishedAt, 'd MMM yyyy', {
                                locale: fr,
                              })}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </motion.div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
