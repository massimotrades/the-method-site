import React from "react";
import { useBooking } from "../context/BookingContext.jsx";

export default function Header() {
  const { openBooking } = useBooking();

  return (
    <header className="site-header">
      <div className="wrap">
        <div className="logo">
          <span className="logo-mark">W</span>
          William NQ Mentorship
        </div>
        <nav className="hotbar">
          <a href="#who-is-will">Who is Will?</a>
          <a href="#payouts">Payouts</a>
          <a href="#results">Testimonials</a>
          <a href="#socials">Socials</a>
        </nav>
        <button className="btn-gold btn-gold-sm" onClick={openBooking}>
          Book a Call
        </button>
      </div>
    </header>
  );
}
