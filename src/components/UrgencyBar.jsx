import React from "react";

const MESSAGE = "PRIVATE MENTORSHIP · LIMITED SEATS EACH MONTH · APPLICATION REQUIRED TO BOOK A CALL";

export default function UrgencyBar() {
  return (
    <div className="urgency-bar" aria-hidden="true">
      <div className="urgency-track">
        {[0, 1].map((i) => (
          <span key={i}>
            <span className="urgency-dot" />
            {MESSAGE}
          </span>
        ))}
      </div>
    </div>
  );
}
