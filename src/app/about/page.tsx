import type { Metadata } from "next";
import NextLink from "next/link";

import { Eyebrow } from "@/components/primitives/Eyebrow";
import { Divider } from "@/components/primitives/Divider";
import { buttonVariants } from "@/components/primitives/Button";

export const metadata: Metadata = {
  title: "About",
  description:
    "V47 is led by Vignesh, Founder & Principal Consultant, with Sharmili G as Co-Founder & Head of Data Platform Engineering.",
  alternates: { canonical: "/about" },
};

const vigneshJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Vignesh",
  jobTitle: "Founder & Principal Consultant",
  worksFor: { "@type": "Organization", name: "V47" },
  alumniOf: [
    { "@type": "Organization", name: "EXL" },
    { "@type": "Organization", name: "KPMG" },
  ],
};

const sharmiliJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sharmili G",
  jobTitle: "Co-Founder & Head of Data Platform Engineering",
  worksFor: { "@type": "Organization", name: "V47" },
  alumniOf: [
    { "@type": "Organization", name: "Tech Mahindra" },
    { "@type": "Organization", name: "Cognizant" },
    { "@type": "Organization", name: "Wipro" },
  ],
};

const SHARMILI_TRACK_RECORD = [
  {
    role: "Lead Data Engineer, Tech Mahindra (Thirdware Solutions)",
    body: "Architected the migration of Ford Motor Credit's enterprise data warehouse to Google Cloud Platform — GCP Dataflow and BigQuery pipelines built to support IFRS 9/CECL regulatory reporting, led by a team of 5+ engineers.",
  },
  {
    role: "Senior ETL Consultant, OCBC Bank & AmBank Group (Malaysia)",
    body: "Built OCBC's New Statistical Reporting System for Bank Negara Malaysia's compliance requirements, and AmBank's Central Credit Reference Information System — regulator-facing data infrastructure for two of Malaysia's national banking authorities.",
  },
  {
    role: "Senior Software Developer, Wipro Technologies",
    body: "Delivered fraud-detection and reconciliation systems for Lloyds Banking Group, Citibank, and State Street, including the Falcon platform for payment card fraud mitigation.",
  },
];

const TRACK_RECORD = [
  {
    role: "AVP of Product, EXL (Paymentor.ai)",
    body: "Scaled an AI-powered collections and BNPL SaaS platform from initial pilots to $5M contracts, engaging directly with bank CXOs across the US and the GCC.",
  },
  {
    role: "Product Lead & Consultant, KPMG",
    body: "Led product strategy for TEJAS, the Government of India's national analytics platform built under CEDA — detailed below.",
  },
];

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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(vigneshJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(sharmiliJsonLd) }}
      />

      <Eyebrow>About</Eyebrow>
      <h1 className="t-h1 mt-3 text-fg">Vignesh</h1>
      <p className="t-body-l mt-4 max-w-prose text-fg-muted">
        Founder & Principal Consultant, V47 — 11+ years of product
        leadership across high-growth SaaS, fintech, and enterprise AI, now
        directing every engagement personally.
      </p>

      <div className="mt-10 max-w-prose">
        <p className="t-body text-fg-muted">
          V47 is a boutique by design. Clients get the person who built and
          scaled these systems, not a junior analyst relaying someone else&apos;s
          slide deck.
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
        <h2 className="t-h3 text-fg">Proven architecture, not presentation decks</h2>
        <p className="t-body mt-4 text-fg-muted">
          Before founding V47, Vignesh built and scaled the kind of systems
          most AI consultancies only pitch.
        </p>
        <div className="mt-8 space-y-8">
          {TRACK_RECORD.map((item) => (
            <div key={item.role}>
              <h3 className="t-h4 text-fg">{item.role}</h3>
              <p className="t-small mt-2 text-fg-muted">{item.body}</p>
            </div>
          ))}
        </div>
        <p className="t-caption mt-6 rounded-sm border border-border bg-surface px-4 py-3 text-fg-subtle">
          These outcomes were delivered under EXL and KPMG, prior to V47&apos;s
          founding — cited here as track record, not as V47 engagements.
        </p>
      </div>

      <Divider className="my-12 max-w-prose" />

      <div className="max-w-prose">
        <h2 className="t-h3 text-fg">Inside TEJAS: a national analytics platform</h2>
        <p className="t-body mt-4 text-fg-muted">
          In 2021, India&apos;s Ministry of Electronics and Information
          Technology (MeitY), working through the National Informatics
          Centre (NIC) and NICSI, launched TEJAS — Technology Enabled
          Justified Analytics Solution — under the Centre of Excellence for
          Data Analytics (CEDA). The mandate was blunt: give government
          departments a no-code way to turn raw administrative data into
          working dashboards, without every ministry buying its own
          proprietary BI software.
        </p>
        <p className="t-body mt-4 text-fg-muted">
          Vignesh led product strategy for TEJAS at KPMG — shaping a
          drag-and-drop data preparation layer, configurable dashboards with
          department-level performance indicators, geospatial mapping
          through Bharat Maps, and role-based access controls, all built on
          open-source technology so departments weren&apos;t locked into a
          commercial BI vendor. Internal reporting during that period put
          adoption at 128,000+ users across multiple ministries; NIC&apos;s own
          public reporting later cited over 75% of NIC-supported state
          applications migrating to or evaluating the platform.
        </p>
        <p className="t-body mt-4 text-fg-muted">
          The lesson that carries into V47&apos;s work: adoption at that scale
          doesn&apos;t come from a better model, it comes from a product built
          around how a government department actually works — access
          control, reporting cadence, and a rollout path a risk-averse
          ministry can sign off on.
        </p>
        <p className="t-caption mt-6 rounded-sm border border-border bg-surface px-4 py-3 text-fg-subtle">
          Platform facts sourced from NIC and MeitY public materials and
          independent policy reporting; adoption figures during Vignesh&apos;s
          tenure are cited from internal reporting at the time, not a
          published NIC statistic.
        </p>
      </div>

      <Divider className="my-12 max-w-prose" />

      <div className="max-w-prose">
        <h2 className="t-h3 text-fg">GCC regulatory fluency</h2>
        <p className="t-body mt-4 text-fg-muted">
          At EXL, Vignesh delivered open banking readiness assessments for
          GCC banks — mapping API maturity and aligning product engineering
          work with the CBUAE Open Finance Regulation and the SAMA Open
          Banking framework. That regulatory fluency now shapes how V47
          designs{" "}
          <NextLink
            href="/services/regulated-ai-open-finance"
            className="text-interactive underline underline-offset-[3px] hover:text-azure-400"
          >
            regulated AI systems
          </NextLink>{" "}
          for financial institutions across the region.
        </p>
      </div>

      <Divider className="my-12 max-w-prose" />

      <div className="max-w-prose">
        <Eyebrow>Leadership</Eyebrow>
        <h2 className="t-h2 mt-3 text-fg">Sharmili G</h2>
        <p className="t-body-l mt-2 text-fg-muted">
          Co-Founder & Head of Data Platform Engineering, V47 — 12+ years
          building enterprise data platforms and cloud migrations across
          banking, financial services, and automotive.
        </p>
        <p className="t-body mt-6 text-fg-muted">
          Where Vignesh scopes the regulatory and product strategy, Sharmili
          builds the data platform underneath it. Most AI vendors outsource
          one half of that pairing; V47 doesn&apos;t have to.
        </p>

        <div className="mt-8 space-y-8">
          {SHARMILI_TRACK_RECORD.map((item) => (
            <div key={item.role}>
              <h3 className="t-h4 text-fg">{item.role}</h3>
              <p className="t-small mt-2 text-fg-muted">{item.body}</p>
            </div>
          ))}
        </div>

        <p className="t-body mt-6 text-fg-muted">
          Certified across all three major cloud platforms — AWS, Azure, and
          Google Cloud — with an MS in Software Engineering from BITS
          Pilani. That breadth is what lets V47 commit to a cloud target
          without a separate vendor for the migration itself.
        </p>

        <p className="t-caption mt-6 rounded-sm border border-border bg-surface px-4 py-3 text-fg-subtle">
          These outcomes were delivered under Tech Mahindra, Cognizant, and
          Wipro, prior to V47&apos;s founding — cited here as track record, not
          as V47 engagements.
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
