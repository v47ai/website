import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getAllEntries, getEntryBySlug } from "@/lib/content";
import { ContentDetail } from "@/components/sections/ContentDetail";
import { buildMetadata } from "@/lib/metadata";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllEntries("insight").map((entry) => ({ slug: entry.frontmatter.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const entry = getEntryBySlug("insight", slug);
  if (!entry) return {};

  return buildMetadata({
    title: entry.frontmatter.title,
    description: entry.frontmatter.summary,
    path: `/insights/${slug}`,
    type: "article",
  });
}

export default async function InsightArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const entry = getEntryBySlug("insight", slug);
  if (!entry) notFound();

  return (
    <ContentDetail
      entry={entry}
      eyebrowLabel="Insight"
      indexHref="/insights"
      indexLabel="Insights"
      showCta={false}
    />
  );
}
