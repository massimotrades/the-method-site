import React, { useCallback, useEffect, useRef, useState } from "react";
import Reveal from "./Reveal.jsx";

// Looks for /public/payout-1 through /public/payout-14.
// Each number is tried as .jpg, .jpeg, .png, then .webp — whichever exists is
// used, and numbers with no matching file are skipped automatically.
const TOTAL = 14;
const EXTS = ["jpg", "jpeg", "png", "webp"];
const AUTOPLAY_MS = 3500;

function SlideImage({ n, onDead }) {
  const [extIdx, setExtIdx] = useState(0);

  if (extIdx >= EXTS.length) return null;

  return (
    <img
      src={`/payout-${n}.${EXTS[extIdx]}`}
      alt={`Prop firm payout screenshot ${n}`}
      loading="lazy"
      draggable="false"
      onError={() => {
        const next = extIdx + 1;
        if (next >= EXTS.length) onDead(n);
        setExtIdx(next);
      }}
    />
  );
}

export default function PayoutCarousel() {
  const [dead, setDead] = useState(() => new Set());
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchX = useRef(null);

  const slides = [];
  for (let n = 1; n <= TOTAL; n++) {
    if (!dead.has(n)) slides.push(n);
  }
  const count = slides.length;
  const current = count ? Math.min(idx, count - 1) : 0;

  const markDead = useCallback((n) => {
    setDead((prev) => {
      const next = new Set(prev);
      next.add(n);
      return next;
    });
  }, []);

  const go = useCallback(
    (dir) => {
      if (!count) return;
      setIdx((i) => (Math.min(i, count - 1) + dir + count) % count);
    },
    [count]
  );

  // Autoplay — pauses on hover/touch, respects reduced motion.
  useEffect(() => {
    if (paused || count < 2) return;
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    const t = setInterval(() => {
      setIdx((i) => (i + 1) % count);
    }, AUTOPLAY_MS);
    return () => clearInterval(t);
  }, [paused, count]);

  const onTouchStart = (e) => {
    setPaused(true);
    touchX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e) => {
    const dx = e.changedTouches[0].clientX - (touchX.current ?? 0);
    if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
    touchX.current = null;
    setPaused(false);
  };

  return (
    <section id="payouts" className="payouts">
      <div className="wrap">
        <Reveal>
          <div className="section-head center">
            <span className="eyebrow">Verified Payouts</span>
            <h2>William's Biggest Payouts So Far</h2>
          </div>
        </Reveal>

        <Reveal delay={120}>
          {count === 0 ? (
            <div className="glass-card carousel-empty">
              [Upload payout-1 … payout-14 (.jpg / .png / .webp) to the public
              folder — the carousel fills itself automatically]
            </div>
          ) : (
            <div className="carousel">
              <div
                className="carousel-frame"
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
                onTouchStart={onTouchStart}
                onTouchEnd={onTouchEnd}
              >
                <div
                  className="carousel-track"
                  style={{ transform: `translateX(-${current * 100}%)` }}
                >
                  {slides.map((n) => (
                    <figure className="carousel-slide" key={n}>
                      <SlideImage n={n} onDead={markDead} />
                    </figure>
                  ))}
                </div>

                <button
                  className="car-arrow prev"
                  onClick={() => go(-1)}
                  aria-label="Previous payout"
                >
                  ‹
                </button>
                <button
                  className="car-arrow next"
                  onClick={() => go(1)}
                  aria-label="Next payout"
                >
                  ›
                </button>

                <div className="car-counter">
                  {current + 1} / {count}
                </div>
              </div>

              <div className="car-dots" role="tablist">
                {slides.map((n, i) => (
                  <button
                    key={n}
                    className={i === current ? "on" : ""}
                    onClick={() => setIdx(i)}
                    aria-label={`Go to payout ${i + 1}`}
                  />
                ))}
              </div>

              <p className="car-note">
                Past performance is not indicative of future results.
              </p>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}
