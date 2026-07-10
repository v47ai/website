# V47 — Component Specification

**Version 1.0 | Owner: Vignesh | Status: Draft for Build**
**Companion to:** `03_Information_Architecture.md`, `04_Design_System.md` · **Feeds:** `07_Motion_System.md`, `09_Master_Build_Prompt.md`

---

## 0. The Method — We Specify *Experience*, Not Components

Every section below is specified against a fixed six-part contract so Claude Code never guesses intent:

```
Emotional Objective  → what the buyer should FEEL
Visual Objective     → what they should SEE
Business Objective   → what it should DO for the funnel
Animation Behaviour  → how it moves (detail in 07)
Accessibility        → the a11y contract
Component Structure   → the buildable anatomy + props
```

All visual values reference tokens in `04_Design_System.md`. Motion values reference `07_Motion_System.md`. Copy references `10_Copywriting_Guide.md`.

---

## 1. Global — Navigation Bar

- **Emotional:** *"This is a serious firm."* Calm, senior, uncrowded.
- **Visual:** obsidian, sticky, 1px `--border` bottom rule. Wordmark left; 5 links; one brass-hairline CTA (`Book a session`). Active section = brass underline.
- **Business:** keep the CTA one click away everywhere; route the highest-intent buyer to Contact without hunting.
- **Animation:** on scroll-down hide; on scroll-up reveal (translateY, `--dur-base --ease-out`). Nav bg gains subtle opacity/blur past the hero.
- **Accessibility:** `<nav aria-label="Primary">`, keyboard-operable, focus-visible rings, skip-to-content link precedes it.
- **Structure:**
```tsx
<Nav>
  <Logo href="/" />
  <NavLinks items={[Work, Methods, Lab, Insights, About]} activeSlug />
  <Button variant="primary" href="/contact">Book a session</Button>
  <MobileMenuTrigger /> {/* < md */}
</Nav>
```

---

## 2. Homepage §1 — Hero

- **Emotional:** clarity and confidence within 3 seconds — *"they know exactly what they do."* No hype, no overwhelm.
- **Visual:** dark, spacious. Serif Display-XL headline **"Building AI-Native Enterprises."**; sans standfirst; two CTAs. Behind: the girih/network hairline motif at low opacity, obsidian→ink-900 depth gradient. Motion supports, never dominates.
- **Business:** state the positioning and offer two paths — *Explore our work* (proof) and *Book an AI discovery session* (convert).
- **Animation:** one orchestrated load sequence — headline rises + fades (staggered lines), motif draws in slowly behind, CTAs settle last. ≤900ms total, `--ease-out`. Respect reduced-motion (instant, no draw).
- **Accessibility:** headline is the single `<h1>`. Motif is `aria-hidden`. CTAs are real links with descriptive labels. Contrast AAA.
- **Structure:**
```tsx
<Hero>
  <GirihBackdrop aria-hidden /> {/* motion layer */}
  <Eyebrow>Boutique AI consulting · Abu Dhabi</Eyebrow>
  <h1 className="t-display-xl">Building AI-Native Enterprises.</h1>
  <p className="t-body-l fg-muted">{subheadline}</p>
  <CTARow>
    <Button variant="primary" href="/work">Explore our work</Button>
    <Button variant="secondary" href="/contact">Book an AI discovery session</Button>
  </CTARow>
</Hero>
```

---

## 3. Homepage §2 — Trust Signals

- **Emotional:** reassurance — *"there's real weight behind this."*
- **Visual:** a quiet horizontal band of four verifiable credentials (no logos). Mono labels, thin `--border` separators. Understated.
- **Business:** convert the hero's interest into credibility before the buyer scrolls further.
- **Animation:** staggered fade-up on scroll into view, ≤400ms.
- **Accessibility:** a `<ul>` of facts, not decorative; readable order.
- **Structure:** `<TrustBar items={["11+ yrs product leadership","Government & enterprise delivery","AI strategy to production","Abu Dhabi–licensed AI business"]} />`. No inflated claims (PRD §4).

---

## 4. Homepage §3 — What We Do (4 cards)

- **Emotional:** *"they cover the whole path — strategy to build."*
- **Visual:** 4 cards (Enterprise AI Strategy · AI Product Development · Government Technology · Digital Transformation). `--surface`, 1px border, one Lucide icon each, hover lift.
- **Business:** route to Services sub-pages; segment the buyer by need.
- **Animation:** grid staggers in on scroll; per-card hover (border→strong, translateY -2px).
- **Accessibility:** each card a single focusable link; icon `aria-hidden`; title is the accessible name.
- **Structure:** `<CardGrid cols={4}>` of `<ServiceCard icon title href />`.

---

## 5. Homepage §4 — Industries (interactive selector)

- **Emotional:** *"they understand my sector, not just AI in the abstract."*
- **Visual:** a horizontal selector of 7 industries; selecting one reveals a concise capability panel (sector context + where AI creates value + link to full industry page).
- **Business:** self-segmentation → route to `/industries/[slug]`.
- **Animation:** panel crossfades/height-animates on select, `--dur-base`. No layout jank.
- **Accessibility:** implement as an ARIA tablist (`role="tablist"`/`tab`/`tabpanel`), full keyboard support (arrow keys), not hover-only.
- **Structure:** `<IndustrySelector industries={[...]}>` → `<Tab/>` list + `<TabPanel/>`. Default-select Government (strongest fit).

---

## 6. Homepage §5 — Featured Case Studies

- **Emotional:** *"they've actually done this."* This is the highest-trust moment on the page.
- **Visual:** 2–3 featured `WorkCard`s. Each leads with a **result metric** (tabular mono), then title + one-line challenge. Optional brass top-hairline on the flagship. Status badge where relevant.
- **Business:** the strongest CTA zone — every card links to a full case study; case study pages carry the primary conversion.
- **Animation:** staggered reveal; hover lift + subtle image/scrim shift.
- **Accessibility:** card = one link; metric has a visible label (not number alone); badge pairs colour + text.
- **Structure:** `<WorkCard result label title challenge status href />`. Only real, demonstrable studies at launch (PRD §6.5).

---

## 7. Homepage §6 — Our Method (6-stage timeline)

- **Emotional:** *"there's a disciplined process here — this isn't improvised."*
- **Visual:** horizontal 6-node timeline: Discover → Prioritize → Prototype → Validate → Deploy → Scale. Mono stage numbers, `--border` connective line, brass tick on the active/hovered node.
- **Business:** executives buy process; this differentiates V47 from ad-hoc dev shops and links to `/methods`.
- **Animation:** the connective line draws left→right on scroll-in; nodes light in sequence, ≤1s.
- **Accessibility:** ordered list `<ol>` — the sequence *is* meaningful (numbering justified per frontend-design guidance). Line draw is decorative/`aria-hidden`.
- **Structure:** `<MethodTimeline stages={[...]} />`. This is the one place numbered markers are truthful (a real sequence).

---

## 8. Homepage §7 — AI Lab strip

- **Emotional:** *"they build, they don't just advise."* Curiosity + proof.
- **Visual:** a strip of Lab cards (AI PMO, Procurement Agent, HR Agent, CEO Copilot, MCP Experiments) with honest status badges (`Live demo` / `In progress` / `Concept`).
- **Business:** the differentiator — clickable capability. Routes to `/lab/[slug]`.
- **Animation:** horizontal scroll/marquee-on-hover restraint; card hover lift.
- **Accessibility:** scrollable region keyboard-accessible; badges carry text.
- **Structure:** `<LabStrip>` of `<LabCard title status href />`. Never claim a demo that isn't real — badge tells the truth (PRD §6.7).

---

## 9. Homepage §8 — Insights teaser

- **Emotional:** *"they have a point of view worth reading."*
- **Visual:** 3 latest articles, editorial cards: pillar eyebrow, serif title, date. Restrained.
- **Business:** feed the authority engine and SEO; route to `/insights`.
- **Animation:** simple staggered fade-up.
- **Accessibility:** each card a link; dates in `<time>`.
- **Structure:** `<InsightGrid limit={3} />`. Never render empty — launch with ≥2 (PRD §6.8).

---

## 10. Homepage §9 — Contact band

- **Emotional:** *"engaging them is easy and low-pressure."*
- **Visual:** a calm full-width band: one line of positioning + `Book a session` primary CTA + email + LinkedIn. Girih hairline accent.
- **Business:** the conversion endpoint; three low-friction actions only (PRD §11).
- **Animation:** gentle fade-in; CTA hover.
- **Accessibility:** real `mailto:`/link actions; booking opens in a labelled new context.
- **Structure:** `<ContactBand booking={calLink} email linkedin />`. No long form.

---

## 11. Template — Case Study Page (T3)

- **Emotional:** *"credible, structured, honest."*
- **Visual:** eyebrow result metric → fixed 8-part structure (PRD §9) with mono section labels, architecture diagram in-palette, results in tabular figures.
- **Business:** primary conversion page for high-intent buyers; ends with contextual CTA + related Methods/Lab (IA §6).
- **Animation:** section reveals on scroll; diagram elements draw in sequence.
- **Accessibility:** logical heading hierarchy; diagram has text alt/description; breadcrumbs with schema.
- **Structure:** `<CaseStudy>` renders MDX sections in the fixed order — order is enforced, not author-chosen.

---

## 12. Template — Lab Entry (T4) & Framework (T5)

- **Lab (T4):** lead with `<Demo>` (embedded iframe / linked deploy / `In progress` state) → Architecture → Stack → Lessons. Demo region keyboard-reachable; iframe titled.
- **Framework (T5):** lead with thesis → `<FrameworkDiagram>` (the hero) → stages → when-to-use → *soft* contact link only (no hard CTA — PRD §8). Diagram `aria` described.

---

## 13. Global — Footer

- **Emotional:** *"complete, established, trustworthy."*
- **Visual:** 4 columns + base row with descriptor lockup and Abu Dhabi licensing line; girih hairline (Brand §3.1, IA §2.3).
- **Business:** persistent trust signal + secondary navigation + Company Profile download.
- **Animation:** none beyond link hover (footers stay still).
- **Accessibility:** `<footer>` landmark; grouped link lists with headings.
- **Structure:** `<Footer columns={[Explore, Firm, Connect, Legal]} />`.

---

## 14. Shared Primitives (reference `04` §5)

`Button` · `Card` · `Badge` (Delivered/In progress/Concept/Live demo) · `Eyebrow` · `Divider (girih)` · `Link` · `Field` · `Icon` (Lucide 1.5px). All states, tokens, and a11y contracts defined in the Design System — components here compose those primitives, they don't redefine them.

---

## 15. Universal Component Rules

1. One brass element per component maximum (Brand §4.3).
2. Every interactive element: 44×44px min, visible focus ring, sentence-case active-voice label.
3. Every status is truthful and badge-labelled.
4. Every animation degrades gracefully under `prefers-reduced-motion`.
5. Numbered markers only where order is real (Method timeline, Case study steps).
6. No stock imagery, no AI-sparkle icons, no neon accents.

---

*End of `06_Component_Specification.md`. Next: `07_Motion_System.md`.*
