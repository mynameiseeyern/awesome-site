import { site } from "@/content/site";

export function Experience() {
  return (
    <section className="sec col">
      <h2 id="experience">Experience</h2>
      <div className="xp rv">
        {site.experience.map((r) => (
          <div className={`r${r.current ? " now" : ""}`} key={r.when + r.role}>
            <span className="y">{r.when}</span>
            <div>
              <b>
                {r.current && <span className="hand">current</span>}
                {r.role}
              </b>{" "}
              <span>{r.where}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function OffTheClock() {
  return (
    <section className="sec col about">
      <h2 id="about">Off the clock</h2>
      <p className="rv">
        <b>Tennis</b> on weekends, usually losing gracefully. <b>Coffee brewing</b> in the mornings, one variable at a
        time. <b>Dance</b> in the evenings. Longer term I want to keep moving toward design engineering and building new
        things of my own.
      </p>
      <p className="rv">
        Mental models I keep coming back to: {site.models.join(", ").replace(/, ([^,]*)$/, " and $1")}.
      </p>
    </section>
  );
}

export function Mentoring() {
  return (
    <section className="sec col mentoring">
      <h2 id="mentoring">
        Mentoring <span className="hand">free, 15 minutes</span>
      </h2>
      <p className="rv">{site.mentoring.intro}</p>
      <blockquote className="rv">
        <p>{site.mentoring.quote}</p>
        <cite>{site.mentoring.quoteBy}</cite>
      </blockquote>
      <a className="btn rv" href={site.mentoring.link} target="_blank" rel="noopener">
        Book a session on ADPList
      </a>
    </section>
  );
}
