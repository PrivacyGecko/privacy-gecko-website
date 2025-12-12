import { NextResponse } from "next/server";
import { validateSession } from "@/lib/auth";
import { unpublishArticle } from "@privacygecko/database";

type RouteParams = {
  params: Promise<{ id: string }>;
};

export async function POST(request: Request, { params }: RouteParams) {
  const isAuthenticated = await validateSession();
  if (!isAuthenticated) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { id } = await params;
    const articleId = parseInt(id, 10);

    if (isNaN(articleId)) {
      return NextResponse.json({ error: "Invalid article ID" }, { status: 400 });
    }

    const article = await unpublishArticle(articleId);

    if (!article) {
      return NextResponse.json({ error: "Article not found" }, { status: 404 });
    }

    return NextResponse.json({ article });
  } catch (error) {
    console.error("Failed to unpublish article:", error);
    return NextResponse.json(
      { error: "Failed to unpublish article" },
      { status: 500 }
    );
  }
}
