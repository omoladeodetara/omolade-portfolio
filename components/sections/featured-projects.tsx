import Link from "next/link"
import { ArrowRight, AlertCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Side projects data
const sideProjects = [
  {
    id: 1,
    title: "StellarXplora",
    description: "Building, funding, and scaling the best space startups with a focus on the African market",
    image: "/stellarxplora-thumbnail.png",
    tags: ["Venture Studio", "Space Technology", "African Market"],
    slug: "stellarxplora",
    status: "active",
  },
  {
    id: 2,
    title: "ASH B",
    description:
      "A comprehensive healthcare platform connecting patients with doctors through integrated telemedicine, appointment scheduling, and secure medical record management.",
    image: "/ash-b-main-thumbnail.png",
    tags: ["Healthcare", "Telemedicine", "Mobile Apps"],
    slug: "ash-b",
  },
  {
    id: 3,
    title: "Harvest Credit",
    description:
      "An API platform connecting credit facilities to merchants, allowing users to pay with loans directly at checkout.",
    image: "/financial-overview-dashboard.png",
    tags: ["Fintech", "API", "Credit Systems"],
    slug: "harvest-credit",
    status: "prototype",
  },
]

export function FeaturedProjects() {
  const updatedSideProjects = sideProjects.map((project) => {
    if (project.title === "TalaHive" && project.tags.includes("Y Combinator")) {
      return {
        ...project,
        tags: project.tags.map((tag) => (tag === "Y Combinator" ? "Workspace" : tag)),
      }
    }
    return project
  })

  return (
    <section className="py-12 md:py-16 bg-muted/30">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-2">Featured Projects</h2>
            <p className="text-muted-foreground max-w-2xl">
              A selection of my most significant professional and personal projects.
            </p>
          </div>
          <Button asChild variant="ghost" className="mt-4 md:mt-0">
            <Link href="/projects" className="gap-1">
              View all projects
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sideProjects.map((project) => (
            <Card key={project.id} className="overflow-hidden group">
              <div className="aspect-video w-full overflow-hidden relative">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {project.status === "postponed" && (
                  <div className="absolute top-2 right-2 bg-amber-500 text-white text-xs px-2 py-1 rounded-full flex items-center">
                    <AlertCircle className="h-3 w-3 mr-1" />
                    Planned
                  </div>
                )}
                {project.status === "early-stage" && (
                  <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full flex items-center">
                    <AlertCircle className="h-3 w-3 mr-1" />
                    Early Stage
                  </div>
                )}
                {project.status === "prototype" && (
                  <div className="absolute top-2 right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full flex items-center">
                    <AlertCircle className="h-3 w-3 mr-1" />
                    Prototype
                  </div>
                )}
                {project.status === "active" && (
                  <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full flex items-center">
                    <AlertCircle className="h-3 w-3 mr-1" />
                    Active
                  </div>
                )}
              </div>
              <CardContent className="p-4">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="mt-4">
                  <Button asChild variant="outline" className="w-full">
                    <Link href={`/projects/${project.slug}`}>View Project</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
