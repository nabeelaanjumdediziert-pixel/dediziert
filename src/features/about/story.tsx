import Image from "next/image";

import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { companyStory } from "@/constants/about";

export function Story() {
  return (
    <section className="section-y">
      <div className="container-dz grid items-center gap-12 lg:grid-cols-2">
        <Reveal className="relative">
          <div className="group relative aspect-4/3 overflow-hidden rounded-2xl shadow-card">
            <Image
              src="/images/team-duo.jpg"
              alt="The DEDIZIERT team collaborating in a modern office"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>
        </Reveal>

        <div>
          <SectionHeading
            eyebrow="Our Story"
            title="Dedicated Financial Partnership"
            align="left"
          />
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
            {companyStory.map((paragraph, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <p>{paragraph}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
