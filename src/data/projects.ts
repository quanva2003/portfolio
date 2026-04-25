export interface ProjectCaseStudy {
  slug: string;
  title: string;
  tagline: string;                    // one-line product description
  role: string;                       // "Frontend engineer, 3–5 person team"
  timeline: string;                   // "2024 – Present"
  platforms: readonly string[];       // ["Web", "Tablet", "Mobile"]
  techStack: readonly string[];

  problem: string;                    // 2–3 sentences: user/business pain
  scope: readonly string[];           // What YOU specifically built
  decisions: readonly {
    choice: string;
    reasoning: string;
  }[];
  tradeoffs: readonly string[];       // What you traded away and why
  shipped: string;                    // What's live and doing its job now

  links: {
    live?: string;
    repo?: string;
    caseStudy?: string;
  };
  thumbnail: string;
  status: 'internal' | 'public' | 'capstone';
}

export const PROJECTS: readonly ProjectCaseStudy[] = [
  {
    slug: 'panda-erp',
    title: 'Panda ERP',
    tagline: 'Multi-branch F&B operations platform — POS, KDS, inventory, and revenue in one real-time system.',
    role: 'Frontend engineer, cross-functional team of 3–5',
    timeline: '2024 – Present',
    platforms: ['Web', 'Tablet', 'Mobile'],
    techStack: ['React', 'React Native', 'TypeScript', 'Zustand', 'Socket.IO', 'REST'],

    problem:
      'Multi-branch restaurant chains run front-of-house, kitchen, inventory, and reporting on disconnected tools. Orders get lost between the table and the kitchen, stock levels drift from reality, and owners have no single view across locations.',

    scope: [
      'Built the POS interface that servers use tableside on tablet and mobile',
      'Built the Kitchen Display System (KDS) that surfaces live order states to kitchen staff',
      'Built inventory tracking and revenue reporting dashboards for branch managers',
      'Wired the order flow end-to-end from POS entry → KDS update → revenue roll-up',
      'Contributed to the shared Zustand state layer used across web, tablet, and mobile clients',
    ],

    decisions: [
      {
        choice: 'One shared React + React Native codebase instead of two separate apps',
        reasoning:
          'The POS and the inventory dashboard share 80% of their domain logic and state shape. Duplicating that across two stacks would have doubled the bug surface. Shared TypeScript types and a shared Zustand store kept business rules in one place.',
      },
      {
        choice: 'Socket.IO for order and KDS sync, REST for everything else',
        reasoning:
          'Order status is the one thing that must never feel delayed — a 3-second lag on a kitchen ticket is a real service problem. REST polling could not give that feel. Everything else (reports, inventory reads) is fine as REST because staleness of a few seconds is invisible to users.',
      },
      {
        choice: 'Zustand over Redux for shared state',
        reasoning:
          'The team size and domain complexity did not justify Redux boilerplate. Zustand gave us one predictable store per domain, with TypeScript inference, and no middleware to maintain.',
      },
    ],

    tradeoffs: [
      'Shared codebase means some screens carry platform-conditional logic (web vs native). Accepted because it is cheaper than maintaining two divergent codebases, and the conditionals are isolated to presentation layers, not business logic.',
      'Socket.IO adds a persistent connection per client and operational complexity (reconnect, auth on resume). Accepted because the realtime feel on order flow is non-negotiable for F&B.',
    ],

    shipped:
      'A platform supporting multi-branch chains, with table-side order entry flowing live to the kitchen display and aggregating into daily revenue and shift dashboards. The same codebase serves web, tablet, and mobile without per-client rewrites.',

    links: {},
    thumbnail: '/assets/skyline-project.png', // TODO: replace with Panda ERP screenshot
    status: 'internal',
  },

  {
    slug: 'tamda-shipment',
    title: 'Tamda Shipment',
    tagline: 'Logistics platform for scheduling bulk vendor shipments and tracking trips in real time.',
    role: 'Frontend engineer',
    timeline: '2024',
    platforms: ['Web'],
    techStack: ['React', 'TypeScript', 'Ant Design', 'Zustand', 'Socket.IO', 'REST'],

    problem:
      "Bulk vendor shipments were scheduled manually across spreadsheets. Route consolidation happened in people's heads, trip status was phoned in, and there was no single view of which vendor's orders were on which truck.",

    scope: [
      'Built interfaces for creating and organizing shipping trips',
      'Built the trip grouping and filtering UI so dispatchers could consolidate vendor orders onto shared routes',
      'Wired real-time shipment status tracking via Socket.IO',
      'Integrated REST APIs for trip persistence and vendor/order lookups',
    ],

    decisions: [
      {
        choice: 'Ant Design as the component base',
        reasoning:
          'Dispatcher-facing dashboards need dense, data-heavy components (tables, filters, date pickers) that behave consistently. Ant Design covers that out of the box. For an internal tool where dispatcher throughput matters more than bespoke visuals, building these from scratch would have been wasted effort.',
      },
      {
        choice: 'Zustand for trip and filter state',
        reasoning:
          'A dispatcher often opens several trips, applies filters, and pivots between views. Keeping that state local to components caused prop-drilling and stale data. One Zustand store per domain kept selection and filter state predictable and survived view changes.',
      },
      {
        choice: 'Socket.IO only on the tracking view, not everywhere',
        reasoning:
          'Only trip status needs to feel live. Trip creation and vendor lists can be REST — opening a socket on every page is wasted overhead for a dispatcher who spends most of their time in CRUD screens.',
      },
    ],

    tradeoffs: [
      'Ant Design adds bundle weight compared to a hand-built system. Accepted because the tool is dispatcher-facing on desktop browsers, not latency-sensitive on mobile networks.',
      'Socket connection is torn down when leaving the tracking view. Accepted because the reconnect cost is cheaper than keeping an idle socket open across every page.',
    ],

    shipped:
      'A dispatcher tool where trips can be created, grouped by route, filtered by vendor or status, and watched live as drivers update progress. Replaces the spreadsheet-plus-phone-call workflow the team had before.',

    links: {},
    thumbnail: '/assets/tamda-project.png',
    status: 'internal',
  },

  {
    slug: 'skyline',
    title: 'Skyline',
    tagline: 'Cross-platform mobile app connecting homeroom teachers and parents around student activity.',
    role: 'Frontend engineer',
    timeline: '2024 – Present',
    platforms: ['iOS', 'Android'],
    techStack: ['React Native', 'TypeScript', 'NativeWind', 'Zustand', 'UI Kitten', 'REST'],

    problem:
      'Homeroom teachers were communicating with parents across personal chat apps. There was no audit trail, no structured place for academic updates, and parents on iOS vs Android were getting different experiences depending on whichever group chat the teacher happened to use.',

    scope: [
      'Built the teacher-side interface for managing student data and posting updates',
      'Built the parent-side interface for tracking classroom activity and academic performance',
      'Implemented in-app navigation and API integration across both user roles',
    ],

    decisions: [
      {
        choice: 'React Native instead of separate iOS + Android native apps',
        reasoning:
          'Two user roles (teacher, parent), two platforms — going native would have meant four codebases. The team already worked in React, so React Native let us reuse hooks, types, and state patterns from the web stack. Shipping one feature once meant shipping it on both platforms the same week.',
      },
      {
        choice: 'NativeWind (Tailwind) + UI Kitten for the design layer',
        reasoning:
          'NativeWind gave us the same utility-first styling discipline we used on web. UI Kitten filled in the accessible primitives we did not want to rebuild — inputs, modals, date pickers. Starting from primitives and styling them ourselves would have added weeks without changing what the user sees.',
      },
      {
        choice: "Zustand for shared state, not context or Redux",
        reasoning:
          "The team already knew Zustand from the broader stack, and the app's state needs (current user, class roster, notifications) fit a small number of focused stores better than Redux's ceremony.",
      },
    ],

    tradeoffs: [
      'React Native imposes a native bridge that shows up on low-end Android devices under heavy list rendering. Accepted because the target users (teachers, parents) are not rendering 10k-item lists — they are reading short updates, and the write-once-ship-twice value outweighs edge-case perf.',
    ],

    shipped:
      "A mobile app where teachers have one structured place to post updates and manage class data, and parents have one place to see their child's activity and performance — instead of watching a patchwork of group chats.",

    links: {},
    thumbnail: '/assets/skyline-project.png',
    status: 'internal',
  },
] as const;
