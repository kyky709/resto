'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Check,
  ExternalLink,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
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
import { RESTAURANT_CONFIG } from '@/lib/constants';

const contactSchema = z.object({
  name: z.string().min(2, 'Minimum 2 caractères'),
  email: z.string().email('Email invalide'),
  phone: z.string().optional(),
  subject: z.string().min(1, 'Veuillez sélectionner un sujet'),
  message: z.string().min(10, 'Minimum 10 caractères'),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const { ref: heroRef, isInView: heroInView } = useInView({ threshold: 0.3 });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSuccess(true);
    setIsSubmitting(false);
    form.reset();
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
          style={{ backgroundImage: 'url(/images/contact-hero.jpg)' }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4"
        >
          <span className="text-[#C9A227] text-sm tracking-[0.3em] uppercase mb-4 block">
            Nous Contacter
          </span>
          <h1 className="font-playfair text-4xl md:text-6xl text-white mb-6">
            Contact
          </h1>
          <div className="w-24 h-1 bg-[#C9A227] mx-auto" />
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-[#FAFAFA]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-playfair text-3xl text-[#1A1A1A] mb-8">
                Informations
              </h2>

              <div className="space-y-8">
                {/* Address */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#C9A227]/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#C9A227]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1A1A1A] mb-1">Adresse</h3>
                    <p className="text-[#666666]">
                      {RESTAURANT_CONFIG.address.street}
                      <br />
                      {RESTAURANT_CONFIG.address.postalCode}{' '}
                      {RESTAURANT_CONFIG.address.city}
                    </p>
                    <a
                      href={`https://maps.google.com/?q=${RESTAURANT_CONFIG.address.street}, ${RESTAURANT_CONFIG.address.city}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[#C9A227] text-sm mt-2 hover:underline"
                    >
                      Voir sur Google Maps
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#C9A227]/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-[#C9A227]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1A1A1A] mb-1">
                      Téléphone
                    </h3>
                    <a
                      href={`tel:${RESTAURANT_CONFIG.phone}`}
                      className="text-[#666666] hover:text-[#C9A227] transition-colors"
                    >
                      {RESTAURANT_CONFIG.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#C9A227]/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-[#C9A227]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1A1A1A] mb-1">Email</h3>
                    <a
                      href={`mailto:${RESTAURANT_CONFIG.email}`}
                      className="text-[#666666] hover:text-[#C9A227] transition-colors"
                    >
                      {RESTAURANT_CONFIG.email}
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#C9A227]/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-[#C9A227]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1A1A1A] mb-1">
                      Horaires d'ouverture
                    </h3>
                    <div className="text-[#666666] space-y-1">
                      <p>
                        <span className="font-medium">Déjeuner :</span>{' '}
                        {RESTAURANT_CONFIG.hours.lunch.start} -{' '}
                        {RESTAURANT_CONFIG.hours.lunch.end}
                      </p>
                      <p>
                        <span className="font-medium">Dîner :</span>{' '}
                        {RESTAURANT_CONFIG.hours.dinner.start} -{' '}
                        {RESTAURANT_CONFIG.hours.dinner.end}
                      </p>
                      <p className="text-sm text-[#999]">
                        Fermé {RESTAURANT_CONFIG.hours.closed.join(' et ')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Access Info */}
              <div className="mt-12 bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold text-[#1A1A1A] mb-4">Accès</h3>
                <div className="space-y-3 text-sm text-[#666666]">
                  <p>
                    <strong>Métro :</strong> Champs-Élysées - Clemenceau (lignes
                    1, 13)
                  </p>
                  <p>
                    <strong>Bus :</strong> Lignes 28, 42, 73, 83, 93
                  </p>
                  <p>
                    <strong>Parking :</strong> Parking Indigo Champs-Élysées à
                    100m
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="font-playfair text-3xl text-[#1A1A1A] mb-8">
                Envoyez-nous un message
              </h2>

              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 rounded-lg p-8 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <Check className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="font-playfair text-xl text-[#1A1A1A] mb-2">
                    Message envoyé !
                  </h3>
                  <p className="text-[#666666] mb-6">
                    Nous vous répondrons dans les plus brefs délais.
                  </p>
                  <Button
                    onClick={() => setIsSuccess(false)}
                    variant="outline"
                    className="border-[#1A1A1A]"
                  >
                    Envoyer un autre message
                  </Button>
                </motion.div>
              ) : (
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="bg-white rounded-lg p-8 shadow-sm space-y-6"
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

                    <div className="grid sm:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Téléphone</FormLabel>
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
                      <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Sujet *</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              value={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Sélectionnez un sujet" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="reservation">
                                  Réservation
                                </SelectItem>
                                <SelectItem value="information">
                                  Demande d'information
                                </SelectItem>
                                <SelectItem value="group">
                                  Groupe / Événement
                                </SelectItem>
                                <SelectItem value="feedback">
                                  Retour d'expérience
                                </SelectItem>
                                <SelectItem value="other">Autre</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message *</FormLabel>
                          <FormControl>
                            <Textarea
                              {...field}
                              placeholder="Votre message..."
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
                          Envoyer le message
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

      {/* Map Section */}
      <section className="h-[500px] relative">
        <div className="absolute inset-0 bg-gray-200">
          {/* Placeholder for Google Maps - requires API key */}
          <iframe
            src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.2159!2d${RESTAURANT_CONFIG.coordinates.lng}!3d${RESTAURANT_CONFIG.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDUyJzExLjMiTiAywrAxOCcyOC4xIkU!5e0!3m2!1sfr!2sfr!4v1234567890`}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localisation du restaurant"
          />
        </div>
        {/* Overlay Card */}
        <div className="absolute bottom-8 left-8 bg-white rounded-lg shadow-xl p-6 max-w-sm">
          <h3 className="font-playfair text-xl text-[#1A1A1A] mb-2">
            {RESTAURANT_CONFIG.name}
          </h3>
          <p className="text-[#666666] text-sm mb-4">
            {RESTAURANT_CONFIG.address.street}
            <br />
            {RESTAURANT_CONFIG.address.postalCode}{' '}
            {RESTAURANT_CONFIG.address.city}
          </p>
          <a
            href={`https://maps.google.com/?q=${RESTAURANT_CONFIG.address.street}, ${RESTAURANT_CONFIG.address.city}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#C9A227] text-sm font-medium hover:underline"
          >
            Obtenir l'itinéraire
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </section>
    </>
  );
}
