# CHRZ Landing v2 — "Bright Trust Engine"

Full redesign spec. This REPLACES the previous dark "revenue control room" concept,
which was rejected. Requirements from stakeholder:

- White / white-grayish background (like live gochrz.com).
- Same palette as live gochrz.com (Tailwind blues on white, dark slate text).
- Same logo treatment as live gochrz.com.
- Keep the "Book a Systems Call" button → https://calendly.com/ben-chrzanowski/chrz-intro-call (new tab).
- But bold and colorful: "I want a sick site", "I want color". Light base, vivid
  color accents, gradients, energy — NOT a sterile corporate white page.

## 1. Brand tokens

Fonts:
- Body + display: **Inter Variable** (`@fontsource-variable/inter`). Remove Archivo.
- Logo ONLY: `Georgia, serif` (matches live site + favicon).
- Keep IBM Plex Mono ONLY if used for tiny stat numerals; otherwise remove it too.

Tailwind v4 `@theme` tokens (rewrite `src/styles/global.css`):

```
--color-bg: #ffffff;            /* page base */
--color-surface: #f8fafc;       /* alternate section bands (slate-50) */
--color-ink: #0f172a;           /* headlines (slate-900) */
--color-body: #475569;          /* body text (slate-600) */
--color-line: #e2e8f0;          /* hairlines (slate-200) */

--color-blue: #2563eb;          /* primary / pillar 1 / logo Z / buttons */
--color-blue-deep: #1d4ed8;
--color-violet: #7c3aed;        /* pillar 2 — Live Events */
--color-emerald: #059669;       /* pillar 3 — Revenue Expansion */
--color-amber: #f59e0b;         /* highlight / sparks */
--color-cyan: #06b6d4;          /* gradient support only */
```

Soft tints for card backgrounds: blue-50 `#eff6ff`, violet-50 `#f5f3ff`,
emerald-50 `#ecfdf5`, amber-50 `#fffbeb`.

Signature gradient (use for key words in headlines via background-clip:text, for
stat numbers, and for one thick top border on featured cards):
`linear-gradient(90deg, #2563eb, #7c3aed 45%, #06b6d4)`.

## 2. Design language ("sick" on a white base)

- **Hero mesh**: large soft radial blobs (blue/violet/cyan/amber at 10–18% opacity,
  heavy blur) drifting slowly behind the hero on the white background. Plus a very
  faint dot-grid or line-grid in slate-200.
- **Color-coded pillars**: every pillar owns an accent (blue / violet / emerald).
  Its section eyebrow, icons, borders, tints, and hover states use that accent.
- **Gradient text** on 1–2 key words per major headline (e.g. "New World").
- **Cards**: white, `rounded-2xl`, 1px slate-200 border, generous padding,
  hover: lift (translateY(-4px)) + colored shadow (`shadow-blue-600/15` etc.) +
  accent border. A 3px gradient bar on top of featured cards.
- **Buttons** (match live site): `rounded-xl bg-blue-600 text-white font-semibold
  px-8 py-4 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-300/50
  hover:scale-105 transition-all` with an arrow that nudges on hover.
- **Eyebrow labels**: uppercase Inter semibold, `tracking-[0.18em]`, text-xs, in
  the section's accent color. (No mono-terminal styling — that was v1.)
- **Stats**: huge Inter extrabold numerals with the signature gradient
  (background-clip: text).
- **Dark contrast moments**: exactly two sections sit on `#0f172a` (slate-900) to
  make the white pop — the "connect all three" system section and the final CTA.
  On dark: white headlines, slate-300 body, vivid gradient accents.
- **Motion**: keep GSAP scroll reveals (`.reveal` pattern + motion.ts), stagger
  card grids, animate the Trust → Trust → Revenue flow (line draws / steps light
  up on scroll). Keep full `prefers-reduced-motion` + no-js fallbacks.
- **Marquee**: keep the marquee mechanic for the proof strip (see 4.5), restyled:
  white band, slate-200 top/bottom hairlines, items alternate accent colors.

## 3. Header

- Fixed, `bg-white/85 backdrop-blur-md`, bottom hairline slate-200.
- Logo (exact live-site treatment):
  `<span style="font-family: Georgia, serif" class="font-bold tracking-tight text-2xl">`
  → `CHR` in `#1f2937` (gray-800) + `Z` in blue-600. No trailing dot.
- Nav (desktop): Pillars, Influencer Marketing, Live Events, Revenue, Who it's for.
  Slate-600, hover ink.
- CTA button (compact variant of primary button): "Book a Systems Call" → Calendly,
  `target="_blank" rel="noopener"`.

## 4. Page structure & copy (VERBATIM unless noted)

New `index.astro` section order. Delete v1 sections that have no home below
(Diagnosis, Solution, Systems, Pipeline, InstallPlan, Contrast, Results, Faq) and
create the new ones. Reuse a file name only where it stays truthful.

### 4.1 Hero
- Eyebrow: `B2B GROWTH AGENCY`
- H1: `B2B Marketing Designed for the New World` — gradient on "New World".
- Sub: `We help B2B SaaS companies, service businesses, and creator businesses generate revenue through live events, industry personalities, and social content.`
- Primary CTA: `Book a Systems Call` (Calendly). Secondary ghost link: `See the three pillars ↓` → #pillars.

### 4.2 Pillars overview (`#pillars`, white)
- Lead line: `Our business is built around three pillars that work together.`
- Three cards (numbered 01/02/03, each in its accent color):
  1. `B2B Influencer Marketing` (blue)
  2. `Digital Live Events` (violet)
  3. `Revenue Expansion` (emerald)
- Under the grid: `Each can be used independently, but they're most powerful when combined into a single growth system.`
- Cards link to their sections.

### 4.3 Why now (surface band, slate-50)
- Eyebrow: `THE PROBLEM`
- H2: `There's a lot of AI slop.`
- Body: `Endless options, endless information, and endless reasons to wait. Businesses are overwhelmed with choices, skeptical of claims, and harder to convince than ever before.`
- Follow-up: `That's why we focus on live events and influencer marketing.` (typo fixed: original said "That's why focus on")
- Closer (emphasized): `We're creating experiences that build trust at scale, shorten sales cycles, and turn attention into revenue.`

### 4.4 Pillar 1 — B2B Influencer Marketing (`#influencer`, white, blue accent)
- Eyebrow: `PILLAR 01 — B2B INFLUENCER MARKETING`
- H2: `Trust is transferred.`
- Sub: `AI can generate anyone's content. Influential creators generate trust.`
- Block "We identify and activate": chips/list → `Industry creators`, `Operators`, `Consultants`, `Founders`, `Subject matter experts`.
- Block "Campaign types" — 4 mini-cards:
  - `Creator Partnerships` — `Long-term relationships between brands and creators.`
  - `Joint Webinars` — `Creators bring the audience. Companies bring the offer.`
  - `Content Campaigns` — `Creator-led content distributed across multiple channels.`
  - `Event Partnerships` — `Industry personalities integrated into launches and events.`
- Sub-block "Social Production for Founders" (featured card, gradient top bar):
  - Kicker: `We'll make you famous.`
  - Line: `Turn founders, operators, and creators into media companies.`
  - Chips: `LinkedIn Content` (typo fixed: original said "FouedIn"), `Short Form Video`, `Long Form Content`, `Podcasts`, `Authority Building`, `Personal Branding`.
  - Outcome line: `Faster trust, lower acquisition costs, and higher conversion rates.`
- Stat: `1,000+` / `B2B creators in network`.

### 4.5 Proof marquee (white band)
Repeating items: `1,000+ B2B creators in network` · `$10M+ GMV through webinars` · `1,000+ live hours` · `Trust → Trust → Revenue`.

### 4.6 Pillar 2 — Live Events (`#events`, surface band, violet accent)
- Eyebrow: `PILLAR 02 — DIGITAL LIVE EVENTS`
- H2: `Trust is built live.`
- Sub: `In a world of AI-generated content, real interaction stands out, deepens connection, and scales.`
- "We build" list: `Live webinars`, `Virtual workshops`, `Product launches`, `Customer events`, `Founder presentations`, `Automated webinar funnels`, `Live-to-evergreen systems`.
- Body: `Fully scripted and produced by us. Designed to reshape how attendees think, build conviction, and convert them into subscription and high-ticket customers — all in 60 minutes.`
- Outcome: `A repeatable revenue engine that doesn't rely on more sales calls.`
- Stats pair: `$10M+` / `GMV through webinars` and `1,000+` / `live hours`.

### 4.7 Pillar 3 — Revenue Expansion (`#revenue`, white, emerald accent)
- Eyebrow: `PILLAR 03 — REVENUE EXPANSION`
- H2: `Take the trust you have and scale it.`
- Sub: `Turn existing trust into new revenue streams. SaaS, services, education — scale by offering more to those who already trust you.`
- "What we build" — 3 cards:
  - `High-Ticket Offers` — `Package expertise into premium products.` Chips: `Consulting`, `Advisory`, `Coaching`, `Implementation`, `Done-with-you services`.
  - `Education Businesses` — `Monetize knowledge.` Chips: `Courses`, `Communities`, `Cohorts`, `Memberships`, `Certifications`.
  - `Service Expansion` — Chips: `Retainers`, `Managed services`, `Licensing`, `Audits`, `Fractional services`.
- "For creators" callout (distinct tinted card, amber or gradient border):
  - Eyebrow: `FOR CREATORS`
  - Line: `Monetize your audience the right way. Sell education live.`
  - `Education monetization — turn audiences into businesses.` Chips: `Courses`, `Communities`, `Masterminds`, `Events`.
- Outcome: `Additional revenue streams built on assets you already own.`

### 4.8 The system (dark section, slate-900)
- H2: `Most agencies specialize in one piece. We connect all three.`
- Animated 3-step flow:
  - `Step 1 — Create trust` / `Through influencer partnerships, paid media, and organic content.`
  - `Step 2 — Deepen trust` / `Through webinars, workshops, live training, and events with that creator.`
  - `Step 3 — Monetize trust` / `Through compelling offers built around clear outcomes.`
- Punchline in gradient: `Trust → Trust → Revenue`

### 4.9 Who we work with (white)
- H2: `Who we work with`
- 3 cards (blue / violet / emerald accents):
  - `SaaS Companies` — `Get more subscriptions and generate additional revenue streams beyond subscriptions.`
  - `Service Businesses` — `Create scalable acquisition channels beyond referrals.` (typo fixed: original said "Ce scalable")
  - `Creator Businesses` — `Turn audiences into dollars.`

### 4.10 Final CTA (dark section, slate-900, hero-mesh blobs in accents)
- H2: `Ready to build your growth system?`
- Sub: `Book a call and we'll map the three pillars to your business.`
- Button: `Book a Systems Call` → Calendly.

### 4.11 Footer (white, hairline top)
Logo (same treatment), one-liner, links to Privacy / Terms, © 2026 CHRZ.

## 5. Non-negotiables

- Legal pages (`/privacy`, `/terms`, `LegalLayout.astro`) must be restyled to the
  light theme too — no leftover dark tokens anywhere.
- `Layout.astro`: update font imports, `<html>` background to white, meta
  description can stay.
- Accessibility: all text ≥ 4.5:1 contrast on its background (use the -600/-700
  shades for colored text on white), visible focus rings (blue), semantic
  headings h1→h2→h3, `aria-label`s on icon-only links.
- Keep `.reveal` + motion.ts contract, `prefers-reduced-motion`, `.no-js` fallback.
- `astro build` must pass with zero errors.
