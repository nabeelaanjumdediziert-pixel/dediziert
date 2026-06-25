import { SectionHeading } from "@/components/shared/section-heading";
import { FaqAccordion } from "@/components/shared/faq-accordion";
import { homeFaqs } from "@/constants/home";

export function Faq() {
  return (
    <section className="section-y">
      <div className="container-dz grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions, Answered"
          description="Everything you need to know about working with DEDIZIERT. Can't find your answer? Reach out — we're happy to help."
          align="left"
          className="lg:sticky lg:top-28 lg:self-start"
        />
        <FaqAccordion faqs={homeFaqs} />
      </div>
    </section>
  );
}
