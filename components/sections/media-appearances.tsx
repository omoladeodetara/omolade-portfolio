"use client"

import { useState } from "react"
import { ExternalLink, Play, Linkedin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

interface MediaItem {
  id: string
  title: string
  description: string
  thumbnailUrl: string
  videoUrl?: string // Make optional
  linkedinUrl?: string // Add this line
  organization: string
  date: string
  tags: string[]
  startTime?: number
  type: "video" | "linkedin" // Add this line
}

const mediaAppearances: MediaItem[] = [
  {
    id: "lunar-framework",
    title: "The Recommended Framework and Key Elements for Peaceful and Sustainable Lunar Activities",
    description:
      "Presentation on the Global Expert Group on Sustainable Lunar Activities (GEGSLA) framework for international cooperation in lunar exploration and development.",
    thumbnailUrl: "/lunar-framework-presentation.png",
    videoUrl: "https://youtu.be/lVa453ivuCE?t=989",
    startTime: 989,
    organization: "Moon Village Association",
    date: "2022",
    tags: ["Lunar Activities", "Space Policy", "GEGSLA", "International Cooperation"],
    type: "video",
  },
  {
    id: "commercial-space",
    title: "Commercial Space: Everything-as-a-Service (XaaS)",
    description:
      "Exploring the emerging paradigm of space services and how the Everything-as-a-Service model is transforming commercial space activities.",
    thumbnailUrl: "/commercial-space-xaas.png",
    videoUrl: "https://youtu.be/_GI3pyK9Liw",
    startTime: 0,
    organization: "Spacehubs Africa",
    date: "2023",
    tags: ["Commercial Space", "XaaS", "Space Economy", "Business Models"],
    type: "video",
  },
  {
    id: "representing-copuos",
    title: "Representing at the 60th STSC Session of COPUOS",
    description:
      "As the representative of the industry, I presented my perspective on the #GEGSLA Recommended Framework and Key Elements for Peaceful and Sustainable Lunar Activities at the 60th Session of the Scientific & Technical Subcommittee of COPUOS.",
    thumbnailUrl: "/space-policy-discussion.png",
    linkedinUrl:
      "https://www.linkedin.com/posts/omoladeodetara_welcome-to-the-60th-stsc-activity-7028356133190811648-A2ng",
    organization: "COPUOS",
    date: "February 2023",
    tags: ["Space Policy", "Lunar Activities", "COPUOS", "GEGSLA"],
    type: "linkedin",
  },
  {
    id: "oau-arts",
    title: "OAU Arts Exhibition Interview",
    description:
      "Television interview about the Obafemi Awolowo University arts exhibition featuring over 3,000 student works.",
    thumbnailUrl: "/oau-arts-exhibition.png",
    videoUrl: "https://youtu.be/3M0eB1KWyrw?si=Vo-ccWsnyg9__2bU",
    startTime: 95,
    organization: "TVC Nigeria",
    date: "2017",
    tags: ["Arts", "Exhibition", "Education", "Fine Arts"],
    type: "video",
  },
]

export function MediaAppearances() {
  const [selectedVideo, setSelectedVideo] = useState<MediaItem | null>(null)

  return (
    <section className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Media & Professional Highlights</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Talks, presentations, and professional content on space technology, policy, and development
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-4 md:grid-cols-2">
          {mediaAppearances.map((item) => (
            <Card key={item.id} className="overflow-hidden flex flex-col h-full group">
              <div className="aspect-video w-full overflow-hidden relative">
                <img
                  src={item.thumbnailUrl || "/placeholder.svg"}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {item.type === "video" && (
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="secondary"
                          size="icon"
                          className="rounded-full h-12 w-12"
                          onClick={(e) => {
                            e.preventDefault() // Prevent default to avoid navigation issues
                            try {
                              setSelectedVideo(item)
                            } catch (error) {
                              console.error("Error setting selected video:", error)
                            }
                          }}
                        >
                          <Play className="h-6 w-6" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[800px] p-0 overflow-hidden">
                        <div className="aspect-video w-full">
                          <iframe
                            width="100%"
                            height="100%"
                            src={`${
                              item.videoUrl
                                ?.replace("youtu.be/", "youtube.com/embed/")
                                .replace("youtube.com/live/", "youtube.com/embed/")
                                .replace("?si=", "?si=")
                                .split("?")[0]
                            }${item.startTime ? `?start=${item.startTime}` : ""}`}
                            title={item.title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          ></iframe>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                )}
                {item.type === "linkedin" && (
                  <div className="absolute top-2 right-2">
                    <div className="bg-white dark:bg-gray-800 p-1 rounded-full">
                      <Linkedin className="h-4 w-4 text-[#0077b5]" />
                    </div>
                  </div>
                )}
              </div>
              <CardContent className="p-4 flex-1 flex flex-col">
                <div className="text-sm text-muted-foreground mb-2">
                  {item.organization} • {item.date}
                </div>
                <h3 className="text-xl font-bold line-clamp-2 mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3 flex-1">{item.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.slice(0, 3).map((tag, index) => (
                    <Badge key={index} variant="secondary" className="bg-[#f8fafc] text-[#314158]">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button asChild variant="outline" className="w-full mt-auto">
                  <a
                    href={item.type === "video" ? item.videoUrl : item.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1"
                  >
                    {item.type === "video" ? "Watch Video" : "View on LinkedIn"}
                    <ExternalLink className="h-3.5 w-3.5 ml-1 opacity-70" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
