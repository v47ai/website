import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getAllEntries, getEntryBySlug } from "@/lib/content";
import { ContentDetail } from "@/components/sections/ContentDetail";

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

  return {
    title: entry.frontmatter.title,
    description: entry.frontmatter.summary,
    alternates: { canonical: `/work/${slug}` },
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const entry = getEntryBySlug("case-study", slug);
  if (!entry) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: entry.frontmatter.title,
    description: entry.frontmatter.summary,
    author: { "@type": "Person", name: entry.frontmatter.author },
    datePublished: entry.frontmatter.publishedAt,
    dateModified: entry.frontmatter.updatedAt,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ContentDetail entry={entry} eyebrowLabel="Case study" indexHref="/work" indexLabel="Work" />
    </>
  );
}
