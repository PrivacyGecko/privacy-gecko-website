import { NextResponse } from "next/server";
import { validateSession } from "@/lib/auth";
import { bulkPublishArticles } from "@privacygecko/database";
import { z } from "zod";

const bulkPublishSchema = z.object({
  ids: z.array(z.number().int().positive()).min(1),
});

export async function POST(request: Request) {
  const isAuthenticated = await validateSession();
  if (!isAuthenticated) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const validation = bulkPublishSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        { error: "Invalid request", details: validation.error.format() },
        { status: 400 }
      );
    }

    const count = await bulkPublishArticles(validation.data.ids);

    return NextResponse.json({
      success: true,
      count,
      message: `${count} article(s) published`,
    });
  } catch (error) {
    console.error("Bulk publish error:", error);
    return NextResponse.json(
      { error: "Failed to publish articles" },
      { status: 500 }
    );
  }
}
