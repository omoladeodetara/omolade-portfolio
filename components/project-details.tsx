import { Badge } from "@/components/ui/badge"

export function ProjectDetails() {
  // Mock data - in a real app, fetch from API/CMS
  const details = {
    client: "Client Name",
    role: "UI/UX Design, Frontend Development",
    duration: "3 months",
    year: "2023",
    technologies: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    website: "https://example.com",
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-bold mb-2">Project Details</h3>
        <div className="space-y-3">
          <div>
            <div className="text-sm font-medium">Client</div>
            <div className="text-muted-foreground">{details.client}</div>
          </div>
          <div>
            <div className="text-sm font-medium">Role</div>
            <div className="text-muted-foreground">{details.role}</div>
          </div>
          <div>
            <div className="text-sm font-medium">Duration</div>
            <div className="text-muted-foreground">{details.duration}</div>
          </div>
          <div>
            <div className="text-sm font-medium">Year</div>
            <div className="text-muted-foreground">{details.year}</div>
          </div>
          <div>
            <div className="text-sm font-medium">Website</div>
            <div className="text-muted-foreground">
              <a
                href={details.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Visit Website
              </a>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-bold mb-2">Technologies</h3>
        <div className="flex flex-wrap gap-2">
          {details.technologies.map((tech) => (
            <Badge key={tech} variant="outline">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  )
}
