# V47 — Design System

**Version 1.0 | Owner: Vignesh | Status: Draft for Build**
**Companion to:** `02_Brand_Guidelines.md` · **Feeds:** `06_Component_Specification.md`, `09_Master_Build_Prompt.md`

---

## 0. Purpose

The Brand Guidelines define *intent*; this document is the **buildable layer** — real tokens, real Tailwind config, real component contracts. Everything here is derived from Brand §4, §5, §7. These tokens are the shared language of the **V47 OS**: the same tokens generate the website, the company-profile PDF, the deck template, and the capability statement. Define once, reuse everywhere.

**Dark is the default theme.** Light is an explicit opt-in (documents, print).

---

## 1. Design Tokens — CSS Custom Properties

`styles/tokens.css` (imported once, applied on `:root`):

```css
:root {
  /* ---- Colour: dark (default) ---- */
  --obsidian:        #0A0D14;
  --ink-900:         #0E121B;
  --ink-800:         #131824;
  --ink-700:         #1B2130;
  --line:            #262E3D;
  --line-strong:     #333C4E;

  --text-primary:    #EAEEF6;
  --text-secondary:  #A9B2C3;
  --text-muted:      #6C7789;

  --brass-400:       #D8B978;
  --brass-500:       #C9A65C;   /* primary brand accent */
  --brass-600:       #A9863F;

  --azure-400:       #7DACF0;
  --azure-500:       #5B93E6;   /* functional interactive */

  --success:         #45B37A;
  --warning:         #D6A94A;
  --danger:          #E4715B;
  --info:            #5B93E6;

  /* ---- Semantic surface aliases ---- */
  --bg:              var(--obsidian);
  --surface:         var(--ink-800);
  --surface-raised:  var(--ink-700);
  --border:          var(--line);
  --border-strong:   var(--line-strong);
  --fg:              var(--text-primary);
  --fg-muted:        var(--text-secondary);
  --fg-subtle:       var(--text-muted);
  --accent:          var(--brass-500);
  --interactive:     var(--azure-500);

  /* ---- Typography ---- */
  --font-display: "Newsreader", Georgia, "Times New Roman", serif;
  --font-body:    "Inter", -apple-system, "Segoe UI", Roboto, sans-serif;
  --font-mono:    "JetBrains Mono", ui-monospace, "SF Mono", Menlo, monospace;

  /* ---- Radius ---- */
  --radius-sm: 6px;   /* buttons, inputs */
  --radius-md: 10px;  /* cards */
  --radius-lg: 12px;  /* large panels */
  --radius-full: 9999px; /* pills — avatars/badges only */

  /* ---- Elevation (dark: borders > shadows) ---- */
  --shadow-1: 0 1px 2px rgba(0,0,0,.4);
  --shadow-2: 0 8px 24px rgba(0,0,0,.35);
  --ring: 0 0 0 2px var(--obsidian), 0 0 0 4px var(--azure-500); /* focus */

  /* ---- Motion (see 07_Motion_System.md) ---- */
  --ease-out: cubic-bezier(.16,1,.3,1);
  --ease-in-out: cubic-bezier(.65,0,.35,1);
  --dur-fast: 160ms;
  --dur-base: 280ms;
  --dur-slow: 480ms;

  /* ---- Z-index scale ---- */
  --z-base: 0;
  --z-raised: 10;
  --z-sticky-nav: 100;
  --z-overlay: 1000;
  --z-modal: 1100;
  --z-toast: 1200;
}

/* ---- Light theme (documents / opt-in) ---- */
[data-theme="light"] {
  --bg: #F6F7F9;
  --surface: #FFFFFF;
  --surface-raised: #FFFFFF;
  --border: #E6E9EF;
  --border-strong: #D3D8E2;
  --fg: #0A0D14;
  --fg-muted: #414B5C;
  --fg-subtle: #6C7789;
  --accent: #8C6E2E;      /* brass-ink */
  --interactive: #2A5FC0; /* azure-ink */
}

/* ---- Reduced motion ---- */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: .01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: .01ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

## 2. Tailwind Config (map tokens → utilities)

`tailwind.config.ts` (excerpt):

```ts
export default {
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        surface: "var(--surface)",
        "surface-raised": "var(--surface-raised)",
        border: "var(--border)",
        "border-strong": "var(--border-strong)",
        fg: { DEFAULT: "var(--fg)", muted: "var(--fg-muted)", subtle: "var(--fg-subtle)" },
        brass: { 400: "#D8B978", 500: "#C9A65C", 600: "#A9863F" },
        azure: { 400: "#7DACF0", 500: "#5B93E6" },
        success: "var(--success)", warning: "var(--warning)", danger: "var(--danger)",
      },
      fontFamily: {
        display: "var(--font-display)",
        sans: "var(--font-body)",
        mono: "var(--font-mono)",
      },
      borderRadius: { sm: "var(--radius-sm)", md: "var(--radius-md)", lg: "var(--radius-lg)" },
      boxShadow: { 1: "var(--shadow-1)", 2: "var(--shadow-2)" },
      transitionTimingFunction: { out: "cubic-bezier(.16,1,.3,1)" },
      maxWidth: { prose: "68ch", container: "1200px" },
    },
  },
} satisfies import("tailwindcss").Config;
```

**Fonts via `next/font`** (self-hosted, no layout shift):

```ts
import { Newsreader, Inter, JetBrains_Mono } from "next/font/google";
export const display = Newsreader({ subsets:["latin"], variable:"--font-display", display:"swap" });
export const body    = Inter({ subsets:["latin"], variable:"--font-body", display:"swap" });
export const mono    = JetBrains_Mono({ subsets:["latin"], variable:"--font-mono", display:"swap" });
```

---

## 3. Typography Scale (from Brand §5.2, as utilities)

| Class name | Font | Size | Weight | Leading | Tracking |
|---|---|---|---|---|---|
| `.t-display-xl` | display | `clamp(2.75rem,6vw,4.5rem)` | 500 | 1.05 | -0.02em |
| `.t-display-l` | display | `clamp(2.25rem,4vw,3.5rem)` | 400 | 1.10 | -0.015em |
| `.t-h1` | display | 2.75rem | 500 | 1.15 | -0.01em |
| `.t-h2` | sans | 2rem | 600 | 1.20 | -0.01em |
| `.t-h3` | sans | 1.5rem | 600 | 1.30 | 0 |
| `.t-h4` | sans | 1.25rem | 600 | 1.35 | 0 |
| `.t-body-l` | sans | 1.125rem | 400 | 1.60 | 0 |
| `.t-body` | sans | 1rem | 400 | 1.60 | 0 |
| `.t-small` | sans | 0.875rem | 400 | 1.50 | 0 |
| `.t-eyebrow` | mono | 0.8125rem | 500 | 1.40 | +0.08em, uppercase |
| `.t-caption` | mono | 0.8125rem | 400 | 1.50 | +0.02em |

**Rules:** serif for display/H1 + pull-quotes only. Body never serif. Tabular figures on all metrics (`font-variant-numeric: tabular-nums`). Body measure capped at `--container`/`prose` (68ch).

---

## 4. Spacing & Layout

**Spacing scale (8px base):** `4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128` (px). Section vertical rhythm: ≥96 desktop / ≥64 mobile.

**Grid:** 12-col, max container 1200px, gutter 24px, page margin `clamp(20px, 5vw, 80px)`.

**Breakpoints:** `sm 640 · md 768 · lg 1024 · xl 1280 · 2xl 1440`.

**Elevation on dark:** prefer a `1px var(--border)` hairline over shadow. Use `--shadow-2` only for overlays/modals/toasts. Shadows read cheap on dark themes.

---

## 5. Component Primitives (contracts + states)

> Full experiential specs live in `06_Component_Specification.md`. This section defines the *visual contract and states* for reusable primitives.

### 5.1 Button
| Variant | Fill | Text | Border | Use |
|---|---|---|---|---|
| `primary` | `--surface-raised` | `--fg` | `1px --brass-500` | Main CTA — brass shows only as a hairline border + a brass underline on hover (no gold fill; Brand §4.3) |
| `secondary` | transparent | `--fg-muted` | `1px --border` | Secondary actions |
| `ghost` | transparent | `--interactive` | none | Inline/text actions |

States (all variants): `hover` (border→`--border-strong`, subtle bg lift), `focus-visible` (`--ring`), `active` (translateY 1px), `disabled` (50% opacity, no pointer). Radius `--radius-sm`. Min target 44×44px. Label in sans, sentence case, active-voice verb (Brand §2 / `10_Copywriting_Guide.md`).

### 5.2 Card
`--surface` bg, `1px --border`, `--radius-md`, padding 24–32px. Hover: border→`--border-strong`, translateY -2px, `--dur-base --ease-out`. Optional single brass hairline accent (top border) for "featured." Never more than one brass element per card.

### 5.3 Badge / Label (the honesty system — PRD §4)
| Badge | Colour | Meaning |
|---|---|---|
| `Delivered` | `--success` | Real, referenceable work |
| `In progress` | `--warning` | Honest status — do not dress up |
| `Concept` | `--fg-subtle` | Lab experiment, not a claim |
| `Live demo` | `--azure-500` | Clickable proof available |

Pill shape (`--radius-full`), mono text, always paired with a text label (never colour-only — a11y).

### 5.4 Input / Field
`--surface` bg, `1px --border`, `--radius-sm`, focus → `--ring` + border `--interactive`. Label above (sans, small), helper/error below. Errors in `--danger` with icon + text (never colour alone). *Note: Contact page uses no long forms (PRD §11) — inputs are for future gated assets only.*

### 5.5 Eyebrow + Divider
Eyebrow = `.t-eyebrow` in `--brass-500` or `--fg-subtle`, often over a `1px --border` rule. The girih hairline (Brand §6.3) is the only decorative divider permitted, low opacity.

### 5.6 Link
Body links in `--interactive`, underline offset 3px, hover → `--azure-400`. Never brass for links (brass is brand, azure is function — keep the split clean).

---

## 6. Iconography (from Brand §6.1)

Lucide, `1.5px` stroke, `20px`/`24px` sizes, `currentColor`. One icon per card max. No filled icons, no "AI sparkle" glyph, ever.

---

## 7. Accessibility Tokens (quality floor)

- Focus: `--ring` on every interactive element, always visible.
- Contrast: all pairs meet WCAG AA (primary/secondary text AAA) — verified in Brand §4.
- Motion: `prefers-reduced-motion` handled globally (§1).
- Targets: ≥44×44px. Meaning never by colour alone (badges pair colour + label).
- Semantic HTML + landmarks; skip-to-content link.

---

## 8. Cross-Artefact Application (the OS layer)

| Artefact | Theme | Notes |
|---|---|---|
| Website | dark default | this system, verbatim |
| Company profile PDF | light | same tokens via `[data-theme=light]`; brass-ink accent |
| Pitch/executive deck | dark | inherit type scale + palette; one brass accent per slide |
| Capability statement | light | print-safe; ensure brass-ink passes on white |
| Email signature | light | wordmark + mono descriptor + one brass hairline |

One token set, five artefacts, zero drift. That is the V47 OS.

---

*End of `04_Design_System.md`. Next: `05_Content_Strategy.md`.*
