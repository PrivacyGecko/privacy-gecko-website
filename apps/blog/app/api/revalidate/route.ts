import { revalidatePath, revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { slug, category, secret, type = "article" } = body;

    // Validate secret
    if (secret !== process.env.REVALIDATE_SECRET) {
      return NextResponse.json(
        { error: "Invalid secret", success: false },
        { status: 401 }
      );
    }

    const revalidatedPaths: string[] = [];

    // Revalidate based on type
    switch (type) {
      case "article":
        if (slug && category) {
          revalidatePath(`/${category}/${slug}`);
          revalidatedPaths.push(`/${category}/${slug}`);
        }
        if (category) {
          revalidatePath(`/${category}`);
          revalidatedPaths.push(`/${category}`);
        }
        revalidatePath("/");
        revalidatedPaths.push("/");
        break;

      case "category":
        if (category) {
          revalidatePath(`/${category}`);
          revalidatedPaths.push(`/${category}`);
        }
        revalidatePath("/");
        revalidatedPaths.push("/");
        break;

      case "all":
        // Revalidate all pages
        revalidatePath("/", "layout");
        revalidatedPaths.push("/ (all)");
        break;

      default:
        return NextResponse.json(
          { error: "Invalid revalidation type", success: false },
          { status: 400 }
        );
    }

    return NextResponse.json({
      success: true,
      revalidated: true,
      paths: revalidatedPaths,
      timestamp: Date.now(),
    });
  } catch (error) {
    console.error("Revalidation error:", error);
    return NextResponse.json(
      {
        error: "Revalidation failed",
        success: false,
        message: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

// Health check endpoint
export async function GET() {
  return NextResponse.json({
    status: "ok",
    message: "Revalidation API is running",
    timestamp: Date.now(),
  });
}
