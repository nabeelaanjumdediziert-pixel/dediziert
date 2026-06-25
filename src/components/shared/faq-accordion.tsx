import { CircleQuestionMark } from "lucide-react";

import { Stagger, RevealItem } from "@/components/shared/reveal";
import { cn } from "@/lib/utils";
import type { Faq } from "@/types";

/**
 * FAQ list with every answer always visible (no collapsing). Questions and
 * answers reveal with a staggered scroll animation.
 */
export function FaqAccordion({
  faqs,
  className,
}: {
  faqs: Faq[];
  className?: string;
}) {
  return (
    <Stagger className={cn("grid gap-4", className)}>
      {faqs.map((faq) => (
        <RevealItem
          key={faq.question}
          className="group rounded-2xl border border-border bg-white p-6 shadow-soft transition-all duration-300 hover:border-primary/20 hover:shadow-card md:p-7"
        >
          <div className="flex items-start gap-4">
            <span
              className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary transition-colors group-hover:bg-primary group-hover:text-white"
              aria-hidden
            >
              <CircleQuestionMark className="size-4" />
            </span>
            <div>
              <h3 className="font-heading text-base font-bold text-primary md:text-lg">
                {faq.question}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">
                {faq.answer}
              </p>
            </div>
          </div>
        </RevealItem>
      ))}
    </Stagger>
  );
}
