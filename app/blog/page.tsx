import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { BlogFilters } from "@/components/blog-filters"
import { BlogGrid } from "@/components/blog-grid"

export const metadata: Metadata = {
  title: "Blog | Your Portfolio",
  description: "Articles, insights, and thoughts on design and development",
}

export default function BlogPage() {
  return (
    <div className="container py-10">
      <PageHeader heading="Blog" subheading="Articles, insights, and thoughts on design and development" />
      <BlogFilters />
      <BlogGrid />
    </div>
  )
}
