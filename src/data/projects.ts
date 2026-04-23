export interface ProjectCaseStudy {
  slug: string;
  title: string;
  tagline: string;
  role: string;
  timeline: string;
  techStack: readonly string[];

  problem: string;
  constraints: readonly string[];
  decisions: readonly {
    choice: string;
    reasoning: string;
    alternativeRejected?: string;
  }[];
  tradeoffs: readonly string[];
  outcome: string;

  links: {
    live?: string;
    repo?: string;
  };
  thumbnail: string;
  imageAlt: string;
  gallery?: readonly string[];
}

export const PROJECTS: readonly ProjectCaseStudy[] = [
  {
    slug: "tamda",
    title: "Tamda",
    tagline: "Logistics management platform for bulk vendor shipments",
    // TODO: What was your role? (e.g. "Solo frontend", "Frontend lead, N-person team")
    role: "TODO",
    // TODO: When did you build this and how long did it take? (e.g. "3 months, 2024")
    timeline: "TODO",
    // TODO: What technologies did you use? List all frameworks, libraries, tools
    techStack: ["TODO"],

    // TODO: Expand this — what was the actual user pain or business need that caused this to be built?
    // Who was struggling with what before Tamda existed? (2-3 sentences)
    problem:
      "Bulk vendor shipment scheduling was handled manually, causing delays and errors for logistics operators. TODO: Who specifically felt this pain? What was breaking down?",

    // TODO: What constraints shaped your technical decisions? Examples:
    // "No budget for paid APIs", "Had to ship in 6 weeks", "Legacy backend we couldn't change",
    // "Client required IE11 support", "Solo dev with no design resources"
    constraints: ["TODO"],

    // TODO: Fill in each decision you made — what you chose, why, and what you ruled out.
    // Examples: chose React Query over Redux for server state; chose REST over GraphQL because the backend was already built
    decisions: [
      {
        choice: "TODO",
        reasoning: "TODO",
        alternativeRejected: "TODO",
      },
    ],

    // TODO: What did you consciously give up? Every real project has tradeoffs.
    // Examples: "Skipped unit tests to hit deadline — added them post-launch",
    // "No SSR because client didn't need SEO", "Used a UI library instead of custom components to ship faster"
    tradeoffs: ["TODO"],

    // TODO: What changed because of this project? Numbers are best.
    // Examples: "Reduced scheduling errors by ~40%", "Used by 3 vendors handling 200+ orders/month",
    // "Cut manual data entry from 2 hours/day to 15 minutes"
    outcome: "TODO",

    links: {
      // TODO: Add live URL if deployed
      live: undefined,
      // TODO: Add GitHub repo URL if public
      repo: undefined,
    },
    thumbnail: "/assets/tamda-project.png",
    imageAlt:
      "Screenshot of Tamda – logistics management platform for bulk vendor shipments",
  },

  {
    slug: "fastcare",
    title: "Fastcare",
    tagline: "E-commerce store for phone accessories",
    // TODO: What was your role?
    role: "TODO",
    // TODO: When and how long?
    timeline: "TODO",
    // TODO: Tech stack used?
    techStack: ["TODO"],

    // TODO: Why did this store need to be built? Was there an existing store being replaced?
    // Who are the customers and what friction did they have before? (2-3 sentences)
    problem:
      "Phone accessories buyers needed a dedicated storefront with secure checkout and fast delivery guarantees. TODO: Was this replacing an existing solution? What was the client's specific pain?",

    // TODO: Constraints — budget, timeline, integrations required (payment gateway, shipping API), etc.
    constraints: ["TODO"],

    // TODO: Key decisions — e.g. "Chose Stripe over VNPay because...", "Built custom cart vs using a library because..."
    decisions: [
      {
        choice: "TODO",
        reasoning: "TODO",
        alternativeRejected: "TODO",
      },
    ],

    // TODO: Tradeoffs made on this project
    tradeoffs: ["TODO"],

    // TODO: Measurable outcome — orders processed, conversion rate, load time improvement, etc.
    outcome: "TODO",

    links: {
      live: undefined,
      repo: undefined,
    },
    thumbnail: "/assets/fastcare-project.png",
    imageAlt: "Screenshot of Fastcare – phone accessories e-commerce store",
  },

  {
    slug: "skyline",
    title: "Skyline",
    tagline: "Cross-platform mobile app for school–parent communication",
    // TODO: What was your role? This is a mobile app — were you the only dev, or part of a team?
    role: "TODO",
    // TODO: When and how long?
    timeline: "TODO",
    // TODO: Was this React Native? Expo? Any backend you owned?
    techStack: ["TODO"],

    // TODO: What communication problem were teachers and parents having before Skyline?
    // Was this replacing WeChat groups, paper notices, a different app? (2-3 sentences)
    problem:
      "Homeroom teachers and parents lacked a reliable channel for school communication. TODO: What specifically was failing — missed notices, no read receipts, scattered channels? How many families did this affect?",

    // TODO: Mobile-specific constraints are interesting — iOS/Android parity, offline support,
    // push notifications, school IT policy, device fragmentation, Vietnamese mid-range Android prevalence?
    constraints: ["TODO"],

    // TODO: React Native vs Flutter vs native? Expo managed vs bare? State management choice?
    decisions: [
      {
        choice: "TODO",
        reasoning: "TODO",
        alternativeRejected: "TODO",
      },
    ],

    // TODO: Mobile tradeoffs are rich — e.g. "Skipped offline mode to ship faster",
    // "Used Expo Go so we couldn't access native push notifications directly"
    tradeoffs: ["TODO"],

    // TODO: Was this deployed? How many schools/teachers/parents used it?
    outcome: "TODO",

    links: {
      live: undefined,
      repo: undefined,
    },
    thumbnail: "/assets/skyline-project.png",
    imageAlt:
      "Screenshot of Skyline Mobile App – school communication app for teachers and parents",
  },
];
