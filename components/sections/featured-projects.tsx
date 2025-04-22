import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Mock data - in a real app, fetch from API/CMS
const featuredProjects = [
  {
    id: 1,
    title: "E-commerce Website",
    description: "A fully functional e-commerce website with a custom CMS",
    image: "/modern-online-storefront.png",
    tags: ["Next.js", "Tailwind CSS", "Stripe"],
    slug: "e-commerce-website",
  },
  {
    id: 2,
    title: "Mobile Banking App",
    description: "A mobile banking application with a focus on user experience",
    image: "/placeholder.svg?height=400&width=600&query=banking app",
    tags: ["React Native", "TypeScript", "Firebase"],
    slug: "mobile-banking-app",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "A portfolio website for a photographer with a custom gallery",
    image: "/placeholder.svg?height=400&width=600&query=portfolio website",
    tags: ["React", "GSAP", "Sanity.io"],
    slug: "portfolio-website",
  },
]

export function FeaturedProjects() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Featured Projects</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Check out some of my recent work. These projects showcase my skills and expertise.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
          {featuredProjects.map((project) => (
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
        <div className="flex justify-center">
          <Button asChild variant="outline">
            <Link href="/projects" className="group">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
