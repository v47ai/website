import type { Metadata } from "next";

import { getAllEntries } from "@/lib/content";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { ContentList } from "@/components/sections/ContentList";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Methods",
  description: "How V47 thinks — the frameworks behind the delivery.",
  path: "/methods",
});

export default function MethodsIndexPage() {
  const entries = getAllEntries("framework");

  return (
    <div className="mx-auto max-w-container px-5 py-20 sm:px-10">
      <Eyebrow>Methods</Eyebrow>
      <h1 className="t-h1 mt-3 text-fg">How we take AI from idea to production.</h1>
      <p className="t-body-l mt-4 max-w-prose text-fg-muted">
        Most consulting sites tell you what they do. This is how we think.
      </p>

      <div className="mt-12">
        <ContentList entries={entries} basePath="/methods" emptyMessage="No frameworks published yet." />
      </div>
    </div>
  );
}
