import type { Metadata } from "next";
import NextLink from "next/link";

import { Eyebrow } from "@/components/primitives/Eyebrow";
import { Divider } from "@/components/primitives/Divider";
import { buttonVariants } from "@/components/primitives/Button";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Company profile",
  description: "A procurement-ready overview of V47 — positioning, services, track record, and how to engage.",
  path: "/company-profile",
});

const SERVICES = [
  { title: "AI Discovery Workshop", body: "Turns a broad AI mandate into specific, fundable opportunities." },
  { title: "AI Prototype Sprint", body: "From a scoped opportunity to a working prototype an executive can click." },
  { title: "Enterprise AI Strategy", body: "Governance and operating model, not just a technology roadmap." },
  { title: "Regulated AI & Open Finance Frameworks", body: "For banks and financial infrastructure under CBUAE/SAMA oversight." },
  { title: "Enterprise Decision Intelligence Systems", body: "A reasoning layer across fragmented operational data." },
];

const INDUSTRIES = [
  "Government",
  "Financial services",
  "Construction",
  "Real estate",
  "Healthcare",
  "Education",
  "Legal",
];

const TRACK_RECORD = [
  {
    name: "TEJAS — Government of India",
    detail: "National no-code BI platform. 120,000+ users, 15+ ministries. CSI eGovernance Award (2022). NIC/MeitY appreciation letter.",
  },
  {
    name: "Justice Corner — UAE Ministry of Justice (MOJ)",
    detail: "Governed, multilingual (Arabic/Tamil/Urdu) generative-AI legal-awareness service. Prototype demonstrated to the ministry.",
  },
  {
    name: "EXL / Paymentor.ai",
    detail: "AI-powered collections and BNPL SaaS platform scaled from pilots to $5M contracts, GCC bank CXOs.",
  },
];

export default function CompanyProfilePage() {
  return (
    <div data-theme="light" className="bg-bg text-fg">
      <div className="mx-auto max-w-container px-5 py-20 sm:px-10 print:py-8">
        <div className="flex flex-wrap items-start justify-between gap-4 print:hidden">
          <div>
            <Eyebrow>Firm</Eyebrow>
            <h1 className="t-h1 mt-3 text-fg">Company profile</h1>
          </div>
          <a
            href="/company-profile.pdf"
            download
            className={buttonVariants({ variant: "primary" })}
          >
            Download PDF
          </a>
        </div>

        <p className="t-caption mt-6 max-w-prose rounded-sm border border-border bg-surface px-4 py-3 text-fg-subtle print:hidden">
          This is a working draft, built from what&apos;s already verified
          elsewhere on this site — not yet a finished, designed artefact.
          Content is accurate; layout and polish are still in progress.
        </p>

        <div className="mt-10 max-w-prose">
          <p className="t-h3 text-fg">V47</p>
          <p className="t-body-l mt-2 text-fg-muted">
            Boutique AI consulting, licensed in Abu Dhabi — from AI strategy
            to production, for governments and enterprises across the GCC.
          </p>
        </div>

        <Divider className="my-10" />

        <section>
          <h2 className="t-eyebrow text-fg-subtle">Positioning</h2>
          <p className="t-body mt-3 max-w-prose text-fg-muted">
            Most firms sell decks or sell hours. V47 owns the whole path —
            strategy, product, and working implementation. Every claim on
            this site and in this document is written to survive a reference
            check: no invented client names, no fabricated metrics.
          </p>
        </section>

        <Divider className="my-10" />

        <section>
          <h2 className="t-eyebrow text-fg-subtle">Leadership</h2>
          <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <p className="t-h4 text-fg">Vigneshraja Kadirvell</p>
              <p className="t-small mt-1 text-fg-muted">Founder & Principal Consultant</p>
              <p className="t-small mt-2 text-fg-muted">
                11+ years of product leadership across high-growth SaaS,
                fintech, and enterprise AI — EXL (Paymentor.ai), KPMG (TEJAS).
              </p>
            </div>
            <div>
              <p className="t-h4 text-fg">Sharmili G</p>
              <p className="t-small mt-1 text-fg-muted">Co-Founder & Head of Data Platform Engineering</p>
              <p className="t-small mt-2 text-fg-muted">
                12+ years in enterprise data platforms and cloud migration —
                Tech Mahindra, OCBC, AmBank, Wipro.
              </p>
            </div>
          </div>
        </section>

        <Divider className="my-10" />

        <section>
          <h2 className="t-eyebrow text-fg-subtle">Services</h2>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {SERVICES.map((service) => (
              <div key={service.title} className="rounded-sm border border-border p-4">
                <p className="t-small text-fg">{service.title}</p>
                <p className="t-caption mt-2 text-fg-subtle">{service.body}</p>
              </div>
            ))}
          </div>
        </section>

        <Divider className="my-10" />

        <section>
          <h2 className="t-eyebrow text-fg-subtle">Industries served</h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {INDUSTRIES.map((industry) => (
              <li key={industry} className="t-caption rounded-full border border-border px-3 py-1 text-fg-muted">
                {industry}
              </li>
            ))}
          </ul>
        </section>

        <Divider className="my-10" />

        <section>
          <h2 className="t-eyebrow text-fg-subtle">Track record</h2>
          <div className="mt-4 flex flex-col gap-4">
            {TRACK_RECORD.map((item) => (
              <div key={item.name} className="rounded-sm border border-border p-4">
                <p className="t-small text-fg">{item.name}</p>
                <p className="t-caption mt-2 text-fg-subtle">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <Divider className="my-10" />

        <section>
          <h2 className="t-eyebrow text-fg-subtle">Contact</h2>
          <p className="t-body mt-3 text-fg-muted">
            vignesh@v47ai.com · linkedin.com/company/v47 · Abu Dhabi, UAE
          </p>
        </section>

        <div className="mt-12 print:hidden">
          <NextLink href="/contact" className={buttonVariants({ variant: "primary" })}>
            Book a session
          </NextLink>
        </div>
      </div>
    </div>
  );
}
