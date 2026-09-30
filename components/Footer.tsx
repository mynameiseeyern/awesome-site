"use client";
import { useEffect, useRef, useState } from "react";
import { toggleTheme } from "./theme";
import { site } from "@/content/site";

// Footer plus every easter egg: C for a handful of coffee beans, G to change the paper, T for the theme,
// and the mug that sips, steams and keeps a tally between visits.

// One hand-drawn coffee bean: an ellipse with the curved split down the middle, in the site's stroke.
const BEAN = `<svg viewBox="0 0 40 40" aria-hidden="true"><ellipse cx="20" cy="20" rx="11" ry="16" transform="rotate(-25 20 20)"/><path d="M14 8c6 6 6 18 12 24" transform="rotate(-25 20 20)"/></svg>`;

export function Footer() {
  const [cups, setCups] = useState(0);
  const [sip, setSip] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const beansAlive = useRef(0);
  const paper = useRef(0);
  const cupRef = useRef<HTMLButtonElement>(null);
  const toastTimer = useRef<ReturnType<typeof setTimeout>>(undefined);

  const say = (m: string) => {
    setToast(m);
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(null), 1600);
  };

  // A handful of beans tumble onto the screen, settle for a moment, then fade away.
  const coffee = (x?: number, y?: number) => {
    if (beansAlive.current > 60) return;
    const n = 7 + Math.floor(Math.random() * 6);
    const cx = x ?? Math.random() * window.innerWidth;
    const cy = y ?? Math.random() * window.innerHeight;
    const spread = x == null ? 260 : 140;
    for (let i = 0; i < n; i++) {
      const b = document.createElement("div");
      b.className = "bean";
      const size = 18 + Math.random() * 18;
      b.style.left = `${Math.min(Math.max(cx + (Math.random() - 0.5) * spread, 10), window.innerWidth - size - 10)}px`;
      b.style.top = `${Math.min(Math.max(cy + (Math.random() - 0.5) * spread * 0.7, 10), window.innerHeight - size - 10)}px`;
      b.style.width = `${size}px`;
      b.style.setProperty("--r", `${Math.random() * 360}deg`);
      b.style.setProperty("--drift", `${(Math.random() - 0.5) * 30}px`);
      b.style.animationDelay = `${i * 70}ms, ${3200 + i * 70 + Math.random() * 800}ms`;
      b.innerHTML = BEAN;
      document.body.appendChild(b);
      beansAlive.current++;
      b.addEventListener("animationend", (e) => {
        if (e.animationName === "bean-out") {
          b.remove();
          beansAlive.current--;
        }
      });
    }
    say(["Fresh beans", "Light roast", "Another handful", "That is a lot of coffee"][Math.floor(Math.random() * 4)]);
  };

  const cyclePaper = () => {
    const papers = ["plain", "dots", "ruled"];
    paper.current = (paper.current + 1) % papers.length;
    document.body.classList.remove("dots", "ruled");
    if (papers[paper.current] !== "plain") document.body.classList.add(papers[paper.current]);
    say(`Paper: ${papers[paper.current]}`);
  };

  useEffect(() => {
    try {
      setCups(Number(localStorage.getItem("eyn-cups")) || 0);
    } catch {}
    const onKey = (e: KeyboardEvent) => {
      if ((e.target as HTMLElement).matches?.("input,textarea")) return;
      if (e.key === "g" || e.key === "G") cyclePaper();
      if (e.key === "c" || e.key === "C") coffee();
      if (e.key === "t" || e.key === "T") toggleTheme();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onCup = () => {
    const n = cups + 1;
    setCups(n);
    try {
      localStorage.setItem("eyn-cups", String(n));
    } catch {}
    setSip(true);
    setTimeout(() => setSip(false), 700);
    const r = cupRef.current?.getBoundingClientRect();
    if (r) coffee(r.left + r.width / 2, r.top - 20);
  };

  return (
    <>
      <footer className="foot col">
        <div style={{ display: "grid", gap: 6 }}>
          <span>{site.name}, {new Date().getFullYear()}</span>
          <span>
            Press <kbd>C</kbd> for coffee beans, <kbd>G</kbd> to change the paper, <kbd>T</kbd> for the theme
          </span>
        </div>
        <button ref={cupRef} className={`cup${sip ? " sip" : ""}`} type="button" aria-label="Pour a coffee" title="Pour a coffee" onClick={onCup}>
          <svg viewBox="0 0 26 26" aria-hidden="true">
            <path className="steam" d="M9 7c1-2-1-3 0-5" />
            <path className="steam" d="M13 7c1-2-1-3 0-5" />
            <path className="steam" d="M17 7c1-2-1-3 0-5" />
            <g className="body" style={{ transformOrigin: "8px 22px" }}>
              <path d="M5 10h15v7a6 6 0 0 1-6 6h-3a6 6 0 0 1-6-6z" />
              <path d="M20 12h2a3 3 0 0 1 0 6h-2M3 24h18" />
            </g>
          </svg>
          <span className="hand">made with a lot of coffee</span>
          <span className="tally" aria-live="polite">
            {Array.from({ length: cups }, (_, i) =>
              (i + 1) % 5 === 0 ? <i key={i} className="x" /> : <i key={i} style={{ ["--t" as string]: `${((i * 7) % 6) - 3}deg` }} />
            )}
          </span>
        </button>
      </footer>
      <div className={`toast${toast ? " on" : ""}`} role="status">
        {toast}
      </div>
    </>
  );
}
