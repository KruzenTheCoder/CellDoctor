import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { verifyToken } from "@/lib/auth";

function checkAuth(request: NextRequest) {
  const token = request.cookies.get("admin-token")?.value;
  if (!token) return false;
  return verifyToken(token) !== null;
}

export async function GET(request: NextRequest) {
  if (!checkAuth(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const slots = await prisma.timeSlot.findMany({
      orderBy: { sortOrder: "asc" },
    });
    return NextResponse.json(slots);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch time slots" }, { status: 500 });
  }
}

export async function PATCH(request: NextRequest) {
  if (!checkAuth(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { id, active } = await request.json();

    if (!id) {
      return NextResponse.json({ error: "Slot ID is required" }, { status: 400 });
    }

    const slot = await prisma.timeSlot.update({
      where: { id },
      data: { active },
    });

    return NextResponse.json(slot);
  } catch (error) {
    return NextResponse.json({ error: "Failed to update time slot" }, { status: 500 });
  }
}
