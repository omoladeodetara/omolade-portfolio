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
  {
    id: 3,
    content:
      "A true professional who delivers high-quality work on time and on budget. We will definitely work together again.",
    author: {
      name: "Emily Rodriguez",
      role: "Product Manager, DesignCo",
      avatar: "/placeholder.svg?height=40&width=40&query=woman",
    },
  },
  {
    id: 4,
    content:
      "Their expertise in UI/UX design transformed our product. User engagement has increased significantly since the redesign.",
    author: {
      name: "David Kim",
      role: "CTO, StartupX",
      avatar: "/placeholder.svg?height=40&width=40&query=man",
    },
  },
  {
    id: 5,
    content:
      "I've worked with many designers, but this one stands out for their communication skills and ability to translate ideas into beautiful designs.",
    author: {
      name: "Jessica Taylor",
      role: "Founder, CreativeHub",
      avatar: "/placeholder.svg?height=40&width=40&query=woman",
    },
  },
  {
    id: 6,
    content:
      "The website they designed for us has received countless compliments. Our conversion rate has improved by 40% since the redesign.",
    author: {
      name: "Robert Wilson",
      role: "Marketing Manager, GrowthCo",
      avatar: "/placeholder.svg?height=40&width=40&query=man",
    },
  },
]

export function TestimonialGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
      {testimonials.map((testimonial) => (
        <Card key={testimonial.id} className="overflow-hidden">
          <CardContent className="p-6">
            <div className="flex flex-col gap-4">
              <p className="text-muted-foreground italic">"{testimonial.content}"</p>
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src={testimonial.author.avatar || "/placeholder.svg"} alt={testimonial.author.name} />
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
  )
}
