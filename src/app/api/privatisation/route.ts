import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const privatisationSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  eventType: z.enum(['wedding', 'seminar', 'birthday', 'corporate', 'other']),
  eventDate: z.string(),
  guestCount: z.number().min(1),
  budget: z.string().optional(),
  message: z.string().min(10),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate input
    const validatedData = privatisationSchema.parse(body);

    // Generate request number
    const requestNumber = `PVT${Date.now().toString(36).toUpperCase()}`;

    // In production, you would:
    // 1. Save to Supabase database
    // 2. Send notification email to events team
    // 3. Send confirmation email to user

    // TODO: Save to database
    // const { data, error } = await supabase
    //   .from('privatisation_requests')
    //   .insert({
    //     ...validatedData,
    //     request_number: requestNumber,
    //     status: 'pending',
    //     created_at: new Date().toISOString(),
    //   });

    // TODO: Send notification email to events team
    // await resend.emails.send({
    //   from: 'privatisation@lexcellence-restaurant.fr',
    //   to: 'evenements@lexcellence-restaurant.fr',
    //   subject: `Nouvelle demande de privatisation - ${requestNumber}`,
    //   html: privatisationNotificationTemplate(validatedData),
    // });

    // TODO: Send confirmation email to user
    // await resend.emails.send({
    //   from: 'privatisation@lexcellence-restaurant.fr',
    //   to: validatedData.email,
    //   subject: 'Demande de privatisation reçue',
    //   html: privatisationConfirmationTemplate(validatedData, requestNumber),
    // });

    return NextResponse.json({
      success: true,
      message: 'Demande de privatisation envoyée',
      data: {
        requestNumber,
      },
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, message: 'Données invalides', errors: error.issues },
        { status: 400 }
      );
    }

    console.error('Privatisation request error:', error);
    return NextResponse.json(
      { success: false, message: 'Erreur lors de l\'envoi de la demande' },
      { status: 500 }
    );
  }
}
