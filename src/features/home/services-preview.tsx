import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { SectionHeading } from "@/components/shared/section-heading";
import { Stagger } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/features/services/service-card";
import { services } from "@/constants/services";

export function ServicesPreview() {
  return (
    <section className="section-y">
      <div className="container-dz">
        <SectionHeading
          eyebrow="What We Do"
          title="Comprehensive Financial Services"
          description="A complete finance function under one roof — delivered by specialists who know your industry inside out."
        />

        <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((service) => {
            const Icon = service.icon;
            return (
              <ServiceCard
                key={service.slug}
                slug={service.slug}
                title={service.title}
                summary={service.summary}
                icon={<Icon className="size-6" />}
                image={service.image}
              />
            );
          })}
        </Stagger>

        <div className="mt-10 flex justify-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/services">
              View All Services
              <ArrowRight />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
