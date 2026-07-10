# CLAUDE.md — V47 Website Build

This file loads at the start of every Claude Code session. It is the operating
contract for building the V47 digital HQ. Read it fully, then read `/docs`
before writing any code.

## Project Constitution

Before every planning or implementation task, read:

docs/00_PROJECT_VISION.md

This document is the highest-priority design, engineering, and product authority.

If any instruction conflicts with this document, the Project Vision takes precedence.

## What this project is
V47 — a boutique AI consulting practice licensed in Abu Dhabi. This repo is the
website (v47ai.com): a **sovereign-grade** digital HQ for GCC government and
enterprise C-suite buyers (think G42 / Mubadala register, NOT a startup landing
page). Restraint is the aesthetic. **Every claim must be verifiable** — see
`docs/01_PRD.md` §4. If a claim wouldn't survive a reference check, it doesn't ship.

## Source of truth — read before building
All decisions live in `/docs`. **Do NOT improvise. If a decision is missing, STOP and ask.**
- `docs/01_PRD.md` — product vision, IA, non-goals
- `docs/02_Brand_Guidelines.md` — positioning, voice, colour, type, motif
- `docs/03_Information_Architecture.md` — routes, nav, page templates
- `docs/04_Design_System.md` — tokens, tailwind config, primitives ← implement verbatim
- `docs/05_Content_Strategy.md` — content model + frontmatter contract
- `docs/06_Component_Specification.md` — per-component experience specs
- `docs/07_Motion_System.md` — motion tokens + choreography
- `docs/08_SEO_Strategy.md` — metadata, schema, performance targets
- `docs/09_Master_Build_Prompt.md` — THE build order + definition of done ← follow exactly
- `docs/10_Copywriting_Guide.md` — voice, banned words, draft copy

## Stack (do not substitute)
Next.js 15 (App Router) · TypeScript · Tailwind CSS · shadcn/ui ·
Framer Motion + GSAP · MDX content in `/content` ·
next/font (Newsreader, Inter, JetBrains Mono) · Vercel · GA4 + Microsoft Clarity.
No WordPress, no page builders, no templates. Everything custom.

## Non-negotiable rules
- **Tokens only** (`docs/04`). Dark theme is the default. Never hard-code colours/sizes.
- **Brass discipline:** brass < ~5% of any screen — hairlines and small marks only,
  never fills, gradients, or glows.
- **Type roles:** Newsreader (serif) for display/H1/pull-quotes only; Inter for body/UI;
  JetBrains Mono for eyebrows/data/labels.
- **Motion** (`docs/07`): CSS-first, Framer Motion for reveals, GSAP for the 2–3
  signature moments only. `prefers-reduced-motion` respected everywhere.
- **A11y floor:** semantic HTML, one `<h1>` per page, visible focus rings, 44px targets,
  keyboard-operable components (Industry selector = ARIA tablist), never meaning by colour alone.
- **Copy** (`docs/10`): active voice, sentence case, banned-word list enforced,
  verifiable claims only, honest status badges (Delivered / In progress / Concept / Live demo).
- **Never:** stock imagery, AI-sparkle icons, neon accents, client logos, auto-carousels.
- **RTL-ready:** logical CSS properties (`margin-inline-start`, not `-left`); reserve `/ar`.
- **Performance:** SSG/ISR; animate only transform/opacity. Targets LCP < 2s, CLS < 0.05,
  Lighthouse ≥ 95 on every route.

## Build order (`docs/09` §5) — ONE milestone at a time; STOP for review before the next
1. **Foundation & design system** — tokens, tailwind, fonts, primitives, Nav, Footer,
   layout, JSON-LD Organization, sitemap/robots.
2. **Homepage only** — all sections in `docs/06` order. (Needs brand assets: logo, favicon, girih motif.)
3. **One flagship Lab entry** — working/embedded demo or honest "In progress".
4. **Two real case studies** — fixed 8-part structure, lead with the result metric.
5. **About + Contact + Methods index + 1 Framework.**
6. **Insights index + 2–3 articles** — never ship an empty Insights section.
7. **Deploy to Vercel; wire GA4 + Clarity + Search Console.**
Everything else queues to a later phase. **Do not build ahead of the current milestone.**

## Working style
- Use **Plan Mode**: propose a plan, wait for my approval, then build.
- After each milestone, **stop for review** — do not roll into the next.
- Small, reviewable commits with clear messages.
- **Never invent** client names, numbers, or outcomes. Flag every placeholder clearly.
- **Ask before** destructive commands, force-push, or adding large dependencies.

## Commands
- Dev: `npm run dev`
- Build: `npm run build`
- Lint: `npm run lint`
- (update this section once the app is scaffolded)

## Definition of done (per page) — see `docs/09` §7
Matches its `docs/06` experience contract · tokens only · brass discipline respected ·
correct type roles · motion + reduced-motion verified · keyboard + focus + one h1 + landmarks ·
contrast AA+ · responsive 360→1440 with no overflow · metadata + JSON-LD + canonical present ·
LCP/CLS/Lighthouse targets met · copy passes `docs/10` · **reads sovereign-grade, not templated.**
