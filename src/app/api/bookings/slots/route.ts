import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const date = searchParams.get("date");

    if (!date) {
      return NextResponse.json({ error: "Date is required" }, { status: 400 });
    }

    const bookings = await prisma.booking.findMany({
      where: { date, status: { not: "cancelled" } },
      select: { timeSlot: true },
    });

    return NextResponse.json({
      bookedSlots: bookings.map((b) => b.timeSlot),
    });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch booked slots" }, { status: 500 });
  }
}
