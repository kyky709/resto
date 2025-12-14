import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const reservationSchema = z.object({
  date: z.string(),
  time: z.string(),
  guests: z.number().min(1).max(12),
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  occasion: z.enum(['birthday', 'business', 'romantic', 'other']).optional(),
  dietaryRestrictions: z.array(z.string()).optional(),
  specialRequests: z.string().optional(),
  seatingPreference: z.enum(['terrace', 'view', 'private']).optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate input
    const validatedData = reservationSchema.parse(body);

    // Generate confirmation number
    const confirmationNumber = `EXC${Date.now().toString(36).toUpperCase()}`;

    // In production, you would:
    // 1. Save to Supabase database
    // 2. Send confirmation email via Resend
    // 3. Optionally send SMS reminder

    // Simulated database save
    const reservation = {
      id: crypto.randomUUID(),
      ...validatedData,
      status: 'confirmed',
      confirmationNumber,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    // TODO: Save to Supabase
    // const { data, error } = await supabase
    //   .from('reservations')
    //   .insert(reservation)
    //   .select()
    //   .single();

    // TODO: Send confirmation email
    // await resend.emails.send({
    //   from: 'reservations@lexcellence-restaurant.fr',
    //   to: validatedData.email,
    //   subject: `Confirmation de réservation - ${confirmationNumber}`,
    //   html: confirmationEmailTemplate(reservation),
    // });

    return NextResponse.json({
      success: true,
      message: 'Réservation confirmée',
      data: {
        confirmationNumber,
        date: validatedData.date,
        time: validatedData.time,
        guests: validatedData.guests,
      },
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, message: 'Données invalides', errors: error.issues },
        { status: 400 }
      );
    }

    console.error('Reservation error:', error);
    return NextResponse.json(
      { success: false, message: 'Erreur lors de la réservation' },
      { status: 500 }
    );
  }
}
