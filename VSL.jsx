import React from "react";
import { useBooking } from "../context/BookingContext.jsx";

// Replace VIDEO_EMBED_URL with your hosted VSL: YouTube (unlisted), Vimeo, or Wistia embed URL.
const VIDEO_EMBED_URL = "https://www.youtube.com/embed/dQw4w9WgXcQ";

export default function VSL() {
  const { openBooking } = useBooking();

  return (
    <section id="vsl">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Before You Book</span>
          <h2>Watch this before your call</h2>
          <p>
            A few minutes on how I trade NQ, why specializing in one instrument builds skills
            that transfer everywhere else, and what a mentorship cycle with me actually looks
            like week to week.
          </p>
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

        <div className="vsl-caption">
          <span>Sessions, structure, execution, psychology</span>
          <button
            className="btn btn-ghost"
            style={{ padding: "10px 18px" }}
            onClick={openBooking}
          >
            Ready now? Book a call →
          </button>
        </div>
      </div>
    </section>
  );
}
