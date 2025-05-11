import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export interface ProjectDetailsProps {
  slug?: string
}

// This would typically come from a CMS or API
const getProjectDetails = (slug?: string) => {
  // Project-specific details
  if (slug === "ash-b") {
    return {
      client: "Healthcare Provider",
      role: "Product Lead & Technical Architect",
      timeline: "January 2023 - Present",
      technologies: [
        "Telemedicine",
        "FHIR",
        "RESTful APIs",
        "Mobile Apps",
        "Desktop Interface",
        "End-to-end Encryption",
        "HIPAA/GDPR Compliance",
        "Figma",
        "UI/UX Design",
        "Design Systems",
        "iOS/Android",
        "Responsive Web Design",
      ],
      additionalLinks: [{ url: "/projects/founders-and-innovators", label: "FANDI Venture Studio" }],
      parentCompany: "FANDI (Founders and Innovators)",
      parentCompanySlug: "founders-and-innovators",
    }
  }

  if (slug === "moneybase") {
    return {
      client: "Interview Assessment",
      role: "Product Manager Case Study",
      timeline: "September 2023",
      technologies: [
        "Fintech",
        "Trading Platform",
        "Fractional Shares",
        "Cross-border Payments",
        "React Native",
        "Node.js",
        "MongoDB",
        "Payment APIs",
        "Blockchain",
        "Product Management",
        "Agile Development",
        "User Research",
      ],
    }
  }

  if (slug === "monizoom") {
    return {
      client: "Self-initiated",
      role: "Lead Designer & Frontend Developer",
      timeline: "March - June 2023",
      technologies: [
        "React",
        "Next.js",
        "Tailwind CSS",
        "Figma",
        "UI/UX Design",
        "Financial APIs",
        "Responsive Design",
        "Authentication",
        "Payment Processing",
      ],
      website: "https://monizoom.vercel.app/",
      websiteLabel: "Visit Demo",
      additionalLinks: [{ url: "/projects/founders-and-innovators", label: "FANDI Venture Studio" }],
      parentCompany: "FANDI (Founders and Innovators)",
      parentCompanySlug: "founders-and-innovators",
    }
  }

  if (slug === "talahive") {
    return {
      client: "Self-initiated",
      role: "Founder & Product Lead",
      timeline: "September 2018 - February 2019",
      technologies: [
        "Visual Arts Studios",
        "Community Building",
        "Membership Platform",
        "Exhibition Space",
        "Digital Access Systems",
      ],
    }
  }

  if (slug === "bossbusworld") {
    return {
      client: "Bossbusworld",
      role: "Technical Product Manager (Developer Experience)",
      timeline: "January 2021 - November 2022",
      technologies: [
        "Node.js",
        "Express",
        "MongoDB",
        "REST APIs",
        "OAuth 2.0",
        "Developer Platform",
        "API Documentation",
        "Travel Industry",
        "Fleet Management",
        "Swagger/OpenAPI",
        "SDK Development",
        "Developer Portal",
        "Product Strategy",
      ],
      website: "https://bossbus-technologies.web.app/",
      websiteLabel: "Visit Website",
      additionalLinks: [
        { url: "https://bossbus-landingpage.web.app/", label: "Original Landing Page" },
        { url: "https://bossbus-global.firebaseapp.com/", label: "Web Application" },
        { url: "/projects/founders-and-innovators", label: "FANDI Venture Studio" },
      ],
      parentCompany: "FANDI (Founders and Innovators)",
      parentCompanySlug: "founders-and-innovators",
    }
  }

  if (slug === "blockchain-africa-summit") {
    return {
      client: "FANDI Blockchain Factory",
      role: "Project Manager",
      timeline: "Planned for April 13-14, 2022 (Postponed)",
      technologies: [
        "Blockchain",
        "Cryptocurrency",
        "Web3",
        "Metaverse",
        "Event Planning",
        "Project Management",
        "Eventbrite Integration",
        "Logistics Planning",
        "Speaker Coordination",
        "Sponsor Outreach",
        "Budget Development",
      ],
      additionalLinks: [
        { url: "https://bossbus-technologies.web.app/", label: "Bossbus Website (Planned Sponsor)" },
        { url: "/projects/founders-and-innovators", label: "FANDI Venture Studio" },
      ],
      parentCompany: "FANDI (Founders and Innovators)",
      parentCompanySlug: "founders-and-innovators",
    }
  }

  if (slug === "harvest-credit") {
    return {
      client: "Application for Funding",
      role: "Product Strategy & Fintech Consultant",
      timeline: "2020",
      technologies: [
        "API Development",
        "Fintech",
        "Payment Processing",
        "Credit Systems",
        "E-commerce Integration",
        "Financial APIs",
        "User Authentication",
        "Data Analytics",
      ],
      status: "Prototype",
    }
  }

  if (slug === "space-convention") {
    return {
      client: "Stellar Xplora",
      role: "Event Strategist & Content Developer",
      timeline: "Planned (Postponed Indefinitely)",
      technologies: [
        "Space Industry",
        "Event Planning",
        "Content Strategy",
        "Community Building",
        "International Collaboration",
        "Public Outreach",
        "Educational Programming",
        "Exhibition Design",
        "Speaker Coordination",
        "Marketing Strategy",
      ],
      additionalLinks: [
        { url: "https://www.iafastro.org/", label: "International Astronautical Federation" },
        { url: "https://www.spacefoundation.org/", label: "Space Foundation" },
      ],
    }
  }

  if (slug === "stellarxplora") {
    return {
      client: "Self-initiated",
      role: "Founding Team Member & Strategy Lead",
      timeline: "2022 - Present",
      technologies: [
        "Space Technology",
        "Venture Studio",
        "Earth Observation",
        "Satellite Data",
        "AI/ML",
        "Cloud Computing",
        "Business Development",
        "Product Strategy",
        "Market Analysis",
      ],
      website: "https://stellarxplora.decilehub.com/",
      websiteLabel: "Visit Website",
      status: "Active",
    }
  }

  if (slug === "artention-magazine") {
    return {
      client: "Self-initiated",
      role: "Founder & Editor",
      timeline: "June 2018 - 2019",
      technologies: [
        "Art Magazine",
        "Content Curation",
        "Editorial Design",
        "Digital Publishing",
        "Social Media Management",
        "Community Building",
        "Art Promotion",
        "Exhibition Coverage",
      ],
      website: "https://www.instagram.com/artentionmagazine/",
      websiteLabel: "Instagram Page",
    }
  }

  if (slug === "folktoon") {
    return {
      client: "Self-initiated",
      role: "Co-founder & Creative Director",
      timeline: "2019 - Present",
      technologies: [
        "User Experience Design",
        "Brand & Identity",
        "Film Production",
        "Motion Graphics",
        "Creative Strategy",
        "UI/UX Design",
        "Frontend Development",
        "Animation",
        "Video Production",
        "Art Direction",
      ],
      website: "https://www.instagram.com/folktoon_ng/",
      websiteLabel: "Instagram Page",
      status: "Active",
    }
  }

  if (slug === "founders-and-innovators") {
    return {
      client: "Self-initiated",
      role: "Co-founder and Lead Product Manager",
      timeline: "January 2021 - November 2022",
      technologies: [
        "Social Impact",
        "Technology Innovation",
        "Community Building",
        "Housing Solutions",
        "Sustainable Energy",
        "Transportation",
        "Financial Inclusion",
        "African Innovation",
        "WordPress",
        "Social Media",
      ],
      website: "https://foundersandinnovators.wordpress.com/",
      websiteLabel: "Visit Website",
      additionalLinks: [
        { url: "https://www.crunchbase.com/organization/founders-and-innovators", label: "Crunchbase Profile" },
      ],
    }
  }

  if (slug === "nesthub") {
    return {
      client: "NestHub Africa Limited",
      role: "Lead Developer & Product Strategist",
      timeline: "May - December 2021",
      technologies: [
        "Node.js",
        "Express",
        "MongoDB",
        "React",
        "Real Estate",
        "Payment APIs",
        "Geolocation",
        "Document Verification",
        "Responsive Design",
      ],
      website: "https://nesthub.africa",
      websiteLabel: "Visit Website",
      additionalLinks: [{ url: "/projects/founders-and-innovators", label: "FANDI Venture Studio" }],
      parentCompany: "FANDI (Founders and Innovators)",
      parentCompanySlug: "founders-and-innovators",
    }
  }

  if (slug === "zyleme") {
    return {
      client: "Zyleme Healthcare Education",
      role: "Lead UX Designer & Product Strategist",
      timeline: "August 2021 - May 2022",
      technologies: [
        "React",
        "Node.js",
        "PostgreSQL",
        "GraphQL",
        "AWS",
        "Docker",
        "Healthcare LMS",
        "Compliance Training",
        "Mobile Learning",
        "Interactive Simulations",
      ],
    }
  }

  // Default details for other projects
  return {
    client: "Undisclosed",
    role: "Various Roles",
    timeline: "Undisclosed",
    technologies: ["Various Technologies"],
  }
}

export function ProjectDetails({ slug }: ProjectDetailsProps) {
  const details = getProjectDetails(slug)

  return (
    <div className="space-y-6 bg-muted/50 p-6 rounded-lg">
      <h3 className="text-xl font-bold">Project Details</h3>

      <div>
        <h4 className="text-sm font-medium text-muted-foreground mb-2">Client</h4>
        <p>{details.client}</p>
      </div>

      <div>
        <h4 className="text-sm font-medium text-muted-foreground mb-2">Role</h4>
        <p>{details.role}</p>
      </div>

      <div>
        <h4 className="text-sm font-medium text-muted-foreground mb-2">Timeline</h4>
        <p>{details.timeline}</p>
      </div>

      {details.parentCompany && (
        <div>
          <h4 className="text-sm font-medium text-muted-foreground mb-2">Parent Company</h4>
          <Link href={`/projects/${details.parentCompanySlug}`} className="text-primary hover:underline">
            {details.parentCompany}
          </Link>
        </div>
      )}

      <div>
        <h4 className="text-sm font-medium text-muted-foreground mb-2">Technologies</h4>
        <div className="flex flex-wrap gap-2">
          {details.technologies.map((tech) => (
            <Badge key={tech} variant="outline">
              {tech}
            </Badge>
          ))}
        </div>
      </div>

      {details.status && (
        <div>
          <h4 className="text-sm font-medium text-muted-foreground mb-2">Status</h4>
          <Badge
            variant="outline"
            className={
              details.status === "Active"
                ? "bg-green-500/10 text-green-500 border-green-500/20"
                : details.status === "Prototype"
                  ? "bg-blue-500/10 text-blue-500 border-blue-500/20"
                  : "bg-amber-500/10 text-amber-500 border-amber-500/20"
            }
          >
            {details.status}
          </Badge>
        </div>
      )}

      {details.website && (
        <div>
          <a
            href={details.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
          >
            {details.websiteLabel}
          </a>
        </div>
      )}

      {details.additionalLinks && details.additionalLinks.length > 0 && (
        <div className="space-y-2 mt-4">
          <h4 className="text-sm font-medium text-muted-foreground">Additional Links</h4>
          <div className="space-y-2">
            {details.additionalLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary hover:underline block"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
