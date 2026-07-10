import type { Metadata } from "next";

import { Eyebrow } from "@/components/primitives/Eyebrow";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How V47 handles data collected through this website.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-container px-5 py-20 sm:px-10">
      <Eyebrow>Legal</Eyebrow>
      <h1 className="t-h1 mt-3 text-fg">Privacy</h1>

      <div className="mt-8 max-w-prose">
        <p className="t-caption rounded-sm border border-border bg-surface px-4 py-3 text-fg-subtle">
          Draft placeholder — this policy has not been reviewed by counsel.
          Replace with a reviewed policy before this site handles real visitor
          data at scale.
        </p>

        <p className="t-body mt-6 text-fg-muted">
          This site uses privacy-respecting analytics (Google Analytics 4 and
          Microsoft Clarity) to understand how visitors use it. We don&apos;t
          sell visitor data. If you contact us by email, we use the
          information you send only to respond to you.
        </p>
        <p className="t-body mt-4 text-fg-muted">
          Questions about this policy: {" "}
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
