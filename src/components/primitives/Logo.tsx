import NextLink from "next/link";

import { cn } from "@/lib/utils";
import { LogoIcon } from "@/components/primitives/LogoIcon";

interface LogoProps {
  className?: string;
}

/**
 * Bare wordmark per Brand Guidelines §3.1: "V" and "47" differ in weight,
 * with "47" carried in brass. Rendered as real text (not the SVG lockup,
 * which bundles the descriptor line for footer/document use) so it stays
 * crisp at any size and is real text for a11y/SEO.
 *
 * LogoIcon only renders under the "teal" preview theme (see globals.css) —
 * the shipped default theme is unaffected.
 */
export function Logo({ className }: LogoProps) {
  return (
    <NextLink
      href="/"
      aria-label="V47 home"
      className={cn("inline-flex items-center font-display", className)}
    >
      <LogoIcon className="logo-icon mr-1.5 h-[1em] w-[1em]" />
      <span className="font-medium text-fg">V</span>
      <span className="font-normal text-brass-500">47</span>
    </NextLink>
  );
}
