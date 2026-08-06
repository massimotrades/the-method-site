import React from "react";
import { useBooking } from "../context/BookingContext.jsx";

export default function FinalCTA() {
  const { openBooking } = useBooking();

  return (
    <section className="final-cta">
      <div className="wrap">
        <span className="eyebrow" style={{ justifyContent: "center" }}>
          Limited Mentorship Seats
        </span>
        <h2>Trade one instrument like you actually know it.</h2>
        <p>
          If you're ready to stop spreading yourself across every ticker and start
          specializing, apply for a strategy call today.
        </p>
        <button className="btn btn-primary" onClick={openBooking}>
          Book a Strategy Call →
        </button>
      </div>
    </section>
  );
}
