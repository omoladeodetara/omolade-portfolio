import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// Mock data - in a real app, fetch from API/CMS
const testimonials = [
  {
    id: 1,
    content:
      "Working with this designer was an absolute pleasure. They understood our vision and delivered beyond our expectations.",
    author: {
      name: "Sarah Johnson",
      role: "CEO, TechStart",
      avatar: "/placeholder.svg?height=40&width=40&query=woman",
    },
  },
  {
    id: 2,
    content:
      "The attention to detail and creativity brought to our project was exceptional. I highly recommend their services.",
    author: {
      name: "Michael Chen",
      role: "Marketing Director, Innovate Inc",
      avatar: "/placeholder.svg?height=40&width=40&query=man",
    },
  },
]

export function TestimonialsPreview() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">What Clients Say</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Don't just take my word for it. Here's what some of my clients have to say about working with me.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex flex-col gap-4">
                  <p className="text-muted-foreground italic">"{testimonial.content}"</p>
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage
                        src={testimonial.author.avatar || "/placeholder.svg"}
                        alt={testimonial.author.name}
                      />
                      <AvatarFallback>{testimonial.author.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{testimonial.author.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.author.role}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="flex justify-center">
          <Button asChild variant="outline">
            <Link href="/testimonials" className="group">
              View All Testimonials
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
