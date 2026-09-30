// Every project on the site. Edit copy here; the grid and the peek panel both read from this file.
// Thumbnails follow the "portfolio-sketch-cards" conventions: viewBox 380x170, no stroke/fill
// attributes on shapes (CSS sets them), class="fill" only on paper surfaces.

export type Project = {
  slug: string;
  title: string;
  blurb: string; // one sentence on the card
  notes: [string, string, string]; // tasting notes, three words or short phrases
  company: string;
  years: string;
  role: string;
  lead: string; // two or three sentences in the peek panel
  did: string[]; // three or four lines
  tint: "sky" | "lavender" | "mint" | "rose" | "yellow" | "peach";
  href?: string; // set when a full case-study page exists; otherwise the card opens the peek panel
  Sketch: () => React.JSX.Element;
};

export const projects: Project[] = [
  {
    slug: "clarion",
    title: "Clarion",
    blurb: "An endpoint widget plus a fleet dashboard for contact-centre IT, on IR's Iris AI platform.",
    notes: ["Fleet visibility","Alert states","Shipped React"],
    company: "Integrated Research",
    years: "2026",
    role: "Sole product designer, design engineering",
    lead:
      "A new cloud product on IR's Iris AI platform for contact-centre IT: a widget that lives on every endpoint, and a fleet dashboard that shows admins the health of all of them at once. I own it from problem framing to shipped React.",
    did: [
      "Telemetry alert states and degraded-connectivity behaviour",
      "User management flows, including deactivation and deletion logic",
      "UX copy and error states for the widget install page",
      "Shipped in React, Next.js and Tailwind on shadcn/ui",
    ],
    tint: "sky",
    Sketch: () => (
      <svg viewBox="0 0 380 170" aria-hidden="true">
        <rect className="fill" x="40" y="30" width="180" height="110" rx="5" />
        <path d="M40 50h180M58 70h56M58 84h76M58 98h46" />
        <rect className="fill" x="240" y="58" width="100" height="62" rx="5" />
        <path d="M250 94l16-14 14 9 20-20 18 12" />
        <circle cx="150" cy="118" r="7" />
      </svg>
    ),
  },
  {
    slug: "picasso",
    title: "Picasso design system",
    blurb: "IR's first design system: OKLCH tokens, a shadcn component library and multibrand theming.",
    notes: ["OKLCH tokens","Multibrand","Handoff"],
    company: "Integrated Research",
    years: "2026",
    role: "Design ops lead, author of tokens and components",
    lead:
      "IR's first design system, built from zero. An OKLCH token architecture, a shadcn-based component library and a design-to-engineering handoff that lets every product theme off one token set. Multibrand-ready from day one.",
    did: [
      "OKLCH primitive and semantic token architecture",
      "Component library with Figma variables mapped to code",
      "Design-to-engineering handoff conventions",
      "Token sync across Clarion, the provisioning portal and future products",
    ],
    tint: "lavender",
    href: "/work/picasso",
    Sketch: () => (
      <svg viewBox="0 0 380 170" aria-hidden="true">
        <rect className="fill" x="52" y="36" width="52" height="52" rx="8" />
        <rect className="fill" x="126" y="36" width="52" height="52" rx="8" />
        <rect className="fill" x="200" y="36" width="52" height="52" rx="8" />
        <rect className="fill" x="274" y="36" width="52" height="52" rx="8" />
        <path d="M52 112h74M52 126h46M150 112h74M150 126h38M248 112h70M248 126h50" />
      </svg>
    ),
  },
  {
    slug: "provisioning-portal",
    title: "Provisioning portal",
    blurb: "The internal control plane DevSecOps uses to stand up and manage customer tenants.",
    notes: ["Tenant lifecycle","Shared control plane","DevSecOps"],
    company: "Integrated Research",
    years: "2026",
    role: "Product designer, working directly with DevSecOps",
    lead:
      "The internal portal DevSecOps uses to stand up and manage customer tenants. A shared control plane across all of IR's cloud products, so the same flows serve every product rather than being rebuilt per team.",
    did: [
      "Tenant lifecycle from creation to retirement",
      "Subscription expiry states and labels",
      "Admin permissions and audit visibility",
    ],
    tint: "mint",
    Sketch: () => (
      <svg viewBox="0 0 380 170" aria-hidden="true">
        <rect className="fill" x="40" y="34" width="300" height="104" rx="5" />
        <path d="M40 56h300M58 74h84M58 90h60M58 106h72M58 122h48" />
        <rect className="fill" x="222" y="72" width="96" height="24" rx="5" />
        <path d="M234 84h48" />
        <circle cx="302" cy="84" r="5" />
      </svg>
    ),
  },
  {
    slug: "westpac-health-claiming",
    title: "Westpac health claiming",
    blurb: "A regulated health claims flow on the payment terminal, designed end to end.",
    notes: ["Regulated flow","Accessibility","Discovery"],
    company: "mx51",
    years: "2023 - 2025",
    role: "Lead product designer",
    lead:
      "Westpac's health claims solution, designed end to end: discovery with clinics, customers and health funds, then interaction design, prototyping and delivery in a domain where compliance and accessibility both had to hold without hurting usability.",
    did: [
      "Discovery interviews and workshops with clinics and health funds",
      "Terminal and merchant app flows for claiming and settlement",
      "Usability testing and session replay analysis",
      "Delivery alongside engineering through to release",
    ],
    tint: "rose",
    Sketch: () => (
      <svg viewBox="0 0 380 170" aria-hidden="true">
        <rect className="fill" x="146" y="18" width="88" height="140" rx="12" />
        <path d="M164 48h52M164 64h36M164 84h52M164 100h44" />
        <rect className="fill" x="164" y="120" width="52" height="16" rx="5" />
        <path d="M60 78c12-16 36-16 48 0M272 78c12-16 36-16 48 0" strokeDasharray="3 6" />
      </svg>
    ),
  },
  {
    slug: "chameleon",
    title: "Chameleon design system",
    blurb: "One white-labelled library serving CBA, Westpac and Till Payments.",
    notes: ["Consistency","Half-day onboarding","WCAG 2.1"],
    company: "mx51",
    years: "2022 - 2026",
    role: "Built and maintained across two squads",
    lead:
      "mx51's white-labelled design system, serving CBA, Westpac and Till Payments from one library. Tokens, components, patterns and contribution guidelines that let three brands share one codebase without looking like each other.",
    did: ["Multi-brand token model and theming", "Component and pattern library", "Contribution guidelines for other teams"],
    tint: "yellow",
    href: "/work/chameleon",
    Sketch: () => (
      <svg viewBox="0 0 380 170" aria-hidden="true">
        <rect className="fill" x="44" y="36" width="88" height="98" rx="8" />
        <rect className="fill" x="146" y="36" width="88" height="98" rx="8" />
        <rect className="fill" x="248" y="36" width="88" height="98" rx="8" />
        <path d="M60 58h54M60 74h36M162 58h54M162 74h36M264 58h54M264 74h36" />
        <rect x="60" y="104" width="30" height="14" rx="4" />
        <rect x="162" y="104" width="30" height="14" rx="4" />
        <rect x="264" y="104" width="30" height="14" rx="4" />
      </svg>
    ),
  },
  {
    slug: "merchant-experience-app",
    title: "Merchant experience app",
    blurb: "Tipping, receipts and stored advice on the terminal. About 60% more feature usage, 30% fewer tickets.",
    notes: ["Tipping","Receipts","Fewer tickets"],
    company: "mx51",
    years: "2022 - 2025",
    role: "Lead IC across two squads",
    lead:
      "Merchant-facing work on the Android terminal app: tipping and tip limits, receipts settings, stored advice and the surrounding UX copy. Shipped features saw around 60% more usage and related support tickets fell by about 30%.",
    did: [
      "Tipping and tip-limit flows",
      "Receipts settings and stored advice UI",
      "UX copy across the terminal",
      "About 60% lift in feature usage, 30% fewer related support tickets",
    ],
    tint: "peach",
    Sketch: () => (
      <svg viewBox="0 0 380 170" aria-hidden="true">
        <rect className="fill" x="130" y="18" width="120" height="136" rx="10" />
        <path d="M148 46h84M148 62h48" />
        <rect className="fill" x="148" y="82" width="84" height="22" rx="5" />
        <path d="M158 93h36" />
        <rect className="fill" x="148" y="114" width="84" height="22" rx="5" />
        <path d="M158 125h54" />
        <path d="M282 62l18 5-5 18M98 62l-18 5 5 18" />
      </svg>
    ),
  },
  {
    slug: "xoda",
    title: "XODA",
    blurb: "Rebranding Zenbly as XODA and simplifying a health-business platform, as its first designer.",
    notes: ["Simplicity","Faster onboarding","Deals closed"],
    company: "Zenbly / XODA",
    years: "2022",
    role: "Lead designer, first and only designer",
    lead:
      "XODA brings operations, finances, marketing and people management into one platform for health businesses. I led the rebrand from Zenbly, simplified the product, built the design system and prototyped the integrations sales used to close deals.",
    did: ["Simplified navigation and single-job screens, onboarding about 80% faster", "Website booking integration prototype, built in two days", "Design system on Tailwind tints, Roobert and Nunito", "Weekly design digest for the whole company"],
    tint: "mint",
    href: "/work/xoda",
    Sketch: () => (
      <svg viewBox="0 0 380 170" aria-hidden="true">
        <rect className="fill" x="40" y="26" width="300" height="118" rx="5" />
        <path d="M40 48h300M56 66h40M56 80h40M56 94h40M56 108h40" />
        <path d="M110 48v96" />
        <rect className="fill" x="126" y="64" width="92" height="30" rx="5" />
        <rect className="fill" x="232" y="64" width="92" height="30" rx="5" />
        <path d="M138 79h50M244 79h60M126 110h198M126 124h140" />
        <circle cx="308" cy="79" r="5" />
      </svg>
    ),
  },
];
