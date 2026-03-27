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
    const dates = await prisma.blockedDate.findMany({
      orderBy: { date: "asc" },
    });
    return NextResponse.json(dates);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch blocked dates" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  if (!checkAuth(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { date, reason } = await request.json();

    if (!date) {
      return NextResponse.json({ error: "Date is required" }, { status: 400 });
    }

    const existing = await prisma.blockedDate.findFirst({ where: { date } });
    if (existing) {
      return NextResponse.json({ error: "Date is already blocked" }, { status: 409 });
    }

    const blocked = await prisma.blockedDate.create({
      data: { date, reason: reason || "" },
    });

    return NextResponse.json(blocked, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to block date" }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  if (!checkAuth(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { id } = await request.json();

    if (!id) {
      return NextResponse.json({ error: "ID is required" }, { status: 400 });
    }

    await prisma.blockedDate.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Failed to unblock date" }, { status: 500 });
  }
}
