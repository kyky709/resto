'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import {
  CalendarDays,
  Clock,
  Users,
  User,
  Mail,
  Phone,
  Check,
  ChevronRight,
  ChevronLeft,
  PartyPopper,
  UtensilsCrossed,
  MapPin,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Calendar } from '@/components/ui/calendar';
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
import {
  TIME_SLOTS,
  GUEST_OPTIONS,
  OCCASION_OPTIONS,
  DIETARY_OPTIONS,
  SEATING_OPTIONS,
  RESTAURANT_CONFIG,
} from '@/lib/constants';
import type { ReservationFormData } from '@/types';

// Validation Schema
const reservationSchema = z.object({
  date: z.date().refine((val) => val instanceof Date, 'Veuillez sélectionner une date'),
  time: z.string().min(1, 'Veuillez sélectionner une heure'),
  guests: z.string().min(1, 'Veuillez indiquer le nombre de couverts'),
  firstName: z.string().min(2, 'Minimum 2 caractères'),
  lastName: z.string().min(2, 'Minimum 2 caractères'),
  email: z.string().email('Email invalide'),
  phone: z.string().min(10, 'Numéro de téléphone invalide'),
  occasion: z.string().optional(),
  dietaryRestrictions: z.array(z.string()).optional(),
  specialRequests: z.string().optional(),
  seatingPreference: z.string().optional(),
});

type ReservationFormValues = z.infer<typeof reservationSchema>;

function ReservationContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { ref: heroRef, isInView: heroInView } = useInView({ threshold: 0.3 });

  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [confirmationNumber, setConfirmationNumber] = useState('');

  const form = useForm<ReservationFormValues>({
    resolver: zodResolver(reservationSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      specialRequests: '',
      dietaryRestrictions: [],
    },
  });

  // Pre-fill from URL params
  useEffect(() => {
    const dateParam = searchParams.get('date');
    const timeParam = searchParams.get('time');
    const guestsParam = searchParams.get('guests');

    if (dateParam) {
      form.setValue('date', new Date(dateParam));
    }
    if (timeParam) {
      form.setValue('time', timeParam);
    }
    if (guestsParam) {
      form.setValue('guests', guestsParam);
    }
  }, [searchParams, form]);

  const disabledDays = (day: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const dayOfWeek = day.getDay();
    return day < today || dayOfWeek === 0 || dayOfWeek === 1;
  };

  const onSubmit = async (data: ReservationFormValues) => {
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Generate confirmation number
    const confNum = `EXC${Date.now().toString(36).toUpperCase()}`;
    setConfirmationNumber(confNum);
    setIsSuccess(true);
    setIsSubmitting(false);
  };

  const nextStep = async () => {
    if (step === 1) {
      const isValid = await form.trigger(['date', 'time', 'guests']);
      if (isValid) setStep(2);
    } else if (step === 2) {
      const isValid = await form.trigger([
        'firstName',
        'lastName',
        'email',
        'phone',
      ]);
      if (isValid) setStep(3);
    }
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const steps = [
    { number: 1, title: 'Date & Heure', icon: CalendarDays },
    { number: 2, title: 'Informations', icon: User },
    { number: 3, title: 'Confirmation', icon: Check },
  ];

  if (isSuccess) {
    return (
      <>
        {/* Hero */}
        <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url(/images/reservation-hero.jpg)' }}
          />
          <div className="absolute inset-0 bg-black/60" />
        </section>

        {/* Success Message */}
        <section className="py-24 bg-[#FAFAFA]">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-2xl mx-auto text-center"
            >
              <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-8">
                <Check className="w-10 h-10 text-green-600" />
              </div>
              <h1 className="font-playfair text-4xl text-[#1A1A1A] mb-4">
                Réservation Confirmée
              </h1>
              <p className="text-[#666666] mb-8">
                Merci pour votre réservation. Vous recevrez un email de
                confirmation dans quelques instants.
              </p>

              <div className="bg-white rounded-lg shadow-lg p-8 text-left mb-8">
                <h2 className="font-playfair text-xl text-[#1A1A1A] mb-6">
                  Récapitulatif
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <CalendarDays className="w-5 h-5 text-[#C9A227]" />
                    <span>
                      {form.getValues('date') &&
                        format(form.getValues('date'), 'EEEE d MMMM yyyy', {
                          locale: fr,
                        })}
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Clock className="w-5 h-5 text-[#C9A227]" />
                    <span>{form.getValues('time')}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Users className="w-5 h-5 text-[#C9A227]" />
                    <span>{form.getValues('guests')} personne(s)</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <User className="w-5 h-5 text-[#C9A227]" />
                    <span>
                      {form.getValues('firstName')} {form.getValues('lastName')}
                    </span>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t">
                  <p className="text-sm text-[#666666]">
                    Numéro de confirmation
                  </p>
                  <p className="font-mono text-xl text-[#C9A227] font-bold">
                    {confirmationNumber}
                  </p>
                </div>
              </div>

              <div className="flex gap-4 justify-center">
                <Button
                  onClick={() => router.push('/')}
                  variant="outline"
                  className="border-[#1A1A1A]"
                >
                  Retour à l'accueil
                </Button>
                <Button
                  onClick={() => router.push('/carte')}
                  className="bg-[#C9A227] hover:bg-[#B8911F] text-[#1A1A1A]"
                >
                  Découvrir la carte
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative h-[40vh] min-h-[300px] flex items-center justify-center"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/reservation-hero.jpg)' }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4"
        >
          <span className="text-[#C9A227] text-sm tracking-[0.3em] uppercase mb-4 block">
            Réservation
          </span>
          <h1 className="font-playfair text-4xl md:text-5xl text-white mb-6">
            Réservez Votre Table
          </h1>
          <div className="w-24 h-1 bg-[#C9A227] mx-auto" />
        </motion.div>
      </section>

      {/* Reservation Form Section */}
      <section className="py-16 bg-[#FAFAFA]">
        <div className="container mx-auto px-4">
          {/* Progress Steps */}
          <div className="max-w-3xl mx-auto mb-12">
            <div className="flex justify-between">
              {steps.map((s, index) => (
                <div
                  key={s.number}
                  className="flex-1 flex flex-col items-center"
                >
                  <div className="relative flex items-center justify-center w-full">
                    {index > 0 && (
                      <div
                        className={`absolute left-0 right-1/2 h-0.5 top-5 -translate-y-1/2 ${
                          step > index ? 'bg-[#C9A227]' : 'bg-gray-200'
                        }`}
                      />
                    )}
                    {index < steps.length - 1 && (
                      <div
                        className={`absolute left-1/2 right-0 h-0.5 top-5 -translate-y-1/2 ${
                          step > s.number ? 'bg-[#C9A227]' : 'bg-gray-200'
                        }`}
                      />
                    )}
                    <div
                      className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center ${
                        step >= s.number
                          ? 'bg-[#C9A227] text-[#1A1A1A]'
                          : 'bg-gray-200 text-gray-500'
                      }`}
                    >
                      {step > s.number ? (
                        <Check className="w-5 h-5" />
                      ) : (
                        <s.icon className="w-5 h-5" />
                      )}
                    </div>
                  </div>
                  <span
                    className={`mt-2 text-sm ${
                      step >= s.number ? 'text-[#1A1A1A]' : 'text-gray-400'
                    }`}
                  >
                    {s.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="max-w-2xl mx-auto">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <AnimatePresence mode="wait">
                  {/* Step 1: Date & Time */}
                  {step === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="bg-white rounded-lg shadow-lg p-8"
                    >
                      <h2 className="font-playfair text-2xl text-[#1A1A1A] mb-6">
                        Choisissez votre créneau
                      </h2>

                      <div className="space-y-6">
                        {/* Date */}
                        <FormField
                          control={form.control}
                          name="date"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Date de réservation</FormLabel>
                              <FormControl>
                                <Calendar
                                  mode="single"
                                  selected={field.value}
                                  onSelect={field.onChange}
                                  disabled={disabledDays}
                                  className="rounded-md border mx-auto"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        {/* Time */}
                        <FormField
                          control={form.control}
                          name="time"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Heure</FormLabel>
                              <Select
                                onValueChange={field.onChange}
                                value={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Sélectionnez l'heure" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <div className="px-2 py-1 text-xs text-muted-foreground font-medium">
                                    Déjeuner
                                  </div>
                                  {TIME_SLOTS.lunch.map((slot) => (
                                    <SelectItem key={slot} value={slot}>
                                      {slot}
                                    </SelectItem>
                                  ))}
                                  <div className="px-2 py-1 text-xs text-muted-foreground font-medium mt-2">
                                    Dîner
                                  </div>
                                  {TIME_SLOTS.dinner.map((slot) => (
                                    <SelectItem key={slot} value={slot}>
                                      {slot}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        {/* Guests */}
                        <FormField
                          control={form.control}
                          name="guests"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Nombre de couverts</FormLabel>
                              <Select
                                onValueChange={field.onChange}
                                value={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Nombre de personnes" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {GUEST_OPTIONS.map((num) => (
                                    <SelectItem
                                      key={num}
                                      value={num.toString()}
                                    >
                                      {num}{' '}
                                      {num === 1 ? 'personne' : 'personnes'}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="flex justify-end mt-8">
                        <Button
                          type="button"
                          onClick={nextStep}
                          className="bg-[#C9A227] hover:bg-[#B8911F] text-[#1A1A1A]"
                        >
                          Continuer
                          <ChevronRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 2: Personal Info */}
                  {step === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="bg-white rounded-lg shadow-lg p-8"
                    >
                      <h2 className="font-playfair text-2xl text-[#1A1A1A] mb-6">
                        Vos informations
                      </h2>

                      <div className="space-y-6">
                        <div className="grid sm:grid-cols-2 gap-4">
                          <FormField
                            control={form.control}
                            name="firstName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Prénom *</FormLabel>
                                <FormControl>
                                  <Input {...field} placeholder="Votre prénom" />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="lastName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Nom *</FormLabel>
                                <FormControl>
                                  <Input {...field} placeholder="Votre nom" />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

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

                        <FormField
                          control={form.control}
                          name="occasion"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Occasion (optionnel)</FormLabel>
                              <Select
                                onValueChange={field.onChange}
                                value={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Sélectionnez une occasion" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {OCCASION_OPTIONS.map((option) => (
                                    <SelectItem
                                      key={option.value}
                                      value={option.value}
                                    >
                                      {option.label}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="seatingPreference"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>
                                Préférence de placement (optionnel)
                              </FormLabel>
                              <Select
                                onValueChange={field.onChange}
                                value={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Sélectionnez votre préférence" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {SEATING_OPTIONS.map((option) => (
                                    <SelectItem
                                      key={option.value}
                                      value={option.value}
                                    >
                                      {option.label}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="specialRequests"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>
                                Demandes particulières (optionnel)
                              </FormLabel>
                              <FormControl>
                                <Textarea
                                  {...field}
                                  placeholder="Allergies, régimes spéciaux, demandes particulières..."
                                  className="min-h-[100px]"
                                />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="flex justify-between mt-8">
                        <Button type="button" variant="outline" onClick={prevStep}>
                          <ChevronLeft className="w-4 h-4 mr-2" />
                          Retour
                        </Button>
                        <Button
                          type="button"
                          onClick={nextStep}
                          className="bg-[#C9A227] hover:bg-[#B8911F] text-[#1A1A1A]"
                        >
                          Continuer
                          <ChevronRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 3: Summary */}
                  {step === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="bg-white rounded-lg shadow-lg p-8"
                    >
                      <h2 className="font-playfair text-2xl text-[#1A1A1A] mb-6">
                        Récapitulatif
                      </h2>

                      <div className="space-y-6">
                        {/* Reservation Details */}
                        <div className="bg-gray-50 rounded-lg p-6 space-y-4">
                          <div className="flex items-center gap-4">
                            <CalendarDays className="w-5 h-5 text-[#C9A227]" />
                            <div>
                              <p className="text-sm text-gray-500">Date</p>
                              <p className="font-medium">
                                {form.getValues('date') &&
                                  format(
                                    form.getValues('date'),
                                    'EEEE d MMMM yyyy',
                                    { locale: fr }
                                  )}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                            <Clock className="w-5 h-5 text-[#C9A227]" />
                            <div>
                              <p className="text-sm text-gray-500">Heure</p>
                              <p className="font-medium">
                                {form.getValues('time')}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                            <Users className="w-5 h-5 text-[#C9A227]" />
                            <div>
                              <p className="text-sm text-gray-500">Couverts</p>
                              <p className="font-medium">
                                {form.getValues('guests')} personne(s)
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Contact Info */}
                        <div className="bg-gray-50 rounded-lg p-6 space-y-4">
                          <div className="flex items-center gap-4">
                            <User className="w-5 h-5 text-[#C9A227]" />
                            <div>
                              <p className="text-sm text-gray-500">Nom</p>
                              <p className="font-medium">
                                {form.getValues('firstName')}{' '}
                                {form.getValues('lastName')}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                            <Mail className="w-5 h-5 text-[#C9A227]" />
                            <div>
                              <p className="text-sm text-gray-500">Email</p>
                              <p className="font-medium">
                                {form.getValues('email')}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                            <Phone className="w-5 h-5 text-[#C9A227]" />
                            <div>
                              <p className="text-sm text-gray-500">Téléphone</p>
                              <p className="font-medium">
                                {form.getValues('phone')}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Policy */}
                        <div className="text-sm text-gray-500 space-y-2">
                          <p>
                            En confirmant cette réservation, vous acceptez nos
                            conditions générales et notre politique d'annulation.
                          </p>
                          <p>
                            <strong>Politique d'annulation :</strong> Toute
                            annulation doit être effectuée au moins 24h à
                            l'avance. Au-delà, des frais peuvent s'appliquer.
                          </p>
                        </div>
                      </div>

                      <div className="flex justify-between mt-8">
                        <Button type="button" variant="outline" onClick={prevStep}>
                          <ChevronLeft className="w-4 h-4 mr-2" />
                          Modifier
                        </Button>
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="bg-[#C9A227] hover:bg-[#B8911F] text-[#1A1A1A]"
                        >
                          {isSubmitting ? (
                            'Confirmation en cours...'
                          ) : (
                            <>
                              Confirmer la réservation
                              <Check className="w-4 h-4 ml-2" />
                            </>
                          )}
                        </Button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </Form>
          </div>

          {/* Contact Info */}
          <div className="max-w-2xl mx-auto mt-12 text-center">
            <p className="text-sm text-gray-500">
              Pour les groupes de plus de 12 personnes ou pour toute demande
              particulière, contactez-nous directement :
            </p>
            <p className="text-[#C9A227] font-semibold mt-2">
              {RESTAURANT_CONFIG.phone}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default function ReservationPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#FAFAFA]" />}>
      <ReservationContent />
    </Suspense>
  );
}
