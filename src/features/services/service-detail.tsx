import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";

import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal, Stagger, RevealItem } from "@/components/shared/reveal";
import { FaqAccordion } from "@/components/shared/faq-accordion";
import { Button } from "@/components/ui/button";
import { ServiceCard } from "./service-card";
import { ProcessTimeline } from "@/features/home/process-timeline";
import { services } from "@/constants/services";
import type { Service } from "@/types";

export function ServiceDetail({ service }: { service: Service }) {
  const otherServices = services
    .filter((s) => s.slug !== service.slug)
    .slice(0, 4);

  return (
    <>
      {/* Overview */}
      <section className="section-y">
        <div className="container-dz grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="group relative aspect-4/3 overflow-hidden rounded-2xl shadow-card">
              <Image
                src={service.image}
                alt={`${service.title} services at DEDIZIERT`}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                preload
              />
            </div>
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="Overview"
              title={`${service.title} that drives clarity`}
              align="left"
            />
            <Reveal>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                {service.overview}
              </p>
              <Button asChild className="mt-8">
                <Link href="/contact">
                  Discuss your needs
                  <ArrowRight />
                </Link>
              </Button>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-y bg-white">
        <div className="container-dz">
          <SectionHeading
            eyebrow="Benefits"
            title="What You Get"
            description={`The tangible outcomes our ${service.title.toLowerCase()} service delivers.`}
          />
          <Stagger className="mt-12 grid gap-4 sm:grid-cols-2">
            {service.benefits.map((benefit) => (
              <RevealItem
                key={benefit}
                className="flex items-start gap-3 rounded-xl border border-border bg-background p-5"
              >
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                  <Check className="size-4" />
                </span>
                <span className="text-sm font-medium text-foreground">
                  {benefit}
                </span>
              </RevealItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Process (shared with the home page) */}
      <ProcessTimeline className="bg-background" />

      {/* FAQs */}
      <section className="section-y bg-white">
        <div className="container-dz grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            eyebrow="FAQ"
            title={`${service.title} Questions`}
            align="left"
            className="lg:sticky lg:top-28 lg:self-start"
          />
          <FaqAccordion faqs={service.faqs} />
        </div>
      </section>

      {/* Other services */}
      <section className="section-y">
        <div className="container-dz">
          <SectionHeading
            eyebrow="Explore More"
            title="Other Services You Might Need"
          />
          <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {otherServices.map((s) => {
              const Icon = s.icon;
              return (
                <ServiceCard
                  key={s.slug}
                  slug={s.slug}
                  title={s.title}
                  summary={s.summary}
                  icon={<Icon className="size-6" />}
                  image={s.image}
                />
              );
            })}
          </Stagger>
        </div>
      </section>
    </>
  );
}
