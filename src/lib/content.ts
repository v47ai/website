import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type ContentType = "case-study" | "lab" | "framework" | "insight";
export type ContentStatus = "delivered" | "in-progress" | "concept" | "live-demo";
export type Pillar =
  | "ai-strategy"
  | "ai-governance"
  | "enterprise-ai"
  | "govtech"
  | "product-leadership";

export interface ContentFrontmatter {
  title: string;
  slug: string;
  type: ContentType;
  pillar: Pillar;
  secondaryPillar?: Pillar;
  status: ContentStatus;
  industry?: string;
  summary: string;
  publishedAt: string;
  updatedAt: string;
  author: string;
  confidential?: boolean;
  resultLabel?: string;
  resultMetric?: string;
}

export interface ContentEntry {
  frontmatter: ContentFrontmatter;
  content: string;
  readingMinutes: number;
}

const CONTENT_DIR = path.join(process.cwd(), "content");

const TYPE_DIR: Record<ContentType, string> = {
  "case-study": "case-studies",
  lab: "ai-lab",
  framework: "methods",
  insight: "insights",
};

function estimateReadingMinutes(content: string) {
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

export function getAllEntries(type: ContentType): ContentEntry[] {
  const dir = path.join(CONTENT_DIR, TYPE_DIR[type]);
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const raw = fs.readFileSync(path.join(dir, file), "utf8");
      const { data, content } = matter(raw);
      return {
        frontmatter: data as ContentFrontmatter,
        content,
        readingMinutes: estimateReadingMinutes(content),
      };
    })
    .sort(
      (a, b) =>
        new Date(b.frontmatter.publishedAt).getTime() -
        new Date(a.frontmatter.publishedAt).getTime()
    );
}

export function getEntryBySlug(type: ContentType, slug: string): ContentEntry | null {
  return getAllEntries(type).find((entry) => entry.frontmatter.slug === slug) ?? null;
}
