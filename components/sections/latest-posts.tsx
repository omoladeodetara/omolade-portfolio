import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { format } from "date-fns"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

// Mock data - in a real app, fetch from API/CMS
const latestPosts = [
  {
    id: 1,
    title: "Designing for Accessibility: Best Practices",
    excerpt: "Learn how to make your websites more accessible to all users.",
    date: new Date("2023-10-15"),
    image: "/placeholder.svg?height=300&width=500&query=accessibility",
    slug: "designing-for-accessibility",
  },
  {
    id: 2,
    title: "The Future of Web Development",
    excerpt: "Exploring upcoming trends and technologies in web development.",
    date: new Date("2023-09-28"),
    image: "/placeholder.svg?height=300&width=500&query=web development",
    slug: "future-of-web-development",
  },
  {
    id: 3,
    title: "Optimizing Website Performance",
    excerpt: "Tips and tricks to improve your website's loading speed and performance.",
    date: new Date("2023-09-10"),
    image: "/placeholder.svg?height=300&width=500&query=website performance",
    slug: "optimizing-website-performance",
  },
]

export function LatestPosts() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Latest Articles</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Thoughts, insights, and perspectives on design, development, and the digital world.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
          {latestPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden">
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardContent className="p-4">
                <div className="text-sm text-muted-foreground mb-2">{format(post.date, "MMMM d, yyyy")}</div>
                <h3 className="text-xl font-bold">{post.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">{post.excerpt}</p>
                <div className="mt-4">
                  <Button asChild variant="link" className="p-0 h-auto font-medium">
                    <Link href={`/blog/${post.slug}`} className="group">
                      Read More
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="flex justify-center">
          <Button asChild variant="outline">
            <Link href="/blog" className="group">
              View All Articles
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
