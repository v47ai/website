# V47 — Information Architecture

**Version 1.0 | Owner: Vignesh | Status: Draft for Build**
**Companion to:** `01_PRD.md`, `02_Brand_Guidelines.md` · **Feeds:** `06_Component_Specification.md`, `08_SEO_Strategy.md`, `09_Master_Build_Prompt.md`

---

## 0. Principle

IA is not a list of pages — it is the **buyer's path to a "yes."** Every route exists to answer one of the six PRD questions (*who are you · why trust you · what problems · can you deliver · how you work · how to engage*). If a route serves none of them, it doesn't ship in V1.

The site is a **hub-and-spoke**, not a funnel: the homepage is the hub; Case Studies, AI Lab, and Frameworks are the proof spokes; Contact is the single conversion endpoint every spoke points to.

---

## 1. Sitemap & URL Structure

```
v47ai.com/
│
├── /                          Home (hub)
│
├── /services                  Services overview
│   ├── /services/ai-discovery-workshop
│   ├── /services/ai-prototype-sprint
│   └── /services/enterprise-ai-strategy
│
├── /industries                Industries overview (interactive selector)
│   ├── /industries/government
│   ├── /industries/financial-services
│   ├── /industries/real-estate
│   ├── /industries/construction
│   ├── /industries/healthcare
│   ├── /industries/education
│   └── /industries/legal
│
├── /work                      Case Studies index  (label: "Work")
│   ├── /work/justice-corner
│   ├── /work/executive-intelligence-os
│   ├── /work/ai-resume-platform
│   └── /work/[enterprise-ai-products]     (confidentiality-gated detail)
│
├── /lab                       AI Lab index
│   ├── /lab/ai-pmo
│   ├── /lab/procurement-agent
│   ├── /lab/hr-agent
│   ├── /lab/ceo-copilot
│   └── /lab/mcp-experiments
│
├── /methods                   Frameworks index  (public label: "Methods")
│   ├── /methods/ai-discovery-framework
│   ├── /methods/enterprise-ai-readiness
│   ├── /methods/ai-governance-framework
│   ├── /methods/prototype-to-production
│   └── /methods/executive-ai-adoption
│
├── /insights                  Articles index
│   └── /insights/[slug]
│
├── /about                     About / founder
│
├── /contact                   Contact + booking
│
├── /company-profile           (gated or direct link to downloadable PDF)
│
└── System routes
    ├── /sitemap.xml
    ├── /robots.txt
    ├── /rss.xml               (Insights feed)
    ├── /404, /500
    └── /privacy, /terms
```

### URL Conventions (do not deviate — SEO + consistency)

- Lowercase, hyphenated, no trailing slash, no file extensions, no query params for canonical content.
- Nouns for sections (`/work`, `/lab`, `/methods`), never verbs.
- Public labels vs internal names: **"Frameworks"** ships as **`/methods`** (buyer-facing: "how we think"); **"Case Studies"** ships as **`/work`** (shorter, cleaner, more senior). Keep these mappings fixed.
- Slugs are stable and permanent. If a title changes, keep the old slug and update the display title, or add a 301.

---

## 2. Navigation Model

### 2.1 Primary Nav (desktop, sticky, obsidian with hairline `--line` bottom border)

```
[V47]        Work   Methods   Lab   Insights   About        [Book a Session →]
```

**Rationale for order:** proof first (*Work*), thinking second (*Methods*), capability third (*Lab*), authority fourth (*Insights*), identity last (*About*). Services and Industries are **not** top-level in V1 — they're reached from the homepage and from within Work/Methods, keeping the nav to 5 items + 1 CTA (senior restraint; a crowded nav reads as an agency). Revisit in v1.1 if Services traffic justifies promotion.

- The CTA button (`Book a Session`) is the only brass-accented nav element (per Brand §4.3 — one accent only).
- Logo links home. Current section gets a subtle brass underline (active state).

### 2.2 Mobile Nav

- Hamburger → full-screen obsidian overlay, mono-labelled links, staggered reveal (see `07_Motion_System.md`), CTA pinned at bottom. Girih motif at low opacity behind (Brand §6.3).

### 2.3 Footer (every page)

Four columns + a base row:

```
Explore            Firm              Connect            Legal
Work               About             Book a Session     Privacy
Methods            Company Profile   Email              Terms
Lab                Contact           LinkedIn
Insights                             RSS

────────────────────────────────────────────────
V47 · Boutique AI Consulting · Licensed in Abu Dhabi, UAE
© {year} V47.        [girih motif hairline]
```

Footer carries the descriptor lockup (Brand §3.1) and the Abu Dhabi licensing line — a persistent trust signal.

---

## 3. Page Templates (reusable — map to `06_Component_Specification.md`)

| Template | Routes using it | Key blocks |
|---|---|---|
| **T1 — Home** | `/` | Hero, Trust bar, What we do, Industries selector, Featured work, Method timeline, Lab strip, Insights teaser, Contact band |
| **T2 — Index/Listing** | `/work`, `/lab`, `/methods`, `/insights`, `/industries` | Section intro, filter/selector (where relevant), card grid, contact band |
| **T3 — Case Study** | `/work/[slug]` | Fixed 8-part structure (PRD §9): Context → Challenge → Objectives → Approach → Architecture → Technology → Results → Key Learnings |
| **T4 — Lab Entry** | `/lab/[slug]` | Problem → Demo (live/embedded/"in progress") → Architecture → Tech stack → Lessons learned |
| **T5 — Framework/Method** | `/methods/[slug]` | Thesis → The framework (diagram) → Stages → When to use → soft link to Contact (no hard CTA) |
| **T6 — Service** | `/services/[slug]` | Offering → Duration → Deliverables → Outcomes → Ideal client → CTA |
| **T7 — Industry** | `/industries/[slug]` | Sector context → Where AI creates value → Relevant work → Relevant methods → CTA |
| **T8 — Article** | `/insights/[slug]` | Editorial long-form: eyebrow, title, meta, body (60–75ch measure), author, related |
| **T9 — About** | `/about` | Founder narrative, verifiable credentials, method summary, portrait, CTA |
| **T10 — Contact** | `/contact` | Three low-friction actions only (book / email / LinkedIn) |

**Consistency rule (PRD §9):** T3 case studies never vary their structure, even when a story tempts a different order. Consistency *is* the trust signal.

---

## 4. Content Hierarchy per Page (what leads, always)

- **Home:** Positioning headline → proof → capability → path to engage. Never lead with "welcome."
- **Case study:** lead with **outcome/result** as the eyebrow metric, then tell the story in fixed order. The buyer scans results first.
- **Lab entry:** lead with the **working demo** (or its honest status), then explain. Show, don't claim (Brand §2.2).
- **Method:** lead with the **thesis/point of view**, then the framework diagram.
- **Article:** lead with a real argument in the first two sentences — no throat-clearing.

---

## 5. Buyer Journeys (map routes to the six questions)

| Buyer question | Primary route(s) | Conversion nudge |
|---|---|---|
| Who are you? | `/` hero → `/about` | Soft |
| Why trust you? | Trust bar → `/work` → `/about` credentials | Soft |
| What problems do you solve? | `/services`, `/industries/[x]` | Medium |
| Can you actually deliver? | `/work/[slug]`, `/lab/[slug]` | **Highest-intent — strongest CTA placement** |
| How do you work? | Method timeline → `/methods/[slug]` | Soft (thought leadership, not sales) |
| How do I engage? | `/contact` | Convert |

**Three canonical journeys to optimise for:**

1. **The referred CIO** (arrives at `/` from a warm intro): Home → Work → one case study → Contact. Fastest path; must be frictionless.
2. **The researching analyst** (arrives at an Insights article via search): Article → related Methods → About → Contact. Long path; nurture with cross-links.
3. **The procurement/RFP evaluator** (needs artefacts): Home → Company Profile download → Work → Contact. Ensure the profile PDF is one click from the footer.

---

## 6. Cross-Linking Rules (the "living HQ" behaviour)

Every proof page links laterally, not just up:
- Case study → the **Methods** it used + the **Lab** experiments behind it + related **Industry**.
- Method → **Case studies** where it was applied (proof it's real, not theoretical).
- Lab entry → related **Methods** + any **case study** it informed.
- Article → related Methods + Work + one contextual CTA.

This turns the site from a brochure into the interconnected HQ the PRD envisions — everything points inward to proof, and outward to Contact.

---

## 7. Metadata & Routing Notes (handoff to SEO doc)

- Each template defines a metadata contract (title pattern, description, OG image) — specified in `08_SEO_Strategy.md`.
- Next.js App Router: one `layout.tsx` per section, dynamic `[slug]` routes for T3/T4/T5/T6/T7/T8 driven by MDX/content files in `/content`.
- Breadcrumbs on all detail pages (T3–T8): `Home / Section / Page`, with `BreadcrumbList` schema.
- Pagination on `/insights` when >12 articles.
- **RTL readiness (Brand §10):** all routes duplicate-ready under a future `/ar` prefix; use logical properties in layout now.

---

## 8. V1 Build Priority (respect PRD §14 sequencing)

Ship in this order — do not build all routes at once:

1. **`/` (Home)** — the hub, complete and polished.
2. **One flagship `/lab/[slug]`** — the clickable-proof anchor.
3. **Two real `/work/[slug]`** case studies.
4. `/about`, `/contact`, `/methods` index + 1 method.
5. `/insights` index + 2–3 launch articles.
6. Everything else (full Services, all Industries, remaining Lab/Methods) queues into Phase 5–6.

---

*End of `03_Information_Architecture.md`. Next: `04_Design_System.md`.*
