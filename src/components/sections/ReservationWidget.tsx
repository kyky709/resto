'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { CalendarDays, Clock, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
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
import { useInView } from '@/hooks/useInView';
import { TIME_SLOTS, GUEST_OPTIONS } from '@/lib/constants';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

export function ReservationWidget() {
  const { ref, isInView } = useInView({ threshold: 0.2 });
  const router = useRouter();

  const [date, setDate] = useState<Date>();
  const [time, setTime] = useState<string>();
  const [guests, setGuests] = useState<string>();

  const handleSubmit = () => {
    const params = new URLSearchParams();
    if (date) params.set('date', format(date, 'yyyy-MM-dd'));
    if (time) params.set('time', time);
    if (guests) params.set('guests', guests);

    router.push(`/reservation?${params.toString()}`);
  };

  const allTimeSlots = [...TIME_SLOTS.lunch, ...TIME_SLOTS.dinner];

  // Disable past dates and Sundays/Mondays (closed days)
  const disabledDays = (day: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const dayOfWeek = day.getDay();
    return day < today || dayOfWeek === 0 || dayOfWeek === 1;
  };

  return (
    <section
      ref={ref}
      className="py-24 lg:py-32 bg-cover bg-center bg-fixed relative"
      style={{
        backgroundImage: 'url(/images/reservation-bg.jpg)',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#1A1A1A]/85" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-12">
            <span className="text-[#C9A227] text-sm tracking-[0.3em] uppercase mb-4 block">
              Réservation
            </span>
            <h2 className="font-playfair text-4xl lg:text-5xl text-white mb-6">
              Réservez Votre Table
            </h2>
            <div className="w-16 h-1 bg-[#C9A227] mx-auto mb-6" />
            <p className="text-white/70 max-w-lg mx-auto">
              Sélectionnez vos préférences et laissez-nous vous préparer
              une expérience gastronomique inoubliable.
            </p>
          </div>

          {/* Reservation Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-md rounded-2xl p-8 lg:p-12"
          >
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {/* Date Picker */}
              <div>
                <label className="text-white/80 text-sm mb-2 block">Date</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left bg-white/5 border-white/20 text-white hover:bg-white/10 hover:text-white"
                    >
                      <CalendarDays className="mr-2 h-4 w-4 text-[#C9A227]" />
                      {date ? (
                        format(date, 'PPP', { locale: fr })
                      ) : (
                        <span className="text-white/50">Choisir une date</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      disabled={disabledDays}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {/* Time Picker */}
              <div>
                <label className="text-white/80 text-sm mb-2 block">Heure</label>
                <Select value={time} onValueChange={setTime}>
                  <SelectTrigger className="w-full bg-white/5 border-white/20 text-white hover:bg-white/10">
                    <Clock className="mr-2 h-4 w-4 text-[#C9A227]" />
                    <SelectValue placeholder="Choisir l'heure" />
                  </SelectTrigger>
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
              </div>

              {/* Guests Picker */}
              <div>
                <label className="text-white/80 text-sm mb-2 block">
                  Couverts
                </label>
                <Select value={guests} onValueChange={setGuests}>
                  <SelectTrigger className="w-full bg-white/5 border-white/20 text-white hover:bg-white/10">
                    <Users className="mr-2 h-4 w-4 text-[#C9A227]" />
                    <SelectValue placeholder="Nombre de personnes" />
                  </SelectTrigger>
                  <SelectContent>
                    {GUEST_OPTIONS.map((num) => (
                      <SelectItem key={num} value={num.toString()}>
                        {num} {num === 1 ? 'personne' : 'personnes'}
                      </SelectItem>
                    ))}
                    <SelectItem value="13+">
                      Plus de 12 personnes
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Submit Button */}
            <Button
              onClick={handleSubmit}
              className="w-full bg-[#C9A227] hover:bg-[#B8911F] text-[#1A1A1A] font-semibold py-6 text-lg"
              disabled={!date || !time || !guests}
            >
              Continuer la réservation
            </Button>

            {/* Info */}
            <p className="text-white/50 text-sm text-center mt-6">
              Pour les groupes de plus de 12 personnes, merci de nous contacter directement.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
