import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET() {
  try {
    const blocked = await prisma.blockedDate.findMany({
      select: { date: true },
    });
    return NextResponse.json(blocked.map((b) => b.date));
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch blocked dates" }, { status: 500 });
  }
}
