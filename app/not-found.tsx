import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <div className="mb-4 flex justify-center">
          <Image
            src="/images/PrivacyGecko_logo.png"
            alt="Privacy Gecko Logo"
            width={128}
            height={128}
            className="rounded-lg"
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">
          This page has vanished into the privacy void
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/" variant="primary" size="lg">
            Go Home
          </Button>
          <Button href="/products" variant="outline" size="lg">
            Browse Products
          </Button>
        </div>
      </div>
    </div>
  );
}
