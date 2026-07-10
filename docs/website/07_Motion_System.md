# V47 — Motion System

**Version 1.0 | Owner: Vignesh | Status: Draft for Build**
**Companion to:** `02_Brand_Guidelines.md` (§8), `06_Component_Specification.md` · **Feeds:** `09_Master_Build_Prompt.md`

---

## 0. Philosophy

Motion at V47 is **evidence of craft, not decoration.** The buyer is a senior executive; the feeling to produce is *"considered and expensive,"* never *"animated startup."* Motion supports the story (PRD §6.1); it is never the story.

The failure mode to avoid: scattered effects that signal "AI-generated site." One orchestrated moment beats ten scattered ones. When unsure, **do less.**

Three rules govern everything:
1. **Purpose** — every animation communicates hierarchy, state, or continuity. No motion for its own sake.
2. **Restraint** — slow, subtle, few. Brass-level discipline applied to time.
3. **Respect** — `prefers-reduced-motion` is honoured everywhere, always.

---

## 1. Motion Tokens (from `04_Design_System.md`)

```css
--ease-out:    cubic-bezier(.16,1,.3,1);   /* default — decisive settle */
--ease-in-out: cubic-bezier(.65,0,.35,1);  /* symmetric transitions */
--dur-fast:  160ms;   /* hovers, taps, micro-state */
--dur-base:  280ms;   /* reveals, panel changes */
--dur-slow:  480ms;   /* hero orchestration, draw-ins */
```

- Default easing is `--ease-out` (things arrive and settle; nothing bounces).
- **No spring/bounce/elastic** easings — they read consumer, not enterprise.
- Distances are small: translate 8–24px, never dramatic slides.
- Opacity reveals pair with a small translate; never opacity-only (feels cheap) or translate-only (feels jumpy).

---

## 2. Library Usage (which tool, when)

| Need | Tool | Why |
|---|---|---|
| Component state, mount/unmount, scroll-reveal, layout | **Framer Motion** | Declarative, React-native, `useReducedMotion` built in |
| Timeline-orchestrated sequences (hero draw-in, method line, SVG path draw) | **GSAP** (+ ScrollTrigger) | Precise multi-step choreography, path drawing |
| Simple hovers, focus, transitions | **CSS transitions** | Cheapest, most performant — prefer this by default |

Default to CSS. Reach for Framer Motion for reveals/state. Reserve GSAP for the two or three genuinely orchestrated moments (hero, method timeline, a framework diagram). Do not animate with all three in the same component.

---

## 3. Motion Patterns (the vocabulary)

### 3.1 Page-load reveal (used once, on the hero only)
Orchestrated sequence, ≤900ms total:
1. Girih/network motif draws in behind (SVG stroke-dashoffset), slow, `--dur-slow`.
2. Eyebrow → headline lines (staggered 60ms) → standfirst → CTAs, each fade-up 12–16px, `--ease-out`.
One entrance per page load. Interior pages get a lighter version (headline fade-up only).

### 3.2 Scroll reveal (the workhorse)
Elements enter as they cross ~15% into viewport: fade + rise 12–16px, `--dur-base`, `--ease-out`. Stagger grids by 40–60ms per item, cap total stagger at ~300ms. Trigger **once** (no re-animate on scroll-up). Never animate above-the-fold content on scroll — it's already visible.

### 3.3 Hover micro-interactions
- Cards: border `--border` → `--border-strong`, translateY -2px, `--dur-fast`.
- Buttons (primary): brass underline wipes in; subtle bg lift.
- Links: colour `--interactive` → `--azure-400`, underline offset shift.
Keep all hover deltas small and fast.

### 3.4 State transitions
Tabs/selectors (Industries): crossfade + height-animate panel, `--dur-base`, no jank (measure before animate). Toasts: slide-in 16px + fade, auto-dismiss. Modals/overlays: fade backdrop + scale content 0.98→1.

### 3.5 Signature draw-ins (spend boldness here)
- **Method timeline:** connective line draws left→right on scroll-in; nodes light in sequence.
- **Hero motif & framework diagrams:** SVG path draw (GSAP), slow, low-opacity brass/line.
These are the "memorable" motions — everything else stays quiet so these land.

---

## 4. Per-Component Choreography (maps to `06`)

| Component | Motion | Duration | Notes |
|---|---|---|---|
| Nav | hide on scroll-down / reveal on scroll-up; bg blur past hero | `--dur-base` | translateY only |
| Hero | orchestrated load (§3.1) | ≤900ms | once per load |
| Trust bar | staggered fade-up on view | `--dur-base` | 40ms stagger |
| Service cards | grid stagger in + hover lift | base / fast | once |
| Industry selector | panel crossfade + height | `--dur-base` | ARIA tablist |
| Featured work | stagger reveal + hover scrim | base / fast | — |
| Method timeline | line draw + node sequence | ≤1000ms | signature |
| Lab strip | reveal + hover lift | base / fast | — |
| Insights | fade-up | `--dur-base` | — |
| Contact band | gentle fade-in | `--dur-slow` | — |
| Case study | section reveals + diagram draw | base / slow | once each |
| Footer | none (hover only) | — | footers stay still |

---

## 5. Reduced Motion (non-negotiable)

Under `prefers-reduced-motion: reduce`:
- All draw-ins, staggers, and translates become **instant** (content appears, no movement).
- Hero motif renders in its final state, no path draw.
- Hover colour changes may remain (they're state feedback, not motion).
- Global CSS reset already caps durations (Design §1); Framer Motion components additionally check `useReducedMotion()` and render final state.

```tsx
const reduce = useReducedMotion();
const variants = reduce
  ? { hidden: { opacity: 1, y: 0 }, show: { opacity: 1, y: 0 } }
  : { hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } };
```

---

## 6. Performance Budget (motion must not cost UX)

- Animate only **`transform` and `opacity`** (GPU-composited). Never animate `width`/`height`/`top`/`left`/`box-shadow` on scroll.
- Scroll reveals via `IntersectionObserver`, not scroll-event listeners.
- Respect Core Web Vitals: no motion that shifts layout after paint (**CLS = 0** from animation); hero motion must not delay **LCP** — the headline text renders immediately, motif animates behind it.
- Lazy-load GSAP/ScrollTrigger only on routes that use signature draw-ins.
- Cap concurrent animations; pause off-screen animation.
- Target 60fps; test on mid-tier mobile, not just desktop.

---

## 7. Anti-Patterns (forbidden)

Auto-playing carousels · parallax on multiple layers · bouncy/springy easing · "AI typing" text effects · looping ambient animations that never rest · scroll-jacking · full-page transitions that delay content · animated gradients · motion that re-triggers on every scroll-past · anything that moves while the user is trying to read.

---

*End of `07_Motion_System.md`. Next: `08_SEO_Strategy.md`.*
