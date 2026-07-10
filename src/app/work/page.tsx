import type { Metadata } from "next";

import { getAllEntries } from "@/lib/content";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { ContentList } from "@/components/sections/ContentList";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Work",
  description: "Case studies: real AI systems V47 has built for governments and enterprises.",
  path: "/work",
});

export default function WorkIndexPage() {
  const entries = getAllEntries("case-study");

  return (
    <div className="mx-auto max-w-container px-5 py-20 sm:px-10">
      <Eyebrow>Work</Eyebrow>
      <h1 className="t-h1 mt-3 text-fg">Case studies</h1>
      <p className="t-body-l mt-4 max-w-prose text-fg-muted">
        Real AI systems, not slideware. Every case study follows the same
        structure — challenge, approach, architecture, results — so you can
        compare them honestly.
      </p>

      <div className="mt-12">
        <ContentList entries={entries} basePath="/work" emptyMessage="No case studies published yet." />
      </div>
    </div>
  );
}
