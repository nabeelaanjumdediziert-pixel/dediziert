"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { fadeUp } from "@/lib/motion";

interface ServiceCardProps {
  slug: string;
  title: string;
  summary: string;
  /**
   * Pre-rendered icon element. The icon component (a function) is rendered in
   * the parent Server Component and passed across as a serializable element.
   */
  icon: ReactNode;
  /** Optional related photo shown faded behind the card content. */
  image?: string;
}

export function ServiceCard({
  slug,
  title,
  summary,
  icon,
  image,
}: ServiceCardProps) {
  return (
    <motion.div variants={fadeUp} className="h-full">
      <Link
        href={`/services/${slug}`}
        className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-secondary shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-white/25 hover:shadow-lift"
      >
        {/* Related background photo */}
        {image && (
          <Image
            src={image}
            alt=""
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}
        {/* Dark wash keeps the white text readable while the image shows */}
        <span
          className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/85 to-primary/65 transition-colors duration-500 group-hover:to-primary/55"
          aria-hidden
        />

        <div className="relative flex h-full flex-col p-7">
          {/* Hover accent */}
          <span
            className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-secondary via-gold to-gold-light transition-transform duration-300 group-hover:scale-x-100"
            aria-hidden
          />
          <span className="flex size-13 items-center justify-center rounded-xl bg-white/15 text-white shadow-soft backdrop-blur-sm transition-colors duration-300 group-hover:bg-gold group-hover:text-primary">
            {icon}
          </span>
          <h3 className="mt-5 text-xl font-semibold text-white">{title}</h3>
          <p className="mt-2.5 flex-1 text-sm leading-relaxed text-white/80">
            {summary}
          </p>
          <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-light transition-colors group-hover:text-white">
            Learn more
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1.5" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
