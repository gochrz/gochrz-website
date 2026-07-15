# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into the CHRZ landing page. A `posthog.astro` snippet component was created and added to the root `Layout.astro` so PostHog initializes on every page. Environment variables (`PUBLIC_POSTHOG_PROJECT_TOKEN`, `PUBLIC_POSTHOG_HOST`) were written to `.env` and referenced via `define:vars` so tokens are never hardcoded. All capture calls use `is:inline` scripts to avoid Astro TypeScript processing issues. Seven events are now tracked across five components, covering the full visitor-to-Calendly-booking conversion funnel.

| Event name | Description | File |
|---|---|---|
| `book_call_clicked` | User clicked a "Book a Systems Call" CTA button — `location` property distinguishes `hero`, `header`, or `final_cta` | `src/components/Hero.astro`, `src/components/Header.astro`, `src/components/sections/FinalCta.astro` |
| `hero_secondary_cta_clicked` | User clicked the "See the three pillars" ghost button in the hero | `src/components/Hero.astro` |
| `pillar_card_clicked` | User clicked one of the three pillar cards — `pillar` property holds the pillar title | `src/components/sections/PillarsOverview.astro` |
| `nav_link_clicked` | User clicked a desktop navigation link — `label` property holds the link text | `src/components/Header.astro` |
| `case_study_carousel_navigated` | User navigated the mobile case study carousel — `direction` is `next` or `previous` | `src/components/sections/ChrzExperience.astro` |

## Next steps

We've built a dashboard and five insights to keep an eye on visitor behaviour:

- **Dashboard**: [Analytics basics (wizard)](https://us.posthog.com/project/514240/dashboard/1855515)
- [Book a Call – clicks by location](https://us.posthog.com/project/514240/insights/ozOytV18) — bar chart of CTA clicks broken down by location
- [Calendly CTA conversion funnel](https://us.posthog.com/project/514240/insights/mCb7e7zM) — pageview → book_call_clicked funnel
- [Pillar card clicks by pillar](https://us.posthog.com/project/514240/insights/8BYmjy7S) — which service pillar attracts most interest
- [Nav link clicks by label](https://us.posthog.com/project/514240/insights/4seHhEsi) — header nav engagement
- [Engagement overview – all CTA events](https://us.posthog.com/project/514240/insights/hdFCIOAI) — all tracked events on a single trend line

## Verify before merging

- [x] Run a full production build and verify every generated page.
- [x] Run the test suite.
- [x] Add `PUBLIC_POSTHOG_PROJECT_TOKEN` and `PUBLIC_POSTHOG_HOST` to `.env.example`.
- [ ] Add source-map upload later if PostHog error tracking becomes part of the production setup.
