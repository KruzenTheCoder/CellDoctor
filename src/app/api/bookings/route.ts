import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { FALLBACK_SERVICES } from "@/lib/fallback-data";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      customerName,
      customerEmail,
      customerPhone,
      phoneBrand,
      phoneModel,
      serviceId,
      date,
      timeSlot,
      notes,
      totalPrice,
      paymentMethod,
    } = body;

    if (!customerName || !customerEmail || !customerPhone || !phoneBrand || !phoneModel || !serviceId || !date || !timeSlot) {
      return NextResponse.json({ error: "All required fields must be filled" }, { status: 400 });
    }

    let service = await prisma.service.findUnique({
      where: { id: serviceId },
      select: { id: true, price: true },
    });

    if (!service) {
      const fallbackService = FALLBACK_SERVICES.find((s) => s.id === serviceId);
      if (!fallbackService) {
        return NextResponse.json({ error: "Invalid service selected" }, { status: 400 });
      }

      // Ensure the selected fallback service exists so booking FK constraints do not fail.
      service = await prisma.service.upsert({
        where: { id: fallbackService.id },
        update: {},
        create: {
          id: fallbackService.id,
          name: fallbackService.name,
          description: fallbackService.description,
          price: fallbackService.price,
          duration: fallbackService.duration,
          icon: fallbackService.icon,
          active: true,
          sortOrder: 999,
        },
        select: { id: true, price: true },
      });
    }

    const existing = await prisma.booking.findFirst({
      where: { date, timeSlot, status: { not: "cancelled" } },
    });

    if (existing) {
      return NextResponse.json({ error: "This time slot is already booked" }, { status: 409 });
    }

    const booking = await prisma.booking.create({
      data: {
        customerName,
        customerEmail,
        customerPhone,
        phoneBrand,
        phoneModel,
        serviceId,
        date,
        timeSlot,
        notes: notes || "",
        totalPrice: Number.isFinite(totalPrice) ? totalPrice : service.price,
        status: "pending",
        paymentStatus: paymentMethod === "pay-online" ? "pending" : "pay-in-store",
      },
    });

    return NextResponse.json({ id: booking.id, status: "confirmed" }, { status: 201 });
  } catch (error) {
    console.error("Booking error:", error);
    return NextResponse.json({ error: "Failed to create booking" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const bookings = await prisma.booking.findMany({
      orderBy: { createdAt: "desc" },
      include: { service: true },
    });
    return NextResponse.json(bookings);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch bookings" }, { status: 500 });
  }
}
