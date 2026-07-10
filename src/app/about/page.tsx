import type { Metadata } from "next";
import NextLink from "next/link";
import { UserRound } from "lucide-react";

import { Eyebrow } from "@/components/primitives/Eyebrow";
import { Divider } from "@/components/primitives/Divider";
import { Card } from "@/components/primitives/Card";
import { Icon } from "@/components/primitives/Icon";
import { buttonVariants } from "@/components/primitives/Button";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description:
    "V47 is led by Vigneshraja Kadirvell, Founder & Principal Consultant, with Sharmili G as Co-Founder & Head of Data Platform Engineering.",
  path: "/about",
});

const vigneshJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Vigneshraja Kadirvell",
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

const SHARMILI_PROJECTS = [
  {
    name: "ECL — Ford Motor Credit",
    detail: "ETL development for IFRS 9/CECL compliance, calculating and reporting Expected Credit Loss on a quarterly basis.",
  },
  {
    name: "ELMM — Ford Motor Credit",
    detail: "Migrated the enterprise data warehouse from Teradata to Google Cloud Platform via cloud dataflow pipelines.",
  },
  {
    name: "BNM NSRS Reporting — OCBC Bank",
    detail: "Standardized statistical reporting infrastructure to Bank Negara Malaysia's requirements.",
  },
  {
    name: "CCRIS — AmBank Group",
    detail: "Automated credit-related data processing across participating financial institutions for the Credit Bureau.",
  },
  {
    name: "FALCON Debit — Lloyds Banking Group",
    detail: "Payment card fraud detection and mitigation across payment methods.",
  },
  {
    name: "Enterprise Bigdata Platform — OCBC Bank",
    detail: "Migrated the data store platform to a real-time data hub via a Hadoop staging layer.",
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

function PortraitPlaceholder({ size = "large" }: { size?: "large" | "small" }) {
  const dimensions = size === "large" ? "h-56 w-44 sm:h-64 sm:w-52" : "h-40 w-32";
  return (
    <div
      className={`flex ${dimensions} shrink-0 flex-col items-center justify-center gap-2 rounded-md border border-dashed border-border-strong bg-surface px-4 text-center`}
    >
      <Icon icon={UserRound} size={24} className="text-fg-subtle" />
      <p className="t-caption text-fg-subtle">Portrait pending</p>
    </div>
  );
}

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

      <div className="mt-3 flex flex-col-reverse items-start gap-8 sm:flex-row sm:items-center">
        <div>
          <h1 className="t-h1 text-fg">Vigneshraja Kadirvell</h1>
          <p className="t-body-l mt-4 max-w-prose text-fg-muted">
            Founder & Principal Consultant, V47 — 11+ years of product
            leadership across high-growth SaaS, fintech, and enterprise AI,
            now directing every engagement personally.
          </p>
        </div>
        <PortraitPlaceholder />
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
        <p className="t-body text-fg-muted sm:col-span-1">
          V47 is a boutique by design. Clients get the person who built and
          scaled these systems, not a junior analyst relaying someone
          else&apos;s slide deck.
        </p>
        <p className="t-body text-fg-muted sm:col-span-1">
          V47 is licensed to operate as an AI consulting business in Abu
          Dhabi, and works across government and enterprise clients in the
          GCC.
        </p>
        <p className="t-body text-fg-muted sm:col-span-1">
          Most AI initiatives don&apos;t fail on the model — they fail on
          everything around it: governance, ownership, data reality, and the
          judgment calls a demo never has to make. V47 is built to own that
          whole path, not just the parts that demo well.
        </p>
      </div>

      <Divider className="my-14" />

      <section>
        <h2 className="t-h3 text-fg">Proven architecture, not presentation decks</h2>
        <p className="t-body mt-3 max-w-prose text-fg-muted">
          Before founding V47, Vigneshraja Kadirvell built and scaled the
          kind of systems most AI consultancies only pitch.
        </p>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {TRACK_RECORD.map((item) => (
            <Card key={item.role}>
              <h3 className="t-h4 text-fg">{item.role}</h3>
              <p className="t-small mt-2 text-fg-muted">{item.body}</p>
            </Card>
          ))}
        </div>
        <p className="t-caption mt-4 max-w-prose rounded-sm border border-border bg-surface px-4 py-3 text-fg-subtle">
          These outcomes were delivered under EXL and KPMG, prior to V47&apos;s
          founding — cited here as track record, not as V47 engagements.
        </p>
      </section>

      <Divider className="my-14" />

      <section className="grid grid-cols-1 gap-10 lg:grid-cols-[2fr_1fr]">
        <div>
          <h2 className="t-h3 text-fg">Inside TEJAS: a national analytics platform</h2>
          <p className="t-body mt-3 text-fg-muted">
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
            Vigneshraja Kadirvell led product strategy for TEJAS at KPMG —
            shaping a drag-and-drop data preparation layer, configurable
            dashboards with department-level performance indicators,
            geospatial mapping through Bharat Maps, and role-based access
            controls, all built on open-source technology so departments
            weren&apos;t locked into a commercial BI vendor.
          </p>
          <p className="t-caption mt-4 rounded-sm border border-border bg-surface px-4 py-3 text-fg-subtle">
            Platform facts sourced from NIC and MeitY public materials,
            independent policy reporting, and the CSI eGovernance Award and
            NIC/MeitY appreciation letter recognizing this work.
          </p>
          <NextLink
            href="/work/tejas"
            className="t-small mt-4 inline-block text-interactive underline underline-offset-[3px] hover:text-azure-400"
          >
            See the full Tejas case study →
          </NextLink>
        </div>

        <div className="flex flex-col gap-4">
          <Card featured className="flex flex-col gap-1">
            <p className="tabular-figures t-h2 text-fg">120,000+</p>
            <p className="t-small text-fg-muted">Users across 15+ ministries</p>
          </Card>
          <Card className="flex flex-col gap-1">
            <p className="t-small text-fg">CSI eGovernance Award, 2022</p>
          </Card>
          <Card className="flex flex-col gap-1">
            <p className="t-small text-fg">NIC/MeitY appreciation letter</p>
          </Card>
        </div>
      </section>

      <Divider className="my-14" />

      <section className="max-w-prose">
        <h2 className="t-h3 text-fg">GCC regulatory fluency</h2>
        <p className="t-body mt-3 text-fg-muted">
          At EXL, Vigneshraja Kadirvell delivered open banking readiness
          assessments for GCC banks — mapping API maturity and aligning
          product engineering work with the CBUAE Open Finance Regulation and
          the SAMA Open Banking framework. That regulatory fluency now shapes
          how V47 designs{" "}
          <NextLink
            href="/services/regulated-ai-open-finance"
            className="text-interactive underline underline-offset-[3px] hover:text-azure-400"
          >
            regulated AI systems
          </NextLink>{" "}
          for financial institutions across the region.
        </p>
      </section>

      <Divider className="my-14" />

      <section>
        <div className="flex flex-col-reverse items-start gap-6 sm:flex-row sm:items-center">
          <div>
            <Eyebrow>Leadership</Eyebrow>
            <h2 className="t-h2 mt-3 text-fg">Sharmili G</h2>
            <p className="t-body-l mt-2 max-w-prose text-fg-muted">
              Co-Founder & Head of Data Platform Engineering, V47 — 12+ years
              building enterprise data platforms and cloud migrations across
              banking, financial services, and automotive.
            </p>
          </div>
          <PortraitPlaceholder size="small" />
        </div>

        <p className="t-body mt-6 max-w-prose text-fg-muted">
          Where Vigneshraja Kadirvell scopes the regulatory and product
          strategy, Sharmili builds the data platform underneath it. Most AI
          vendors outsource one half of that pairing; V47 doesn&apos;t have to.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {SHARMILI_TRACK_RECORD.map((item) => (
            <Card key={item.role}>
              <h3 className="t-h4 text-fg">{item.role}</h3>
              <p className="t-small mt-2 text-fg-muted">{item.body}</p>
            </Card>
          ))}
        </div>

        <h3 className="t-h4 mt-8 text-fg">Selected projects</h3>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SHARMILI_PROJECTS.map((project) => (
            <div key={project.name} className="rounded-sm border border-border p-4">
              <p className="t-small text-fg">{project.name}</p>
              <p className="t-caption mt-2 text-fg-subtle">{project.detail}</p>
            </div>
          ))}
        </div>

        <p className="t-body mt-8 max-w-prose text-fg-muted">
          Certified across all three major cloud platforms — AWS, Azure, and
          Google Cloud — with an MS in Software Engineering from BITS
          Pilani. That breadth is what lets V47 commit to a cloud target
          without a separate vendor for the migration itself.
        </p>

        <p className="t-caption mt-4 max-w-prose rounded-sm border border-border bg-surface px-4 py-3 text-fg-subtle">
          These outcomes were delivered under Tech Mahindra, Cognizant, OCBC,
          AmBank, and Wipro, prior to V47&apos;s founding — cited here as track
          record, not as V47 engagements.
        </p>
      </section>

      <Divider className="my-14" />

      <section>
        <h2 className="t-h3 text-fg">How V47 operates</h2>
        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {PRINCIPLES.map((principle) => (
            <div key={principle.title}>
              <h3 className="t-h4 text-fg">{principle.title}</h3>
              <p className="t-small mt-2 text-fg-muted">{principle.body}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-14">
        <NextLink href="/contact" className={buttonVariants({ variant: "primary" })}>
          Book a session
        </NextLink>
      </div>
    </div>
  );
}
