import React from "react";

const sessions = [
  {
    time: "ASIA",
    title: "The quiet build",
    body: "Lower volume, tighter range. I teach you to read this as context for the day ahead — not a window to force trades in.",
  },
  {
    time: "LONDON",
    title: "Early clues",
    body: "Volatility starts to build. This is often where the first real clues about where liquidity is sitting show up.",
  },
  {
    time: "NY OPEN",
    title: "The real move",
    body: "Where NQ tends to make its move for the day. This is the highest-probability execution window I teach around.",
  },
  {
    time: "POWER HOUR",
    title: "The final push",
    body: "A different rhythm and a different risk profile into the close — and a different plan to match it.",
  },
];

export default function SessionMap() {
  return (
    <section id="why-nq">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Why NQ</span>
          <h2>One contract. Every session. No guessing which one to trade.</h2>
          <p>
            NQ moves — and it moves on a schedule. Mastering it means knowing what each
            session tends to do, and having one process for trading it. That's the core of
            the mentorship.
          </p>
        </div>

        <div className="session-track">
          {sessions.map((s) => (
            <div className="session-card" key={s.time}>
              <div className="session-time">
                <span className="node" />
                {s.time}
              </div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
