import NextLink from "next/link";

import { getAllEntries } from "@/lib/content";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { Reveal } from "@/components/primitives/Reveal";

interface InsightGridProps {
  limit?: number;
}

export function InsightGrid({ limit }: InsightGridProps) {
  const entries = getAllEntries("insight");
  const items = limit ? entries.slice(0, limit) : entries;

  if (items.length === 0) return null;

  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-container px-5 py-20 sm:px-10">
        <Reveal>
          <p className="t-eyebrow text-brass-500">Insights</p>
          <h2 className="t-h2 mt-2 text-fg">
            How we think about governed, production-grade enterprise AI.
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {items.map((entry, index) => (
            <Reveal key={entry.frontmatter.slug} delay={index * 0.05}>
              <NextLink href={`/insights/${entry.frontmatter.slug}`} className="block">
                <Eyebrow muted>{entry.frontmatter.pillar.replace("-", " ")}</Eyebrow>
                <h3 className="t-h4 font-display mt-2 text-fg">{entry.frontmatter.title}</h3>
                <time
                  dateTime={entry.frontmatter.publishedAt}
                  className="t-caption mt-3 block text-fg-subtle"
                >
                  {new Date(entry.frontmatter.publishedAt).toLocaleDateString("en-GB", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </NextLink>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <NextLink
            href="/insights"
            className="t-small mt-8 inline-block text-interactive underline underline-offset-[3px] hover:text-azure-400"
          >
            Read more insights →
          </NextLink>
        </Reveal>
      </div>
    </section>
  );
}
