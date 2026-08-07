import React from "react";
import Reveal from "./Reveal.jsx";

// TODO: Replace with your real hosted VSL — YouTube (unlisted), Vimeo, or Wistia embed URL.
const VIDEO_EMBED_URL = "https://www.youtube.com/embed/dQw4w9WgXcQ";

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
            Watch this free training to discover the exact framework we use to help traders
            become consistently profitable.
          </p>
        </Reveal>
        <Reveal delay={270}>
          <div className="vsl-frame">
            <iframe
              src={VIDEO_EMBED_URL}
              title="William NQ Mentorship — free training"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
