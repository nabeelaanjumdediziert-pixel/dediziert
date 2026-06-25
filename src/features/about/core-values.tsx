import { SectionHeading } from "@/components/shared/section-heading";
import { Stagger, RevealItem } from "@/components/shared/reveal";
import { coreValues } from "@/constants/about";

export function CoreValues() {
  return (
    <section className="section-y">
      <div className="container-dz">
        <SectionHeading
          eyebrow="Core Values"
          title="The Principles We Stand By"
          description="The values that guide every decision, every engagement and every relationship."
        />

        <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {coreValues.map((value) => {
            const Icon = value.icon;
            return (
              <RevealItem
                key={value.title}
                className="group relative overflow-hidden rounded-2xl border border-border bg-white p-7 text-center shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-card"
              >
                {/* Gold top accent on hover */}
                <span
                  className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-gold to-gold-light transition-transform duration-300 group-hover:scale-x-100"
                  aria-hidden
                />
                {/* Faint hover glow */}
                <span
                  className="pointer-events-none absolute -top-10 left-1/2 size-32 -translate-x-1/2 rounded-full bg-gold/10 opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100"
                  aria-hidden
                />
                <span className="relative mx-auto flex size-14 items-center justify-center rounded-2xl bg-primary-50 text-primary ring-1 ring-primary/5 transition-colors duration-300 group-hover:bg-gold group-hover:text-primary">
                  <Icon className="size-7" />
                </span>
                <h3 className="relative mt-5 text-lg font-semibold text-primary">
                  {value.title}
                </h3>
                <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </RevealItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
