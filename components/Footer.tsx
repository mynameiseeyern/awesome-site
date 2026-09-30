"use client";
import { useEffect, useRef, useState } from "react";
import { toggleTheme } from "./theme";
import { site } from "@/content/site";

// Footer plus every easter egg: C for a coffee ring, G to change the paper, T for the theme,
// and the mug that sips, steams and keeps a tally between visits.

function ring() {
  const seg: string[] = [];
  for (let k = 0; k < 3; k++) {
    const r = 60 + Math.random() * 8;
    let d = "M";
    for (let a = 0; a <= 360; a += 20) {
      const rr = r + (Math.random() * 5 - 2.5);
      d += (a ? " L" : "") + (75 + Math.cos((a * Math.PI) / 180) * rr).toFixed(1) + " " + (75 + Math.sin((a * Math.PI) / 180) * rr).toFixed(1);
    }
    seg.push(`<path d="${d} Z" stroke-width="${k === 0 ? 3.5 : k === 1 ? 1.6 : 0.9}"${k === 2 ? ' stroke-dasharray="14 9"' : ""}/>`);
  }
  return seg.join("");
}

export function Footer() {
  const [cups, setCups] = useState(0);
  const [sip, setSip] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const stains = useRef(0);
  const paper = useRef(0);
  const cupRef = useRef<HTMLButtonElement>(null);
  const toastTimer = useRef<ReturnType<typeof setTimeout>>(undefined);

  const say = (m: string) => {
    setToast(m);
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(null), 1600);
  };

  const coffee = (x?: number, y?: number) => {
    if (stains.current >= 8) return say("That is plenty of coffee for one day");
    const w = document.createElement("div");
    w.className = "stain";
    w.style.setProperty("--r", `${Math.random() * 360}deg`);
    w.style.left = `${x ?? Math.random() * (document.body.clientWidth - 160)}px`;
    w.style.top = `${y ?? window.scrollY + Math.random() * (window.innerHeight - 160)}px`;
    w.innerHTML = `<svg viewBox="0 0 150 150" aria-hidden="true">${ring()}</svg>`;
    document.body.appendChild(w);
    requestAnimationFrame(() => requestAnimationFrame(() => w.classList.add("in")));
    stains.current++;
    say(["Mug down", "Careful, that one was hot", "Another cup", `Coffee ring number ${stains.current}`][Math.min(stains.current - 1, 3)]);
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
    if (r) coffee(r.left + window.scrollX - 40, r.top + window.scrollY - 90);
  };

  return (
    <>
      <footer className="foot col">
        <div style={{ display: "grid", gap: 6 }}>
          <span>{site.name}, {new Date().getFullYear()}</span>
          <span>
            Press <kbd>C</kbd> for coffee, <kbd>G</kbd> to change the paper, <kbd>T</kbd> for the theme
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
