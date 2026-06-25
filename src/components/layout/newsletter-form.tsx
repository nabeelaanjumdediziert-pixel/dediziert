"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

/** Footer newsletter signup. Mock submit (no backend) with a success state. */
export function NewsletterForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <p
        role="status"
        aria-live="polite"
        className="mt-4 flex items-center gap-2 rounded-full border border-gold/40 bg-white/5 px-4 py-2.5 text-sm text-white"
      >
        <Check className="size-4 shrink-0 text-gold-light" />
        Thanks — you&rsquo;re subscribed!
      </p>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="mt-4 flex overflow-hidden rounded-full border border-white/20 bg-white/5 focus-within:border-white/40"
      aria-label="Newsletter signup"
    >
      <input
        type="email"
        required
        placeholder="Your email"
        aria-label="Email address"
        className="w-full bg-transparent px-4 py-2.5 text-sm text-white placeholder:text-white/50 focus:outline-none"
      />
      <button
        type="submit"
        aria-label="Subscribe"
        className="flex items-center justify-center bg-white px-4 text-primary transition-colors hover:bg-primary-50"
      >
        <ArrowRight className="size-4" />
      </button>
    </form>
  );
}
