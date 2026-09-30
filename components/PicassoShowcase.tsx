"use client";
import { useState } from "react";

// A live corner of Picasso, IR's design system, rebuilt here with its real token values so the
// case study can show the theming axes working rather than screenshots of them. Values come from
// ir-picasso.vercel.app/llms-tokens.txt. Click any swatch to copy its hex.

const status = [
  { name: "status/healthy", light: "#079455", dark: "#47CD89" },
  { name: "status/warning", light: "#DC6803", dark: "#FDB022" },
  { name: "status/critical", light: "#D92D20", dark: "#F97066" },
  { name: "status/info", light: "#1A91C3", dark: "#42AADC" },
  { name: "status/unknown", light: "#9AA4B2", dark: "#697586" },
];
const chart = [
  ["#1A92C1", "#42ABDA"], ["#852CAA", "#9A51B9"], ["#E73750", "#EB5B6F"], ["#0099DD", "#3CC9F3"],
  ["#0E9488", "#39A79D"], ["#4F46E5", "#6E67E9"], ["#D4D726", "#D2D53F"], ["#EC4899", "#EF68AB"],
];
const surfaces = {
  light: { app: "#F8FAFC", canvas: "#EEF2F6", card: "#FFFFFF", fg: "#121926", muted: "#697586", border: "#E3E8EF" },
  dark: { app: "#121926", canvas: "#0A0E15", card: "#202939", fg: "#F8FAFC", muted: "#9AA4B2", border: "#364152" },
};
const primary = { 600: "#007DA8", 700: "#00668A", 50: "#EFF8FD", 950: "#002838" };
const radii = { Sharp: 0, Subtle: 6, Default: 10, Rounded: 16 } as const;
const spacing = { Compact: 0.875, Default: 1, Relaxed: 1.25 } as const;

export function PicassoShowcase() {
  const [mode, setMode] = useState<"light" | "dark">("light");
  const [radius, setRadius] = useState<keyof typeof radii>("Default");
  const [space, setSpace] = useState<keyof typeof spacing>("Default");
  const [copied, setCopied] = useState<string | null>(null);
  const [on, setOn] = useState(true);
  const s = surfaces[mode];

  const copy = (hex: string) => {
    navigator.clipboard?.writeText(hex).catch(() => {});
    setCopied(hex);
    setTimeout(() => setCopied(null), 1200);
  };

  const vars = {
    ["--p-app" as string]: s.app,
    ["--p-canvas" as string]: s.canvas,
    ["--p-card" as string]: s.card,
    ["--p-fg" as string]: s.fg,
    ["--p-muted" as string]: s.muted,
    ["--p-border" as string]: s.border,
    ["--p-primary" as string]: primary[600],
    ["--p-primary-hover" as string]: primary[700],
    ["--p-r" as string]: `${radii[radius]}px`,
    ["--p-s" as string]: spacing[space],
    ["--p-healthy" as string]: mode === "light" ? status[0].light : status[0].dark,
    ["--p-warning" as string]: mode === "light" ? status[1].light : status[1].dark,
    ["--p-critical" as string]: mode === "light" ? status[2].light : status[2].dark,
  };

  return (
    <div className="pic">
      <div className="pic-controls">
        <Control label="Mode" options={["light", "dark"]} value={mode} onChange={(v) => setMode(v as typeof mode)} />
        <Control label="Radius" options={Object.keys(radii)} value={radius} onChange={(v) => setRadius(v as keyof typeof radii)} />
        <Control label="Spacing" options={Object.keys(spacing)} value={space} onChange={(v) => setSpace(v as keyof typeof spacing)} />
      </div>

      <div className="pic-stage" style={vars}>
        <div className="pic-app">
          <div className="pic-kpis">
            <Kpi label="Endpoints healthy" value="1,284" tone="healthy" delta="+12 today" />
            <Kpi label="Needing attention" value="17" tone="warning" delta="3 new" />
            <Kpi label="Offline" value="4" tone="critical" delta="since 09:40" />
          </div>
          <div className="pic-card">
            <div className="pic-row">
              <div>
                <div className="pic-title">Widget install</div>
                <div className="pic-sub">Contact centre, Sydney</div>
              </div>
              <span className="pic-badge">Rolling out</span>
            </div>
            <div className="pic-meter"><i style={{ width: "64%" }} /></div>
            <div className="pic-row">
              <label className="pic-switch">
                <input type="checkbox" checked={on} onChange={(e) => setOn(e.target.checked)} />
                <span className="track"><span className="thumb" /></span>
                <span className="pic-sub">Email IT when an endpoint goes offline</span>
              </label>
            </div>
            <div className="pic-actions">
              <button type="button" className="pic-btn primary">Save changes</button>
              <button type="button" className="pic-btn">Cancel</button>
            </div>
          </div>
        </div>
        <ul className="pic-annot" aria-label="Tokens in use">
          <li><b>bg/app</b> {s.app}</li>
          <li><b>bg/card</b> {s.card}</li>
          <li><b>bg/primary/emphasis</b> {primary[600]}</li>
          <li><b>radius</b> {radii[radius]}px</li>
          <li><b>spacing</b> x{spacing[space]}</li>
        </ul>
      </div>

      <div className="pic-tokens">
        <div className="pic-group">
          <span className="k">Status, click to copy</span>
          <div className="pic-swatches">
            {status.map((t) => {
              const hex = mode === "light" ? t.light : t.dark;
              return (
                <button key={t.name} type="button" onClick={() => copy(hex)} title={`${t.name} ${hex}`}>
                  <i style={{ background: hex }} />
                  <span>{t.name.replace("status/", "")}</span>
                  <small>{copied === hex ? "copied" : hex}</small>
                </button>
              );
            })}
          </div>
        </div>
        <div className="pic-group">
          <span className="k">Chart, eight series</span>
          <div className="pic-swatches chart">
            {chart.map(([l, d], i) => {
              const hex = mode === "light" ? l : d;
              return (
                <button key={i} type="button" onClick={() => copy(hex)} title={`chart/${i + 1} ${hex}`}>
                  <i style={{ background: hex }} />
                  <span>chart/{i + 1}</span>
                  <small>{copied === hex ? "copied" : hex}</small>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

function Control({ label, options, value, onChange }: { label: string; options: string[]; value: string; onChange: (v: string) => void }) {
  return (
    <div className="pic-control" role="group" aria-label={label}>
      <span>{label}</span>
      <div>
        {options.map((o) => (
          <button key={o} type="button" className={o === value ? "on" : ""} onClick={() => onChange(o)}>
            {o}
          </button>
        ))}
      </div>
    </div>
  );
}

function Kpi({ label, value, tone, delta }: { label: string; value: string; tone: "healthy" | "warning" | "critical"; delta: string }) {
  return (
    <div className="pic-kpi">
      <span className="pic-sub">{label}</span>
      <b>{value}</b>
      <span className="pic-delta" style={{ color: `var(--p-${tone})` }}>
        <i style={{ background: `var(--p-${tone})` }} />
        {delta}
      </span>
    </div>
  );
}
