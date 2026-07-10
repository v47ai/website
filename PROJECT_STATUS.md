# Project Status

This file is the single source of truth for where V47 stands right now. Update
it at the end of every sprint/milestone.

**Last Updated:** 2026-07-10

## Current Phase

V1 build — all seven milestones from `CLAUDE.md`'s build order are complete
and deployed. Live at the Vercel production alias below; the custom domain
(`v47ai.com`) is not yet connected.

**Live URL:** https://website-v47ai.vercel.app

## Sprint

**Sprint 1 — V1 build.** Sprint 0 (repository restructuring) is complete.
This sprint covered Milestones 1–7 from `CLAUDE.md`'s build order in one
continuous pass, at the project owner's explicit direction.

## Completed

- **Sprint 0:** `docs/` split into `website/product/engineering`,
  `docs/00_PROJECT_VISION.md` established as the governing document,
  README + this file.
- **Milestone 1 — Foundation:** design tokens (verbatim from
  `docs/website/04_Design_System.md`), Tailwind v4 theme mapping, fonts,
  primitives (`Button`, `Card`, `Badge`, `Eyebrow`, `Divider`, `Link`,
  `Field`, `Icon`, `Logo`), Nav + Footer + root layout, JSON-LD
  `ProfessionalService`, sitemap/robots. Real wordmark/monogram/favicon
  assets wired in from `docs/website/Logo/`.
- **Milestone 2 — Homepage:** all 9 sections per `docs/website/06`, using
  the approved draft copy from `docs/website/10_Copywriting_Guide.md`.
- **Milestone 3 — AI Lab flagship:** `/lab/ai-pmo`, honest `In progress`
  status.
- **Milestone 4 — Case studies:** `/work/justice-corner` (delivered),
  `/work/executive-intelligence-os` (in progress) — real named projects
  from `01_PRD.md` §6.5, written without fabricated metrics per the
  project's verifiable-claims rule.
- **Milestone 5:** `/about`, `/contact`, `/methods` index +
  `/methods/ai-discovery-framework`.
- **Milestone 6 — Insights:** 3 published articles, one per pillar
  (`ai-strategy`, `ai-governance`, `product-leadership`), RSS feed at
  `/rss.xml`.
- **Milestone 7 — Deploy:** live on Vercel (production alias
  `website-v47ai.vercel.app`). GA4 + Clarity scaffolding wired in
  `src/components/Analytics.tsx`, gated on env vars — inactive until real
  IDs are set.

## In Progress

Nothing currently in progress.

## Blocked

- **Custom domain (`v47ai.com`):** not yet purchased/connected. Once
  bought, point DNS at the Vercel project and add the domain in Vercel
  project settings; update `SITE_URL` constants (`src/app/layout.tsx`,
  `src/app/sitemap.ts`, `src/app/robots.ts`, `src/app/rss.xml/route.ts`)
  if the final domain differs from `v47ai.com`.
- **Analytics activation:** GA4 measurement ID and Microsoft Clarity
  project ID are not set. Add `NEXT_PUBLIC_GA_MEASUREMENT_ID` and
  `NEXT_PUBLIC_CLARITY_PROJECT_ID` in Vercel project env vars to activate
  — no code change needed.
- **Search Console:** not yet verified/submitted (needs the custom domain
  live first).
- **Booking tool:** `/contact` currently uses a real `mailto:` action for
  "Book a session" — PRD §16 leaves the calendar tool (Calendly/Cal.com/
  custom) as an open decision. Swap in once chosen.
- **Case study specifics:** Architecture/Technology sections describe the
  approach without disclosing exact vendor/infra choices; Results sections
  intentionally omit unverified metrics — both by design, not oversight.
- **Founder portrait:** still unresolved (Brand Guidelines OQ-5) — no
  stock/casual substitute has been used.
- **Legal pages:** `/privacy` and `/terms` are honest draft boilerplate,
  explicitly flagged on-page as not yet reviewed by counsel.

## Next Milestone

None queued. V1 build order is complete. Future work is either finishing
the blocked items above, or beginning Phase 5–6 items explicitly deferred
by `docs/website/09_Execution_Roadmap.md` (remaining case studies, full
Services/Industries pages, additional Lab entries and Frameworks).

## Success Criteria

**For this build:** every route builds and deploys cleanly, zero console
errors, tokens/fonts verified via computed styles, keyboard/focus verified,
no fabricated claims anywhere on the site — every honest gap is visibly
flagged rather than silently invented.
