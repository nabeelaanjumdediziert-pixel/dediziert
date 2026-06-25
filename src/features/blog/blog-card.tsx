import Image from "next/image";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";

import { formatDate } from "@/lib/format";
import type { BlogPost } from "@/types";

export function BlogCard({
  post,
  featured = false,
}: {
  post: BlogPost;
  featured?: boolean;
}) {
  return (
    <article
      className={
        featured
          ? "group grid overflow-hidden rounded-2xl border border-border bg-white shadow-soft transition-shadow hover:shadow-card md:grid-cols-2"
          : "group flex flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
      }
    >
      <Link
        href={`/blog/${post.slug}`}
        className={`relative block overflow-hidden ${featured ? "aspect-video md:aspect-auto" : "aspect-video"}`}
      >
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          sizes={featured ? "(min-width: 768px) 50vw, 100vw" : "(min-width: 1024px) 33vw, 100vw"}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-primary shadow-soft">
          {post.category}
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span aria-hidden>•</span>
          <span className="inline-flex items-center gap-1">
            <Clock className="size-3.5" />
            {post.readTime} min read
          </span>
        </div>

        <h3
          className={`mt-3 font-semibold text-primary transition-colors group-hover:text-secondary ${featured ? "text-2xl" : "text-lg"}`}
        >
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>

        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {post.excerpt}
        </p>

        <div className="mt-5 flex items-center justify-between">
          <span className="text-xs font-medium text-foreground">
            By {post.author}
          </span>
          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-secondary"
            aria-label={`Read ${post.title}`}
          >
            Read
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
