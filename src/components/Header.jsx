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
        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#why-nq">Why NQ</a>
          <a href="#proof">Reviews</a>
          <a href="#inclusions">What's Included</a>
          <a href="#faq">FAQ</a>
        </nav>
        <button className="btn btn-primary" onClick={openBooking}>
          Book a Call
        </button>
      </div>
    </header>
  );
}
