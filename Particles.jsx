import React from "react";

// Deterministic "random" so it doesn't reshuffle on every render.
const DOTS = Array.from({ length: 16 }, (_, i) => ({
  left: (i * 61) % 100,
  size: 3 + ((i * 7) % 5),
  duration: 16 + ((i * 5) % 14),
  delay: (i * 1.7) % 14,
}));

export default function Particles() {
  return (
    <div className="particles" aria-hidden="true">
      {DOTS.map((d, i) => (
        <span
          key={i}
          className="particle"
          style={{
            left: `${d.left}%`,
            width: d.size,
            height: d.size,
            animationDuration: `${d.duration}s`,
            animationDelay: `${d.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
