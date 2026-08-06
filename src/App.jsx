import React from "react";
import { BookingProvider } from "./context/BookingContext.jsx";
import Header from "./components/Header.jsx";
import UrgencyBar from "./components/UrgencyBar.jsx";
import Hero from "./components/Hero.jsx";
import GetStarted from "./components/GetStarted.jsx";
import ProofStrip from "./components/ProofStrip.jsx";
import Proof from "./components/Proof.jsx";
import About from "./components/About.jsx";
import SessionMap from "./components/SessionMap.jsx";
import WhoItsFor from "./components/WhoItsFor.jsx";
import Inclusions from "./components/Inclusions.jsx";
import FAQ from "./components/FAQ.jsx";
import FinalCTA from "./components/FinalCTA.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <BookingProvider>
      <UrgencyBar />
      <Header />
      <Hero />
      <GetStarted />
      <ProofStrip />
      <Proof />
      <About />
      <SessionMap />
      <WhoItsFor />
      <Inclusions />
      <FAQ />
      <FinalCTA />
      <Footer />
    </BookingProvider>
  );
}
