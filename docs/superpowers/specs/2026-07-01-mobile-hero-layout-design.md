# Mobile Hero Layout Redesign

## Problem

The desktop hero (`src/components/Hero.tsx`) looks good and is not being changed. On mobile, the hero currently stacks: badge → headline → paragraph → CTA buttons → stats → video card, in a single full-width column. The user finds this reads as a generic template stack rather than a premium/modern layout.

## Decision

Mobile gets its own dedicated layout, independent from desktop markup:

**Mobile order (centered, `lg:hidden`):**
1. Badge ("Franchise opportunities now open")
2. Headline ("Bring a global lifestyle brand to your city") — centered text, natural wrap (no width constraint)
3. Video card (existing product video treatment, incl. floating "Avg. store launch" card)
4. CTA buttons (Join Our Franchise, See the model) — centered
5. Stats row (200+, 60+, 9 yrs) — centered

No description paragraph on mobile.

**Desktop (`hidden lg:grid`):** unchanged — same two-column layout, same content, including the paragraph.

## Implementation Notes

- Extract three local sub-components inside `Hero.tsx` to avoid duplicating JSX between the mobile and desktop blocks:
  - `HeroVideo` — the video card with decorative blurs and floating stat card
  - `HeroCTAs` — the two CTA links
  - `HeroStats` — the three `Stat` items
- `Stat` component stays as-is.
- Desktop block becomes `hidden lg:grid lg:grid-cols-2 lg:items-center lg:gap-12` wrapping the original text/video columns verbatim.
- Mobile block is a new `flex flex-col items-center gap-8 text-center lg:hidden` wrapping badge, headline, `HeroVideo`, `HeroCTAs`, `HeroStats`.

## Out of Scope

- No changes to desktop layout, styling, or content.
- No changes to other sections of the page.
