import NextLink from "next/link";
import type { Metadata } from "next";

import { getAllEntries } from "@/lib/content";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { Reveal } from "@/components/primitives/Reveal";

export const metadata: Metadata = {
  title: "Insights",
  description: "How V47 thinks about governed, production-grade enterprise AI.",
  alternates: { canonical: "/insights" },
};

export default function InsightsIndexPage() {
  const entries = getAllEntries("insight");

  return (
    <div className="mx-auto max-w-container px-5 py-20 sm:px-10">
      <Eyebrow>Insights</Eyebrow>
      <h1 className="t-h1 mt-3 text-fg">
        How we think about governed, production-grade enterprise AI.
      </h1>

      <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2">
        {entries.length === 0 ? (
          <p className="t-body text-fg-muted">No articles published yet.</p>
        ) : (
          entries.map((entry, index) => (
            <Reveal key={entry.frontmatter.slug} delay={index * 0.05}>
              <NextLink href={`/insights/${entry.frontmatter.slug}`} className="block">
                <Eyebrow muted>{entry.frontmatter.pillar.replace("-", " ")}</Eyebrow>
                <h2 className="t-h3 font-display mt-2 text-fg">{entry.frontmatter.title}</h2>
                <p className="t-small mt-3 text-fg-muted">{entry.frontmatter.summary}</p>
                <time
                  dateTime={entry.frontmatter.publishedAt}
                  className="t-caption mt-4 block text-fg-subtle"
                >
                  {new Date(entry.frontmatter.publishedAt).toLocaleDateString("en-GB", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </NextLink>
            </Reveal>
          ))
        )}
      </div>
    </div>
  );
}
