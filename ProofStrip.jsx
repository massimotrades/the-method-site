import React from "react";

// TODO: Replace the bracketed values with your real, verifiable numbers before publishing.
const stats = [
  { num: "[X]+ yrs", label: "Trading NQ futures full-time" },
  { num: "[$X]+", label: "Verified prop firm payouts" },
  { num: "1:1", label: "Private mentorship, not a group chat" },
  { num: "20 min", label: "Strategy call to see if it's a fit" },
];

export default function ProofStrip() {
  return (
    <div className="proof-strip">
      <div className="wrap">
        {stats.map((s) => (
          <div className="proof-item" key={s.label}>
            <div className="num">{s.num}</div>
            <div className="label">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
