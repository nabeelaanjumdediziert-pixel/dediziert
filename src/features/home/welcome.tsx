import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Eye, ShieldCheck, Handshake, Quote } from "lucide-react";

import { Reveal, Stagger, RevealItem } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";
import { revealRight } from "@/lib/motion";

const paragraphs = [
  "At DEDIZIERT, we provide trusted accounting, taxation, audit, and financial management services to businesses and individuals worldwide. Our mission is simple: to make accounting straightforward, accurate, and stress-free.",
  "We help startups, SMEs, growing businesses, and individuals manage their finances with confidence while remaining compliant with ever-changing regulations. By combining professional expertise with AI-powered workflows, we deliver efficient, reliable, and cost-effective financial solutions.",
  "Whether you need support with bookkeeping, tax compliance, payroll, financial reporting, or business advisory services, our team is committed to understanding your goals and helping you achieve sustainable growth.",
];

const highlights = [
  { icon: Eye, label: "Transparency & Honesty" },
  { icon: ShieldCheck, label: "Integrity & Compliance" },
  { icon: Handshake, label: "Long-Term Partnership" },
];

export function Welcome() {
  return (
    <section className="section-y bg-white">
      <div className="container-dz">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text column */}
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full bg-primary-50 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
                <span className="size-1.5 rounded-full bg-gold" aria-hidden />
                Welcome to DEDIZIERT
              </span>
            </Reveal>

            <Reveal>
              <h2 className="mt-5 font-heading text-3xl font-bold leading-tight text-primary md:text-4xl">
                Financial Partners You Can Rely On
              </h2>
            </Reveal>

            <Stagger className="mt-6 space-y-4">
              <RevealItem>
                <p className="text-lg font-medium leading-relaxed text-foreground">
                  {paragraphs[0]}
                </p>
              </RevealItem>
              {paragraphs.slice(1).map((text) => (
                <RevealItem key={text}>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    {text}
                  </p>
                </RevealItem>
              ))}
            </Stagger>

            <Stagger className="mt-8 grid grid-cols-2 gap-4">
              {highlights.map(({ icon: Icon, label }) => (
                <RevealItem
                  key={label}
                  className="group flex items-center gap-3 rounded-xl border border-border bg-background p-3.5 transition-colors duration-300 hover:border-primary/20 hover:bg-white"
                >
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary text-white transition-colors duration-300 group-hover:bg-gold group-hover:text-primary">
                    <Icon className="size-4" />
                  </span>
                  <span className="text-sm font-semibold text-primary">
                    {label}
                  </span>
                </RevealItem>
              ))}
            </Stagger>

            <Reveal>
              <Button asChild size="lg" className="mt-8">
                <Link href="/about">
                  More About DEDIZIERT
                  <ArrowRight />
                </Link>
              </Button>
            </Reveal>
          </div>

          {/* Image column */}
          <Reveal variants={revealRight} className="lg:sticky lg:top-28">
            <div className="relative">
              <div
                className="pointer-events-none absolute -right-6 -top-6 size-40 rounded-full bg-gold/20 blur-3xl"
                aria-hidden
              />
              <div className="group relative aspect-4/5 overflow-hidden rounded-2xl shadow-card ring-1 ring-border">
                <Image
                  src="/images/welcome-financial.png"
                  alt="Financial reports and analytics on a laptop"
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent"
                  aria-hidden
                />
              </div>

              {/* Floating tagline card — light-blue frosted glass */}
              <div className="absolute -bottom-5 left-5 right-12 rounded-2xl border border-white/40 bg-secondary/35 p-4 shadow-card backdrop-blur-md md:left-8">
                <p className="text-sm font-semibold text-white">
                  Honest. Committed. That&rsquo;s DEDIZIERT.
                </p>
                <p className="mt-1 text-xs text-white/80">
                  Trusted by businesses and individuals worldwide.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Founder quote */}
        <Reveal className="mt-20">
          <figure className="relative overflow-hidden rounded-2xl border border-white/60 bg-gradient-to-br from-secondary/20 to-primary/10 px-6 py-12 text-center shadow-card ring-1 ring-secondary/10 backdrop-blur-xl md:px-16 md:py-16">
            <div
              className="pointer-events-none absolute -left-20 -top-20 size-64 rounded-full bg-secondary/25 blur-3xl"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -bottom-20 -right-16 size-64 rounded-full bg-gold/20 blur-3xl"
              aria-hidden
            />
            <Quote
              className="relative mx-auto size-9 text-gold-dark"
              aria-hidden
            />
            <blockquote className="relative mx-auto mt-5 max-w-3xl font-heading text-xl font-medium leading-relaxed text-primary md:text-2xl">
              &ldquo;My goal is not just to provide services, but to empower
              clients to become independent and self-reliant in managing their
              finances and business affairs.&rdquo;
            </blockquote>
            <figcaption className="relative mt-6 text-sm font-semibold uppercase tracking-wider text-gold-dark">
              The DEDIZIERT Promise
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
