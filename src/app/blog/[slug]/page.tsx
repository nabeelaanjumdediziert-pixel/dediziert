import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock, Calendar, ArrowLeft, Tag } from "lucide-react";

import { PageHero } from "@/components/shared/page-hero";
import { BlogPostBody, slugifyHeading } from "@/features/blog/blog-post-body";
import { BlogCard } from "@/features/blog/blog-card";
import { SectionHeading } from "@/components/shared/section-heading";
import { Stagger, RevealItem } from "@/components/shared/reveal";
import { JsonLd } from "@/components/shared/json-ld";
import { buildMetadata, breadcrumbJsonLd, articleJsonLd } from "@/lib/seo";
import { formatDate } from "@/lib/format";
import { blogPosts, getPostBySlug, getRelatedPosts } from "@/constants/blog";

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    image: post.coverImage,
  });
}

export default async function BlogPostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(slug);
  const headings = post.content.flatMap((b) =>
    b.type === "heading" ? [b.text] : [],
  );

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ])}
      />
      <JsonLd
        data={articleJsonLd({
          title: post.title,
          description: post.excerpt,
          path: `/blog/${post.slug}`,
          image: post.coverImage,
          datePublished: post.date,
          author: post.author,
        })}
      />

      <PageHero
        eyebrow={post.category}
        title={post.title}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: post.title },
        ]}
      />

      <article className="section-y">
        <div className="container-dz max-w-5xl lg:grid lg:grid-cols-[minmax(0,1fr)_200px] lg:gap-12">
          <div className="min-w-0 max-w-3xl">
          {/* Meta */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="size-4" />
              <time dateTime={post.date}>{formatDate(post.date)}</time>
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="size-4" />
              {post.readTime} min read
            </span>
            <span className="font-medium text-foreground">
              By {post.author}, {post.authorRole}
            </span>
          </div>

          {/* Cover */}
          <div className="relative mt-6 aspect-video overflow-hidden rounded-2xl shadow-card">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              sizes="(min-width: 768px) 768px, 100vw"
              className="object-cover"
              preload
            />
          </div>

          {/* Body */}
          <div className="mt-10">
            <BlogPostBody blocks={post.content} />
          </div>

          {/* Tags */}
          <div className="mt-10 flex flex-wrap items-center gap-2 border-t border-border pt-8">
            <Tag className="size-4 text-secondary" />
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-primary-50 px-3 py-1 text-xs font-medium text-primary"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-secondary transition-colors hover:text-primary"
            >
              <ArrowLeft className="size-4" />
              Back to all articles
            </Link>
          </div>
          </div>

          {/* Table of contents (desktop, when the article has enough headings) */}
          {headings.length >= 3 && (
            <aside className="hidden lg:block">
              <nav aria-label="On this page" className="sticky top-28">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  On this page
                </p>
                <ul className="mt-4 space-y-1.5 border-l border-border">
                  {headings.map((h) => (
                    <li key={h}>
                      <a
                        href={`#${slugifyHeading(h)}`}
                        className="-ml-px block border-l-2 border-transparent py-1 pl-4 text-sm leading-snug text-muted-foreground transition-colors hover:border-gold hover:text-primary"
                      >
                        {h}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>
          )}
        </div>
      </article>

      {/* Related */}
      {related.length > 0 && (
        <section className="section-y bg-white">
          <div className="container-dz">
            <SectionHeading eyebrow="Keep Reading" title="Related Articles" />
            <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <RevealItem key={p.slug}>
                  <BlogCard post={p} />
                </RevealItem>
              ))}
            </Stagger>
          </div>
        </section>
      )}
    </>
  );
}
