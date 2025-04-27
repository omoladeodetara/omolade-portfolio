import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

// Define fallback blog posts directly in this file
const fallbackBlogPosts = [
  {
    id: "googles-rumoured-hubspot-acquisition-strategic-analysis",
    title: "Google's Rumoured HubSpot Acquisition: Strategic Analysis",
    brief:
      "An in-depth analysis of the strategic implications behind Google's potential acquisition of HubSpot and what it means for the marketing technology landscape.",
    slug: "googles-rumoured-hubspot-acquisition-strategic-analysis",
    coverImage: "/strategic-pathways.png",
    dateAdded: "April 23, 2025",
    tags: ["Business Strategy", "Tech Acquisitions", "Marketing Technology"],
  },
  {
    id: "the-great-debate-revolution-vs-evolution-in-product-engineering-part-2",
    title: "The Great Debate: Revolution vs. Evolution in Product Engineering - Part 2",
    brief:
      "Continuing our exploration of revolutionary versus evolutionary approaches to product development and engineering.",
    slug: "the-great-debate-revolution-vs-evolution-in-product-engineering-part-2",
    coverImage: "/collaborative-product-design.png",
    dateAdded: "April 23, 2025",
    tags: ["Product Development", "Engineering", "Innovation"],
  },
  {
    id: "the-great-debate-revolution-vs-evolution-in-product-engineering-part-1",
    title: "The Great Debate: Revolution vs. Evolution in Product Engineering - Part 1",
    brief:
      "Examining the tension between revolutionary and evolutionary approaches in modern product engineering and development.",
    slug: "the-great-debate-revolution-vs-evolution-in-product-engineering-part-1",
    coverImage: "/collaborative-innovation-cycle.png",
    dateAdded: "April 23, 2025",
    tags: ["Product Development", "Engineering", "Innovation"],
  },
]

export const metadata: Metadata = {
  title: "Blog | Omolade Odetara",
  description: "Articles, insights, and thoughts on product development, engineering, and technology",
}

export default async function BlogPage() {
  // Start with fallback posts
  let posts = fallbackBlogPosts

  try {
    // Use a simple relative URL for the API request that works in all environments
    const response = await fetch("/api/blog-posts", {
      next: { revalidate: 3600 }, // Revalidate every hour
      // Add a catch for network errors
    }).catch((error) => {
      console.error("Network error fetching blog posts:", error)
      return new Response(JSON.stringify({ ok: false, status: 500 }))
    })

    if (response.ok) {
      posts = await response.json()
    } else {
      console.error(`API responded with status: ${response.status}`)
      // Keep using fallback posts
    }
  } catch (error) {
    console.error("Error fetching blog posts:", error)
    // We'll use the fallback posts (already assigned)
  }

  return (
    <div className="container py-10">
      <div className="flex items-center mb-8">
        <Button variant="ghost" size="sm" asChild className="gap-1">
          <Link href="/">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </Button>
      </div>

      <div className="flex flex-col items-center text-center space-y-4 pb-10 pt-6">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Blog</h1>
        <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
          Articles, insights, and thoughts on product development, engineering, and technology
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Link
            key={post.id}
            href={`https://omoladeodetara.hashnode.dev/${post.slug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="border rounded-lg overflow-hidden h-full flex flex-col transition-all duration-200 hover:shadow-md">
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={
                    post.coverImage || `/placeholder.svg?height=400&width=600&query=${encodeURIComponent(post.title)}`
                  }
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <div className="text-sm text-muted-foreground mb-2">{post.dateAdded}</div>
                <h2 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{post.title}</h2>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{post.brief}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {post.tags.slice(0, 3).map((tag, index) => (
                    <span key={index} className="bg-muted text-xs px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <Button asChild>
          <a href="https://omoladeodetara.hashnode.dev" target="_blank" rel="noopener noreferrer">
            Visit My Hashnode Blog
          </a>
        </Button>
      </div>
    </div>
  )
}
