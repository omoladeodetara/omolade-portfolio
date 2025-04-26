"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Linkedin, Twitter, Globe, Search, X } from "lucide-react"
import { Input } from "@/components/ui/input"
// We'll use console logging for performance tracking in development

export default function SpeakersPage() {
  // Speaker data
  const allSpeakers = [
    {
      id: 1,
      name: "Dr. Quan Haofang",
      title: "Senior Standards Expert",
      organization: "China Astronautics Standards Institute",
      bio: "Dr. Quan Haofang is a leading expert in space standardization with over 20 years of experience developing technical standards for space missions. His work focuses on interoperability standards for lunar missions and international collaboration frameworks for space exploration.",
      expertise: [
        "space standardization",
        "interoperability standards",
        "lunar missions",
        "international collaboration",
      ],
      image: "/images/speaker-quan.jpg",
      social: {
        twitter: "https://twitter.com/quanhaofang",
        linkedin: "https://linkedin.com/in/quan-haofang",
        website: "https://casi.org.cn/experts/quan",
      },
      isModerator: false,
      workshop: "May 13, 2025",
      session: "Panel Discussion",
    },
    {
      id: 2,
      name: "Fred Slane",
      title: "Executive Director",
      organization: "ISO Space Systems Technical Committee (ISO/TC 20/SC 14)",
      bio: "Fred Slane is the Executive Director of the Space Infrastructure Foundation and serves on the ISO Space Systems Technical Committee. With extensive experience in space systems engineering and standards development, he has been instrumental in creating international standards for space operations and data exchange.",
      expertise: ["space systems engineering", "standards development", "space operations", "data exchange protocols"],
      image: "/images/speaker-fred.jpg",
      social: {
        linkedin: "https://linkedin.com/in/fredslane",
        website: "https://www.iso.org/committee/46614.html",
      },
      isModerator: false,
      workshop: "May 13, 2025",
      session: "Panel Discussion",
    },
    {
      id: 3,
      name: "Aarti Holla-Maini",
      title: "Director",
      organization: "United Nations Office for Outer Space Affairs (UNOOSA)",
      bio: "Aarti Holla-Maini is a distinguished expert in space policy and international cooperation. As a Director at UNOOSA, she leads initiatives to promote international collaboration in space activities and the development of regulatory frameworks for sustainable space exploration, with a particular focus on lunar activities.",
      expertise: [
        "space policy",
        "international cooperation",
        "regulatory frameworks",
        "sustainable space exploration",
      ],
      image: "/images/speaker-aarti.jpg",
      social: {
        twitter: "https://twitter.com/aartiholla",
        linkedin: "https://linkedin.com/in/aarti-holla-maini",
        website: "https://www.unoosa.org/team/holla-maini",
      },
      isModerator: false,
      workshop: "May 13, 2025",
      session: "Panel Discussion",
    },
    {
      id: 4,
      name: "Hiroshi Yamakawa",
      title: "Chief Technology Officer",
      organization: "ispace, Inc.",
      bio: "Dr. Hiroshi Yamakawa serves as the CTO of ispace, a leading lunar exploration company. With a background in aerospace engineering and lunar mission planning, he oversees the technical development of ispace's lunar landers and rovers. His expertise in lunar surface operations and resource utilization contributes significantly to international standards for lunar activities.",
      expertise: ["lunar exploration", "aerospace engineering", "lunar surface operations", "resource utilization"],
      image: "/images/speaker-hiroshi.jpg",
      social: {
        linkedin: "https://linkedin.com/in/hiroshi-yamakawa",
        website: "https://ispace-inc.com/team/",
      },
      isModerator: false,
      workshop: "May 13, 2025",
      session: "Panel Discussion",
    },
    {
      id: 5,
      name: "Dr. Elizabeth Chen",
      title: "Chair, LOGIC Initiative",
      organization: "International Space University",
      bio: "Dr. Elizabeth Chen chairs the LOGIC Initiative and is a professor at the International Space University. With expertise in space policy and international cooperation, she leads efforts to develop standardized frameworks for lunar activities. As the workshop moderator, she facilitates productive dialogue among diverse stakeholders.",
      expertise: ["space policy", "international cooperation", "lunar governance", "standardization frameworks"],
      image: "/images/speaker-chen.jpg", // Updated from "/images/organizer-1.jpg"
      social: {
        twitter: "https://twitter.com/elizabethchen",
        linkedin: "https://linkedin.com/in/elizabeth-chen",
        website: "https://isunet.edu/faculty/chen",
      },
      isModerator: false,
      workshop: "May 13, 2025",
      session: "Panel Discussion (Moderator)",
    },
  ]

  const [searchQuery, setSearchQuery] = useState("")
  const [filteredSpeakers, setFilteredSpeakers] = useState(allSpeakers)
  const [searchFocused, setSearchFocused] = useState(false)

  // Filter speakers based on search query
  useEffect(() => {
    const startTime = performance.now()

    if (!searchQuery.trim()) {
      setFilteredSpeakers(allSpeakers)
      return
    }

    const query = searchQuery.toLowerCase().trim()
    const filtered = allSpeakers.filter((speaker) => {
      // Search in name, title, organization, bio
      const nameMatch = speaker.name.toLowerCase().includes(query)
      const titleMatch = speaker.title.toLowerCase().includes(query)
      const orgMatch = speaker.organization.toLowerCase().includes(query)
      const bioMatch = speaker.bio.toLowerCase().includes(query)

      // Search in expertise tags
      const expertiseMatch = speaker.expertise.some((tag) => tag.toLowerCase().includes(query))

      return nameMatch || titleMatch || orgMatch || bioMatch || expertiseMatch
    })

    setFilteredSpeakers(filtered)

    // Log performance data to console in development
    const duration = performance.now() - startTime
    if (process.env.NODE_ENV === "development") {
      console.log(`[Performance] Search (${searchQuery}): ${duration}ms, ${filtered.length} results`)
    }
  }, [searchQuery])

  // Get the moderator
  const moderator = allSpeakers.find((speaker) => speaker.isModerator)

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto text-center mb-8">
        <h1 className="text-4xl font-bold tracking-tighter mb-4">Our Speakers</h1>
        <p className="text-muted-foreground text-lg mb-8">
          Meet the experts who will be sharing their knowledge and insights during the Lunar Standardization Workshop on
          May 13, 2025.
        </p>

        {/* Search input */}
        <div className="relative max-w-md mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search by name, organization, or expertise..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setTimeout(() => setSearchFocused(false), 100)}
              className="pl-10 pr-10"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          {searchFocused && searchQuery.length > 0 && (
            <div className="absolute z-10 mt-1 w-full bg-popover border rounded-md shadow-md max-h-60 overflow-auto">
              {filteredSpeakers.length > 0 ? (
                <ul className="py-1">
                  {filteredSpeakers.map((speaker) => (
                    <li key={speaker.id}>
                      <Link href={`/speakers/${speaker.id}`} className="flex items-center px-4 py-2 hover:bg-muted">
                        <div className="relative w-8 h-8 rounded-full overflow-hidden mr-3">
                          <Image
                            src={speaker.image || "/placeholder.png"}
                            alt={speaker.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-medium">{speaker.name}</p>
                          <p className="text-xs text-muted-foreground">{speaker.title}</p>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="px-4 py-3 text-sm text-muted-foreground">
                  No speakers found matching "{searchQuery}"
                </div>
              )}
            </div>
          )}
        </div>

        {/* Search filters/tags */}
        {searchQuery && (
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            <div className="text-sm text-muted-foreground mr-2 mt-1">
              {filteredSpeakers.length} {filteredSpeakers.length === 1 ? "result" : "results"} for:
            </div>
            <Badge variant="secondary" className="flex items-center gap-1">
              {searchQuery}
              <button onClick={() => setSearchQuery("")}>
                <X className="h-3 w-3 ml-1" />
              </button>
            </Badge>
          </div>
        )}
      </div>

      {filteredSpeakers.length === 0 ? (
        <div className="text-center py-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
            <Search className="h-8 w-8 text-muted-foreground" />
          </div>
          <h2 className="text-xl font-bold mb-2">No speakers found</h2>
          <p className="text-muted-foreground mb-6">
            We couldn't find any speakers matching your search for "{searchQuery}".
          </p>
          <Button onClick={() => setSearchQuery("")}>Clear Search</Button>
        </div>
      ) : (
        <>
          {/* Display expertise tags at the top for quick filtering */}
          <div className="mb-8 flex flex-wrap justify-center gap-2">
            {Array.from(new Set(allSpeakers.flatMap((s) => s.expertise)))
              .sort()
              .map((tag) => (
                <Button
                  key={tag}
                  variant={searchQuery.toLowerCase() === tag.toLowerCase() ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSearchQuery(tag)}
                  className="capitalize"
                >
                  {tag}
                </Button>
              ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSpeakers.map((speaker) => (
              <Card key={speaker.id} className="overflow-hidden">
                <div className="relative h-64">
                  <Image src={speaker.image || "/placeholder.png"} alt={speaker.name} fill className="object-cover" />
                  {speaker.isModerator && (
                    <div className="absolute top-2 right-2">
                      <Badge className="bg-primary">Moderator</Badge>
                    </div>
                  )}
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-1">{speaker.name}</h3>
                  <p className="text-primary mb-1">{speaker.title}</p>
                  <p className="text-sm text-muted-foreground mb-3">{speaker.organization}</p>
                  <p className="text-muted-foreground mb-4 line-clamp-3">{speaker.bio}</p>

                  {/* Workshop information */}
                  <div className="mb-4 text-sm">
                    <Badge variant="outline" className="mb-2">
                      {speaker.workshop}
                    </Badge>
                    <p className="text-muted-foreground">{speaker.session}</p>
                  </div>

                  {/* Expertise tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {speaker.expertise.slice(0, 3).map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="cursor-pointer capitalize"
                        onClick={() => setSearchQuery(tag)}
                      >
                        {tag}
                      </Badge>
                    ))}
                    {speaker.expertise.length > 3 && (
                      <Badge variant="outline">+{speaker.expertise.length - 3} more</Badge>
                    )}
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex space-x-2">
                      {speaker.social.twitter && (
                        <Button variant="ghost" size="icon" asChild>
                          <Link
                            href={speaker.social.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Twitter"
                          >
                            <Twitter className="h-4 w-4" />
                          </Link>
                        </Button>
                      )}
                      {speaker.social.linkedin && (
                        <Button variant="ghost" size="icon" asChild>
                          <Link
                            href={speaker.social.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                          >
                            <Linkedin className="h-4 w-4" />
                          </Link>
                        </Button>
                      )}
                      {speaker.social.website && (
                        <Button variant="ghost" size="icon" asChild>
                          <Link
                            href={speaker.social.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Website"
                          >
                            <Globe className="h-4 w-4" />
                          </Link>
                        </Button>
                      )}
                    </div>

                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/speakers/${speaker.id}`}>View Profile</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
