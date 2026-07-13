"use client";

import { useEffect, useState } from "react";

const CALENDLY_URL = "https://calendly.com/massimodeangelis8/30min";

// Paste a YouTube embed URL here when the VSL is ready, for example:
// https://www.youtube.com/embed/VIDEO_ID
const VSL_EMBED_URL = "";

const payouts = [
  "/payout-1.jpg",
  "/payout-2.webp",
  "/payout-3.webp",
  "/payout-4.webp",
  "/payout-5.webp",
  "/payout-6.jpg",
  "/payout-7.png",
  "/payout-8.png",
];

const payoutSlides = [
  [payouts[0], payouts[1], payouts[2]],
  [payouts[3], payouts[4], payouts[5]],
  [payouts[6], payouts[7], payouts[0]],
];

const firms = [
  { name: "Topstep", logo: "/topstep.webp" },
  { name: "Tradeify", logo: "/tradeify.webp" },
  { name: "Lucid Trading", logo: "/lucid.webp" },
  { name: "Alpha Futures", logo: "/alpha.webp" },
  { name: "Take Profit Trader", logo: "/tpt.png" },
];

const included = [
  {
    number: "01",
    title: "The strategy, A to Z",
    copy: "A clear futures framework built around repeatable models instead of endless confluences.",
  },
  {
    number: "02",
    title: "Risk and system building",
    copy: "Define your limits, build rules you can follow, and stop letting one trade ruin the week.",
  },
  {
    number: "03",
    title: "Psychology and execution",
    copy: "Work directly on overtrading, revenge trading, hesitation, and inconsistent decision-making.",
  },
  {
    number: "04",
    title: "Capital management",
    copy: "Learn how to approach evaluations, funded accounts, and payouts with a long-term plan.",
  },
  {
    number: "05",
    title: "Ongoing implementation",
    copy: "Live sessions, daily recaps, backtesting, and weekly reviews that turn knowledge into execution.",
  },
];

const faqs = [
  {
    question: "Is this mentorship beginner-friendly?",
    answer:
      "Yes, but it is built for people who are serious about doing the work. We can help you build from the ground up or simplify what you already know.",
  },
  {
    question: "How much time do I need each week?",
    answer:
      "You do not need to watch charts all day. The goal is a focused process you can repeat. Your exact schedule and availability will be covered on the call.",
  },
  {
    question: "Is this one-on-one coaching?",
    answer:
      "The Method is a private mentorship environment with live access, structured education, reviews, and direct support. It is not sold as unlimited one-on-one coaching.",
  },
  {
    question: "Are payouts guaranteed?",
    answer:
      "No. Trading involves risk and nobody can guarantee results. We provide the framework, feedback, and environment; your decisions and performance remain your responsibility.",
  },
  {
    question: "What happens on the call?",
    answer:
      "We learn about your experience, current struggles, and goals. If the mentorship genuinely fits, we explain the complete program and next steps. There is no pressure to join.",
  },
];

function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <span className={`brand ${compact ? "brand--compact" : ""}`}>
      <span className="brand__mark" aria-hidden="true">
        <img src="/favicon.png" alt="" />
      </span>
      <span className="brand__words">
        <strong>THE METHOD</strong>
        <small>TRADING</small>
      </span>
    </span>
  );
}

function Arrow() {
  return <span className="button-arrow" aria-hidden="true">→</span>;
}

function BookCallButton({
  label = "Book your free call",
  className = "",
}: {
  label?: string;
  className?: string;
}) {
  return (
    <a
      className={`primary-button ${className}`}
      href={CALENDLY_URL}
      target="_blank"
      rel="noreferrer"
    >
      <span>{label}</span>
      <Arrow />
    </a>
  );
}

function PayoutSlider() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % payoutSlides.length);
    }, 6500);

    return () => window.clearInterval(timer);
  }, []);

  const previous = () => {
    setActiveSlide((current) =>
      current === 0 ? payoutSlides.length - 1 : current - 1,
    );
  };

  const next = () => {
    setActiveSlide((current) => (current + 1) % payoutSlides.length);
  };

  return (
    <section className="results results--priority section" id="results">
      <div className="shell">
        <div className="results__header results__header--compact">
          <div className="section-heading">
            <p className="eyebrow"><span /> Verified trading experience</p>
            <h2>Real payouts. Not empty promises.</h2>
          </div>
          <div className="slider-controls" aria-label="Payout slideshow controls">
            <button type="button" onClick={previous} aria-label="Previous payout screenshots">←</button>
            <span>{String(activeSlide + 1).padStart(2, "0")} / {String(payoutSlides.length).padStart(2, "0")}</span>
            <button type="button" onClick={next} aria-label="Next payout screenshots">→</button>
          </div>
        </div>

        <div className="payout-slider" aria-live="polite">
          <div className="payout-slide" key={activeSlide}>
            {payoutSlides[activeSlide].map((payout, index) => (
              <figure className={`payout-card payout-card--${index + 1}`} key={`${activeSlide}-${payout}-${index}`}>
                <img
                  src={payout}
                  alt={`Trading payout confirmation ${(activeSlide * 3) + index + 1}`}
                />
              </figure>
            ))}
          </div>
        </div>

        <div className="slider-dots" aria-label="Select payout slide">
          {payoutSlides.map((_, index) => (
            <button
              type="button"
              key={index}
              className={index === activeSlide ? "is-active" : ""}
              onClick={() => setActiveSlide(index)}
              aria-label={`Show payout slide ${index + 1}`}
              aria-current={index === activeSlide ? "true" : undefined}
            />
          ))}
        </div>
        <p className="results-note">
          Personal payout confirmations shown for transparency. Individual results vary and are never guaranteed.
        </p>
      </div>
    </section>
  );
}

function VslCard() {
  if (VSL_EMBED_URL) {
    return (
      <div className="vsl-card vsl-card--embed">
        <iframe
          src={VSL_EMBED_URL}
          title="The Method mentorship overview"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <div className="vsl-card" aria-label="The Method VSL video placeholder">
      <div className="vsl-card__portraits" aria-hidden="true">
        <div className="vsl-portrait vsl-portrait--massimo">
          <img src="/massimo.jpg" alt="" />
        </div>
        <div className="vsl-card__center-mark">
          <Brand compact />
        </div>
        <div className="vsl-portrait vsl-portrait--william">
          <img src="/william.jpg" alt="" />
        </div>
      </div>
      <span className="vsl-card__shade" aria-hidden="true" />
      <span className="play-button" aria-hidden="true">
        <span />
      </span>
      <div className="vsl-card__caption">
        <span>Free video breakdown</span>
        <strong>Watch before you book</strong>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <div className="shell site-header__inner">
          <a className="logo-link" href="#top" aria-label="The Method Trading home">
            <Brand />
          </a>
          <a
            className="header-cta"
            href={CALENDLY_URL}
            target="_blank"
            rel="noreferrer"
          >
            Book a call
          </a>
        </div>
      </header>

      <section className="hero" id="top">
        <span className="hero__glow" aria-hidden="true" />
        <div className="shell hero__grid">
          <div className="hero__copy reveal reveal--one">
            <p className="eyebrow"><span /> Private futures trading mentorship</p>
            <h1>
              Stop Guessing.<br />
              Start Trading<br />
              With <em>A Method.</em>
            </h1>
            <p className="hero__lead">
              Build the structure, risk rules, and discipline needed to trade
              with consistency.
            </p>
            <BookCallButton />
            <p className="call-note">
              <span>30-minute mentorship fit call</span>
              <i />
              <span>No pressure</span>
            </p>
            <div className="hero__proof">
              <span>Verified payouts</span><i />
              <span>Live mentorship</span><i />
              <span>Lifetime access</span>
            </div>
          </div>

          <div className="hero__media reveal reveal--two">
            <VslCard />
            <p className="video-note">
              {VSL_EMBED_URL
                ? "Press play to watch the complete breakdown"
                : "Start here: The Method explained in 6 minutes"}
            </p>
          </div>
        </div>
        <div className="hero__vertical" aria-hidden="true">
          Structure <i /> Execution <i /> Discipline
        </div>
      </section>

      <section className="firm-strip" aria-label="Prop firms our traders have experience with">
        <div className="shell">
          <p>Experience across leading futures prop firms</p>
          <div className="firm-strip__logos">
            {firms.map((firm) => (
              <div className="firm-logo" key={firm.name}>
                <img src={firm.logo} alt={firm.name} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <PayoutSlider />

      <section className="method section">
        <div className="shell">
          <div className="center-heading">
            <p className="eyebrow"><span /> The Method</p>
            <h2>One framework. Three things that matter.</h2>
            <p>Strip away the noise and build a process that can survive real trading.</p>
          </div>
          <div className="pillar-grid">
            <article>
              <span className="pillar-number">01</span>
              <h3>Structure</h3>
              <p>Know exactly what you are looking for before the session begins.</p>
            </article>
            <article>
              <span className="pillar-number">02</span>
              <h3>Execution</h3>
              <p>Turn a clear idea into rules you can actually follow under pressure.</p>
            </article>
            <article>
              <span className="pillar-number">03</span>
              <h3>Discipline</h3>
              <p>Protect your capital and stop one emotional decision from taking over.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="included section" id="program">
        <div className="shell">
          <div className="included__intro">
            <div className="section-heading">
              <p className="eyebrow"><span /> Inside the mentorship</p>
              <h2>Everything built around implementation.</h2>
            </div>
            <p className="lead-copy">
              This is not a course you buy and forget. It is a private environment
              designed to help you apply the process, review it, and improve it.
            </p>
          </div>
          <div className="included__list">
            {included.map((item) => (
              <article className="included-row" key={item.number}>
                <span>{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
          <div className="access-bar">
            <div><strong>3–4×</strong><span>Live sessions weekly</span></div>
            <div><strong>Daily</strong><span>Market recaps</span></div>
            <div><strong>Weekly</strong><span>Backtesting and review</span></div>
            <div><strong>Lifetime</strong><span>Mentorship access</span></div>
          </div>
        </div>
      </section>

      <section className="mentors section">
        <div className="shell">
          <div className="center-heading">
            <p className="eyebrow"><span /> Your mentors</p>
            <h2>Built by traders who know the cycle.</h2>
            <p>From inconsistency and blown accounts to rules, structure, and payouts.</p>
          </div>
          <div className="mentor-grid">
            <article className="mentor-card">
              <div className="mentor-card__photo">
                <img src="/massimo.jpg" alt="Massimo De Angelis" loading="lazy" />
              </div>
              <div className="mentor-card__copy">
                <span>Co-founder</span>
                <h3>Massimo De Angelis</h3>
                <p>Futures trader focused on execution, funded-account consistency, and building rules that hold up under pressure.</p>
                <div className="mentor-socials">
                  <a href="https://x.com/massimotrades" target="_blank" rel="noreferrer">X / @massimotrades ↗</a>
                  <a href="https://www.instagram.com/massimotrades_/" target="_blank" rel="noreferrer">IG / @massimotrades_ ↗</a>
                </div>
              </div>
            </article>
            <article className="mentor-card">
              <div className="mentor-card__photo mentor-card__photo--william">
                <img src="/william.jpg" alt="William, co-founder of The Method" loading="lazy" />
              </div>
              <div className="mentor-card__copy">
                <span>Co-founder</span>
                <h3>William</h3>
                <p>Futures trader and educator focused on simple market models, disciplined risk, and repeatable session preparation.</p>
                <div className="mentor-socials">
                  <a href="https://x.com/williamtradesnq" target="_blank" rel="noreferrer">X / @williamtradesnq ↗</a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="fit section">
        <div className="shell fit__grid">
          <div className="fit-card fit-card--yes">
            <p className="eyebrow"><span /> The Method is for you if</p>
            <ul>
              <li>You are tired of switching strategies.</li>
              <li>You want rules, feedback, and accountability.</li>
              <li>You are willing to review your own mistakes.</li>
              <li>You care more about consistency than excitement.</li>
            </ul>
          </div>
          <div className="fit-card fit-card--no">
            <p className="eyebrow"><span /> It is not for you if</p>
            <ul>
              <li>You want guaranteed payouts or overnight results.</li>
              <li>You are looking for signals without learning.</li>
              <li>You refuse to use risk limits.</li>
              <li>You are not ready to be coached honestly.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="callout section">
        <div className="shell callout__inner">
          <div>
            <p className="eyebrow"><span /> Your next step</p>
            <h2>Let&apos;s see if The Method fits what you need.</h2>
            <p>
              Book a free 30-minute call. We&apos;ll talk about where your trading is
              now, what keeps getting in the way, and whether we can genuinely help.
            </p>
          </div>
          <div className="callout__action">
            <BookCallButton />
            <p>No pressure. No obligation.</p>
          </div>
        </div>
      </section>

      <section className="faq section">
        <div className="shell faq__grid">
          <div className="section-heading">
            <p className="eyebrow"><span /> Questions</p>
            <h2>Before you book.</h2>
          </div>
          <div className="faq__list">
            {faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}<span>+</span></summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta section">
        <span className="final-cta__glow" aria-hidden="true" />
        <div className="shell final-cta__inner">
          <Brand />
          <h2>Stop collecting information.<br />Start building your process.</h2>
          <p>One honest call can show you what the next step should be.</p>
          <BookCallButton />
        </div>
      </section>

      <footer>
        <div className="shell footer__top">
          <Brand compact />
          <div className="footer__links">
            <a href="https://discord.gg/tmt" target="_blank" rel="noreferrer">Discord</a>
            <a href="https://www.instagram.com/massimotrades_/" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://x.com/massimotrades" target="_blank" rel="noreferrer">X / Twitter</a>
            <a href="https://www.youtube.com/@massimofx" target="_blank" rel="noreferrer">YouTube</a>
          </div>
        </div>
        <div className="shell footer__legal">
          <p>
            <strong>Risk disclosure:</strong> Futures trading involves substantial risk and is not suitable for every investor. The Method Trading provides educational information only and does not provide financial advice. Past performance, testimonials, and payout examples do not guarantee future results. You are solely responsible for your trading decisions and losses.
          </p>
          <p>Prop-firm names and logos are trademarks of their respective owners. Their display does not imply endorsement or affiliation.</p>
          <div><span>© 2026 The Method Trading. All rights reserved.</span><span>Process. Structure. Execution.</span></div>
        </div>
      </footer>

      <a
        className="mobile-book"
        href={CALENDLY_URL}
        target="_blank"
        rel="noreferrer"
      >
        Book your free call <Arrow />
      </a>
    </main>
  );
}
