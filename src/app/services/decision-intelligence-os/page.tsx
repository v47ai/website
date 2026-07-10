import type { Metadata } from "next";
import NextLink from "next/link";

import { Eyebrow } from "@/components/primitives/Eyebrow";
import { buttonVariants } from "@/components/primitives/Button";
import { Reveal } from "@/components/primitives/Reveal";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Enterprise Decision Intelligence Systems",
  description:
    "A single reasoning layer across fragmented operational data — built around your existing systems, not a replacement for them.",
  path: "/services/decision-intelligence-os",
});

const APPLICATIONS = [
  {
    sector: "Logistics & supply chain",
    detail: "Routing and inventory decisions that currently depend on multiple disconnected systems.",
  },
  {
    sector: "Energy & infrastructure",
    detail: "Asset and maintenance data spread across engineering, operations, and finance tools.",
  },
  {
    sector: "Investment & portfolio functions",
    detail: "Exposure and pipeline data currently reconciled by hand across spreadsheets.",
  },
  {
    sector: "Multi-brand retail & conglomerates",
    detail: "Demand and procurement data siloed by business unit.",
  },
];

export default function DecisionIntelligenceOsPage() {
  return (
    <article className="mx-auto max-w-container px-5 py-20 sm:px-10">
      <nav aria-label="Breadcrumb" className="t-caption text-fg-subtle">
        <NextLink href="/services" className="hover:text-fg">
          Services
        </NextLink>
        <span className="mx-2">/</span>
        <span aria-current="page">Enterprise Decision Intelligence Systems</span>
      </nav>

      <div className="mt-6 max-w-prose">
        <Eyebrow>Service</Eyebrow>
        <h1 className="t-h1 mt-3 text-fg">Enterprise Decision Intelligence Systems</h1>
        <p className="t-body-l mt-4 text-fg-muted">
          A single reasoning layer across fragmented operational data — built
          around your existing systems, not a replacement for them.
        </p>
      </div>

      <div className="mt-12 max-w-prose">
        <h2 className="t-h3 text-fg">The problem usually isn&apos;t a lack of data</h2>
        <p className="t-body mt-4 text-fg-muted">
          Most large enterprises already have the data they need. It sits
          split across ERPs, legacy databases, and departmental tools that
          don&apos;t talk to each other, so decisions get made on whichever
          fragment a team happens to have open. V47 builds a decision
          intelligence layer that sits across your existing systems — it
          doesn&apos;t ask you to migrate into a new one.
        </p>

        <h3 className="t-h4 mt-8 text-fg">What this covers</h3>
        <ul className="t-body mt-4 list-disc space-y-2 pl-5 text-fg-muted">
          <li>
            Ontology mapping — connecting the people, assets, processes, and
            financial data already in your systems into one queryable model,
            without duplicating or migrating the underlying data.
          </li>
          <li>
            Scenario simulation — a sandbox for testing operational decisions
            against the real data model before committing budget or shifting
            resources.
          </li>
          <li>
            Human-in-the-loop orchestration — AI agents handle aggregation
            and surfacing of relevant information; the decision itself stays
            with your team.
          </li>
        </ul>

        <h3 className="t-h4 mt-8 text-fg">Where this applies</h3>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {APPLICATIONS.map((item) => (
            <div key={item.sector} className="rounded-sm border border-border p-4">
              <p className="t-small text-fg">{item.sector}</p>
              <p className="t-caption mt-2 text-fg-subtle">{item.detail}</p>
            </div>
          ))}
        </div>

        <h3 className="t-h4 mt-8 text-fg">How this differs from a large platform deployment</h3>
        <p className="t-body mt-4 text-fg-muted">
          Rather than a multi-year implementation that asks your organization
          to adopt a new platform&apos;s data model, V47 scopes a modular
          layer around the systems you already run — starting with the
          highest-friction decision, not a full data migration.
        </p>

        <p className="t-caption mt-8 rounded-sm border border-border bg-surface px-4 py-3 text-fg-subtle">
          Scope, timeline, and which systems are in bounds for a first phase
          are set in a discovery session — nothing generic ships here that
          wouldn&apos;t hold up engagement to engagement.
        </p>
      </div>

      <Reveal>
        <div className="mt-16 flex flex-wrap gap-4 border-t border-border pt-10">
          <NextLink href="/contact" className={buttonVariants({ variant: "primary" })}>
            Book a session
          </NextLink>
          <NextLink
            href="/services"
            className="t-small inline-flex items-center text-interactive underline underline-offset-[3px] hover:text-azure-400"
          >
            See all services →
          </NextLink>
        </div>
      </Reveal>
    </article>
  );
}
