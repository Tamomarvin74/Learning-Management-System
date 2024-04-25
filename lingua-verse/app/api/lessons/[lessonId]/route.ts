import db from "@/db/drizzle";
import { lessons } from "@/db/schema";
import { isAdmin } from "@/lib/admin";
import { eq, param } from "drizzle-orm";
import { NextResponse } from "next/server";

export const GET = async (
    req: Request,
    { params}: { params: { unitId: number }},
) => {
  if (!isAdmin()) {
    return new NextResponse("Unauthorized", { status: 403});
  }
  const data = await db.query.units.findFirst({
    where: eq(lessons.id, params.unitId),
  });

  return NextResponse.json(data);
};

export const PUT = async (
    req: Request,
    { params}: { params: { unitId: number }},
) => {
  if (!isAdmin()) {
    return new NextResponse("Unauthorized", { status: 403});
  }

  const body = await req.json();
  const data = await db.update(lessons).set({
    ...body
  }).where(eq(lessons.id, params.unitId)).returning();

  return NextResponse.json(data[0]);
};

export const DELETE = async (
    req: Request,
    { params}: { params: { unitId: number }},
) => {
  if (!isAdmin()) {
    return new NextResponse("Unauthorized", { status: 403});
  }
  const data = await db.delete(lessons)
  .where(eq(lessons.id, params.unitId)).returning();

  return NextResponse.json(data[0]);
};