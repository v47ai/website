import type { Metadata } from "next";
import NextLink from "next/link";

import { Eyebrow } from "@/components/primitives/Eyebrow";
import { Card } from "@/components/primitives/Card";
import { buttonVariants } from "@/components/primitives/Button";
import { Reveal } from "@/components/primitives/Reveal";

export const metadata: Metadata = {
  title: "Services",
  description: "How V47 engages: from a scoped discovery workshop to a working prototype to full strategy.",
  alternates: { canonical: "/services" },
};

const SERVICES = [
  {
    title: "AI Discovery Workshop",
    structure: ["Duration", "Deliverables", "Outcomes", "Ideal client"],
    description:
      "A scoped engagement to turn a broad AI mandate into specific, fundable opportunities — using the AI Discovery Framework.",
    href: "/methods/ai-discovery-framework",
  },
  {
    title: "AI Prototype Sprint",
    structure: ["Working prototype", "Architecture", "Executive demo", "Roadmap"],
    description:
      "From a scoped opportunity to a working prototype an executive can click — not a slide deck of what AI could do.",
    href: "/lab",
  },
  {
    title: "Enterprise AI Strategy",
    structure: ["Executive interviews", "Opportunity assessment", "Governance", "Operating model"],
    description:
      "Full strategic engagement covering governance and operating model, not just a roadmap of technology choices.",
    href: "/contact",
  },
];

export default function ServicesIndexPage() {
  return (
    <div className="mx-auto max-w-container px-5 py-20 sm:px-10">
      <Eyebrow>Services</Eyebrow>
      <h1 className="t-h1 mt-3 text-fg">How we engage.</h1>
      <p className="t-body-l mt-4 max-w-prose text-fg-muted">
        Three ways to work with V47, each written as a consulting offering,
        not a feature list.
      </p>

      <p className="t-caption mt-6 max-w-prose rounded-sm border border-border bg-surface px-4 py-3 text-fg-subtle">
        Specific durations, pricing, and deliverable detail are scoped per
        engagement in a discovery session — nothing generic ships here that
        wouldn&apos;t hold up client to client.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {SERVICES.map((service, index) => (
          <Reveal key={service.title} delay={index * 0.05}>
            <Card className="flex h-full flex-col gap-4">
              <h2 className="t-h4 text-fg">{service.title}</h2>
              <p className="t-small text-fg-muted">{service.description}</p>
              <ul className="t-caption flex flex-wrap gap-2 text-fg-subtle">
                {service.structure.map((item) => (
                  <li key={item} className="rounded-full border border-border px-3 py-1">
                    {item}
                  </li>
                ))}
              </ul>
              <NextLink href={service.href} className="t-small mt-auto text-interactive underline underline-offset-[3px] hover:text-azure-400">
                Learn more →
              </NextLink>
            </Card>
          </Reveal>
        ))}
      </div>

      <div className="mt-12">
        <NextLink href="/contact" className={buttonVariants({ variant: "primary" })}>
          Book a session
        </NextLink>
      </div>
    </div>
  );
}
