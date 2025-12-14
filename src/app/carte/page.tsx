'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Download, Leaf, Wheat } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useInView } from '@/hooks/useInView';
import { menuItems } from '@/lib/data';
import { MENU_CATEGORIES, MENU_TYPES } from '@/lib/constants';

export default function CartePage() {
  const { ref: heroRef, isInView: heroInView } = useInView({ threshold: 0.3 });
  const [activeMenu, setActiveMenu] = useState('dinner');

  const filteredItems = menuItems.filter(
    (item) => item.menuType === activeMenu || activeMenu === 'all'
  );

  const getItemsByCategory = (category: string) =>
    filteredItems.filter((item) => item.category === category);

  const renderTag = (tag: string) => {
    switch (tag) {
      case 'vegetarian':
        return (
          <Badge
            variant="outline"
            className="bg-green-50 text-green-700 border-green-200"
          >
            <Leaf className="w-3 h-3 mr-1" />
            Végétarien
          </Badge>
        );
      case 'vegan':
        return (
          <Badge
            variant="outline"
            className="bg-green-50 text-green-700 border-green-200"
          >
            <Leaf className="w-3 h-3 mr-1" />
            Végan
          </Badge>
        );
      case 'gluten-free':
        return (
          <Badge
            variant="outline"
            className="bg-amber-50 text-amber-700 border-amber-200"
          >
            <Wheat className="w-3 h-3 mr-1" />
            Sans gluten
          </Badge>
        );
      default:
        return null;
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative h-[50vh] min-h-[400px] flex items-center justify-center"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/carte-hero.jpg)' }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4"
        >
          <span className="text-[#C9A227] text-sm tracking-[0.3em] uppercase mb-4 block">
            Nos Créations
          </span>
          <h1 className="font-playfair text-4xl md:text-6xl text-white mb-6">
            La Carte
          </h1>
          <div className="w-24 h-1 bg-[#C9A227] mx-auto" />
        </motion.div>
      </section>

      {/* Menu Section */}
      <section className="py-24 bg-[#FAFAFA]">
        <div className="container mx-auto px-4">
          {/* Menu Type Tabs */}
          <Tabs
            value={activeMenu}
            onValueChange={setActiveMenu}
            className="w-full"
          >
            <div className="flex justify-center mb-16">
              <TabsList className="bg-[#1A1A1A] p-1">
                <TabsTrigger
                  value="lunch"
                  className="data-[state=active]:bg-[#C9A227] data-[state=active]:text-[#1A1A1A] text-white px-8"
                >
                  Déjeuner
                </TabsTrigger>
                <TabsTrigger
                  value="dinner"
                  className="data-[state=active]:bg-[#C9A227] data-[state=active]:text-[#1A1A1A] text-white px-8"
                >
                  Dîner
                </TabsTrigger>
                <TabsTrigger
                  value="tasting"
                  className="data-[state=active]:bg-[#C9A227] data-[state=active]:text-[#1A1A1A] text-white px-8"
                >
                  Menu Dégustation
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value={activeMenu} className="mt-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeMenu}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Tasting Menu Special Display */}
                  {activeMenu === 'tasting' && (
                    <div className="max-w-3xl mx-auto text-center mb-16">
                      <h2 className="font-playfair text-3xl text-[#1A1A1A] mb-4">
                        Menu Dégustation
                      </h2>
                      <p className="text-[#666666] mb-4">
                        Un voyage culinaire en 7 services imaginé par le Chef
                        Pierre Dubois
                      </p>
                      <p className="text-3xl font-playfair text-[#C9A227]">
                        145€ par personne
                      </p>
                      <p className="text-sm text-[#666666] mt-2">
                        Accord mets et vins disponible : +75€
                      </p>
                    </div>
                  )}

                  {/* Menu Categories */}
                  <div className="space-y-16">
                    {MENU_CATEGORIES.map((category) => {
                      const items = getItemsByCategory(category.value);
                      if (items.length === 0) return null;

                      return (
                        <div key={category.value}>
                          <div className="text-center mb-10">
                            <h2 className="font-playfair text-3xl text-[#1A1A1A]">
                              {category.label}
                            </h2>
                            <div className="w-16 h-0.5 bg-[#C9A227] mx-auto mt-4" />
                          </div>

                          <div className="max-w-4xl mx-auto space-y-8">
                            {items.map((item, index) => (
                              <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group"
                              >
                                <div className="flex justify-between items-start gap-4">
                                  <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-2">
                                      <h3 className="font-playfair text-xl text-[#1A1A1A] group-hover:text-[#C9A227] transition-colors">
                                        {item.name}
                                      </h3>
                                      {item.isSignature && (
                                        <Badge className="bg-[#C9A227] text-[#1A1A1A]">
                                          Signature
                                        </Badge>
                                      )}
                                    </div>
                                    <p className="text-[#666666] text-sm leading-relaxed mb-2">
                                      {item.description}
                                    </p>
                                    <div className="flex gap-2 flex-wrap">
                                      {item.tags.map((tag) => (
                                        <span key={tag}>{renderTag(tag)}</span>
                                      ))}
                                    </div>
                                  </div>
                                  <div className="text-right">
                                    <span className="font-playfair text-xl text-[#C9A227]">
                                      {item.price}€
                                    </span>
                                  </div>
                                </div>
                                <div className="border-b border-dashed border-[#E5E5E5] mt-6" />
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              </AnimatePresence>
            </TabsContent>
          </Tabs>

          {/* Download Menu Button */}
          <div className="text-center mt-16">
            <Button
              variant="outline"
              className="border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white"
            >
              <Download className="w-4 h-4 mr-2" />
              Télécharger la carte (PDF)
            </Button>
          </div>

          {/* Allergens Notice */}
          <div className="max-w-2xl mx-auto mt-16 text-center">
            <p className="text-sm text-[#666666]">
              Nos plats peuvent contenir des allergènes. N'hésitez pas à
              informer notre équipe de vos allergies ou intolérances alimentaires
              lors de votre réservation ou à votre arrivée.
            </p>
          </div>
        </div>
      </section>

      {/* Wine Section */}
      <section className="py-24 bg-[#1A1A1A]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[#C9A227] text-sm tracking-[0.3em] uppercase mb-4 block">
                La Cave
              </span>
              <h2 className="font-playfair text-4xl text-white mb-6">
                Carte des Vins
              </h2>
              <div className="w-16 h-1 bg-[#C9A227] mb-8" />
              <p className="text-white/70 leading-relaxed mb-6">
                Notre sommelier Jean-Marc Petit a soigneusement sélectionné
                plus de 500 références des plus grands terroirs français et
                internationaux.
              </p>
              <p className="text-white/70 leading-relaxed mb-8">
                Des grands crus classés aux pépites de vignerons passionnés,
                notre cave saura accompagner parfaitement votre expérience
                gastronomique.
              </p>
              <Button className="bg-[#C9A227] hover:bg-[#B8911F] text-[#1A1A1A]">
                Découvrir la carte des vins
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src="/images/cave-vins.jpg"
                  alt="Cave à vins"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
