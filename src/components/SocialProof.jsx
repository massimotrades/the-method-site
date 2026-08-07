import React, { useCallback, useState } from "react";
import Reveal from "./Reveal.jsx";

// ============================================================================
// SCREENSHOTS — just drop files into /public named:
//   testimonial-1, testimonial-2, testimonial-3, ...  (up to TOTAL below)
// Any extension works (.png / .jpg / .jpeg / .webp) — it's auto-detected, and
// numbers with no matching file are skipped. No code changes needed to add
// or remove screenshots; only bump TOTAL if you go past 12.
// ============================================================================
const TOTAL = 12;
const EXTS = ["png", "jpg", "jpeg", "webp"];

// ============================================================================
// TEXT QUOTES (optional) — these mix into the same grid alongside screenshots.
// Replace with real student quotes, or set this to [] to show screenshots only.
// Don't publish invented quotes, names, or dollar amounts.
// ============================================================================
const QUOTES = [
  // { quote: "What changed for them and how.", name: "Name or handle", detail: "$ amount · prop firm" },
];

function ShotImage({ n, onDead }) {
  const [extIdx, setExtIdx] = useState(0);

  if (extIdx >= EXTS.length) return null;

  return (
    <img
      src={`/testimonial-${n}.${EXTS[extIdx]}`}
      alt={`Student testimonial ${n}`}
      loading="lazy"
      onError={() => {
        const next = extIdx + 1;
        if (next >= EXTS.length) onDead(n);
        setExtIdx(next);
      }}
    />
  );
}

export default function SocialProof() {
  const [dead, setDead] = useState(() => new Set());

  const markDead = useCallback((n) => {
    setDead((prev) => {
      const next = new Set(prev);
      next.add(n);
      return next;
    });
  }, []);

  const shots = [];
  for (let n = 1; n <= TOTAL; n++) {
    if (!dead.has(n)) shots.push(n);
  }

  const nothingYet = shots.length === 0 && QUOTES.length === 0;

  return (
    <section id="results" className="social-proof">
      <div className="wrap">
        <Reveal>
          <div className="section-head center">
            <span className="eyebrow">Student Results</span>
            <h2>Real Students. Real Progress.</h2>
          </div>
        </Reveal>

        {nothingYet ? (
          <Reveal>
            <div className="glass-card carousel-empty">
              [Drop screenshots into the public folder named testimonial-1,
              testimonial-2, … (.png / .jpg / .webp) — they'll appear here
              automatically]
            </div>
          </Reveal>
        ) : (
          <div className="masonry">
            {QUOTES.map((c, i) => (
              <Reveal key={`q-${i}`} delay={(i % 4) * 90}>
                <div className="glass-card proof-quote">
                  <div className="stars">★★★★★</div>
                  <p className="quote">"{c.quote}"</p>
                  <div className="proof-meta">
                    <span className="name">{c.name}</span>
                    <span className="detail">{c.detail}</span>
                  </div>
                </div>
              </Reveal>
            ))}

            {shots.map((n, i) => (
              <Reveal key={`s-${n}`} delay={((i + QUOTES.length) % 4) * 90}>
                <div className="glass-card proof-img">
                  <ShotImage n={n} onDead={markDead} />
                </div>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
