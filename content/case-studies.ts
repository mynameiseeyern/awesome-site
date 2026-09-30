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
  | { type: "process" } // Chameleon's "creating a new brand" diagram, components/BrandProcess.tsx
  | { type: "video"; src: string; title: string; caption?: string } // Loom embed, 16:9
  | { type: "picasso" } // live Picasso showcase, components/PicassoShowcase.tsx
  | { type: "code"; text: string; caption?: string }; // monospace block

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
  // The bag label: how specialty coffee describes a lot, borrowed for a project.
  label: {
    origin: string; // where it was made
    producer: string; // who made it
    lot: string; // catalogue number
    process: string; // how it was made (the coffee "washed / natural")
    varietal: string; // what kind of work
    altitude: string; // the scale it operates at
    harvest: string; // when
    roast: string; // how far it got: shipped, in production, prototype
  };
  notes: [string, string, string]; // tasting notes: what the work leaves behind
  blend: { research: number; systems: number; ui: number; code: number }; // percentages, sum to 100
  recipe: { k: string; v: string }[]; // brew guide
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "picasso",
    title: "Picasso",
    subtitle: "IR's design system, built to be read by people and agents",
    date: "2026",
    duration: "Ongoing, first release in a few months",
    squad: "Ee, with IR's front-end engineers as consumers",
    role: "Sole designer, author of tokens, components and docs",
    cover: {
      src: "/work/picasso-cover.png",
      width: 1440,
      height: 662,
      alt: "A Clarion screen fragment built on Picasso tokens",
    },
    summary:
      "Picasso is the design system for every IR product: 132 semantic tokens in light and dark, five theme axes, 44 documented components, one version across Figma, npm and the docs. The repo is the source of truth and Figma is a consumer. Every page is also served as Markdown, and the whole system ships as llms.txt files, so an agent building a screen reads the same rules an engineer does.",
    label: {
      origin: "Integrated Research, Sydney",
      producer: "Ee, one designer, with the engineers who consume it",
      lot: "No. 03",
      process: "Repo first, Figma is a consumer",
      varietal: "Design system, agent readable",
      altitude: "Every IR cloud product, 44 components",
      harvest: "2026, ongoing",
      roast: "In production",
    },
    notes: ["One token set", "No raw hex", "Agent readable"],
    blend: { research: 10, systems: 50, ui: 15, code: 25 },
    recipe: [
      { k: "Dose", v: "132 semantic tokens, 44 components, 5 theme axes" },
      { k: "Grind", v: "Tokens in the repo, then components, then docs and Figma sync from the same source" },
      { k: "Temperature", v: "On-colours are measured, not chosen: lightness is solved down until white text passes" },
      { k: "Time", v: "One version number across Figma, npm and the docs, released together" },
      { k: "Yield", v: "Clarion, the provisioning portal and future products themed off one token set, by people or by agents" },
    ],
    impact: [
      "One token set powering Clarion, the provisioning portal and future IR cloud products",
      "Five theme axes (colour, radius, spacing, main and mono type) so a brand is a block of values, not a fork",
      "Published as llms.txt files, so an agent with the token table cannot invent a hex code",
      "Live components in the docs, with variants, states and content guidance beside them",
    ],
    body: [
      { type: "h2", text: "The repo is the source of truth" },
      {
        type: "p",
        text: "Most design systems start in Figma and get ported to code, and the two drift. Picasso runs the other way. Tokens and components live in the repo as @ir/tokens and @ir/ui, the docs render the real React components, and Figma is synced from the same values. A change lands once and shows up everywhere with one version number.",
      },
      { type: "h2", text: "Try the theming axes" },
      {
        type: "p",
        text: "Colour, radius, spacing, main type and mono type are the five axes. Below is a small piece of a Clarion screen built on Picasso's real token values. Flip the mode and the radius and spacing scales and watch every component follow, because none of them know their own colours.",
      },
      { type: "picasso" },
      { type: "note", text: "click a swatch to copy its hex" },
      { type: "h2", text: "Agent readable" },
      {
        type: "p",
        text: "Every docs page is also served as Markdown, and the whole system is published as a set of llms.txt files: an index, the foundations, the components and the token table. When Claude Code or the Figma MCP builds a screen for IR, it reads these first. An agent with the token table cannot invent a hex code, and the content rules travel with it, so the copy comes out in IR's register too.",
      },
      {
        type: "code",
        text: "# https://ir-picasso.vercel.app/llms-tokens.txt\n\nbg/app            surface-app        light #F8FAFC   dark #121926\nbg/canvas         surface-canvas     light #EEF2F6   dark #0A0E15\nbg/card           surface-card       light #FFFFFF   dark #202939\nstatus/healthy    status-healthy     light #079455   dark #47CD89\nstatus/warning    status-warning     light #DC6803   dark #FDB022\nstatus/critical   status-critical    light #D92D20   dark #F97066\n\n# Never use a raw hex. Every colour in Picasso is one of these.",
        caption: "What an agent sees. The same table drives the components above.",
      },
      { type: "h2", text: "Foundations and content, not just components" },
      {
        type: "list",
        items: [
          "Foundations: grid, spacing, radius, typography, colour, with tokens and brand blocks that generate [data-brand] CSS",
          "Content: voice and register, casing, buttons and labels, errors, empty and loading states, numbers, units and time, terminology",
          "Components: 44 live React components with variants, states and guidance, from Accordion to Tooltip, including KpiTile, Meter, Stepper and ThresholdSlider for monitoring work",
          "Contributing: a component checklist, and a route for reporting off-system output back into the system",
        ],
      },
      { type: "h2", text: "Where it lives" },
      {
        type: "p",
        text: "The docs are at ir-picasso.vercel.app. Clarion and the provisioning portal are built on it, and the design agents work that comes next is what it was built for: a machine-readable design contract that a prototype can be checked against.",
      },
    ],
  },
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
    label: {
      origin: "mx51, Sydney",
      producer: "Ee, 2 designers, 3 engineers, 1 delivery manager",
      lot: "No. 02",
      process: "Gecko Bank first, then swap the brand",
      varietal: "Multi-brand design system",
      altitude: "3 banks, 100+ POS partners",
      harvest: "June 2023, ongoing",
      roast: "In production",
    },
    notes: ["Consistency", "Half-day onboarding", "WCAG 2.1"],
    blend: { research: 15, systems: 55, ui: 20, code: 10 },
    recipe: [
      { k: "Dose", v: "2 designers, 3 front-end engineers" },
      { k: "Grind", v: "Tokens first, then components, then documentation" },
      { k: "Temperature", v: "Bank-grade accessibility, held throughout" },
      { k: "Time", v: "12 months to build, then ongoing support" },
      { k: "Yield", v: "A new tenant themed in half a day, down from two weeks" },
    ],
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
      {
        type: "video",
        src: "https://www.loom.com/embed/8aa57d6a9ab040e99778e8a9438bbd3e?sid=e0a92cc1-9edb-41c1-81e8-e2d6bf26dfa5&hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true",
        title: "Chameleon design system explainer",
        caption: "The short explainer made for mx51 staff, including the early colour mapping where the atomic elements were settled first so every product stayed consistent.",
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
    label: {
      origin: "Zenbly, becoming XODA, Sydney",
      producer: "Ee with Madhavi, Teja and John Rahme",
      lot: "No. 01",
      process: "Rebrand, simplify, prototype for sales",
      varietal: "Founding designer, SaaS and mobile",
      altitude: "Health businesses, boutique fitness studios",
      harvest: "February 2022, 3 to 6 months",
      roast: "Shipped",
    },
    notes: ["Simplicity", "Faster onboarding", "Deals closed"],
    blend: { research: 20, systems: 25, ui: 40, code: 15 },
    recipe: [
      { k: "Dose", v: "1 designer, a BA, a QA and a co-founder" },
      { k: "Grind", v: "One job per screen, more negative space" },
      { k: "Temperature", v: "Weekly design digest to keep the company warm" },
      { k: "Time", v: "2 days for the sales prototype, 3 to 6 months overall" },
      { k: "Yield", v: "Onboarding about 80% faster, a 4-facility client signed" },
    ],
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
