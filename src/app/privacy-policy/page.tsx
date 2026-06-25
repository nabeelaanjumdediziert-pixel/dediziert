import type { Metadata } from "next";

import { PageHero } from "@/components/shared/page-hero";
import { LegalContent } from "@/features/legal/legal-content";
import { buildMetadata } from "@/lib/seo";
import {
  privacyPolicy,
  privacyEffectiveDate,
  privacyIntro,
  privacyOutro,
} from "@/constants/legal";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "How DEDIZIERT collects, uses and protects your personal information.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="Your privacy matters to us. This policy explains how we handle your information."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]}
      />
      <LegalContent
        sections={privacyPolicy}
        lastUpdated={privacyEffectiveDate}
        dateLabel="Effective Date"
        intro={privacyIntro}
        outro={privacyOutro}
      />
    </>
  );
}
