'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import {
  Users,
  Calendar,
  Euro,
  Check,
  Send,
  PartyPopper,
  Building2,
  Heart,
  Briefcase,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useInView } from '@/hooks/useInView';
import { EVENT_TYPES, RESTAURANT_CONFIG } from '@/lib/constants';

const privatisationSchema = z.object({
  name: z.string().min(2, 'Minimum 2 caractères'),
  email: z.string().email('Email invalide'),
  phone: z.string().min(10, 'Numéro de téléphone invalide'),
  eventType: z.string().min(1, 'Veuillez sélectionner un type d\'événement'),
  eventDate: z.date().refine((val) => val instanceof Date, 'Veuillez sélectionner une date'),
  guestCount: z.string().min(1, 'Veuillez indiquer le nombre d\'invités'),
  budget: z.string().optional(),
  message: z.string().min(10, 'Minimum 10 caractères'),
});

type PrivatisationFormValues = z.infer<typeof privatisationSchema>;

const spaces = [
  {
    name: 'Salon Privé',
    capacity: '12 personnes',
    description: 'Un espace intime pour vos réunions ou dîners confidentiels.',
    image: '/images/privatisation/salon-prive.jpg',
  },
  {
    name: 'Salle de Réception',
    capacity: '40 personnes',
    description: 'Idéale pour vos séminaires d\'entreprise ou événements familiaux.',
    image: '/images/privatisation/salle-reception.jpg',
  },
  {
    name: 'Restaurant Complet',
    capacity: '80 personnes',
    description: 'Pour vos événements d\'exception, privatisez l\'ensemble du restaurant.',
    image: '/images/privatisation/restaurant-complet.jpg',
  },
];

const eventIcons: Record<string, React.ReactNode> = {
  wedding: <Heart className="w-6 h-6" />,
  seminar: <Building2 className="w-6 h-6" />,
  birthday: <PartyPopper className="w-6 h-6" />,
  corporate: <Briefcase className="w-6 h-6" />,
};

export default function PrivatisationPage() {
  const { ref: heroRef, isInView: heroInView } = useInView({ threshold: 0.3 });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<PrivatisationFormValues>({
    resolver: zodResolver(privatisationSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      guestCount: '',
      budget: '',
      message: '',
    },
  });

  const onSubmit = async (data: PrivatisationFormValues) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSuccess(true);
    setIsSubmitting(false);
  };

  return (
    <>
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative h-[60vh] min-h-[500px] flex items-center justify-center"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/privatisation-hero.jpg)' }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4"
        >
          <span className="text-[#C9A227] text-sm tracking-[0.3em] uppercase mb-4 block">
            Événements Privés
          </span>
          <h1 className="font-playfair text-4xl md:text-6xl text-white mb-6">
            Privatisation
          </h1>
          <div className="w-24 h-1 bg-[#C9A227] mx-auto mb-6" />
          <p className="text-white/80 max-w-2xl mx-auto">
            Organisez vos événements d'exception dans un cadre prestigieux.
            Notre équipe vous accompagne pour créer un moment inoubliable.
          </p>
        </motion.div>
      </section>

      {/* Spaces Section */}
      <section className="py-24 bg-[#FAFAFA]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="text-[#C9A227] text-sm tracking-[0.3em] uppercase mb-4 block">
              Nos Espaces
            </span>
            <h2 className="font-playfair text-4xl text-[#1A1A1A] mb-6">
              Des Lieux d'Exception
            </h2>
            <div className="w-16 h-1 bg-[#C9A227] mx-auto mb-6" />
            <p className="text-[#666666]">
              Découvrez nos différents espaces privatisables, adaptés à tous
              types d'événements.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {spaces.map((space, index) => (
              <motion.div
                key={space.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg group"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={space.image}
                    alt={space.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-playfair text-xl text-[#1A1A1A] mb-2">
                    {space.name}
                  </h3>
                  <p className="text-[#C9A227] text-sm mb-3 flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    {space.capacity}
                  </p>
                  <p className="text-[#666666] text-sm">{space.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-24 bg-[#1A1A1A]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="text-[#C9A227] text-sm tracking-[0.3em] uppercase mb-4 block">
              Événements
            </span>
            <h2 className="font-playfair text-4xl text-white mb-6">
              Quelles Que Soient Vos Envies
            </h2>
            <div className="w-16 h-1 bg-[#C9A227] mx-auto" />
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Heart className="w-8 h-8" />,
                title: 'Mariages',
                desc: 'Célébrez votre union dans un cadre élégant',
              },
              {
                icon: <Building2 className="w-8 h-8" />,
                title: 'Séminaires',
                desc: 'Des réunions productives dans un lieu inspirant',
              },
              {
                icon: <PartyPopper className="w-8 h-8" />,
                title: 'Anniversaires',
                desc: 'Fêtez vos moments importants',
              },
              {
                icon: <Briefcase className="w-8 h-8" />,
                title: 'Entreprise',
                desc: 'Impressionnez vos clients et collaborateurs',
              },
            ].map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-8 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
              >
                <div className="w-16 h-16 rounded-full bg-[#C9A227]/20 flex items-center justify-center mx-auto mb-4 text-[#C9A227]">
                  {event.icon}
                </div>
                <h3 className="font-playfair text-xl text-white mb-2">
                  {event.title}
                </h3>
                <p className="text-white/60 text-sm">{event.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Request Form */}
      <section className="py-24 bg-[#FAFAFA]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[#C9A227] text-sm tracking-[0.3em] uppercase mb-4 block">
                Demande de Devis
              </span>
              <h2 className="font-playfair text-4xl text-[#1A1A1A] mb-6">
                Concrétisons Votre Projet
              </h2>
              <div className="w-16 h-1 bg-[#C9A227] mb-8" />
              <p className="text-[#666666] leading-relaxed mb-8">
                Remplissez le formulaire ci-contre et notre équipe événementielle
                vous contactera dans les 48 heures pour discuter de votre projet
                et établir un devis personnalisé.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#C9A227]/10 flex items-center justify-center">
                    <Check className="w-5 h-5 text-[#C9A227]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1A1A1A]">
                      Menu sur mesure
                    </h3>
                    <p className="text-sm text-[#666666]">
                      Notre Chef compose un menu adapté à votre événement
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#C9A227]/10 flex items-center justify-center">
                    <Check className="w-5 h-5 text-[#C9A227]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1A1A1A]">
                      Service dédié
                    </h3>
                    <p className="text-sm text-[#666666]">
                      Une équipe à votre disposition exclusive
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#C9A227]/10 flex items-center justify-center">
                    <Check className="w-5 h-5 text-[#C9A227]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1A1A1A]">
                      Décoration personnalisée
                    </h3>
                    <p className="text-sm text-[#666666]">
                      Possibilité de personnaliser la décoration
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-white rounded-lg shadow-sm">
                <p className="text-sm text-[#666666] mb-2">
                  Pour toute question, contactez-nous :
                </p>
                <p className="text-[#C9A227] font-semibold">
                  {RESTAURANT_CONFIG.phone}
                </p>
                <p className="text-[#666666]">{RESTAURANT_CONFIG.email}</p>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {isSuccess ? (
                <div className="bg-green-50 rounded-lg p-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <Check className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="font-playfair text-xl text-[#1A1A1A] mb-2">
                    Demande envoyée !
                  </h3>
                  <p className="text-[#666666] mb-6">
                    Notre équipe vous contactera dans les 48 heures.
                  </p>
                  <Button
                    onClick={() => {
                      setIsSuccess(false);
                      form.reset();
                    }}
                    variant="outline"
                    className="border-[#1A1A1A]"
                  >
                    Envoyer une autre demande
                  </Button>
                </div>
              ) : (
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="bg-white rounded-lg p-8 shadow-md space-y-6"
                  >
                    <div className="grid sm:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Nom complet *</FormLabel>
                            <FormControl>
                              <Input {...field} placeholder="Votre nom" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email *</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                type="email"
                                placeholder="votre@email.com"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Téléphone *</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              type="tel"
                              placeholder="+33 6 12 34 56 78"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid sm:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="eventType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Type d'événement *</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              value={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Sélectionnez" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {EVENT_TYPES.map((type) => (
                                  <SelectItem key={type.value} value={type.value}>
                                    {type.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="eventDate"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Date souhaitée *</FormLabel>
                            <Popover>
                              <PopoverTrigger asChild>
                                <FormControl>
                                  <Button
                                    variant="outline"
                                    className="w-full justify-start text-left font-normal"
                                  >
                                    <Calendar className="mr-2 h-4 w-4" />
                                    {field.value ? (
                                      format(field.value, 'PPP', { locale: fr })
                                    ) : (
                                      <span className="text-muted-foreground">
                                        Choisir une date
                                      </span>
                                    )}
                                  </Button>
                                </FormControl>
                              </PopoverTrigger>
                              <PopoverContent className="w-auto p-0" align="start">
                                <CalendarComponent
                                  mode="single"
                                  selected={field.value}
                                  onSelect={field.onChange}
                                  disabled={(date) => date < new Date()}
                                  initialFocus
                                />
                              </PopoverContent>
                            </Popover>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="guestCount"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Nombre d'invités *</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                type="number"
                                placeholder="Ex: 50"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="budget"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Budget approximatif</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              value={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Sélectionnez" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="<5000">
                                  Moins de 5 000€
                                </SelectItem>
                                <SelectItem value="5000-10000">
                                  5 000€ - 10 000€
                                </SelectItem>
                                <SelectItem value="10000-20000">
                                  10 000€ - 20 000€
                                </SelectItem>
                                <SelectItem value=">20000">
                                  Plus de 20 000€
                                </SelectItem>
                              </SelectContent>
                            </Select>
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Décrivez votre projet *</FormLabel>
                          <FormControl>
                            <Textarea
                              {...field}
                              placeholder="Parlez-nous de votre événement, vos attentes, vos besoins particuliers..."
                              className="min-h-[150px]"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#C9A227] hover:bg-[#B8911F] text-[#1A1A1A]"
                    >
                      {isSubmitting ? (
                        'Envoi en cours...'
                      ) : (
                        <>
                          Demander un devis
                          <Send className="w-4 h-4 ml-2" />
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
