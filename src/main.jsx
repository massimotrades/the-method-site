import React, { useMemo, useRef } from "react";
import ReactDOM from "react-dom/client";
import { motion } from "framer-motion";
import "./index.css";

const proofs = [
  { title: "$88,998+", subtitle: "Lifetime payouts", name: "William R.", tone: "gold", image: "/payouts/payout-1.jpg" },
  { title: "$3,000", subtitle: "Payout certificate", name: "Massimo D.", tone: "blue", image: "/payouts/payout-2.webp" },
  { title: "$1,293", subtitle: "Payout certificate", name: "Massimo D.", tone: "blue", image: "/payouts/payout-3.webp" },
  { title: "$1,332", subtitle: "Payout certificate", name: "Massimo D.", tone: "blue", image: "/payouts/payout-4.webp" },
  { title: "$1,304", subtitle: "Payout certificate", name: "Massimo D.", tone: "blue", image: "/payouts/payout-5.webp" },
  { title: "$41,372", subtitle: "Wise payment received", name: "TAKEPROFITTRADER LLC", tone: "green", image: "/payouts/payout-6.jpg" },
  { title: "$20,000+", subtitle: "Prop firm payouts", name: "Multiple accounts", tone: "silver", image: "/payouts/payout-7.png" },
  { title: "$22,000+", subtitle: "Payout table", name: "Verified accounts", tone: "silver", image: "/payouts/payout-8.png" },
];

const stats = [
  { icon: "growth", big: "6 Figures+", small: "Verified Payouts" },
  { icon: "radio", big: "2x", small: "Live Trading / Week" },
  { icon: "users", big: "500+", small: "Active Members" },
  { icon: "target", big: "90%+", small: "Funded Success Rate" },
  { icon: "headphones", big: "24/7", small: "Community Support" },
];

const navItems = [
  { href: "#plans", label: "Plans" },
  { href: "#who-we-are", label: "Who We Are" },
  { href: "#prop-firms", label: "Prop Firms" },
  { href: "#socials", label: "Socials" },
];

const selfTests = [
  { name: "proofs exist", pass: proofs.length >= 6 },
  { name: "stats exist", pass: stats.length === 5 },
  { name: "nav has discord separated", pass: navItems.every((item) => item.label !== "Join Discord") },
];

function Icon({ name, className = "" }) {
const common = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 18,
  height: 18,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  };

  const icons = {
    arrow: (
      <svg {...common}><path d="M5 12h14" /><path d="m13 5 7 7-7 7" /></svg>
    ),
    book: (
      <svg {...common}><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5z" /><path d="M8 6h8" /><path d="M8 10h8" /></svg>
    ),
    building: (
      <svg {...common}><path d="M3 21h18" /><path d="M5 21V7l7-4 7 4v14" /><path d="M9 21v-6h6v6" /><path d="M9 9h.01" /><path d="M15 9h.01" /><path d="M9 12h.01" /><path d="M15 12h.01" /></svg>
    ),
    chart: (
      <svg {...common}><path d="M3 3v18h18" /><path d="m7 15 4-4 3 3 5-7" /><path d="M19 7v5h-5" /></svg>
    ),
    growth: (
      <svg {...common}><path d="M3 20h18" /><path d="M5 17V9" /><path d="M10 17V5" /><path d="M15 17v-7" /><path d="M20 17V3" /><path d="m4 10 5-5 5 5 6-7" /></svg>
    ),
    radio: (
      <svg {...common}><path d="M8.5 8.5a5 5 0 0 0 0 7" /><path d="M5.5 5.5a9 9 0 0 0 0 13" /><path d="M15.5 8.5a5 5 0 0 1 0 7" /><path d="M18.5 5.5a9 9 0 0 1 0 13" /><circle cx="12" cy="12" r="1" /></svg>
    ),
    users: (
      <svg {...common}><path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="10" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
    ),
    target: (
      <svg {...common}><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /><path d="m22 2-7 7" /><path d="M14 2h8v8" /></svg>
    ),
    headphones: (
      <svg {...common}><path d="M3 18v-6a9 9 0 0 1 18 0v6" /><path d="M21 19a2 2 0 0 1-2 2h-1v-8h3z" /><path d="M3 19a2 2 0 0 0 2 2h1v-8H3z" /></svg>
    ),
  };

  return icons[name] || icons.chart;
}

function DiscordIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 127.14 96.36" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M107.7 8.07A105.15 105.15 0 0 0 81.47 0a72.06 72.06 0 0 0-3.36 6.83A97.68 97.68 0 0 0 49 6.83A72.37 72.37 0 0 0 45.64 0A105.89 105.89 0 0 0 19.39 8.09C2.79 32.65-1.71 56.6.54 80.21A105.73 105.73 0 0 0 32.71 96.36a77.7 77.7 0 0 0 6.89-11.11 68.42 68.42 0 0 1-10.85-5.18c.91-.66 1.8-1.34 2.66-2a75.57 75.57 0 0 0 64.32 0c.87.71 1.76 1.39 2.66 2a68.68 68.68 0 0 1-10.87 5.19 77 77 0 0 0 6.89 11.1A105.25 105.25 0 0 0 126.6 80.22C129.24 52.84 122.09 29.11 107.7 8.07ZM42.45 65.69C36.18 65.69 31 60 31 53s5-12.74 11.43-12.74S54 46 53.89 53 48.84 65.69 42.45 65.69Zm42.24 0C78.41 65.69 73.25 60 73.25 53s5-12.74 11.44-12.74S96.23 46 96.12 53 91.08 65.69 84.69 65.69Z"
      />
    </svg>
  );
}

function MethodLogo() {
  return (
    <div className="flex items-center gap-5 md:gap-6">
      <svg
        viewBox="0 0 203 120"
        className="w-24 overflow-visible drop-shadow-[0_0_24px_rgba(0,119,255,.35)] md:w-32"
        aria-label="The Method Trading mark"
      >
        <defs>
          <linearGradient id="realMethodBlue" x1="0" y1="120" x2="203" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#172583" />
            <stop offset="0.48" stopColor="#0874ff" />
            <stop offset="1" stopColor="#72dcff" />
          </linearGradient>
        </defs>

        <path fill="url(#realMethodBlue)" d="M 179 2 L 141 34 L 148 33 L 149 36 L 93 94 L 74 79 L 64 90 L 66 96 L 70 96 L 92 117 L 95 116 L 179 28 L 179 18 L 184 17 L 179 16 Z" />
        <path fill="url(#realMethodBlue)" d="M 115 59 L 84 29 L 15 102 L 5 110 L 2 116 L 28 116 L 84 55 L 87 55 L 103 71 Z" />
        <path fill="url(#realMethodBlue)" d="M 179 38 L 171 42 L 171 45 L 164 53 L 164 116 L 179 116 Z" />
      </svg>

      <div className="flex flex-col justify-center">
        <div
          className="text-[28px] font-black leading-none tracking-[.16em] text-white md:text-[44px]"
          style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
        >
          THE METHOD
        </div>

        <div
          className="mt-3 pl-[4px] text-[11px] font-normal leading-none tracking-[.55em] text-blue-300 md:text-[18px]"
          style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
        >
          TRADING
        </div>
      </div>
    </div>
  );
}

function CandleBackground() {
  const candles = [
    [38, 56, 68], [41, 50, 92], [44, 46, 78], [47, 40, 116], [50, 44, 88], [53, 36, 135],
    [56, 31, 106], [59, 38, 76], [62, 33, 124], [65, 27, 150], [68, 22, 104], [71, 19, 135],
    [74, 27, 92], [77, 32, 140], [80, 24, 112], [83, 19, 156], [86, 15, 118], [89, 21, 150],
    [92, 12, 136], [95, 7, 174],
  ];

  return (
    <div className="absolute inset-0 overflow-hidden bg-[#01040b]">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,112,255,.07)_1px,transparent_1px),linear-gradient(0deg,rgba(0,112,255,.06)_1px,transparent_1px)] bg-[size:62px_62px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_28%,rgba(0,119,255,.22),transparent_38%),radial-gradient(circle_at_18%_28%,rgba(0,119,255,.10),transparent_28%)]" />
      <motion.div
        className="absolute inset-0 opacity-50"
        animate={{ x: [0, -50, 0], y: [0, 20, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(22,130,255,.35)_1px,transparent_2px)] bg-[size:84px_84px]" />
      </motion.div>
      <div className="absolute bottom-[34%] left-[34%] right-0 top-[8%]">
        <svg viewBox="0 0 900 420" className="absolute inset-0 h-full w-full opacity-80" preserveAspectRatio="none">
          <path d="M0 335 C95 280 140 240 220 262 C295 284 330 120 410 152 C470 175 480 285 555 205 C640 115 680 100 750 170 C812 232 825 92 900 62" fill="none" stroke="rgba(0,112,255,.25)" strokeWidth="2" />
          <path d="M0 335 C95 280 140 240 220 262 C295 284 330 120 410 152 C470 175 480 285 555 205 C640 115 680 100 750 170 C812 232 825 92 900 62" fill="none" stroke="rgba(92,198,255,.7)" strokeWidth="1" />
        </svg>
        {candles.map(([left, top, height], i) => (
          <motion.div
            key={`${left}-${top}-${height}`}
            className="absolute w-4 rounded-[3px] bg-gradient-to-b from-cyan-200 via-blue-500 to-blue-800 shadow-[0_0_24px_rgba(0,119,255,.75)]"
            style={{ left: `${left}%`, top: `${top}%`, height }}
            animate={{ y: [0, i % 2 ? -8 : 8, 0], opacity: [0.75, 1, 0.78] }}
            transition={{ duration: 4.5 + (i % 5), repeat: Infinity, ease: "easeInOut", delay: i * 0.08 }}
          >
            <div className="absolute bottom-[-40px] left-1/2 top-[-40px] w-[2px] -translate-x-1/2 bg-gradient-to-b from-transparent via-blue-300 to-transparent" />
          </motion.div>
        ))}
      </div>
      <div className="absolute right-8 top-[19%] grid gap-5 text-sm font-bold text-blue-400/75">
        <span>17,750.00</span><span>17,700.00</span><span>17,650.00</span><span className="bg-blue-500 px-2 py-1 text-white">17,618.50</span><span>17,550.00</span><span>17,500.00</span>
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_68%_34%,transparent_0_30%,rgba(0,0,0,.28)_62%,rgba(0,0,0,.78)_100%),linear-gradient(90deg,rgba(0,0,0,.82),rgba(0,0,0,.28)_42%,rgba(0,0,0,.08)),linear-gradient(180deg,transparent,rgba(0,0,0,.72))]" />
    </div>
  );
}

function ProofCard({ item }) {
  return (
    <div className="relative h-[190px] min-w-[280px] snap-start overflow-hidden rounded-xl border border-white/10 bg-[#05070c] shadow-2xl md:min-w-[320px]">
      <img
        src={item.image}
        alt={`${item.title} ${item.subtitle}`}
        className="h-full w-full object-cover"
        draggable={false}
      />
    </div>
  );
}

function runSelfTests() {
  return selfTests.every((test) => test.pass);
}

function TheMethodEliteWebsite() {
  const carouselRef = useRef(null);
  const testsPassed = useMemo(() => runSelfTests(), []);

  const openExternal = (url) => (event) => {
    event.preventDefault();
    event.stopPropagation();
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const smoothScrollTo = (targetId) => {
  const section = document.getElementById(targetId);
  if (!section) return;

  const navOffset = 100;
  const targetY = section.getBoundingClientRect().top + window.scrollY - navOffset;
  const startY = window.scrollY;
  const distance = targetY - startY;
  const duration = 850;
  let startTime = null;

  const easeInOutCubic = (t) =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

  const animateScroll = (currentTime) => {
    if (!startTime) startTime = currentTime;

    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = easeInOutCubic(progress);

    window.scrollTo(0, startY + distance * eased);

    if (progress < 1) {
      requestAnimationFrame(animateScroll);
    }
  };

  requestAnimationFrame(animateScroll);
};
  
  const scroll = (dir) => {
    const el = carouselRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * 340, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-black font-sans text-white">
      <span className="sr-only">Build self tests: {testsPassed ? "passed" : "failed"}</span>

      <section className="relative min-h-screen overflow-hidden">
        <CandleBackground />

        <nav className="fixed left-1/2 top-6 z-50 flex w-[min(500px,calc(100vw-24px))] -translate-x-1/2 items-center justify-center gap-[2px] rounded-full border border-white/15 bg-black/55 p-2 shadow-[0_0_60px_rgba(0,80,255,.18)] backdrop-blur-xl">
          {navItems.map((item) => (
 <a
  key={item.href}
  href={item.href}
  onClick={(event) => {
    event.preventDefault();
    smoothScrollTo(item.href.replace("#", ""));
  }}
  className="group relative flex items-center gap-[3px] px-[5px] py-3 text-sm font-bold text-white/82 transition-all duration-300 hover:text-white"
>
              {item.label}

              <span className="absolute bottom-[7px] left-2 h-[2px] w-0 rounded-full bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-300 shadow-[0_0_12px_rgba(0,119,255,.9)] transition-all duration-300 ease-out group-hover:w-[calc(100%-8px)]" />
            </a>
          ))}

          <motion.a
            href="https://discord.gg/tmt"
            target="_blank"
            rel="noopener noreferrer"
            onClick={openExternal("https://discord.gg/tmt")}
            className="relative ml-0 flex items-center gap-1 overflow-hidden rounded-full bg-gradient-to-r from-blue-800 via-blue-500 to-cyan-400 px-5 py-3 text-sm font-black shadow-[0_0_0_10px_rgba(0,70,180,.18),0_0_44px_rgba(0,119,255,.75)]"
            animate={{ boxShadow: ["0 0 0 8px rgba(0,70,180,.18),0 0 34px rgba(0,119,255,.55)", "0 0 0 24px rgba(0,70,180,.06),0 0 70px rgba(0,170,255,.95)", "0 0 0 8px rgba(0,70,180,.18),0 0 34px rgba(0,119,255,.55)"] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          >
            <DiscordIcon className="h-5 w-6" /> Join Discord
          </motion.a>
        </nav>

        <main className="relative z-10 mx-auto max-w-[1820px] px-6 pb-8 pt-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="ml-0 max-w-[680px] pt-6 md:ml-16 lg:ml-24"
          >
            <MethodLogo />

            <h1 className="mt-8 text-[56px] font-black uppercase leading-[.91] tracking-[-.065em] md:text-[86px] lg:text-[94px]">
              <span className="block bg-gradient-to-b from-white via-zinc-100 to-zinc-500 bg-clip-text text-transparent">Process.</span>
              <span className="block bg-gradient-to-b from-white via-zinc-100 to-zinc-500 bg-clip-text text-transparent">Structure.</span>
              <span className="block text-blue-600 drop-shadow-[0_0_20px_rgba(0,90,255,.25)]">Execution.</span>
            </h1>

            <p className="mt-6 max-w-[480px] text-lg leading-relaxed text-white/72">
              A mentorship built for serious traders. Live trading. Proven models. Psychology. Risk management. Everything you need to become consistently profitable.
            </p>

            <div className="mt-7 flex flex-col gap-4 sm:flex-row">
              <a href="#plans" className="inline-flex h-14 items-center justify-center gap-3 rounded-xl bg-blue-600 px-7 font-black shadow-[0_18px_45px_rgba(0,80,255,.3)] hover:bg-blue-500">
                VIEW PLANS <Icon name="arrow" className="h-6 w-6" />
              </a>
              <a href="https://discord.gg/tmt" target="_blank" rel="noopener noreferrer" onClick={openExternal("https://discord.gg/tmt")} className="inline-flex h-14 items-center justify-center gap-3 rounded-xl border border-white/20 bg-black/45 px-7 font-black backdrop-blur hover:border-blue-400/60">
                <DiscordIcon className="h-5 w-6 text-blue-500" /> JOIN DISCORD
              </a>
            </div>
          </motion.div>

          <div className="relative mt-8 overflow-hidden rounded-[28px] border border-white/15 bg-black/45 px-16 py-4 shadow-[0_25px_70px_rgba(0,0,0,.55)] backdrop-blur-md">
            <button type="button" onClick={() => scroll(-1)} className="absolute left-4 top-1/2 z-20 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-black/70 text-3xl hover:border-blue-400 hover:shadow-[0_0_28px_rgba(0,119,255,.45)]">‹</button>
            <div ref={carouselRef} className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth" style={{ scrollbarWidth: "none" }}>
              {proofs.concat(proofs).map((p, i) => <ProofCard key={`${p.title}-${i}`} item={p} />)}
            </div>
            <button type="button" onClick={() => scroll(1)} className="absolute right-4 top-1/2 z-20 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-black/70 text-3xl hover:border-blue-400 hover:shadow-[0_0_28px_rgba(0,119,255,.45)]">›</button>
          </div>

          <div className="mt-5 grid grid-cols-1 overflow-hidden rounded-[26px] border border-white/12 bg-black/45 shadow-[0_22px_70px_rgba(0,0,0,.45)] backdrop-blur-md md:grid-cols-5">
            {stats.map((stat) => (
              <div key={stat.big} className="flex items-center justify-center gap-5 border-white/10 p-6 last:border-r-0 md:border-r">
                <Icon name={stat.icon} className="h-11 w-11 text-blue-500 drop-shadow-[0_0_16px_rgba(0,119,255,.8)]" />
                <div><div className="text-2xl font-black">{stat.big}</div><div className="text-white/60">{stat.small}</div></div>
              </div>
            ))}
          </div>

        </main>
      </section>

      <section id="plans" className="border-t border-blue-500/10 bg-[#02050b] px-6 py-28">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-5xl font-black tracking-[-.06em] md:text-7xl">Plans built for commitment.</h2>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-white/65">Start with the free community, then apply for the full mentorship when you’re ready for structure, guidance, and accountability.</p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/[.04] p-8">
              <h3 className="text-3xl font-black">Free Discord</h3>
              <div className="mt-4 text-5xl font-black">$0</div>
              <ul className="mt-6 space-y-3 text-white/65">
  <li>2 live trading sessions per week</li>
  <li>Community discussion</li>
  <li>Market recaps</li>
  <li>Public education</li>
</ul>

<a
  href="https://discord.gg/tmt"
  target="_blank"
  rel="noopener noreferrer"
  className="cta-button mt-8"
>
  Join Now
</a>
            </div>
            <div className="rounded-3xl border border-blue-400/25 bg-blue-500/[.08] p-8 shadow-[0_0_60px_rgba(0,119,255,.12)]">
              <h3 className="text-3xl font-black">Private Mentorship</h3>
              <div className="mt-4 text-5xl font-black">$2,000 USD</div>
              <ul className="mt-6 space-y-3 text-white/70"><li>Full Method model breakdowns</li><li>Live execution guidance</li><li>Psychology and risk management</li><li>Trade reviews and accountability</li></ul>
              <a
  href="https://form.typeform.com/to/oMTi7RzG"
  target="_blank"
  rel="noopener noreferrer"
  className="cta-button mt-8"
>
  Apply Now
</a>
              <p className="mt-3 text-sm text-white/45">
                DM Massimo on Discord after filling out. Applications reviewed manually.
</p>
            </div>
          </div>
        </div>
      </section>

   <section id="who-we-are" className="border-t border-white/10 bg-[#02050b] px-6 py-24">
  <div className="mx-auto max-w-6xl">

    <h2 className="text-5xl font-black tracking-[-.05em]">
      Who we are?
    </h2>

    {/* WILLIAM */}

    <div className="mt-20 grid items-center gap-10 md:grid-cols-[1.25fr_0.75fr]">

      <div>
        <div className="text-sm font-black uppercase tracking-[0.25em] text-blue-400">
          William
        </div>

        <p className="mt-5 text-lg leading-relaxed text-white/65">
          After years of experience in the markets and multiple verified payouts, William developed the models, discipline, and execution frameworks that became the foundation of The Method.
        </p>

        <p className="mt-5 text-lg leading-relaxed text-white/65">
          After seeing the impact his guidance had on other traders, the idea of building a serious community focused on structure and consistency was born.
        </p>

        <p className="mt-5 text-lg leading-relaxed text-white/65">
          Together, we created The Method to help traders avoid the noise and focus on real development.
        </p>
      </div>

      <div className="relative overflow-hidden rounded-[32px] border border-blue-400/25 bg-blue-500/[.06] p-2 shadow-[0_0_80px_rgba(0,119,255,.22)]">
        <div className="absolute inset-0 rounded-[32px] bg-[radial-gradient(circle_at_center,rgba(0,119,255,.22),transparent_70%)]" />

        <img
          src="/team/william.jpg"
          alt="William"
          className="relative z-10 h-full w-full rounded-[26px] object-cover"
        />
      </div>
      
       {/* MASSIMO */}

    <div className="mt-14 grid items-center gap-10 md:grid-cols-[0.75fr_1.25fr]">

      <div className="relative overflow-hidden rounded-[32px] border border-blue-400/25 bg-blue-500/[.06] p-2 shadow-[0_0_80px_rgba(0,119,255,.22)]">
        <div className="absolute inset-0 rounded-[32px] bg-[radial-gradient(circle_at_center,rgba(0,119,255,.22),transparent_70%)]" />

        <img
          src="/team/massimo.jpg"
          alt="Massimo"
          className="relative z-10 h-full w-full rounded-[26px] object-cover"
        />
      </div>

      <div>
        <div className="text-sm font-black uppercase tracking-[0.25em] text-blue-400">
          Massimo
        </div>

        <p className="mt-5 text-lg leading-relaxed text-white/65">
          My name is Massimo, I’m 21 years old — and 7 months ago, my life changed completely.
        </p>

        <p className="mt-5 text-lg leading-relaxed text-white/65">
          After finding consistency in trading and surrounding myself with the right people, I traveled to Dubai at 20 years old alongside William and close trading friends.
        </p>

        <p className="mt-5 text-lg leading-relaxed text-white/65">
          What started as a shared passion for trading quickly turned into something much bigger.
        </p>
      </div>

  </div>
</section>
       <section id="prop-firms" className="border-t border-white/10 bg-black px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-5xl font-black tracking-[-.05em]">Prop firm focused.</h2>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-white/65">Built around risk rules, daily loss limits, payout planning, and the discipline required to survive funded accounts.</p>
        </div>
      </section>

      <section id="socials" className="border-t border-blue-500/10 bg-black px-6 py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10">
            <div className="mb-4 text-xs font-black uppercase tracking-[.55em] text-blue-400">Connect With The Method</div>
            <h2 className="text-5xl font-black tracking-[-.06em] md:text-7xl">Follow the journey.</h2>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-white/65">
              Market breakdowns, live trading clips, community updates, mentorship content, and the full Method ecosystem across every platform.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <a href="https://x.com/massimotrades" target="_blank" rel="noopener noreferrer" onClick={openExternal("https://x.com/massimotrades")} className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[.04] p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:shadow-[0_0_45px_rgba(0,119,255,.18)]">
              <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-blue-500/20 blur-2xl transition duration-300 group-hover:bg-blue-400/35" />
              <img
  src="https://cdn.simpleicons.org/x/white"
  alt="X"
  className="relative z-10 h-8 w-8"
/>
              <div className="relative z-10 mt-5 text-xl font-black">Massimo Trades</div>
              <div className="relative z-10 mt-2 text-white/55">@massimotrades</div>
            </a>

            <a href="https://www.instagram.com/massimotrades_/" target="_blank" rel="noopener noreferrer" onClick={openExternal("https://www.instagram.com/massimotrades_/")} className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[.04] p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:shadow-[0_0_45px_rgba(0,119,255,.18)]">
              <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-blue-500/20 blur-2xl transition duration-300 group-hover:bg-blue-400/35" />
             <img
  src="https://cdn.simpleicons.org/instagram/white"
  alt="Instagram"
  className="h-8 w-8"
/>
              <div className="relative z-10 mt-5 text-xl font-black">Instagram</div>
              <div className="relative z-10 mt-2 text-white/55">@massimotrades_</div>
            </a>

            <a href="https://www.youtube.com/@massimofx" target="_blank" rel="noopener noreferrer" onClick={openExternal("https://www.youtube.com/@massimofx")} className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[.04] p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:shadow-[0_0_45px_rgba(0,119,255,.18)]">
              <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-blue-500/20 blur-2xl transition duration-300 group-hover:bg-blue-400/35" />
            <img
  src="https://cdn.simpleicons.org/youtube/white"
  alt="YouTube"
  className="h-8 w-8"
/>
              <div className="relative z-10 mt-5 text-xl font-black">YouTube</div>
              <div className="relative z-10 mt-2 text-white/55">@massimofx</div>
            </a>

            <a href="https://discord.gg/tmt" target="_blank" rel="noopener noreferrer" onClick={openExternal("https://discord.gg/tmt")} className="group relative overflow-hidden rounded-3xl border border-blue-400/30 bg-blue-500/[.08] p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-300/60 hover:shadow-[0_0_55px_rgba(0,119,255,.28)]">
              <motion.div
                className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-blue-500/30 blur-2xl"
                animate={{ scale: [1, 1.18, 1], opacity: [0.55, 0.95, 0.55] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              />
              <DiscordIcon className="relative z-10 h-8 w-10 text-blue-300" />
              <div className="relative z-10 mt-5 text-xl font-black">Discord</div>
              <div className="relative z-10 mt-2 text-white/60">discord.gg/tmt</div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TheMethodEliteWebsite />
  </React.StrictMode>
);
