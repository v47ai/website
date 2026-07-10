import type { Metadata } from "next";

import { Eyebrow } from "@/components/primitives/Eyebrow";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Terms",
  description: "Terms of use for the V47 website.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-container px-5 py-20 sm:px-10">
      <Eyebrow>Legal</Eyebrow>
      <h1 className="t-h1 mt-3 text-fg">Terms</h1>

      <div className="mt-8 max-w-prose">
        <p className="t-caption rounded-sm border border-border bg-surface px-4 py-3 text-fg-subtle">
          Draft placeholder — these terms have not been reviewed by counsel.
          Replace with reviewed terms before relying on this page.
        </p>

        <p className="t-body mt-6 text-fg-muted">
          This website and its content are provided by V47, a boutique AI
          consulting practice licensed in Abu Dhabi, UAE. Content on this
          site is informational and does not constitute a service agreement
          — engagement terms are set out separately in any signed proposal or
          contract with V47.
        </p>
        <p className="t-body mt-4 text-fg-muted">
          Questions about these terms: {" "}
          <a
            href="mailto:vignesh@v47ai.com"
            className="text-interactive underline underline-offset-[3px] hover:text-azure-400"
          >
            vignesh@v47ai.com
          </a>
          .
        </p>
      </div>
    </div>
  );
}
