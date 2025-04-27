import Link from "next/link"
import { format } from "date-fns"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

// Mock data - in a real app, fetch from API/CMS
const posts = [
  {
    id: 1,
    title: "Designing for Accessibility: Best Practices",
    excerpt: "Learn how to make your websites more accessible to all users.",
    date: new Date("2023-10-15"),
    image: "/placeholder.svg?height=300&width=500&query=accessibility",
    category: "Design",
    slug: "designing-for-accessibility",
  },
  {
    id: 2,
    title: "The Future of Web Development",
    excerpt: "Exploring upcoming trends and technologies in web development.",
    date: new Date("2023-09-28"),
    image: "/placeholder.svg?height=300&width=500&query=web development",
    category: "Development",
    slug: "future-of-web-development",
  },
  {
    id: 3,
    title: "Optimizing Website Performance",
    excerpt: "Tips and tricks to improve your website's loading speed and performance.",
    date: new Date("2023-09-10"),
    image: "/placeholder.svg?height=300&width=500&query=website performance",
    category: "Development",
    slug: "optimizing-website-performance",
  },
  {
    id: 4,
    title: "UI Design Principles Every Designer Should Know",
    excerpt: "Essential principles to create effective and beautiful user interfaces.",
    date: new Date("2023-08-22"),
    image: "/placeholder.svg?height=300&width=500&query=ui design",
    category: "UI/UX",
    slug: "ui-design-principles",
  },
  {
    id: 5,
    title: "From Junior to Senior Developer: A Career Path",
    excerpt: "Insights and advice on progressing in your development career.",
    date: new Date("2023-08-05"),
    image: "/placeholder.svg?height=300&width=500&query=career development",
    category: "Career",
    slug: "junior-to-senior-developer",
  },
  {
    id: 6,
    title: "Building a REST API with Node.js and Express",
    excerpt: "A step-by-step tutorial on creating a RESTful API.",
    date: new Date("2023-07-18"),
    image: "/placeholder.svg?height=300&width=500&query=rest api",
    category: "Tutorials",
    slug: "building-rest-api-nodejs",
  },
]

export function BlogGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
      {posts.map((post) => (
        <Card key={post.id} className="overflow-hidden">
          <div className="aspect-video w-full overflow-hidden">
            <img
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
          <CardContent className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <Badge>{post.category}</Badge>
              <span className="text-xs text-muted-foreground">{format(post.date, "MMMM d, yyyy")}</span>
            </div>
            <h3 className="text-xl font-bold">{post.title}</h3>
            <p className="text-sm text-muted-foreground mt-2">{post.excerpt}</p>
            <div className="mt-4">
              <Button asChild variant="outline" className="w-full">
                <Link href={`/blog/${post.slug}`}>Read Article</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
