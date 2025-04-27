import { NextResponse } from "next/server"

// Fallback blog posts in case the API call fails
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

export async function GET() {
  // For now, just return the fallback posts to ensure we have a working response
  return NextResponse.json(fallbackBlogPosts)

  /* Uncomment this when you want to fetch from Hashnode API
  try {
    const response = await fetch("https://api.hashnode.com/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
          query {
            user(username: "omoladeodetara") {
              publication {
                posts(page: 0) {
                  title
                  brief
                  slug
                  coverImage
                  dateAdded
                  tags {
                    name
                  }
                }
              }
            }
          }
        `,
      }),
    })

    if (!response.ok) {
      console.error(`Hashnode API responded with status: ${response.status}`)
      return NextResponse.json(fallbackBlogPosts)
    }

    const { data } = await response.json()

    if (!data?.user?.publication?.posts) {
      console.error("No posts found or unexpected API response structure")
      return NextResponse.json(fallbackBlogPosts)
    }

    const posts = data.user.publication.posts.slice(0, 3).map((post) => ({
      id: post.slug,
      title: post.title,
      brief: post.brief,
      slug: post.slug,
      coverImage: post.coverImage,
      dateAdded: new Date(post.dateAdded).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      tags: post.tags.map((tag) => tag.name),
    }))

    return NextResponse.json(posts)
  } catch (error) {
    console.error("Error fetching blog posts from Hashnode:", error)
    return NextResponse.json(fallbackBlogPosts)
  }
  */
}
