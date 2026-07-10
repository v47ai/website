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
| `/about` | Founder (Vignesh) + Co-Founder (Sharmili G) bios, firm principles | `src/app/about/page.tsx` | Live |
| `/work` | Case studies index | `src/lib/content.ts` (`case-study`) | Live |
| `/work/justice-corner` | Case study — Delivered | `content/case-studies/justice-corner.mdx` | Live |
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

- **Case studies (2):** Justice Corner (Delivered), Executive Intelligence OS
  (In progress) — named projects from the founder's own history, not
  invented; both use the fixed 8-part structure.
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

- **Vignesh** — Founder & Principal Consultant. Track record: EXL/
  Paymentor.ai (AI collections/BNPL SaaS, $5M contracts, GCC bank CXOs),
  KPMG/TEJAS (Government of India national analytics platform under CEDA).
- **TEJAS narrative** — independently researched and sourced from public
  NIC/MeitY materials and policy reporting (launch year, acronym, features,
  NIC's own 75%+ state-application-adoption stat). The 128,000-user figure
  is explicitly labeled as internal reporting during Vignesh's tenure, not a
  published NIC statistic — kept distinct from the independently-sourced claim.
- **GCC regulatory fluency** — CBUAE Open Finance Regulation / SAMA Open
  Banking framework experience, cross-linked to
  `/services/regulated-ai-open-finance`.
- **Sharmili G** — Co-Founder & Head of Data Platform Engineering. Track
  record: Tech Mahindra (Ford Credit → GCP migration), OCBC/AmBank (Malaysia
  regulator-facing systems — BNM NSRS, CCRIS), Wipro (Lloyds/Citibank/State
  Street). Selected-projects grid: ECL, ELMM, BNM NSRS Reporting, CCRIS,
  FALCON Debit, Enterprise Bigdata Platform. Source: her own resume, treated
  as primary-source career fact the same way Vignesh's history is handled.
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
| *(this commit)* | This file expanded into the full consolidated Vision+PRD+As-Built record |

*(Append new rows here as work continues — one row per meaningful commit or
batch of commits, not every individual `git commit`.)*
