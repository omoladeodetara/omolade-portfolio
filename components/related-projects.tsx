"use client"

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"

export function RelatedProjects() {
  const pathname = usePathname()
  const currentProjectSlug = pathname.split("/").pop()

  // Centralized projects data
  const allProjects = [
    {
      id: 1,
      title: "MoniZoom",
      slug: "monizoom",
      category: "Healthcare",
      description: "A mobile banking application with a focus on user experience",
      image: "/monizoom-app-interface.png",
    },
    {
      id: 2,
      title: "Zyleme",
      slug: "zyleme",
      category: "Healthcare",
      description: "A learning management system for healthcare professionals",
      image: "/abstract-tech-platform.png",
    },
    {
      id: 3,
      title: "ASH B",
      slug: "ash-b",
      category: "Healthcare",
      description: "A comprehensive healthcare management platform",
      image: "/ash-b-images/project-thumbnail.png",
    },
    {
      id: 4,
      title: "NestHub",
      slug: "nesthub",
      category: "Real Estate",
      description: "A real estate management platform",
      image: "/sleek-property-finder.png",
    },
    {
      id: 5,
      title: "StellarXplora",
      slug: "stellarxplora",
      category: "Education",
      description: "An interactive space exploration learning platform",
      image: "/stellarxplora-thumbnail.png",
    },
  ]

  // Filter out the current project and get 2-3 related projects
  const relatedProjects = allProjects
    .filter((project) => project.slug !== currentProjectSlug)
    .filter((project) => {
      // Get the category of the current project
      const currentProject = allProjects.find((p) => p.slug === currentProjectSlug)

      // If we can't find the current project, just return some projects
      if (!currentProject) return true

      // Prioritize projects in the same category
      return project.category === currentProject.category
    })
    .slice(0, 2) // Limit to 2 related projects

  return (
    <div className="my-12">
      <h2 className="text-2xl font-bold mb-6">Related Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {relatedProjects.map((project) => (
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
  )
}
