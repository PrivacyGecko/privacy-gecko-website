import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <div className="mb-6 flex justify-center">
          <Image
            src="/images/privacygecko_logo_320x100.png"
            alt="Privacy Gecko Logo"
            width={320}
            height={100}
            className="h-20 w-auto"
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
