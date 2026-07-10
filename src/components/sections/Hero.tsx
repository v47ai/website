"use client";

import { motion, useReducedMotion } from "framer-motion";
import NextLink from "next/link";

import { Eyebrow } from "@/components/primitives/Eyebrow";
import { buttonVariants } from "@/components/primitives/Button";
import { GirihBackdrop } from "@/components/layout/GirihBackdrop";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const initial = prefersReducedMotion ? undefined : { opacity: 0, y: 16 };
  const animate = { opacity: 1, y: 0 };

  return (
    <section className="relative overflow-hidden border-b border-border">
      <GirihBackdrop />
      <div className="relative mx-auto flex max-w-container flex-col items-start gap-6 px-5 py-28 sm:px-10 sm:py-36">
        <motion.div initial={initial} animate={animate} transition={{ duration: 0.4, ease: EASE }}>
          <Eyebrow>Boutique AI consulting · Abu Dhabi</Eyebrow>
        </motion.div>

        <motion.h1
          className="t-display-xl max-w-3xl text-fg"
          initial={initial}
          animate={animate}
          transition={{ duration: 0.5, ease: EASE, delay: 0.1 }}
        >
          Building AI-native enterprises.
        </motion.h1>

        <motion.p
          className="t-body-l max-w-prose text-fg-muted"
          initial={initial}
          animate={animate}
          transition={{ duration: 0.5, ease: EASE, delay: 0.2 }}
        >
          We help governments and enterprises move from AI strategy to
          production — through executive advisory, product thinking, and
          working AI systems.
        </motion.p>

        <motion.div
          className="flex flex-col gap-4 sm:flex-row"
          initial={initial}
          animate={animate}
          transition={{ duration: 0.5, ease: EASE, delay: 0.3 }}
        >
          <NextLink href="/work" className={buttonVariants({ variant: "primary" })}>
            Explore our work
          </NextLink>
          <NextLink href="/contact" className={buttonVariants({ variant: "secondary" })}>
            Book an AI discovery session
          </NextLink>
        </motion.div>
      </div>
    </section>
  );
}
