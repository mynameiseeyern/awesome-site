"use client";
import { useEffect, useRef, useState } from "react";
import { projects, type Project } from "@/content/projects";
import Link from "next/link";
import { Crayon } from "./Crayon";

const Check = () => (
  <svg className="chk" viewBox="0 0 18 18" aria-hidden="true">
    <rect x="2" y="2" width="14" height="14" rx="4" />
    <path className="tick" d="M5 9.5l2.8 2.8L13 6.5" />
  </svg>
);

export function Work() {
  const [open, setOpen] = useState<Project | null>(null);
  const lastFocus = useRef<HTMLElement | null>(null);
  const closeBtn = useRef<HTMLButtonElement>(null);

  const show = (p: Project) => {
    lastFocus.current = document.activeElement as HTMLElement;
    setOpen(p);
  };
  const hide = () => {
    setOpen(null);
    lastFocus.current?.focus();
  };

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (open) closeBtn.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) hide();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  return (
    <>
      <section className="sec col">
        <h2 id="work">
          Selected work <span className="hand">click a card</span>
        </h2>
        <div className="grid">
          {projects.map((p, i) => {
            const inner = (
              <>
                <div className="thumb" style={{ ["--tint" as string]: `var(--${p.tint})` }}>
                  <p.Sketch />
                  <span className="open">{p.href ? "Read case study" : "Open"}</span>
                </div>
                <div className="body">
                  <h3>{p.title}</h3>
                  <p>{p.blurb}</p>
                  <div className="notes">
                    {p.notes.map((n) => (
                      <span key={n}>{n}</span>
                    ))}
                  </div>
                  <div className="meta">
                    {p.company}, {p.years}
                  </div>
                </div>
                <Crayon />
              </>
            );
            const cls = `card${i === 0 ? " featured" : ""}`;
            return p.href ? (
              <Link key={p.slug} className={cls} href={p.href}>
                {inner}
              </Link>
            ) : (
              <button key={p.slug} className={cls} type="button" onClick={() => show(p)}>
                {inner}
              </button>
            );
          })}
        </div>
      </section>

      <div className={`scrim${open ? " on" : ""}`} onClick={hide} />
      <aside
        className={`peek${open ? " on" : ""}`}
        aria-hidden={!open}
        role="dialog"
        aria-modal="true"
        aria-labelledby="peek-title"
      >
        {open && (
          <>
            <div className="bar">
              <span>Work / {open.title}</span>
              <button ref={closeBtn} className="close" type="button" aria-label="Close" onClick={hide}>
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                  <path d="M3 3l10 10M13 3 3 13" />
                </svg>
              </button>
            </div>
            <div className="hero-img" style={{ ["--tint" as string]: `var(--${open.tint})` }}>
              <open.Sketch />
            </div>
            <h2 id="peek-title">{open.title}</h2>
            <div className="meta">
              {open.company}, {open.years}. {open.role}.
            </div>
            <p className="lead">{open.lead}</p>
            <h4>What I did</h4>
            <ul>
              {open.did.map((d) => (
                <li key={d}>
                  <Check />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
            <div className="ph">
              <span className="hand">screens coming soon</span>
              <br />
              Real product screens go here once they are cleared to share.
            </div>
          </>
        )}
      </aside>
    </>
  );
}
