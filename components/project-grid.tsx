import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

// Project data - in a real app, fetch from API/CMS
const projects = [
  {
    id: 1,
    title: "ASH B",
    description:
      "A comprehensive healthcare platform connecting patients with doctors through mobile/web applications with integrated telemedicine, appointment scheduling, and secure medical record management.",
    image: "/ash-b-main-thumbnail.png",
    tags: ["Healthcare", "Telemedicine", "HIPAA/GDPR", "FHIR", "Mobile Apps"],
    category: "Professional Project",
    period: "January 2023 - Present",
    slug: "ash-b",
    // Removed link property
  },
  {
    id: 2,
    title: "Moneybase",
    description:
      "A product management case study on implementing fractional share trading for a modern fintech platform.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/moneybase-IwSJUYE6IIeTZwUc9ISx9LJbJQaUS1.png",
    tags: ["PM Case Study", "Fintech", "Fractional Shares", "Product Management"],
    category: "Professional Project",
    period: "September 2022",
    slug: "moneybase",
    // No link property
  },
  {
    id: 3,
    title: "Bossbusworld",
    description:
      "A platform for third-party developers in the travel industry with API integrations for airlines and fleet management systems.",
    image: "/data-driven-insights.png",
    tags: ["Node.js", "Express", "MongoDB", "REST APIs", "OAuth 2.0"],
    category: "Professional Project",
    period: "January 2021 - November 2022",
    slug: "bossbusworld",
    link: "https://bossbus-technologies.web.app/",
  },
  {
    id: 4,
    title: "MoniZoom",
    description: "A borderless banking platform that accelerates global reach with reliable financial services.",
    image: "/financial-overview-dashboard.png",
    tags: ["React", "Next.js", "Tailwind CSS", "Financial APIs"],
    category: "Side Project",
    period: "Mar - Jun 2023",
    slug: "monizoom",
    link: "https://monizoom.vercel.app/",
  },
  {
    id: 5,
    title: "NestHub",
    description: "A platform for connecting property developers with potential homeowners and investors.",
    image: "/modern-real-estate-interface.png",
    tags: ["Node.js", "Express", "MongoDB", "React"],
    category: "Side Project",
    period: "May - Dec 2021",
    slug: "nesthub",
  },
  {
    id: 6,
    title: "Founders and Innovators",
    description: "A community platform for entrepreneurs and innovators to connect and collaborate on projects.",
    image: "/collaborative-growth.png",
    tags: ["Product Strategy", "Community Building"],
    category: "Side Project",
    period: "Jun 2019 - Dec 2020",
    slug: "founders-and-innovators",
    link: "https://www.crunchbase.com/organization/founders-and-innovators",
  },
  {
    id: 7,
    title: "StellarXplora",
    description: "An interactive space exploration educational tool for students and space enthusiasts.",
    image: "/space-exploration-overview.png",
    tags: ["React", "Three.js", "WebGL", "Astronomy APIs"],
    category: "Side Project",
    period: "Aug 2017 - Mar 2018",
    slug: "stellarxplora",
  },
  {
    id: 8,
    title: "Zyleme",
    description: "A learning management system focused on skill development for tech professionals.",
    image: "/digital-classroom-dashboard.png",
    tags: ["Vue.js", "Firebase", "EdTech"],
    category: "Side Project",
    period: "Jan - Jul 2020",
    slug: "zyleme",
  },
  {
    id: 9,
    title: "TalaHive",
    description:
      "A specialized workspace and community hub for visual artists, providing studios for painting, graphics, animation, sculpture, ceramics, fashion, and textile arts.",
    image: "/african-talent-network.png",
    tags: ["Visual Arts", "Studio Space", "Artist Community", "Y Combinator"],
    category: "Side Project",
    period: "Sep 2018 - Feb 2019",
    slug: "talahive",
    videoUrl: "https://youtu.be/92aq_qREv-A",
  },
]

interface ProjectGridProps {
  filter?: string
}

export function ProjectGrid({ filter = "all" }: ProjectGridProps) {
  // Filter projects based on the active filter
  const filteredProjects = projects.filter((project) => {
    if (filter === "all") return true
    if (filter === "professional") return project.category === "Professional Project"
    if (filter === "side") return project.category === "Side Project"
    return true
  })

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
      {filteredProjects.map((project) => (
        <Card key={project.id} className="overflow-hidden">
          <div className="aspect-video w-full overflow-hidden">
            <img
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
          <CardContent className="p-4">
            <h3 className="text-xl font-bold">{project.title}</h3>
            <p className="text-sm text-muted-foreground mt-2">{project.description}</p>
            {project.period && <p className="text-xs text-muted-foreground mt-1">{project.period}</p>}
            <div className="flex flex-wrap gap-2 mt-4">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
            <div className="mt-4 flex gap-2">
              <Button asChild variant="outline" className="flex-1">
                <Link href={`/projects/${project.slug}`}>View Details</Link>
              </Button>
              {project.link && (
                <Button asChild variant="default" className="flex-1">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    Visit Site
                  </a>
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
