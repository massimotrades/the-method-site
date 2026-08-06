import React from "react";

const faqs = [
  {
    q: "Why do I need to apply before booking a call?",
    a: "Mentorship spots are limited, and the call is most useful when I already know your experience level and goals. The short application lets me prepare and keeps the call focused on you instead of a generic intro.",
  },
  {
    q: "Do you only trade NQ?",
    a: "NQ is my specialty and everything I teach is built around it, but the process — reading sessions, structure, and execution discipline — transfers directly to other futures contracts you trade.",
  },
  {
    q: "Is this a signals service or a course?",
    a: "No. There are no buy/sell alerts and no static video library. It's a live, 1:1 mentorship — I teach you a process and review how you apply it.",
  },
  {
    q: "How much time do I need each week?",
    a: "This varies by trader and is discussed on your strategy call, but expect real weekly commitment — review sessions, homework, and screen time around NQ's active hours. This isn't a passive product.",
  },
  {
    q: "Is trading futures risky?",
    a: "Yes. Futures trading involves substantial risk of loss and is not suitable for everyone. See the risk disclosure in the footer. Nothing on this site is financial advice or a guarantee of results.",
  },
];

export default function FAQ() {
  return (
    <section id="faq">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">FAQ</span>
          <h2>Common questions</h2>
        </div>

        <div className="faq-list">
          {faqs.map((f) => (
            <details className="faq-item" key={f.q}>
              <summary>
                <span>{f.q}</span>
                <span className="plus">+</span>
              </summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
