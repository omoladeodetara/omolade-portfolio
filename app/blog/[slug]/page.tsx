import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { format } from "date-fns"

import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { RelatedPosts } from "@/components/related-posts"

// This would typically come from a CMS or API
const getPostData = (slug: string) => {
  // Mock data - in a real app, fetch from API/CMS
  return {
    title: "Blog Post Title",
    description: "Blog post description",
    date: new Date(),
    image: "/diverse-blog-community.png",
    content: "Full blog post content...",
    author: {
      name: "John Doe",
      avatar: "/mystical-forest-spirit.png",
    },
  }
}

type Props = {
  params: { slug: string }
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getPostData(params.slug)

  return {
    title: `${post.title} | Your Portfolio`,
    description: post.description,
  }
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostData(params.slug)

  return (
    <div className="container py-10">
      <Link href="/blog" className="inline-flex mb-8">
        <Button variant="ghost" className="gap-2">
          <ArrowLeft className="h-4 w-4" />
          Back to Blog
        </Button>
      </Link>

      <div className="mb-8 max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-xl text-muted-foreground mb-6">{post.description}</p>

        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src={post.author.avatar || "/placeholder.svg"} alt={post.author.name} />
              <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <span>{post.author.name}</span>
          </div>
          <span>•</span>
          <time dateTime={post.date.toISOString()}>{format(post.date, "MMMM d, yyyy")}</time>
        </div>
      </div>

      <div className="relative aspect-video overflow-hidden rounded-lg mb-12 max-w-4xl mx-auto">
        <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
      </div>

      <div className="prose dark:prose-invert mx-auto mb-16">{post.content}</div>

      <RelatedPosts />
    </div>
  )
}
