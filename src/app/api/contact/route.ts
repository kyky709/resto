import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  subject: z.string().min(1),
  message: z.string().min(10),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate input
    const validatedData = contactSchema.parse(body);

    // In production, you would:
    // 1. Save to database
    // 2. Send notification email to restaurant
    // 3. Send confirmation email to user

    // TODO: Send email via Resend
    // await resend.emails.send({
    //   from: 'contact@lexcellence-restaurant.fr',
    //   to: 'contact@lexcellence-restaurant.fr',
    //   subject: `Nouveau message de contact - ${validatedData.subject}`,
    //   html: contactEmailTemplate(validatedData),
    // });

    // TODO: Send confirmation to user
    // await resend.emails.send({
    //   from: 'contact@lexcellence-restaurant.fr',
    //   to: validatedData.email,
    //   subject: 'Nous avons bien reçu votre message',
    //   html: contactConfirmationTemplate(validatedData),
    // });

    return NextResponse.json({
      success: true,
      message: 'Message envoyé avec succès',
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, message: 'Données invalides', errors: error.issues },
        { status: 400 }
      );
    }

    console.error('Contact form error:', error);
    return NextResponse.json(
      { success: false, message: 'Erreur lors de l\'envoi du message' },
      { status: 500 }
    );
  }
}
