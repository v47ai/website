# V47 — Master Build Prompt

**Version 1.0 | Owner: Vignesh | Status: Draft for Build**
**This is the handoff document.** It consolidates `01`–`08` into a single, near-deterministic instruction set for Claude Code. Read this + the referenced docs before writing any component.

---

## 0. How to Use This Prompt

Paste this document (or point Claude Code at `docs/`) as the build brief. Every decision is already made in the docs — **do not improvise; if a decision is genuinely absent, stop and ask** (per PRD §1). Build in the exact order in §5. Do not build all pages at once (founder is a one-person team — PRD §14).

Source of truth per concern:
- **What/why & IA:** `01_PRD.md`, `03_Information_Architecture.md`
- **Look & feel:** `02_Brand_Guidelines.md`
- **Tokens & code contracts:** `04_Design_System.md`
- **Copy & content rules:** `05_Content_Strategy.md`, `10_Copywriting_Guide.md`
- **Component experience specs:** `06_Component_Specification.md`
- **Motion:** `07_Motion_System.md`
- **SEO:** `08_SEO_Strategy.md`

---

## 1. Role & Standard

You are a senior front-end engineer + design-systems lead building the digital HQ of a boutique AI consultancy targeting GCC government and enterprise C-suite buyers. The bar: it must read as **sovereign-grade** (G42 / Mubadala register), never as a generic AI-startup template. Restraint is the aesthetic. Every claim on the site must be verifiable (PRD §4). Ship production-quality, accessible, fast.

---

## 2. Tech Stack (PRD §12 — do not substitute)

```
Next.js 15 (App Router) · TypeScript · Tailwind CSS · shadcn/ui
Framer Motion + GSAP (motion only where 07 specifies)
Content: MDX in /content · next/font (Newsreader, Inter, JetBrains Mono)
Hosting: Vercel · Analytics: GA4 + Microsoft Clarity
Three.js only if a section truly needs it — not by default
No WordPress, no page builders, no templates. Everything custom.
```

---

## 3. Repository Setup

```
website/
├── docs/                 # 01–10 (this system)
├── app/                  # App Router routes (IA §1)
│   ├── layout.tsx        # fonts, tokens, theme=dark, Nav, Footer, JSON-LD Organization
│   ├── page.tsx          # Home (T1)
│   ├── work/ · lab/ · methods/ · insights/ · industries/ · services/
│   ├── about/ · contact/
│   ├── sitemap.ts · robots.ts · rss.xml/route.ts
│   └── og/route.tsx      # dynamic OG images
├── components/
│   ├── primitives/       # Button, Card, Badge, Eyebrow, Divider, Link, Field, Icon
│   ├── sections/         # Hero, TrustBar, ServiceCards, IndustrySelector, WorkGrid,
│   │                     #   MethodTimeline, LabStrip, InsightGrid, ContactBand
│   └── layout/           # Nav, Footer, MobileMenu, GirihBackdrop
├── content/              # MDX: work/, lab/, methods/, insights/ (frontmatter per Content §6)
├── lib/                  # content loader, metadata helpers, schema builders
├── styles/tokens.css     # Design §1 — verbatim
├── public/               # fonts fallback, favicon, company-profile.pdf, og assets
├── tailwind.config.ts    # Design §2
└── README.md
```

---

## 4. Global Rules (apply to every component)

1. **Tokens only** — no hard-coded colours/sizes; consume `04_Design_System.md` tokens/utilities. Dark theme default.
2. **Brass discipline** — brass < ~5% of any screen; hairlines and small marks only, never fills/gradients/glows (Brand §4.3).
3. **Typography** — serif (Newsreader) for display/H1/pull-quotes only; Inter body; JetBrains Mono for eyebrows/data/labels (Design §3).
4. **Motion** — follow `07` exactly; CSS-first, Framer for reveals, GSAP for the 2–3 signature draw-ins; `prefers-reduced-motion` respected everywhere.
5. **Accessibility floor** — semantic HTML, one h1/page, visible focus rings (`--ring`), 44px targets, keyboard-operable interactive components (Industry selector = ARIA tablist), meaning never by colour alone, skip-to-content.
6. **Copy** — obey `10_Copywriting_Guide.md`: active voice, sentence case, banned-word list enforced, verifiable claims only, honest status badges.
7. **No** stock imagery, AI-sparkle icons, neon accents, auto-carousels, or client logos.
8. **Performance** — SSG/ISR, `next/font`, `next/image`, animate only transform/opacity, code-split GSAP. Targets: LCP <2s, CLS <0.05, Lighthouse ≥95 (SEO §7).
9. **RTL-ready** — logical CSS properties, `/ar` reserved, no `left/right` hard-coding (Brand §10).
10. **SEO** — every route exports metadata + JSON-LD per `08`; canonical, sitemap, robots wired.

---

## 5. Build Order (STRICT — respects PRD §14)

**Build, review, and polish each step to production quality before starting the next.**

### Step 1 — Foundation
Tokens, Tailwind config, fonts, theme, primitives (`components/primitives/*`), Nav + Footer + layout, JSON-LD Organization, sitemap/robots. Acceptance: primitives render with all states; Lighthouse a11y ≥95 on a blank page; focus rings visible.

### Step 2 — Homepage (the hub, T1)
All sections in `06` order: Hero → TrustBar → ServiceCards → IndustrySelector → WorkGrid(featured) → MethodTimeline → LabStrip → InsightGrid → ContactBand. Wire the hero orchestration and method-line signature motion (`07`). Acceptance: matches `06` experience contracts; passes §8 checklist; reads sovereign-grade, not templated.

### Step 3 — One flagship Lab entry (T4)
Pick the most demo-able (recommend AI PMO or CEO Copilot). Working/embedded demo or honest `In progress` badge → Architecture → Stack → Lessons Learned. This is the clickable-proof anchor. Acceptance: demo reachable + keyboard-accessible; lessons include a real limitation.

### Step 4 — Two real Case Studies (T3)
Fixed 8-part structure (PRD §9), lead with result metric, honest confidentiality handling. Acceptance: both use identical structure; every number sourced; badges truthful.

### Step 5 — About (T9) + Contact (T10) + Methods index + 1 Framework (T5)
About: founder narrative + verifiable credentials + portrait. Contact: three actions only, no long form. Framework: thesis → diagram → stages → soft link. Acceptance: no inflated claims; contact friction minimal.

### Step 6 — Insights index + 2–3 articles (T8)
Editorial template; one per top pillar; never ship an empty Insights section. Acceptance: articles pass Content §7 depth bar; RSS + OG images working.

### Step 7 — Deploy + wire
Vercel deploy, connect `v47ai.com`, GA4 + Clarity, Search Console + sitemap submit. Acceptance: all §8 checks green on production.

**Everything else** (full Services, all Industries, remaining Lab/Methods, more Insights) queues into Phase 5–6 — do not build in V1.

---

## 6. Content Handling

- Content lives as MDX in `/content` with frontmatter per Content §6; a typed loader in `/lib` reads it and drives listings, badges, cross-links, and metadata.
- Where real copy isn't yet supplied, use the drafts/patterns in `10_Copywriting_Guide.md` — **but flag every placeholder** clearly; never invent client names, numbers, or outcomes (PRD §4).
- Status badges (`Delivered`/`In progress`/`Concept`/`Live demo`) are driven by frontmatter `status` and must be truthful.

---

## 7. Definition of Done (per page)

A page is done when ALL are true:
- [ ] Matches its `06` experience contract (emotional/visual/business intent met)
- [ ] Uses only design tokens; brass discipline respected
- [ ] Typography roles correct (serif/sans/mono usage)
- [ ] Motion per `07`; reduced-motion verified (toggle OS setting → no motion, content intact)
- [ ] Keyboard-navigable; focus visible; one h1; landmarks; alt text
- [ ] Contrast AA+ (spot-check with tooling)
- [ ] Responsive 360px → 1440px, no overflow/jank
- [ ] Metadata + JSON-LD + canonical present (`08`)
- [ ] LCP <2s, CLS <0.05 on the route; Lighthouse ≥95
- [ ] Copy passes `10` (active voice, sentence case, no banned words, verifiable)
- [ ] Reads sovereign-grade — would sit next to a G42/Mubadala property, not a startup template

---

## 8. Final Quality Gate (before calling V1 complete)

- [ ] The 60-second test (PRD §3): a cold CIO concludes "boutique firm, senior leadership, real delivery."
- [ ] Zero unverifiable claims sitewide (reference-check pass).
- [ ] No generic-AI-agency tells: no stock, no neon, no AI-sparkle, no buzzword copy, no template hero.
- [ ] All four V1 proof assets live: Home, 1 Lab demo, 2 case studies.
- [ ] Insights not empty; company-profile PDF one click from footer.
- [ ] Analytics + SEO wired; Search Console clean.
- [ ] Full keyboard + reduced-motion + mobile pass.

When every box is checked, V1 ships. Iterate content and remaining pages in Phases 5–6.

---

*End of `09_Master_Build_Prompt.md`. Next: `10_Copywriting_Guide.md`.*
