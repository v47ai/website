import type { Metadata } from "next";

import { getAllEntries } from "@/lib/content";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { ContentList } from "@/components/sections/ContentList";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "AI Lab",
  description: "Working AI experiments from V47, with honest status on each.",
  path: "/lab",
});

export default function LabIndexPage() {
  const entries = getAllEntries("lab");

  return (
    <div className="mx-auto max-w-container px-5 py-20 sm:px-10">
      <Eyebrow>AI Lab</Eyebrow>
      <h1 className="t-h1 mt-3 text-fg">We build to prove capability, not to claim it.</h1>
      <p className="t-body-l mt-4 max-w-prose text-fg-muted">
        Working experiments — with honest status on each. Never a demo that isn&apos;t real.
      </p>

      <div className="mt-12">
        <ContentList entries={entries} basePath="/lab" emptyMessage="No Lab entries published yet." />
      </div>
    </div>
  );
}
