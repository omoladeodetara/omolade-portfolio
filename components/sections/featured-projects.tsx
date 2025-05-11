import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function FeaturedProjects() {
  const featuredProjects = [
    {
      title: "ASH B",
      description: "A comprehensive healthcare platform for remote patient monitoring and telehealth services.",
      image: "/images/projects/ash-b/main-thumbnail.png",
      category: "Healthcare",
      url: "/projects/ash-b",
    },
    {
      title: "MoniZoom",
      description: "Remote patient monitoring platform with real-time health analytics and care management.",
      image: "/images/projects/monizoom/rpm-platform.png",
      category: "Healthcare",
      url: "/projects/monizoom",
    },
    {
      title: "StellarXplora",
      description: "Educational platform focused on space exploration and astronomy for young learners.",
      image: "/images/projects/stellarxplora/stellarxplora-hero.png",
      category: "Education",
      url: "/projects/stellarxplora",
    },
  ]

  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold">Featured Projects</h2>
            <p className="text-muted-foreground mt-2">Highlighted work from my portfolio</p>
          </div>
          <Link
            href="/projects"
            className="group mt-4 md:mt-0 inline-flex items-center text-primary hover:text-primary/80 transition-colors"
          >
            View all projects <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <Link key={index} href={project.url} className="group">
              <div className="relative overflow-hidden rounded-xl bg-muted aspect-video mb-4">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-4 left-4">{project.category}</Badge>
              </div>
              <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{project.title}</h3>
              <p className="text-muted-foreground mt-2">{project.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
