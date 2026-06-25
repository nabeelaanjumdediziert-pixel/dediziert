"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ArrowRight, ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Logo } from "./logo";
import { MobileNav } from "./mobile-nav";
import { navItems } from "@/constants/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Solid header on every route except the very top of a page.
  const solid = scrolled;

  const openServices = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };
  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setServicesOpen(false), 120);
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-300",
        solid
          ? "border-b border-border/70 bg-white/85 py-3 shadow-soft backdrop-blur-lg"
          : "border-b border-transparent bg-transparent py-5",
      )}
    >
      <div className="container-dz flex items-center justify-between gap-4">
        <Logo variant={solid ? "dark" : "light"} />

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              if (item.children) {
                return (
                  <li
                    key={item.label}
                    className="relative"
                    onMouseEnter={openServices}
                    onMouseLeave={scheduleClose}
                  >
                    <Link
                      href={item.href}
                      aria-expanded={servicesOpen}
                      aria-haspopup="true"
                      onFocus={openServices}
                      className={cn(
                        "flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors",
                        solid
                          ? "text-foreground hover:text-primary"
                          : "text-white/90 hover:text-white",
                        active && (solid ? "text-primary" : "text-white"),
                      )}
                    >
                      {item.label}
                      <ChevronDown
                        className={cn(
                          "size-4 transition-transform duration-200",
                          servicesOpen && "rotate-180",
                        )}
                      />
                    </Link>

                    <AnimatePresence>
                      {servicesOpen && item.children && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.18 }}
                          className="absolute left-1/2 top-full w-[34rem] -translate-x-1/2 pt-4"
                          onMouseEnter={openServices}
                          onMouseLeave={scheduleClose}
                        >
                          <div className="grid grid-cols-2 gap-1 rounded-2xl border border-border bg-white p-3 shadow-card">
                            {item.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                className="group/item flex flex-col gap-0.5 rounded-xl p-3 transition-colors hover:bg-primary-50"
                              >
                                <span className="flex items-center justify-between text-sm font-semibold text-primary">
                                  {child.label}
                                  <ArrowUpRight className="size-3.5 opacity-0 transition-opacity group-hover/item:opacity-100" />
                                </span>
                                {child.description && (
                                  <span className="text-xs leading-snug text-muted-foreground">
                                    {child.description}
                                  </span>
                                )}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                );
              }

              return (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className={cn(
                      "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                      solid
                        ? "text-foreground hover:text-primary"
                        : "text-white/90 hover:text-white",
                      active && (solid ? "text-primary" : "text-white"),
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button
            asChild
            size="lg"
            variant={solid ? "default" : "light"}
            className="px-5 text-sm"
          >
            <Link href="/contact" className="leading-tight">
              <span className="flex flex-col items-start text-left">
                <span>Get Professional</span>
                <span>Advice</span>
              </span>
              <ArrowRight />
            </Link>
          </Button>
        </div>

        <MobileNav solid={solid} />
      </div>
    </header>
  );
}
