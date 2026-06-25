import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  /** Light variant for use on dark backgrounds. */
  variant?: "dark" | "light";
  className?: string;
}

/** DEDIZIERT wordmark with a geometric "D" monogram. */
export function Logo({ variant = "dark", className }: LogoProps) {
  const isLight = variant === "light";
  return (
    <Link
      href="/"
      aria-label="DEDIZIERT home"
      className={cn("group inline-flex items-center gap-2.5", className)}
    >
      <span className="relative flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white shadow-soft ring-1 ring-black/5 transition-transform duration-300 group-hover:scale-105">
        <Image
          src="/logo/logoo.png"
          alt=""
          width={48}
          height={48}
          className="size-full object-cover"
          priority
        />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-heading text-lg font-extrabold tracking-tight",
            isLight ? "text-white" : "text-primary",
          )}
        >
          DEDIZIERT
        </span>
        <span
          className={cn(
            "hidden whitespace-nowrap text-[0.6rem] font-semibold tracking-tight sm:block",
            isLight ? "text-gold-light" : "text-gold-dark",
          )}
        >
          Accounting • Taxation • Audit — Powered by AI
        </span>
      </span>
    </Link>
  );
}
