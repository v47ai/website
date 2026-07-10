import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getAllEntries, getEntryBySlug } from "@/lib/content";
import { ContentDetail } from "@/components/sections/ContentDetail";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllEntries("lab").map((entry) => ({ slug: entry.frontmatter.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const entry = getEntryBySlug("lab", slug);
  if (!entry) return {};

  return {
    title: entry.frontmatter.title,
    description: entry.frontmatter.summary,
    alternates: { canonical: `/lab/${slug}` },
  };
}

export default async function LabEntryPage({ params }: PageProps) {
  const { slug } = await params;
  const entry = getEntryBySlug("lab", slug);
  if (!entry) notFound();

  return <ContentDetail entry={entry} eyebrowLabel="AI Lab" indexHref="/lab" indexLabel="Lab" />;
}
