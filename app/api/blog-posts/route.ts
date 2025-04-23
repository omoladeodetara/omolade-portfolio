import { NextResponse } from "next/server"
import { fallbackBlogPosts } from "@/lib/fetch-blog-posts"

export async function GET() {
  try {
    const query = `
      query GetUserArticles($username: String!, $page: Int!) {
        user(username: $username) {
          publication {
            posts(page: $page) {
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
    `

    const variables = {
      username: "omoladeodetara",
      page: 0,
    }

    const response = await fetch("https://api.hashnode.com/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables,
      }),
      next: { revalidate: 3600 }, // Revalidate every hour
    })

    if (!response.ok) {
      throw new Error(`API responded with status: ${response.status}`)
    }

    const { data } = await response.json()

    if (!data?.user?.publication?.posts) {
      console.error("No posts found or unexpected API response structure")
      return NextResponse.json(fallbackBlogPosts)
    }

    const posts = data.user.publication.posts.slice(0, 3).map((post: any) => ({
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
      tags: post.tags.map((tag: any) => tag.name),
    }))

    return NextResponse.json(posts)
  } catch (error) {
    console.error("Error fetching blog posts:", error)
    return NextResponse.json(fallbackBlogPosts)
  }
}
