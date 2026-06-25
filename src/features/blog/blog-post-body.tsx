import type { BlogBlock } from "@/types";

/** kebab-case anchor id from a heading. */
export const slugifyHeading = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

/** Renders the typed content blocks of a blog post as semantic HTML. */
export function BlogPostBody({ blocks }: { blocks: BlogBlock[] }) {
  return (
    <div className="space-y-6">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "heading":
            return (
              <h2
                key={i}
                id={slugifyHeading(block.text)}
                className="scroll-mt-28 pt-2 text-2xl font-bold text-primary md:text-3xl"
              >
                {block.text}
              </h2>
            );
          case "paragraph":
            return (
              <p
                key={i}
                className="text-base leading-relaxed text-foreground/90 md:text-lg"
              >
                {block.text}
              </p>
            );
          case "list":
            return (
              <ul key={i} className="space-y-2.5 pl-1">
                {block.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-base leading-relaxed text-foreground/90"
                  >
                    <span
                      className="mt-2.5 size-1.5 shrink-0 rounded-full bg-secondary"
                      aria-hidden
                    />
                    {item}
                  </li>
                ))}
              </ul>
            );
          case "quote":
            return (
              <blockquote
                key={i}
                className="border-l-4 border-primary bg-primary-50 px-6 py-5 text-lg font-medium italic leading-relaxed text-primary"
              >
                {block.text}
              </blockquote>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
