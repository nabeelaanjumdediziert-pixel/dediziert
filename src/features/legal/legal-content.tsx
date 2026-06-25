import { Reveal } from "@/components/shared/reveal";
import type { LegalSection } from "@/constants/legal";

/** kebab-case anchor id from a heading. */
const slug = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

export function LegalContent({
  sections,
  lastUpdated,
  dateLabel = "Last updated",
  intro,
  outro,
}: {
  sections: LegalSection[];
  lastUpdated: string;
  dateLabel?: string;
  intro?: string;
  outro?: string;
}) {
  return (
    <section className="section-y">
      <div className="container-dz max-w-5xl lg:grid lg:grid-cols-[210px_1fr] lg:gap-12">
        {/* Sticky table of contents (desktop) */}
        <aside className="hidden lg:block">
          <nav aria-label="On this page" className="sticky top-28">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              On this page
            </p>
            <ul className="mt-4 space-y-1.5 border-l border-border">
              {sections.map((section) => (
                <li key={section.heading}>
                  <a
                    href={`#${slug(section.heading)}`}
                    className="-ml-px block border-l-2 border-transparent py-1 pl-4 text-sm leading-snug text-muted-foreground transition-colors hover:border-gold hover:text-primary"
                  >
                    {section.heading}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Content */}
        <div>
          <p className="text-sm text-muted-foreground">
            {dateLabel}: {lastUpdated}
          </p>

          {intro && (
            <p className="mt-6 text-base leading-relaxed text-foreground">
              {intro}
            </p>
          )}

          <div className="mt-8 space-y-10">
            {sections.map((section) => (
              <Reveal key={section.heading}>
                <h2
                  id={slug(section.heading)}
                  className="scroll-mt-28 text-xl font-bold text-primary md:text-2xl"
                >
                  {section.heading}
                </h2>
                <div className="mt-3 space-y-3 text-base leading-relaxed text-muted-foreground">
                  {section.paragraphs.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
                {section.list && (
                  <ul className="mt-4 space-y-2">
                    {section.list.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-base leading-relaxed text-muted-foreground"
                      >
                        <span
                          className="mt-2.5 size-1.5 shrink-0 rounded-full bg-secondary"
                          aria-hidden
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                {section.note && (
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                    {section.note}
                  </p>
                )}
              </Reveal>
            ))}
          </div>

          {outro && (
            <p className="mt-10 border-t border-border pt-6 text-base font-medium leading-relaxed text-foreground">
              {outro}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
