import React from "react";
import Reveal from "./Reveal.jsx";

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="17.1" cy="6.9" r="1.1" fill="currentColor" />
  </svg>
);

const XIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path
      d="M4 4L20 20M20 4L4 20"
      stroke="currentColor"
      strokeWidth="2.1"
      strokeLinecap="round"
    />
  </svg>
);

const YouTubeIcon = () => (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="none">
    <rect x="2.5" y="5.5" width="19" height="13" rx="4" stroke="currentColor" strokeWidth="1.8" />
    <path d="M10.3 9.3v5.4l4.9-2.7-4.9-2.7z" fill="currentColor" />
  </svg>
);

const people = [
  {
    name: "William",
    handle: "@williamtradesnq",
    photo: "/william.png",
    links: [
      { icon: InstagramIcon, url: "https://www.instagram.com/williamnq_/", label: "Instagram" },
      { icon: XIcon, url: "https://x.com/williamtradesnq", label: "X" },
    ],
  },
  {
    name: "Massimo",
    handle: "@massimotrades",
    photo: "/massimo.png",
    links: [
      { icon: InstagramIcon, url: "https://www.instagram.com/massimotrades_/", label: "Instagram" },
      { icon: XIcon, url: "https://x.com/massimotrades", label: "X" },
      { icon: YouTubeIcon, url: "https://www.youtube.com/@massimotrades", label: "YouTube" },
    ],
  },
];

export default function Socials() {
  return (
    <section id="socials" className="socials">
      <div className="wrap">
        <Reveal>
          <div className="section-head center">
            <span className="eyebrow">Follow Along</span>
            <h2>Come Watch The Process</h2>
          </div>
        </Reveal>

        <div className="socials-grid">
          {people.map((p, i) => (
            <Reveal key={p.name} delay={i * 110}>
              <div className="glass-card social-card">
                <img className="social-avatar" src={p.photo} alt={p.name} />
                <h3>{p.name}</h3>
                <p className="social-handle">{p.handle}</p>
                <div className="social-links">
                  {p.links.map((l) => (
                    <a
                      key={l.label}
                      href={l.url}
                      target="_blank"
                      rel="noreferrer"
                      className="social-link"
                      aria-label={`${p.name} on ${l.label}`}
                    >
                      <l.icon />
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
