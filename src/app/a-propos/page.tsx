'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useInView } from '@/hooks/useInView';
import { teamMembers, distinctions } from '@/lib/data';
import { RESTAURANT_CONFIG } from '@/lib/constants';

export default function AboutPage() {
  const { ref: heroRef, isInView: heroInView } = useInView({ threshold: 0.3 });
  const { ref: storyRef, isInView: storyInView } = useInView({ threshold: 0.2 });
  const { ref: chefRef, isInView: chefInView } = useInView({ threshold: 0.2 });
  const { ref: teamRef, isInView: teamInView } = useInView({ threshold: 0.1 });
  const { ref: valuesRef, isInView: valuesInView } = useInView({ threshold: 0.2 });

  return (
    <>
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative h-[60vh] min-h-[500px] flex items-center justify-center"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/about-hero.jpg)' }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4"
        >
          <span className="text-[#C9A227] text-sm tracking-[0.3em] uppercase mb-4 block">
            Notre Histoire
          </span>
          <h1 className="font-playfair text-4xl md:text-6xl text-white mb-6">
            L'Excellence depuis 2015
          </h1>
          <div className="w-24 h-1 bg-[#C9A227] mx-auto" />
        </motion.div>
      </section>

      {/* Story Section */}
      <section ref={storyRef} className="py-24 bg-[#FAFAFA]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[#C9A227] text-sm tracking-[0.3em] uppercase mb-4 block">
                Notre Genèse
              </span>
              <h2 className="font-playfair text-4xl text-[#1A1A1A] mb-6">
                Une Passion pour l'Excellence
              </h2>
              <div className="w-16 h-1 bg-[#C9A227] mb-8" />
              <div className="space-y-6 text-[#666666] leading-relaxed">
                <p>
                  Fondé en 2015 par le Chef Pierre Dubois, L'Excellence est né
                  d'une vision ambitieuse : créer un lieu où la gastronomie
                  française traditionnelle rencontre l'innovation culinaire
                  contemporaine.
                </p>
                <p>
                  Après des années passées dans les cuisines des plus grandes
                  maisons étoilées de France et d'Europe, le Chef Dubois a
                  souhaité créer son propre espace d'expression, un restaurant
                  où chaque détail serait pensé pour offrir une expérience
                  inoubliable.
                </p>
                <p>
                  Dès sa première année, L'Excellence a été distingué par les
                  plus grands guides gastronomiques, confirmant la justesse de
                  cette vision et l'excellence de l'équipe réunie autour du
                  Chef.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
                <Image
                  src="/images/restaurant-interior.jpg"
                  alt="Intérieur du restaurant L'Excellence"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 w-48 h-48 border-2 border-[#C9A227] rounded-lg -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Chef Section */}
      <section ref={chefRef} className="py-24 bg-[#1A1A1A]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={chefInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8 }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src="/images/chef-portrait.jpg"
                  alt="Chef Pierre Dubois"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={chefInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <span className="text-[#C9A227] text-sm tracking-[0.3em] uppercase mb-4 block">
                Le Chef
              </span>
              <h2 className="font-playfair text-4xl text-white mb-6">
                Pierre Dubois
              </h2>
              <div className="w-16 h-1 bg-[#C9A227] mb-8" />
              <div className="space-y-6 text-white/70 leading-relaxed">
                <p>
                  Formé auprès des plus grands noms de la gastronomie française,
                  Pierre Dubois a forgé son art culinaire dans les cuisines
                  étoilées de Paris, Lyon et Monte-Carlo avant de s'installer à
                  son compte.
                </p>
                <p>
                  Sa philosophie culinaire repose sur le respect absolu des
                  produits, la maîtrise des techniques classiques et une
                  créativité constante. Chaque assiette est une invitation au
                  voyage, un équilibre parfait entre tradition et modernité.
                </p>
                <p className="italic text-[#C9A227]">
                  "La cuisine est un art qui se vit et se partage. Mon rôle est
                  de créer des émotions à travers les saveurs."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section ref={teamRef} className="py-24 bg-[#FAFAFA]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={teamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="text-[#C9A227] text-sm tracking-[0.3em] uppercase mb-4 block">
              Notre Équipe
            </span>
            <h2 className="font-playfair text-4xl text-[#1A1A1A] mb-6">
              Les Artisans de Votre Expérience
            </h2>
            <div className="w-16 h-1 bg-[#C9A227] mx-auto mb-6" />
            <p className="text-[#666666]">
              Une équipe passionnée, dévouée à vous offrir un service
              d'exception et une cuisine d'excellence.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                animate={teamInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-playfair text-xl text-[#1A1A1A] mb-2">
                  {member.name}
                </h3>
                <p className="text-[#C9A227] text-sm mb-4">{member.role}</p>
                <p className="text-[#666666] text-sm leading-relaxed">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values & Distinctions Section */}
      <section ref={valuesRef} className="py-24 bg-[#1A1A1A]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Values */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={valuesInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[#C9A227] text-sm tracking-[0.3em] uppercase mb-4 block">
                Nos Valeurs
              </span>
              <h2 className="font-playfair text-3xl text-white mb-8">
                Nos Engagements
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: 'Produits d\'Exception',
                    desc: 'Nous sélectionnons les meilleurs producteurs locaux et travaillons exclusivement des produits de saison.',
                  },
                  {
                    title: 'Durabilité',
                    desc: 'Notre engagement envers l\'environnement guide nos choix : circuits courts, zéro gaspillage, écoresponsabilité.',
                  },
                  {
                    title: 'Excellence du Service',
                    desc: 'Chaque détail compte pour faire de votre visite un moment inoubliable.',
                  },
                  {
                    title: 'Innovation',
                    desc: 'Nous réinventons continuellement notre carte tout en respectant les fondamentaux de la cuisine française.',
                  },
                ].map((value, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-2 h-2 mt-2 rounded-full bg-[#C9A227] flex-shrink-0" />
                    <div>
                      <h3 className="text-white font-semibold mb-1">
                        {value.title}
                      </h3>
                      <p className="text-white/60 text-sm">{value.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Distinctions */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={valuesInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-[#C9A227] text-sm tracking-[0.3em] uppercase mb-4 block">
                Distinctions
              </span>
              <h2 className="font-playfair text-3xl text-white mb-8">
                Nos Récompenses
              </h2>
              <div className="space-y-6">
                {distinctions.map((distinction) => (
                  <div
                    key={distinction.id}
                    className="flex items-center gap-6 bg-white/5 rounded-lg p-6"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#C9A227]/20 flex items-center justify-center">
                      <span className="text-[#C9A227] text-2xl">★</span>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">
                        {distinction.name}
                      </h3>
                      <p className="text-white/60 text-sm">
                        {distinction.description} • {distinction.year}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
