import NextLink from "next/link";

import { getAllEntries } from "@/lib/content";
import { Badge, type BadgeStatus } from "@/components/primitives/Badge";
import { Card } from "@/components/primitives/Card";
import { Reveal } from "@/components/primitives/Reveal";

const STATUS_MAP: Record<string, BadgeStatus> = {
  delivered: "delivered",
  "in-progress": "in-progress",
  concept: "concept",
  "live-demo": "live-demo",
};

export function WorkGrid() {
  const caseStudies = getAllEntries("case-study");

  if (caseStudies.length === 0) return null;

  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-container px-5 py-20 sm:px-10">
        <Reveal>
          <p className="t-eyebrow text-brass-500">Case studies</p>
          <h2 className="t-h2 mt-2 text-fg">Work we&apos;ve actually delivered.</h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {caseStudies.map((entry, index) => (
            <Reveal key={entry.frontmatter.slug} delay={index * 0.05}>
              <NextLink href={`/work/${entry.frontmatter.slug}`} className="block h-full">
                <Card featured={index === 0} className="flex h-full flex-col gap-4">
                  <div className="flex items-center justify-between gap-4">
                    <p className="tabular-figures t-h3 text-fg">{entry.frontmatter.resultMetric}</p>
                    <Badge status={STATUS_MAP[entry.frontmatter.status]} />
                  </div>
                  <div>
                    <h3 className="t-h4 text-fg">{entry.frontmatter.title}</h3>
                    <p className="t-small mt-2 text-fg-muted">{entry.frontmatter.summary}</p>
                  </div>
                </Card>
              </NextLink>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <NextLink
            href="/work"
            className="t-small mt-8 inline-block text-interactive underline underline-offset-[3px] hover:text-azure-400"
          >
            See all work →
          </NextLink>
        </Reveal>
      </div>
    </section>
  );
}
