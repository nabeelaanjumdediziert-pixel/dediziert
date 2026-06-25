import Image from "next/image";

import { SectionHeading } from "@/components/shared/section-heading";
import { Stagger, RevealItem } from "@/components/shared/reveal";
import { team } from "@/constants/about";
import { cn } from "@/lib/utils";

export function Leadership() {
  const count = team.length;
  // Small teams look better as wide horizontal cards; larger teams as a grid.
  const horizontal = count <= 2;

  return (
    <section className="section-y bg-white">
      <div className="container-dz">
        <SectionHeading
          eyebrow="Leadership"
          title="Meet the Team Behind DEDIZIERT"
          description="Seasoned professionals who combine deep expertise with a genuine commitment to your success."
          align="left"
        />

        {horizontal ? (
          <Stagger
            className={cn(
              "mt-12 grid gap-6",
              count === 1 ? "mx-auto max-w-2xl" : "md:grid-cols-2",
            )}
          >
            {team.map((member) => (
              <RevealItem
                key={member.name}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-background shadow-soft transition-shadow hover:shadow-card sm:flex-row"
              >
                <div className="relative aspect-square w-full overflow-hidden sm:aspect-auto sm:w-[44%] sm:shrink-0">
                  <Image
                    src={member.image}
                    alt={`Portrait of ${member.name}`}
                    fill
                    sizes="(min-width: 768px) 22vw, 100vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-center p-6 md:p-7">
                  <h3 className="text-xl font-semibold text-primary">
                    {member.name}
                  </h3>
                  <p className="mt-0.5 text-sm font-medium text-secondary">
                    {member.role}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {member.bio}
                  </p>
                </div>
              </RevealItem>
            ))}
          </Stagger>
        ) : (
          <Stagger
            className={cn(
              "mt-12 grid gap-6 sm:grid-cols-2",
              count === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4",
            )}
          >
            {team.map((member) => (
              <RevealItem
                key={member.name}
                className="group overflow-hidden rounded-2xl border border-border bg-background shadow-soft transition-shadow hover:shadow-card"
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={member.image}
                    alt={`Portrait of ${member.name}`}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-primary/70 to-transparent" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-primary">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium text-secondary">
                    {member.role}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {member.bio}
                  </p>
                </div>
              </RevealItem>
            ))}
          </Stagger>
        )}
      </div>
    </section>
  );
}
