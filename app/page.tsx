"use client"

import type React from "react"

import { useState } from "react"
import { Briefcase, GraduationCap, Award, Rocket, Code, ChevronDown, ChevronUp, Linkedin } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Home() {
  // Track expanded items by their IDs
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set())

  const toggleExpand = (id: string) => {
    setExpandedItems((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(id)) {
        newSet.delete(id)
      } else {
        newSet.add(id)
      }
      return newSet
    })
  }

  const highlightConnections = (connectionId: string) => {
    const elements = document.querySelectorAll(`[data-connection="${connectionId}"]`)
    elements.forEach((element) => {
      ;(element as HTMLElement).classList.add("highlighted")
    })
  }

  const removeHighlight = () => {
    const elements = document.querySelectorAll(".highlighted")
    elements.forEach((element) => {
      ;(element as HTMLElement).classList.remove("highlighted")
    })
  }

  return (
    <div className="container py-12 px-4 mx-auto max-w-7xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Omolade Jordan Odetara</h1>
        <p className="text-xl text-[#62748e] max-w-2xl mx-auto">Product Professional | Deep Tech | Interoperability</p>
        <div className="flex flex-wrap justify-center gap-2 mt-4">
          <Badge className="bg-[#615fff] hover:bg-[#615fff]/80">Space Exploration</Badge>
          <Badge className="bg-[#615fff] hover:bg-[#615fff]/80">Air Travel</Badge>
          <Badge className="bg-[#615fff] hover:bg-[#615fff]/80">Developer Experiences</Badge>
          <Badge className="bg-[#615fff] hover:bg-[#615fff]/80">Infrastructure</Badge>
        </div>
        <div className="flex justify-center gap-4 mt-6">
          <a href="mailto:omoladeodetara@gmail.com" className="text-[#00d5be] hover:underline">
            omoladeodetara@gmail.com
          </a>
          <a href="https://www.linkedin.com/in/omoladeodetara" className="text-[#00d5be] hover:underline">
            LinkedIn
          </a>
          <a href="https://omoladeodetara.com/" className="text-[#00d5be] hover:underline">
            Portfolio
          </a>
        </div>
      </div>

      {/* Timeline Legend */}
      <div className="flex flex-wrap justify-center gap-6 mb-10">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-[#615fff]"></div>
          <span>Main Professional Experience</span>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-[#ffb86a]"></div>
          <span>Volunteer Space Activities</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-[#00d5be]"></div>
          <span>Side & Freelance Projects</span>
        </div>
      </div>

      {/* Education and Skills */}
      <div className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <GraduationCap className="mr-2 text-[#ffb86a]" /> Education
          </h2>
          <div className="space-y-4">
            <EducationItem institution="Utiva" degree="Product School, Agile Product Management" />
            <EducationItem
              institution="Obafemi Awolowo University"
              degree="Bachelor of Arts - BA, Fine Arts: Painting/Graphics"
            />
            <EducationItem institution="Ife Business School" degree="Business Development and Entrepreneurship" />
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Award className="mr-2 text-[#ffb86a]" /> Certifications
          </h2>
          <div className="space-y-4">
            <Card>
              <CardContent className="p-4">
                <p className="font-medium">Application Security Analyst Explorer Award</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <p className="font-medium">Ch.DMP, PDG.SMDM, ACISMDM</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <p className="font-medium">Toggl Hire Product Development Skill Test Certificate</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Award className="mr-2 text-[#ffb86a]" /> Core Skills
          </h2>
          <div className="flex flex-wrap gap-2">
            <Badge className="bg-[#314158] hover:bg-[#314158]/80">Product Delivery</Badge>
            <Badge className="bg-[#314158] hover:bg-[#314158]/80">B2B</Badge>
            <Badge className="bg-[#314158] hover:bg-[#314158]/80">Stakeholder Management</Badge>
            <Badge className="bg-[#314158] hover:bg-[#314158]/80">Product Strategy</Badge>
            <Badge className="bg-[#314158] hover:bg-[#314158]/80">Developer Experience</Badge>
            <Badge className="bg-[#314158] hover:bg-[#314158]/80">Platform Strategy</Badge>
          </div>
        </div>
      </div>

      {/* Timeline Headers */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6">
        <div className="md:col-span-6">
          <h2 className="text-2xl font-bold flex items-center text-[#615fff]">
            <Briefcase className="mr-2" /> Professional Experience
          </h2>
        </div>
        <div className="md:col-span-3">
          <h2 className="text-xl font-bold flex items-center text-[#00d5be]">
            <Code className="mr-2" /> Side Projects
          </h2>
        </div>
        <div className="md:col-span-3">
          <h2 className="text-xl font-bold flex items-center text-[#ffb86a]">
            <Rocket className="mr-2" /> Space Activities
          </h2>
        </div>
      </div>

      {/* Parallel Timelines */}
      <div className="relative">
        {/* Time markers */}
        <div className="hidden md:block absolute left-0 top-0 bottom-0 w-16 border-r border-dashed border-gray-200">
          <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-white px-2 text-sm font-bold text-[#62748e]">
            2024
          </div>
          <div className="absolute top-[20%] right-0 transform translate-x-1/2 -translate-y-1/2 bg-white px-2 text-sm font-bold text-[#62748e]">
            2023
          </div>
          <div className="absolute top-[40%] right-0 transform translate-x-1/2 -translate-y-1/2 bg-white px-2 text-sm font-bold text-[#62748e]">
            2022
          </div>
          <div className="absolute top-[60%] right-0 transform translate-x-1/2 -translate-y-1/2 bg-white px-2 text-sm font-bold text-[#62748e]">
            2021
          </div>
          <div className="absolute top-[80%] right-0 transform translate-x-1/2 -translate-y-1/2 bg-white px-2 text-sm font-bold text-[#62748e]">
            2020
          </div>
          <div className="absolute bottom-0 right-0 transform translate-x-1/2 translate-y-1/2 bg-white px-2 text-sm font-bold text-[#62748e]">
            2017
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:pl-16">
          {/* Main Professional Timeline */}
          <div className="md:col-span-6 space-y-8 relative">
            <div className="absolute top-0 bottom-0 left-3 w-px bg-[#615fff]/30 z-0"></div>

            <MainTimelineItem
              id="2024-sii"
              color="#615fff"
              title="Product"
              company="Groupe SII"
              companyLinkedIn={professionalExperiences.find((exp) => exp.id === "2024-sii")?.companyLinkedIn}
              period="July 2024 - Present"
              location="France"
              tags={["Airlines", "Travel", "AI Driven Dynamic Pricing", "Amadeus"]}
              current={true}
              connectionId="2024-sii"
              isExpanded={expandedItems.has("2024-sii")}
              onToggleExpand={() => toggleExpand("2024-sii")}
              details={professionalExperiences.find((exp) => exp.id === "2024-sii")}
            />

            <MainTimelineItem
              id="2023-leanspace"
              color="#615fff"
              title="Product Owner"
              company="Leanspace"
              companyLinkedIn={professionalExperiences.find((exp) => exp.id === "2023-leanspace")?.companyLinkedIn}
              period="November 2022 - August 2023"
              location="Strasbourg, France"
              tags={["Space", "Satellites", "SaaS"]}
              connectionId="2023-leanspace"
              isExpanded={expandedItems.has("2023-leanspace")}
              onToggleExpand={() => toggleExpand("2023-leanspace")}
              details={professionalExperiences.find((exp) => exp.id === "2023-leanspace")}
            />

            <MainTimelineItem
              id="2021-bossbusworld"
              color="#615fff"
              title="Technical Product Manager (Developer Experience)"
              company="Bossbusworld"
              companyLinkedIn={professionalExperiences.find((exp) => exp.id === "2021-bossbusworld")?.companyLinkedIn}
              period="January 2021 - November 2022"
              location="Lagos, Nigeria"
              tags={["Travel", "SaaS", "Developer Ecosystem"]}
              connectionId="2021-bossbusworld"
              isExpanded={expandedItems.has("2021-bossbusworld")}
              onToggleExpand={() => toggleExpand("2021-bossbusworld")}
              details={professionalExperiences.find((exp) => exp.id === "2021-bossbusworld")}
            />

            <MainTimelineItem
              id="2019-pledre"
              color="#615fff"
              title="Product Manager"
              company="Pledre"
              companyLinkedIn={professionalExperiences.find((exp) => exp.id === "2019-pledre")?.companyLinkedIn}
              period="January 2019 - January 2021"
              location="Lagos, Nigeria"
              tags={["Education", "Infrastructure", "B2B"]}
              connectionId="2019-pledre"
              isExpanded={expandedItems.has("2019-pledre")}
              onToggleExpand={() => toggleExpand("2019-pledre")}
              details={professionalExperiences.find((exp) => exp.id === "2019-pledre")}
            />

            <MainTimelineItem
              id="2017-artquake"
              color="#615fff"
              title="Software Engineer"
              company="ArtQuake"
              companyLinkedIn={professionalExperiences.find((exp) => exp.id === "2017-artquake")?.companyLinkedIn}
              period="May 2017 - December 2018"
              location="Lagos, Nigeria"
              tags={["UI", "Interactivity", "Digital Experiences"]}
              connectionId="2017-artquake"
              isExpanded={expandedItems.has("2017-artquake")}
              onToggleExpand={() => toggleExpand("2017-artquake")}
              details={professionalExperiences.find((exp) => exp.id === "2017-artquake")}
              last={true}
            />
          </div>

          {/* Side Projects Timeline */}
          <div className="md:col-span-3 space-y-8 relative">
            <div className="absolute top-0 bottom-0 left-3 w-px bg-[#00d5be]/30 z-0"></div>

            <div className="h-[100px] md:h-[120px]"></div>

            <MinorTimelineItem
              id="side-2023"
              color="#00d5be"
              title="Space Data Visualization Tool"
              period="Mar - Jun 2023"
              connectionId="2023-leanspace"
              isExpanded={expandedItems.has("side-2023")}
              onToggleExpand={() => toggleExpand("side-2023")}
              details={sideProjects.find((exp) => exp.id === "side-2023")}
            />

            <MinorTimelineItem
              id="side-2021"
              color="#00d5be"
              title="API Documentation Platform"
              period="May - Dec 2021"
              connectionId="2021-bossbusworld"
              isExpanded={expandedItems.has("side-2021")}
              onToggleExpand={() => toggleExpand("side-2021")}
              details={sideProjects.find((exp) => exp.id === "side-2021")}
            />

            <MinorTimelineItem
              id="side-2019"
              color="#00d5be"
              title="EdTech Consulting"
              period="Jun 2019 - Dec 2020"
              connectionId="2019-pledre"
              isExpanded={expandedItems.has("side-2019")}
              onToggleExpand={() => toggleExpand("side-2019")}
              details={sideProjects.find((exp) => exp.id === "side-2019")}
            />

            <MinorTimelineItem
              id="side-2017"
              color="#00d5be"
              title="Interactive Portfolio Builder"
              period="Aug 2017 - Mar 2018"
              connectionId="2017-artquake"
              isExpanded={expandedItems.has("side-2017")}
              onToggleExpand={() => toggleExpand("side-2017")}
              details={sideProjects.find((exp) => exp.id === "side-2017")}
              last={true}
            />
          </div>

          {/* Volunteer Space Activities Timeline */}
          <div className="md:col-span-3 space-y-8 relative">
            <div className="absolute top-0 bottom-0 left-3 w-px bg-[#ffb86a]/30 z-0"></div>

            <div className="h-[100px] md:h-[120px]"></div>

            <MinorTimelineItem
              id="vol-2023-mva"
              color="#ffb86a"
              title="MVA - Lunar Technical Coordination"
              period="Sep 2023 - Present"
              connectionId="2023-leanspace"
              isExpanded={expandedItems.has("vol-2023-mva")}
              onToggleExpand={() => toggleExpand("vol-2023-mva")}
              details={volunteerActivities.find((exp) => exp.id === "vol-2023-mva")}
            />

            <MinorTimelineItem
              id="vol-2021-mva"
              color="#ffb86a"
              title="MVA - Interoperability Subgroup Co-Chair"
              period="Jan 2021 - Sep 2023"
              connectionId="2021-bossbusworld"
              isExpanded={expandedItems.has("vol-2021-mva")}
              onToggleExpand={() => toggleExpand("vol-2021-mva")}
              details={volunteerActivities.find((exp) => exp.id === "vol-2021-mva")}
            />

            <MinorTimelineItem
              id="vol-2020-spacehubs"
              color="#ffb86a"
              title="Spacehubs Africa Analyst"
              period="Aug 2020 - Aug 2021"
              connectionId="2020-spacehubs"
              isExpanded={expandedItems.has("vol-2020-spacehubs")}
              onToggleExpand={() => toggleExpand("vol-2020-spacehubs")}
              details={volunteerActivities.find((exp) => exp.id === "vol-2020-spacehubs")}
            />

            <MinorTimelineItem
              id="vol-2020-spaceapps"
              color="#ffb86a"
              title="NASA SpaceApps Lagos Lead"
              period="Aug 2020 - Aug 2021"
              connectionId="2020-spaceapps"
              isExpanded={expandedItems.has("vol-2020-spaceapps")}
              onToggleExpand={() => toggleExpand("vol-2020-spaceapps")}
              details={volunteerActivities.find((exp) => exp.id === "vol-2020-spaceapps")}
            />

            <MinorTimelineItem
              id="vol-2020-sgac"
              color="#ffb86a"
              title="SGAC - Commercial Space Project"
              period="Jul 2020 - Aug 2021"
              connectionId="2020-sgac"
              isExpanded={expandedItems.has("vol-2020-sgac")}
              onToggleExpand={() => toggleExpand("vol-2020-sgac")}
              details={volunteerActivities.find((exp) => exp.id === "vol-2020-sgac")}
            />

            <MinorTimelineItem
              id="vol-2020-spacegen"
              color="#ffb86a"
              title="SpaceGen United Delegate"
              period="Jul 2020"
              connectionId="2020-spacegen"
              isExpanded={expandedItems.has("vol-2020-spacegen")}
              onToggleExpand={() => toggleExpand("vol-2020-spacegen")}
              details={volunteerActivities.find((exp) => exp.id === "vol-2020-spacegen")}
              last={true}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

// First, let's update the ExperienceDetail interface to include a companyLinkedIn field
interface ExperienceDetail {
  id: string
  type: string
  title: string
  company?: string
  companyLinkedIn?: string // Add this line
  period: string
  location?: string
  color: string
  tags?: string[]
  description?: string
  responsibilities?: string[]
  achievements?: string[]
  technologies?: string[]
  links?: { label: string; url: string }[]
}

// Now update the professionalExperiences array to include LinkedIn URLs
const professionalExperiences: ExperienceDetail[] = [
  {
    id: "2024-sii",
    type: "Professional Experience",
    title: "Product",
    company: "Groupe SII",
    companyLinkedIn: "https://www.linkedin.com/company/groupe-sii/",
    period: "July 2024 - Present",
    location: "France",
    color: "#615fff",
    tags: ["Airlines", "Travel", "AI Driven Dynamic Pricing", "Amadeus"],
    description:
      "Working on AI-driven dynamic pricing solutions for the airline industry, leveraging Amadeus technology to optimize revenue management systems.",
    responsibilities: [
      "Lead the development of AI-driven pricing algorithms for airline ticket pricing",
      "Collaborate with data scientists to implement machine learning models",
      "Work with Amadeus APIs to integrate pricing solutions into airline systems",
      "Manage stakeholder relationships across multiple airline clients",
    ],
    achievements: [
      "Successfully launched beta version of dynamic pricing tool",
      "Reduced implementation time by 30% through improved API integration",
      "Developed comprehensive documentation for third-party developers",
    ],
    technologies: ["Python", "Machine Learning", "Amadeus API", "AWS", "Docker"],
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
      "Led product development for a cloud-based platform designed to simplify satellite operations and management. Focused on creating scalable microservices for telemetry processing and anomaly detection.",
    responsibilities: [
      "Led development of telemetry and anomaly detection services",
      "Created microservices for managing space assets",
      "Directed R&D for data processing technologies",
      "Developed third-party developer platform strategy",
      "Managed product roadmap and backlog prioritization",
    ],
    achievements: [
      "Launched new telemetry processing service that reduced data processing time by 40%",
      "Designed and implemented RESTful APIs for third-party integrations",
      "Improved system reliability with comprehensive monitoring solutions",
    ],
    technologies: ["Java", "Spring Boot", "Kubernetes", "AWS", "Kafka", "MongoDB"],
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
      "Led the development of a platform strategy for third-party developers in the travel industry, focusing on API integrations with airlines and fleet management systems.",
    responsibilities: [
      "Created platform strategy for third-party developers",
      "Integrated services with airlines and flight ticketing companies",
      "Developed vehicle fleet-passenger marketplace",
      "Built enterprise platform for vehicle fleet owners",
      "Managed developer documentation and support systems",
    ],
    achievements: [
      "Grew developer ecosystem from 5 to 50+ active partners",
      "Implemented OAuth 2.0 authentication for secure API access",
      "Created comprehensive API documentation that reduced support tickets by 35%",
    ],
    technologies: ["Node.js", "Express", "MongoDB", "REST APIs", "OAuth 2.0", "Swagger"],
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
      "Managed the development of educational technology solutions for schools and businesses, with a focus on payment processing and digital learning platforms.",
    responsibilities: [
      "Integrated Stripe for international currency processing",
      "Conducted market research on digital education trends",
      "Led product development with agile methodologies",
      "Established cross-departmental collaboration",
      "Managed product lifecycle from conception to launch",
    ],
    achievements: [
      "Successfully implemented Stripe payment gateway for international transactions",
      "Launched digital learning platform used by 20+ educational institutions",
      "Reduced development cycle time by 25% through improved agile processes",
    ],
    technologies: ["React", "Node.js", "Stripe API", "PostgreSQL", "AWS"],
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
      "Developed interactive front-end solutions for digital media projects, focusing on user experience and responsive design.",
    responsibilities: [
      "Built front-end software for multimedia projects",
      "Developed reusable React.js components and libraries",
      "Enhanced web usability through developer-designer collaboration",
      "Delivered multimedia content for digital magazine platform",
    ],
    achievements: [
      "Created component library that reduced development time by 30%",
      "Implemented responsive design system used across multiple projects",
      "Improved page load performance by 45% through code optimization",
    ],
    technologies: ["React", "JavaScript", "HTML5", "CSS3", "GSAP", "Webpack"],
  },
]

// Update the volunteerActivities array to include LinkedIn URLs for organizations
const volunteerActivities: ExperienceDetail[] = [
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
      "Contributed to technical standards document submitted to UN COPUOS",
      "Helped establish framework for lunar mission coordination",
      "Facilitated collaboration between international space agencies",
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
    achievements: [
      "Successfully developed interoperability framework for lunar missions",
      "Led the creation of technical standards document adopted by multiple space agencies",
      "Established collaboration protocols between commercial and governmental entities",
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
    achievements: [
      "Created comprehensive report on space technology applications for sustainable development in Africa",
      "Established communication channels reaching over 5,000 space enthusiasts",
      "Helped organize virtual space technology workshops with 500+ participants",
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
    achievements: [
      "Successfully organized hackathon with 150+ participants",
      "Mentored teams that developed innovative solutions to NASA challenges",
      "Established partnerships with 5 local tech companies for event sponsorship",
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
    achievements: [
      "Co-authored white paper on commercial space opportunities in developing nations",
      "Contributed to policy recommendations presented at international space conference",
      "Helped organize virtual workshop on commercial space applications",
    ],
    links: [{ label: "Space Generation Advisory Council", url: "https://spacegeneration.org/" }],
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
    achievements: [
      "Actively contributed to working group on space applications for sustainable development",
      "Presented ideas that were incorporated into final congress recommendations",
      "Established connections with international space professionals",
    ],
    links: [{ label: "Space Generation Advisory Council", url: "https://spacegeneration.org/" }],
  },
]

const sideProjects: ExperienceDetail[] = [
  {
    id: "side-2023",
    type: "Side Project",
    title: "Space Data Visualization Tool",
    period: "Mar - Jun 2023",
    color: "#00d5be",
    description: "Developed a tool to visualize space data using React and D3.js.",
    technologies: ["React", "D3.js"],
  },
  {
    id: "side-2021",
    type: "Side Project",
    title: "API Documentation Platform",
    period: "May - Dec 2021",
    color: "#00d5be",
    description: "Created a platform for generating API documentation using Node.js and Express.",
    technologies: ["Node.js", "Express"],
  },
  {
    id: "side-2019",
    type: "Side Project",
    title: "EdTech Consulting",
    period: "Jun 2019 - Dec 2020",
    color: "#00d5be",
    description: "Provided consulting services to EdTech startups on product strategy and development.",
    technologies: ["Product Strategy", "Agile Development"],
  },
  {
    id: "side-2017",
    type: "Side Project",
    title: "Interactive Portfolio Builder",
    period: "Aug 2017 - Mar 2018",
    color: "#00d5be",
    description: "Developed a tool for creating interactive portfolios using React and Firebase.",
    technologies: ["React", "Firebase"],
  },
]

interface EducationItemProps {
  institution: string
  degree: string
}

const EducationItem: React.FC<EducationItemProps> = ({ institution, degree }) => {
  return (
    <Card>
      <CardContent className="p-4">
        <p className="font-medium">{institution}</p>
        <p className="text-sm text-gray-500">{degree}</p>
      </CardContent>
    </Card>
  )
}

interface TimelineItemProps {
  id: string
  color: string
  title: string
  company?: string
  companyLinkedIn?: string
  period: string
  location?: string
  tags: string[]
  current?: boolean
  last?: boolean
  connectionId: string
  isExpanded: boolean
  onToggleExpand: () => void
  details?: ExperienceDetail
}

interface MainTimelineItemProps {
  id: string
  color: string
  title: string
  company?: string
  companyLinkedIn?: string // Add this line
  period: string
  location?: string
  tags: string[]
  current?: boolean
  last?: boolean
  connectionId: string
  isExpanded: boolean
  onToggleExpand: () => void
  details?: ExperienceDetail
}

// Update the MainTimelineItem component to include the LinkedIn link
function MainTimelineItem({
  id,
  color,
  title,
  company,
  companyLinkedIn,
  period,
  location,
  tags,
  current,
  last,
  connectionId,
  isExpanded,
  onToggleExpand,
  details,
}: MainTimelineItemProps) {
  const highlightConnections = (connectionId: string) => {
    const elements = document.querySelectorAll(`[data-connection="${connectionId}"]`)
    elements.forEach((element) => {
      ;(element as HTMLElement).classList.add("highlighted")
    })
  }

  const removeHighlight = () => {
    const elements = document.querySelectorAll(".highlighted")
    elements.forEach((element) => {
      ;(element as HTMLElement).classList.remove("highlighted")
    })
  }

  return (
    <div
      className="relative pl-8 pb-8 z-10"
      data-connection={connectionId}
      onMouseEnter={() => highlightConnections(connectionId)}
      onMouseLeave={() => removeHighlight()}
    >
      {/* Timeline dot */}
      <div
        className={`absolute top-0 left-0 h-6 w-6 rounded-full border-2`}
        style={{ borderColor: color, backgroundColor: current ? color : "white" }}
      ></div>

      {/* Card */}
      <div
        className={`rounded-lg shadow-sm border bg-[#f8fafc] transition-all duration-300 ${
          isExpanded ? "shadow-md" : ""
        }`}
        style={{ borderColor: `${color}30` }}
      >
        {/* Card Header - Always visible */}
        <div className="p-6">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-3">
            <div>
              <h3 className="text-xl font-bold" style={{ color: color }}>
                {title}
              </h3>
              {company && (
                <div className="flex items-center gap-2">
                  <p className="text-lg font-medium text-[#314158]">{company}</p>
                  {companyLinkedIn && (
                    <a
                      href={companyLinkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${company} LinkedIn`}
                      className="text-[#0077b5] hover:text-[#0077b5]/80 transition-colors"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                  )}
                </div>
              )}
            </div>
            <div className="text-[#62748e] text-sm md:text-right">
              <p>{period}</p>
              {location && <p>{location}</p>}
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <Badge
                key={index}
                variant="outline"
                className="bg-[#f8fafc] border-[#90a1b9]/30"
                style={{ color: color }}
              >
                {tag}
              </Badge>
            ))}
          </div>

          <Button
            variant="ghost"
            size="sm"
            onClick={onToggleExpand}
            className="flex items-center gap-1 text-[#62748e] hover:text-[#314158] transition-colors"
          >
            {isExpanded ? (
              <>
                <ChevronUp className="h-4 w-4" />
                <span>Show less</span>
              </>
            ) : (
              <>
                <ChevronDown className="h-4 w-4" />
                <span>Show more</span>
              </>
            )}
          </Button>
        </div>

        {/* Expandable Content */}
        {isExpanded && details && (
          <div className="px-6 pb-6 pt-0 border-t border-[#90a1b9]/10">
            {details.description && (
              <div className="mb-4">
                <h4 className="text-md font-semibold mb-2 text-[#314158]">Description</h4>
                <p className="text-[#314158]">{details.description}</p>
              </div>
            )}

            {details.responsibilities && details.responsibilities.length > 0 && (
              <div className="mb-4">
                <h4 className="text-md font-semibold mb-2 text-[#314158]">Responsibilities</h4>
                <ul className="list-disc pl-5 text-[#314158] space-y-1">
                  {details.responsibilities.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {details.achievements && details.achievements.length > 0 && (
              <div className="mb-4">
                <h4 className="text-md font-semibold mb-2 text-[#314158]">Key Achievements</h4>
                <ul className="list-disc pl-5 text-[#314158] space-y-1">
                  {details.achievements.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {details.technologies && details.technologies.length > 0 && (
              <div className="mb-4">
                <h4 className="text-md font-semibold mb-2 text-[#314158]">Technologies & Tools</h4>
                <div className="flex flex-wrap gap-2">
                  {details.technologies.map((tech, index) => (
                    <Badge key={index} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {details.links && details.links.length > 0 && (
              <div>
                <h4 className="text-md font-semibold mb-2 text-[#314158]">Related Links</h4>
                <ul className="space-y-1">
                  {details.links.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#00d5be] hover:underline"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

// Update the MinorTimelineItem props interface to include companyLinkedIn
interface MinorTimelineItemProps {
  id: string
  color: string
  title: string
  period: string
  company?: string
  companyLinkedIn?: string
  last?: boolean
  connectionId: string
  isExpanded: boolean
  onToggleExpand: () => void
  details?: ExperienceDetail
}

// Update the MinorTimelineItem component to include the LinkedIn link
function MinorTimelineItem({
  id,
  color,
  title,
  period,
  company,
  companyLinkedIn,
  last,
  connectionId,
  isExpanded,
  onToggleExpand,
  details,
}: MinorTimelineItemProps) {
  const highlightConnections = (connectionId: string) => {
    const elements = document.querySelectorAll(`[data-connection="${connectionId}"]`)
    elements.forEach((element) => {
      ;(element as HTMLElement).classList.add("highlighted")
    })
  }

  const removeHighlight = () => {
    const elements = document.querySelectorAll(".highlighted")
    elements.forEach((element) => {
      ;(element as HTMLElement).classList.remove("highlighted")
    })
  }

  return (
    <div
      className="relative pl-8 pb-8 z-10"
      data-connection={connectionId}
      onMouseEnter={() => highlightConnections(connectionId)}
      onMouseLeave={() => removeHighlight()}
    >
      {/* Timeline dot */}
      <div className={`absolute top-0 left-0 h-4 w-4 rounded-full`} style={{ backgroundColor: color }}></div>

      {/* Card */}
      <div
        className={`rounded-lg shadow-sm border bg-[#f8fafc] transition-all duration-300 ${
          isExpanded ? "shadow-md" : ""
        }`}
        style={{ borderColor: `${color}30` }}
      >
        {/* Card Header - Always visible */}
        <div className="p-3">
          <div className="flex justify-between items-start mb-1">
            <div className="flex-1">
              <h3 className="text-sm font-bold" style={{ color: color }}>
                {title}
              </h3>
              {details?.company && isExpanded && (
                <div className="flex items-center gap-1 mt-1">
                  <p className="text-xs text-[#314158]">{details.company}</p>
                  {details.companyLinkedIn && (
                    <a
                      href={details.companyLinkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${details.company} LinkedIn`}
                      className="text-[#0077b5] hover:text-[#0077b5]/80 transition-colors"
                    >
                      <Linkedin className="h-3 w-3" />
                    </a>
                  )}
                </div>
              )}
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6 p-0 text-[#62748e] hover:text-[#314158]"
              onClick={onToggleExpand}
            >
              {isExpanded ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />}
            </Button>
          </div>
          <p className="text-xs text-[#62748e]">{period}</p>
        </div>

        {/* Expandable Content */}
        {isExpanded && details && (
          <div className="px-3 pb-3 pt-1 border-t border-[#90a1b9]/10">
            {details.description && <p className="text-xs text-[#314158] mb-2">{details.description}</p>}

            {details.responsibilities && details.responsibilities.length > 0 && (
              <div className="mb-2">
                <h4 className="text-xs font-semibold mb-1 text-[#314158]">Responsibilities</h4>
                <ul className="list-disc pl-4 text-xs text-[#314158] space-y-1">
                  {details.responsibilities.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {details.achievements && details.achievements.length > 0 && (
              <div className="mb-2">
                <h4 className="text-xs font-semibold mb-1 text-[#314158]">Achievements</h4>
                <ul className="list-disc pl-4 text-xs text-[#314158] space-y-1">
                  {details.achievements.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {details.technologies && details.technologies.length > 0 && (
              <div className="mb-2">
                <h4 className="text-xs font-semibold mb-1 text-[#314158]">Technologies</h4>
                <div className="flex flex-wrap gap-1">
                  {details.technologies.map((tech, index) => (
                    <Badge key={index} variant="secondary" className="text-[0.65rem] px-1.5 py-0">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {details.links && details.links.length > 0 && (
              <div>
                <h4 className="text-xs font-semibold mb-1 text-[#314158]">Links</h4>
                <ul className="space-y-1">
                  {details.links.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-[#00d5be] hover:underline"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
