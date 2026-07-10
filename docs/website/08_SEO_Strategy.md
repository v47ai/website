# V47 — SEO Strategy

**Version 1.0 | Owner: Vignesh | Status: Draft for Build**
**Companion to:** `03_Information_Architecture.md`, `05_Content_Strategy.md` · **Feeds:** `09_Master_Build_Prompt.md`

---

## 0. Principle

V47's SEO goal is **not** high-volume traffic — it's being **found by the right thirty people**: GCC government directors, bank CIOs, and Big-4 partners researching AI delivery, plus the analysts who brief them. This is **authority + intent + local** SEO, not commodity keyword farming. The Insights engine (PRD §10) is the growth flywheel; everything else is technical hygiene done to a high standard.

Quality bar aligns with content governance (Content §7): every ranked page must survive the reference-check test. No thin SEO pages.

---

## 1. Technical SEO Foundation (Next.js 15 / App Router)

- **Metadata API:** every route exports typed `metadata` (or `generateMetadata` for dynamic routes) — title, description, canonical, OG, Twitter, robots.
- **`sitemap.xml`:** generated via `app/sitemap.ts` from the content layer (all published routes, `lastModified` from frontmatter `updatedAt`).
- **`robots.txt`:** via `app/robots.ts` — allow all published, disallow `/api`, drafts, and any gated PDF paths; point to sitemap.
- **Canonical URLs:** self-referencing canonical on every page; enforce single host (`https://v47ai.com`, non-www), lowercase, no trailing slash (IA §1).
- **Rendering:** static generation (SSG/ISR) for all content pages — fast, crawlable HTML. No client-only content for anything that must rank.
- **RSS:** `app/rss.xml` for Insights (feeds subscribers + syndication).
- **Internationalisation-ready:** reserve `/ar` and `hreflang` scaffolding now (Brand §10) even if English-only at launch — don't emit `hreflang` until Arabic exists.

---

## 2. Structured Data (Schema.org — JSON-LD)

Emit typed JSON-LD per template:

| Template | Schema types |
|---|---|
| Global (root layout) | `Organization` + `ProfessionalService` (name V47, Abu Dhabi address/area served, sameAs → LinkedIn) |
| Home | `WebSite` (+ `SearchAction` if search added) |
| Case study (T3) | `Article` or `CreativeWork` + `BreadcrumbList` |
| Framework (T5) | `Article` / `HowTo` (where the framework is genuinely stepwise) + `BreadcrumbList` |
| Service (T6) | `Service` + `BreadcrumbList` |
| Article (T8) | `Article` (author = Vignesh, `datePublished`, `dateModified`) + `BreadcrumbList` |
| About (T9) | `Person` (Vignesh) linked to the `Organization` |
| FAQ blocks (where present) | `FAQPage` |

`Organization` snippet (root):
```json
{
  "@context":"https://schema.org",
  "@type":"ProfessionalService",
  "name":"V47",
  "description":"Boutique AI consulting — from AI strategy to production.",
  "areaServed":["AE","GCC"],
  "address":{"@type":"PostalAddress","addressLocality":"Abu Dhabi","addressCountry":"AE"},
  "url":"https://v47ai.com",
  "sameAs":["https://www.linkedin.com/company/v47"]
}
```
All schema must be truthful (no fabricated `aggregateRating`, no fake reviews — PRD §4).

---

## 3. Keyword Strategy (clusters, not one-off terms)

Organised by the five content pillars (Content §1). Each cluster = one pillar hub + supporting Insights.

| Pillar / cluster | Representative intents (illustrative) |
|---|---|
| **AI Strategy** | enterprise AI strategy, AI roadmap for enterprises, moving from AI pilot to production |
| **AI Governance** | AI governance framework, governed AI in banking, regulated-industry AI compliance |
| **Enterprise AI Delivery** | why AI projects fail, AI proof of concept to production, enterprise AI adoption |
| **GovTech** | AI for government, public sector AI strategy, government AI use cases (GCC/UAE) |
| **Product Leadership for AI** | AI product management, product thinking for AI, AI operating model |
| **Local / brand** | AI consulting Abu Dhabi, AI consultant UAE, boutique AI consultancy Gulf |

**Approach:** target *high-intent, lower-volume* long-tail (the buyer's actual research language) over broad head terms V47 can't outrank. Own the GCC + regulated-industry angle — that's the defensible niche. Do keyword validation before writing (real search demand), but let genuine expertise drive topics, not the reverse.

---

## 4. On-Page SEO (per template)

- **Title pattern:** `{Page title} — V47` (home: `V47 — AI Strategy to Production | Abu Dhabi`). ≤60 chars.
- **Meta description:** from frontmatter `summary`, ≤155 chars, real and specific (doubles as the standfirst).
- **One `<h1>` per page**, keyword-natural, matching the visible headline.
- **Semantic headings** (h2/h3) reflect real structure (also good for a11y — Component §11).
- **Internal linking (IA §6):** every proof page cross-links to related Methods/Work/Lab — this distributes authority and keeps crawl depth shallow.
- **Image SEO:** descriptive `alt` on all meaningful images; `next/image` for sizing; no stock (Brand §6.2).
- **Descriptive, permanent slugs** (IA §1).

---

## 5. Open Graph & Social

- Dynamic OG images per content page via `@vercel/og` (Next OG route) — obsidian bg, wordmark, title in Newsreader, one brass hairline, pillar eyebrow in mono. On-brand, generated from frontmatter.
- `og:type` = `website` (home) / `article` (Insights, case studies). Twitter `summary_large_image`.
- LinkedIn is the priority social surface (the buyer lives there) — verify preview rendering there specifically.

---

## 6. Local / GCC SEO

- **Google Business Profile** for V47 (Abu Dhabi) if a verifiable business address exists — strong local signal for "AI consulting Abu Dhabi."
- Consistent **NAP** (name, address, phone) across site footer, profile, and directories.
- Emphasise Abu Dhabi licensing and GCC/regulated-industry context in copy and schema (`areaServed`).
- Consider listings in reputable UAE/GCC tech and government-vendor directories (quality only — no spammy backlink farms; a bad backlink profile hurts this audience's trust).

---

## 7. Core Web Vitals & Performance (ranking + credibility)

Fast is part of the brand (a slow "premium" site is a contradiction). Targets:

| Metric | Target |
|---|---|
| LCP | < 2.0s |
| CLS | < 0.05 (motion must not shift layout — Motion §6) |
| INP | < 200ms |
| Lighthouse (Perf/SEO/A11y/BP) | ≥ 95 each |

Enablers: SSG/ISR, `next/font` self-hosting (no FOUT/CLS), `next/image`, code-split GSAP to signature routes only, minimal JS on content pages, Vercel edge caching.

---

## 8. Measurement (feeds Phase 6 / Growth)

- **Google Analytics 4** + **Microsoft Clarity** (both in PRD §12 stack) — GA for acquisition/conversion, Clarity for heatmaps/session insight on the buyer journeys (IA §5).
- **Google Search Console:** verify domain, submit sitemap, monitor impressions/queries per pillar, watch for indexation issues.
- **Primary KPI:** not raw traffic — it's *qualified engagement*: booking-CTA clicks, company-profile downloads, case-study depth, and returning research sessions. Track those as conversions.

---

## 9. Content-SEO Loop (the flywheel)

```
Insight published (1/week, depth-first)
   → tagged to a pillar cluster
   → internally links to Methods + Work
   → earns authority for the pillar hub
   → hub ranks for high-intent buyer terms
   → buyer lands, follows journey (IA §5)
   → books a session
```

Never sacrifice depth for cadence (Content §4). One authoritative article outranks ten thin ones for this audience and this niche.

---

*End of `08_SEO_Strategy.md`. Next: `09_Master_Build_Prompt.md`.*
