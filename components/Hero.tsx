"use client";
import { useEffect } from "react";
import { site } from "@/content/site";
import { Portrait } from "./Portrait";

export function Hero() {
  // Load sequence: everything marked .ld rises in once, right after mount.
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".ld");
    const t = setTimeout(() => els.forEach((el) => el.classList.add("in")), 60);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="hero col">
      <div className="hero-grid">
      <div>
      <h1 className="ld">
        Hi, I&apos;m Ee.
        <svg
          className="wave"
          viewBox="0 0 40 40"
          fill="none"
          stroke="var(--pen)"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M14 22 9 13c-1-2 2-4 3-2l5 9M17 20l-5-11c-1-2 2-4 3-2l6 11M22 18l-4-10c-1-2 2-3 3-1l5 10M26 18l-2-6c-1-2 2-3 3-1l4 9c2 5 0 10-4 12s-9 1-12-2l-7-8c-2-2 1-5 3-3l4 3" />
        </svg>
      </h1>
      <svg className="underline ld" viewBox="0 0 190 12" aria-hidden="true">
        <path d="M2 8c26-5 52-5 78-3s52 2 78-2c10-1 20-1 30 1" />
      </svg>
      <p className="lede ld" style={{ transitionDelay: ".1s" }}>
        {site.hero.lede}
      </p>
      <p className="sub ld" style={{ transitionDelay: ".18s" }}>
        {site.hero.sub}
      </p>
      <div className="cta ld" style={{ transitionDelay: ".26s" }}>
        <a className="btn primary" href="#work">
          See my work
          <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
            <path d="M2 7h10M8 3l4 4-4 4" />
          </svg>
        </a>
        <a className="btn" href="#contact">
          Say hello
        </a>
        <span className="annot" aria-hidden="true">
          <svg viewBox="0 0 64 36">
            <path d="M58 6c-12 2-28 6-48 22M11 25l-3 6 7 0" />
          </svg>
          <span className="hand">start here</span>
        </span>
      </div>
      </div>
      <Portrait />
      </div>
    </section>
  );
}
