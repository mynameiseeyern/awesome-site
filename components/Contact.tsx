"use client";
import { useRef, useState } from "react";
import { site } from "@/content/site";

const Ext = () => (
  <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
    <path d="M2 10 10 2M4 2h6v6" />
  </svg>
);

export function Contact() {
  const [done, setDone] = useState(false);
  const emailRef = useRef<HTMLAnchorElement>(null);

  const copy = async () => {
    const flash = () => {
      setDone(true);
      setTimeout(() => setDone(false), 1800);
    };
    try {
      await navigator.clipboard.writeText(site.email);
      flash();
    } catch {
      const r = document.createRange();
      if (emailRef.current) r.selectNodeContents(emailRef.current);
      const s = window.getSelection();
      s?.removeAllRanges();
      s?.addRange(r);
      flash();
    }
  };

  return (
    <section className="sec col contact">
      <h2 id="contact">
        Say hello <span className="hand">I reply fast</span>
      </h2>
      <p className="big rv">{site.contact.big}</p>
      <div className="email-row rv">
        <a className="email" ref={emailRef} href={`mailto:${site.email}`}>
          {site.email}
        </a>
        <button className={`copy${done ? " done" : ""}`} type="button" aria-label="Copy email address" onClick={copy}>
          {done ? "Copied" : "Copy"}
        </button>
      </div>
      <div className="links rv">
        <a href={site.linkedin} target="_blank" rel="noopener">
          LinkedIn <Ext />
        </a>
        <a href={site.cv} target="_blank" rel="noopener">
          CV (PDF) <Ext />
        </a>
        <span>{site.location}</span>
      </div>
    </section>
  );
}
