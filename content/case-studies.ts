// Long-form case studies, one per /work/<slug> page. Content ported from the Framer site
// (polite-card-224334.framer.app) and tidied; images still point at Framer's CDN until
// `npm run assets` copies them into public/work/.

export type Block =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "list"; items: string[] }
  | { type: "numbered"; items: string[] }
  | { type: "figure"; src: string; alt: string; caption?: string; width: number; height: number }
  | { type: "note"; text: string } // handwritten aside
  | { type: "process" }; // Chameleon's "creating a new brand" diagram, components/BrandProcess.tsx

export type CaseStudy = {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  duration: string;
  squad: string;
  role: string;
  cover: { src: string; width: number; height: number; alt: string };
  summary: string;
  impact: string[];
  body: Block[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "chameleon",
    title: "Chameleon",
    subtitle: "A multi-branded design system for mx51",
    date: "June 2023",
    duration: "A year of planning and build, then ongoing support",
    squad: "2 product designers, 3 front-end engineers, 1 delivery manager",
    role: "Design lead for the system",
    cover: {
      src: "https://framerusercontent.com/images/UCQJvZo2PCNk50KPUxMo0iypQ.jpg",
      width: 1440,
      height: 1024,
      alt: "Chameleon components rendered in three bank brands",
    },
    summary:
      "Chameleon is the design system mx51 uses to design, build and test dashboards and payment apps for some of Australia's major banks, POS partners and payment providers. It let a small team keep up with a fast-growing customer base without giving up consistency, accessibility or speed.",
    impact: [
      "New tenant onboarding cut from two weeks to half a day",
      "One component library serving every brand, so features ship once",
      "WCAG 2.1 met by default across bank-grade products",
      "No more design-to-dev back and forth on the basics",
    ],
    body: [
      { type: "h2", text: "The challenge: growth without drift" },
      {
        type: "p",
        text: "As mx51 took on major Australian banks and more than a hundred POS partners, the existing setup could not keep up. Each product had drifted into its own UI patterns, every new tenant meant hand-rebuilding screens in their colours, and bank-grade accessibility was being checked by hand at the end instead of built in.",
      },
      { type: "p", text: "The approach was two-fold: design everything once in a generic brand we called Gecko Bank, then swap the whole thing to any real brand through the system." },
      { type: "note", text: "the yellow bank, the blue bank, the red bank" },
      {
        type: "list",
        items: [
          "Inconsistent designs across products",
          "High effort to onboard each new tenant",
          "Accessibility that had to hold to bank standards",
          "Slow, repetitive handoffs between design and engineering",
        ],
      },
      { type: "process" },
      { type: "h2", text: "The system" },
      {
        type: "p",
        text: "Chameleon became the single source of truth for design and development at mx51: design tokens, a UI component library, and documentation that engineers and designers both work from. Tenant branding is generated from tokens in minutes rather than rebuilt by hand.",
      },
      {
        type: "list",
        items: [
          "Consistency: unified components across every brand",
          "Efficiency: less time designing and building the same thing twice, faster releases",
          "Accessibility: WCAG 2.1 confidence built into the components",
          "Scalability: new tenant branding in minutes",
        ],
      },
      { type: "h2", text: "What changed" },
      {
        type: "p",
        text: "Onboarding a tenant went from two weeks to half a day. Development time dropped noticeably, so updates and releases came faster. And the daily design-to-dev conversation shifted from pixels to product decisions, because the basics were already agreed.",
      },
    ],
  },
  {
    slug: "xoda",
    title: "XODA",
    subtitle: "Rebranding and simplifying health industry operations",
    date: "February 2022",
    duration: "3 to 6 months",
    squad: "Madhavi and Teja (BA and QA), John Rahme (co-founder)",
    role: "Lead designer, first and only designer",
    cover: {
      src: "https://framerusercontent.com/images/KF6NnfJ65MhOUotVteNpVEhcMYo.png",
      width: 1440,
      height: 1024,
      alt: "XODA BIZ dashboard after the redesign",
    },
    summary:
      "XODA brings operations, finances, marketing and people management into one platform for health businesses. The company moved from the Zenbly brand to XODA to match that ambition, and I led the design side of the change: the product, the sales prototypes, the design system and the culture around it.",
    impact: [
      "Onboarding about 80% faster after the redesign",
      "A design system that sped up feature rollouts",
      "Prototypes that closed deals before engineering built them",
      "A weekly design digest that pulled the whole company into design decisions",
    ],
    body: [
      { type: "h2", text: "Simplifying XODA BIZ" },
      {
        type: "p",
        text: "The platform had been built by the engineering team without a designer, and it showed: features were hard to find and screens tried to do several jobs at once. I simplified the navigation, moved the UI onto the new design system, and gave each screen one job with room to breathe.",
      },
      { type: "list", items: ["Simplified navigation for easier feature access", "UI rebuilt on the new design system", "Single-function screens with more negative space", "About 80% faster onboarding"] },
      {
        type: "figure",
        src: "https://framerusercontent.com/images/KF6NnfJ65MhOUotVteNpVEhcMYo.png",
        width: 1440,
        height: 1024,
        alt: "XODA BIZ dashboard after the redesign",
      },
      { type: "h2", text: "Quick wins for sales: the website integration prototype" },
      {
        type: "p",
        text: "Boutique fitness studios, many on the competitor Mindbody, wanted booking and payments on their own websites. I prototyped that integration in two days so sales could show it before it existed.",
      },
      { type: "note", text: "built in 2 days, closed a 4-site client" },
      {
        type: "figure",
        src: "https://framerusercontent.com/images/vHmKGmqeQH8B40aLdp81cQ9PpU.png",
        width: 1440,
        height: 1118,
        alt: "Website booking integration prototype",
        caption: "The booking and payment flow embedded in a studio's own site.",
      },
      {
        type: "figure",
        src: "https://framerusercontent.com/images/IdJrvvFV679twDdwjPo1Gsjmz4.png",
        width: 1440,
        height: 1395,
        alt: "Prototype screens for the integration",
      },
      { type: "h2", text: "A scalable design system and a new brand" },
      {
        type: "p",
        text: "Built on The Designership's component library and extended for XODA: vibrant, AAA-accessible tints drawn from Tailwind's palette to suit health and wellness; Roobert for headings and Nunito for body text, playful but still professional; and design tokens throughout so the front end stayed maintainable as it grew.",
      },
      { type: "h2", text: "Championing a design-led culture" },
      {
        type: "p",
        text: "A weekly design digest kept the whole company across what was changing and why, and invited feedback from people outside design. It improved cross-team communication, gave non-designers a real say in design decisions, and made the work more transparent.",
      },
      { type: "h2", text: "What I took away" },
      {
        type: "numbered",
        items: [
          "A dedicated product manager to pair with is essential",
          "Design sprints made rapid iteration possible",
          "An established design system accelerates everything after it",
          "Regular documentation and retros keep a small team aligned",
        ],
      },
    ],
  },
];

export const getCaseStudy = (slug: string) => caseStudies.find((c) => c.slug === slug);
