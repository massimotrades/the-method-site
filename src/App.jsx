import React, { useEffect, useState } from "react";
import { useCalendlyEventListener } from "react-calendly";
import { BookingProvider } from "./context/BookingContext.jsx";
import Particles from "./components/Particles.jsx";
import Header from "./components/Header.jsx";
import HeroVSL from "./components/HeroVSL.jsx";
import BookCTA from "./components/BookCTA.jsx";
import CalendlySection from "./components/CalendlySection.jsx";
import PayoutCarousel from "./components/PayoutCarousel.jsx";
import SocialProof from "./components/SocialProof.jsx";
import Community from "./components/Community.jsx";
import FAQ from "./components/FAQ.jsx";
import FinalCTA from "./components/FinalCTA.jsx";
import Footer from "./components/Footer.jsx";
import ThankYou from "./components/ThankYou.jsx";

function Landing() {
  return (
    <>
      <Header />
      <main>
        <HeroVSL />
        <BookCTA />
        <CalendlySection />
        <PayoutCarousel />
        <SocialProof />
        <Community />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  const [booked, setBooked] = useState(
    () => window.location.hash === "#thank-you"
  );

  useEffect(() => {
    const onHash = () => {
      const b = window.location.hash === "#thank-you";
      setBooked(b);
      if (b) window.scrollTo(0, 0);
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  // When Calendly confirms the booking, move to the Thank You page.
  useCalendlyEventListener({
    onEventScheduled: () => {
      window.location.hash = "thank-you";
    },
  });

  return (
    <BookingProvider>
      <Particles />
      <div className="site">
        {booked ? (
          <>
            <ThankYou />
            <Footer />
          </>
        ) : (
          <Landing />
        )}
      </div>
    </BookingProvider>
  );
}
