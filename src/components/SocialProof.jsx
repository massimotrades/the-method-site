import React from "react";
import Reveal from "./Reveal.jsx";

// ============================================================================
// TODO — REPLACE EVERYTHING IN THIS SECTION WITH REAL CONTENT BEFORE LAUNCH.
// Do not publish invented quotes, names, dollar amounts, or screenshots.
// Real payout screenshots (with personal details redacted), real Discord
// messages, and real video testimonials are the strongest version of this.
// Delete any card you don't have a real replacement for.
// ============================================================================
const cards = [
  { type: "quote", quote: "[Real student quote — what changed and how.]", name: "[Name or handle]", detail: "[$ amount · prop firm]" },
  { type: "screenshot", label: "[Payout screenshot]", ratio: "4 / 3" },
  { type: "video", label: "[Video testimonial]" },
  { type: "discord", label: "[Discord message screenshot]", ratio: "4 / 2.4" },
  { type: "quote", quote: "[Real student quote.]", name: "[Name or handle]", detail: "[$ amount · prop firm]" },
  { type: "screenshot", label: "[Profit screenshot]", ratio: "4 / 4.4" },
  { type: "quote", quote: "[Real student quote.]", name: "[Name or handle]", detail: "[$ amount · prop firm]" },
  { type: "screenshot", label: "[Payout screenshot]", ratio: "4 / 2.8" },
];

export default function SocialProof() {
  return (
    <section id="results" className="social-proof">
      <div className="wrap">
        <Reveal>
          <div className="section-head center">
            <span className="eyebrow">Student Results</span>
            <h2>Real Students. Real Progress.</h2>
            <p className="section-sub">
              Every card below is a placeholder — swap in your real testimonials, payout
              screenshots, and Discord wins before launch.
            </p>
          </div>
        </Reveal>

        <div className="masonry">
          {cards.map((c, i) => (
            <Reveal key={i} delay={(i % 4) * 90}>
              {c.type === "quote" ? (
                <div className="glass-card proof-quote">
                  <div className="stars">★★★★★</div>
                  <p className="quote">"{c.quote}"</p>
                  <div className="proof-meta">
                    <span className="name">{c.name}</span>
                    <span className="detail">{c.detail}</span>
                  </div>
                </div>
              ) : c.type === "video" ? (
                <div className="glass-card proof-shot proof-video" style={{ aspectRatio: "9 / 12" }}>
                  <span className="play-badge" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M8 5v14l11-7L8 5z" fill="currentColor" />
                    </svg>
                  </span>
                  {c.label}
                </div>
              ) : (
                <div className="glass-card proof-shot" style={{ aspectRatio: c.ratio }}>
                  {c.label}
                </div>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
