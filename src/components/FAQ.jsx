import React, { useState } from "react";
import Reveal from "./Reveal.jsx";

const faqs = [
  {
    q: "Do I need experience to join?",
    a: "Not necessarily, but you do need to be serious. Complete beginners can start here, though you'll move faster if you already know your way around a chart and have spent time in front of the market. What matters more than experience is whether you're willing to follow a process instead of chasing your own ideas mid-session. We'll figure out honestly on the call whether the timing is right for you.",
  },
  {
    q: "Is this a signals service?",
    a: "No. There are no buy/sell alerts and nobody trades for you. You're taught a repeatable framework for reading structure and executing on NQ, then reviewed on how you apply it to your own trades. The goal is that you can run it independently — not that you stay dependent on someone else's calls.",
  },
  {
    q: "Why do I have to fill out an application before booking?",
    a: "Spots are limited, and a call is far more useful when we already know your experience level, what you trade, and where you're stuck. It takes about two minutes and means we can skip the generic intro and get straight into your actual situation.",
  },
  {
    q: "What happens on the strategy call?",
    a: "It's a 20-minute conversation about where you are now, what's been getting in your way, and whether the mentorship is a fit. If it is, we'll walk through what working together looks like. If it isn't, you'll hear that too — you'll know either way by the end, and there's no obligation.",
  },
  {
    q: "How much time do I need each week?",
    a: "This isn't a passive product. Expect real weekly commitment: attending sessions, reviewing your own trades, and putting screen time in during NQ's active hours. Exactly how much varies by trader and gets discussed on your call, but if you can't commit consistent time, this won't work for you.",
  },
  {
    q: "Do you only trade NQ?",
    a: "NQ is the specialty and everything is taught around it — its sessions, its volatility, how it behaves around the open. But the underlying process transfers. Once you can read structure and execute with discipline on one instrument, applying it to other futures contracts is straightforward.",
  },
  {
    q: "What does it cost?",
    a: "Pricing depends on the level of support you need, so it's covered directly on the strategy call once we understand your situation. There's no hard sell — if it's not the right fit or the right time, we'll say so.",
  },
  {
    q: "Will this get me funded or guarantee profits?",
    a: "No, and be cautious of anyone who promises that. Trading futures carries substantial risk of loss and results depend on the individual, their discipline, and their risk management. What the mentorship provides is a structured process and direct feedback — the execution is still on you.",
  },
  {
    q: "Is trading futures risky?",
    a: "Yes. Futures trading involves substantial risk of loss and isn't suitable for everyone. Never trade money you can't afford to lose. See the full risk disclosure in the footer — nothing on this site is financial advice or a guarantee of results.",
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
