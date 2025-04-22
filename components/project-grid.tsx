import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

// Mock data - in a real app, fetch from API/CMS
const projects = [
  {
    id: 1,
    title: "E-commerce Website",
    description: "A fully functional e-commerce website with a custom CMS",
    image: "/modern-online-storefront.png",
    tags: ["Next.js", "Tailwind CSS", "Stripe"],
    category: "Web Development",
    slug: "e-commerce-website",
  },
  {
    id: 2,
    title: "Mobile Banking App",
    description: "A mobile banking application with a focus on user experience",
    image: "/placeholder.svg?height=400&width=600&query=banking app",
    tags: ["React Native", "TypeScript", "Firebase"],
    category: "Mobile Apps",
    slug: "mobile-banking-app",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "A portfolio website for a photographer with a custom gallery",
    image: "/placeholder.svg?height=400&width=600&query=portfolio website",
    tags: ["React", "GSAP", "Sanity.io"],
    category: "Web Development",
    slug: "portfolio-website",
  },
  {
    id: 4,
    title: "Brand Identity",
    description: "A complete brand identity for a startup company",
    image: "/placeholder.svg?height=400&width=600&query=brand identity",
    tags: ["Branding", "Logo Design", "Style Guide"],
    category: "Branding",
    slug: "brand-identity",
  },
  {
    id: 5,
    title: "Dashboard UI",
    description: "A dashboard UI for a SaaS product",
    image: "/placeholder.svg?height=400&width=600&query=dashboard ui",
    tags: ["UI/UX Design", "Figma", "Prototyping"],
    category: "UI/UX Design",
    slug: "dashboard-ui",
  },
  {
    id: 6,
    title: "Mobile App UI",
    description: "A mobile app UI for a fitness tracking app",
    image: "/placeholder.svg?height=400&width=600&query=mobile app ui",
    tags: ["UI/UX Design", "Figma", "Prototyping"],
    category: "UI/UX Design",
    slug: "mobile-app-ui",
  },
]

export function ProjectGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
      {projects.map((project) => (
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
  )
}
