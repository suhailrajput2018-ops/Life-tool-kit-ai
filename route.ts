import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { toolRatings } from "@/db/schema";

export async function POST(req: NextRequest) {
  try {
    const { toolSlug, rating, feedback, helpful } = await req.json();
    if (!toolSlug) {
      return NextResponse.json({ error: "Missing tool slug" }, { status: 400 });
    }

    try {
      if (db) {
        await db.insert(toolRatings).values({
          toolSlug: String(toolSlug).slice(0, 100),
          rating: typeof rating === "number" ? Math.min(5, Math.max(1, rating)) : 5,
          feedback: feedback ? String(feedback).slice(0, 1000) : null,
          helpful: typeof helpful === "boolean" ? helpful : true,
        });
      }
    } catch {
      // fallback
    }

    return NextResponse.json({ success: true, message: "Thank you for your rating!" });
  } catch {
    return NextResponse.json({ error: "Rating failed" }, { status: 500 });
  }
}
