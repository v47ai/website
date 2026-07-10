"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import NextLink from "next/link";

import { buttonVariants } from "@/components/primitives/Button";
import { Logo } from "@/components/primitives/Logo";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { MobileMenuTrigger } from "@/components/layout/MobileMenuTrigger";
import { useScrollDirection } from "@/hooks/useScrollDirection";

const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Work", href: "/work" },
  { label: "Methods", href: "/methods" },
  { label: "Lab", href: "/lab" },
  { label: "Insights", href: "/insights" },
  { label: "About", href: "/about" },
];

export function Nav() {
  const direction = useScrollDirection();
  const prefersReducedMotion = useReducedMotion();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <motion.nav
        aria-label="Primary"
        className="sticky top-0 z-(--z-sticky-nav) border-b border-border bg-bg/95 backdrop-blur print:hidden"
        animate={prefersReducedMotion ? undefined : { y: direction === "down" ? "-100%" : "0%" }}
        transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="mx-auto flex max-w-container items-center justify-between px-5 py-4 sm:px-10">
          <Logo className="text-2xl sm:text-3xl" />

          <ul className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <NextLink
                  href={link.href}
                  className="t-small text-fg-muted transition-colors duration-fast hover:text-fg"
                >
                  {link.label}
                </NextLink>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <NextLink href="/contact" className={buttonVariants({ variant: "primary" })}>
              Book a session
            </NextLink>
          </div>

          <MobileMenuTrigger
            open={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
            className="md:hidden"
          />
        </div>

        <div className="overflow-x-auto border-t border-border px-5 py-2 md:hidden">
          <ul className="flex gap-5 whitespace-nowrap">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <NextLink
                  href={link.href}
                  className="t-caption text-fg-muted transition-colors duration-fast hover:text-fg"
                >
                  {link.label}
                </NextLink>
              </li>
            ))}
          </ul>
        </div>
      </motion.nav>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} links={NAV_LINKS} />
    </>
  );
}
