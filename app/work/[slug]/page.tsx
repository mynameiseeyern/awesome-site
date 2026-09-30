import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { caseStudies, getCaseStudy, type Block } from "@/content/case-studies";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { CrayonFilter } from "@/components/Crayon";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) return {};
  return { title: `${cs.title}, ${cs.subtitle}`, description: cs.summary, openGraph: { images: [cs.cover.src] } };
}

const Check = () => (
  <svg className="chk" viewBox="0 0 18 18" aria-hidden="true">
    <rect x="2" y="2" width="14" height="14" rx="4" />
    <path className="tick" d="M5 9.5l2.8 2.8L13 6.5" />
  </svg>
);

function Render({ b }: { b: Block }) {
  switch (b.type) {
    case "h2":
      return <h2>{b.text}</h2>;
    case "h3":
      return <h3>{b.text}</h3>;
    case "p":
      return <p>{b.text}</p>;
    case "list":
      return (
        <ul className="ticks">
          {b.items.map((i) => (
            <li key={i}>
              <Check />
              <span>{i}</span>
            </li>
          ))}
        </ul>
      );
    case "numbered":
      return (
        <ol>
          {b.items.map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ol>
      );
    case "note":
      return <div className="aside hand">{b.text}</div>;
    case "figure":
      return (
        <figure>
          <Image src={b.src} alt={b.alt} width={b.width} height={b.height} sizes="(max-width: 800px) 100vw, 760px" />
          {b.caption && <figcaption>{b.caption}</figcaption>}
        </figure>
      );
  }
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) notFound();
  const others = caseStudies.filter((c) => c.slug !== cs.slug);

  return (
    <>
      <CrayonFilter />
      <Nav />
      <main id="top" className="cs">
        <article className="col">
          <Link className="back" href="/#work">
            <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
              <path d="M12 7H2M6 3 2 7l4 4" />
            </svg>
            All work
          </Link>
          <h1>
            {cs.title} <span>{cs.subtitle}</span>
          </h1>
          <dl className="facts">
            <div>
              <dt>Started</dt>
              <dd>{cs.date}</dd>
            </div>
            <div>
              <dt>Duration</dt>
              <dd>{cs.duration}</dd>
            </div>
            <div>
              <dt>Squad</dt>
              <dd>{cs.squad}</dd>
            </div>
            <div>
              <dt>My role</dt>
              <dd>{cs.role}</dd>
            </div>
          </dl>
          <figure className="cover">
            <Image src={cs.cover.src} alt={cs.cover.alt} width={cs.cover.width} height={cs.cover.height} priority sizes="(max-width: 800px) 100vw, 760px" />
          </figure>
          <p className="summary">{cs.summary}</p>
          <div className="impact">
            <h2>
              Impact <span className="hand">the short version</span>
            </h2>
            <ul className="ticks">
              {cs.impact.map((i) => (
                <li key={i}>
                  <Check />
                  <span>{i}</span>
                </li>
              ))}
            </ul>
          </div>
          {cs.body.map((b, i) => (
            <Render key={i} b={b} />
          ))}
          <nav className="next" aria-label="More case studies">
            {others.map((o) => (
              <Link key={o.slug} href={`/work/${o.slug}`}>
                <span>Next case study</span>
                <b>
                  {o.title}, {o.subtitle.toLowerCase()}
                </b>
              </Link>
            ))}
          </nav>
        </article>
        <Footer />
      </main>
    </>
  );
}
