// Project pages built from Lade's own repositories and live sites.
// Only state what the repo, README or live site shows. No invented results or numbers.

export interface CaseStudyLink {
  label: string
  url: string
}

export interface CaseStudySection {
  heading: string
  paragraphs: string[]
  points?: { title: string; body: string }[]
}

export interface CaseStudy {
  slug: string
  title: string
  subtitle: string
  description: string
  image?: { src: string; alt: string }
  extraImage?: { src: string; alt: string; caption: string }
  client: string
  timeline: string
  role: string
  technologies: string[]
  sections: CaseStudySection[]
  links: CaseStudyLink[]
  note?: string
}

export const caseStudies: Record<string, CaseStudy> = {
  "section-31": {
    slug: "section-31",
    title: "Section 31",
    subtitle: "Robotic fleet operations",
    description:
      "Section 31 builds a fleet operations platform around robots from existing manufacturers, starting on Earth with analog missions and field teams, with space as the destination.",
    image: { src: "/project-cards/section-31.jpg", alt: "The s31.space homepage: Robots. Deployed." },
    client: "Section 31 (my company)",
    timeline: "2026 - Present",
    role: "Founder",
    technologies: ["JavaScript", "Mission simulator", "Vercel"],
    sections: [
      {
        heading: "The idea",
        paragraphs: [
          "The robots already exist. What is missing is the work of putting them to use: sourcing proven platforms, adapting them with design partners, integrating tools and workflows, and operating them alongside real teams, including analog mission crews.",
        ],
      },
      {
        heading: "The fleet",
        paragraphs: ["Different roles, one coordinated fleet. Every engagement starts with an assignment, such as inspection rounds, route surveys, equipment handling or resupply."],
        points: [
          { title: "Crew Unit", body: "Equipment handling, experiment support, inspection rounds and day-to-day field operations." },
          { title: "Sec Unit", body: "Patrol, situational awareness, anomaly investigation, crew escort and emergency support." },
          { title: "Scout Unit", body: "Route assessment, site surveys, mapping and remote observation." },
          { title: "Work Unit", body: "Material handling, infrastructure assembly, maintenance and construction support." },
          { title: "Cargo Unit", body: "Equipment transport, resupply and logistics between teams, facilities and future outposts." },
        ],
      },
      {
        heading: "What I built",
        paragraphs: [
          "The website, and the mission software for supervised analog EVA missions: operator leases, command pulses, a watchdog and e-stop, and evidence debriefs after each run. It runs against a simulator today.",
        ],
      },
    ],
    links: [{ label: "s31.space", url: "https://s31.space" }],
  },

  "lunar-index": {
    slug: "lunar-index",
    title: "Lunar Index",
    subtitle: "A registry for lunar missions, objects and activities",
    description:
      "Index Stream is a concept for a shared registry and tracking system for activity on the Moon, so operators can see each other's missions and spot conflicts before they happen.",
    image: { src: "/project-cards/lunar-index.png", alt: "The Lunar Index prototype dashboard with sample data" },
    extraImage: {
      src: "/project-cards/lunar-workshop.png",
      alt: "Lunar Workshop Materials site for the LOGIC/LSIC/GEGSLA virtual workshop",
      caption: "Materials site for the LOGIC/LSIC/GEGSLA virtual workshop: agenda, Miro board, flyer and email template.",
    },
    client: "Side project, from my GEGSLA work",
    timeline: "April 2025 - December 2025",
    role: "Product lead and builder",
    technologies: ["Next.js", "TypeScript", "Postgres", "Vercel"],
    sections: [
      {
        heading: "The challenge",
        paragraphs: [
          "More countries and companies are sending missions to the Moon. Landing sites are becoming premium real estate, resource claims overlap, and communication frequencies are getting crowded. There is no shared place where operators register what they are doing and where.",
        ],
      },
      {
        heading: "The solution",
        paragraphs: [
          "I wrote the product specification and built a working prototype. The prototype dashboard uses sample data.",
        ],
        points: [
          { title: "Registry", body: "Missions, objects and activities, linked to each other, with launching states, actors, locations and timelines." },
          { title: "Lunar map and timeline", body: "Where assets are on the surface, which missions are active, and what is planned." },
          { title: "Conflict alerts", body: "Notifications when missions overlap, with tiered access for the public, verified operators and administrators." },
        ],
      },
    ],
    links: [
      { label: "Prototype", url: "https://v0-index-stream-ui-p-roject.vercel.app" },
      { label: "Workshop materials", url: "https://v0-lunar-workshop.vercel.app" },
    ],
  },

  tads: {
    slug: "tads",
    title: "TADS",
    subtitle: "Telemetry anomaly detection for satellites",
    description:
      "A serverless service that ingests satellite telemetry in real time, detects anomalies against thresholds, and manages alerts.",
    image: { src: "/project-cards/tads.png", alt: "TADS title card" },
    client: "Side project",
    timeline: "May 2025",
    role: "Builder",
    technologies: ["TypeScript", "AWS Lambda", "Serverless Framework"],
    sections: [
      {
        heading: "The challenge",
        paragraphs: [
          "Satellite links are uneven. Some passes give a steady, low-bandwidth stream; others arrive as periodic high-bandwidth bursts. An anomaly detector has to handle both without dropping data.",
        ],
      },
      {
        heading: "The solution",
        paragraphs: [
          "Connectors for both kinds of link, a buffering and processing service, threshold-based anomaly detection, and a monitor service for configurable alerts, deployed as AWS Lambda functions. It builds on the telemetry and anomaly detection work I led at Leanspace.",
        ],
      },
    ],
    links: [{ label: "GitHub", url: "https://github.com/omoladeodetara/tads-telemetry-anomaly-detection-systems" }],
  },

  interzept: {
    slug: "interzept",
    title: "Interzept",
    subtitle: "Mock, modify and override API calls",
    description:
      "Developer tools for testing against APIs that are not ready, or not safe to touch: a Chrome extension and an npm package.",
    image: { src: "/project-cards/interzept.png", alt: "Interzept title card" },
    client: "Side project",
    timeline: "December 2025",
    role: "Builder",
    technologies: ["TypeScript", "React", "Chrome Extension (Manifest V3)", "Tailwind CSS", "npm"],
    sections: [
      {
        heading: "What it does",
        paragraphs: ["Two pieces that share one goal: let a developer decide where each request goes."],
        points: [
          { title: "Browser extension", body: "Create rules to intercept, mock or modify HTTP requests, watch intercepted calls live, and keep rules in Chrome sync storage." },
          { title: "Environment selector", body: "An npm package that lets you pick environments (dev, UAT, prod) and data sources (mock, local, API), or merge several at once. It hides itself in production." },
        ],
      },
    ],
    links: [
      { label: "GitHub", url: "https://github.com/interzept" },
      { label: "npm package", url: "https://www.npmjs.com/package/@interzept/interzept-environment-selector" },
    ],
  },

  "arazzo-visualizer": {
    slug: "arazzo-visualizer",
    title: "Arazzo Visualizer",
    subtitle: "See API workflows written in Arazzo",
    description:
      "A React component, published on npm, that lints and draws Arazzo specifications: the OpenAPI Initiative's standard for describing sequences of API calls.",
    image: { src: "/project-cards/arazzo-visualizer.png", alt: "Arazzo Visualizer title card" },
    client: "Side project",
    timeline: "August 2025 - November 2025",
    role: "Builder",
    technologies: ["React", "TypeScript", "Arazzo", "OpenAPI", "npm"],
    sections: [
      {
        heading: "The challenge",
        paragraphs: [
          "An Arazzo file describes a workflow, such as log in, add to cart, pay, confirm, as YAML. It is precise but hard to read, and mistakes in step dependencies are easy to miss.",
        ],
      },
      {
        heading: "The solution",
        paragraphs: [
          "The component shows each workflow step by step, with the dependencies between steps, the inputs and outputs passed along, and the success criteria. The demo renders a purchase flow and a refund flow.",
        ],
      },
    ],
    links: [
      { label: "npm package", url: "https://www.npmjs.com/package/arazzo-visualizer-poc" },
      { label: "GitHub", url: "https://github.com/omoladeodetara/arazzo-visualizer-poc" },
    ],
  },

  aloud: {
    slug: "aloud",
    title: "Aloud",
    subtitle: "One voice for every AI tool on your machine",
    description:
      "Reads what Claude Code, Codex, Copilot CLI and browser chats say, as they say it, so you can follow several agents without watching every window.",
    image: { src: "/project-cards/aloud.png", alt: "Aloud title card" },
    client: "Side project",
    timeline: "September 2026 - October 2026",
    role: "Builder",
    technologies: ["Python", "Claude Code hooks", "Text to speech"],
    sections: [
      {
        heading: "What it does",
        paragraphs: [
          "Each reply is read as soon as it is written. When the speaker changes, Aloud announces the tool and session, and each tool has its own voice. Long replies become a short spoken summary, with a key to hear the full text.",
        ],
        points: [
          { title: "Many sources", body: "Claude Code through hooks, Codex, Copilot CLI and Antigravity by tailing their logs, browser chats through a userscript, and anything else through a local HTTP endpoint." },
          { title: "Player window", body: "Who is talking, a timeline of turns, the current sentence highlighted, and per-session mute." },
          { title: "Phone page", body: "Listen from another room, and talk back." },
        ],
      },
    ],
    links: [],
    note: "The code is private for now.",
  },

  promptuary: {
    slug: "promptuary",
    title: "Promptuary",
    subtitle: "The Church of the Prompt",
    description:
      "A philosophical toolkit for prompt consciousness: noticing, questioning and consciously rewriting the mental scripts that shape our lives.",
    image: { src: "/project-cards/promptuary.png", alt: "Promptuary title card" },
    client: "Side project",
    timeline: "June 2025",
    role: "Author and builder",
    technologies: ["Next.js", "TypeScript", "Genkit", "Gemini", "Radix UI"],
    sections: [
      {
        heading: "What is inside",
        paragraphs: [],
        points: [
          { title: "Doctrine explorer", body: "The foundational texts, searchable, with five levels of prompt consciousness." },
          { title: "Interpretive AI", body: "Ask for a reading of any passage." },
          { title: "Daily practice", body: "A Morning Compile to set intentions and an Evening Debug to look back on the day." },
        ],
      },
    ],
    links: [],
  },

  "bold-move": {
    slug: "bold-move",
    title: "Bold Move",
    subtitle: "A real-time multiplayer financial prediction game",
    description:
      "Host a lobby, share the game code, and compete live on financial questions. Built to run as a party game, online or at an in-person event.",
    image: { src: "/project-cards/bold-move.png", alt: "The Bold Move start screen: Host Game or Join Game" },
    client: "Side project",
    timeline: "March 2025 - Present",
    role: "Product lead and builder",
    technologies: ["Next.js", "TypeScript", "Node.js", "Socket.IO", "Expo", "Docker"],
    sections: [
      {
        heading: "How it works",
        paragraphs: [
          "A host creates a lobby and players join with a code. The game moves from a waiting room to live rounds to results, with leaderboards across games.",
        ],
        points: [
          { title: "Game backend", body: "An Express and Socket.IO server with an OpenAPI contract." },
          { title: "Bold Max", body: "A streaming-style home for the game: game modes, live rooms, categories and profiles." },
          { title: "Events and phones", body: "Host a game at an in-person event. Bold Go, a phone app built with Expo, joins a game by code." },
        ],
      },
    ],
    links: [{ label: "Play", url: "https://bold-move-ten.vercel.app" }],
  },

  "compact-task-manager": {
    slug: "compact-task-manager",
    title: "Compact Task Manager",
    subtitle: "Dark compact performance graphs at sign-in",
    description:
      "On Windows it opens Task Manager in the compact Performance Summary view at sign-in. On macOS and Linux it runs a small monitor with CPU, memory, disk, network and GPU graphs.",
    image: { src: "/project-cards/compact-task-manager.png", alt: "Compact Task Manager title card" },
    client: "Side project",
    timeline: "October 2026",
    role: "Builder",
    technologies: ["PowerShell", "Python", "Tk", "psutil", "GitHub Actions"],
    sections: [
      {
        heading: "Built for agents too",
        paragraphs: [
          "Setup and diagnostics print JSON, so a coding agent can install, check and remove it without guessing. There is no telemetry, missing sensors are shown as unavailable, and CI tests it on Windows, macOS and Linux.",
        ],
      },
    ],
    links: [{ label: "GitHub", url: "https://github.com/omoladeodetara/compact-task-manager" }],
  },
}
