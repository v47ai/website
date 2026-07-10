export interface Industry {
  slug: string;
  label: string;
  context: string;
  value: string;
}

export const INDUSTRIES: Industry[] = [
  {
    slug: "government",
    label: "Government",
    context: "Public-sector programmes with real procurement and governance constraints.",
    value: "AI that fits existing accountability structures instead of fighting them.",
  },
  {
    slug: "construction",
    label: "Construction",
    context: "Complex, multi-party projects with heavy documentation and coordination overhead.",
    value: "AI that cuts through document and coordination overhead across contractors.",
  },
  {
    slug: "real-estate",
    label: "Real estate",
    context: "Portfolio and transaction-heavy operations with fragmented data sources.",
    value: "AI that unifies scattered portfolio data into decisions leadership can act on.",
  },
  {
    slug: "financial-services",
    label: "Financial services",
    context: "Regulated institutions balancing innovation against compliance risk.",
    value: "AI delivery with governance and audit trails built in from day one.",
  },
  {
    slug: "healthcare",
    label: "Healthcare",
    context: "High-stakes environments where AI must augment, never replace, clinical judgment.",
    value: "AI positioned to support decisions, with humans firmly accountable.",
  },
  {
    slug: "education",
    label: "Education",
    context: "Institutions balancing personalization against equity and oversight.",
    value: "AI that supports educators rather than automating around them.",
  },
  {
    slug: "legal",
    label: "Legal",
    context: "Procedurally strict processes where accuracy matters more than fluency.",
    value: "AI that interprets and guides within defined guardrails, not open-ended advice.",
  },
];
