import Link from "next/link"
import { format } from "date-fns"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function RelatedPosts() {
  // Mock data - in a real app, fetch from API/CMS
  const relatedPosts = [
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
  ]

  return (
    <div className="my-12 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {relatedPosts.map((post) => (
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
                <Button asChild variant="outline" className="w-full">
                  <Link href={`/blog/${post.slug}`}>Read Article</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
