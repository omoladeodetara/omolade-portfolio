import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { TestimonialGrid } from "@/components/testimonial-grid"

export const metadata: Metadata = {
  title: "Testimonials | Your Portfolio",
  description: "What clients and colleagues say about my work",
}

export default function TestimonialsPage() {
  return (
    <div className="container py-10">
      <PageHeader heading="Testimonials" subheading="What clients and colleagues say about my work" />
      <TestimonialGrid />
    </div>
  )
}
