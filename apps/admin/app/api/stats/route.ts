import { NextResponse } from "next/server";
import { validateSession } from "@/lib/auth";
import {
  getArticleCountByStatus,
  getRecentlyUpdatedArticles,
  getAllCategories,
} from "@privacygecko/database";

export async function GET() {
  const isAuthenticated = await validateSession();
  if (!isAuthenticated) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const [articleCounts, recentArticles, categories] = await Promise.all([
      getArticleCountByStatus(),
      getRecentlyUpdatedArticles(5),
      getAllCategories(),
    ]);

    return NextResponse.json({
      articleCounts,
      recentArticles,
      categoryCount: categories.length,
    });
  } catch (error) {
    console.error("Failed to fetch stats:", error);
    return NextResponse.json(
      { error: "Failed to fetch stats" },
      { status: 500 }
    );
  }
}
