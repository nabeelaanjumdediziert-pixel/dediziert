"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Compass, ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { staggerContainer, fadeUp } from "@/lib/motion";

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[92vh] items-center overflow-hidden bg-primary pt-28 md:pt-24">
      {/* Background image */}
      <Image
        src="/images/hero-bg.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-30 object-cover"
      />
      {/* Readability wash — a touch of navy behind the text (left),
          fading to clear so the image stays visible */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/75 from-5% via-primary/25 to-transparent"
        aria-hidden
      />
      <div className="absolute inset-0 -z-10 bg-primary/15" aria-hidden />

      <div className="container-dz relative w-full py-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-2xl"
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm"
          >
            <span className="size-1.5 rounded-full bg-gold" aria-hidden />
            Honest. Committed. That&rsquo;s DEDIZIERT.
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="mt-6 text-3xl font-bold leading-[1.1] text-white sm:text-4xl lg:text-5xl"
          >
            Financial Matters{" "}
            <span className="text-gold-light">
              Made
              <br />
              Easy
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/80"
          >
            Professional accounting, audit, tax and advisory services designed
            to help businesses scale confidently.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <Button
              asChild
              variant="outline"
              size="lg"
              className="group border-white/40 text-white hover:bg-white hover:text-primary"
            >
              <Link href="/services">
                <Compass className="transition-transform duration-300 group-hover:rotate-45" />
                Explore Services
              </Link>
            </Button>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mt-8 text-sm font-medium text-white/60"
          >
            Serving startups, SMEs &amp; corporates worldwide.
          </motion.p>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <div
        className="absolute inset-x-0 bottom-6 flex justify-center motion-reduce:hidden"
        aria-hidden
      >
        <ChevronDown className="size-6 animate-bounce text-white/60" />
      </div>
    </section>
  );
}
