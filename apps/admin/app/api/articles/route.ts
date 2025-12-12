import { NextResponse } from "next/server";
import { validateSession } from "@/lib/auth";
import { createArticleSchema } from "@/lib/validations";
import {
  getAllArticlesAdmin,
  createArticle,
} from "@privacygecko/database";

export async function GET() {
  const isAuthenticated = await validateSession();
  if (!isAuthenticated) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const articles = await getAllArticlesAdmin();
    return NextResponse.json({ articles });
  } catch (error) {
    console.error("Failed to fetch articles:", error);
    return NextResponse.json(
      { error: "Failed to fetch articles" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  const isAuthenticated = await validateSession();
  if (!isAuthenticated) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const validation = createArticleSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        { error: "Validation failed", details: validation.error.format() },
        { status: 400 }
      );
    }

    const data = validation.data;

    // Calculate reading time and word count
    const wordCount = data.content.split(/\s+/).filter(Boolean).length;
    const readingTime = Math.ceil(wordCount / 200);

    const article = await createArticle({
      ...data,
      wordCount,
      readingTime,
      publishedAt: data.publishedAt ? new Date(data.publishedAt) : null,
    });

    return NextResponse.json({ article }, { status: 201 });
  } catch (error) {
    console.error("Failed to create article:", error);
    return NextResponse.json(
      { error: "Failed to create article" },
      { status: 500 }
    );
  }
}
