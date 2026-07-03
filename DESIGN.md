# CHRZ Landing — Design system & section spec

Concept: **revenue control room**. The page behaves like the product CHRZ sells — an
installed, running system. Dark blue-graphite, engineering-schematic vernacular,
monospace telemetry, electric cobalt (system current) + amber (status/data).

## Tokens (already defined in `src/styles/global.css`)

Colors (Tailwind v4 theme): `ink-0` page, `ink-1` panel, `ink-2` raised, `line` /
`line-strong` hairlines, `text`, `muted`, `cobalt`, `cobalt-soft`, `amber`,
`amber-soft`, `ok`, `fault`.

Type roles (CSS classes): `.display` (expanded black uppercase, hero-scale),
`.display-sub` (expanded bold uppercase, card/section scale), `.mono-label`
(11px mono uppercase letterspaced, muted; `.mono-label--amber` variant),
`.mono-data` (mono, tabular numerals).

Surfaces/details: `.panel`, `.panel-raised`, `.bracket` (amber corner brackets on
hover/focus), `.led` (+ `--amber`, `--fault`, `--pulse`), `.grid-bg`, `.marquee` +
`.marquee__track`, `.reveal` (scroll reveal — animated by `src/scripts/motion.ts`).

## Layout rules

- Container: `mx-auto max-w-6xl px-4 sm:px-6`.
- Sections: `py-24 md:py-32`, separated by `border-t border-line`.
- Every section opens with a schematic reference header row:
  `<span class="mono-label">SYS/0N — {Name}</span>` + optional right-aligned mono note.
- Headings use `.display-sub` at `text-[clamp(1.8rem,4.5vw,3.2rem)]` unless spec says otherwise.
- Apply `.reveal` to headline blocks and cards (stagger with `data-reveal-delay="0.1"` etc.).
- Numbered markers are allowed ONLY where content is a true sequence (pipeline stages,
  90-day phases, fault codes).
- No border-radius anywhere. No drop shadows except LED glows. Copy in sentence case;
  active voice; specific over clever.

## Page order (index.astro)

Header, Hero (done) → ResultsMarquee → Diagnosis → Solution → Systems → Pipeline →
InstallPlan → Contrast → Results → Faq → FinalCta → Footer.

## Sections to build in `src/components/sections/`

### 1. ResultsMarquee.astro
Full-width strip directly after hero. `border-y border-line`, `py-4`, `.marquee` with
two identical `.marquee__track` (second `aria-hidden="true"`). Items `mono-data text-sm`,
separated by amber `▸`. Metric in `text-text`, descriptor in `text-muted`:
- $10k → $100k+ /mo — creator education
- $100k+ /mo — paid webinar growth system
- $0 → $100k+ MRR — webinar subscription system
- $5k → $20k /mo — martech SaaS
- Multi-6 figures — founder-led B2B services
- 1 → 1,000+ users — edtech platform
- $45k → $60k /webinar — coaching business
- 20 contracts closed — LinkedIn outbound system
- $100k+ /mo — email-to-webinar monetization

### 2. Diagnosis.astro — `id="diagnosis"`, SYS/01 — Diagnosis
Headline: "Most revenue systems break at scale."
3 fault cards (grid md:grid-cols-3, `.panel .bracket`), each: top row
`mono-label text-fault` fault code + `.led .led--fault .led--pulse`; then
`.display-sub text-xl` title; then muted body:
- FAULT/01 — "Inbound spikes, then disappears." / "Content works until the algorithm shifts. No control over inputs."
- FAULT/02 — "Paid works, then CAC drifts." / "Spend scales, economics don't. The channel was never engineered."
- FAULT/03 — "Outbound depends on individuals." / "Pipeline lives in one rep's habits. People leave; systems stay."
Closing line (centered, below cards): muted "This happens because channels aren't built as systems." +
`text-amber mono-data` "Predictable revenue comes from predictable inputs."

### 3. Solution.astro — SYS/02 — Correction
Typographic statement section, no cards. `.display` at `text-[clamp(2.2rem,6vw,4.5rem)]`:
"That's why we install revenue systems." (the word "install" in cobalt).
Below: muted max-w-2xl "Systems that run continuously, improve weekly, and scale intentionally."
Then an amber-bordered inline panel (`border border-amber/40 bg-amber-soft px-6 py-4`,
`mono-data text-amber`): "When inputs are controlled, outputs become predictable."

### 4. Systems.astro — `id="systems"`, SYS/03 — Installed systems
Headline: "Scalable channels we build."
3 stacked spec-sheet panels (`.panel-raised .bracket`, full-width, divided rows), each:
left column `mono-label` code (OUT/01, PAID/02, ORG/03) + `.display-sub text-2xl` name;
right column spec rows (`border-t border-line`, label `mono-label` / value body text):
- Outbound Systems — Function: "Works when it's engineered, not improvised." /
  Method: "Target a defined ICP. Run without manual effort. Improve based on data." /
  Outcome: "A controllable source of pipeline."
- Paid Acquisition Systems — Function: "Paid works when it's connected to revenue." /
  Method: "Match offer economics. Route demand into qualification. Scale without breaking CAC." /
  Outcome: "Pipeline you can increase on demand."
- Organic Distribution Systems — Function: "Organic works when it's repeatable." /
  Method: "LinkedIn distribution. Email capture. Content repurposing." /
  Outcome: "Compounding inbound demand."

### 5. Pipeline.astro — SYS/04 — Signal chain
Wrapper has `data-pipeline`. Headline: "Channels alone don't scale. Systems do."
("Systems do." in cobalt.)
Horizontal stage strip (flex, wraps on mobile): 5 stages each `data-stage`
(`.panel px-5 py-3`, `mono-data uppercase text-sm`): Traffic, Capture, Qualification,
Sales, Reporting — separated by amber `→` spans (aria-hidden). motion.ts lights them up on scroll.
Below, a `.panel` "spec card" titled `mono-label` "A typical revenue system includes",
listing 5 rows (mono-data, each with `border-t border-line`): "ICP and channel selection" /
"One primary acquisition channel" / "One secondary support channel" /
"Qualification logic" / "Weekly reporting".

### 6. InstallPlan.astro — `id="install"`, SYS/05 — Install plan
Headline: "The first 90 days."
Vertical timeline: wrapper `data-draw-scope`, left rail is an SVG line
(`<svg>` with `<path data-draw-path>` straight vertical, `stroke="var(--color-cobalt)"`,
width ~2) that draws on scroll. 4 phase rows (each `.panel .bracket .reveal`, offset right
of rail): mono-label phase window + `.display-sub text-xl` + muted focus line:
1. Weeks 1–2 — "Revenue system definition" / "Focus: remove ambiguity before execution."
2. Weeks 3–4 — "System activation" / "Focus: turn the system on."
3. Month 2 — "Stabilization & control" / "Focus: improve performance without adding complexity."
4. Month 3 — "Scale or hold" / "Focus: lock in predictability."
Closing muted line: "After 90 days, you either continue scaling or operate the system internally."

### 7. Contrast.astro — SYS/06 — What this is not
2 panels side by side (md:grid-cols-2), `.panel`, each with a `mono-label text-fault`
"NOT/01" · "NOT/02" eyebrow:
- "This is not a campaign model." / "Campaigns spike. Systems compound."
- "This is not channel testing." / "Channels are selected based on constraints — not trends."

### 8. Results.astro — `id="results"`, SYS/07 — Field data
Headline: "Real systems. Real results." + right-aligned mono note
"Revenue systems we've installed for B2B companies".
Grid md:grid-cols-2 lg:grid-cols-3 of 6 case cards (`.panel .bracket .reveal`), each:
`mono-label` industry eyebrow, `display-sub text-2xl` metric, muted system name,
then two mono spec rows (Funnel / Channel):
1. Creator education — "$10k → $100k+ /mo" — Webinar revenue system — Funnel: free community → webinar → offer; Channel: organic + community
2. B2B AI SaaS — "$100k+ /mo" — Paid webinar growth system — Funnel: paid traffic → webinar → subscription; Channel: paid
3. Edtech platform — "1 → 1,000+ users" — Organic distribution system — Funnel: content → email capture → activation; Channel: organic + email
4. Martech SaaS — "$5k → $20k /mo" — Paid-to-VSL system — Funnel: paid → VSL → trial; Channel: paid
5. B2B services — "20 contracts closed" — LinkedIn outbound system — Funnel: outbound → qualification → call; Channel: outbound
6. Founder-led B2B — "Multi-6 figures" — Service-to-software system — Funnel: outbound + referrals → offer; Channel: outbound + email

### 9. Faq.astro — `id="faq"`, SYS/08 — FAQ
Headline: "Questions, answered."
Native `<details>` accordions in a single column (max-w-3xl), `border-t border-line`
(last also border-b). `<summary>` = `mono-data text-base py-5 cursor-pointer flex justify-between`
with an amber `+` marker (rotates/changes to `–` when open via CSS `details[open]`):
- "How fast can this go live?" → "Initial systems typically launch within weeks, not months."
- "Which channel should we start with?" → "The one that removes your current revenue constraint. We select it from your data, not from trends."
- "Is this outbound, paid, or organic?" → "Yes — but never all at once. One primary channel, one support channel."
- "Is this predictable?" → "Yes. Inputs are controlled, so outputs become measurable and repeatable."

### 10. FinalCta.astro — `id="book"`, SYS/09 — Handoff
Full-bleed cobalt moment: section `border-t border-line`, inner container with
`.grid-bg`-style backdrop but cobalt-tinted (`bg-cobalt-soft`). Centered:
mono-label--amber "Final step", `.display` at `text-[clamp(2.5rem,7vw,5.5rem)]`
"Build predictable revenue.", muted "Schedule a systems call to determine if there's a fit.",
big cobalt button (same style as header CTA, larger: `px-8 py-4 text-base`)
"Book a systems call →" linking to the current Calendly/booking anchor (use `#` href
placeholder `https://cal.com` — TODO comment for Manuel to replace).

### 11. Footer.astro
`border-t border-line py-10`. Row 1: CHRZ wordmark (same as header) + mono-label
"Predictable revenue systems". Row 2 (mono-label, muted): "© 2026 CHRZ. All rights reserved."
+ links "Terms of service" / "Privacy policy" (href="#" placeholders) + right side
`mono-label` "SYS/END — Transmission complete".

## Hard constraints

- Astro 7, Tailwind v4 (theme tokens above — do NOT create tailwind.config).
- Do not modify: `global.css`, `Hero.astro`, `Header.astro`, `motion.ts`, `Layout.astro`.
- Only create files under `src/components/sections/` and update `src/pages/index.astro`
  imports/order.
- Semantic HTML, accessible (aria-hidden on decorative, alt-free SVGs aria-hidden,
  focus styles come from global.css).
- `npm run build` must pass.
