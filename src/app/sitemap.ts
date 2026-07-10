import type { MetadataRoute } from "next";

import { getAllEntries } from "@/lib/content";

const SITE_URL = "https://v47ai.com";

const STATIC_ROUTES = ["/", "/work", "/lab", "/methods", "/insights", "/about", "/contact", "/company-profile"];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "/" ? 1 : 0.7,
  }));

  const contentEntries: MetadataRoute.Sitemap = (
    [
      ["case-study", "/work"],
      ["lab", "/lab"],
      ["framework", "/methods"],
      ["insight", "/insights"],
    ] as const
  ).flatMap(([type, base]) =>
    getAllEntries(type).map((entry) => ({
      url: `${SITE_URL}${base}/${entry.frontmatter.slug}`,
      lastModified: new Date(entry.frontmatter.updatedAt),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }))
  );

  return [...staticEntries, ...contentEntries];
}
