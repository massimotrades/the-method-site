import React, { createContext, useCallback, useContext, useState } from "react";
import { createPopup } from "@typeform/embed";
import "@typeform/embed/build/css/popup.css";

// ---- Update these two links if they ever change ----
export const TYPEFORM_URL = "https://form.typeform.com/to/oMTi7RzG";
export const CALENDLY_URL = "https://calendly.com/massimodeangelis8/30min";
// ------------------------------------------------------

const BookingContext = createContext(null);

export function BookingProvider({ children }) {
  // "idle" -> button not yet clicked
  // "screening" -> typeform popup open
  // "qualified" -> typeform submitted, calendly unlocked
  const [status, setStatus] = useState("idle");

  const openBooking = useCallback(() => {
    setStatus("screening");

    const { open, close } = createPopup(TYPEFORM_URL, {
      size: 90,
      hideHeaders: true,
      hideFooter: true,
      onSubmit: () => {
        close();
        setStatus("qualified");
        // Give the popup a beat to close before we scroll/reveal Calendly
        window.setTimeout(() => {
          const target = document.getElementById("book-a-call");
          if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 350);
      },
      onClose: () => {
        // Only reset to idle if they closed without submitting
        setStatus((prev) => (prev === "qualified" ? "qualified" : "idle"));
      },
    });

    open();
  }, []);

  return (
    <BookingContext.Provider value={{ status, openBooking }}>
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const ctx = useContext(BookingContext);
  if (!ctx) throw new Error("useBooking must be used inside a BookingProvider");
  return ctx;
}
