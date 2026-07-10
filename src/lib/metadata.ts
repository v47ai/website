import type { Metadata } from "next";

interface PageMetadataInput {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
}

/**
 * Next.js does not inherit per-page title/description into openGraph/twitter
 * automatically — without this, every page silently falls back to the root
 * layout's static OG tags, so shared links (LinkedIn especially) all show
 * the homepage card regardless of which page was actually shared.
 */
export function buildMetadata({ title, description, path, type = "website" }: PageMetadataInput): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      title,
      description,
      url: path,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
