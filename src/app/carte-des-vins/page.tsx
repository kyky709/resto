'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Wine as WineIcon, Star, Grape } from 'lucide-react';
import { useInView } from '@/hooks/useInView';
import { wines } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const regions = [
  { value: 'all', label: 'Toutes les régions' },
  { value: 'champagne', label: 'Champagne' },
  { value: 'bourgogne', label: 'Bourgogne' },
  { value: 'bordeaux', label: 'Bordeaux' },
  { value: 'rhone', label: 'Vallée du Rhône' },
  { value: 'loire', label: 'Loire' },
];

const types = [
  { value: 'all', label: 'Tous' },
  { value: 'champagne', label: 'Champagnes' },
  { value: 'blanc', label: 'Blancs' },
  { value: 'rouge', label: 'Rouges' },
  { value: 'rose', label: 'Rosés' },
];

export default function WineListPage() {
  const { ref: heroRef, isInView: heroInView } = useInView({ threshold: 0.3 });
  const { ref: listRef, isInView: listInView } = useInView({ threshold: 0.1 });
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [selectedType, setSelectedType] = useState('all');

  const filteredWines = wines.filter((wine) => {
    const regionMatch = selectedRegion === 'all' || wine.region === selectedRegion;
    const typeMatch = selectedType === 'all' || wine.type === selectedType;
    return regionMatch && typeMatch;
  });

  const recommendedWines = wines.filter((wine) => wine.isRecommended);

  return (
    <>
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative h-[60vh] min-h-[500px] flex items-center justify-center"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/galerie/bar.jpg)' }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4"
        >
          <span className="text-[#C9A227] text-sm tracking-[0.3em] uppercase mb-4 block">
            Notre Sélection
          </span>
          <h1 className="font-playfair text-4xl md:text-6xl text-white mb-6">
            Carte des Vins
          </h1>
          <div className="w-24 h-1 bg-[#C9A227] mx-auto mb-6" />
          <p className="text-white/80 max-w-2xl mx-auto">
            Plus de 500 références sélectionnées par notre sommelier,
            Jean-Marc Petit, pour accompagner votre expérience gastronomique.
          </p>
        </motion.div>
      </section>

      {/* Sommelier Recommendations */}
      <section className="py-24 bg-[#722F37]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="text-[#C9A227] text-sm tracking-[0.3em] uppercase mb-4 block">
              Coups de Cœur
            </span>
            <h2 className="font-playfair text-4xl text-white mb-6">
              Sélection du Sommelier
            </h2>
            <div className="w-16 h-1 bg-[#C9A227] mx-auto mb-6" />
            <p className="text-white/70">
              Les vins que notre sommelier vous recommande particulièrement ce mois-ci.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendedWines.slice(0, 6).map((wine, index) => (
              <motion.div
                key={wine.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/10"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 fill-[#C9A227] text-[#C9A227]" />
                    <span className="text-[#C9A227] text-xs uppercase tracking-wider">
                      Recommandé
                    </span>
                  </div>
                  <span className="text-white/50 text-sm">{wine.year}</span>
                </div>
                <h3 className="font-playfair text-xl text-white mb-1">
                  {wine.name}
                </h3>
                <p className="text-[#C9A227] text-sm mb-2">{wine.domain}</p>
                <p className="text-white/60 text-sm mb-4">{wine.appellation}</p>
                <p className="text-white/70 text-sm mb-4 line-clamp-2">
                  {wine.description}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <span className="text-white font-semibold">{wine.priceBottle}€</span>
                  {wine.priceGlass && (
                    <span className="text-white/60 text-sm">
                      Verre : {wine.priceGlass}€
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Wine List */}
      <section ref={listRef} className="py-24 bg-[#FAFAFA]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={listInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <span className="text-[#C9A227] text-sm tracking-[0.3em] uppercase mb-4 block">
              Notre Cave
            </span>
            <h2 className="font-playfair text-4xl text-[#1A1A1A] mb-6">
              La Carte Complète
            </h2>
            <div className="w-16 h-1 bg-[#C9A227] mx-auto" />
          </motion.div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex flex-wrap gap-2">
              {regions.map((region) => (
                <Button
                  key={region.value}
                  variant={selectedRegion === region.value ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedRegion(region.value)}
                  className={cn(
                    selectedRegion === region.value
                      ? 'bg-[#722F37] hover:bg-[#5a252c] text-white'
                      : 'border-[#722F37] text-[#722F37] hover:bg-[#722F37] hover:text-white'
                  )}
                >
                  {region.label}
                </Button>
              ))}
            </div>
            <div className="w-px h-8 bg-gray-300 hidden md:block" />
            <div className="flex flex-wrap gap-2">
              {types.map((type) => (
                <Button
                  key={type.value}
                  variant={selectedType === type.value ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedType(type.value)}
                  className={cn(
                    selectedType === type.value
                      ? 'bg-[#C9A227] hover:bg-[#B8911F] text-[#1A1A1A]'
                      : 'border-[#C9A227] text-[#C9A227] hover:bg-[#C9A227] hover:text-[#1A1A1A]'
                  )}
                >
                  {type.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Wine Grid */}
          <div className="grid gap-4">
            {filteredWines.length === 0 ? (
              <p className="text-center text-gray-500 py-12">
                Aucun vin ne correspond à vos critères.
              </p>
            ) : (
              filteredWines.map((wine, index) => (
                <motion.div
                  key={wine.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={listInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="flex items-center gap-4 flex-1">
                      <div className={cn(
                        'w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0',
                        wine.type === 'rouge' && 'bg-[#722F37]/10',
                        wine.type === 'blanc' && 'bg-[#C9A227]/10',
                        wine.type === 'champagne' && 'bg-[#C9A227]/10',
                        wine.type === 'rose' && 'bg-pink-100'
                      )}>
                        {wine.type === 'champagne' ? (
                          <WineIcon className={cn(
                            'w-6 h-6',
                            'text-[#C9A227]'
                          )} />
                        ) : (
                          <Grape className={cn(
                            'w-6 h-6',
                            wine.type === 'rouge' && 'text-[#722F37]',
                            wine.type === 'blanc' && 'text-[#C9A227]',
                            wine.type === 'rose' && 'text-pink-500'
                          )} />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-playfair text-lg text-[#1A1A1A]">
                            {wine.name}
                          </h3>
                          <span className="text-[#666] text-sm">{wine.year}</span>
                          {wine.isRecommended && (
                            <Star className="w-4 h-4 fill-[#C9A227] text-[#C9A227]" />
                          )}
                        </div>
                        <p className="text-[#C9A227] text-sm">{wine.domain}</p>
                        <p className="text-[#666] text-sm">{wine.appellation}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6 md:gap-8">
                      <div className="hidden lg:block text-right">
                        <p className="text-[#666] text-sm">
                          Accords : {wine.pairing.slice(0, 2).join(', ')}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-[#1A1A1A]">{wine.priceBottle}€</p>
                        {wine.priceGlass && (
                          <p className="text-[#666] text-sm">Verre {wine.priceGlass}€</p>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </div>

          {/* Note */}
          <p className="text-center text-[#666] text-sm mt-12">
            Notre carte compte plus de 500 références. N'hésitez pas à demander conseil
            à notre sommelier pour un accord parfait avec votre menu.
          </p>
        </div>
      </section>
    </>
  );
}
