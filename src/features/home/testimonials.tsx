import Image from "next/image";
import { Quote, Star, ExternalLink } from "lucide-react";

import { SectionHeading } from "@/components/shared/section-heading";
import { testimonials } from "@/constants/home";

export function Testimonials() {
  return (
    <section className="section-y bg-background">
      <div className="container-dz">
        <SectionHeading
          eyebrow="Client Stories"
          title="Trusted by Businesses Like Yours"
          description="Don't just take our word for it — hear from the leaders we partner with every day."
          align="left"
        />

        <div className="mt-12 space-y-6">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="relative overflow-hidden rounded-2xl border border-border bg-white p-8 shadow-soft md:p-10"
            >
              <Quote
                className="absolute right-8 top-8 size-16 text-primary/5"
                aria-hidden
              />

              <div
                className="flex gap-1"
                aria-label={`${t.rating} out of 5 stars`}
              >
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="size-5 fill-gold text-gold"
                    aria-hidden
                  />
                ))}
              </div>

              <blockquote className="relative mt-5 space-y-3 text-sm leading-relaxed text-foreground md:text-base">
                {t.quote.split("\n\n").map((para, p) => (
                  <p key={p}>{para}</p>
                ))}
              </blockquote>

              <figcaption className="mt-6 flex items-center gap-4">
                {t.image ? (
                  <span className="relative size-12 shrink-0 overflow-hidden rounded-full ring-2 ring-primary/10">
                    <Image
                      src={t.image}
                      alt={t.name}
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </span>
                ) : (
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary font-heading text-lg font-bold text-white">
                    {t.name.charAt(0)}
                  </span>
                )}
                <span>
                  <span className="block font-semibold text-primary">
                    {t.name}
                  </span>
                  <span className="block text-sm text-muted-foreground">
                    {t.role}
                    {t.company ? `, ${t.company}` : ""}
                  </span>
                  {t.link && (
                    <a
                      href={t.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-flex items-center gap-1 text-xs font-semibold text-secondary transition-colors hover:text-primary"
                    >
                      Visit website
                      <ExternalLink className="size-3" />
                    </a>
                  )}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
