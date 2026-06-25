"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { aboutTimeline } from "@/constants/about";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function AboutTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();

  useGSAP(
    () => {
      const line = lineRef.current;
      if (!line) return;

      if (reduced) {
        gsap.set(line, { scaleY: 1 });
        return;
      }

      gsap.fromTo(
        line,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
            end: "bottom 70%",
            scrub: true,
          },
        },
      );
    },
    { dependencies: [reduced], scope: containerRef },
  );

  return (
    <section className="section-y">
      <div className="container-dz">
        <SectionHeading
          eyebrow="Our Journey"
          title="Milestones Along the Way"
          description="Two decades of growth, always anchored to the same commitment: accuracy and partnership."
        />

        <div ref={containerRef} className="relative mt-14 pl-2">
          {/* Track */}
          <div
            className="absolute left-[7px] top-2 h-[calc(100%-1rem)] w-0.5 bg-light-grey md:left-1/2 md:-translate-x-1/2"
            aria-hidden
          />
          {/* Animated fill */}
          <div
            ref={lineRef}
            className="absolute left-[7px] top-2 h-[calc(100%-1rem)] w-0.5 origin-top bg-primary md:left-1/2 md:-translate-x-1/2"
            aria-hidden
          />

          <ol className="space-y-10 md:space-y-0">
            {aboutTimeline.map((event, i) => {
              const isLeft = i % 2 === 0;
              return (
                <li
                  key={event.year}
                  className={cn(
                    "relative pl-10 md:flex md:items-center md:pl-0",
                    isLeft ? "md:justify-start" : "md:justify-end",
                    i > 0 && "md:-mt-8",
                  )}
                >
                  {/* Node */}
                  <span
                    className="absolute left-0 top-1.5 z-10 flex size-4 items-center justify-center rounded-full border-2 border-primary bg-white md:left-1/2 md:-translate-x-1/2"
                    aria-hidden
                  >
                    <span className="size-1.5 rounded-full bg-primary" />
                  </span>

                  <Reveal
                    className={cn(
                      "md:w-[calc(50%-2.5rem)]",
                      isLeft ? "md:pr-10 md:text-right" : "md:pl-10",
                    )}
                  >
                    <div className="rounded-2xl border border-border bg-white p-6 shadow-soft">
                      <span className="font-heading text-sm font-bold uppercase tracking-wider text-secondary">
                        {event.year}
                      </span>
                      <h3 className="mt-1 text-lg font-semibold text-primary">
                        {event.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {event.description}
                      </p>
                    </div>
                  </Reveal>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
