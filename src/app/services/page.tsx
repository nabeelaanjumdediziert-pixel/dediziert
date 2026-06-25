import type { Metadata } from "next";

import { PageHero } from "@/components/shared/page-hero";
import { Stagger } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { ServiceCard } from "@/features/services/service-card";
import { JsonLd } from "@/components/shared/json-ld";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { services } from "@/constants/services";

export const metadata: Metadata = buildMetadata({
  title: "Services",
  description:
    "Accounting, bookkeeping, tax advisory, audit, payroll, business consulting and financial planning — a complete finance function from DEDIZIERT.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />
      <PageHero
        eyebrow="Our Services"
        title={
          <>
            Complete Financial Services,
            <br />
            One Trusted Partner
          </>
        }
        description="From day-to-day bookkeeping to board-level strategy, our specialists cover every financial need as your business grows."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />

      <section className="section-y">
        <div className="container-dz">
          <SectionHeading
            eyebrow="What We Offer"
            title="Services Built Around Your Business"
            description="Each engagement is tailored to your stage, sector and goals — delivered by a dedicated team."
          />
          <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <ServiceCard
                  key={service.slug}
                  slug={service.slug}
                  title={service.title}
                  summary={service.summary}
                  icon={<Icon className="size-6" />}
                />
              );
            })}
          </Stagger>
        </div>
      </section>
    </>
  );
}
