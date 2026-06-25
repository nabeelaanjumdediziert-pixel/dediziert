import type { Metadata } from "next";
import Image from "next/image";
import { Check, ShieldCheck, UserCheck, Lock } from "lucide-react";

import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal, Stagger, RevealItem } from "@/components/shared/reveal";
import { FaqAccordion } from "@/components/shared/faq-accordion";
import { JsonLd } from "@/components/shared/json-ld";
import { buildMetadata, breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";
import { revealLeft, revealRight } from "@/lib/motion";
import { aiCapabilities, aiUseCases, aiFaqs } from "@/constants/ai";

export const metadata: Metadata = buildMetadata({
  title: "AI-Powered Accounting",
  description:
    "How DEDIZIERT pairs AI-driven automation with expert oversight to make accounting, tax and audit faster, sharper and more accurate.",
  path: "/ai",
});

const trustPoints = [
  { icon: UserCheck, label: "Human expert sign-off on every output" },
  { icon: Lock, label: "Encrypted, access-controlled data" },
  { icon: ShieldCheck, label: "Fully compliant, never used to train public models" },
];

export default function AiPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "AI", path: "/ai" },
        ])}
      />
      <JsonLd data={faqJsonLd(aiFaqs)} />

      <PageHero
        eyebrow="AI Integration"
        title="Accounting, Powered by AI"
        description="We combine intelligent automation with the judgement of qualified accountants — so your finance function is faster, more accurate and always under expert control."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "AI" }]}
      />

      {/* Capabilities */}
      <section className="section-y bg-white">
        <div className="container-dz">
          <SectionHeading
            eyebrow="What AI Does for You"
            title="Smarter Finance, End to End"
            description="From the first receipt to the final forecast, AI removes the manual grind across your entire finance function."
          />
          <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {aiCapabilities.map((cap) => {
              const Icon = cap.icon;
              return (
                <RevealItem
                  key={cap.title}
                  className="group rounded-2xl border border-border bg-background p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:bg-white hover:shadow-card"
                >
                  <span className="flex size-12 items-center justify-center rounded-xl bg-primary text-white shadow-soft transition-transform duration-300 group-hover:scale-110">
                    <Icon className="size-6" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-primary">
                    {cap.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {cap.description}
                  </p>
                </RevealItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      {/* AI + Human */}
      <section className="section-y relative overflow-hidden bg-primary text-white">
        <div className="bg-grid pointer-events-none absolute inset-0 opacity-10" aria-hidden />
        <div className="container-dz relative grid items-center gap-12 lg:grid-cols-2">
          <Reveal variants={revealLeft}>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white">
              The DEDIZIERT Approach
            </span>
            <h2 className="mt-6 text-3xl font-bold leading-tight md:text-4xl">
              AI Does the Heavy Lifting.
              <span className="mt-1 block text-gold-light">
                Experts Make the Call.
              </span>
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-white/75">
              Automation processes the volume and flags what matters — then a
              qualified accountant reviews, interprets and signs off. You get the
              speed of AI with the assurance of human expertise.
            </p>
            <Stagger className="mt-8 grid gap-3">
              {trustPoints.map(({ icon: Icon, label }) => (
                <RevealItem
                  key={label}
                  className="flex items-center gap-3 text-sm text-white/90 md:text-base"
                >
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-gold text-primary">
                    <Icon className="size-4" />
                  </span>
                  {label}
                </RevealItem>
              ))}
            </Stagger>
          </Reveal>

          <Reveal variants={revealRight}>
            <div className="relative aspect-4/3 overflow-hidden rounded-2xl shadow-card ring-1 ring-white/15">
              <Image
                src="/images/ai-solutions.png"
                alt="AI-assisted financial workflow"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* AI across services */}
      <section className="section-y bg-white">
        <div className="container-dz">
          <SectionHeading
            eyebrow="Where It Applies"
            title="AI Across Every Service"
            description="The same intelligent layer strengthens each part of the work we do for you."
          />
          <div className="mt-12 grid items-center gap-12 lg:grid-cols-2">
            <Reveal variants={revealLeft}>
              <div className="group relative aspect-4/3 overflow-hidden rounded-2xl shadow-card ring-1 ring-border">
                <Image
                  src="/images/ai-tech.jpg"
                  alt="AI technology powering modern accounting"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
            </Reveal>

            <Stagger className="grid gap-5">
              {aiUseCases.map((u) => (
                <RevealItem
                  key={u.area}
                  className="flex items-start gap-4 rounded-2xl border border-border bg-background p-6"
                >
                  <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                    <Check className="size-4" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-primary">{u.area}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {u.text}
                    </p>
                  </div>
                </RevealItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-y">
        <div className="container-dz grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            eyebrow="FAQ"
            title="AI, Answered"
            align="left"
            className="lg:sticky lg:top-28 lg:self-start"
          />
          <FaqAccordion faqs={aiFaqs} />
        </div>
      </section>
    </>
  );
}
