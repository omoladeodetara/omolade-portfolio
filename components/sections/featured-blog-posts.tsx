"use client"

import { useState, useEffect } from "react"
import { ArrowRight, Calendar, ExternalLink } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { fallbackBlogPosts, type BlogPost } from "@/lib/fetch-blog-posts"

export function FeaturedBlogPosts() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function loadBlogPosts() {
      setIsLoading(true)
      try {
        // Use absolute URL to ensure we're hitting the correct endpoint
        const response = await fetch("/api/blog-posts")

        if (!response.ok) {
          console.error(`API responded with status: ${response.status}`)
          throw new Error(`API responded with status: ${response.status}`)
        }

        const posts = await response.json()
        setBlogPosts(posts)
      } catch (error) {
        console.error("Error loading blog posts:", error)
        setBlogPosts(fallbackBlogPosts)
      } finally {
        setIsLoading(false)
      }
    }

    loadBlogPosts()
  }, [])

  return (
    <section className="w-full py-12 md:py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Featured Articles</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Thoughts and insights on product development, engineering, and technology strategy
            </p>
          </div>
        </div>

        {isLoading ? (
          <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-3 md:grid-cols-2">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="overflow-hidden flex flex-col h-full">
                <Skeleton className="h-48 w-full" />
                <CardContent className="p-4 flex-1 flex flex-col">
                  <Skeleton className="h-4 w-24 mb-2" />
                  <Skeleton className="h-6 w-full mb-2" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-3/4 mb-4" />
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Skeleton className="h-6 w-16" />
                    <Skeleton className="h-6 w-20" />
                    <Skeleton className="h-6 w-24" />
                  </div>
                  <Skeleton className="h-10 w-full mt-auto" />
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-3 md:grid-cols-2">
            {blogPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden flex flex-col h-full group">
                <div className="aspect-video w-full overflow-hidden relative">
                  <img
                    src={
                      post.coverImage || `/placeholder.svg?height=400&width=600&query=${encodeURIComponent(post.title)}`
                    }
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                </div>
                <CardContent className="p-4 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 mb-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{post.dateAdded}</span>
                  </div>
                  <h3 className="text-xl font-bold line-clamp-2 mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3 flex-1">{post.brief}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag, index) => (
                      <Badge key={index} variant="secondary" className="bg-[#f8fafc] text-[#314158]">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full mt-auto group-hover:bg-primary/5 transition-colors"
                  >
                    <a
                      href={`https://omoladeodetara.hashnode.dev/${post.slug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1"
                    >
                      Read Article
                      <ExternalLink className="h-3.5 w-3.5 ml-1 opacity-70" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        <div className="flex justify-center mt-8">
          <Button asChild variant="outline">
            <a href="https://omoladeodetara.hashnode.dev" target="_blank" rel="noopener noreferrer" className="group">
              View All Articles
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
