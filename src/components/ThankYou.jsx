import React from "react";
import Reveal from "./Reveal.jsx";

// TODO: Replace with your real post-VSL video (what happens next / how to prepare).
const POST_VSL_EMBED_URL = "https://player.vimeo.com/video/1216413015?fl=pl&fe=cm";

// TODO: Paste your real Discord invite link here. Leave empty ("") to hide the button.
const DISCORD_INVITE_URL = "https://discord.gg/A9ZWJZgjZt";

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
              <iframe
                src={POST_VSL_EMBED_URL}
                title="Before your call — what to expect"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
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
              <a className="btn-gold" href={DISCORD_INVITE_URL} target="_blank" rel="noreferrer">
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
