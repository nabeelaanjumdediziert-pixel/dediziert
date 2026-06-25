import { Reveal } from "@/components/shared/reveal";
import { revealLeft } from "@/lib/motion";
import {
  missionHeading,
  missionStatement,
  visionHeading,
  visionStatement,
  whyWeExist,
} from "@/constants/about";

const blocks = [
  {
    label: "Our Mission",
    heading: missionHeading,
    text: missionStatement,
    accent: "border-l-gold",
    labelColor: "text-gold-dark",
  },
  {
    label: "Our Vision",
    heading: visionHeading,
    text: visionStatement,
    accent: "border-l-secondary",
    labelColor: "text-secondary",
  },
];

export function MissionVision() {
  return (
    <section className="section-y bg-white">
      <div className="container-dz">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
            Who We Are &amp; Where We&rsquo;re Going
          </p>
        </Reveal>

        <div className="mt-12 space-y-12">
          {blocks.map((block) => (
            <Reveal key={block.label} variants={revealLeft}>
              <div className={`border-l-4 ${block.accent} pl-6 md:pl-8`}>
                <p
                  className={`text-xs font-bold uppercase tracking-[0.2em] ${block.labelColor}`}
                >
                  {block.label}
                </p>
                <h2 className="mt-3 font-heading text-2xl font-bold leading-snug text-primary md:text-3xl">
                  {block.heading}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                  {block.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14">
          <div className="rounded-2xl border border-primary/15 bg-primary-50 p-8 md:p-10">
            <h3 className="text-lg font-bold text-primary">Why We Exist</h3>
            <p className="mt-3 text-base leading-relaxed text-secondary">
              {whyWeExist}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
