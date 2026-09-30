"use client";
import { useEffect, useRef } from "react";

// A wobbly rounded rectangle path, like a crayon going once round the card.
function wobblyRect(w: number, h: number, r: number, j: number) {
  const pts: [number, number][] = [];
  const step = 14;
  const push = (x: number, y: number) => pts.push([x + (Math.random() * j * 2 - j), y + (Math.random() * j * 2 - j)]);
  const arc = (cx: number, cy: number, from: number, to: number) => {
    for (let a = from; a <= to; a += 30) push(cx + Math.cos((a * Math.PI) / 180) * r, cy + Math.sin((a * Math.PI) / 180) * r);
  };
  for (let x = r; x <= w - r; x += step) push(x, 0);
  arc(w - r, r, -90, 0);
  for (let y = r; y <= h - r; y += step) push(w, y);
  arc(w - r, h - r, 0, 90);
  for (let x = w - r; x >= r; x -= step) push(x, h);
  arc(r, h - r, 90, 180);
  for (let y = h - r; y >= r; y -= step) push(0, y);
  arc(r, r, 180, 270);
  return "M" + pts.map((p) => `${p[0].toFixed(1)} ${p[1].toFixed(1)}`).join(" L") + " Z";
}

/** Drop inside any position:relative parent; draws the crayon border to the parent's real size. */
export function Crayon() {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = ref.current;
    const host = svg?.parentElement;
    if (!svg || !host) return;
    const draw = () => {
      const w = host.offsetWidth + 10;
      const h = host.offsetHeight + 10;
      svg.setAttribute("viewBox", `0 0 ${w} ${h}`);
      svg.innerHTML =
        `<path pathLength="1" d="${wobblyRect(w - 2, h - 2, 16, 1.4)}" transform="translate(1 1)"/>` +
        `<path class="b" pathLength="1" d="${wobblyRect(w - 2, h - 2, 16, 2.2)}" transform="translate(2.5 1.5)"/>`;
    };
    draw();
    const ro = new ResizeObserver(draw);
    ro.observe(host);
    return () => ro.disconnect();
  }, []);

  return <svg ref={ref} className="crayon" aria-hidden="true" />;
}

/** The grain filter the crayon strokes reference. Render once per page. */
export function CrayonFilter() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
      <filter id="crayon" x="-5%" y="-5%" width="110%" height="110%">
        <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="7" result="g" />
        <feDisplacementMap in="SourceGraphic" in2="g" scale="1.8" xChannelSelector="R" yChannelSelector="G" />
      </filter>
    </svg>
  );
}
