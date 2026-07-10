# V47 Website — As-Built Record

**Status:** Living document. Update this file at the end of every work session —
new routes, components, content, or decisions get added here, not just left in
git history. This is the record of what actually shipped, as distinct from
`01_PRD.md`–`10_Copywriting_Guide.md`, which are the original plan.

**Live URL:** https://website-v47ai.vercel.app (no custom domain connected yet)
**Repo:** `v47ai/website`, branch `main`

---

## 1. Stack (as built)

- Next.js 16.2.10 (App Router, Turbopack) + React 19 + TypeScript
- Tailwind CSS v4, CSS-first `@theme` config in `src/app/globals.css` (no `tailwind.config.ts`)
- shadcn/ui + Base UI primitives, `class-variance-authority`, `cn()` utility
- Framer Motion for reveals/Nav scroll-hide; GSAP not used (deferred — no signature moment has needed it yet)
- MDX content (`gray-matter` + `next-mdx-remote/rsc`) in `/content`
- `@anthropic-ai/sdk` for the Think With V47 feature (`claude-opus-4-8`, structured JSON output)
- Vercel (project `vkadirvell-gmailcoms-projects/website`), GA4 + Microsoft Clarity scaffolded (env-gated, inactive)

Deviation from `CLAUDE.md`'s stated stack: spec says Next.js 15; the project was
scaffolded on 16.2.10 and kept there (explicit decision, not drift).

---

## 2. Route inventory

| Route | Purpose | Source | Status |
|---|---|---|---|
| `/` | Homepage — all 9 sections per `06_Component_Specification.md` | `src/app/page.tsx`, hand-coded sections | Live |
| `/about` | Founder (Vignesh) + Co-Founder (Sharmili G) bios, firm principles | `src/app/about/page.tsx`, hand-coded | Live |
| `/work` | Case studies index | `src/lib/content.ts` (`case-study`) | Live |
| `/work/justice-corner` | Case study — Delivered | `content/case-studies/justice-corner.mdx` | Live |
| `/work/executive-intelligence-os` | Case study — In progress | `content/case-studies/executive-intelligence-os.mdx` | Live |
| `/methods` | Frameworks index | `src/lib/content.ts` (`framework`) | Live |
| `/methods/ai-discovery-framework` | Framework detail | `content/methods/ai-discovery-framework.mdx` | Live |
| `/lab` | AI Lab index | `src/lib/content.ts` (`lab`) | Live |
| `/lab/ai-pmo` | Lab entry — In progress | `content/ai-lab/ai-pmo.mdx` | Live |
| `/insights` | Insights index + RSS link | `src/lib/content.ts` (`insight`) | Live |
| `/insights/*` | 3 published articles (one per pillar: ai-strategy, ai-governance, product-leadership) | `content/insights/*.mdx` | Live |
| `/rss.xml` | RSS feed of insights | `src/app/rss.xml/route.ts` | Live |
| `/services` | Services index — 3 core offerings + 2 specialized | `src/app/services/page.tsx`, hand-coded | Live |
| `/services/regulated-ai-open-finance` | Specialized service — CBUAE/SAMA-aware AI architecture | `src/app/services/regulated-ai-open-finance/page.tsx` | Live |
| `/services/decision-intelligence-os` | Specialized service — cross-silo decision intelligence | `src/app/services/decision-intelligence-os/page.tsx` | Live |
| `/industries` | Industries index (7 sectors) | `src/lib/industries.ts` | Live |
| `/industries/[slug]` | Industry detail (government, construction, real-estate, financial-services, healthcare, education, legal) | `src/lib/industries.ts` | Live |
| `/contact` | Contact page | `src/app/contact/page.tsx` | Live — uses `mailto:`, no booking tool wired yet |
| `/company-profile` | Honest "in production" placeholder (was a broken PDF link) | `src/app/company-profile/page.tsx` | Live |
| `/privacy`, `/terms` | Legal boilerplate | `src/app/privacy/page.tsx`, `src/app/terms/page.tsx` | Live — flagged on-page as not counsel-reviewed |
| `/api/think` | POST-only API route behind Think With V47 | `src/app/api/think/route.ts` | Live, gated on `ANTHROPIC_API_KEY` |
| `/sitemap.xml`, `/robots.txt` | SEO | `src/app/sitemap.ts`, `src/app/robots.ts` | Live |

---

## 3. Homepage sections (`src/app/page.tsx`)

In order: Hero → TrustBar → ServiceCards → IndustrySelector → WorkGrid (case
studies) → MethodTimeline → **ThinkWithV47** → LabStrip → InsightGrid →
ContactBand. `ThinkWithV47` was inserted between Method and Lab per an
explicit placement request, not part of the original `06_Component_Specification.md`
order.

---

## 4. Component inventory

**Primitives** (`src/components/primitives/`): Button, Card, Badge, Eyebrow,
Divider, Link, Field, Icon, Logo, LogoIcon, Reveal.

**Layout** (`src/components/layout/`): Nav (sticky, scroll-hide, mobile
quick-link strip — see §7), MobileMenu, MobileMenuTrigger, Footer,
GirihBackdrop.

**Sections** (`src/components/sections/`): Hero, TrustBar, ServiceCards,
IndustrySelector, WorkGrid, MethodTimeline, LabStrip, InsightGrid,
ContactBand, ContentDetail (shared MDX detail-page shell), ContentList
(shared index-page shell), ThinkWithV47.

**Root-level**: Analytics.tsx (GA4 + Clarity, env-gated), ThemeToggle.tsx (see §8).

---

## 5. Think With V47

Scoped-down build of a feature originally pitched as free-text →
budget/timeline/architecture generator. Built instead as:

- Fixed dropdown inputs only (`CHALLENGE_OPTIONS`, `ORG_TYPE_OPTIONS`,
  `CONSTRAINT_OPTIONS` in `src/lib/think-with-v47.ts`) — no free text ever
  reaches the model.
- No budget or cost figures in the output schema — explicitly excluded as
  too liability-prone.
- `claude-opus-4-8` via `messages.parse()` with a JSON-schema-constrained
  output (`executiveSummary`, `suggestedArchitecture`, `technologyOptions`,
  `roadmap`, `deliveryRisks`, `procurementConsiderations`).
- System prompt explicitly instructs the model never to state costs, exact
  timelines, team sizes, or guaranteed outcomes.
- Per-IP in-memory rate limit (5 req/60s) — documented as best-effort only,
  not durable across serverless cold starts.
- Honest "not yet switched on" state when `ANTHROPIC_API_KEY` is unset
  (same pattern as Analytics) — verified via Playwright that no fake data
  renders in that state.

---

## 6. Founder / team content (`/about`)

- **Vignesh** — Founder & Principal Consultant. Track record: EXL/Paymentor.ai
  (AI collections/BNPL SaaS, $5M contracts, GCC bank CXOs), KPMG/TEJAS
  (Government of India national analytics platform under CEDA).
- **TEJAS narrative** — sourced from public NIC/MeitY materials and
  independent policy reporting (launch year, acronym, features, NIC's own
  75%+ adoption stat). The 128,000-user figure is explicitly labeled as
  internal reporting during Vignesh's tenure, not a published NIC statistic
  — kept distinct from the sourced claim.
- **GCC regulatory fluency** — CBUAE Open Finance Regulation / SAMA Open
  Banking framework experience, cross-linked to `/services/regulated-ai-open-finance`.
- **Sharmili G** — Co-Founder & Head of Data Platform Engineering. Track
  record: Tech Mahindra (Ford Credit → GCP migration), OCBC/AmBank
  (Malaysia regulator-facing systems — BNM NSRS, CCRIS), Wipro (Lloyds/
  Citibank/State Street). Selected-projects grid: ECL, ELMM, BNM NSRS,
  CCRIS, FALCON Debit, Enterprise Bigdata Platform. Source: her own resume,
  treated as primary-source career fact per the site's verifiable-claims
  rule, same handling as Vignesh's history.
- Both have `Person` JSON-LD; the root `ProfessionalService` JSON-LD in
  `layout.tsx` carries a `founder` array listing both.
- "Co-Founder" was a deliberate title choice (not "team member") — flagged
  to the owner as a structural/equity claim worth confirming is accurate.

---

## 7. Mobile navigation

`Nav.tsx` originally only exposed all 7 top-level links via the hamburger
overlay (`MobileMenu.tsx`). Added a horizontal-scroll quick-link strip
directly under the mobile top bar so Services/Industries/Work/Methods/Lab/
Insights/About are visible without opening the menu; hamburger still opens
the full-screen menu with the "Book a session" CTA.

`/services` and `/industries` were live routes with no path in from Nav or
Footer at all until this was caught and fixed — worth double-checking any
future new route actually gets wired into navigation, not just built.

---

## 8. Design-preview theme toggle (NOT a shipped brand decision)

`ThemeToggle.tsx` renders a black bar pinned to the top of every page:
"Design preview — not final" with **V47 Classic** / **V47 Teal** buttons.
Purely a side-by-side comparison tool the owner asked for — has not been
adopted as the site's actual theme.

- **V47 Classic** — the real, shipped design system per `04_Design_System.md`:
  dark obsidian/ink palette, brass hairline accents (<5% of screen),
  Newsreader (display) / Inter (body) / JetBrains Mono (labels).
- **V47 Teal** — alternate palette proposed in an external brand-doc draft:
  white/light background, Kinetic Aqua `#00CED1` accent (replaces brass),
  Inter for headings (replaces Newsreader), IBM Plex Mono for labels
  (replaces JetBrains Mono), tighter radii, lighter shadows. New
  "V + network nodes" logo mark (`LogoIcon.tsx`) shown only in this theme.
- Mechanism: both variants override the *same* semantic CSS custom
  properties (`--bg`, `--fg`, `--brass-*`, `--font-display`, `--font-mono`,
  etc.) under `[data-theme="teal"]` in `globals.css` — zero component-level
  branching. Toggle state persists via `localStorage`, applied by setting/
  removing `data-theme` on `<html>`.
- Declined from that same draft: full palette/type replacement as a fait
  accompli, "Elite" brand-personality language (banned vocabulary per
  `10_Copywriting_Guide.md` §3), a homepage copy rewrite with fabricated
  case-study specifics and invented AI Lab entries that don't exist.
- **Open decision for the owner:** which theme ships. Classic reads
  "sovereign-grade advisory to ministries"; Teal reads closer to a SaaS
  product company. Neither is wrong — worth a deliberate choice, not a
  default.

---

## 9. Known gaps / blocked (owner action required)

- Custom domain (`v47ai.com`) not purchased/connected.
- GA4 measurement ID + Clarity project ID not set (env vars empty — analytics inactive).
- `ANTHROPIC_API_KEY` not set — Think With V47 shows the honest "not configured" state in production.
- Durable rate limiting (e.g. Upstash) recommended before high-traffic launch of Think With V47.
- Search Console not verified (wants the custom domain live first).
- Booking tool not chosen (`/contact` uses `mailto:`).
- Founder portrait unresolved — no stock/casual substitute used.
- `/privacy`, `/terms` are draft boilerplate, not counsel-reviewed.
- Theme decision (§8) — Classic vs. Teal — not finalized.
- "Tejasvi visual intelligence tool" — resolved as TEJAS (see §6); no further gap.

---

## 10. Changelog

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

*(Append new rows here as work continues — one row per meaningful commit or
batch of commits, not every individual `git commit`.)*
