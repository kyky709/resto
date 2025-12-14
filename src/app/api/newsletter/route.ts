import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const newsletterSchema = z.object({
  email: z.string().email(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate input
    const validatedData = newsletterSchema.parse(body);

    // In production, you would:
    // 1. Check if email already exists
    // 2. Save to Supabase database
    // 3. Send welcome email

    // TODO: Check if email exists
    // const { data: existing } = await supabase
    //   .from('newsletter_subscribers')
    //   .select()
    //   .eq('email', validatedData.email)
    //   .single();

    // if (existing) {
    //   return NextResponse.json({
    //     success: false,
    //     message: 'Cette adresse email est déjà inscrite',
    //   }, { status: 400 });
    // }

    // TODO: Save to database
    // const { data, error } = await supabase
    //   .from('newsletter_subscribers')
    //   .insert({
    //     email: validatedData.email,
    //     subscribed_at: new Date().toISOString(),
    //     status: 'active',
    //   });

    // TODO: Send welcome email
    // await resend.emails.send({
    //   from: 'newsletter@lexcellence-restaurant.fr',
    //   to: validatedData.email,
    //   subject: 'Bienvenue dans la newsletter de L\'Excellence',
    //   html: welcomeNewsletterTemplate(),
    // });

    return NextResponse.json({
      success: true,
      message: 'Inscription à la newsletter réussie',
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, message: 'Email invalide', errors: error.issues },
        { status: 400 }
      );
    }

    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      { success: false, message: 'Erreur lors de l\'inscription' },
      { status: 500 }
    );
  }
}
