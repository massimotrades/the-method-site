import React from "react";
import { useBooking } from "../context/BookingContext.jsx";

// Hand-placed candles describing a session building toward a high, purely
// illustrative — not a real historical NQ print.
const candles = [
  { x: 20, wick: [118, 148], body: [126, 140], bull: true },
  { x: 61, wick: [116, 150], body: [122, 140], bull: false },
  { x: 102, wick: [122, 154], body: [128, 146], bull: false },
  { x: 143, wick: [104, 138], body: [110, 130], bull: true },
  { x: 184, wick: [80, 116], body: [86, 108], bull: true },
  { x: 225, wick: [58, 92], body: [64, 84], bull: true },
  { x: 266, wick: [64, 92], body: [70, 88], bull: false },
  { x: 307, wick: [38, 70], body: [44, 62], bull: true },
  { x: 348, wick: [34, 58], body: [40, 52], bull: true },
  { x: 389, wick: [48, 78], body: [54, 70], bull: false },
  { x: 430, wick: [42, 66], body: [48, 60], bull: true },
];

export default function Hero() {
  const { openBooking } = useBooking();

  return (
    <section className="hero">
      <div className="wrap">
        <div className="hero-copy">
          <span className="eyebrow">Private Futures Mentorship · NQ Specialist</span>
          <h1>
            Trade futures like a specialist,
            <br />
            not a <em>generalist</em>.
          </h1>
          <p className="lede">
            I mentor futures traders 1:1, built around the instrument I know better than any
            other — the Nasdaq-100 (NQ). You'll learn how I read its sessions, structure, and
            volatility, then apply that same discipline to any futures contract you trade.
          </p>

          <div className="hero-cta-row">
            <button className="btn btn-primary" onClick={openBooking}>
              Book a Strategy Call →
            </button>
            <a className="btn btn-ghost" href="#vsl">
              Watch the Overview
            </a>
          </div>
          <p className="hero-microcopy">
            Free 20-minute call · Limited mentorship seats · No obligation
          </p>
        </div>

        <div className="hero-chart" aria-hidden="true">
          <div className="hero-chart-head">
            <span className="pair">NQ · 5M</span>
            <span>NEW YORK SESSION</span>
          </div>
          <svg viewBox="0 0 480 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            {[40, 80, 120, 160].map((y) => (
              <line key={y} x1="0" y1={y} x2="480" y2={y} stroke="#1b2036" strokeWidth="1" />
            ))}

            <g className="hero-zone">
              <rect x="292" y="26" width="106" height="42" rx="4" fill="rgba(242,184,75,0.10)" stroke="#f2b84b" strokeWidth="1" strokeDasharray="3 3" />
              <text x="345" y="20" textAnchor="middle" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#f2b84b">
                SESSION HIGH
              </text>
            </g>

            {candles.map((c, i) => (
              <g key={c.x} className="candle" style={{ animationDelay: `${i * 65}ms` }}>
                <line
                  x1={c.x + 9}
                  x2={c.x + 9}
                  y1={c.wick[0]}
                  y2={c.wick[1]}
                  stroke={c.bull ? "#34c778" : "#ef5a5a"}
                  strokeWidth="1.5"
                />
                <rect
                  x={c.x}
                  y={c.body[0]}
                  width="18"
                  height={Math.max(c.body[1] - c.body[0], 2)}
                  fill={c.bull ? "#34c778" : "#ef5a5a"}
                  rx="1.5"
                />
              </g>
            ))}

            <g className="hero-zone" style={{ animationDelay: "1.3s" }}>
              <line x1="184" y1="62" x2="184" y2="80" stroke="#2f8fff" strokeWidth="1.5" />
              <circle cx="184" cy="60" r="3" fill="#2f8fff" />
              <text x="184" y="48" textAnchor="middle" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#2f8fff">
                ENTRY
              </text>
            </g>
          </svg>
          <div className="hero-chart-foot">Illustrative structure — not a live or historical chart</div>
        </div>
      </div>
    </section>
  );
}
