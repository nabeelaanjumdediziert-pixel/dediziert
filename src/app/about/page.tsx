import type { Metadata } from "next";

import { PageHero } from "@/components/shared/page-hero";
import { Story } from "@/features/about/story";
import { MissionVision } from "@/features/about/mission-vision";
import { CoreValues } from "@/features/about/core-values";
import { Leadership } from "@/features/about/leadership";
import { JsonLd } from "@/components/shared/json-ld";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About Us",
  description:
    "Learn the story, mission and people behind DEDIZIERT — a firm dedicated to accuracy and committed to the growth of every business we serve.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      <PageHero
        title={
          <>
            Honest. Committed. That&rsquo;s <br />
            DEDIZIERT.
          </>
        }
        description="We are more than accountants. We are the financial partner ambitious businesses rely on to see clearly, decide confidently and grow sustainably."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />
      <Story />
      <MissionVision />
      <CoreValues />
      <Leadership />
    </>
  );
}
