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
  | { type: "code"; text: string; caption?: string } // monospace block
  | { type: "links"; items: { label: string; href: string }[] }; // external links, e.g. a live demo

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
    slug: "dibby",
    title: "Dibby",
    subtitle: "Getting the group chat from \"we should\" to a day, a spot and who's coming",
    date: "2026",
    duration: "2026 to now, web app live at dibby.social",
    squad: "Ee, solo",
    role: "Founder: product, design and engineering",
    cover: {
      src: "/work/dibby/cover.webp",
      width: 1600,
      height: 1000,
      alt: "Three Dibby phone screens: picking a day and time with Dibby, a guest voting on where to go, and a dinner plan locked in",
    },
    summary:
      "Everyone's keen, nobody locks it in. Dibby is my own consumer app for getting a group of friends from \"we should catch up\" to actually going. You tell Dibby the plan, drop one link in the group chat, your mates tap in and vote on where and when, and afterwards Dibby splits the bill. Your mates never need the app or an account. I designed and built it end to end, from the product and the brand to the code, and it's live at dibby.social.",
    label: {
      origin: "Sydney, my own product",
      producer: "Ee, solo",
      lot: "No. 05",
      process: "Web first, then iPhone and Android",
      varietal: "Consumer social app",
      altitude: "Group chats of uni students and Gen Z",
      harvest: "2026, ongoing",
      roast: "Live on the web, native app in progress",
    },
    notes: ["No app for your mates", "Free, all of it", "Never touches money"],
    blend: { research: 15, systems: 20, ui: 35, code: 30 },
    recipe: [
      { k: "Dose", v: "One link, dropped in the group chat" },
      { k: "Grind", v: "One or two questions per screen, with Dibby asking them" },
      { k: "Temperature", v: "Copy that sounds like the group chat, not a bank" },
      { k: "Time", v: "Plan, vote, lock it in, then square up after" },
      { k: "Yield", v: "Plans that actually happen" },
    ],
    impact: [
      "Mates join from a link with just a name: no app, no account, no sign-up",
      "Making a plan feels like a chat with Dibby, not a form",
      "Voting on where and when, with ties settled by Dibby spinning the wheel",
      "Bills split and settled by PayID, without Dibby ever holding or moving money",
      "Every feature free, said plainly on the landing page so people trust it",
    ],
    body: [
      {
        type: "video",
        src: "https://www.youtube-nocookie.com/embed/g_aLxWdFYg8",
        title: "Dibby launch video",
        caption: "The Dibby launch video, made with Runway",
      },
      { type: "h2", text: "The problem" },
      {
        type: "p",
        text: "Every group chat has the same thread. Someone says we should catch up, five people say they're keen, and then nothing happens. Nobody wants to be the one chasing a day, picking a spot and working out who owes what afterwards. The tools that exist ask everyone to download an app or make an account, which is exactly where a casual plan dies.",
      },
      {
        type: "p",
        text: "Dibby is built for that moment, for uni students and Gen Z in Australia first. The organiser does a few taps, and everyone else just taps a link.",
      },
      { type: "h2", text: "Making a plan feels like a chat" },
      {
        type: "p",
        text: "The first version was a form, and it worked, but it felt like admin. So making a plan became a short conversation with Dibby, the character who lives in every plan: what are we doing, when are we going, where. One or two questions per screen, big type, quick picks you can tap, and a text box if you'd rather just say \"dumplings fri arvo near Newtown\". Times are parts of the day, like arvo and late, because that's how people talk about plans.",
      },
      {
        type: "figure",
        src: "/work/dibby/make-a-plan.webp",
        alt: "Four phone screens making a plan: what are we doing, when are we going, where are we going, and the plan made with a share button",
        caption: "What, when, where, then share it to the group chat",
        width: 2000,
        height: 1066,
      },
      { type: "note", text: "Dibby looks like it's listening" },
      { type: "h2", text: "Your mates don't need the app" },
      {
        type: "p",
        text: "The plan is one link. It opens as a readable web page in WhatsApp or wherever the group lives, and a guest joins with just a name. Adding an email later unlocks more, like chat, but nobody has to commit before they've seen the value. It's the same idea as checking out as a guest in a shop.",
      },
      {
        type: "p",
        text: "Can't decide where? Everyone going can add places from the map and vote, with up to three picks each. The top pick wins when voting closes, or the organiser locks it in early. And if it's a tie, Dibby spins for it.",
      },
      {
        type: "figure",
        src: "/work/dibby/the-crew-decides.webp",
        alt: "Four phone screens: a guest joining with their name, the guest voting on places, the organiser's view of the vote, and a tie with a Spin for it button",
        caption: "A guest joins with a name, everyone votes, and a tie gets settled with a spin",
        width: 2000,
        height: 1066,
      },
      { type: "h2", text: "Square up after" },
      {
        type: "p",
        text: "After the plan, one person pays, Dibby splits it, and everyone sees the PayID to pay them back in their own bank app. Dibby never holds or moves money, and only you and whoever paid see your share; everyone else just sees how many have settled. Or, if the crew's all in, spin the wheel and one person shouts.",
      },
      {
        type: "figure",
        src: "/work/dibby/locked-in.webp",
        alt: "Three phone screens: the plan chat, a dinner plan locked in with calendar and directions, and the organiser's up next list",
        caption: "The plan chat, locked in with calendar and directions, and what's up next",
        width: 2000,
        height: 1402,
      },
      { type: "h2", text: "Dibby, the friend in the chat" },
      {
        type: "p",
        text: "Dibby is both the app and a member of every plan. Tag @dibby in the chat and it finds three real spots for the crew to vote on, checked against the map so they exist and are open. It nudges people who haven't voted, and the organiser can set how it talks, from chill to extra, and how chatty it is.",
      },
      { type: "h2", text: "A brand and a design system" },
      {
        type: "list",
        items: [
          "A violet and lime palette and Bricolage Grotesque, pushed bold for headings",
          "A 3D Dibby mascot, with poses and expressions for loading, empty states and the moments worth celebrating",
          "A design system built on AlignUI and themed to Dibby, with one set of tokens generating both the web and native themes",
          "Copy rules so the app sounds like the group chat: arvo, keen, shout, square up",
          "Light and dark mode throughout",
        ],
      },
      { type: "h2", text: "Free, and saying so" },
      {
        type: "p",
        text: "Every feature is free for everyone, in the browser and in the app, and the landing page says so plainly, along with the honest answer to \"so what's the catch?\". Down the track, venues may pay to appear as a suggestion, always labelled Sponsored and never with extra votes. Trust is the product, so the rules are written where people can see them.",
      },
      { type: "h2", text: "What I did" },
      {
        type: "list",
        items: [
          "Product: the problem, the audience, the guest-first model and what's free",
          "Design: every flow from making a plan to settling up, in light and dark",
          "Brand: the name, the mascot, the palette, the type and the voice",
          "Engineering: the Next.js web app on Supabase and Vercel, and the iPhone and Android app in Expo",
          "Launch: the landing page and the launch video",
        ],
      },
      { type: "h2", text: "What I learned" },
      {
        type: "list",
        items: [
          "Value first, sign-up later. Every step you ask of a guest loses people",
          "A character makes an AI feature feel like a friend rather than a feature",
          "The words matter as much as the screens. A plan app has to sound like the group chat it lives in",
        ],
      },
      { type: "h2", text: "What's next" },
      {
        type: "p",
        text: "The iPhone and Android app, with notifications, saved crews and receipt scanning, then a bigger launch for the start of the uni year.",
      },
      {
        type: "links",
        items: [
          { label: "dibby.social", href: "https://dibby.social/" },
          { label: "Make a plan, it's free", href: "https://dibby.social/new" },
          { label: "Watch the launch video on YouTube", href: "https://www.youtube.com/watch?v=g_aLxWdFYg8" },
        ],
      },
    ],
  },
  {
    slug: "picasso",
    title: "Picasso",
    subtitle: "IR's design system, built to be read by people and agents",
    date: "2026",
    duration: "April 2026 to now, v2.0 shipped October 2026",
    squad: "Ee, with IR's front-end chapter",
    role: "Sole designer, author of tokens, components and docs",
    cover: {
      src: "/work/picasso-cover.png",
      width: 1440,
      height: 662,
      alt: "A Clarion screen fragment built on Picasso tokens",
    },
    summary:
      "I joined Integrated Research as its first product designer, with no design function and several products that each looked like whoever built them. Picasso is how one designer makes the right screen the easy one to build: 138 semantic colour tokens in light and dark, five theme axes, 60 documented components and one version across Figma, npm and the docs. The repo is the source of truth, and an agent building a screen reads the same rules an engineer does.",
    label: {
      origin: "Integrated Research, Sydney",
      producer: "Ee, one designer, built with IR's front-end chapter",
      lot: "No. 03",
      process: "Repo first, Figma is a consumer",
      varietal: "Design system, agent readable",
      altitude: "Every IR cloud product, 60 components",
      harvest: "2026, ongoing",
      roast: "In production, v2.0",
    },
    notes: ["One token set", "No raw hex", "Agent readable"],
    blend: { research: 10, systems: 50, ui: 15, code: 25 },
    recipe: [
      { k: "Dose", v: "138 semantic colour tokens, 60 components, 5 theme axes, 2 brands" },
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
      "746 automated tests and custom lint rules, so contrast, right-to-left layout and off-system values fail before review",
    ],
    body: [
      { type: "h2", text: "Where it started" },
      {
        type: "p",
        text: "I joined IR in April 2026 as its first product designer. IR is an ASX-listed software company with several products, including Prognosis and Clarion, and until then there was no design function. Products were designed by whoever built them, so each one had its own blues, its own buttons and its own way of saying something went wrong.",
      },
      {
        type: "p",
        text: "One designer can't sit in every team's meetings. So the question wasn't what a screen should look like, but how to make the right screen the easiest one to build, even when I'm not in the room. Picasso is my answer.",
      },
      { type: "h2", text: "How it was built" },
      {
        type: "numbered",
        items: [
          "Audit. I went through every product and the existing Figma library and logged real defects: ghost buttons with a resting fill, toasts with both an action and a close, one variant at a different radius from its siblings. They became Picasso's list of things it must never do.",
          "Tokens first. Colour, type, spacing, radius, motion and layering, as data in the repo. Figma receives them through a sync plugin instead of being the place they're decided.",
          "Components in dependency order. Button first, because it sits inside Alert, Toast, Dialog, Drawer and Sidebar. Then forms, overlays and tables, and the monitoring pieces off-the-shelf kits don't have: KPI tile, meter, threshold slider, sparkline, heatmap.",
          "Docs and content rules at the same time. A component isn't done until it has guidance, empty, loading and error copy, and a story.",
        ],
      },
      {
        type: "p",
        text: "I built it with IR's front-end chapter, not for them. Figma decides how a component behaves, the repo decides every token value, and neither side fixes the other without checking which one is right.",
      },
      { type: "h2", text: "The repo is the source of truth" },
      {
        type: "p",
        text: "Most design systems start in Figma and get ported to code, and the two drift. Picasso runs the other way. Tokens and components live in the repo as @ir/tokens and @ir/ui, the docs render the real React components, and Figma is synced from the same values. A change lands once and shows up everywhere with one version number.",
      },
      {
        type: "figure",
        src: "/work/picasso/docs-home.webp",
        alt: "The Picasso docs home: packages @ir/tokens and @ir/ui, built on Tailwind v4, Radix and React 19, with the Clarion and Vantage brands",
        caption: "The docs, at ir-picasso.vercel.app. One version across Figma, npm and this site",
        width: 1600,
        height: 1000,
      },
      { type: "h2", text: "Try the theming axes" },
      {
        type: "p",
        text: "Colour, radius, spacing, main type and mono type are the five axes. Below is a small piece of a Clarion screen built on Picasso's real token values. Flip the mode and the radius and spacing scales and watch every component follow, because none of them know their own colours.",
      },
      { type: "picasso" },
      { type: "note", text: "click a swatch to copy its hex" },
      { type: "h2", text: "A brand is a set of choices, not a fork" },
      {
        type: "p",
        text: "A brand is one small file that picks an option per axis (colour, warm or cool neutrals, radius, spacing, type) and inherits everything else. I proved it with a second test brand, Vantage, before anyone needed one.",
      },
      {
        type: "figure",
        src: "/work/picasso/create-a-brand.webp",
        alt: "Picasso's Create a brand page: a colour picker generating an eleven-step OKLCH ramp beside a live monitoring screen that re-themes as you change it",
        caption: "Create a brand: pick a colour, a neutral, a radius, spacing and type, and watch real components change",
        width: 1600,
        height: 1000,
      },
      {
        type: "p",
        text: "The hard part was colour. Generate a ramp freely and some hues can't carry white text, and the tempting fix is to flip the button text to dark. Then a primary button looks different in every brand. Instead, the generator solves lightness down until white text passes WCAG AA, so between brands only the hue changes. OKLCH lightness isn't contrast, so it solves rather than looking up a table.",
      },
      { type: "note", text: "a red brand doesn't make errors green" },
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
      {
        type: "p",
        text: "The full llms.txt grew past half a megabyte, which is a lot of context to spend before writing a line. So Picasso also runs a small read-only MCP server. An agent asks about the one component it's using and gets about twenty lines back: the import, props, variants, do's and don'ts, and the accessibility rules. Both come out of the same build, so they can't disagree.",
      },
      {
        type: "p",
        text: "And if an agent still produces off-system code, the rule is that the docs failed, not the agent. We log which rule was broken and where it was, or wasn't, written down.",
      },
      { type: "h2", text: "Hard to go off-system" },
      {
        type: "figure",
        src: "/work/picasso/colour-docs.webp",
        alt: "Picasso's colour foundations page, opening with the rule never a raw value, with examples of what to write instead",
        caption: "The colour docs start with the rule, then show what to write instead",
        width: 1600,
        height: 1000,
      },
      {
        type: "p",
        text: "Guidelines people have to remember don't scale. Checks do.",
      },
      {
        type: "list",
        items: [
          "Lint rules reject raw hex values, Tailwind palette colours, physical left and right properties, and pages that skip the content width",
          "746 automated tests, including every text-on-colour pair in both modes, right-to-left layout and the motion rules",
          "Right-to-left from the start: Arabic, Hebrew and Persian work, with metrics, IP addresses and code kept left-to-right",
          "Motion that has to earn it: most things don't move, and what does uses named animations from tokens, with reduced motion handled",
        ],
      },
      { type: "h2", text: "Foundations and content, not just components" },
      {
        type: "list",
        items: [
          "Foundations: grid, spacing, radius, typography, colour, with tokens and brand blocks that generate [data-brand] CSS",
          "Content: voice and register, casing, buttons and labels, errors, empty and loading states, numbers, units and time, terminology",
          "Components: 60 live React components with variants, states and guidance, from Accordion to Tooltip, including KpiTile, Meter, Sparkline, Heatmap and ThresholdSlider for monitoring work",
          "Contributing: a component checklist, and a route for reporting off-system output back into the system",
        ],
      },
      { type: "h2", text: "What it changed" },
      {
        type: "list",
        items: [
          "One designer supporting many teams through a system, not more meetings",
          "Problems caught on screen, not in production: contrast, right-to-left and off-system values fail before review",
          "Products that feel like one company: Clarion and the provisioning portal share one token set",
          "Next to measure: how much new UI is built from Picasso components, and how often off-system output gets reported",
        ],
      },
      { type: "h2", text: "What I learned" },
      {
        type: "list",
        items: [
          "Build the system with engineering, not for it. The best rules came from engineers asking why they couldn't just do something",
          "A name the owner has to look up is a broken name. If I had to check what a token meant, so would everyone else",
          "Check a claim against the source before repeating it, including my own numbers",
          "A rule that isn't checked is a suggestion",
        ],
      },
      { type: "h2", text: "Where it lives" },
      {
        type: "p",
        text: "The docs are at ir-picasso.vercel.app, with an MCP endpoint for agents. Clarion and the provisioning portal are built on it. Next: a command palette, a log viewer and a metrics view, and a machine-readable design contract that a prototype can be checked against.",
      },
    ],
  },
  {
    slug: "clarion",
    title: "Clarion",
    subtitle: "Call-readiness for contact-centre agents, and fleet health for the people who support them",
    date: "2026",
    duration: "April 2026 to November 2026",
    squad: "Ee, with IR's Clarion product and engineering team",
    role: "Sole product designer, design engineering",
    cover: {
      src: "/work/clarion/overview.webp",
      width: 1600,
      height: 1000,
      alt: "The Clarion fleet overview: active endpoints, open alerts, the Clarion Network Score and a world map of endpoints by region",
    },
    summary:
      "Clarion is a new cloud product from Integrated Research for contact-centre IT. It has two halves: a small widget on every agent's machine that says, in plain language, whether they're ready for calls, and a fleet dashboard that shows admins the health of every endpoint at once. I designed both, from problem framing to working React, as IR's only product designer, and built them on Picasso, the design system I was creating at the same time.",
    label: {
      origin: "Integrated Research, Sydney",
      producer: "Ee, the only designer, with the Clarion team",
      lot: "No. 04",
      process: "Designed in code, on Picasso",
      varietal: "B2B monitoring, endpoint widget and fleet dashboard",
      altitude: "Every agent desktop in a contact centre",
      harvest: "2026",
      roast: "Working React product",
    },
    notes: ["Plain-language states", "Fleet visibility", "Built on Picasso"],
    blend: { research: 20, systems: 20, ui: 35, code: 25 },
    recipe: [
      { k: "Dose", v: "One widget, one dashboard: overview, endpoints and thresholds" },
      { k: "Grind", v: "Map every state the widget can be in before drawing a screen" },
      { k: "Temperature", v: "Say what's wrong and what happens next, in words an agent can act on" },
      { k: "Time", v: "April to November 2026" },
      { k: "Yield", v: "A product built entirely from Picasso tokens and components, light and dark" },
    ],
    impact: [
      "An agent sees one clear answer, ready for calls or not, with the reason in plain language",
      "Every widget state designed, including licensing, waiting for data, failed collection and reconnecting",
      "Admins see fleet health, the endpoints needing attention and why, without opening each machine",
      "Warning and critical thresholds the customer can tune per metric",
      "Built on Picasso, so light and dark mode and every status colour come from one token set",
    ],
    body: [
      { type: "h2", text: "The problem" },
      {
        type: "p",
        text: "In a contact centre, a bad call is often not the agent's fault. A headset drops out, the Wi-Fi gets jittery or the calling platform can't be reached, and the customer hears it before anyone knows why. The agent raises a ticket, IT goes looking, and by then the call is over.",
      },
      {
        type: "p",
        text: "Clarion monitors each agent's devices, network, system and calling platforms (Teams, Zoom, Webex, Genesys Cloud and NICE CXone) and serves two people: the agent, who needs to know whether they're ready for calls, and the IT admin, who needs to know which of a thousand machines need help first.",
      },
      { type: "h2", text: "The widget: one answer, in plain language" },
      {
        type: "p",
        text: "The widget lives in the system tray. Most of the time it says one thing, \"You're ready for calls\", and stays out of the way. When something goes wrong, the affected tile turns amber or red and says what happened in words an agent can act on: your headphones disconnected and the call fell back to your laptop speakers. No error codes, no jargon.",
      },
      {
        type: "figure",
        src: "/work/clarion/widget-states.webp",
        alt: "Four Clarion widget states side by side: ready for calls, a weak Wi-Fi warning, headphones not working, and reconnecting with last-known readings",
        caption: "Four of the widget's states: ready, a weak network, a disconnected headset, and reconnecting with last-known readings",
        width: 2000,
        height: 598,
      },
      {
        type: "p",
        text: "Before drawing anything, I mapped every state the widget can be in, not just healthy and broken. Checking the licence, not licensed, waiting for first data, data collection failed, reconnecting, and reconnecting from a cold start each have their own design. When the connection drops, the last-known readings stay on screen with a \"last updated\" time, so the agent isn't looking at a blank panel or, worse, a green tick that's out of date.",
      },
      { type: "note", text: "the green tick has to be earned" },
      {
        type: "p",
        text: "To show the states to stakeholders and customers, I built an interactive demo: a mock agent desktop with a video call, where you open Clarion from the tray and switch agents and issues to see exactly what each person would see.",
      },
      {
        type: "figure",
        src: "/work/clarion/widget-demo.webp",
        alt: "The Clarion widget demo: a mock video call on an agent desktop, with a panel for choosing an agent and simulating an issue",
        caption: "The demo, live at ir-clarion.vercel.app/widget#/demo. Open Clarion from the tray, then simulate an issue",
        width: 1600,
        height: 1000,
      },
      { type: "h2", text: "The dashboard: which machines need help first" },
      {
        type: "p",
        text: "The admin side starts with the whole fleet: active endpoints against the total, open alerts, and the Clarion Network Score, one number for overall health. A map groups endpoints by region, so a problem in one site stands out from a problem everywhere.",
      },
      {
        type: "p",
        text: "Below that is a list of the endpoints needing attention, sorted by severity, with the reason on the row: packet loss, high latency, an audio driver that failed, a platform that can't be reached. Selecting one opens its detail beside the list, split into network, calling platforms, devices and system, so an admin can triage without losing their place.",
      },
      {
        type: "figure",
        src: "/work/clarion/endpoint-detail.webp",
        alt: "Clarion's endpoints needing attention list, with one endpoint open showing quality index, latency, packet loss and jitter",
        caption: "Triage in place: the list stays put while the endpoint's detail opens beside it",
        width: 1600,
        height: 1000,
      },
      {
        type: "figure",
        src: "/work/clarion/endpoints.webp",
        alt: "The Clarion endpoints table, filtered to endpoints with alerts, showing status, location, network score and the latest alert",
        caption: "Every endpoint, filterable by alerts, location and status",
        width: 1600,
        height: 1000,
      },
      { type: "h2", text: "Thresholds the customer owns" },
      {
        type: "p",
        text: "What counts as a warning in one contact centre is normal in another. So the thresholds behind every status are the customer's to set: network quality, Wi-Fi signal, CPU, memory and disk each have a warning and a critical point on a slider, with the direction spelled out, higher is worse or lower is worse.",
      },
      {
        type: "figure",
        src: "/work/clarion/thresholds.webp",
        alt: "Clarion threshold settings, with warning and critical points on sliders for network quality, Wi-Fi signal, CPU, memory and disk",
        caption: "One rule per metric, applied to every endpoint unless a custom threshold overrides it",
        width: 1600,
        height: 1000,
      },
      { type: "h2", text: "Built on Picasso" },
      {
        type: "p",
        text: "Clarion was the first product built on Picasso, IR's design system, and the two grew together. The status colours, the KPI tiles, the meters and the threshold slider are Picasso components, and the product never uses a raw hex value. Dark mode wasn't a separate design: it comes from the same tokens.",
      },
      {
        type: "figure",
        src: "/work/clarion/overview-dark.webp",
        alt: "The Clarion fleet overview in dark mode",
        caption: "Dark mode, from the same token set",
        width: 1600,
        height: 1000,
      },
      { type: "h2", text: "What I did" },
      {
        type: "list",
        items: [
          "Framed the problem and the two audiences, agents and IT admins",
          "Mapped and designed every widget state, including licensing, data and connection states",
          "Designed the fleet overview, endpoint triage, endpoints table and threshold settings",
          "Wrote the UX copy and error states, so each problem comes with a plain-language reason",
          "Built it in React, Next.js and Tailwind on Picasso, including the interactive widget demo",
        ],
      },
      { type: "h2", text: "What I learned" },
      {
        type: "list",
        items: [
          "The in-between states are the product. Healthy and broken are easy; waiting, reconnecting and out-of-date are where trust is won or lost",
          "Designing in code made the states real. A tray, a call and a dropped headset in a demo did more than a Figma flow",
          "Building a product and a design system at the same time keeps the system honest",
        ],
      },
      { type: "h2", text: "See it" },
      {
        type: "links",
        items: [
          { label: "Clarion fleet dashboard", href: "https://ir-clarion.vercel.app/" },
          { label: "Widget demo: open Clarion from the tray, then simulate an issue", href: "https://ir-clarion.vercel.app/widget#/demo" },
          { label: "Picasso, the design system it's built on", href: "https://ir-picasso.vercel.app/" },
        ],
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
