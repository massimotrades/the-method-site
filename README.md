# William NQ Mentorship — website

React + Vite site for williamnqmentorship.com, with:

- A distinct "night desk" visual identity — Fraunces serif for voice/authority,
  IBM Plex Sans/Mono for body and data, ink-navy background, azure + gold
  accents, an annotated candlestick hero visual, and a real session-by-session
  timeline (Asia → London → NY Open → Power Hour) instead of a generic
  numbered list
- A scrolling ticker-style urgency bar and a direct-response funnel flow:
  Hero → two-step "Get Started" (watch, then apply) → proof strip → results/
  testimonials → the fuller About/Why NQ/Inclusions/FAQ content
- The gated **Book a Call** flow:
  1. Visitor clicks any **Book a Call** button, or "Fill Out Application" in
     the Step 2 panel
  2. A Typeform popup opens (`https://form.typeform.com/to/oMTi7RzG`)
  3. On submit, Typeform records the response immediately (so you have their
     info even if they close the tab right after) — the popup closes and the
     Calendly calendar unlocks inline (`https://calendly.com/massimodeangelis8/30min`)
- A standalone Calendly panel inside `#book-a-call` that stays locked until
  the Typeform is completed

### A note on the reference site you shared

I didn't copy JJ Simon's page — his headline copy, his students' testimonials,
his specific payout figures, and his refund guarantee are his content and his
business claims, not things I can put on your site. What I did take was the
*structure*: the ticker bar, the "Step 1/2 watch, Step 2/2 book" framing, and
a results/testimonial wall — rebuilt with original copy and clearly marked
placeholders (see below) instead of invented numbers or fake reviews...

## 1. Install

```bash
npm install
```

## 2. Run locally

```bash
npm run dev
```

## 3. Build for production

```bash
npm run build
```

Deploy the `dist/` folder to Vercel, Netlify, GitHub Pages, or any static host.

## Before you publish — replace these placeholders

I didn't have access to the live williamnqmentorship.com content (it blocks
automated access), so a few things are intentionally left as bracketed
placeholders rather than invented facts:

| What | Where |
|---|---|
| William's bio, years trading, prop-firm/funded history | `src/components/About.jsx` |
| Proof-strip stats (years trading, verified payouts, etc.) | `src/components/ProofStrip.jsx` |
| VSL video embed | `src/components/GetStarted.jsx` — `VIDEO_EMBED_URL` |
| Real student testimonials (delete any card without a real one) | `src/components/Proof.jsx` |
| Real payout/results screenshots | `src/components/Proof.jsx` — swap the dashed placeholder boxes for real `<img>`s |
| Urgency bar wording | `src/components/UrgencyBar.jsx` |

## Customize further

| What | Where |
|---|---|
| Typeform / Calendly links | `src/context/BookingContext.jsx` |
| Hero, session timeline, FAQ, inclusions copy | each file in `src/components/` |
| Colors, type, spacing | `src/styles/index.css` (all CSS variables at the top) |

## Notes

- The Typeform popup is opened imperatively via `@typeform/embed`'s
  `createPopup`, so it works from **any** button on the page via the shared
  `useBooking()` hook.
- The Calendly embed uses `react-calendly`'s `InlineWidget`. Swap it for
  `PopupWidget` / `openPopupWidget` from the same package if you'd rather it
  open as a popup instead of inline.
