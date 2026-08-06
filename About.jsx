import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">About William</span>
          <h2>Why I only teach one instrument</h2>
        </div>

        <div className="about-grid">
          <div className="avatar-badge" aria-hidden="true">
            W
          </div>
          <div className="about-copy">
            <p>
              {/* TODO: replace with your real background — years trading, prop firm /
              funded history, career path, why NQ specifically. Keep it factual;
              specific numbers should only appear if you can stand behind them. */}
              [Add your background here — how long you've traded NQ, what led you to
              specialize in it, and any funded or prop-firm history worth mentioning.]
              Instead of chasing setups across a dozen tickers, I went deep on one: its
              sessions, its volatility profile, the way it reacts around news and open.
            </p>
            <p>
              That specialization is what I mentor traders on now — not a grab-bag of
              indicators, but the discipline that comes from knowing one market cold, and a
              process that transfers to whatever else you trade.
            </p>
            <div className="cred-chips">
              <span className="cred-chip">[Years trading NQ]</span>
              <span className="cred-chip">[Prop firm / funded background]</span>
              <span className="cred-chip">[Based in — optional]</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
