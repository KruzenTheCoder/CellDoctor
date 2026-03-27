import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { FALLBACK_TIMESLOTS } from "@/lib/fallback-data";

export async function GET() {
  try {
    const slots = await prisma.timeSlot.findMany({
      where: { active: true },
      orderBy: { sortOrder: "asc" },
      select: { id: true, time: true },
    });
    return NextResponse.json(slots);
  } catch {
    return NextResponse.json(FALLBACK_TIMESLOTS);
  }
}
