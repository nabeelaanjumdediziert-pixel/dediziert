import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden bg-primary">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-15" aria-hidden />
      <div
        className="pointer-events-none absolute -right-24 top-10 size-80 rounded-full bg-secondary/30 blur-3xl"
        aria-hidden
      />
      <div className="container-dz relative text-center">
        <p className="font-heading text-7xl font-extrabold text-white/90 md:text-9xl">
          404
        </p>
        <h1 className="mt-4 text-2xl font-bold text-white md:text-3xl">
          Page Not Found
        </h1>
        <p className="mx-auto mt-3 max-w-md text-white/70">
          {
            "The page you're looking for doesn't exist or has been moved. Let's get you back on track."
          }
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild variant="light" size="lg">
            <Link href="/">
              <Home />
              Back to Home
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-white/40 text-white hover:bg-white hover:text-primary"
          >
            <Link href="/contact">
              <ArrowLeft />
              Contact Us
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
