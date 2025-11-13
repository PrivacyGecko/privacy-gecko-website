"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AIRoadmapRedirectPage() {
  const router = useRouter();

  useEffect(() => {
    // Client-side redirect to the unified roadmap AI section
    router.replace("/roadmap#ai-development");
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Redirecting...</h1>
        <p className="text-gray-600">
          AI Roadmap has moved to the unified{" "}
          <a href="/roadmap#ai-development" className="text-gecko-green underline">
            Development Roadmap
          </a>
        </p>
      </div>
    </div>
  );
}
