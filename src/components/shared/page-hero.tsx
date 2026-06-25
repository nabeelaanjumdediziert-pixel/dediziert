import type { ReactNode } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { Reveal } from "./reveal";
import { cn } from "@/lib/utils";

interface Crumb {
  label: string;
  href?: string;
}

interface PageHeroProps {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  breadcrumbs?: Crumb[];
  className?: string;
}

/** Consistent header band for inner pages with breadcrumbs. */
export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs,
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-primary pb-16 pt-32 md:pb-20 md:pt-40",
        className,
      )}
    >
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-20" aria-hidden />
      <div
        className="pointer-events-none absolute -right-24 top-0 size-80 rounded-full bg-secondary/30 blur-3xl"
        aria-hidden
      />
      <div className="container-dz relative">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-5">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-white/60">
              {breadcrumbs.map((crumb, index) => (
                <li key={crumb.label} className="flex items-center gap-1.5">
                  {index > 0 && (
                    <ChevronRight className="size-3.5 text-white/40" aria-hidden />
                  )}
                  {crumb.href ? (
                    <Link
                      href={crumb.href}
                      className="transition-colors hover:text-white"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-white/90" aria-current="page">
                      {crumb.label}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        <Reveal className="max-w-3xl">
          {eyebrow && (
            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-white">
              <span className="size-1.5 rounded-full bg-secondary-light" aria-hidden />
              {eyebrow}
            </span>
          )}
          <h1 className="text-2xl font-bold leading-[1.2] text-white md:text-3xl">
            {title}
          </h1>
          {description && (
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/75">
              {description}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
