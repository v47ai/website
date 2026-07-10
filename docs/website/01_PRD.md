# V47 — Master Product Requirements Document
**Version 1.0 | Owner: Vignesh, Founder & Principal Consultant | Status: Draft for Build**

---

## 1. Purpose of This Document

This is the single source of truth for the V47 Digital HQ (v47ai.com). Claude Code, Codex, or any future contributor should be able to read this document and build the website consistently, without needing additional context from the founder.

If a decision isn't documented here, it hasn't been made yet — don't assume, ask.

---

## 2. What V47 Is

V47 is a boutique AI consulting practice, licensed in Abu Dhabi, founded by a product leader with 11+ years of experience including a 5-year national government BI platform engagement (KPMG India — Tejasvi CEDA, 120K+ users, 14 ministries, PM-level demo) and enterprise banking AI/ML delivery across MENA (CBUAE/SAMA-regulated environments).

V47 helps governments and enterprises move from AI strategy to production — through executive advisory, product thinking, and working AI prototypes.

**What V47 is not:** a generic AI agency, a freelance dev shop, a template website with "AI consulting" copy pasted in.

---

## 3. North Star

When a CIO, CEO, or Ministry Director lands on the homepage, within 60 seconds they should conclude:

> "This is a boutique AI consulting firm with senior leadership, enterprise thinking, and real delivery capability."

Every section of the site must answer one of these questions:
- Who are you?
- Why should I trust you?
- What problems do you solve?
- Can you actually deliver?
- How do you work?
- How do I engage you?

If a section doesn't serve one of these questions, it gets cut.

---

## 4. Core Principle: Verifiable Over Impressive

Every claim on the site must survive a reference check. Where work is in progress rather than delivered (e.g. a partnership still in discussion, a pitch not yet won), the language must reflect that honestly ("partnering with," "pitching toward" — not "delivered for," "head of").

This is a constraint on copywriting, not just an ethical footnote — a single inflated claim discounts every true claim on the same page for this audience.

---

## 5. Information Architecture (V1)

```
Home
├── Services
├── Industries
├── Case Studies
├── AI Lab
├── Frameworks (the "Methods" section)
├── Insights
├── About
└── Contact
```

---

## 6. Homepage Specification

### 6.1 Hero
- **Headline:** "Building AI-Native Enterprises."
- **Subheadline:** "We help governments and enterprises move from AI strategy to production through executive advisory, product thinking, and working AI systems."
- **CTAs:** "Explore Our Work" (scrolls/links to Case Studies) · "Book an AI Discovery Session" (links to Contact/booking)
- **Visual:** dark premium theme, subtle animated network/dashboard motif. Motion supports the story; it is not the story.

### 6.2 Trust Signals
No client logos (no permission to imply endorsement). Instead, verifiable credentials:
- 11+ Years Product Leadership
- Government & Enterprise Delivery Experience
- AI Strategy to Production
- Abu Dhabi Licensed AI Business

### 6.3 What We Do
Four cards, each linking to a Services sub-page:
- Enterprise AI Strategy
- AI Product Development
- Government Technology
- Digital Transformation

### 6.4 Industries
Interactive selector: Government, Construction, Real Estate, Financial Services, Healthcare, Education, Legal.

### 6.5 Featured Case Studies
Launch set (only include what is real and demonstrable at launch):
- Justice Corner
- Enterprise AI Products (banking/MENA work, described at the level permitted by confidentiality)
- AI Resume Platform
- Executive Intelligence OS

Each follows the fixed template in Section 9.

### 6.6 Our Method
Six-stage timeline: Discover → Prioritize → Prototype → Validate → Deploy → Scale.

### 6.7 AI Lab
Working experiments, not marketing claims. Launch candidates: AI PMO, Procurement Agent, HR Agent, CEO Copilot, MCP Experiments. Live demo links where available; "in progress" label where not.

### 6.8 Insights
Article teaser grid. Launch with 2-3 articles minimum, not zero — an empty Insights section undercuts the "thought leadership" positioning.

### 6.9 Contact
Low friction only: Book Discovery Session (calendar link) · Email · LinkedIn. No long qualification forms.

---

## 7. Services Page

Each service is written as a consulting offering, not a feature list:

**AI Discovery Workshop** — Duration, Deliverables, Outcomes, Ideal Client
**AI Prototype Sprint** — Working prototype, Architecture, Executive demo, Roadmap
**Enterprise AI Strategy** — Executive interviews, Opportunity assessment, Governance, Operating model

(AI Operating Model and Executive AI Advisory to be specified in v1.1 once the above three are live.)

---

## 8. Frameworks Page ("Methods")

This is the IP-signaling section — most consulting sites tell clients *what* they do; this section shows *how V47 thinks*. Launch candidates:
- AI Discovery Framework
- Enterprise AI Readiness Assessment
- AI Governance Framework
- Prototype-to-Production Framework
- Executive AI Adoption Model

These are thought-leadership pages, not sales pages. No CTA pressure on this page beyond a soft link to Contact.

---

## 9. Case Study Template (Fixed Structure — Do Not Vary)

```
Client Context
↓
Business Challenge
↓
Objectives
↓
Approach
↓
Architecture
↓
Technology
↓
Results
↓
Key Learnings
```

Consistency across case studies is itself a trust signal — don't deviate per case study even if the story tempts a different structure.

---

## 10. Insights Page

Cadence: one high-quality article per week. Not daily. Topics: AI Strategy, AI Governance, Enterprise AI, GovTech, Product Leadership, Digital Transformation. This is the SEO engine — optimize for depth over frequency.

---

## 11. Contact Page

Just three actions: Book Discovery Session, Email, LinkedIn. No multi-field intake form on this page.

---

## 12. Technical Architecture

```
v47ai.com
↓
Next.js 15 (App Router)
↓
TypeScript
↓
Tailwind CSS
↓
shadcn/ui
↓
Framer Motion + GSAP (motion only where it adds value)
↓
Three.js (only if a specific section requires it — not default)
↓
Vercel (hosting + deploy)
↓
Google Analytics
↓
Microsoft Clarity
```

No WordPress, no page builders, no templates. Everything custom.

---

## 13. Repository Structure

```
website/
├── docs/
│   ├── 01_PRD.md                    ← this file
│   ├── 02_Brand_Guidelines.md
│   ├── 03_Information_Architecture.md
│   ├── 04_Design_System.md
│   ├── 05_Content_Strategy.md
│   ├── 06_Component_Specification.md
│   ├── 07_Motion_System.md
│   ├── 08_SEO_Strategy.md
│   └── 09_Master_Build_Prompt.md
├── app/
├── components/
├── public/
├── styles/
├── content/
└── README.md
```

---

## 14. Build Phases

| Phase | Scope |
|---|---|
| 1 — Strategy | PRD, Brand Guidelines, IA, Design System, Motion System |
| 2 — Experience Design | Wireframes, homepage UX, navigation, content hierarchy |
| 3 — Visual Design | Color system, typography, icons, component styling |
| 4 — Engineering | Claude Code builds from PRD + Design System; iterate to pixel-perfect; deploy to Vercel |
| 5 — Content | Case studies, AI Lab entries, Frameworks, Insights articles, downloadable company profile |
| 6 — Growth | Analytics, SEO, CRM integration, newsletter, lead capture |

**Sequencing note (founder constraint):** V47 is currently a one-person operation. Within Phase 4, build in this order rather than all pages simultaneously: (1) Homepage, (2) one flagship AI Lab / Ministry-style prototype, (3) two real case studies. Everything else in Phases 5-6 queues behind those three, regardless of the numbering above.

---

## 15. Explicit Non-Goals (What We Are Avoiding)

- Generic AI agency language ("We are a leading AI company...")
- Stock photography
- Buzzword overload
- ChatGPT-clone demos with no real differentiation
- "Contact us for AI" vagueness
- Claiming scale or team size V47 doesn't have
- Client logos without permission
- Any claim that wouldn't survive a reference check

---

## 16. Open Questions (To Resolve Before Full Build)

- [ ] Final list of launch case studies and what level of client-name/detail confidentiality allows
- [ ] Booking tool for "Book Discovery Session" (Calendly, Cal.com, or custom?)
- [ ] Whether AI Lab demos are embedded live or linked out to separate deployed apps
- [ ] Final domain email (vignesh@v47ai.com) — pending Spaceship/SpaceMail setup
