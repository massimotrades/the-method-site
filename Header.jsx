import React from "react";
import { useBooking } from "../context/BookingContext.jsx";

// Minimal header — no nav menu, one CTA, per the single-journey funnel.
export default function Header() {
  const { openBooking } = useBooking();

  return (
    <header className="site-header">
      <div className="wrap">
        <div className="logo">
          <span className="logo-mark">W</span>
          William NQ Mentorship
        </div>
        <button className="btn-gold btn-gold-sm" onClick={openBooking}>
          Book a Call
        </button>
      </div>
    </header>
  );
}
