import React from "react";
import Reveal from "./Reveal.jsx";

// Filenames as provided — place these in /public.
const LOGOS = [
  { file: "tpt.png", alt: "TPT" },
  { file: "topstep.webp", alt: "Topstep" },
  { file: "alpha.webp", alt: "Alpha" },
  { file: "lucid.webp", alt: "Lucid" },
  { file: "tradeify.webp", alt: "Tradeify" },
];

export default function TrustedFirms() {
  // Repeat the set enough times that each half of the track is wider than any
  // viewport — otherwise the loop reset shows an empty gap. Must stay an even
  // number of copies so the -50% keyframe lands exactly on a repeat boundary.
  const COPIES = 8;
  const track = Array.from({ length: COPIES }, () => LOGOS).flat();

  return (
    <section id="firms" className="firms">
      <div className="wrap">
        <Reveal>
          <div className="section-head center">
            <span className="eyebrow">Trusted By</span>
            <h2>Firms We Trust</h2>
          </div>
        </Reveal>
      </div>

      <Reveal delay={100}>
        <div className="firms-marquee">
          <div className="firms-track">
            {track.map((logo, i) => (
              <div className="firm-logo" key={`${logo.file}-${i}`}>
                <img src={`/${logo.file}`} alt={logo.alt} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
