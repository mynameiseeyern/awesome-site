"use client";
import { useEffect, useRef } from "react";
import { site } from "@/content/site";

export function HowIWork() {
  const ref = useRef<HTMLDivElement>(null);

  // Each item ticks itself when it scrolls into view, staggered.
  useEffect(() => {
    const items = Array.from(ref.current?.querySelectorAll<HTMLElement>(".todo") ?? []);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (!en.isIntersecting) return;
          const el = en.target as HTMLElement;
          setTimeout(() => el.classList.add("done"), reduce ? 0 : 150 + items.indexOf(el) * 180);
          io.unobserve(el);
        });
      },
      { threshold: 0.6 }
    );
    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section className="sec col">
      <h2 id="how">How I work</h2>
      <div className="todos" ref={ref}>
        {site.how.map((item) => (
          <div className="todo rv" key={item.title}>
            <svg className="box" viewBox="0 0 22 22" aria-hidden="true">
              <rect x="2.5" y="2.5" width="17" height="17" rx="5" />
              <path className="tick" d="M6 11.5l3.5 3.5L16 7.5" />
            </svg>
            <div>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
