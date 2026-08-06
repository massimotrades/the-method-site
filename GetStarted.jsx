import React from "react";
import { InlineWidget } from "react-calendly";
import { useBooking, CALENDLY_URL } from "../context/BookingContext.jsx";

// Replace with your real hosted VSL: YouTube (unlisted), Vimeo, or Wistia embed URL.
const VIDEO_EMBED_URL = "https://www.youtube.com/embed/dQw4w9WgXcQ";

const Check = () => (
  <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
    <path d="M13 4L6 11L3 8" stroke="#2f8fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function GetStarted() {
  const { status, openBooking } = useBooking();
  const qualified = status === "qualified";

  return (
    <section id="book-a-call" className="get-started">
      <div className="wrap">
        <div className="section-head" style={{ margin: "0 auto 56px", textAlign: "center" }}>
          <span className="eyebrow" style={{ justifyContent: "center" }}>
            Get Started
          </span>
          <h2>Two steps to your strategy call</h2>
          <p style={{ margin: "16px auto 0" }}>
            Watch a short overview, then apply for a call. Spots are limited so every trader
            gets real 1:1 time with me.
          </p>
          <p className="hero-microcopy" style={{ marginTop: 14 }}>
            2-minute application · 20-minute call · No obligation
          </p>
        </div>

        <div className="step-block" id="vsl">
          <div className="step-label">
            <span className="step-num-badge">1</span>
            <span className="step-label-text">Step 1 of 2 — Watch the overview</span>
          </div>
          <div className="vsl-frame">
            <iframe
              src={VIDEO_EMBED_URL}
              title="William NQ Mentorship — overview video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>

        <div className="step-connector" />

        <div className="step-block">
          <div className="step-label">
            <span className="step-num-badge">2</span>
            <span className="step-label-text">Step 2 of 2 — Book your strategy call</span>
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
                  Fill out a short screening form to unlock the calendar. I get your basic
                  info the moment you submit — even if you don't end up booking a slot.
                </p>
                <button className="btn btn-primary btn-block" onClick={openBooking}>
                  Fill Out Application →
                </button>
                <p className="book-panel-hint">
                  <Check /> Takes about 2 minutes
                </p>
              </div>
            ) : (
              <div className="calendly-wrap">
                <InlineWidget url={CALENDLY_URL} styles={{ height: "700px", width: "100%" }} />
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
