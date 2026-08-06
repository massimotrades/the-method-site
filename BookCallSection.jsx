import React from "react";
import { InlineWidget } from "react-calendly";
import { useBooking, CALENDLY_URL } from "../context/BookingContext.jsx";

const Check = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M13 4L6 11L3 8" stroke="#2f8fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function BookCallSection() {
  const { status, openBooking } = useBooking();
  const qualified = status === "qualified";

  return (
    <section id="book-a-call" className="book-section">
      <div className="wrap">
        <div className="book-grid">
          <div className="book-copy">
            <span className="eyebrow">Book a Call</span>
            <h2 style={{ fontSize: "clamp(1.8rem, 3.4vw, 2.4rem)", marginTop: 16 }}>
              Let's see if it's a fit
            </h2>
            <p style={{ marginTop: 16, fontSize: 16.5 }}>
              I keep mentorship spots limited so every trader gets real 1:1 time with me.
              Start with a short application — it takes about 2 minutes — so the call is
              focused on your actual situation instead of a generic pitch.
            </p>
            <ul>
              <li>
                <Check />
                <span>2-minute application so I understand your experience and goals</span>
              </li>
              <li>
                <Check />
                <span>20-minute call, no pressure, no obligation</span>
              </li>
              <li>
                <Check />
                <span>You'll know by the end of the call if it's a fit — either way</span>
              </li>
            </ul>
          </div>

          <div className="book-panel">
            {!qualified ? (
              <div className="book-panel-gate">
                <div className="lock-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <rect x="5" y="11" width="14" height="9" rx="2" stroke="currentColor" strokeWidth="2" />
                    <path d="M8 11V8a4 4 0 018 0v3" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </div>
                <h3>Application required</h3>
                <p>
                  Complete a short screening form to unlock the calendar. This makes sure
                  calls go to serious, qualified traders.
                </p>
                <button className="btn btn-primary btn-block" onClick={openBooking}>
                  Start Application →
                </button>
              </div>
            ) : (
              <div className="calendly-wrap">
                <InlineWidget
                  url={CALENDLY_URL}
                  styles={{ height: "700px", width: "100%" }}
                />
              </div>
            )}

            <div className={`book-panel-status ${qualified ? "qualified" : ""}`}>
              <span className="dot" />
              <span>
                {qualified
                  ? "Application received — calendar unlocked"
                  : "Status: application not yet started"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
