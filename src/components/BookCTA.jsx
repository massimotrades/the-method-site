import React from "react";
import Reveal from "./Reveal.jsx";
import { useBooking } from "../context/BookingContext.jsx";

export default function BookCTA() {
  const { openBooking } = useBooking();

  return (
    <section className="book-cta">
      <div className="wrap">
        <Reveal>
          <p className="cta-kicker">Ready to see if it's a fit?</p>
        </Reveal>
        <Reveal delay={100}>
          <button className="btn-gold btn-gold-xl" onClick={openBooking}>
            Book Your Strategy Call
          </button>
        </Reveal>
        <Reveal delay={200}>
          <p className="cta-microcopy">
            Free 20-minute call · Quick application first · Limited seats
          </p>
        </Reveal>
      </div>
    </section>
  );
}
