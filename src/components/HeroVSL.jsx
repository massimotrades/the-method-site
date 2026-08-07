import React from "react";
import Reveal from "./Reveal.jsx";

// Self-hosted video. Put the file at public/vsl.mp4 (i.e. it lives at
// yoursite.com/vsl.mp4 once deployed — Vite serves everything in /public
// from the site root). Rename here if you use a different filename.
const VIDEO_SRC = "/vsl.mp4";

export default function HeroVSL() {
  return (
    <section className="hero-vsl">
      <div className="hero-glow" aria-hidden="true" />
      <div className="wrap">
        <Reveal>
          <span className="eyebrow">Free Training · William NQ Mentorship</span>
        </Reveal>
        <Reveal delay={90}>
          <h1>
            Trading Doesn't Have To Be <em>Guesswork</em>.
          </h1>
        </Reveal>
        <Reveal delay={180}>
          <p className="lede">
            Watch this 5-minute video on how it made me $400k.
          </p>
        </Reveal>
        <Reveal delay={270}>
          <div className="vsl-frame">
            <video
              src={VIDEO_SRC}
              controls
              playsInline
              preload="metadata"
              title="William NQ Mentorship — free training"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}