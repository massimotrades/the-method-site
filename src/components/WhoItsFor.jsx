import React from "react";

const Check = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M13 4L6 11L3 8" stroke="#2f8fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Cross = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M4 4L12 12M12 4L4 12" stroke="#ef5a5a" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const fitFor = [
  "You already trade futures (or are ready to) and want to specialize instead of jumping between tickers",
  "You can commit to watching NQ's real sessions, not just backtesting screenshots",
  "You want direct, 1:1 feedback on your actual trades and execution",
  "You're looking for a repeatable process, not more indicators",
];

const notFor = [
  "You want a signals service or someone to trade for you",
  "You're not willing to focus on one instrument long enough to master it",
  "You're looking for guaranteed profits or a \"holy grail\" system",
  "You can't commit consistent screen time around NQ's active sessions",
];

export default function WhoItsFor() {
  return (
    <section id="who-its-for">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Fit Check</span>
          <h2>Who this mentorship is for</h2>
          <p>
            This is a private, limited-capacity mentorship — not a course for everyone. Here's
            an honest look at who gets the most out of it.
          </p>
        </div>

        <div className="qualify-grid">
          <div className="qualify-card for">
            <h3>This is for you if</h3>
            <ul>
              {fitFor.map((item) => (
                <li key={item}>
                  <Check />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="qualify-card not">
            <h3>This isn't for you if</h3>
            <ul>
              {notFor.map((item) => (
                <li key={item}>
                  <Cross />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
