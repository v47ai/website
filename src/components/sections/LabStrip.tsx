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

export function LabStrip() {
  const entries = getAllEntries("lab");

  if (entries.length === 0) return null;

  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-container px-5 py-20 sm:px-10">
        <Reveal>
          <p className="t-eyebrow text-brass-500">AI Lab</p>
          <h2 className="t-h2 mt-2 text-fg">We build to prove capability, not to claim it.</h2>
          <p className="t-body mt-2 max-w-prose text-fg-muted">
            Working experiments — with honest status on each.
          </p>
        </Reveal>

        <div className="mt-10 flex gap-4 overflow-x-auto pb-2">
          {entries.map((entry, index) => (
            <Reveal key={entry.frontmatter.slug} delay={index * 0.05} className="min-w-[260px] flex-1">
              <NextLink href={`/lab/${entry.frontmatter.slug}`} className="block h-full">
                <Card className="flex h-full flex-col gap-3">
                  <Badge status={STATUS_MAP[entry.frontmatter.status]} />
                  <h3 className="t-h4 text-fg">{entry.frontmatter.title}</h3>
                  <p className="t-small text-fg-muted">{entry.frontmatter.summary}</p>
                </Card>
              </NextLink>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
