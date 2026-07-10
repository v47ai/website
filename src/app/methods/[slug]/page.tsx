import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getAllEntries, getEntryBySlug } from "@/lib/content";
import { ContentDetail } from "@/components/sections/ContentDetail";
import { buildMetadata } from "@/lib/metadata";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllEntries("framework").map((entry) => ({ slug: entry.frontmatter.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const entry = getEntryBySlug("framework", slug);
  if (!entry) return {};

  return buildMetadata({
    title: entry.frontmatter.title,
    description: entry.frontmatter.summary,
    path: `/methods/${slug}`,
    type: "article",
  });
}

export default async function FrameworkPage({ params }: PageProps) {
  const { slug } = await params;
  const entry = getEntryBySlug("framework", slug);
  if (!entry) notFound();

  return (
    <ContentDetail
      entry={entry}
      eyebrowLabel="Framework"
      indexHref="/methods"
      indexLabel="Methods"
      showCta={false}
    />
  );
}
