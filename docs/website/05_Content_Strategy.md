# V47 — Content Strategy

**Version 1.0 | Owner: Vignesh | Status: Draft for Build**
**Companion to:** `01_PRD.md`, `02_Brand_Guidelines.md` · **Feeds:** `08_SEO_Strategy.md`, `10_Copywriting_Guide.md`

---

## 0. Principle

Content is how V47 *proves* the positioning instead of asserting it. The governing rule from PRD §4 — **verifiable over impressive** — is a content strategy, not just a copy note: V47 wins trust by giving away real thinking (Methods), showing real working systems (Lab), and reporting real outcomes (Work). Depth over volume, always.

Each piece of content must earn its place by answering one of the six buyer questions (PRD §3). If it answers none, it isn't published.

---

## 1. Content Pillars (topic authority)

Everything V47 publishes ladders to five pillars. These are also the SEO clusters (see `08`):

1. **AI Strategy** — moving from ambition to a prioritised, fundable roadmap.
2. **AI Governance** — governed, auditable AI in regulated environments (CBUAE/SAMA-aware).
3. **Enterprise AI Delivery** — why pilots stall and how to reach production.
4. **GovTech** — AI for government and the public sector, GCC context.
5. **Product Leadership for AI** — product thinking applied to AI, not feature-chasing.

Every article, framework, and case study is tagged to exactly one primary pillar (+ optional secondary).

---

## 2. Content Types & Their Jobs

| Type | Route | Job (buyer question) | Voice register (Brand §2.4) |
|---|---|---|---|
| **Case Study** | `/work/[slug]` | *Can you deliver?* | Factual, structured, understated |
| **Lab Entry** | `/lab/[slug]` | *Can you deliver?* (clickable proof) | Candid, technical, includes what didn't work |
| **Framework** | `/methods/[slug]` | *How do you think?* | Authoritative, teacherly, generous |
| **Insight (article)** | `/insights/[slug]` | *Why trust you?* / authority | Argument-led, editorial |
| **Service** | `/services/[slug]` | *What do you solve?* | Consulting offering, not feature list |
| **Industry** | `/industries/[slug]` | *Do you understand my world?* | Sector-specific, concrete |
| **About** | `/about` | *Who are you?* | Personal, senior, verifiable |
| **Company Profile (PDF)** | download | *Procurement-ready proof* | Formal, complete, print |

---

## 3. Content Templates (fixed structures)

### 3.1 Case Study (PRD §9 — DO NOT VARY)
```
Client Context → Business Challenge → Objectives → Approach →
Architecture → Technology → Results → Key Learnings
```
Rules: lead the page with the headline **Result** as an eyebrow metric. Every number sourced and true. Where confidentiality applies, describe at the permitted level ("a MENA bank," not a name) — never inflate to compensate. Consistency across all case studies is itself the trust signal.

### 3.2 Lab Entry
```
Problem → Demo (live / embedded / "in progress" badge) →
Architecture → Tech Stack → Lessons Learned
```
Rules: lead with the working demo or its honest status badge (Design §5.3). "Lessons Learned" must include a real limitation — candour here raises credibility.

### 3.3 Framework
```
The Thesis (point of view) → The Framework (diagram) →
Stages / Components → When to use it → Soft link to Contact
```
Rules: no hard CTA (PRD §8). This is IP-signalling, not selling. The framework diagram is the hero.

### 3.4 Insight (article)
```
Eyebrow (pillar) → Title → Standfirst (1–2 sentences of real argument) →
Body (60–75ch measure) → Author → Related Methods/Work
```
Rules: the first two sentences state a genuine argument — no "In today's fast-paced world…". Target depth of a senior practitioner writing for peers.

---

## 4. Editorial Cadence & Governance

- **Cadence (PRD §10):** one high-quality Insight per week. Not daily. Depth over frequency.
- **Launch minimum:** 2–3 Insights live at launch (an empty Insights section undercuts "thought leadership" — PRD §6.8).
- **Backlog discipline:** maintain a running backlog of ≥6 article outlines so cadence never forces low-quality filler.
- **Fact-check gate:** before any content publishes, every claim passes the reference-check test (PRD §4). One inflated claim discredits the page.
- **Confidentiality gate:** client names, figures, and system details only at the level explicitly permitted (OQ in PRD §16). When unsure, generalise — never guess.

---

## 5. Launch Content Inventory (what must exist at V1)

Aligned to PRD §14 build order:

**Must-have at launch**
- Home copy (all sections) — see `10_Copywriting_Guide.md`
- 1 flagship Lab entry (fully working demo or honest status)
- 2 real case studies (fixed template)
- About (founder narrative + verifiable credentials)
- Contact (three actions)
- 1 Framework (the AI Discovery Framework — the most demo-able)
- 2–3 Insights articles (one per top pillar)
- Company Profile PDF (procurement-ready)

**Fast-follow (Phase 5)**
- Remaining case studies, Lab entries, Frameworks
- Industry pages (start with Government + Financial Services — the strongest fit)
- Full Services pages

---

## 6. Taxonomy & Metadata

Every content file (MDX in `/content`) carries frontmatter:

```yaml
title:        # display title
slug:         # permanent URL slug
type:         # case-study | lab | framework | insight | service | industry
pillar:       # ai-strategy | ai-governance | enterprise-ai | govtech | product-leadership
secondaryPillar:  # optional
status:       # delivered | in-progress | concept | live-demo   (drives the badge)
industry:     # optional: government | financial-services | ...
summary:      # 1–2 sentence standfirst (also meta description seed)
publishedAt:  # ISO date
updatedAt:
author:       # Vignesh
ogImage:      # generated per SEO doc
confidential: # true/false — gates client detail
```

This frontmatter powers listing pages, cross-linking (IA §6), badges (Design §5.3), and SEO (doc 08) — one metadata contract, many behaviours.

---

## 7. Content Governance Rules (the non-negotiables)

1. **Verifiable over impressive** — every claim survives a reference check.
2. **Show, don't assert** — link the demo, show the number, name the method.
3. **Honest status** — `Delivered` / `In progress` / `Concept` badges are mandatory and truthful.
4. **Banned vocabulary** — enforce the Brand §2.3 list at edit time.
5. **One pillar per piece** — no unfocused content.
6. **Depth bar** — if it could have been written by a generic AI agency, it doesn't ship.
7. **Confidentiality first** — generalise rather than risk a breach or an inflation.

---

## 8. The OS Extension

Website content is the source; the same content feeds the wider V47 OS (PRD/CPO note):
- Case studies → proposal appendices + capability statement.
- Frameworks → executive deck sections + workshop materials.
- Insights → LinkedIn posts (repurposed, same voice).
- Company profile → the artefact procurement opens first.

Write once at website quality; syndicate everywhere in the same language.

---

*End of `05_Content_Strategy.md`. Next: `06_Component_Specification.md`.*
