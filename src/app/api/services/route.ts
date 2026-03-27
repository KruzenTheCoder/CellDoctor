import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { FALLBACK_SERVICES } from "@/lib/fallback-data";

export async function GET() {
  try {
    const services = await prisma.service.findMany({
      where: { active: true },
      orderBy: { sortOrder: "asc" },
      select: {
        id: true,
        name: true,
        description: true,
        price: true,
        duration: true,
        icon: true,
      },
    });
    return NextResponse.json(services);
  } catch {
    return NextResponse.json(FALLBACK_SERVICES);
  }
}
