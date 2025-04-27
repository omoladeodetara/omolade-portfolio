import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Side projects data
const sideProjects = [
  {
    id: 1,
    title: "ASH B",
    description:
      "A comprehensive healthcare platform connecting patients with doctors through integrated telemedicine, appointment scheduling, and secure medical record management.",
    image: "/ash-b-main-thumbnail.png",
    tags: ["Healthcare", "Telemedicine", "Mobile Apps"],
    slug: "ash-b",
    // Removed link property
  },
  {
    id: 2,
    title: "Moneybase",
    description:
      "A product management case study on implementing fractional share trading for a modern fintech platform.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/moneybase-IwSJUYE6IIeTZwUc9ISx9LJbJQaUS1.png",
    tags: ["PM Case Study", "Fintech", "Trading"],
    slug: "moneybase",
  },
  {
    id: 3,
    title: "TalaHive",
    description:
      "A specialized workspace and community hub for visual artists, providing studios for painting, graphics, animation, sculpture, ceramics, fashion, and textile arts.",
    image: "/african-talent-network.png",
    tags: ["Visual Arts", "Studio Space", "Artist Community"],
    slug: "talahive",
    videoUrl: "https://youtu.be/92aq_qREv-A",
  },
]

export function FeaturedProjects() {
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
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
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
