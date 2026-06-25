"use client";

import { useMemo, useState } from "react";
import { Search, FileQuestion } from "lucide-react";

import { BlogCard } from "./blog-card";
import { blogPosts, blogCategories } from "@/constants/blog";
import { cn } from "@/lib/utils";

const PAGE_SIZE = 6;

export function BlogList({ featuredSlug }: { featuredSlug?: string } = {}) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("All");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return blogPosts.filter((post) => {
      if (post.slug === featuredSlug) return false;
      const matchesCategory = category === "All" || post.category === category;
      const matchesQuery =
        !q ||
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.tags.some((tag) => tag.toLowerCase().includes(q));
      return matchesCategory && matchesQuery;
    });
  }, [query, category, featuredSlug]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const visible = filtered.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE,
  );

  const resetTo = (next: () => void) => {
    next();
    setPage(1);
  };

  return (
    <div>
      {/* Controls */}
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div className="relative w-full md:max-w-xs">
          <Search className="absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="search"
            value={query}
            onChange={(e) => resetTo(() => setQuery(e.target.value))}
            placeholder="Search articles..."
            aria-label="Search articles"
            className="h-11 w-full rounded-full border border-input bg-white pl-10 pr-4 text-sm text-foreground shadow-sm transition-colors placeholder:text-muted-foreground/70 focus-visible:border-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/70"
          />
        </div>

        <div
          className="flex flex-wrap gap-2"
          role="tablist"
          aria-label="Filter by category"
        >
          {blogCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={category === cat}
              onClick={() => resetTo(() => setCategory(cat))}
              className={cn(
                "rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
                category === cat
                  ? "bg-primary text-white"
                  : "bg-white text-muted-foreground hover:bg-primary-50 hover:text-primary",
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Results */}
      {visible.length > 0 ? (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <div className="mt-16 flex flex-col items-center text-center">
          <FileQuestion className="size-12 text-light-grey" />
          <p className="mt-4 text-lg font-semibold text-primary">
            No articles found
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Try a different search term or category.
          </p>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <nav
          className="mt-12 flex items-center justify-center gap-2"
          aria-label="Pagination"
        >
          {Array.from({ length: totalPages }).map((_, i) => {
            const pageNumber = i + 1;
            return (
              <button
                key={pageNumber}
                type="button"
                onClick={() => setPage(pageNumber)}
                aria-current={currentPage === pageNumber}
                aria-label={`Page ${pageNumber}`}
                className={cn(
                  "flex size-10 items-center justify-center rounded-lg text-sm font-medium transition-colors",
                  currentPage === pageNumber
                    ? "bg-primary text-white"
                    : "border border-border bg-white text-foreground hover:bg-primary-50",
                )}
              >
                {pageNumber}
              </button>
            );
          })}
        </nav>
      )}
    </div>
  );
}
