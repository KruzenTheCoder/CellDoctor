import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET() {
  try {
    const slots = await prisma.timeSlot.findMany({
      where: { active: true },
      orderBy: { sortOrder: "asc" },
      select: { id: true, time: true },
    });
    return NextResponse.json(slots);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch time slots" }, { status: 500 });
  }
}
