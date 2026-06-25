import { SectionHeading } from "@/components/shared/section-heading";
import { Stagger, RevealItem } from "@/components/shared/reveal";
import { whyChooseUs } from "@/constants/home";
import { cn } from "@/lib/utils";

// Items at these indices render as wide "feature" tiles in the bento.
const FEATURED = new Set([0, 5]);

export function WhyChooseUs() {
  return (
    <section className="section-y bg-white">
      <div className="container-dz">
        <SectionHeading
          eyebrow="Why DEDIZIERT"
          title="Built on Trust, Driven by Results"
          description="Six reasons ambitious businesses choose us as their long-term financial partner."
        />

        <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((feature, i) => {
            const Icon = feature.icon;
            const featured = FEATURED.has(i);
            const num = String(i + 1).padStart(2, "0");
            return (
              <RevealItem
                key={feature.title}
                className={cn(
                  "group relative overflow-hidden rounded-2xl border p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card",
                  featured
                    ? "border-primary/15 bg-gradient-to-br from-primary-50 to-white shadow-soft sm:col-span-2 lg:col-span-2"
                    : "border-border bg-background hover:border-primary/20 hover:bg-white",
                )}
              >
                {/* Gold top accent (always on for featured, on hover otherwise) */}
                <span
                  className={cn(
                    "absolute inset-x-0 top-0 h-1 origin-left bg-gradient-to-r from-gold to-gold-light transition-transform duration-300",
                    featured ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
                  )}
                  aria-hidden
                />
                {/* Faint index watermark */}
                <span
                  className="pointer-events-none absolute right-5 top-3 font-heading text-5xl font-extrabold text-primary/[0.06]"
                  aria-hidden
                >
                  {num}
                </span>
                {/* Faint gold hover glow (non-featured) */}
                {!featured && (
                  <span
                    className="pointer-events-none absolute -bottom-10 -right-6 size-32 rounded-full bg-gold/10 opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100"
                    aria-hidden
                  />
                )}

                <span
                  className={cn(
                    "relative flex size-12 items-center justify-center rounded-xl shadow-soft transition-all duration-300 group-hover:scale-110",
                    featured
                      ? "bg-gold text-primary"
                      : "bg-primary text-white group-hover:bg-gold group-hover:text-primary",
                  )}
                >
                  <Icon className="size-6" />
                </span>
                <h3
                  className={cn(
                    "relative mt-5 font-semibold text-primary",
                    featured ? "text-xl" : "text-lg",
                  )}
                >
                  {feature.title}
                </h3>
                <p
                  className={cn(
                    "relative mt-2 text-sm leading-relaxed text-muted-foreground",
                    featured && "max-w-md",
                  )}
                >
                  {feature.description}
                </p>
              </RevealItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
