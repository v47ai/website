import type { Metadata } from "next";
import NextLink from "next/link";

import { Eyebrow } from "@/components/primitives/Eyebrow";
import { buttonVariants } from "@/components/primitives/Button";
import { Reveal } from "@/components/primitives/Reveal";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Regulated AI & Open Finance Frameworks",
  description:
    "Regulated AI systems for banks, insurers, and financial infrastructure operating under CBUAE and SAMA oversight.",
  path: "/services/regulated-ai-open-finance",
});

const APPROACH_TABLE: Array<{ constraint: string; approach: string }> = [
  {
    constraint: "Model outputs that can't be traced back to a source",
    approach:
      "Every output is grounded in retrieval sources or a validation layer — nothing ships as an unexplained model guess inside a regulated workflow.",
  },
  {
    constraint: "Data residency requirements",
    approach:
      "Architecture decisions start from where data is allowed to live, not retrofitted after a vendor or model is chosen.",
  },
  {
    constraint: "Consent and access scope",
    approach:
      "Access to personal or non-public financial data is scoped and logged at the API level, not assumed at the application layer.",
  },
];

export default function RegulatedAiOpenFinancePage() {
  return (
    <article className="mx-auto max-w-container px-5 py-20 sm:px-10">
      <nav aria-label="Breadcrumb" className="t-caption text-fg-subtle">
        <NextLink href="/services" className="hover:text-fg">
          Services
        </NextLink>
        <span className="mx-2">/</span>
        <span aria-current="page">Regulated AI &amp; Open Finance Frameworks</span>
      </nav>

      <div className="mt-6 max-w-prose">
        <Eyebrow>Service</Eyebrow>
        <h1 className="t-h1 mt-3 text-fg">Regulated AI &amp; Open Finance Frameworks</h1>
        <p className="t-body-l mt-4 text-fg-muted">
          For banks, insurers, and financial infrastructure operating under
          CBUAE and SAMA oversight.
        </p>
      </div>

      <div className="mt-12 max-w-prose">
        <h2 className="t-h3 text-fg">The compliance question comes first, not last</h2>
        <p className="t-body mt-4 text-fg-muted">
          Financial AI systems tend to fail review when governance is added
          after the model already works. V47 designs regulated AI systems the
          other way around — the audit trail, consent model, and data
          residency boundary are part of the architecture from day one, not a
          compliance appendix added at the end.
        </p>

        <h3 className="t-h4 mt-8 text-fg">What this covers</h3>
        <ul className="t-body mt-4 list-disc space-y-2 pl-5 text-fg-muted">
          <li>
            Retrieval-augmented and agentic workflows architected around the
            consent and data-sharing requirements set out in the CBUAE Open
            Finance Regulation and the SAMA Open Banking framework.
          </li>
          <li>
            Decision logging — every AI-assisted output paired with a
            traceable record of the inputs and sources behind it, built for
            an internal compliance or risk function to review.
          </li>
          <li>
            Consent and data-boundary design — scoped access to personal and
            non-public financial data, not blanket application-level access.
          </li>
          <li>
            Deployment within your required regional cloud boundary, where
            data residency is treated as a hard constraint rather than a
            preference.
          </li>
        </ul>

        <h3 className="t-h4 mt-8 text-fg">How we work</h3>
        <div className="mt-4 overflow-x-auto rounded-sm border border-border">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-border bg-surface">
                <th className="t-caption px-4 py-3 font-normal text-fg-subtle">Constraint</th>
                <th className="t-caption px-4 py-3 font-normal text-fg-subtle">V47&apos;s approach</th>
              </tr>
            </thead>
            <tbody>
              {APPROACH_TABLE.map((row) => (
                <tr key={row.constraint} className="border-b border-border last:border-b-0">
                  <td className="t-small px-4 py-4 align-top text-fg">{row.constraint}</td>
                  <td className="t-small px-4 py-4 align-top text-fg-muted">{row.approach}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="t-h4 mt-8 text-fg">Who this is for</h3>
        <p className="t-body mt-4 text-fg-muted">
          Banks, insurers, payment institutions, and financial infrastructure
          providers in the UAE and wider GCC moving an AI initiative from an
          internal pilot toward a system a compliance function will actually
          sign off on.
        </p>

        <p className="t-caption mt-8 rounded-sm border border-border bg-surface px-4 py-3 text-fg-subtle">
          This describes V47&apos;s method, not a completed regulatory
          approval. Specific compliance sign-off is always the responsibility
          of your institution&apos;s own risk and legal functions.
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
