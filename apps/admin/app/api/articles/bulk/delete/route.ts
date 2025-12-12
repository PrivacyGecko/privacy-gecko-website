import { NextResponse } from "next/server";
import { validateSession } from "@/lib/auth";
import { bulkDeleteArticles } from "@privacygecko/database";
import { z } from "zod";

const bulkDeleteSchema = z.object({
  ids: z.array(z.number().int().positive()).min(1),
});

export async function POST(request: Request) {
  const isAuthenticated = await validateSession();
  if (!isAuthenticated) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const validation = bulkDeleteSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        { error: "Invalid request", details: validation.error.format() },
        { status: 400 }
      );
    }

    const count = await bulkDeleteArticles(validation.data.ids);

    return NextResponse.json({
      success: true,
      count,
      message: `${count} article(s) deleted`,
    });
  } catch (error) {
    console.error("Bulk delete error:", error);
    return NextResponse.json(
      { error: "Failed to delete articles" },
      { status: 500 }
    );
  }
}
