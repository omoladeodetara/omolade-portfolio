import { NextResponse } from "next/server"
import { fallbackBlogPosts } from "@/lib/fetch-blog-posts"

export async function GET() {
  try {
    // Simplified query
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
      return NextResponse.json(fallbackBlogPosts)
    }

    const { data } = await response.json()

    if (!data?.user?.publication?.posts) {
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
    console.error("Error fetching blog posts:", error)
    return NextResponse.json(fallbackBlogPosts)
  }
}
