# V47 — Master Record (Vision + PRD + As-Built)

**Status:** Living document. Update this file at the end of every work session.
This is the single file meant to stand alone as the complete picture of V47
the Digital HQ — what was planned (condensed from `docs/00_PROJECT_VISION.md`
and `docs/website/01_PRD.md`–`10_Copywriting_Guide.md`) and what has actually
shipped. `PROJECT_STATUS.md` stays a short current-status snapshot; this file
is the full record, block by block.

**Live URL:** https://website-v47ai.vercel.app (no custom domain connected yet)
**Repo:** `v47ai/website`, branch `main`

---

## Block 0 — Vision & Mission (`docs/00_PROJECT_VISION.md`)

V47 is an enterprise AI consulting company helping governments, regulated
industries, and large enterprises move from AI strategy to production —
executive advisory, product thinking, enterprise architecture, and practical
implementation. **Not** an AI agency, a software house, or a prompt-engineering
consultancy. Does not sell demos; designs systems organizations can trust,
govern, scale, and operate.

**Mission:** Help governments and enterprises transform ambitious AI
strategies into practical, governed, production-ready AI systems.

**Vision:** Become one of the most trusted boutique AI consulting firms
serving the GCC, Europe, and global enterprise markets.

**The V47 ecosystem** (long-term, most deferred):
1. **Digital HQ** (this repo, `website`) — In development. The public face.
2. **Blueprint Studio** (`blueprint-platform`) — Planned. Interactive
   architecture/roadmap tool for prospects to self-serve before engaging V47.
3. **Knowledge Engine** (`knowledge-engine`) — Planned. Structured consulting
   IP: industry knowledge, architecture patterns, tech catalog, decision
   rules, governance frameworks.
4. **AI Lab** — Growing. Production-quality demos: AI PMO, Executive
   Intelligence OS, Justice Corner, Procurement AI, Regulatory AI, future.

**Current priority:** only the Digital HQ. Everything else intentionally
deferred — credibility (website) → conversations → engagements → Knowledge
Engine → Blueprint Studio.

**Core principles (govern every decision in this repo):**
- **Verifiable over impressive** — never exaggerate, never invent client
  names, never fabricate metrics.
- **Demonstrate before you claim** — every claim backed by a working demo,
  architecture, methodology, case study, or technical depth.
- **Quiet confidence** — precision, maturity, institutional trust; never
  loud, flashy, trendy, or startup-like.
- **Enterprise first** — every decision assumes the reader is a CIO, CTO,
  Chief Digital Officer, government director, or procurement committee.
- **Simplicity through structure** — systems, frameworks, repeatable process
  over cleverness.
- **Build for decades** — architectures evolve, trust remains; prioritize
  long-term maintainability over trend-chasing.

**Decision framework, in priority order:** Trust → Clarity → Maintainability
→ Performance → Accessibility → Scalability → Visual polish. Never sacrifice
the first six for the seventh.

**Definition of success:** a visitor concludes within 60 seconds — *"This
company understands enterprise AI transformation."* Nothing else matters
until that's true.

---

## Block 1 — Product Requirements (`docs/website/01_PRD.md`)

**What V47 is not:** a generic AI agency, a freelance dev shop, a template
site with "AI consulting" copy pasted in.

**North Star:** within 60 seconds a CIO/CEO/Ministry Director concludes
*"boutique AI consulting firm, senior leadership, real delivery capability."*
Every section must answer one of six questions — **who are you · why trust
you · what problems do you solve · can you deliver · how do you work · how
do I engage you** — or it doesn't ship.

**Core principle — Verifiable Over Impressive:** every claim must survive a
reference check. In-progress work is labeled honestly ("partnering with,"
not "delivered for"). One inflated claim discounts every true claim on the
same page for this audience.

**Planned Information Architecture (V1):** Home · Services · Industries ·
Case Studies · AI Lab · Frameworks (public label "Methods") · Insights ·
About · Contact.

**Homepage spec (planned):** Hero ("Building AI-Native Enterprises.") →
Trust Signals (4 verifiable credentials, no client logos) → What We Do (4
service cards) → Industries (interactive selector) → Featured Case Studies →
Our Method (6-stage timeline: Discover → Prioritize → Prototype → Validate →
Deploy → Scale) → AI Lab → Insights → Contact.

**Case study template (fixed, do not vary):** Client Context → Business
Challenge → Objectives → Approach → Architecture → Technology → Results →
Key Learnings.

**Contact page (planned):** three low-friction actions only — Book Discovery
Session, Email, LinkedIn. No long intake form.

**Planned tech stack:** Next.js **15** (App Router) · TypeScript · Tailwind
CSS · shadcn/ui · Framer Motion + GSAP · Three.js (only if a section truly
needs it) · Vercel · GA4 · Microsoft Clarity.

**Explicit non-goals:** generic AI-agency language, stock photography,
buzzword overload, ChatGPT-clone demos with no differentiation, "contact us
for AI" vagueness, claiming scale V47 doesn't have, client logos without
permission, any claim that wouldn't survive a reference check.

**Founder sequencing constraint (V47 is a one-person operation at PRD time):**
build Homepage → one flagship Lab prototype → two real case studies first;
everything else in Phases 5–6 queues behind those three regardless of the
phase numbering.

**Open questions the PRD left unresolved:** final launch case-study list and
confidentiality level; booking tool (Calendly/Cal.com/custom); whether Lab
demos embed live or link out; final domain email.

---

## Block 2 — Brand Guidelines (`docs/website/02_Brand_Guidelines.md`)

**The positioning thesis:** V47's visual/verbal peer set is not other AI
agencies — it's the sovereign-grade Gulf technology institutions (G42,
Core42, Presight, Mubadala, ADQ, e& enterprise, ADNOC Digital). Institutional,
architectural, editorial, calm. The test for any design/copy choice: *"Would
this appear on a G42/Mubadala property, or does it look like a YC startup?"*
Choose the former.

**Brand pyramid:**
- **Essence:** *Judgment, delivered.*
- **Promise:** Take governments and enterprises from AI strategy to
  production — every claim survives a reference check.
- **Pillars:** Executive advisory · Product thinking · Working implementation.
- **Archetype:** The Sage (trusted advisor) + The Maker (the Sage who also
  builds) — *"the advisor who ships."* Avoid the Hero (bravado) and the
  Magician (hype) archetypes.

**Anti-cliché guardrail — three "AI-generated design" defaults to avoid:**
near-black bg + single neon accent; the AI-purple/cyan gradient hero;
warm-cream bg + high-contrast serif + terracotta accent (a "Claude tell").

**Voice — five traits:** Senior · Precise · Candid · Systems-minded ·
Understated.

**Banned vocabulary:** *leading · cutting-edge · revolutionary · world-class
· game-changing · next-gen · seamless · synergy · unlock/unleash · empower ·
passionate · ninja/rockstar/guru · "leverage" (filler) · "solutions" (as a
catch-all noun).* "Transform" at most once per page. No emoji in body/headings.

**Colour system (dark, primary):** obsidian `#0A0D14` background; ink-900/800/700
surfaces; brass `#C9A65C` as the single warm accent (**brass rule: <5% of any
screen, hairlines/small marks only — never fills, gradients, or glows**);
azure `#5B93E6` as the functional/interactive accent; success/warning/danger
semantics. Light theme reserved for documents (company profile PDF, print).

**Typography — the tri-typeface system (the concept, not decoration):**
Newsreader (serif, display/H1/pull-quotes — "we think") · Inter (body/UI —
"product thinking") · JetBrains Mono (eyebrows/data/code — "engineering
proof"). Serif never for body copy.

**Iconography:** Lucide, 1.5px stroke, line icons only, no filled/duotone, no
emoji-as-icon, no "AI sparkle" glyph ever.

**Imagery policy:** no stock photography, zero exceptions. Priority order:
real product screenshots → abstract system/network graphics in-palette →
architectural/structural photography, duotoned → one real executive-grade
founder portrait (not stock, not casual).

**Signature visual element:** an abstracted Islamic/girih-inspired hairline
line geometry — regionally resonant, differentiates from Western SaaS. Must
stay abstract/architectural; never literal, ornamental, or kitsch.

**Layout:** 12-column grid, 8px spacing base, small consistent corner radius
(8–12px cards, 6px buttons — not pill-shaped, not zero-radius), borders over
shadows on dark.

**RTL/bilingual readiness:** logical CSS properties from day one; Arabic type
pairing reserved (IBM Plex Sans Arabic + a Kufi-style display face); `/ar`
reserved even though V1 ships English-only.

**Brand governance:** the website, company profile PDF, decks, capability
statements, email signature, and LinkedIn all inherit the same tokens — "one
token set, five artefacts, zero drift."

**Open questions the Brand doc left unresolved:** OQ-1 name meaning for
"V47" (three directions offered, recommended keeping it undecorated); OQ-2
final logo artwork; OQ-3 serif-led tri-system vs. single-family Geist
(recommended keeping the serif); OQ-4 Arabic wordmark treatment; OQ-5 founder
portrait sourcing; OQ-6 approve one specific girih construction before
sitewide use.

---

## Block 3 — Information Architecture (`docs/website/03_Information_Architecture.md`)

**Principle:** hub-and-spoke, not a funnel. Homepage is the hub; Case
Studies/AI Lab/Frameworks are proof spokes; Contact is the single conversion
endpoint every spoke points to.

**Planned sitemap:**
```
/  /services  /services/[slug]  /industries  /industries/[slug]
/work  /work/[slug]  /lab  /lab/[slug]  /methods  /methods/[slug]
/insights  /insights/[slug]  /about  /contact  /company-profile
/sitemap.xml  /robots.txt  /rss.xml  /privacy  /terms
```
Public-label mapping (fixed): "Frameworks" ships as `/methods`; "Case
Studies" ships as `/work`.

**Planned primary nav (5 items + 1 CTA, deliberately not crowded):**
`[V47]  Work  Methods  Lab  Insights  About  [Book a Session →]`. Services
and Industries were explicitly **not** planned as top-level nav items in V1
— reachable from the homepage and cross-links instead, "revisit in v1.1 if
Services traffic justifies promotion."

**Footer (planned, 4 columns + base row):** Explore (Work/Methods/Lab/
Insights) · Firm (About/Company Profile/Contact) · Connect (Book a
Session/Email/LinkedIn/RSS) · Legal (Privacy/Terms).

**Page templates (T1–T10):** Home · Index/Listing · Case Study (8-part fixed
structure) · Lab Entry · Framework · Service · Industry · Article · About ·
Contact.

**Three canonical buyer journeys to optimize for:** the referred CIO (Home →
Work → case study → Contact); the researching analyst (Insights article →
Methods → About → Contact); the procurement/RFP evaluator (Home → Company
Profile PDF → Work → Contact).

**Planned V1 build priority:** Home → one flagship Lab entry → two real Work
case studies → About/Contact/Methods index + 1 framework → Insights index +
2–3 articles → everything else queues to Phase 5–6.

---

## Block 4 — Design System / Tokens (`docs/website/04_Design_System.md`)

Dark is the default theme; light is explicit opt-in (documents/print). Full
CSS custom-property token set (colour, type, radius, shadow, motion,
z-index) defined once in `styles/tokens.css`, consumed everywhere — the same
tokens are meant to drive the website, company-profile PDF, deck template,
and capability statement ("the V47 OS").

**Component primitives specified:** Button (primary/secondary/ghost — brass
shows only as a hairline border, never a filled gold button), Card, Badge
(the honesty system: Delivered/In progress/Concept/Live demo — pill shape,
mono text, colour always paired with a text label), Input/Field, Eyebrow +
Divider (girih hairline), Link (azure, never brass — brass is brand, azure
is function).

**Universal component rule:** one brass element per component, maximum.

*(Exact hex values, Tailwind config, and the full typography scale are
reproduced verbatim in the shipped `src/app/globals.css` — see Block 12; not
re-duplicated here to avoid drift between two sources of truth.)*

---

## Block 5 — Content Strategy (`docs/website/05_Content_Strategy.md`)

**Five content pillars** (also the SEO clusters): AI Strategy · AI
Governance · Enterprise AI Delivery · GovTech · Product Leadership for AI.
Every piece tags to exactly one primary pillar.

**Content types → job → voice register:** Case Study (*can you deliver?* —
factual, understated) · Lab Entry (*can you deliver, clickably?* — candid,
technical, includes what didn't work) · Framework (*how do you think?* —
authoritative, teacherly) · Insight (*why trust you?* — argument-led,
editorial) · Service (consulting offering, not a feature list) · Industry
(sector-specific, concrete) · About (personal, senior, verifiable).

**Fixed content templates:** Case Study (8-part, PRD §9, do not vary) · Lab
Entry (Problem → Demo → Architecture → Stack → Lessons Learned) · Framework
(Thesis → Diagram → Stages → When to use → soft Contact link, **no hard
CTA**) · Insight (Eyebrow → Title → Standfirst → Body → Author → Related).

**Editorial cadence:** one high-quality Insight per week, not daily. Launch
minimum 2–3 live (an empty Insights section undercuts the positioning).

**Frontmatter contract** (every MDX file in `/content`): `title, slug, type,
pillar, secondaryPillar, status, industry, summary, publishedAt, updatedAt,
author, ogImage, confidential`. Drives listing pages, cross-linking, badges,
and SEO from one metadata source.

**Content governance non-negotiables:** verifiable over impressive; show,
don't assert; honest status badges; banned vocabulary enforced; one pillar
per piece; depth bar (if a generic AI agency could have written it, it
doesn't ship); confidentiality first (generalize rather than risk a breach).

---

## Block 6 — Component Specification (`docs/website/06_Component_Specification.md`)

Every section specified against a six-part contract: Emotional Objective →
Visual Objective → Business Objective → Animation Behaviour → Accessibility
→ Component Structure. Full contracts exist in the source doc for: Nav,
Hero, Trust Signals, What We Do (4 cards), Industries selector (ARIA
tablist), Featured Case Studies, Our Method (6-stage timeline, `<ol>` —
numbering is meaningful here), AI Lab strip, Insights teaser, Contact band,
Case Study template, Lab/Framework templates, Footer.

**Universal component rules:** one brass element per component max; every
interactive element 44×44px min with visible focus ring and a sentence-case
active-voice label; every status truthful and badge-labelled; every
animation degrades under `prefers-reduced-motion`; numbered markers only
where order is real; no stock imagery, AI-sparkle icons, or neon accents.

---

## Block 7 — Motion System (`docs/website/07_Motion_System.md`)

**Philosophy:** motion is evidence of craft, not decoration — "considered
and expensive," never "animated startup." One orchestrated moment beats ten
scattered ones. When unsure, do less.

**Tokens:** `--ease-out` (default, decisive settle, no bounce/spring/elastic
ever) · `--dur-fast` 160ms (hovers) · `--dur-base` 280ms (reveals) ·
`--dur-slow` 480ms (hero orchestration).

**Library split:** CSS transitions by default (cheapest) → Framer Motion for
component state/scroll-reveal → GSAP reserved for 2–3 genuinely orchestrated
moments only (hero draw-in, method timeline line, a framework diagram).

**Signature draw-ins** (spend the "one bold move" here): the Method
timeline's connective line draws left→right on scroll-in; the hero
girih/network motif SVG-path-draws in behind the headline.

**Reduced motion (non-negotiable):** under `prefers-reduced-motion: reduce`
all draw-ins/staggers/translates become instant; hero motif renders in final
state, no path draw.

**Performance budget:** animate only `transform`/`opacity`; scroll reveals
via `IntersectionObserver`; zero CLS from animation; hero motion must not
delay LCP.

**Forbidden:** auto-playing carousels, multi-layer parallax, bouncy easing,
"AI typing" effects, looping ambient animation that never rests,
scroll-jacking, animated gradients.

---

## Block 8 — SEO Strategy (`docs/website/08_SEO_Strategy.md`)

**Goal:** not high-volume traffic — being found by "the right thirty
people" (GCC government directors, bank CIOs, Big-4 partners, and the
analysts who brief them). Authority + intent + local SEO, not keyword
farming.

**Technical foundation:** typed `metadata`/`generateMetadata` on every
route; `sitemap.xml` and `robots.txt` generated from the content layer;
single canonical host (`https://v47ai.com`, non-www, no trailing slash);
SSG/ISR for all content pages; RSS for Insights; `/ar` and `hreflang`
scaffolding reserved but not emitted until Arabic actually exists.

**Structured data (JSON-LD):** `Organization`/`ProfessionalService` on root
layout (name, Abu Dhabi address, `areaServed` AE/GCC, `sameAs` LinkedIn);
`Article`/`CreativeWork` + `BreadcrumbList` on case studies; `Person` on
About linked to the Organization. All schema must be truthful — no
fabricated ratings or reviews.

**Keyword strategy:** organized by the five content pillars; target
high-intent long-tail over broad head terms; own the GCC + regulated-industry
angle as the defensible niche.

**Core Web Vitals targets:** LCP < 2.0s · CLS < 0.05 · INP < 200ms ·
Lighthouse (Perf/SEO/A11y/BP) ≥ 95 each. (`00_PROJECT_VISION.md` sets a
slightly stricter LCP bar of < 1.5s — treat that as the governing target
where the two docs differ.)

**Primary KPI:** not raw traffic — qualified engagement (booking-CTA clicks,
company-profile downloads, case-study depth, returning research sessions).

---

## Block 9 — Copywriting Guide (`docs/website/10_Copywriting_Guide.md`)

**Principle:** restraint reads as seniority; hype reads as a freelancer. One
rule above all — *if a claim wouldn't survive a reference check, it doesn't
ship.*

**Voice in one paragraph:** V47 writes like a senior advisor talking to a
peer across a table — precise, candid, systems-minded, understated. Leads
with the buyer's problem, not V47's greatness. Shows rather than asserts.
Never sells with adjectives.

**Mechanics:** lead with the problem, then the answer · active voice,
present tense · sentence case everywhere (not Title Case, not ALL CAPS
except mono eyebrows) · specific beats clever · one idea per sentence ·
verbs name the exact action · numbers are tabular and true · honest status
in words, not just badges · no adjective stacks · cut, then cut again.

**Banned vocabulary** (enforce at edit time): *leading · cutting-edge ·
revolutionary · world-class · game-changing · next-gen · seamless · synergy
· unlock/unleash · empower · robust (as filler) · passionate · ninja/
rockstar/guru · "leverage" (filler) · "solutions" (catch-all noun) · "in
today's fast-paced world" · "we are excited to…".* "Transform" at most once
per page. No exclamation marks in body copy.

**CTA library rule:** no "Submit," no "Learn more" without an object, no
urgency manipulation. The label describes exactly what happens next.

**The one-line test before publishing any sentence:** (1) Would it survive a
reference check? (2) Could a generic AI agency have written it? (3) Is there
a shorter, plainer version? Pass all three, or it doesn't ship.

---

## Block 10 — Master Build Prompt / Build Order (`docs/website/09_Execution_Roadmap.md`)

**Standard:** sovereign-grade (G42/Mubadala register), never a generic
AI-startup template. Every claim verifiable.

**Global rules applied to every component:** tokens only, no hard-coded
colour/size · brass discipline (<5% of screen) · typography roles enforced ·
motion per Block 7, `prefers-reduced-motion` respected everywhere ·
accessibility floor (semantic HTML, one h1/page, visible focus rings, 44px
targets, ARIA-tablist industry selector, meaning never by colour alone) ·
copy obeys Block 9 · no stock imagery/AI-sparkle/neon/auto-carousels/client
logos · performance targets per Block 8 · RTL-ready · SEO wired per route.

**Planned build order (strict, one milestone at a time, review before the
next):**
1. Foundation — tokens, Tailwind, fonts, primitives, Nav/Footer/layout,
   JSON-LD Organization, sitemap/robots.
2. Homepage — all sections per Block 6's order.
3. One flagship AI Lab entry — the clickable-proof anchor.
4. Two real Case Studies — fixed 8-part structure.
5. About + Contact + Methods index + 1 Framework.
6. Insights index + 2–3 articles.
7. Deploy + wire (Vercel, domain, GA4/Clarity, Search Console).

Everything else (full Services, all Industries, remaining Lab/Methods, more
Insights) explicitly queues to Phase 5–6 — **not** V1.

**Final quality gate before calling V1 complete:** the 60-second test passes
(PRD North Star); zero unverifiable claims sitewide; no generic-AI-agency
tells; all four V1 proof assets live (Home, 1 Lab demo, 2 case studies);
Insights not empty; analytics + SEO wired; full keyboard + reduced-motion +
mobile pass.

---

# PART B — AS BUILT

Everything below this line documents what actually shipped, including where
it deviates from Part A above (by explicit owner decision, not drift).

---

## Block 11 — Stack (as built)

- Next.js **16.2.10** (App Router, Turbopack) + React 19 + TypeScript —
  **deviation:** Block 1 specifies Next.js 15; kept on 16.2.10 as an explicit
  decision rather than downgraded.
- Tailwind CSS **v4**, CSS-first `@theme` config in `src/app/globals.css`
  (no `tailwind.config.ts` — v4 doesn't use one; token *values* match Block
  4 verbatim, only the config *syntax* differs).
- shadcn/ui + Base UI primitives, `class-variance-authority`, `cn()`.
- Framer Motion for reveals/Nav scroll-hide; **GSAP not used** — no section
  has yet needed the signature-draw-in complexity that would justify it.
- MDX content (`gray-matter` + `next-mdx-remote/rsc`) in `/content`.
- `@anthropic-ai/sdk` for Think With V47 (`claude-opus-4-8`, structured JSON
  output) — **not in the original PRD**, added mid-build (Block 15).
- Vercel (`vkadirvell-gmailcoms-projects/website`), GA4 + Clarity scaffolded
  (env-gated, currently inactive — no keys set).
- **Three.js: not used** — no section has required it.

---

## Block 12 — Route inventory (as built)

| Route | Purpose | Source | Status |
|---|---|---|---|
| `/` | Homepage — 9 sections per Block 6's order, plus Think With V47 inserted | `src/app/page.tsx` | Live |
| `/about` | Founder (Vigneshraja Kadirvell) + Co-Founder (Sharmili G) bios, firm principles | `src/app/about/page.tsx` | Live |
| `/work` | Case studies index | `src/lib/content.ts` (`case-study`) | Live |
| `/work/tejas` | Case study — Delivered, 120,000+ users, 15+ ministries | `content/case-studies/tejas.mdx` | Live |
| `/work/justice-corner` | Case study — In progress (prototype demonstrated, not production) | `content/case-studies/justice-corner.mdx` | Live |
| `/work/executive-intelligence-os` | Case study — In progress | `content/case-studies/executive-intelligence-os.mdx` | Live |
| `/methods` | Frameworks index | `src/lib/content.ts` (`framework`) | Live |
| `/methods/ai-discovery-framework` | Framework detail | `content/methods/ai-discovery-framework.mdx` | Live |
| `/lab` | AI Lab index | `src/lib/content.ts` (`lab`) | Live |
| `/lab/ai-pmo` | Lab entry — In progress | `content/ai-lab/ai-pmo.mdx` | Live |
| `/insights` | Insights index + RSS link | `src/lib/content.ts` (`insight`) | Live |
| `/insights/*` (3) | ai-strategy, ai-governance, product-leadership pillars | `content/insights/*.mdx` | Live |
| `/rss.xml` | RSS feed of insights | `src/app/rss.xml/route.ts` | Live |
| `/services` | Services index — 3 core + 2 specialized | `src/app/services/page.tsx` | Live — **not in Block 3's planned nav**, see Block 17 |
| `/services/regulated-ai-open-finance` | Specialized service | `src/app/services/regulated-ai-open-finance/page.tsx` | Live — added mid-build, not in Block 1/3 |
| `/services/decision-intelligence-os` | Specialized service | `src/app/services/decision-intelligence-os/page.tsx` | Live — added mid-build, not in Block 1/3 |
| `/industries` | Industries index (7 sectors) | `src/lib/industries.ts` | Live |
| `/industries/[slug]` | 7 industry details | `src/lib/industries.ts` | Live |
| `/contact` | Contact page | `src/app/contact/page.tsx` | Live — `mailto:`, no booking tool wired (Block 1 OQ still open) |
| `/company-profile` | Honest "in production" placeholder | `src/app/company-profile/page.tsx` | Live — was a broken PDF link, fixed |
| `/privacy`, `/terms` | Legal boilerplate | `src/app/privacy/page.tsx`, `terms/page.tsx` | Live — flagged on-page as not counsel-reviewed |
| `/api/think` | POST-only API behind Think With V47 | `src/app/api/think/route.ts` | Live, gated on `ANTHROPIC_API_KEY` |
| `/sitemap.xml`, `/robots.txt` | SEO | `src/app/sitemap.ts`, `robots.ts` | Live |

**Homepage section order (as built):** Hero → TrustBar → ServiceCards →
IndustrySelector → WorkGrid → MethodTimeline → **ThinkWithV47** → LabStrip →
InsightGrid → ContactBand. The `ThinkWithV47` insertion between Method and
Lab is a deviation from Block 6's order, by explicit placement request.

---

## Block 13 — Component inventory (as built)

**Primitives** (`src/components/primitives/`): Button, Card, Badge, Eyebrow,
Divider, Field, Icon, Logo, LogoIcon, Reveal, Link (via `buttonVariants`/
inline styling rather than a separate `Link.tsx` primitive as Block 4 lists —
functionally equivalent, not a separate component file).

**Layout** (`src/components/layout/`): Nav (sticky, scroll-hide, mobile
quick-link strip — Block 17), MobileMenu, MobileMenuTrigger, Footer,
GirihBackdrop.

**Sections** (`src/components/sections/`): Hero, TrustBar, ServiceCards,
IndustrySelector (ARIA tablist, per Block 6 spec), WorkGrid, MethodTimeline,
LabStrip, InsightGrid, ContactBand, ContentDetail (shared MDX detail shell),
ContentList (shared index shell), ThinkWithV47.

**Root-level:** Analytics.tsx (GA4 + Clarity, env-gated), ThemeToggle.tsx
(Block 18, design-comparison tool only).

---

## Block 14 — Content inventory & sourcing (as built)

MDX frontmatter matches Block 5's contract. Content actually published:

- **Case studies (3):** Tejas (Delivered — 120,000+ users, 15+ ministries,
  CSI eGovernance Award 2022, NIC/MeitY appreciation letter), Justice Corner
  (**status corrected to In progress** — a prototype demonstrated to a UAE
  federal ministry, not yet in production; do not upgrade to Delivered until
  it actually is), Executive Intelligence OS (In progress) — named projects
  from the founder's own history, not invented; all three use the fixed
  8-part structure. "Vigneshraja Kadirvell" is now the confirmed canonical
  name and is consistent across every content byline, the About page, and
  both JSON-LD blocks (previously flagged as inconsistent in Block 19 —
  now resolved).
- **Lab entry (1):** AI PMO (In progress).
- **Framework (1):** AI Discovery Framework.
- **Insights (3):** one per pillar (ai-strategy, ai-governance,
  product-leadership) — meets Block 5's "never ship empty" minimum.

**Confidentiality handling:** where exact vendor/infra/metric detail isn't
independently verifiable, copy says so directly rather than either
fabricating specifics or leaving visible `[TODO]`/placeholder brackets on a
live page — e.g. "we publish specific vendor and infrastructure detail on a
case-by-case basis — ask us directly if that's relevant to your evaluation."

---

## Block 15 — Think With V47 (not in the original PRD — added mid-build)

Originally pitched (via external feedback mid-session) as a free-text input
generating an executive summary, architecture, tech options, roadmap,
**budget range**, risks, and procurement considerations. Scoped down before
building, deliberately:

- **Fixed dropdown inputs only** (`CHALLENGE_OPTIONS`, `ORG_TYPE_OPTIONS`,
  `CONSTRAINT_OPTIONS` in `src/lib/think-with-v47.ts`) — no free text ever
  reaches the model.
- **No budget or cost figures** in the output schema — excluded as too
  liability-prone for a boutique advisory's website to state.
- `claude-opus-4-8` via `messages.parse()` with a JSON-schema-constrained
  output: `executiveSummary`, `suggestedArchitecture`, `technologyOptions`,
  `roadmap`, `deliveryRisks`, `procurementConsiderations`.
- System prompt explicitly instructs the model never to state costs, exact
  timelines, team sizes, or guaranteed outcomes.
- Explicit on-page disclaimer: *"Illustrative starting point, not a quote or
  a commitment."*
- Per-IP in-memory rate limit (5 req/60s) — documented as best-effort only,
  not durable across serverless cold starts (Upstash or similar recommended
  before high-traffic launch).
- Honest "not yet switched on" state when `ANTHROPIC_API_KEY` is unset (same
  pattern as Analytics) — verified via Playwright screenshot that no fake
  data renders in that state.

---

## Block 16 — Founder / team content (`/about`) — not in the original PRD's About spec

Block 3's T9 About template specified a single founder narrative. As built,
`/about` covers two people:

- **Vigneshraja Kadirvell** — Founder & Principal Consultant. Track record: EXL/
  Paymentor.ai (AI collections/BNPL SaaS, $5M contracts, GCC bank CXOs),
  KPMG/TEJAS (Government of India national analytics platform under CEDA).
- **TEJAS narrative** — independently researched and sourced from public
  NIC/MeitY materials and policy reporting (launch year, acronym, features,
  NIC's own 75%+ state-application-adoption stat). The 120,000-user figure
  is confirmed as a published result, corroborated by a CSI eGovernance
  Award (2022) and a Government of India (NIC/MeitY) appreciation letter —
  now stated directly on both `/about` and the dedicated `/work/tejas` case
  study (Block 12) rather than hedged.
- **GCC regulatory fluency** — CBUAE Open Finance Regulation / SAMA Open
  Banking framework experience, cross-linked to
  `/services/regulated-ai-open-finance`.
- **Sharmili G** — Co-Founder & Head of Data Platform Engineering. Track
  record: Tech Mahindra (Ford Credit → GCP migration), OCBC/AmBank (Malaysia
  regulator-facing systems — BNM NSRS, CCRIS), Wipro (Lloyds/Citibank/State
  Street). Selected-projects grid: ECL, ELMM, BNM NSRS Reporting, CCRIS,
  FALCON Debit, Enterprise Bigdata Platform. Source: her own resume, treated
  as primary-source career fact the same way Vigneshraja Kadirvell's history is handled.
- Both carry `Person` JSON-LD; the root `ProfessionalService` JSON-LD in
  `layout.tsx` carries a `founder` array listing both (Block 8's spec only
  anticipated one `Person`).
- **Flagged, not fully resolved:** "Co-Founder" was a deliberate title
  choice, not a confirmed legal/equity fact — worth the owner double-checking
  it's accurate before this stays live.

---

## Block 17 — Navigation deviations from Block 3

Block 3 explicitly planned a 5-item nav (Work/Methods/Lab/Insights/About)
with Services and Industries deliberately excluded, "revisit in v1.1 if
Services traffic justifies promotion." As built:

- `/services` and `/industries` were live, working routes with **zero path
  in** from Nav or Footer at all — found and fixed, not a deliberate
  "v1.1 later" decision; this was an oversight during the mid-build addition
  of those routes.
- Nav now carries 7 items: Services, Industries, Work, Methods, Lab,
  Insights, About — wider than Block 3's "5 items, senior restraint" guidance.
  Worth revisiting if it reads as crowded once the theme decision (Block 18)
  is finalized.
- **Mobile nav fix:** originally all 7 links were reachable only via the
  hamburger overlay. Added a horizontal-scroll quick-link strip directly
  under the mobile top bar so section links are visible without opening the
  menu; the hamburger still opens the full-screen menu with the "Book a
  session" CTA.

---

## Block 18 — Design-preview theme toggle (NOT a shipped brand decision)

`ThemeToggle.tsx` renders a bar pinned to the top of every page: "Design
preview — not final" with **V47 Classic** / **V47 Teal** buttons. Built at
the owner's explicit request to visually compare two directions — not an
endorsement of either.

- **V47 Classic** — the real, shipped design per Block 4/Block 2: dark
  obsidian/ink palette, brass hairline accents (<5% of screen), Newsreader/
  Inter/JetBrains Mono.
- **V47 Teal** — alternate palette from an external brand-doc draft: white/
  light background, Kinetic Aqua `#00CED1` accent replacing brass, Inter for
  headings (replacing Newsreader), IBM Plex Mono for labels (replacing
  JetBrains Mono), tighter radii, lighter shadows, a new "V + network nodes"
  logo mark (`LogoIcon.tsx`, teal/green) shown only in this theme.
- **Mechanism:** both variants override the same semantic CSS custom
  properties under `[data-theme="teal"]` in `globals.css` — zero
  component-level branching, leveraging the token architecture exactly as
  Block 4 designed it. Persisted via `localStorage`.
- **Declined from that same external draft:** full palette/type replacement
  as a fait accompli, "Elite" brand-personality language (directly
  contradicts Block 9's banned-vocabulary list), a homepage copy rewrite
  with fabricated case-study specifics and invented AI Lab entries
  (Procurement Negotiation Agent, HR Knowledge Copilot, MCP Experiments)
  that don't exist as real, working demos — building those would violate
  Block 0/Block 1's core "never fabricate" principle.
- **Open decision for the owner:** Classic reads "sovereign-grade advisory to
  ministries" (matches Block 2's positioning thesis exactly); Teal reads
  closer to a SaaS product company. Neither is wrong — this is a deliberate
  choice the owner needs to make, not a default.

---

## Block 19 — Known gaps / blocked (owner action required)

- Custom domain (`v47ai.com`) not purchased/connected.
- GA4 measurement ID + Clarity project ID not set — analytics scaffolded but inactive.
- `ANTHROPIC_API_KEY` not set — Think With V47 shows the honest "not configured" state in production.
- Durable rate limiting (e.g. Upstash) recommended before high-traffic launch of Think With V47.
- Search Console not verified (wants the custom domain live first).
- Booking tool not chosen (`/contact` uses `mailto:`) — Block 1's open question, still open.
- Founder portrait unresolved (Block 2's OQ-5) — no stock/casual substitute used.
- `/privacy`, `/terms` are draft boilerplate, not counsel-reviewed.
- Theme decision (Block 18) — Classic vs. Teal — not finalized.
- "V47" name meaning (Block 2's OQ-1) — never explicitly resolved; site currently treats it as undecorated (Direction C, the doc's own recommendation).
- Logo/monogram final artwork (Block 2's OQ-2) — real wordmark/favicon assets exist (`docs/website/Logo/`) and are wired in; unclear if they're considered final or still placeholder.
- GSAP / signature draw-ins (Block 7) — not implemented; Framer Motion covers all current motion. Not a gap unless a future section specifically calls for orchestrated path-drawing.
- Arabic/RTL (Block 2 §10) — logical CSS properties used, but `/ar` not built; correctly deferred per the doc's own "don't emit until Arabic exists" guidance.
- ~~Tejas vs. About page reconciliation~~ — **resolved.** 120,000+ confirmed as the correct, published figure (CSI eGovernance Award 2022 + NIC/MeitY appreciation letter). About's copy updated to state it directly rather than hedge it; `/work/tejas` corrected from 128,000+ to 120,000+ to match.
- ~~Author byline inconsistency~~ — **resolved.** "Vigneshraja Kadirvell" confirmed as the canonical name. Now consistent across the About page (H1, both JSON-LD blocks), the root Organization JSON-LD founder array, and every content file's `author` field.
- **Justice Corner naming specificity** — still open. The rewritten case study names a "UAE federal ministry" and an "ex-McKinsey-founded strategy firm" (not by name) as the delivery partner. The source draft included a now-removed internal note flagging permission-to-publish as unconfirmed for naming the ministry even generically; confirm this framing is cleared before treating it as final.

---

## Block 20 — Changelog

| Commit | Summary |
|---|---|
| `e36fde8`–`ee6af5c` | Initial scaffold (Create Next App, shadcn, framer-motion, gsap) |
| `0563663` | Sprint 0 — repo restructured into `docs/{website,product,engineering}` |
| `e037e3e` | Milestone 1 — Foundation: tokens, Tailwind v4 theme, fonts, primitives, Nav/Footer, JSON-LD, sitemap/robots, real brand assets |
| `eb9ba85` | Milestones 2–6 — Homepage, Lab, Work, Methods, Insights, About, Contact |
| `53957a1` | Deploy to Vercel; case study/About copy polish; analytics scaffolding |
| `8bb2bb1` | Think With V47, Services, Industries pages |
| `0b6923c` | PROJECT_STATUS.md updated for the above |
| `965d84f` | Regulated AI & Open Finance, Decision Intelligence OS service pages |
| `885f45a` | About page expanded — founder track record, GCC regulatory background |
| `444a1e4` | Sourced TEJAS narrative added to About |
| `bdf9f7d` | Sharmili G added as Co-Founder & Head of Data Platform Engineering |
| `42969a5` | Sharmili's selected projects; Services/Industries wired into Nav + Footer |
| `05398e6` | Design-preview theme toggle (V47 Classic vs. Teal) + new logo mark |
| `41302b4` | Mobile nav — quick-link strip surfaced outside the hamburger |
| `c9fd7ac` | This file created (as-built record, route/component inventory) |
| `4457984` | This file expanded into the full consolidated Vision+PRD+As-Built record |
| `cb324a6` | Part C content appendix added (every published word, by route) |
| `e541aee` | Added Tejas case study (`/work/tejas`, Delivered, 128,000+ users at the time); rewrote Justice Corner as In progress (UAE federal ministry, ex-McKinsey partner, multilingual voice); cross-linked About's Tejas section to the new case study |
| *(this commit)* | Reconciled the two items `e541aee` flagged as open: confirmed "Vigneshraja Kadirvell" as the canonical name (About H1/JSON-LD, root Organization JSON-LD, all 8 content bylines) and 120,000+ as the correct published user figure (was inconsistently 128,000+ on `/work/tejas` vs. a hedged "internal reporting" framing on About) — both pages now state 120,000+ at the same confidence level, corroborated by the CSI eGovernance Award and NIC/MeitY appreciation letter |

*(Append new rows here as work continues — one row per meaningful commit or
batch of commits, not every individual `git commit`.)*

---

# PART C — CONTENT APPENDIX (every published word, verbatim)

Every string below is live copy pulled directly from source as of this
update. **This is the fastest way to edit site copy:** find the text here,
edit the matching file (path given per block), keep this appendix in sync
in the same commit. Structural/JSX markup is stripped — only real content
remains.

---

## C1 — Homepage (`src/app/page.tsx` + `src/components/sections/*.tsx`)

**Hero** (`Hero.tsx`)
- Eyebrow: `Boutique AI consulting · Abu Dhabi`
- H1: `Building AI-native enterprises.`
- Standfirst: `We help governments and enterprises move from AI strategy to production — through executive advisory, product thinking, and working AI systems.`
- CTA primary: `Explore our work` → `/work`
- CTA secondary: `Book an AI discovery session` → `/contact`

**Trust bar** (`TrustBar.tsx`) — four items:
`11+ years product leadership` · `Government & enterprise delivery` · `AI strategy to production` · `Abu Dhabi–licensed AI business`

**Service cards** (`ServiceCards.tsx`)
- Intro: `Most firms sell decks or sell hours. V47 owns the whole path — strategy, product, and working implementation.`
- **Enterprise AI strategy** — `Executive interviews, opportunity assessment, governance, and operating model.` → `/services/enterprise-ai-strategy`
- **AI product development** — `From a scoped opportunity to a working prototype an executive can click.` → `/services/ai-prototype-sprint`
- **Government technology** — `AI delivery built for procurement, governance, and public-sector accountability.` → `/industries/government`
- **Digital transformation** — `Modernizing how an organization operates, not just what tools it uses.` → `/services`

**Industry selector** — see C6 (shared with `/industries`).

**Work grid** — pulls live from the two published case studies (C4).

**Method timeline** (`MethodTimeline.tsx`)
- Eyebrow: `Our method`
- H2: `A disciplined path from ambition to production.`
- Stages, in order: `Discover · Prioritize · Prototype · Validate · Deploy · Scale`
- Link: `See how we work →` → `/methods`

**Think With V47** (`ThinkWithV47.tsx` + `src/lib/think-with-v47.ts`) — see C7.

**Lab strip** — pulls live from the one published Lab entry (C5).

**Insights grid** — pulls the 3 latest published articles (C8).

**Contact band** (`ContactBand.tsx`)
- `Have an AI problem worth solving properly?`
- CTA: `Book an AI discovery session` → `/contact`
- Link: `LinkedIn` → `https://www.linkedin.com/company/v47`

---

## C2 — About (`src/app/about/page.tsx`)

- Metadata description: `V47 is led by Vigneshraja Kadirvell, Founder & Principal Consultant, with Sharmili G as Co-Founder & Head of Data Platform Engineering.`
- Eyebrow: `About` / H1: `Vigneshraja Kadirvell`
- Standfirst: `Founder & Principal Consultant, V47 — 11+ years of product leadership across high-growth SaaS, fintech, and enterprise AI, now directing every engagement personally.`
- Body:
  > V47 is a boutique by design. Clients get the person who built and scaled these systems, not a junior analyst relaying someone else's slide deck.
  >
  > V47 is licensed to operate as an AI consulting business in Abu Dhabi, and works across government and enterprise clients in the GCC.
  >
  > The practice exists on a simple premise: most AI initiatives don't fail on the model, they fail on everything around it — governance, ownership, data reality, and the judgment calls a demo never has to make. V47 is built to own that whole path, not just the parts that demo well.

**"Proven architecture, not presentation decks"**
> Before founding V47, Vigneshraja Kadirvell built and scaled the kind of systems most AI consultancies only pitch.

- **AVP of Product, EXL (Paymentor.ai)** — Scaled an AI-powered collections and BNPL SaaS platform from initial pilots to $5M contracts, engaging directly with bank CXOs across the US and the GCC.
- **Product Lead & Consultant, KPMG** — Led product strategy for TEJAS, the Government of India's national analytics platform built under CEDA — detailed below.
- Caveat: `These outcomes were delivered under EXL and KPMG, prior to V47's founding — cited here as track record, not as V47 engagements.`

**"Inside TEJAS: a national analytics platform"**
> In 2021, India's Ministry of Electronics and Information Technology (MeitY), working through the National Informatics Centre (NIC) and NICSI, launched TEJAS — Technology Enabled Justified Analytics Solution — under the Centre of Excellence for Data Analytics (CEDA). The mandate was blunt: give government departments a no-code way to turn raw administrative data into working dashboards, without every ministry buying its own proprietary BI software.
>
> Vigneshraja Kadirvell led product strategy for TEJAS at KPMG — shaping a drag-and-drop data preparation layer, configurable dashboards with department-level performance indicators, geospatial mapping through Bharat Maps, and role-based access controls, all built on open-source technology so departments weren't locked into a commercial BI vendor. Adoption reached 120,000+ users across 15+ ministries — recognized with a CSI eGovernance Award (2022) and a Government of India (NIC/MeitY) appreciation letter; NIC's own public reporting separately cited over 75% of NIC-supported state applications migrating to or evaluating the platform.
>
> The lesson that carries into V47's work: adoption at that scale doesn't come from a better model, it comes from a product built around how a government department actually works — access control, reporting cadence, and a rollout path a risk-averse ministry can sign off on.
- Caveat: `Platform facts sourced from NIC and MeitY public materials, independent policy reporting, and the CSI eGovernance Award and NIC/MeitY appreciation letter recognizing this work.`
- Link (added): `See the full Tejas case study →` → `/work/tejas` (see C4 — About and the dedicated case study now state the same 120,000+ figure at the same confidence level; no longer a hedge-vs-flat-claim mismatch).

**"GCC regulatory fluency"**
> At EXL, Vigneshraja Kadirvell delivered open banking readiness assessments for GCC banks — mapping API maturity and aligning product engineering work with the CBUAE Open Finance Regulation and the SAMA Open Banking framework. That regulatory fluency now shapes how V47 designs [regulated AI systems](/services/regulated-ai-open-finance) for financial institutions across the region.

**Leadership — Sharmili G**
- Eyebrow: `Leadership` / H2: `Sharmili G`
- Standfirst: `Co-Founder & Head of Data Platform Engineering, V47 — 12+ years building enterprise data platforms and cloud migrations across banking, financial services, and automotive.`
- `Where Vigneshraja Kadirvell scopes the regulatory and product strategy, Sharmili builds the data platform underneath it. Most AI vendors outsource one half of that pairing; V47 doesn't have to.`

Track record:
- **Lead Data Engineer, Tech Mahindra (Thirdware Solutions)** — Architected the migration of Ford Motor Credit's enterprise data warehouse to Google Cloud Platform — GCP Dataflow and BigQuery pipelines built to support IFRS 9/CECL regulatory reporting, led by a team of 5+ engineers.
- **Senior ETL Consultant, OCBC Bank & AmBank Group (Malaysia)** — Built OCBC's New Statistical Reporting System for Bank Negara Malaysia's compliance requirements, and AmBank's Central Credit Reference Information System — regulator-facing data infrastructure for two of Malaysia's national banking authorities.
- **Senior Software Developer, Wipro Technologies** — Delivered fraud-detection and reconciliation systems for Lloyds Banking Group, Citibank, and State Street, including the Falcon platform for payment card fraud mitigation.

Selected projects:
- **ECL — Ford Motor Credit** — ETL development for IFRS 9/CECL compliance, calculating and reporting Expected Credit Loss on a quarterly basis.
- **ELMM — Ford Motor Credit** — Migrated the enterprise data warehouse from Teradata to Google Cloud Platform via cloud dataflow pipelines.
- **BNM NSRS Reporting — OCBC Bank** — Standardized statistical reporting infrastructure to Bank Negara Malaysia's requirements.
- **CCRIS — AmBank Group** — Automated credit-related data processing across participating financial institutions for the Credit Bureau.
- **FALCON Debit — Lloyds Banking Group** — Payment card fraud detection and mitigation across payment methods.
- **Enterprise Bigdata Platform — OCBC Bank** — Migrated the data store platform to a real-time data hub via a Hadoop staging layer.

- `Certified across all three major cloud platforms — AWS, Azure, and Google Cloud — with an MS in Software Engineering from BITS Pilani. That breadth is what lets V47 commit to a cloud target without a separate vendor for the migration itself.`
- Caveat: `These outcomes were delivered under Tech Mahindra, Cognizant, OCBC, AmBank, and Wipro, prior to V47's founding — cited here as track record, not as V47 engagements.`

**"How V47 operates"** (three principles)
- **Verifiable over impressive** — Every claim on this site is written to survive a reference check. No invented client names, no fabricated metrics.
- **Demonstrate before you claim** — Work, Methods, and the AI Lab exist so a buyer can see the approach before taking our word for it.
- **Enterprise first** — Every decision assumes the reader is a CIO, a government director, or a procurement committee — not a consumer audience.

CTA: `Book a session` → `/contact`

---

## C3 — Services (`src/app/services/page.tsx` + 2 detail pages)

**Index page**
- Eyebrow: `Services` / H1: `How we engage.`
- Standfirst: `Three ways to work with V47, each written as a consulting offering, not a feature list.`
- Caveat: `Specific durations, pricing, and deliverable detail are scoped per engagement in a discovery session — nothing generic ships here that wouldn't hold up client to client.`

Core three:
- **AI Discovery Workshop** — `Duration, Deliverables, Outcomes, Ideal client` — `A scoped engagement to turn a broad AI mandate into specific, fundable opportunities — using the AI Discovery Framework.` → `/methods/ai-discovery-framework`
- **AI Prototype Sprint** — `Working prototype, Architecture, Executive demo, Roadmap` — `From a scoped opportunity to a working prototype an executive can click — not a slide deck of what AI could do.` → `/lab`
- **Enterprise AI Strategy** — `Executive interviews, Opportunity assessment, Governance, Operating model` — `Full strategic engagement covering governance and operating model, not just a roadmap of technology choices.` → `/contact`

Specialized two:
- **Regulated AI & Open Finance Frameworks** — `Audit-trail engineering, Consent architecture, Data residency` — `For banks, insurers, and financial infrastructure operating under CBUAE and SAMA oversight.` → `/services/regulated-ai-open-finance`
- **Enterprise Decision Intelligence Systems** — `Ontology mapping, Scenario simulation, Human-in-the-loop orchestration` — `A reasoning layer across fragmented operational data, built around your existing systems.` → `/services/decision-intelligence-os`

### `/services/regulated-ai-open-finance`
- H1: `Regulated AI & Open Finance Frameworks`
- Standfirst: `For banks, insurers, and financial infrastructure operating under CBUAE and SAMA oversight.`
- **"The compliance question comes first, not last"** — `Financial AI systems tend to fail review when governance is added after the model already works. V47 designs regulated AI systems the other way around — the audit trail, consent model, and data residency boundary are part of the architecture from day one, not a compliance appendix added at the end.`
- **What this covers:**
  - Retrieval-augmented and agentic workflows architected around the consent and data-sharing requirements set out in the CBUAE Open Finance Regulation and the SAMA Open Banking framework.
  - Decision logging — every AI-assisted output paired with a traceable record of the inputs and sources behind it, built for an internal compliance or risk function to review.
  - Consent and data-boundary design — scoped access to personal and non-public financial data, not blanket application-level access.
  - Deployment within your required regional cloud boundary, where data residency is treated as a hard constraint rather than a preference.
- **How we work (table):**
  | Constraint | V47's approach |
  |---|---|
  | Model outputs that can't be traced back to a source | Every output is grounded in retrieval sources or a validation layer — nothing ships as an unexplained model guess inside a regulated workflow. |
  | Data residency requirements | Architecture decisions start from where data is allowed to live, not retrofitted after a vendor or model is chosen. |
  | Consent and access scope | Access to personal or non-public financial data is scoped and logged at the API level, not assumed at the application layer. |
- **Who this is for:** `Banks, insurers, payment institutions, and financial infrastructure providers in the UAE and wider GCC moving an AI initiative from an internal pilot toward a system a compliance function will actually sign off on.`
- Caveat: `This describes V47's method, not a completed regulatory approval. Specific compliance sign-off is always the responsibility of your institution's own risk and legal functions.`

### `/services/decision-intelligence-os`
- H1: `Enterprise Decision Intelligence Systems`
- Standfirst: `A single reasoning layer across fragmented operational data — built around your existing systems, not a replacement for them.`
- **"The problem usually isn't a lack of data"** — `Most large enterprises already have the data they need. It sits split across ERPs, legacy databases, and departmental tools that don't talk to each other, so decisions get made on whichever fragment a team happens to have open. V47 builds a decision intelligence layer that sits across your existing systems — it doesn't ask you to migrate into a new one.`
- **What this covers:**
  - Ontology mapping — connecting the people, assets, processes, and financial data already in your systems into one queryable model, without duplicating or migrating the underlying data.
  - Scenario simulation — a sandbox for testing operational decisions against the real data model before committing budget or shifting resources.
  - Human-in-the-loop orchestration — AI agents handle aggregation and surfacing of relevant information; the decision itself stays with your team.
- **Where this applies:**
  - Logistics & supply chain — Routing and inventory decisions that currently depend on multiple disconnected systems.
  - Energy & infrastructure — Asset and maintenance data spread across engineering, operations, and finance tools.
  - Investment & portfolio functions — Exposure and pipeline data currently reconciled by hand across spreadsheets.
  - Multi-brand retail & conglomerates — Demand and procurement data siloed by business unit.
- **"How this differs from a large platform deployment"** — `Rather than a multi-year implementation that asks your organization to adopt a new platform's data model, V47 scopes a modular layer around the systems you already run — starting with the highest-friction decision, not a full data migration.`
- Caveat: `Scope, timeline, and which systems are in bounds for a first phase are set in a discovery session — nothing generic ships here that wouldn't hold up engagement to engagement.`

---

## C4 — Case studies (`content/case-studies/*.mdx`)

### Tejas (`/work/tejas`) — status: Delivered — resultLabel/resultMetric: Users / 120,000+
`summary`: A national no-code business-intelligence platform scaled to 120,000+ users across 15+ government ministries, positioned as a near-zero-cost alternative to commercial BI — led by V47's founder at KPMG.

Header lines: `Status: delivered.` / `Attribution: led by V47's founder as Lead Product Manager at KPMG, for the Government of India. Recognized with a CSI eGovernance Award (2022) and a Government of India (NIC / MeitY) appreciation letter.`

- **Client Context** — The Government of India needed decision-intelligence and dashboards across its ministries, and was paying for it the expensive way — commercial BI licensing, per seat, at national scale. The work described here was led by V47's founder as Lead Product Manager at KPMG, taking the platform, named Tejas, from zero to one.
- **Business Challenge** — BI licensing does not scale gracefully across a government. Every ministry that wanted dashboards added licence cost, and the users who needed them — programme officers, not analysts — were rarely equipped to use analyst-grade tools. The data itself sat in separate systems across separate ministries. An indigenous, no-code platform that non-technical officials could actually operate, at a fraction of the licensing cost, was the goal. The hard part was never the charting engine. It was adoption across fifteen ministries by people who had never built a dashboard.
- **Objectives** — Build a national no-code/low-code BI platform to a Tableau- and Power-BI-grade feature bar. Reach non-technical government users without training them into analysts. Position the platform as a near-zero-cost alternative to commercial BI licensing. Drive genuine adoption across multiple ministries, not a launch and a silence.
- **Approach** — Zero-to-one product leadership: strategy, roadmap, and a feature set specified against what commercial BI actually offered, so the platform was a real alternative rather than a lesser one. Drag-and-drop dashboards with 45+ chart types, predictive analytics, role-based access, and REST and database connectors. Adoption was treated as a product workstream in its own right — onboarding and multi-ministry rollout were designed, not assumed.
- **Architecture** — A no-code/low-code business-intelligence platform: a drag-and-drop dashboard builder over a charting engine spanning 45+ chart types, a predictive-analytics layer, role-based access control for a multi-ministry user base, and REST and database connectors to reach data across ministry systems.
- **Technology** — No-code/low-code BI platform; drag-and-drop dashboard builder (45+ chart types); predictive analytics; role-based access control; REST and database connectors.
- **Results** — 120,000+ users. 15+ government ministries. Positioned as a near-zero-cost alternative to commercial BI licensing at national scale. CSI eGovernance Award, 2022. Government of India (NIC/MeitY) appreciation letter.
- **Key Learnings** — At national scale in government, adoption is a product problem, not a modeling one. The features that drove Tejas were the unglamorous ones — role-based access, onboarding, connectors that reached the data ministries actually held, an interface a non-analyst could operate. Someone has to own the question of whether the thing gets used — that is product leadership, and it is usually what decides the outcome.

*Note: this is the same TEJAS/CEDA platform narrated in prose on `/about` (Block 16/C2) — that section now links here (`See the full Tejas case study →`). 120,000+ is confirmed as the correct, published figure (CSI eGovernance Award 2022 + NIC/MeitY appreciation letter); both pages now state it at the same confidence level — the earlier "internal reporting, not published" hedge on About has been removed.*

### Justice Corner (`/work/justice-corner`) — status: In progress (**changed from Delivered**) — resultLabel/resultMetric: Status / In progress
`summary`: A governed, multilingual generative-AI legal-awareness service for a UAE federal ministry — prototype demonstrated, built with an ex-McKinsey-founded strategy partner.

Header lines: `Status: in progress — prototype demonstrated to the ministry, not yet in production.` / `Partner: delivered with an ex-McKinsey-founded strategy firm.`

- **Client Context** — A UAE federal ministry wanted to make legal information accessible to the public — across a population that reads and speaks several languages, and in a domain where a wrong or ungoverned answer is not a minor error but a liability. The engagement was run with an ex-McKinsey-founded strategy partner; V47's founder authored the technical solution and led the AI and conversational engineering.
- **Business Challenge** — Legal information is public in principle and inaccessible in practice. It sits in dense documents, assumes prior knowledge, and rarely exists in the languages a resident actually speaks. A generic chatbot is the wrong answer to this: in a justice context, a confidently wrong response, an unauditable one, or one that strays outside approved content is a reputational and regulatory risk the ministry cannot carry.
- **Objectives** — Give the public a legal-awareness service they can actually use, in the languages they speak. Keep every response inside content the ministry has approved — no free-ranging generation. Support voice interaction in Arabic, Tamil, and Urdu. Make the system auditable and safe by design, not by later review.
- **Approach** — Governance was treated as an architecture decision, not a policy document written after the build. Before scoping generation, the line the system would never cross was drawn: it can surface, explain, and point to approved legal information; it does not give legal advice or decide anything. Content governance ran in parallel with engineering, so the ministry approved the knowledge base the system draws from rather than auditing outputs after the fact. A working prototype — multilingual, voice-enabled, governed — was built and demonstrated to the ministry.
- **Architecture** — A retrieval-augmented generation design anchored to a ministry-approved knowledge base, so the model answers from a controlled corpus rather than open generation. A multilingual voice layer handles Arabic, Tamil, and Urdu. Governance is built into the path: explicit boundaries on what it may say unsupervised, an audit trail of what it retrieved and returned, and a defined route for when it is confidently wrong.
- **Technology** — Governed generative AI and retrieval-augmented generation; LLM orchestration and evaluation; retrieval over an approved knowledge base; multilingual voice (Arabic, Tamil, Urdu); content-governance controls and audit-grade logging.
- **Results** — A governed, multilingual, voice-enabled prototype was demonstrated to the ministry, with a content-governance model the ministry approved. Explicitly not claimed as production: "this is a demonstrated prototype, not a production deployment, and the case study will be updated only when that changes."
- **Key Learnings** — Governance in a regulated environment is a design problem wearing a policy label. The decisions that make an AI system defensible — where the human sits, what gets logged, what the system may say unsupervised — are architecture, and retrofitting them after a demo lands well is far more expensive than designing for them on day one.

### Executive Intelligence OS (`/work/executive-intelligence-os`) — status: In progress
`summary`: A working system to give executives a single, governed view across the information they'd otherwise chase across tools and teams.

- **Client Context** — Executive Intelligence OS is built for a familiar executive problem: the information needed to make a decision exists somewhere in the organization, but not in one place, not in one format, and not on demand.
- **Business Challenge** — Executives spend a disproportionate amount of time assembling context — pulling reports, chasing updates, reconciling numbers across systems — before they can actually decide anything. Off-the-shelf BI tools show what's queryable; they don't reason across it or surface what actually matters this week.
- **Objectives** — Give an executive a governed, single point of access to the state of their organization. Keep business logic deterministic where it needs to be — AI interprets and summarizes, it doesn't silently make decisions. Build a system an executive would actually open daily, not a dashboard that gets ignored after week two.
- **Approach** — V47 treated this as a product problem before an AI problem: define what an executive actually needs to know, on what cadence, and at what level of detail — then use AI to compress and contextualize that information rather than to generate it from scratch.
- **Architecture** — A data and reporting layer feeds a reasoning and summarization layer, with the AI positioned to interpret and prioritize information rather than originate it — the underlying data sources remain the system of record, not the model's output.
- **Technology** — LLM-based summarization and prioritization on top of structured organizational data sources. We publish specific vendor and infrastructure detail on a case-by-case basis — ask us directly if that's relevant to your evaluation.
- **Results** — Actively in development. We'll publish results here once the system reaches a milestone worth reporting — consistent with V47's rule that no metric ships without a source a buyer could check.
- **Key Learnings** — The hardest part of an "executive AI" product isn't the AI — it's deciding what an executive actually needs to see and when. Getting that editorial judgment right (what to surface, what to suppress) matters more than model sophistication.

---

## C5 — AI Lab (`content/ai-lab/ai-pmo.mdx`)

### AI PMO (`/lab/ai-pmo`) — status: In progress
`summary`: An experiment in using AI to run the mechanical parts of project management — status tracking, risk surfacing, reporting — so a PMO can spend its time on judgment calls instead of status updates.

- **What it does** — AI PMO is a working experiment in offloading the repetitive mechanics of project management — chasing status updates, assembling reports, flagging risks buried in scattered updates — to an AI layer, so the humans running the PMO can spend their time on judgment calls: what's actually at risk, what needs escalation, what to do about it. *Status: in progress. There's no public demo link yet — this entry documents the architecture and thinking as it's being built, honestly, rather than waiting for a polished launch to talk about it.*
- **Architecture** — A structured project-data layer (tasks, statuses, dependencies, updates) feeds an AI layer that summarizes state and surfaces anomalies. The project-data layer stays the source of truth — the AI interprets and flags, it doesn't own or overwrite project state.
- **Stack** — We'll publish the full stack once it's stable enough to commit to writing rather than describe a moving target — ask us directly for where it stands today.
- **Lessons learned so far** — The genuinely hard part isn't summarizing status — it's deciding what's worth flagging versus what's normal variance. An AI PMO that flags everything is as useless as a PMO that flags nothing; getting that threshold right is turning out to be more of a product-judgment problem than a modeling problem.

---

## C6 — Methods / Frameworks + Industries

### AI Discovery Framework (`content/methods/ai-discovery-framework.mdx`, `/methods/ai-discovery-framework`) — status: Delivered
`summary`: How V47 turns an ambitious AI mandate into a scoped, fundable set of opportunities — before a single line of code gets written.

- **Thesis** — Most AI initiatives fail before they start writing code — not because the technology doesn't work, but because nobody scoped the problem tightly enough to know what "working" would mean. The AI Discovery Framework exists to close that gap: turn a broad executive mandate ("do something with AI") into a small number of specific, fundable, measurable opportunities.
- **Stages:**
  1. **Executive interviews.** Understand the mandate, the constraints, and what "success" actually means to the people funding it.
  2. **Opportunity mapping.** Survey the organization's processes and data for where AI genuinely changes the economics — not everywhere it's technically possible.
  3. **Feasibility and risk screen.** Rule out what's technically fragile, ungoverned, or premature before it becomes an expensive lesson.
  4. **Prioritization.** Rank the surviving opportunities by impact and buildability, not by novelty.
  5. **Scoped roadmap.** Leave the client with a small number of prioritized opportunities, each scoped enough to brief a build team — not a slide deck of AI ideas.
- **When to use this** — Best fit for an organization with real AI ambition but no scoped starting point — a mandate from leadership without a mandate's worth of clarity underneath it. It's the front door to an AI Prototype Sprint or an Enterprise AI Strategy engagement, not a replacement for either. `Have a mandate that needs scoping? Talk to us about this → /contact`

### Industries (`src/lib/industries.ts`, `/industries` + `/industries/[slug]`)

| Slug | Label | Context | Value |
|---|---|---|---|
| `government` | Government | Public-sector programmes with real procurement and governance constraints. | AI that fits existing accountability structures instead of fighting them. |
| `construction` | Construction | Complex, multi-party projects with heavy documentation and coordination overhead. | AI that cuts through document and coordination overhead across contractors. |
| `real-estate` | Real estate | Portfolio and transaction-heavy operations with fragmented data sources. | AI that unifies scattered portfolio data into decisions leadership can act on. |
| `financial-services` | Financial services | Regulated institutions balancing innovation against compliance risk. | AI delivery with governance and audit trails built in from day one. |
| `healthcare` | Healthcare | High-stakes environments where AI must augment, never replace, clinical judgment. | AI positioned to support decisions, with humans firmly accountable. |
| `education` | Education | Institutions balancing personalization against equity and oversight. | AI that supports educators rather than automating around them. |
| `legal` | Legal | Procedurally strict processes where accuracy matters more than fluency. | AI that interprets and guides within defined guardrails, not open-ended advice. |

---

## C7 — Think With V47 (`src/lib/think-with-v47.ts` + `ThinkWithV47.tsx`)

**Section copy:**
- Eyebrow: `Think with V47` / H2: `See how we'd approach your problem.`
- Intro: `A live, scoped preview of our discovery thinking — not a quote, not a commitment. Pick the closest fit and generate an illustrative starting point.`
- Button: `Generate a blueprint` (loading state: `Generating…`)
- Unconfigured state: `This feature is built but not yet switched on — it needs an API key configured. Check back soon, or book a session in the meantime.`
- Error state: `Couldn't generate a blueprint right now. Try again in a moment.`
- Result disclaimer: `Illustrative starting point, not a quote or a commitment. Scoped detail only follows a real discovery session.`
- Result CTA: `Book a discovery session` → `/contact`

**Dropdown options:**
- *Challenge:* Automating citizen or public service requests · Modernizing an internal operations process · Reducing customer/citizen support load with AI · Unifying fragmented data for reporting or decisions · Streamlining a procurement or approval workflow
- *Organization type:* Government / public sector · Financial services · Healthcare · Real estate · Large enterprise (other)
- *Primary constraint:* Strict data privacy / residency requirements · Heavy reliance on legacy systems · Slow procurement / long approval timelines · Limited in-house AI maturity

**System prompt (verbatim, drives Claude's output):**
> You are V47, a boutique AI consulting practice for GCC governments and enterprises. Draft a short, honest, illustrative AI architecture blueprint for a prospective client, in V47's voice: precise, candid, no hype, no banned buzzwords (leading, cutting-edge, revolutionary, world-class, game-changing, next-gen, seamless, synergy, unlock, empower, robust, leverage, solutions-as-catch-all). This is a starting point for a discovery conversation, not a delivered proposal or a quote — never state or imply specific costs, timelines in exact weeks/months, team sizes, or guaranteed outcomes. Keep the roadmap to V47's real six-stage method: Discover, Prioritize, Prototype, Validate, Deploy, Scale.

---

## C8 — Insights articles (`content/insights/*.mdx`)

### Why AI pilots stall before production (`/insights/why-ai-pilots-stall-before-production`) — pillar: ai-strategy
`summary`: Most enterprise AI pilots don't fail on the model. They fail on the gap between a demo and a system someone can be accountable for.

> Most enterprise AI pilots don't fail because the model was wrong. They fail because a demo and a production system are different engineering problems wearing the same UI, and organizations budget, staff, and govern for the first one while quietly needing the second.
>
> **The demo is the easy 80%** — A working prototype that impresses a room is genuinely achievable in weeks. It answers the question "can this work at all?" — and for most enterprise use cases, yes, it can. That's not the hard part anymore. The hard part is everything a demo is explicitly allowed to skip: what happens when the input is malformed, who is accountable when the output is wrong, how the system behaves under load, and who signs off on it touching a real customer or a real decision.
>
> **Three places pilots actually stall:**
> - **Ownership.** A pilot built by an innovation team or a vendor has no natural home in the org chart. When it's time to harden it for production, there's often no team whose job it is to own that — so it sits in limbo until someone champions it, or it quietly dies.
> - **Governance.** Most enterprises, especially regulated ones, don't have a clear answer to "who approves an AI system touching this process?" until someone asks. Building that governance path in parallel with the pilot — not after it — is the difference between a six-week delay and a project that never restarts.
> - **Data reality.** Demos run on curated, cooperative data. Production runs on the data the organization actually has: incomplete, inconsistently formatted, spread across systems that don't talk to each other. Most of the "AI work" in a real production system is actually data-plumbing work, and it's rarely scoped for in the pilot phase.
>
> **What changes the outcome** — Treating the pilot as a proof of the production system, not a separate thing from it. That means scoping governance and ownership questions at the start, not after the demo lands well — and being honest early about which parts of the eventual system are AI and which are the deterministic plumbing around it that will actually determine whether it ships.
>
> The organizations that get from pilot to production aren't the ones with the most sophisticated models. They're the ones that treated "who owns this, and how does it get approved" as a day-one question instead of a week-twelve surprise.

### What AI governance actually requires in regulated environments (`/insights/ai-governance-in-regulated-environments`) — pillar: ai-governance
`summary`: Governance isn't a policy document. It's a set of specific answers a regulated organization needs before an AI system can touch a real decision.

> In government and other regulated environments, "we need an AI governance framework" usually means something narrower and more useful than it sounds: a specific set of answers an organization needs before it lets an AI system touch a real decision, a real citizen interaction, or real regulated data.
>
> **The four questions that actually matter:**
> - **Who is accountable when the system is wrong?** Not "the AI" — a named role or function. If an organization can't answer this before deployment, it isn't ready to deploy, regardless of how well the model performs in testing.
> - **What can the system decide versus recommend?** Most defensible AI governance draws this line explicitly: the AI can summarize, flag, and recommend; a human accountable party makes the decision it feeds into. Blurring this line is where most governance failures actually originate — not in the model's accuracy.
> - **What's the audit trail?** Regulated environments need to reconstruct, after the fact, what the system saw, what it output, and why a human acted on it the way they did. If that trail doesn't exist by design, it won't exist when a regulator or an auditor asks for it.
> - **What happens when the system is confidently wrong?** Every AI system will be confidently wrong sometimes. Governance means having a defined path for catching and correcting that — not assuming it won't happen because the accuracy numbers look good in a demo.
>
> **Why this is a design problem, not a policy problem** — Organizations often treat governance as a document to produce after the system is built — a compliance artifact. In practice, the four questions above are architecture decisions: where the human-in-the-loop sits, what gets logged, what the system is and isn't permitted to output unsupervised. Bolting that onto a system after it's built is far more expensive than designing for it from the start, and it's usually visible to anyone reviewing the system that it was retrofitted rather than designed in.
>
> **What this means in practice** — For a government or enterprise buyer, the practical test isn't "does this vendor have a governance framework" — most do, on paper. It's "can this vendor answer the four questions above specifically, for this system, before it touches anything real." If the answer is vague, the governance is vague, no matter what the framework document says.

### The product-management skills AI teams are missing (`/insights/product-management-skills-ai-teams-are-missing`) — pillar: product-leadership
`summary`: Most enterprise AI teams are staffed for modeling and short on the product judgment that decides whether the system actually gets used.

> Enterprise AI teams are typically staffed for the modeling problem — data scientists, ML engineers, increasingly prompt and agent specialists. They're much less often staffed for the product problem: deciding what the system should actually do, for whom, and when it should stay quiet.
>
> **The skill that's missing isn't technical** — The best AI systems make constant editorial decisions: what to surface and what to suppress, when confidence is high enough to act versus flag, how much autonomy a user actually wants versus how much control they need to keep. None of that is a modeling question. It's the same judgment a good product manager applies to any feature — except most AI initiatives don't have that judgment in the room, because the team was built to answer "can we build this," not "should this exist in this form."
>
> **Where this shows up:**
> - **Over-triggering.** A system that flags or suggests too often trains its users to ignore it — the exact failure mode of an over-eager notification system, just wearing an AI label. This is a product-design failure, not a model-accuracy failure.
> - **Wrong unit of autonomy.** Some tasks genuinely benefit from an AI acting autonomously; most enterprise tasks benefit more from an AI drafting and a human approving. Getting this wrong in either direction — too much autonomy, or too little — is a judgment call that has nothing to do with model capability.
> - **No opinion on "done."** Teams optimized for model performance can iterate accuracy metrics indefinitely without ever asking whether the system, as it exists today, is good enough to ship to a real user doing a real job. That's a product question, and it needs a product answer, not a leaderboard number.
>
> **What good looks like** — The AI teams that ship systems people actually keep using tend to have one thing in common: someone in the room whose job is to decide what the system should and shouldn't do — not just what it's capable of doing. That's product management. It's not a nice-to-have on an AI team; for enterprise deployments, it's usually the difference between a system that gets adopted and one that gets a polite pilot writeup and quietly shelved.

---

## C9 — Contact, Legal, Company Profile

### `/contact` (`src/app/contact/page.tsx`)
- Eyebrow: `Contact` / H1: `Have an AI problem worth solving properly?`
- Standfirst: `Three ways to reach us. No long qualification form.`
- **Book a discovery session** — `Email directly to set up a session — a dedicated scheduling link is being finalized.` → `mailto:vignesh@v47ai.com?subject=AI%20discovery%20session`
- **Email** — `For anything else.` → `vignesh@v47ai.com`
- **LinkedIn** — `Follow or message directly.` → `linkedin.com/company/v47`

### `/privacy` (`src/app/privacy/page.tsx`)
- Caveat banner: `Draft placeholder — this policy has not been reviewed by counsel. Replace with a reviewed policy before this site handles real visitor data at scale.`
- Body: `This site uses privacy-respecting analytics (Google Analytics 4 and Microsoft Clarity) to understand how visitors use it. We don't sell visitor data. If you contact us by email, we use the information you send only to respond to you.` / `Questions about this policy: vignesh@v47ai.com.`

### `/terms` (`src/app/terms/page.tsx`)
- Caveat banner: `Draft placeholder — these terms have not been reviewed by counsel. Replace with reviewed terms before relying on this page.`
- Body: `This website and its content are provided by V47, a boutique AI consulting practice licensed in Abu Dhabi, UAE. Content on this site is informational and does not constitute a service agreement — engagement terms are set out separately in any signed proposal or contract with V47.` / `Questions about these terms: vignesh@v47ai.com.`

### `/company-profile` (`src/app/company-profile/page.tsx`)
- Eyebrow: `Firm` / H1: `Company profile` — Badge: `In progress`
- `A downloadable, procurement-ready PDF is in production — built from the same design system as this site, so it reads as one document family, not a separate marketing artefact.`
- `In the meantime, everything the profile will summarize — work, methods, and how to reach us — is already on this site.`

---

## C10 — Global chrome (Nav, Footer, JSON-LD)

**Nav** (`src/components/layout/Nav.tsx`) — links, in order: `Services · Industries · Work · Methods · Lab · Insights · About`. CTA: `Book a session` → `/contact`.

**Footer** (`src/components/layout/Footer.tsx`)
- Explore: Services, Industries, Work, Methods, Lab, Insights
- Firm: About, Company profile, Contact
- Connect: Book a session, LinkedIn, RSS
- Legal: Privacy, Terms
- Descriptor line: `AI consulting · Abu Dhabi`
- Base row: `V47 · Boutique AI Consulting · Licensed in Abu Dhabi, UAE` / `© {year} V47.`

**Organization JSON-LD** (`src/app/layout.tsx`)
```json
{
  "@type": "ProfessionalService",
  "name": "V47",
  "description": "Boutique AI consulting — from AI strategy to production.",
  "areaServed": ["AE", "GCC"],
  "address": { "addressLocality": "Abu Dhabi", "addressCountry": "AE" },
  "url": "https://v47ai.com",
  "sameAs": ["https://www.linkedin.com/company/v47"],
  "founder": [
    { "name": "Vigneshraja Kadirvell", "jobTitle": "Founder & Principal Consultant" },
    { "name": "Sharmili G", "jobTitle": "Co-Founder & Head of Data Platform Engineering" }
  ]
}
```

**Site-wide metadata default:** title `V47 — Boutique AI Consulting`, description `Boutique AI consulting — from AI strategy to production.`

**Contact email used throughout:** `vignesh@v47ai.com` (Block 1's open question about final domain email is still unresolved — this address is live in copy regardless).
