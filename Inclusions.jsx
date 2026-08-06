import React from "react";

const items = [
  {
    title: "1:1 Mentorship Calls",
    body: "Direct, private sessions with me — not a webinar. Your charts, your trades, your questions.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2" />
        <path d="M4 20c0-4.4 3.6-7 8-7s8 2.6 8 7" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Trade & Journal Review",
    body: "Your entries, exits, and sizing reviewed against the process — with direct notes.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M4 4h16v16H4z" stroke="currentColor" strokeWidth="2" />
        <path d="M8 9h8M8 13h5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "NQ Session Playbook",
    body: "The written framework for reading NQ's sessions and structure, so you can run it independently.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M4 19V5a2 2 0 012-2h11v18H6a2 2 0 01-2-2z" stroke="currentColor" strokeWidth="2" />
        <path d="M8 7h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Live NQ Sessions",
    body: "Watch structure and execution applied in real time during NQ's active hours.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M4 17l5-6 4 4 7-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Psychology Check-Ins",
    body: "Direct conversations about sizing, hesitation, and revenge trading — not generic advice.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M12 21s-7-4.35-9.5-9C.7 8 3 4 7 4c2 0 3.5 1 5 3 1.5-2 3-3 5-3 4 0 6.3 4 4.5 8-2.5 4.65-9.5 9-9.5 9z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Direct Access",
    body: "A private line to ask me questions between sessions — no ticket queue, no bot.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function Inclusions() {
  return (
    <section id="inclusions">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">What's Included</span>
          <h2>Everything inside the mentorship</h2>
          <p>Exact scope covered on your strategy call — this is the general shape of the program.</p>
        </div>

        <div className="inclusions-grid">
          {items.map((item) => (
            <div className="inclusion-card" key={item.title}>
              <div className="icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
