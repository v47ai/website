# Project Status

This file is the single source of truth for where V47 stands right now. Update
it at the end of every sprint/milestone.

For the detailed build record — route inventory, component inventory,
feature-by-feature decisions, and a changelog — see
`docs/website/11_As_Built.md`. This file stays a short status snapshot;
that one is the PRD-style record of what actually got built.

**Last Updated:** 2026-07-19

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
- **Post-V1 additions (same session, at the owner's direction):**
  - `/services` and `/industries` (index + `[slug]`) — homepage already
    linked to both; they were 404ing.
  - **Think With V47** — a scoped homepage feature (between Case Studies
    and AI Lab) that generates an illustrative discovery blueprint via
    Claude (`claude-opus-4-8`, structured JSON output). Fixed dropdown
    inputs only (no free text), no budget/cost figures, explicit
    "illustrative, not a quote" framing, basic per-IP rate limiting.
    Gated on `ANTHROPIC_API_KEY` — shows an honest "not yet switched on"
    state when unset, same pattern as Analytics.

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
- **Think With V47 activation:** needs `ANTHROPIC_API_KEY` set in Vercel
  project env vars. Real per-request cost (Opus-tier, structured JSON
  output) — the in-memory rate limit is best-effort only (resets per
  serverless cold start, not shared across instances); consider a durable
  rate limiter (e.g. Upstash) before high-traffic launch.
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
- **Services page specifics:** duration/pricing/deliverable detail is
  explicitly deferred to a real discovery session, not generic content.

## Next Milestone

None queued. V1 build order plus the post-V1 additions above are
complete. Future work is either finishing the blocked items above, or
beginning Phase 5–6 items explicitly deferred by
`docs/website/09_Execution_Roadmap.md` (remaining case studies,
additional Lab entries and Frameworks, `/blueprint` route reservation
for the future Blueprint Studio product).

## Success Criteria

**For this build:** every route builds and deploys cleanly, zero console
errors, tokens/fonts verified via computed styles, keyboard/focus verified,
no fabricated claims anywhere on the site — every honest gap is visibly
flagged rather than silently invented.
