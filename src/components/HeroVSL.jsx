import React from "react";
import Reveal from "./Reveal.jsx";

export default function HeroVSL() {
  return (
    <section className="hero-vsl" id="who-is-will">
      <div className="hero-glow" aria-hidden="true" />
      <div className="wrap">
        <Reveal>
          <span className="eyebrow">Free Training · The Method Trading</span>
        </Reveal>
        <Reveal delay={90}>
          <h1>
            The Only Mentorship You'll Ever Need To Finally Get 6-Figure Funded And To Become Profitable. <span className="guaranteed">GUARANTEED.</span>
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
            <wistia-player
              media-id="zx08e8p3o1"
              aspect="1.7777777777777777"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
