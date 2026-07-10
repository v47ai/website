import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getAllEntries, getEntryBySlug } from "@/lib/content";
import { ContentDetail } from "@/components/sections/ContentDetail";
import { buildMetadata } from "@/lib/metadata";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllEntries("case-study").map((entry) => ({ slug: entry.frontmatter.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const entry = getEntryBySlug("case-study", slug);
  if (!entry) return {};

  return buildMetadata({
    title: entry.frontmatter.title,
    description: entry.frontmatter.summary,
    path: `/work/${slug}`,
    type: "article",
  });
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const entry = getEntryBySlug("case-study", slug);
  if (!entry) notFound();

  return <ContentDetail entry={entry} eyebrowLabel="Case study" indexHref="/work" indexLabel="Work" />;
}
