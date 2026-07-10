import type { MetadataRoute } from "next";

import { getAllEntries } from "@/lib/content";
import { INDUSTRIES } from "@/lib/industries";

const SITE_URL = "https://v47ai.com";

const STATIC_ROUTES = [
  "/",
  "/work",
  "/lab",
  "/methods",
  "/insights",
  "/about",
  "/contact",
  "/company-profile",
  "/services",
  "/services/regulated-ai-open-finance",
  "/services/decision-intelligence-os",
  "/industries",
];

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

  const industryEntries: MetadataRoute.Sitemap = INDUSTRIES.map((industry) => ({
    url: `${SITE_URL}/industries/${industry.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  return [...staticEntries, ...contentEntries, ...industryEntries];
}
