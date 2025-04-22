import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function RelatedProjects() {
  // Mock data - in a real app, fetch from API/CMS
  const relatedProjects = [
    {
      id: 1,
      title: "E-commerce Website",
      description: "A fully functional e-commerce website with a custom CMS",
      image: "/modern-online-storefront.png",
      slug: "e-commerce-website",
    },
    {
      id: 2,
      title: "Mobile Banking App",
      description: "A mobile banking application with a focus on user experience",
      image: "/placeholder.svg?height=300&width=500&query=banking app",
      slug: "mobile-banking-app",
    },
  ]

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
