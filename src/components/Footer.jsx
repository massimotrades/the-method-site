import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-row">
          <span>© {new Date().getFullYear()} William NQ Mentorship. All rights reserved.</span>
        </div>
        <p className="risk-disclosure">
          Trading futures involves substantial risk of loss and is not suitable for all
          investors. Past performance, hypothetical or actual, is not necessarily indicative of
          future results. Nothing on this website constitutes financial, investment, or trading
          advice. William NQ Mentorship is a mentorship and education service, not a licensed
          financial advisor or broker-dealer.
        </p>
      </div>
    </footer>
  );
}
