import type { Metadata } from "next";

import { PageHero } from "@/components/shared/page-hero";
import { LegalContent } from "@/features/legal/legal-content";
import { buildMetadata } from "@/lib/seo";
import {
  termsConditions,
  termsEffectiveDate,
  termsIntro,
} from "@/constants/legal";

export const metadata: Metadata = buildMetadata({
  title: "Terms & Conditions",
  description:
    "The terms and conditions governing your use of the DEDIZIERT website and services.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms & Conditions"
        description="Please read these terms carefully before using our website or services."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Terms & Conditions" }]}
      />
      <LegalContent
        sections={termsConditions}
        lastUpdated={termsEffectiveDate}
        dateLabel="Effective Date"
        intro={termsIntro}
      />
    </>
  );
}
