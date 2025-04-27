export interface BlogPost {
  id: string
  title: string
  brief: string
  slug: string
  coverImage: string
  dateAdded: string
  tags: string[]
}

/**
 * Fetches blog posts from our API route that proxies to Hashnode
 * @param limit The number of posts to fetch (not used in this implementation but kept for API compatibility)
 * @returns An array of blog posts
 */
export async function fetchBlogPosts(_username = "omoladeodetara", _limit = 3): Promise<BlogPost[]> {
  try {
    const response = await fetch("/api/blog-posts")

    if (!response.ok) {
      throw new Error(`API responded with status: ${response.status}`)
    }

    return await response.json()
  } catch (error) {
    console.error("Error fetching blog posts:", error)
    return fallbackBlogPosts
  }
}

/**
 * Fallback blog posts in case the API call fails
 */
export const fallbackBlogPosts: BlogPost[] = [
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
