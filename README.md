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

**V1 live.** All seven milestones in `CLAUDE.md`'s build order are built and
deployed to Vercel. The custom domain (`v47ai.com`) isn't connected yet — live
at the Vercel production alias in the meantime. See `PROJECT_STATUS.md` for
the full status, including what's intentionally still flagged rather than
fabricated (case study specifics, founder portrait, booking tool, analytics
IDs).

## Current milestone

None queued — the V1 build order is complete. Remaining work is either the
blocked items in `PROJECT_STATUS.md` (domain, analytics IDs, booking tool) or
Phase 5–6 scope explicitly deferred by `docs/website/09_Execution_Roadmap.md`.

## Technology stack

Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · shadcn/ui primitives ·
Framer Motion · MDX content (`gray-matter` + `next-mdx-remote`) · next/font
(Newsreader, Inter, JetBrains Mono) · Vercel · GA4 + Microsoft Clarity
(scaffolded, activates once real IDs are set as env vars).

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
detail) — all seven are built:

1. ✅ Foundation & design system
2. ✅ Homepage
3. ✅ One flagship AI Lab entry
4. ✅ Two real case studies
5. ✅ About + Contact + Methods index + one Framework
6. ✅ Insights index + 2–3 articles
7. ✅ Deploy to Vercel — domain, analytics IDs, and Search Console are the
   remaining blocked items (see `PROJECT_STATUS.md`)

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
