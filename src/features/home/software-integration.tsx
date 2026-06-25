import { SectionHeading } from "@/components/shared/section-heading";
import { Stagger, RevealItem } from "@/components/shared/reveal";

const platforms = [
  { name: "QuickBooks", mark: "qb", note: "Cloud & desktop bookkeeping", tint: "bg-[#2ca01c]" },
  { name: "Sage", mark: "S", note: "Accounting & payroll suite", tint: "bg-[#00dc06]" },
  { name: "Xero", mark: "X", note: "Real-time cloud accounting", tint: "bg-[#13b5ea]" },
  { name: "SAP", mark: "SAP", note: "Enterprise resource planning", tint: "bg-[#0faaff]" },
];

export function SoftwareIntegration() {
  return (
    <section className="section-y bg-background">
      <div className="container-dz">
        <SectionHeading
          eyebrow="Software Integration"
          title="Seamless With the Tools You Already Use"
          description="We are platform-agnostic and work fluently across the systems that run modern finance teams."
        />

        <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {platforms.map((platform) => (
            <RevealItem
              key={platform.name}
              className="group relative flex flex-col items-center justify-center overflow-hidden rounded-2xl border border-border bg-white p-8 text-center shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-card"
            >
              {/* Gold hover accent */}
              <span
                className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-gold to-gold-light transition-transform duration-300 group-hover:scale-x-100"
                aria-hidden
              />
              {/* Monogram tile (placeholder for an official logo) */}
              <span
                className={`flex size-14 items-center justify-center rounded-2xl font-heading text-lg font-extrabold uppercase text-white shadow-soft transition-transform duration-300 group-hover:scale-110 ${platform.tint}`}
                aria-hidden
              >
                {platform.mark}
              </span>
              <span className="mt-4 font-heading text-xl font-extrabold tracking-tight text-primary">
                {platform.name}
              </span>
              <span className="mt-1 text-xs text-muted-foreground">
                {platform.note}
              </span>
            </RevealItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
