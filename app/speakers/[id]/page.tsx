"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Linkedin, Twitter, Globe, Mail, Calendar } from "lucide-react"
import { useEffect } from "react"
import { trackEvent } from "@/lib/analytics"

// This would typically come from a database or API
const getSpeakerData = (id: string) => {
  const speakers = [
    {
      id: 1,
      name: "Quan Haofang",
      title: "Senior Standards Expert",
      organization: "China Astronautics Standards Institute",
      bio: "Quan Haofang is a leading expert in space standardization with over 20 years of experience developing technical standards for space missions. His work focuses on interoperability standards for lunar missions and international collaboration frameworks for space exploration.",
      fullBio: `
        Quan Haofang has dedicated his career to advancing space standardization efforts, particularly in the context of lunar exploration. At the China Astronautics Standards Institute, he leads initiatives to develop technical standards that facilitate international collaboration in space activities.

        With a Ph.D. in Aerospace Engineering from Beihang University, Quan has contributed to numerous international standardization committees and working groups. His research has been instrumental in establishing protocols for lunar data exchange, communication systems interoperability, and resource utilization standards.

        Quan has published over 40 papers on space standardization and has been a key contributor to China's lunar exploration program. His work bridges technical expertise with international policy considerations, making him a valuable voice in discussions about the future of lunar activities.

        Prior to joining the China Astronautics Standards Institute, Quan worked on the Chang'e lunar exploration program, where he helped develop systems for lunar surface operations and data collection.
      `,
      image: "/images/speaker-quan.jpg",
      sessions: [
        {
          title: "Panel Discussion: Standardization Challenges and Opportunities in Lunar Exploration",
          day: "May 13, 2025",
          time: "15:13 - 15:53",
        },
      ],
      social: {
        twitter: "https://twitter.com/quanhaofang",
        linkedin: "https://linkedin.com/in/quan-haofang",
        website: "https://casi.org.cn/experts/quan",
        email: "quan.haofang@casi.org.cn",
      },
      isModerator: false,
    },
    {
      id: 2,
      name: "Fred Slane",
      title: "Executive Director",
      organization: "ISO Space Systems Technical Committee (ISO/TC 20/SC 14)",
      bio: "Fred Slane is the Executive Director of the Space Infrastructure Foundation and serves on the ISO Space Systems Technical Committee. With extensive experience in space systems engineering and standards development, he has been instrumental in creating international standards for space operations and data exchange.",
      fullBio: `
        Fred Slane is a recognized authority in space systems standardization and has been at the forefront of developing international standards for space operations for over two decades. As the Executive Director of the ISO Space Systems Technical Committee, he coordinates global efforts to establish common standards for space activities.

        Fred's background includes extensive experience in systems engineering for space missions, with particular expertise in spacecraft design, mission operations, and data management. He has been a key contributor to numerous ISO standards that govern space operations, including protocols for data exchange, mission planning, and spacecraft operations.

        Throughout his career, Fred has advocated for international cooperation in space activities and has worked to build consensus among diverse stakeholders in the space community. His leadership has been crucial in establishing frameworks that enable different nations and organizations to collaborate effectively in space exploration.

        Fred holds a Master's degree in Systems Engineering from the University of Southern California and has received numerous awards for his contributions to space standardization efforts. He is a frequent speaker at international conferences on space policy and standardization.
      `,
      image: "/images/speaker-fred.jpg",
      sessions: [
        {
          title: "Panel Discussion: Standardization Challenges and Opportunities in Lunar Exploration",
          day: "May 13, 2025",
          time: "15:13 - 15:53",
        },
      ],
      social: {
        linkedin: "https://linkedin.com/in/fredslane",
        website: "https://www.iso.org/committee/46614.html",
        email: "fred.slane@iso.org",
      },
      isModerator: false,
    },
    {
      id: 3,
      name: "Aarti Holla-Maini",
      title: "Director",
      organization: "United Nations Office for Outer Space Affairs (UNOOSA)",
      bio: "Aarti Holla-Maini is a distinguished expert in space policy and international cooperation. As a Director at UNOOSA, she leads initiatives to promote international collaboration in space activities and the development of regulatory frameworks for sustainable space exploration, with a particular focus on lunar activities.",
      fullBio: `
        Aarti Holla-Maini is a respected leader in international space policy and diplomacy, currently serving as a Director at the United Nations Office for Outer Space Affairs (UNOOSA). In this role, she oversees initiatives aimed at promoting international cooperation in space activities and developing regulatory frameworks for sustainable space exploration.

        As a panelist for the Lunar Standardization Workshop, Aarti brings her extensive experience in facilitating international dialogue to discussions on lunar activities standardization. Her diplomatic skills and deep understanding of space policy enable her to navigate complex discussions among diverse stakeholders.

        Before joining UNOOSA, Aarti served as Secretary General of the Global Satellite Operators Association for over 15 years, where she advocated for the satellite industry in international regulatory forums. Her background includes extensive experience in telecommunications policy and international relations.

        Aarti holds a Master's degree in International Relations from the London School of Economics and has been recognized with numerous awards for her contributions to international space cooperation. She is a frequent speaker at international conferences on space policy and has published widely on topics related to space governance and sustainability.
      `,
      image: "/images/speaker-aarti.jpg",
      sessions: [
        {
          title: "Panel Discussion: Standardization Challenges and Opportunities in Lunar Exploration",
          day: "May 13, 2025",
          time: "15:13 - 15:53",
        },
      ],
      social: {
        twitter: "https://twitter.com/aartiholla",
        linkedin: "https://linkedin.com/in/aarti-holla-maini",
        website: "https://www.unoosa.org/team/holla-maini",
        email: "a.holla-maini@unoosa.org",
      },
      isModerator: false,
    },
    {
      id: 4,
      name: "Hiroshi Yamakawa",
      title: "Chief Technology Officer",
      organization: "ispace, Inc.",
      bio: "Hiroshi Yamakawa serves as the CTO of ispace, a leading lunar exploration company. With a background in aerospace engineering and lunar mission planning, he oversees the technical development of ispace's lunar landers and rovers. His expertise in lunar surface operations and resource utilization contributes significantly to international standards for lunar activities.",
      fullBio: `
        Hiroshi Yamakawa is the Chief Technology Officer at ispace, Inc., a private lunar exploration company developing technologies for lunar resource utilization. In this role, he leads the technical development of ispace's lunar landers and rovers, drawing on his extensive background in aerospace engineering and lunar mission planning.

        With over 20 years of experience in the space industry, Yamakawa has been at the forefront of Japan's lunar exploration efforts. Before joining ispace, he held senior positions at JAXA (Japan Aerospace Exploration Agency), where he contributed to the development of lunar mission architectures and technologies.

        Yamakawa's expertise spans lunar surface operations, resource utilization, and mission planning. He has been actively involved in international discussions about lunar exploration standards, bringing a commercial perspective to these conversations. His work bridges the gap between technical capabilities and practical applications in the lunar environment.

        Yamakawa holds a Ph.D. in Aerospace Engineering from the University of Tokyo and has published extensively on topics related to lunar exploration and resource utilization. He is a member of several international space organizations and advisory committees focused on lunar activities.
      `,
      image: "/images/speaker-hiroshi.jpg",
      sessions: [
        {
          title: "Panel Discussion: Standardization Challenges and Opportunities in Lunar Exploration",
          day: "May 13, 2025",
          time: "15:13 - 15:53",
        },
      ],
      social: {
        linkedin: "https://linkedin.com/in/hiroshi-yamakawa",
        website: "https://ispace-inc.com/team/",
        email: "h-yamakawa@ispace-inc.com",
      },
      isModerator: false,
    },
    {
      id: 5,
      name: "Elizabeth Chen",
      title: "Chair, LOGIC Initiative",
      organization: "International Space University",
      bio: "Elizabeth Chen chairs the LOGIC Initiative and is a professor at the International Space University. With expertise in space policy and international cooperation, she leads efforts to develop standardized frameworks for lunar activities. As the workshop moderator, she facilitates productive dialogue among diverse stakeholders.",
      fullBio: `
        Elizabeth Chen is a distinguished expert in space policy and international cooperation, currently serving as the Chair of the LOGIC Initiative and a professor at the International Space University. Her research focuses on governance frameworks for space activities, with a particular emphasis on lunar exploration and utilization.

        As the moderator for the Lunar Standardization Workshop, Chen brings her extensive experience in facilitating international dialogue to guide discussions on standardization challenges and opportunities. Her balanced approach ensures that diverse perspectives are heard and considered in the development of recommendations.

        Chen has published extensively on topics related to space governance, international cooperation, and standardization. Her work has been influential in shaping policy discussions at various international forums, including the United Nations Committee on the Peaceful Uses of Outer Space.

        Prior to her academic career, Chen worked in the space industry and held advisory positions with several space agencies. This practical experience informs her understanding of the technical and operational challenges involved in lunar standardization efforts.

        Chen holds a Ph.D. in International Relations from Princeton University and has received numerous awards for her contributions to space policy and education. She is a sought-after speaker at international conferences and has served on various advisory boards related to space exploration and governance.
      `,
      image: "/images/speaker-chen.jpg",
      sessions: [
        {
          title: "Panel Discussion: Standardization Challenges and Opportunities in Lunar Exploration (Moderator)",
          day: "May 13, 2025",
          time: "15:13 - 15:53",
        },
        {
          title: "Q&A Session",
          day: "May 13, 2025",
          time: "15:53 - 16:08",
        },
        {
          title: "Conclusion",
          day: "May 13, 2025",
          time: "18:03 - 18:08",
        },
      ],
      social: {
        twitter: "https://twitter.com/elizabethchen",
        linkedin: "https://linkedin.com/in/elizabeth-chen",
        website: "https://isunet.edu/faculty/chen",
        email: "elizabeth.chen@isunet.edu",
      },
      isModerator: false,
    },
  ]

  return speakers.find((speaker) => speaker.id === Number.parseInt(id)) || speakers[0]
}

export default function SpeakerDetailPage({ params }: { params: { id: string } }) {
  const speaker = getSpeakerData(params.id)

  // Track speaker profile view
  useEffect(() => {
    trackEvent("speaker_profile_viewed", {
      speaker_id: params.id,
      speaker_name: speaker.name,
      speaker_organization: speaker.organization,
      is_moderator: speaker.isModerator ? "yes" : "no",
    })
  }, [params.id, speaker])

  // Track external link clicks
  const handleExternalLinkClick = (linkType: string, url: string) => {
    trackEvent("external_link_clicked", {
      link_type: linkType,
      speaker_id: params.id,
      speaker_name: speaker.name,
      url: url,
    })
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Button
        variant="ghost"
        asChild
        className="mb-8"
        onClick={() => trackEvent("navigation", { destination: "speakers_list", from: `speaker_${params.id}` })}
      >
        <Link href="/speakers">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Speakers
        </Link>
      </Button>

      {/* Rest of the component remains the same, but with added tracking */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <div className="sticky top-24">
            <div className="relative aspect-square overflow-hidden rounded-lg mb-6">
              <Image src={speaker.image || "/placeholder.svg"} alt={speaker.name} fill className="object-cover" />
              {speaker.isModerator && (
                <div className="absolute top-4 right-4">
                  <Badge className="bg-primary">Moderator</Badge>
                </div>
              )}
            </div>

            <h1 className="text-3xl font-bold mb-2">{speaker.name}</h1>
            <p className="text-primary text-lg mb-1">{speaker.title}</p>
            <p className="text-muted-foreground mb-6">{speaker.organization}</p>

            <div className="flex flex-wrap gap-3 mb-8">
              {speaker.social.twitter && (
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  onClick={() => handleExternalLinkClick("twitter", speaker.social.twitter)}
                >
                  <Link href={speaker.social.twitter} target="_blank" rel="noopener noreferrer">
                    <Twitter className="mr-2 h-4 w-4" />
                    Twitter
                  </Link>
                </Button>
              )}
              {speaker.social.linkedin && (
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  onClick={() => handleExternalLinkClick("linkedin", speaker.social.linkedin)}
                >
                  <Link href={speaker.social.linkedin} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-4 w-4" />
                    LinkedIn
                  </Link>
                </Button>
              )}
              {speaker.social.website && (
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  onClick={() => handleExternalLinkClick("website", speaker.social.website)}
                >
                  <Link href={speaker.social.website} target="_blank" rel="noopener noreferrer">
                    <Globe className="mr-2 h-4 w-4" />
                    Website
                  </Link>
                </Button>
              )}
              {speaker.social.email && (
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  onClick={() => handleExternalLinkClick("email", `mailto:${speaker.social.email}`)}
                >
                  <Link href={`mailto:${speaker.social.email}`}>
                    <Mail className="mr-2 h-4 w-4" />
                    Email
                  </Link>
                </Button>
              )}
            </div>

            <div className="bg-muted p-4 rounded-lg">
              <h3 className="font-medium mb-3">Speaking Sessions</h3>
              <div className="space-y-3">
                {speaker.sessions.map((session, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">{session.title}</p>
                      <p className="text-sm text-muted-foreground">
                        {session.day} • {session.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold mb-6">Biography</h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            {speaker.fullBio.split("\n\n").map((paragraph, index) => (
              <p key={index} className="mb-4 text-muted-foreground">
                {paragraph.trim()}
              </p>
            ))}
          </div>

          {speaker.isModerator && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6">Role as Workshop Moderator</h2>
              <div className="bg-primary/10 border border-primary/20 p-6 rounded-lg">
                <p className="text-muted-foreground mb-4">
                  As the moderator for the Lunar Standardization Workshop, {speaker.name} is responsible for
                  facilitating discussions on lunar activities standardization and cooperation frameworks. This
                  includes:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Guiding panel discussions to ensure productive dialogue among diverse stakeholders</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Synthesizing key points and facilitating consensus-building on complex issues</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Ensuring balanced representation of different perspectives and approaches</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Helping to formulate actionable recommendations for international cooperation</span>
                  </li>
                </ul>
              </div>
            </div>
          )}

          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Related Speakers</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[1, 2, 3, 4, 5]
                .filter((id) => id !== Number.parseInt(params.id))
                .slice(0, 2)
                .map((id) => {
                  const relatedSpeaker = getSpeakerData(id.toString())
                  return (
                    <Card key={id} className="overflow-hidden">
                      <div className="flex items-center p-4">
                        <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                          <Image
                            src={relatedSpeaker.image || "/placeholder.svg"}
                            alt={relatedSpeaker.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-bold truncate">{relatedSpeaker.name}</h3>
                          <p className="text-sm text-muted-foreground truncate">{relatedSpeaker.organization}</p>
                        </div>
                        <Button variant="ghost" size="sm" asChild>
                          <Link href={`/speakers/${id}`}>View</Link>
                        </Button>
                      </div>
                    </Card>
                  )
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
