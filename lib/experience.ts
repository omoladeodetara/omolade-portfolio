// Lade's career, shown on the home timeline and the About page.
// Source: Lade's own CV. Don't add results or numbers that aren't in it.

export interface ExperienceDetail {
  id: string
  type: string
  title: string
  company?: string
  companyLinkedIn?: string
  period: string
  location?: string
  color: string
  tags?: string[]
  description?: string
  responsibilities?: string[]
  achievements?: string[]
  technologies?: string[]
  links?: { label: string; url: string }[]
  slug?: string
  connectionId?: string
}

export const professionalExperiences: ExperienceDetail[] = [
  {
    id: "2024-sii",
    type: "Professional Experience",
    title: "Product Owner, Dynamic Pricing",
    company: "Amadeus",
    companyLinkedIn: "https://www.linkedin.com/company/amadeus/",
    period: "July 2024 - Present",
    location: "France · via Groupe SII",
    color: "#615fff",
    tags: ["Airlines", "Travel", "AI Driven Dynamic Pricing", "API Governance"],
    description:
      "External contractor to Amadeus through Groupe SII, working on airline dynamic pricing. Product Definition Analyst from July 2024, Product Owner from June 2025, and Product Definition Analyst again since December 2025.",
    responsibilities: [
      "Implement and manage a centralized dynamic pricing cockpit that unifies pricing across all products, services and sales channels",
      "Give airline pricing analysts precise control over AI-driven pricing strategies, so they can react quickly to the market",
      "Give pricing analysts real-time visibility into revenue trends and competitor pricing",
      "Own API and data model governance",
      "Write technical studies and solution overviews for dynamic pricing enhancements, and validate them with developers, QA and stakeholders",
    ],
    links: [{ label: "Groupe SII", url: "https://www.linkedin.com/company/groupe-sii/" }],
  },
  {
    id: "2023-leanspace",
    type: "Professional Experience",
    title: "Product Owner",
    company: "Leanspace",
    companyLinkedIn: "https://www.linkedin.com/company/leanspace/",
    period: "November 2022 - August 2023",
    location: "Strasbourg, France",
    color: "#615fff",
    tags: ["Space", "Satellites", "SaaS"],
    description:
      "Leanspace is a cloud platform that gives space companies their whole software infrastructure, so they can build the space economy of the future.",
    responsibilities: [
      "Led the team building the second generation of the telemetry and anomaly detection services, including models that detect anomalies in space asset operations",
      "Led teams building microservices for managing rockets, satellites and other space assets",
      "Directed R&D on new data processing technologies and methods, which fed the platform's analytics and processing",
      "Started the strategy for a third-party developer platform: API standards, a developer engagement program, and a marketplace for third-party services and plugins",
    ],
  },
  {
    id: "2021-bossbusworld",
    type: "Professional Experience",
    title: "Technical Product Manager (Developer Experience)",
    company: "Bossbusworld",
    companyLinkedIn: "https://www.linkedin.com/company/bossbusworld/",
    period: "January 2021 - November 2022",
    location: "Lagos, Nigeria",
    color: "#615fff",
    tags: ["Travel", "SaaS", "Developer Ecosystem"],
    description:
      "Bossbusworld connects luxury vehicle fleet owners with travelers. I ran developer experience: the platform that let other companies build on it.",
    responsibilities: [
      "Led the platform strategy that let third-party developers extend the product: API documentation, a developer portal, and integration support",
      "Worked with airlines and flight ticketing companies to put our service in their booking flow, so passengers could book a vehicle as an add-on",
      "Led the vehicle fleet and passenger marketplace",
      "Built and launched an enterprise platform with management tools and analytics for owners of multi-vehicle fleets",
    ],
  },
  {
    id: "2019-pledre",
    type: "Professional Experience",
    title: "Product Manager",
    company: "Pledre",
    companyLinkedIn: "https://www.linkedin.com/company/pledre/",
    period: "January 2019 - January 2021",
    location: "Lagos, Nigeria",
    color: "#615fff",
    tags: ["Education", "Infrastructure", "B2B"],
    description:
      "Pledre is an EdTech startup offering B2B SaaS for building interactive virtual learning environments. This is where I moved into product management.",
    responsibilities: [
      "Led the Stripe integration so schools on the platform could take payments in foreign currencies, which opened the product to international customers",
      "Researched digital education trends and used engagement data and feedback to keep features competitive",
      "Ran the whole product development process with agile methods, from feasibility studies through delivery",
      "Set up the channels and workflows that connected development, marketing, sales and support",
    ],
  },
  {
    id: "2017-artquake",
    type: "Professional Experience",
    title: "Software Engineer",
    company: "ArtQuake",
    companyLinkedIn: "https://www.linkedin.com/company/artquake/",
    period: "May 2017 - December 2018",
    location: "Lagos, Nigeria",
    color: "#615fff",
    tags: ["UI", "Interactivity", "Digital Experiences"],
    description:
      "ArtQuake is a multimedia company making visual and interactive experiences for a digital magazine platform. I worked there as a freelance software engineer.",
    responsibilities: [
      "Built front-end software for multimedia projects",
      "Started the team's library of reusable React components",
      "Improved usability by getting developers and designers working together",
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "React"],
  },
]

export const volunteerActivities: ExperienceDetail[] = [
  {
    id: "vol-2023-mva",
    type: "Volunteer Space Activity",
    title: "MVA - Lunar Technical Coordination",
    company: "Moon Village Association",
    companyLinkedIn: "https://www.linkedin.com/company/moon-village-association/",
    period: "September 2023 - Present",
    color: "#ffb86a",
    description:
      "Member of the Global Expert Group on Sustainable Lunar Activities (GEGSLA), focusing on coordinating technical standards, protocols, and best practices to ensure safe and efficient lunar activities.",
    responsibilities: [
      "Coordinate technical standards and protocols for lunar activities",
      "Facilitate information exchange among organizations planning lunar missions",
      "Contribute to safety and efficiency guidelines for lunar operations",
      "Participate in working group meetings and technical discussions",
    ],
    achievements: [
      "Technical co-author of the framework for sustainable lunar activities drafted by the Moon Village Association and GEGSLA, presented to the UN Committee on the Peaceful Uses of Outer Space",
      "Coordinator and platform lead for information exchange between space agencies and companies planning lunar surface missions",
    ],
    links: [{ label: "Moon Village Association", url: "https://moonvillageassociation.org/" }],
  },
  {
    id: "vol-2021-mva",
    type: "Volunteer Space Activity",
    title: "MVA - Interoperability Subgroup Co-Chair",
    company: "Moon Village Association",
    companyLinkedIn: "https://www.linkedin.com/company/moon-village-association/",
    period: "January 2021 - September 2023",
    color: "#ffb86a",
    description:
      "Co-chaired the Interoperability and Compatibility subgroup within the Global Expert Group on Sustainable Lunar Activities (GEGSLA), preparing materials for submission to the UN Committee on the Peaceful Use of Outer Space (UNCOPUOS).",
    responsibilities: [
      "Co-led the Interoperability and Compatibility subgroup",
      "Prepared technical materials for UN COPUOS submissions",
      "Coordinated international expert contributions",
      "Organized working group meetings and discussions",
    ],
    links: [
      { label: "Moon Village Association", url: "https://moonvillageassociation.org/" },
      { label: "UN COPUOS", url: "https://www.unoosa.org/oosa/en/ourwork/copuos/index.html" },
    ],
  },
  {
    id: "vol-2020-spacehubs",
    type: "Volunteer Space Activity",
    title: "Spacehubs Africa Analyst",
    company: "Spacehubs Africa",
    companyLinkedIn: "https://www.linkedin.com/company/spacehubs-africa/",
    period: "August 2020 - August 2021",
    color: "#ffb86a",
    description:
      "Served as a Business and Communication Analyst for Spacehubs Africa, working to promote space technology development and applications across the African continent.",
    responsibilities: [
      "Analyzed business opportunities for space technology in Africa",
      "Developed communication strategies for space technology awareness",
      "Facilitated partnerships between African space organizations",
      "Conducted research on space technology applications for development",
    ],
  },
  {
    id: "vol-2020-spaceapps",
    type: "Volunteer Space Activity",
    title: "NASA SpaceApps Lagos Lead",
    company: "NASA SpaceApps Lagos",
    companyLinkedIn: "https://www.linkedin.com/company/nasa-space-apps-challenge/",
    period: "August 2020 - August 2021",
    color: "#ffb86a",
    description:
      "Led the coordination of NASA's Space Apps Challenge in Lagos, Nigeria, organizing a 48-hour international hackathon focused on space exploration and developing solutions to global challenges.",
    responsibilities: [
      "Coordinated the local organization of NASA's Space Apps Challenge",
      "Recruited participants and mentors for the hackathon",
      "Secured sponsorships and partnerships for the event",
      "Facilitated problem-solving sessions during the hackathon",
    ],
    links: [{ label: "NASA Space Apps Challenge", url: "https://www.spaceappschallenge.org/" }],
  },
  {
    id: "vol-2020-sgac",
    type: "Volunteer Space Activity",
    title: "SGAC - Commercial Space Project",
    company: "Space Generation Advisory Council",
    companyLinkedIn: "https://www.linkedin.com/company/space-generation-advisory-council/",
    period: "July 2020 - August 2021",
    color: "#ffb86a",
    description:
      "Member of the Commercial Space Project Group (CSPG) within the Space Generation Advisory Council, the largest network of young professionals and alumni in the space industry.",
    responsibilities: [
      "Contributed to research on commercial space developments",
      "Participated in working group discussions and projects",
      "Helped develop policy recommendations for commercial space activities",
      "Collaborated with international team members on project deliverables",
    ],
    links: [{ label: "Space Generation Advisory Council", url: "https://generation.org/" }],
  },
  {
    id: "vol-2020-spacegen",
    type: "Volunteer Space Activity",
    title: "SpaceGen United Delegate",
    company: "Space Generation Advisory Council",
    companyLinkedIn: "https://www.linkedin.com/company/space-generation-advisory-council/",
    period: "July 2020",
    color: "#ffb86a",
    description:
      "Selected as a delegate for the SpaceGen United online Congress, representing Nigeria in discussions about the future of space exploration and applications.",
    responsibilities: [
      "Participated in working groups and panel discussions",
      "Represented Nigerian perspective on space development",
      "Contributed to congress recommendations and outcomes",
      "Networked with international space professionals",
    ],
    links: [{ label: "Space Generation Advisory Council", url: "https://spacegeneration.org/" }],
  },
]

export const sideProjects: ExperienceDetail[] = [
  {
    id: "side-monizoom",
    type: "Side Project",
    title: "MoniZoom",
    period: "Mar - Jun 2023",
    color: "#00d5be",
    description:
      "Developed a borderless banking platform that accelerates global reach with reliable financial services. Part of the FANDI venture studio portfolio.",
    technologies: ["React", "Next.js", "Tailwind CSS", "Financial APIs"],
    links: [
      { label: "MoniZoom Website", url: "https://monizoom.vercel.app/" },
      { label: "FANDI Venture Studio", url: "/projects/founders-and-innovators" },
    ],
    connectionId: "2023-leanspace",
    slug: "monizoom",
  },
  {
    id: "side-nesthub",
    type: "Side Project",
    title: "NestHub",
    period: "May - Dec 2021",
    color: "#00d5be",
    description:
      "Created a platform for connecting property developers with potential homeowners and investors. Part of the FANDI venture studio portfolio.",
    technologies: ["Node.js", "Express", "MongoDB", "React"],
    connectionId: "2021-bossbusworld",
    slug: "nesthub",
    links: [{ label: "FANDI Venture Studio", url: "/projects/founders-and-innovators" }],
  },
  {
    id: "side-zyleme",
    type: "Side Project",
    title: "Zyleme",
    period: "Jan - Jul 2020",
    color: "#00d5be",
    description: "Developed a learning management system focused on skill development for tech professionals.",
    technologies: ["Vue.js", "Firebase", "EdTech"],
    connectionId: "2019-pledre",
    slug: "zyleme",
  },
  {
    id: "side-founders",
    type: "Side Project",
    title: "Co-founder and Lead Product Manager",
    company: "Founders and Innovators (FANDI)",
    period: "January 2021 - November 2022",
    color: "#00d5be",
    description:
      "Co-founded a venture studio and holding company that launched multiple startups across transportation, fintech, real estate, healthcare, and blockchain sectors.",
    technologies: ["Venture Studio", "Startup Incubation", "Product Strategy", "Business Development"],
    links: [
      { label: "FANDI Portfolio", url: "/projects/founders-and-innovators" },
      { label: "Crunchbase Profile", url: "https://www.crunchbase.com/organization/founders-and-innovators" },
    ],
    connectionId: "2021-bossbusworld",
    slug: "founders-and-innovators",
  },
  {
    id: "side-talahive",
    type: "Side Project",
    title: "TalaHive",
    period: "Sep 2018 - Feb 2019",
    color: "#00d5be",
    description:
      "Created a shared studio space and community for visual artists with professional-grade equipment, resources, and a collaborative environment.",
    technologies: ["Studio Design", "Community Building", "Membership Models", "Creative Spaces", "Artist Resources"],
    connectionId: "2017-artquake",
    slug: "talahive",
  },
]
