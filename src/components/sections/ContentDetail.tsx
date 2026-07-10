import NextLink from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";

import type { ContentEntry } from "@/lib/content";
import { mdxComponents } from "@/lib/mdx-components";
import { Badge, type BadgeStatus } from "@/components/primitives/Badge";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { buttonVariants } from "@/components/primitives/Button";
import { Reveal } from "@/components/primitives/Reveal";

const STATUS_MAP: Record<string, BadgeStatus> = {
  delivered: "delivered",
  "in-progress": "in-progress",
  concept: "concept",
  "live-demo": "live-demo",
};

interface ContentDetailProps {
  entry: ContentEntry;
  eyebrowLabel: string;
  indexHref: string;
  indexLabel: string;
  showCta?: boolean;
}

export function ContentDetail({
  entry,
  eyebrowLabel,
  indexHref,
  indexLabel,
  showCta = true,
}: ContentDetailProps) {
  const { frontmatter } = entry;

  return (
    <article className="mx-auto max-w-container px-5 py-20 sm:px-10">
      <nav aria-label="Breadcrumb" className="t-caption text-fg-subtle">
        <NextLink href={indexHref} className="hover:text-fg">
          {indexLabel}
        </NextLink>
        <span className="mx-2">/</span>
        <span aria-current="page">{frontmatter.title}</span>
      </nav>

      <div className="mt-6 max-w-prose">
        <Eyebrow>{eyebrowLabel}</Eyebrow>

        <div className="mt-3 flex flex-wrap items-center gap-3">
          {frontmatter.resultMetric && (
            <p className="tabular-figures t-h3 text-fg">{frontmatter.resultMetric}</p>
          )}
          <Badge status={STATUS_MAP[frontmatter.status]} />
        </div>

        <h1 className="t-h1 mt-4 text-fg">{frontmatter.title}</h1>
        <p className="t-body-l mt-4 text-fg-muted">{frontmatter.summary}</p>
      </div>

      <div className="mt-12 max-w-prose">
        <MDXRemote source={entry.content} components={mdxComponents} />
      </div>

      {showCta && (
        <Reveal>
          <div className="mt-16 flex flex-wrap gap-4 border-t border-border pt-10">
            <NextLink href="/contact" className={buttonVariants({ variant: "primary" })}>
              Book a session
            </NextLink>
            <NextLink
              href="/methods"
              className="t-small inline-flex items-center text-interactive underline underline-offset-[3px] hover:text-azure-400"
            >
              See how we work →
            </NextLink>
          </div>
        </Reveal>
      )}
    </article>
  );
}
