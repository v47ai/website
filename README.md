# V47

V47 is a boutique AI consulting practice licensed in Abu Dhabi. This repository
is the foundation of the broader V47 digital ecosystem, currently focused on
building **v47ai.com** — a sovereign-grade digital HQ for GCC government and
enterprise C-suite buyers.

The long-term vision spans four pillars:

1. **Website (Digital HQ)** — the public-facing site. Active focus of this repo today.
2. **Blueprint Platform** — a future product. Not being built yet.
3. **Knowledge Engine** — future proprietary IP. Not being built yet.
4. **Consulting Services** — the core practice the website and platform support.

Only the Website is under active implementation. The rest of this repository is
scaffolding reserved for future phases.

## Repository structure

```
docs/
  website/       Source-of-truth specs for the website build (PRD, brand,
                 IA, design system, content, components, motion, SEO,
                 execution roadmap, copywriting guide)
  product/       Placeholder specs for the future Blueprint Platform /
                 Knowledge Engine product line
  engineering/   Placeholder specs for cross-cutting technical standards
src/
  app/           Next.js App Router routes
  components/    Shared UI components
  lib/           Utilities and shared logic
  hooks/         Shared React hooks (reserved)
  styles/        Global styles (reserved)
content/         MDX content
  case-studies/  Case study entries (reserved)
  ai-lab/        AI Lab entries (reserved)
public/          Static assets
```

## Current phase

**Sprint 0 — Repository restructuring.** The repo has just been reorganized to
separate website docs from future product/engineering docs and to scaffold
directories for upcoming content types. No website functionality has changed
as part of this sprint.

## Current milestone

Per the build order in `CLAUDE.md`, the next milestone is **Milestone 1:
Foundation & design system** (tokens, Tailwind config, fonts, primitives, Nav,
Footer, layout, JSON-LD Organization, sitemap/robots). It has not started yet.
See `PROJECT_STATUS.md` for live status.

## Technology stack

Next.js 15 (App Router) · TypeScript · Tailwind CSS · shadcn/ui ·
Framer Motion + GSAP · MDX content · next/font (Newsreader, Inter, JetBrains
Mono) · Vercel · GA4 + Microsoft Clarity.

No WordPress, no page builders, no third-party templates — everything is
custom-built.

## Build philosophy

- **Sovereign-grade restraint.** This is not a startup landing page; it reads
  like a G42 / Mubadala-register institution.
- **Tokens only.** No hard-coded colours or sizes; the design system in
  `docs/website/04_Design_System.md` is implemented verbatim.
- **Every claim must be verifiable.** No invented clients, numbers, or
  outcomes — see `docs/website/01_PRD.md` §4.
- **One milestone at a time.** The build order in `CLAUDE.md` is followed
  exactly, with a stop-and-review gate after each milestone.
- **Accessibility and performance are non-negotiable floors**, not
  aspirations — see `CLAUDE.md` for the specific targets.

## Roadmap

High-level build order (see `docs/website/09_Execution_Roadmap.md` for full
detail):

1. Foundation & design system
2. Homepage
3. One flagship AI Lab entry
4. Two real case studies
5. About + Contact + Methods index + one Framework
6. Insights index + 2–3 articles
7. Deploy to Vercel; wire GA4 + Clarity + Search Console

Product-line docs in `docs/product/` and engineering standards in
`docs/engineering/` are placeholders for future phases and are not yet
scoped for implementation.

## Contributing

This project is built using Claude Code with a strict Plan Mode workflow:

1. Read `CLAUDE.md` and the relevant docs under `docs/` before proposing changes.
2. Propose a plan and wait for approval before writing code.
3. Work one milestone at a time; stop for review before starting the next.
4. Keep commits small and reviewable, with clear messages.
5. Never invent client names, numbers, or outcomes — flag placeholders clearly.
6. Ask before destructive commands, force-pushes, or adding large dependencies.
