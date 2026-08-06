import React from "react";
import Reveal from "./Reveal.jsx";

const features = [
  {
    title: "Live Trading",
    body: "Trade the session together in real time and watch decisions get made as they happen.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M4 17l5-6 4 4 7-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Daily Market Recaps",
    body: "End every session knowing what mattered, what didn't, and what to carry into tomorrow.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M8 9h8M8 13h5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Private Community",
    body: "A focused group of serious traders — accountability, questions answered, wins shared.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <circle cx="9" cy="8" r="3.5" stroke="currentColor" strokeWidth="2" />
        <path d="M2.5 20c0-3.6 2.9-5.5 6.5-5.5s6.5 1.9 6.5 5.5" stroke="currentColor" strokeWidth="2" />
        <path d="M16 5a3.5 3.5 0 010 7M21.5 20c0-2.8-1.7-4.5-4.2-5.2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Weekly Reviews",
    body: "Your trades and journal reviewed against the framework, with direct feedback.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <rect x="4" y="5" width="16" height="15" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M4 9h16M8 3v4M16 3v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M9 14.5l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Education Library",
    body: "Every concept, setup, and session breakdown organized so you can revisit it anytime.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M4 19V5a2 2 0 012-2h11v18H6a2 2 0 01-2-2z" stroke="currentColor" strokeWidth="2" />
        <path d="M8 7h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Lifetime Access",
    body: "Join once, keep access — the community and library stay with you as you grow.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M8.5 14.5C6 14.5 4 12.5 4 10s2-4.5 4.5-4.5c3.5 0 4 3 7 3 2.5 0 4.5 2 4.5 4.5s-2 4.5-4.5 4.5c-3.5 0-4-3-7-3z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function Community() {
  return (
    <section id="community" className="community">
      <div className="wrap">
        <Reveal>
          <div className="section-head center">
            <span className="eyebrow">Inside The Mentorship</span>
            <h2>Everything You Get Access To</h2>
          </div>
        </Reveal>

        <div className="community-grid">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 100}>
              <div className="glass-card community-card">
                <div className="icon-chip">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
