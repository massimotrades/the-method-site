import React from "react";
import Reveal from "./Reveal.jsx";
import { useBooking } from "../context/BookingContext.jsx";

export default function FinalCTA() {
  const { openBooking } = useBooking();

  return (
    <section className="final-cta">
      <div className="hero-glow" aria-hidden="true" />
      <div className="wrap">
        <Reveal>
          <h2>
            Ready To Stop <em>Guessing</em>?
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="lede">
            Apply for a free strategy call and find out if the mentorship is a fit for you.
          </p>
        </Reveal>
        <Reveal delay={200}>
          <button className="btn-gold btn-gold-xl" onClick={openBooking}>
            Book Your Strategy Call
          </button>
        </Reveal>
      </div>
    </section>
  );
}
