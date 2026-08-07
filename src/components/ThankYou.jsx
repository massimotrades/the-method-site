import React from "react";
import Reveal from "./Reveal.jsx";

// Self-hosted video. Put the file at public/post-vsl.mp4 (served from the
// site root as /post-vsl.mp4 once deployed).
const POST_VSL_SRC = "/post-vsl.mp4";

// TODO: Paste your real Discord invite link here. Leave empty ("") to hide the button.
const DISCORD_INVITE_URL = "";

const checklist = [
  { title: "What happens next", body: "You'll get a confirmation email with your call details. The call is 20 minutes, on video." },
  { title: "How to prepare", body: "Have your recent trading history in mind — what you trade, your sizing, and where you keep getting stuck." },
  { title: "Why you must attend", body: "Seats are limited and no-shows give up their spot. If your time no longer works, reschedule from the confirmation email instead of missing it." },
  { title: "Check your email", body: "Your confirmation and calendar invite are already on the way. Check spam if you don't see them in a few minutes." },
];

export default function ThankYou() {
  const goHome = (e) => {
    e.preventDefault();
    window.location.hash = "";
    window.scrollTo(0, 0);
  };

  return (
    <div className="thankyou-page">
      <header className="ty-header">
        <div className="wrap">
          <div className="logo">
            <span className="logo-mark">W</span>
            William NQ Mentorship
          </div>
        </div>
      </header>

      <section className="thankyou">
        <div className="hero-glow" aria-hidden="true" />
        <div className="wrap">
          <Reveal>
            <span className="eyebrow">Booking Confirmed</span>
          </Reveal>
          <Reveal delay={90}>
            <h1>
              You're Officially <em>Booked</em>.
            </h1>
          </Reveal>
          <Reveal delay={180}>
            <p className="lede">Watch this short video before your call — it covers everything you need to know.</p>
          </Reveal>

          <Reveal delay={270}>
            <div className="vsl-frame">
              <video
                src={POST_VSL_SRC}
                controls
                playsInline
                preload="metadata"
                title="Before your call — what to expect"
              />
            </div>
          </Reveal>

          <div className="ty-checklist">
            {checklist.map((item, i) => (
              <Reveal key={item.title} delay={(i % 2) * 100}>
                <div className="glass-card ty-card">
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            {DISCORD_INVITE_URL ? (
              <a className="btn-gold no-pulse" href={DISCORD_INVITE_URL} target="_blank" rel="noreferrer">
                Join The Discord
              </a>
            ) : (
              <div className="glass-card ty-card ty-placeholder">
                [Add your Discord invite link in ThankYou.jsx to show a "Join The Discord" button here]
              </div>
            )}
          </Reveal>

          <Reveal delay={100}>
            <p className="ty-back">
              <a href="#" onClick={goHome}>← Back to the main page</a>
            </p>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
