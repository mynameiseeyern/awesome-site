import type { CaseStudy } from "@/content/case-studies";

// The "coffee bag" label for a case study: origin, producer, lot, process, and so on, with dotted
// leaders like a specialty roaster's tag; three tasting notes; and the blend (how the work broke down).
export function Label({ cs }: { cs: CaseStudy }) {
  const L = cs.label;
  const rows: [string, string][] = [
    ["Origin", L.origin],
    ["Producer", L.producer],
    ["Process", L.process],
    ["Varietal", L.varietal],
    ["Altitude", L.altitude],
    ["Harvest", L.harvest],
    ["Roast", L.roast],
  ];
  const blend: [string, number][] = [
    ["Research", cs.blend.research],
    ["Systems", cs.blend.systems],
    ["UI", cs.blend.ui],
    ["Code", cs.blend.code],
  ];
  return (
    <aside className="bag" aria-label="Project label">
      <div className="bag-top">
        <span className="lot">Lot {L.lot}</span>
        <span className="hand">single origin</span>
      </div>
      <dl className="bag-rows">
        {rows.map(([k, v]) => (
          <div key={k}>
            <dt>{k}</dt>
            <dd>{v}</dd>
          </div>
        ))}
      </dl>
      <div className="bag-notes">
        <span className="k">Tasting notes</span>
        <div className="tags">
          {cs.notes.map((n) => (
            <span key={n} className="tag">
              {n}
            </span>
          ))}
        </div>
      </div>
      <div className="bag-blend">
        <span className="k">The blend</span>
        <ul>
          {blend.map(([k, v]) => (
            <li key={k}>
              <span>{k}</span>
              <i style={{ ["--w" as string]: `${v}%` }} aria-hidden="true" />
              <b>{v}%</b>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

export function Recipe({ cs }: { cs: CaseStudy }) {
  return (
    <section className="recipe">
      <h2>
        Brew guide <span className="hand">how to make one of these</span>
      </h2>
      <dl>
        {cs.recipe.map((r) => (
          <div key={r.k}>
            <dt>{r.k}</dt>
            <dd>{r.v}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
