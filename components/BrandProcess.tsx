// "Creating a new brand" in Chameleon, drawn in the site's sketch style instead of a slide screenshot.
// Illustrations follow docs/sketch-cards.md: strokes and fills come from CSS, only paper gets class="fill".

type Step = { title: string; body: string; tint: string; Sketch: () => React.JSX.Element };

const steps: Step[] = [
  {
    title: "Generate the palettes",
    body: "Build the Alpha and Brand colour ramps for the new tenant.",
    tint: "lavender",
    Sketch: () => (
      <svg viewBox="0 0 200 110" aria-hidden="true">
        {[0, 1, 2, 3, 4].map((i) => (
          <rect key={`a${i}`} className="swatch ink" x={30 + i * 29} y={24} width={24} height={24} rx={5} style={{ fillOpacity: 0.12 + i * 0.18 }} />
        ))}
        {[0, 1, 2, 3, 4].map((i) => (
          <rect key={`b${i}`} className="swatch brand" x={30 + i * 29} y={60} width={24} height={24} rx={5} style={{ fillOpacity: 0.15 + i * 0.2 }} />
        ))}
      </svg>
    ),
  },
  {
    title: "Map the semantics",
    body: "Point semantic colours at the palette and tune contrast. Set radius and spacing.",
    tint: "sky",
    Sketch: () => (
      <svg viewBox="0 0 200 110" aria-hidden="true">
        <rect className="swatch brand" x={34} y={20} width={22} height={18} rx={4} style={{ fillOpacity: 0.9 }} />
        <rect className="swatch ink" x={34} y={46} width={22} height={18} rx={4} style={{ fillOpacity: 0.75 }} />
        <rect className="swatch ink" x={34} y={72} width={22} height={18} rx={4} style={{ fillOpacity: 0.15 }} />
        <path className="pen" d="M62 29c20 0 30 0 44 0M62 55h44M62 81h44" strokeDasharray="3 5" />
        <path className="pen" d="M102 25l5 4-5 4M102 51l5 4-5 4M102 77l5 4-5 4" />
        <rect className="fill" x={116} y={20} width={52} height={18} rx={9} />
        <path d="M126 29h30" />
        <rect className="fill" x={116} y={46} width={52} height={18} rx={4} />
        <path d="M124 55h22" />
        <rect className="fill" x={116} y={72} width={52} height={18} rx={2} />
        <path d="M124 81h36" />
      </svg>
    ),
  },
  {
    title: "Swap the brand",
    body: "Duplicate Gecko Bank, the generic brand, and apply the palette and tokens.",
    tint: "mint",
    Sketch: () => (
      <svg viewBox="0 0 200 110" aria-hidden="true">
        <rect className="fill" x={22} y={20} width={62} height={74} rx={7} strokeDasharray="4 4" />
        <path d="M32 34h42M32 48h28M32 60h36" />
        <rect x={32} y={74} width={24} height={10} rx={3} />
        <path className="pen" d="M92 44c10-12 22-12 30 0" />
        <path className="pen" d="M117 38l6 7-8 2" />
        <rect className="fill" x={128} y={20} width={62} height={74} rx={7} />
        <path className="swatch brand" d="M135 20h48a7 7 0 0 1 7 7v7h-62v-7a7 7 0 0 1 7-7z" style={{ fillOpacity: 0.85 }} />
        <path d="M138 48h28M138 60h36" />
        <rect className="swatch brand" x={138} y={74} width={24} height={10} rx={3} style={{ fillOpacity: 0.85 }} />
      </svg>
    ),
  },
  {
    title: "Publish",
    body: "Publish the library, add the theme to the switcher plugin, and hand engineers the JSON from Tokens Studio.",
    tint: "peach",
    Sketch: () => (
      <svg viewBox="0 0 200 110" aria-hidden="true">
        <rect className="fill" x={40} y={30} width={56} height={66} rx={5} />
        <rect className="fill" x={34} y={24} width={56} height={66} rx={5} />
        <rect className="fill" x={28} y={18} width={56} height={66} rx={5} />
        <path d="M38 32h30M38 44h20M38 56h26" />
        <path className="pen" d="M116 30c-8 0-8 6-8 12s-4 8-8 8c4 0 8 2 8 8s0 12 8 12M164 30c8 0 8 6 8 12s4 8 8 8c-4 0-8 2-8 8s0 12-8 12" />
        <path d="M126 42h28M126 52h20M126 62h24" />
      </svg>
    ),
  },
];

export function BrandProcess() {
  return (
    <figure className="process">
      <div className="process-head">
        <h3>Creating a new brand</h3>
        <span className="hand">half a day, down from two weeks</span>
      </div>
      <ol>
        {steps.map((s, i) => (
          <li key={s.title} style={{ ["--tint" as string]: `var(--${s.tint})` }}>
            <div className="art">
              <s.Sketch />
            </div>
            <span className="n">{i + 1}</span>
            <h4>{s.title}</h4>
            <p>{s.body}</p>
            {i < steps.length - 1 && (
              <svg className="link" viewBox="0 0 40 20" aria-hidden="true">
                <path d="M2 12c10-6 22-8 34-2M30 5l6 5-7 4" />
              </svg>
            )}
          </li>
        ))}
      </ol>
      <figcaption>Adding a tenant to Chameleon: design once in Gecko Bank, then swap the brand.</figcaption>
    </figure>
  );
}
