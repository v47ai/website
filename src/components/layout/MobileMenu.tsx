"use client";

import { useEffect } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import NextLink from "next/link";

import { buttonVariants } from "@/components/primitives/Button";

interface MobileMenuLink {
  label: string;
  href: string;
}

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  links: MobileMenuLink[];
}

export function MobileMenu({ open, onClose, links }: MobileMenuProps) {
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          className="fixed inset-0 z-(--z-overlay) flex flex-col bg-bg px-5 py-6 md:hidden"
          initial={prefersReducedMotion ? undefined : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={prefersReducedMotion ? undefined : { opacity: 0 }}
          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="t-eyebrow text-fg-muted"
            >
              Close
            </button>
          </div>

          <ul className="mt-12 flex flex-1 flex-col gap-6">
            {links.map((link, index) => (
              <motion.li
                key={link.href}
                initial={prefersReducedMotion ? undefined : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.28,
                  ease: [0.16, 1, 0.3, 1],
                  delay: prefersReducedMotion ? 0 : index * 0.05,
                }}
              >
                <NextLink
                  href={link.href}
                  onClick={onClose}
                  className="t-eyebrow text-fg"
                >
                  {link.label}
                </NextLink>
              </motion.li>
            ))}
          </ul>

          <NextLink
            href="/contact"
            onClick={onClose}
            className={buttonVariants({ variant: "primary", className: "w-full" })}
          >
            Book a session
          </NextLink>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
