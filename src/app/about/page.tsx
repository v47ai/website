import type { Metadata } from "next";

import { Eyebrow } from "@/components/primitives/Eyebrow";
import { buttonVariants } from "@/components/primitives/Button";
import NextLink from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "V47 is led by Vignesh, Founder & Principal Consultant.",
  alternates: { canonical: "/about" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Vignesh",
  jobTitle: "Founder & Principal Consultant",
  worksFor: { "@type": "Organization", name: "V47" },
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-container px-5 py-20 sm:px-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Eyebrow>About</Eyebrow>
      <h1 className="t-h1 mt-3 text-fg">Vignesh</h1>
      <p className="t-body-l mt-4 max-w-prose text-fg-muted">
        Founder & Principal Consultant, V47.
      </p>

      <div className="mt-10 max-w-prose">
        <p className="t-body text-fg-muted">
          V47 is built on 11+ years of product leadership, spanning
          government and enterprise delivery, with a focus on taking AI
          initiatives from strategy through to production — not just advising
          on them.
        </p>
        <p className="t-body mt-4 text-fg-muted">
          V47 is licensed to operate as an AI consulting business in Abu
          Dhabi.
        </p>
        <p className="t-caption mt-8 rounded-sm border border-border bg-surface px-4 py-3 text-fg-subtle">
          A fuller founder narrative and executive portrait are pending —
          this page will expand with verifiable specifics (prior roles,
          named programmes where confidentiality allows) rather than general
          claims. Nothing above is a placeholder; everything below this note
          is intentionally reserved rather than invented.
        </p>
      </div>

      <div className="mt-12">
        <NextLink href="/contact" className={buttonVariants({ variant: "primary" })}>
          Book a session
        </NextLink>
      </div>
    </div>
  );
}
