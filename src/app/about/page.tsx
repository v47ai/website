import type { Metadata } from "next";
import NextLink from "next/link";

import { Eyebrow } from "@/components/primitives/Eyebrow";
import { Divider } from "@/components/primitives/Divider";
import { buttonVariants } from "@/components/primitives/Button";

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

const PRINCIPLES = [
  {
    title: "Verifiable over impressive",
    body: "Every claim on this site is written to survive a reference check. No invented client names, no fabricated metrics.",
  },
  {
    title: "Demonstrate before you claim",
    body: "Work, Methods, and the AI Lab exist so a buyer can see the approach before taking our word for it.",
  },
  {
    title: "Enterprise first",
    body: "Every decision assumes the reader is a CIO, a government director, or a procurement committee — not a consumer audience.",
  },
];

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
          Dhabi, and works across government and enterprise clients in the
          GCC.
        </p>
        <p className="t-body mt-4 text-fg-muted">
          The practice exists on a simple premise: most AI initiatives don&apos;t
          fail on the model, they fail on everything around it — governance,
          ownership, data reality, and the judgment calls a demo never has to
          make. V47 is built to own that whole path, not just the parts that
          demo well.
        </p>
      </div>

      <Divider className="my-12 max-w-prose" />

      <div className="max-w-prose">
        <h2 className="t-h3 text-fg">How V47 operates</h2>
        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {PRINCIPLES.map((principle) => (
            <div key={principle.title}>
              <h3 className="t-h4 text-fg">{principle.title}</h3>
              <p className="t-small mt-2 text-fg-muted">{principle.body}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12">
        <NextLink href="/contact" className={buttonVariants({ variant: "primary" })}>
          Book a session
        </NextLink>
      </div>
    </div>
  );
}
