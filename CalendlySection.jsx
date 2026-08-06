import React from "react";
import { InlineWidget } from "react-calendly";
import Reveal from "./Reveal.jsx";
import { useBooking, CALENDLY_URL } from "../context/BookingContext.jsx";

export default function CalendlySection() {
  const { status, openBooking } = useBooking();
  const qualified = status === "qualified";

  return (
    <section id="calendly" className="calendly-section">
      <div className="wrap">
        <Reveal>
          <div className="section-head center">
            <span className="eyebrow">Almost There</span>
            <h2>Choose A Time That Works For You</h2>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="glass-panel calendly-panel">
            {!qualified ? (
              <div className="calendly-gate">
                <div className="lock-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <rect x="5" y="11" width="14" height="9" rx="2" stroke="currentColor" strokeWidth="2" />
                    <path d="M8 11V8a4 4 0 018 0v3" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </div>
                <h3>Complete the quick application to unlock the calendar</h3>
                <p>
                  It takes about 2 minutes and makes sure your call is prepared around your
                  actual situation.
                </p>
                <button className="btn-gold" onClick={openBooking}>
                  Start Application
                </button>
              </div>
            ) : (
              <div className="calendly-wrap">
                <InlineWidget url={CALENDLY_URL} styles={{ height: "700px", width: "100%" }} />
              </div>
            )}

            <div className={`panel-status ${qualified ? "qualified" : ""}`}>
              <span className="dot" />
              <span>
                {qualified
                  ? "Application received — calendar unlocked"
                  : "Application not yet started"}
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
