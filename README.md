# William NQ Mentorship — VSL funnel site

React + Vite. Black & gold, premium, single-journey VSL funnel:

**Landing → VSL → Book Call button → Typeform popup → Calendly unlocks →
Thank You page (post-VSL) — with Social Proof, Community, and FAQ below.**

## How the funnel works

1. Hero = headline + subheadline + the VSL. No distractions above the fold.
2. Below the video: one big **Book Your Strategy Call** button.
3. Clicking it (or the header button) opens the **Typeform popup**
   (`https://form.typeform.com/to/oMTi7RzG`). Typeform saves the response
   the instant they submit — you get their info even if they never book.
4. On submit, the popup closes and the page smooth-scrolls to the
   **Calendly** section, now unlocked
   (`https://calendly.com/massimodeangelis8/30min`).
5. When Calendly confirms a booking, the visitor is automatically taken to
   the **Thank You page** (`#thank-you`) with a post-VSL video and a
   show-up checklist.

## Run locally

```bash
npm install
npm run dev
```

## Deploy

Push to GitHub → Vercel auto-builds (Vite defaults, no config needed).

## Replace before launch

| What | Where |
|---|---|
| Main VSL video | `src/components/HeroVSL.jsx` — `VIDEO_EMBED_URL` |
| Post-booking video | `src/components/ThankYou.jsx` — `POST_VSL_EMBED_URL` |
| Discord invite link | `src/components/ThankYou.jsx` — `DISCORD_INVITE_URL` |
| Student results (quotes, payout/Discord screenshots, video testimonials) | `src/components/SocialProof.jsx` — every card is a clearly-marked placeholder; do **not** launch with invented results |
| Typeform / Calendly links | `src/context/BookingContext.jsx` |

## Notes

- The animation set from the brief (fade-up, blur reveals, floating
  particles, micro-interactions, smooth scroll) is implemented natively with
  CSS + a small IntersectionObserver `Reveal` component — no Tailwind or
  Framer Motion dependency, so `package.json` is unchanged and the Vercel
  build config stays identical. Swap in those libraries later if you want.
- The Thank You page is hash-based (`yoursite.com/#thank-you`) so it works
  on static hosting with zero routing config.
- Reduced-motion users get an instant, animation-free experience
  automatically.
