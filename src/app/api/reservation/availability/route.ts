import { NextRequest, NextResponse } from 'next/server';
import { TIME_SLOTS } from '@/lib/constants';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const date = searchParams.get('date');

    if (!date) {
      return NextResponse.json(
        { success: false, message: 'Date requise' },
        { status: 400 }
      );
    }

    const requestedDate = new Date(date);
    const dayOfWeek = requestedDate.getDay();

    // Restaurant is closed on Sunday (0) and Monday (1)
    if (dayOfWeek === 0 || dayOfWeek === 1) {
      return NextResponse.json({
        success: true,
        data: {
          date,
          isClosed: true,
          message: 'Le restaurant est fermé ce jour',
          slots: [],
        },
      });
    }

    // In production, you would query Supabase to get actual bookings
    // and calculate remaining seats

    // Simulated availability data
    const lunchSlots = TIME_SLOTS.lunch.map((time) => ({
      time,
      available: Math.random() > 0.3, // 70% chance available
      remainingSeats: Math.floor(Math.random() * 8) + 1,
    }));

    const dinnerSlots = TIME_SLOTS.dinner.map((time) => ({
      time,
      available: Math.random() > 0.3,
      remainingSeats: Math.floor(Math.random() * 8) + 1,
    }));

    return NextResponse.json({
      success: true,
      data: {
        date,
        isClosed: false,
        slots: {
          lunch: lunchSlots,
          dinner: dinnerSlots,
        },
      },
    });
  } catch (error) {
    console.error('Availability check error:', error);
    return NextResponse.json(
      { success: false, message: 'Erreur lors de la vérification des disponibilités' },
      { status: 500 }
    );
  }
}
