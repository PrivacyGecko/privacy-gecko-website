"use client";

import { Button } from "@/components/ui/Button";

export function MobileStickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 md:hidden z-50 shadow-lg">
      <Button
        href="/products/advisor"
        variant="primary"
        size="lg"
        className="w-full"
      >
        Try GeckoAdvisor - Free Forever
      </Button>
    </div>
  );
}
