import Image from "next/image";
import Link from "next/link";
import { Sparkles, Check, ArrowRight } from "lucide-react";

import { Reveal, Stagger, RevealItem } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";
import { revealLeft, revealRight } from "@/lib/motion";

const solutions = [
  "Faster document processing and data-entry automation",
  "Real-time financial reporting",
  "Automated tax preparation and filing support",
  "AI-assisted audit checks and compliance monitoring",
  "Improved accuracy and operational efficiency",
];

export function AiSolutions() {
  return (
    <section className="section-y relative overflow-hidden bg-primary text-white">
      <div
        className="bg-grid pointer-events-none absolute inset-0 opacity-10"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 top-0 size-96 rounded-full bg-secondary/30 blur-3xl"
        aria-hidden
      />

      <div className="container-dz relative grid items-center gap-12 lg:grid-cols-2">
        <div>
          <Reveal variants={revealLeft}>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
              <Sparkles className="size-3.5 text-gold-light" />
              AI Integration — Today &amp; Tomorrow
            </span>
          </Reveal>

          <Reveal variants={revealLeft}>
            <h2 className="mt-6 text-3xl font-bold leading-tight text-white md:text-4xl">
              AI-Powered Solutions for{" "}
              <span className="text-gold-light">Modern Finance</span>
            </h2>
          </Reveal>

          <Reveal variants={revealLeft}>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-white/75">
              We pair professional expertise with intelligent automation to make
              your finance function faster, sharper and more reliable.
            </p>
          </Reveal>

          <Stagger className="mt-8 grid gap-3">
            {solutions.map((item) => (
              <RevealItem
                key={item}
                className="flex items-start gap-3 text-sm text-white/90 md:text-base"
              >
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-gold text-primary">
                  <Check className="size-4" />
                </span>
                {item}
              </RevealItem>
            ))}
          </Stagger>

          <Reveal variants={revealLeft}>
            <p className="mt-9 inline-flex flex-wrap items-center gap-x-3 gap-y-1 border-t border-white/15 pt-6 font-heading text-base font-semibold tracking-wide text-gold-light">
              Accounting <span className="text-white/40">&bull;</span> Taxation{" "}
              <span className="text-white/40">&bull;</span> Audit
              <span className="text-white/60">— Powered by AI</span>
            </p>
          </Reveal>

          <Reveal variants={revealLeft}>
            <Button asChild variant="light" size="lg" className="group mt-8">
              <Link href="/ai">
                Explore AI Capabilities
                <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </Reveal>
        </div>

        <Reveal variants={revealRight}>
          <div className="group relative aspect-4/3 overflow-hidden rounded-2xl shadow-card ring-1 ring-white/15">
            <Image
              src="/images/ai-solutions.png"
              alt="AI-powered financial analytics dashboard"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div
              className="absolute inset-0 bg-gradient-to-tr from-primary/50 to-transparent"
              aria-hidden
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
