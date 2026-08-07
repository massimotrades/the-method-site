import React, { useState } from "react";
import Reveal from "./Reveal.jsx";

const faqs = [
  {
    q: "Is this a signals service?",
    a: "No. There are no buy/sell alerts. You're taught a framework and reviewed on how you apply it — the goal is that you can trade it independently.",
  },
  {
    q: "Why do I need to fill out an application before booking?",
    a: "Seats are limited and the call is most useful when it's prepared around your actual situation. The 2-minute application makes sure every call is focused, not generic.",
  },
  {
    q: "What happens on the strategy call?",
    a: "A 20-minute conversation about where you are now, where you're stuck, and whether the mentorship is a fit. You'll know either way by the end — no pressure.",
  },
  {
    q: "How much time do I need each week?",
    a: "It varies by trader and gets covered on your call, but expect real weekly commitment — sessions, reviews, and screen time. This is not a passive product.",
  },
  {
    q: "Is trading futures risky?",
    a: "Yes. Futures trading involves substantial risk of loss and is not suitable for everyone. See the risk disclosure in the footer — nothing on this site is financial advice or a guarantee of results.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="faq">
      <div className="wrap">
        <Reveal>
          <div className="section-head center">
            <span className="eyebrow">FAQ</span>
            <h2>Common Questions</h2>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="faq-list">
            {faqs.map((f, i) => (
              <div className={`faq-item ${open === i ? "open" : ""}`} key={f.q}>
                <button
                  className="faq-q"
                  onClick={() => setOpen(open === i ? -1 : i)}
                  aria-expanded={open === i}
                >
                  <span>{f.q}</span>
                  <span className="plus" aria-hidden="true">+</span>
                </button>
                <div className="faq-a">
                  <div>
                    <p>{f.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
