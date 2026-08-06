import React from "react";

// TODO: Replace every card below with a real testimonial from an actual student.
// Do not publish invented names, quotes, or dollar amounts — screenshots of real
// payouts/statements (personal account numbers redacted) are the strongest version
// of this section. Delete any card you don't have a real replacement for.
const testimonials = [
  {
    quote: "[Add a real student quote — what changed for them and how.]",
    name: "[Student name or handle]",
    detail: "[$ amount · prop firm, if you have it]",
  },
  {
    quote: "[Add a real student quote.]",
    name: "[Student name or handle]",
    detail: "[$ amount · prop firm]",
  },
  {
    quote: "[Add a real student quote.]",
    name: "[Student name or handle]",
    detail: "[$ amount · prop firm]",
  },
];

export default function Proof() {
  return (
    <section id="proof">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Results</span>
          <h2>What students say</h2>
          <p>
            Swap this section for real testimonials and payout proof from your own students
            before this goes live — every card below is a placeholder.
          </p>
        </div>

        <div className="testimonial-grid">
          {testimonials.map((t, i) => (
            <div className="testimonial-card" key={i}>
              <div className="stars">★★★★★</div>
              <p className="quote">"{t.quote}"</p>
              <div className="testimonial-meta">
                <span className="name">{t.name}</span>
                <span className="detail">{t.detail}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="proof-shots">
          <span className="proof-shots-label">Your verified results</span>
          <div className="proof-shots-grid">
            {[1, 2, 3, 4].map((n) => (
              <div className="proof-shot-placeholder" key={n}>
                [Add proof screenshot]
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
