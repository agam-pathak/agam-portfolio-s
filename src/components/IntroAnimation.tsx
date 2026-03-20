"use client";

import { useState, useEffect } from "react";

export function IntroAnimation() {
  const [isVisible, setIsVisible] = useState(true);
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    // Check if intro has already played in this session
    const hasPlayed = sessionStorage.getItem("lux-intro-played");
    if (hasPlayed) {
      setIsVisible(false);
      document.body.classList.remove("is-preloading");
      return;
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const duration = reduceMotion ? 340 : 4800;
    const hardTimeout = reduceMotion ? 900 : 7000;

    let dismissed = false;

    const dismiss = () => {
      if (dismissed) return;
      dismissed = true;
      setIsLeaving(true);
      document.body.classList.remove("is-preloading");
      sessionStorage.setItem("lux-intro-played", "true");
      
      setTimeout(() => {
        setIsVisible(false);
      }, 760);
    };

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") dismiss();
    };

    window.addEventListener("keydown", handleKey);
    const tm1 = setTimeout(dismiss, duration);
    const tm2 = setTimeout(dismiss, hardTimeout);

    return () => {
      window.removeEventListener("keydown", handleKey);
      clearTimeout(tm1);
      clearTimeout(tm2);
      document.body.classList.remove("is-preloading");
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      id="lux-intro"
      aria-label="Opening portfolio experience"
      role="status"
      aria-live="polite"
      className={isLeaving ? "is-leaving" : ""}
    >
      <div className="lux-atmos" aria-hidden="true">
        <span></span><span></span><span></span><span></span><span></span>
        <span></span><span></span><span></span><span></span><span></span>
        <span></span><span></span>
      </div>
      <div className="lux-shell">
        <p className="lux-kicker">Curated Portfolio Experience</p>
        <img 
          src="/favicon.svg" 
          alt="AP Mission Control Logo" 
          className="lux-mark w-20 h-20 p-2 mx-auto rounded-[2rem] border-2 border-white/10 bg-white/5 backdrop-blur-3xl shadow-2xl ring-1 ring-cyan-400/20" 
        />
        <h2 className="lux-title">Crafted With Precision</h2>
        <p className="lux-subtitle">Loading selected projects, case studies, and impact highlights.</p>
        <div className="lux-progress" aria-hidden="true">
          <span></span>
        </div>
        <button
          id="intro-skip"
          type="button"
          onClick={() => {
            setIsLeaving(true);
            setTimeout(() => setIsVisible(false), 760);
          }}
        >
          Skip Intro
        </button>
        <p className="lux-hint">Tip: Press Esc to skip</p>
      </div>
    </div>
  );
}
