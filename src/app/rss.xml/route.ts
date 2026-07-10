import { getAllEntries } from "@/lib/content";

const SITE_URL = "https://v47ai.com";

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export function GET() {
  const entries = getAllEntries("insight");

  const items = entries
    .map(
      (entry) => `
    <item>
      <title>${escapeXml(entry.frontmatter.title)}</title>
      <link>${SITE_URL}/insights/${entry.frontmatter.slug}</link>
      <guid>${SITE_URL}/insights/${entry.frontmatter.slug}</guid>
      <description>${escapeXml(entry.frontmatter.summary)}</description>
      <pubDate>${new Date(entry.frontmatter.publishedAt).toUTCString()}</pubDate>
    </item>`
    )
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>V47 — Insights</title>
    <link>${SITE_URL}/insights</link>
    <description>How V47 thinks about governed, production-grade enterprise AI.</description>
    <language>en</language>${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
