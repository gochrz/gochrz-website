# gochrz.com — CHRZ landing

Redesigned landing page for CHRZ (predictable revenue systems, installed).
Concept: a **revenue control room** — the page behaves like the product CHRZ sells:
an installed, running system with live telemetry.

Design system and section spec: see [DESIGN.md](./DESIGN.md).

## Stack

- [Astro 7](https://astro.build) — static output
- [Tailwind CSS v4](https://tailwindcss.com) via `@tailwindcss/vite`
- [GSAP](https://gsap.com) — boot sequence, scroll reveals, schematic pulses
- Fonts: Archivo Variable (display + body, width axis) & IBM Plex Mono (telemetry)

## Commands

| Command           | Action                            |
| ----------------- | --------------------------------- |
| `npm install`     | Install dependencies              |
| `npm run dev`     | Dev server at `localhost:4321`    |
| `npm run build`   | Production build to `./dist/`     |
| `npm run preview` | Preview the production build      |

## Deploy (Vercel)

Static Astro deploys to Vercel with zero config — import the repo and Vercel
detects the framework. No adapter needed unless SSR is added later
(then: `npx astro add vercel`).

All "Book a systems call" buttons link to the CHRZ Calendly intro-call page.
