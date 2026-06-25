import type { Metadata } from "next";

import { PageHero } from "@/components/shared/page-hero";
import { BlogList } from "@/features/blog/blog-list";
import { BlogCard } from "@/features/blog/blog-card";
import { Reveal } from "@/components/shared/reveal";
import { JsonLd } from "@/components/shared/json-ld";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { blogPosts } from "@/constants/blog";

export const metadata: Metadata = buildMetadata({
  title: "Blog & Insights",
  description:
    "Practical insights on tax, accounting, audit, payroll and business growth from the advisors at DEDIZIERT.",
  path: "/blog",
});

export default function BlogPage() {
  // Newest post is featured at the top and excluded from the list below.
  const featured = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  )[0];

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ])}
      />
      <PageHero
        eyebrow="Insights"
        title="Ideas to Help Your Business Grow"
        description="Practical guidance on tax, accounting, audit and strategy — written by the specialists who do this every day."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]}
      />

      <section className="section-y">
        <div className="container-dz">
          {/* Featured (newest) post */}
          <Reveal>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-primary-50 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              <span className="size-1.5 rounded-full bg-gold" aria-hidden />
              Featured
            </p>
            <BlogCard post={featured} featured />
          </Reveal>

          <h2 className="mb-8 mt-16 text-2xl font-bold text-primary">
            Latest Articles
          </h2>
          <BlogList featuredSlug={featured.slug} />
        </div>
      </section>
    </>
  );
}
