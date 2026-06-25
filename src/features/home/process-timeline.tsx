import {
  MessagesSquare,
  ScanLine,
  BarChart3,
  Rocket,
  ClipboardList,
  LifeBuoy,
  type LucideIcon,
} from "lucide-react";

import { SectionHeading } from "@/components/shared/section-heading";
import { processSteps } from "@/constants/home";
import { cn } from "@/lib/utils";

const stepIcons: LucideIcon[] = [
  MessagesSquare,
  ScanLine,
  BarChart3,
  Rocket,
  ClipboardList,
  LifeBuoy,
];

export function ProcessTimeline({ className = "bg-white" }: { className?: string } = {}) {
  return (
    <section className={cn("section-y", className)}>
      <div className="container-dz">
        <SectionHeading
          eyebrow="Our Process"
          title="Simple, Straightforward Process"
          align="left"
        />

        <div className="mt-12 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-6">
          {processSteps.map((step, i) => {
            const Icon = stepIcons[i] ?? MessagesSquare;
            return (
              <div key={step.step} className="group">
                <span className="relative flex size-14 items-center justify-center rounded-2xl border border-border bg-white text-primary shadow-soft transition-transform duration-300 group-hover:scale-105">
                  <Icon className="size-6" />
                  <span className="absolute -right-1.5 -top-1.5 flex size-5 items-center justify-center rounded-full bg-gold font-heading text-[0.65rem] font-bold text-primary">
                    {step.step}
                  </span>
                </span>
                <h3 className="mt-5 text-base font-semibold text-primary">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
