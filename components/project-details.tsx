import { Badge } from "@/components/ui/badge"

interface ProjectDetailsProps {
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
      // Removed website and websiteLabel properties
    }
  }

  if (slug === "moneybase") {
    return {
      client: "Interview Assessment",
      role: "Product Manager Case Study",
      timeline: "September 2022",
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
      // No website property
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
    }
  }

  if (slug === "talahive") {
    return {
      client: "Self-initiated",
      role: "Founder & Product Lead",
      timeline: "4 months",
      technologies: [
        "Visual Arts Studios",
        "Community Building",
        "Membership Platform",
        "Exhibition Space",
        "Digital Access Systems",
      ],
      website: "https://youtu.be/92aq_qREv-A",
      websiteLabel: "Watch YC Application Video",
    }
  }

  // Add a new case for the Bossbusworld project in the getProjectDetails function
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
      ],
      website: "https://bossbus-technologies.web.app/",
      websiteLabel: "Visit Website",
      additionalLinks: [
        { url: "https://bossbus-landingpage.web.app/", label: "Original Landing Page" },
        { url: "https://bossbus-global.firebaseapp.com/", label: "Web Application" },
      ],
    }
  }

  // Default details for other projects
  return {
    client: "Self-initiated",
    role: "Founder & Product Lead",
    timeline: "4 months",
    technologies: ["Community Building", "Space Design", "Membership Models"],
    website: "https://example.com",
    websiteLabel: "Visit Website",
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
