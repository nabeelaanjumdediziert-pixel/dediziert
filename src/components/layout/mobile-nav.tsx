"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Logo } from "./logo";
import { navItems } from "@/constants/site";
import { cn } from "@/lib/utils";

export function MobileNav({ solid = true }: { solid?: boolean }) {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  // Lock background scroll while the drawer is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => {
    setOpen(false);
    setServicesOpen(false);
  };

  const drawer = (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-[70] bg-primary-900/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            aria-hidden
          />
          <motion.aside
            className="fixed inset-y-0 right-0 z-[80] flex w-[88%] max-w-sm flex-col bg-white shadow-card"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.35 }}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <div className="flex items-center justify-between border-b border-border px-5 py-4">
              <Logo />
              <button
                type="button"
                aria-label="Close menu"
                onClick={close}
                className="flex size-10 items-center justify-center rounded-lg text-primary transition-colors hover:bg-primary-50"
              >
                <X className="size-6" />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto px-5 py-6">
              <ul className="flex flex-col gap-1">
                {navItems.map((item) => {
                  const active = pathname === item.href;
                  if (item.children) {
                    return (
                      <li key={item.label}>
                        <button
                          type="button"
                          onClick={() => setServicesOpen((v) => !v)}
                          aria-expanded={servicesOpen}
                          className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-base font-semibold text-primary transition-colors hover:bg-primary-50"
                        >
                          {item.label}
                          <ChevronDown
                            className={cn(
                              "size-5 transition-transform",
                              servicesOpen && "rotate-180",
                            )}
                          />
                        </button>
                        <AnimatePresence initial={false}>
                          {servicesOpen && (
                            <motion.ul
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden pl-3"
                            >
                              <li>
                                <Link
                                  href={item.href}
                                  onClick={close}
                                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-secondary hover:bg-primary-50"
                                >
                                  All Services
                                </Link>
                              </li>
                              {item.children.map((child) => (
                                <li key={child.href}>
                                  <Link
                                    href={child.href}
                                    onClick={close}
                                    className="block rounded-lg px-3 py-2.5 text-sm text-muted-foreground hover:bg-primary-50 hover:text-primary"
                                  >
                                    {child.label}
                                  </Link>
                                </li>
                              ))}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </li>
                    );
                  }
                  return (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        onClick={close}
                        className={cn(
                          "block rounded-lg px-3 py-3 text-base font-semibold transition-colors hover:bg-primary-50",
                          active ? "text-secondary" : "text-primary",
                        )}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="border-t border-border p-5">
              <Button asChild className="w-full" size="lg">
                <Link href="/contact" onClick={close}>
                  Get Professional Advice
                  <ArrowRight />
                </Link>
              </Button>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label="Open menu"
        aria-expanded={open}
        onClick={() => setOpen(true)}
        className={cn(
          "flex size-10 items-center justify-center rounded-lg transition-colors",
          solid
            ? "text-primary hover:bg-primary-50"
            : "text-white hover:bg-white/10",
        )}
      >
        <Menu className="size-6" />
      </button>

      {typeof document !== "undefined" && createPortal(drawer, document.body)}
    </div>
  );
}
