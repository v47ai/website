import NextLink from "next/link";

import type { ContentEntry } from "@/lib/content";
import { Badge, type BadgeStatus } from "@/components/primitives/Badge";
import { Card } from "@/components/primitives/Card";
import { Reveal } from "@/components/primitives/Reveal";

const STATUS_MAP: Record<string, BadgeStatus> = {
  delivered: "delivered",
  "in-progress": "in-progress",
  concept: "concept",
  "live-demo": "live-demo",
};

interface ContentListProps {
  entries: ContentEntry[];
  basePath: string;
  emptyMessage: string;
}

export function ContentList({ entries, basePath, emptyMessage }: ContentListProps) {
  if (entries.length === 0) {
    return <p className="t-body text-fg-muted">{emptyMessage}</p>;
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {entries.map((entry, index) => (
        <Reveal key={entry.frontmatter.slug} delay={index * 0.05}>
          <NextLink href={`${basePath}/${entry.frontmatter.slug}`} className="block h-full">
            <Card className="flex h-full flex-col gap-4">
              <div className="flex items-center justify-between gap-4">
                {entry.frontmatter.resultMetric && (
                  <p className="tabular-figures t-h4 text-fg">{entry.frontmatter.resultMetric}</p>
                )}
                <Badge status={STATUS_MAP[entry.frontmatter.status]} />
              </div>
              <div>
                <h2 className="t-h4 text-fg">{entry.frontmatter.title}</h2>
                <p className="t-small mt-2 text-fg-muted">{entry.frontmatter.summary}</p>
              </div>
            </Card>
          </NextLink>
        </Reveal>
      ))}
    </div>
  );
}
