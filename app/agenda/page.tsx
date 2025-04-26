"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  CalendarDays,
  Clock,
  Download,
  Users,
  Video,
  MessageSquare,
  PanelLeft,
  Presentation,
  CheckCircle,
  Coffee,
  ArrowRight,
  MapPin,
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { useEffect } from "react"
import { trackEvent } from "@/lib/analytics"

export default function DetailedAgendaPage() {
  // Track page view
  useEffect(() => {
    trackEvent("agenda_viewed", {
      page: "agenda",
      source: document.referrer || "direct",
    })
  }, [])

  // Track calendar download
  const handleCalendarDownload = () => {
    trackEvent("workshop_material_downloaded", {
      material_type: "calendar",
      format: "ics",
    })
  }

  // Track speaker profile clicks from agenda
  const handleSpeakerClick = (speakerId: number, speakerName: string) => {
    trackEvent("navigation", {
      destination: `speaker_${speakerId}`,
      from: "agenda",
      speaker_name: speakerName,
    })
  }

  // Session types with icons
  const sessionTypes = {
    introduction: { name: "Introduction", icon: <Video className="h-4 w-4" /> },
    panel: { name: "Panel Discussion", icon: <PanelLeft className="h-4 w-4" /> },
    qa: { name: "Q&A Session", icon: <MessageSquare className="h-4 w-4" /> },
    breakout: { name: "Breakout Session", icon: <Users className="h-4 w-4" /> },
    presentation: { name: "Presentation", icon: <Presentation className="h-4 w-4" /> },
    conclusion: { name: "Conclusion", icon: <CheckCircle className="h-4 w-4" /> },
    transition: { name: "Transition", icon: <ArrowRight className="h-4 w-4" /> },
    break: { name: "Break", icon: <Coffee className="h-4 w-4" /> },
  }

  // Panel speakers for May 2025 workshop
  const panelSpeakers = [
    {
      id: 1,
      name: "Quan Haofang",
      role: "China Astronautics Standards Institute",
      avatar: "QH",
      image: "/images/speaker-quan.jpg",
    },
    {
      id: 2,
      name: "Fred Slane",
      role: "ISO Space Systems Technical Committee",
      avatar: "FS",
      image: "/images/speaker-fred.jpg",
    },
    {
      id: 3,
      name: "Aarti Holla-Maini",
      role: "United Nations Office for Outer Space Affairs",
      avatar: "AH",
      image: "/images/speaker-aarti.jpg",
    },
    {
      id: 4,
      name: "Hiroshi Yamakawa",
      role: "ispace, Inc.",
      avatar: "HY",
      image: "/images/speaker-hiroshi.jpg",
    },
    {
      id: 5,
      name: "Elizabeth Chen",
      role: "International Space University",
      avatar: "EC",
      image: "/images/speaker-chen.jpg",
    },
  ]

  // May 2025 Workshop agenda
  const workshopSessions = [
    {
      id: "may-s1",
      title: "Introduction",
      type: "introduction",
      time: "15:00 - 15:10",
      duration: "10 minutes",
      description: "Welcome, workshop objectives, and overview of the agenda.",
      track: "Main Track",
    },
    {
      id: "may-s2",
      title: "Transition to Panel",
      type: "transition",
      time: "15:10 - 15:13",
      duration: "3 minutes",
      description: "Brief transition and introduction of panel speakers.",
      track: "Main Track",
    },
    {
      id: "may-s3",
      title: "Panel Discussion",
      type: "panel",
      time: "15:13 - 15:53",
      duration: "40 minutes",
      description:
        "Expert panel discussion on key challenges and opportunities in lunar standardization, focusing on database interoperability, international cooperation, and implementation strategies.",
      speakers: panelSpeakers,
      track: "Main Track",
    },
    {
      id: "may-s4",
      title: "Q&A Session",
      type: "qa",
      time: "15:53 - 16:08",
      duration: "15 minutes",
      description: "Audience questions for the panel.",
      track: "Main Track",
    },
    {
      id: "may-s5",
      title: "Breakout Instructions",
      type: "transition",
      time: "16:08 - 16:13",
      duration: "5 minutes",
      description: "Explanation of Zoom breakout rooms and Miro boards for collaborative activities.",
      track: "Main Track",
    },
    {
      id: "may-s6",
      title: "Break",
      type: "break",
      time: "16:13 - 16:23",
      duration: "10 minutes",
      description: "Short break to grab refreshments and prepare for breakout sessions.",
      track: "Main Track",
    },
    {
      id: "may-s7",
      title: "Transition to Breakout Rooms",
      type: "transition",
      time: "16:23 - 16:28",
      duration: "5 minutes",
      description: "Final preparations and movement to breakout rooms.",
      track: "Main Track",
    },
    {
      id: "may-s8",
      title: "Breakout Activities",
      type: "breakout",
      time: "16:28 - 17:18",
      duration: "50 minutes",
      description:
        "Collaborative work in breakout rooms using Miro boards (40 minutes of brainstorming + 10 minutes of summarizing insights).",
      track: "Breakout Rooms",
      details: [
        "Lunar Database Standardization (Moderator: Timothy Cichan)",
        "Technical Interoperability Solutions (Moderator: Marchel Holle)",
        "International Cooperation Frameworks (Moderator: Kristin Jaburek)",
        "Implementation Strategies",
        "Future Challenges and Opportunities",
      ],
      speakers: [
        {
          id: 1,
          name: "Timothy Cichan",
          role: "Lockheed Martin",
          avatar: "TC",
          image: "/images/organizer-timothy.jpg",
          isModerator: true,
        },
        {
          id: 4,
          name: "Marchel Holle",
          role: "ispace",
          avatar: "MH",
          image: "/images/speaker-hiroshi.jpg",
          isModerator: true,
        },
        {
          id: 12,
          name: "Kristin Jaburek",
          role: "Johns Hopkins Applied Physics Laboratory",
          avatar: "KJ",
          image: "/images/organizer-kristin.jpg",
          isModerator: true,
        },
      ],
    },
    {
      id: "may-s9",
      title: "Team Presentations",
      type: "presentation",
      time: "17:18 - 17:43",
      duration: "25 minutes",
      description:
        "Teams present outcomes from breakout sessions (5 minutes per team maximum, aiming for 4 minutes per team).",
      track: "Main Track",
    },
    {
      id: "may-s10",
      title: "Q&A / Open Floor Session",
      type: "qa",
      time: "17:43 - 18:03",
      duration: "20 minutes",
      description: "Open discussion and Q&A on the presented outcomes and next steps.",
      track: "Main Track",
    },
    {
      id: "may-s11",
      title: "Conclusion",
      type: "conclusion",
      time: "18:03 - 18:08",
      duration: "5 minutes",
      description: "Summary of workshop outcomes, thank you for participation, and next steps.",
      track: "Main Track",
    },
    {
      id: "may-s12",
      title: "Buffer Time",
      type: "break",
      time: "18:08 - 18:23",
      duration: "15 minutes",
      description: "Additional time for extended discussions if needed. Workshop will end no later than 18:30 CEST.",
      track: "Main Track",
      location: "Virtual Event (Zoom)",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tighter mb-4">Lunar Standardization Workshop</h1>
        <p className="text-muted-foreground text-lg mb-6">
          A collaborative session focused on standardization challenges and opportunities in lunar exploration
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <div className="flex items-center gap-2">
            <CalendarDays className="h-5 w-5 text-primary" />
            <span>Tuesday, May 13, 2025</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-primary" />
            <span>15:00-18:30 CEST</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-primary" />
            <span>Virtual Event (Zoom)</span>
          </div>
        </div>
        <div className="flex justify-center">
          <Button asChild onClick={handleCalendarDownload}>
            <a href="#" download="Lunar-Standardization-Workshop-Agenda.ics">
              <Download className="mr-2 h-4 w-4" /> Add to Calendar
            </a>
          </Button>
        </div>
      </div>

      <div className="mb-8 bg-muted/40 p-4 rounded-lg">
        <h2 className="text-xl font-bold mb-2">Workshop Structure</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-start gap-2">
            <div className="bg-primary/20 p-2 rounded-full mt-1">
              <PanelLeft className="h-4 w-4 text-primary" />
            </div>
            <div>
              <h3 className="font-medium">Panel Discussion</h3>
              <p className="text-sm text-muted-foreground">Expert panel on key topics (40 minutes)</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <div className="bg-primary/20 p-2 rounded-full mt-1">
              <Users className="h-4 w-4 text-primary" />
            </div>
            <div>
              <h3 className="font-medium">Breakout Sessions</h3>
              <p className="text-sm text-muted-foreground">
                Collaborative discussions (40 minutes + 10 minutes summary)
              </p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <div className="bg-primary/20 p-2 rounded-full mt-1">
              <MessageSquare className="h-4 w-4 text-primary" />
            </div>
            <div>
              <h3 className="font-medium">Q&A Sessions</h3>
              <p className="text-sm text-muted-foreground">Interactive discussions with experts (15 minutes)</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Detailed Agenda</h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[39px] top-0 bottom-0 w-[2px] bg-border" />

          {/* Sessions */}
          <div className="space-y-6">
            {workshopSessions.map((session) => (
              <div key={session.id} className="relative">
                {/* Time indicator */}
                <div className="absolute left-0 top-6 flex flex-col items-center">
                  <div className="w-[20px] h-[20px] rounded-full bg-primary z-10" />
                  <div className="text-sm font-medium mt-2 text-center w-[80px]">{session.time.split(" - ")[0]}</div>
                </div>

                {/* Session card */}
                <Card
                  className={`ml-[100px] border-l-4 ${
                    session.type === "introduction"
                      ? "border-l-blue-500"
                      : session.type === "panel"
                        ? "border-l-purple-500"
                        : session.type === "qa"
                          ? "border-l-green-500"
                          : session.type === "breakout"
                            ? "border-l-orange-500"
                            : session.type === "presentation"
                              ? "border-l-pink-500"
                              : session.type === "transition"
                                ? "border-l-yellow-500"
                                : session.type === "break"
                                  ? "border-l-gray-500"
                                  : "border-l-teal-500"
                  }`}
                >
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Badge variant="outline" className="flex items-center gap-1">
                            {sessionTypes[session.type].icon}
                            <span>{sessionTypes[session.type].name}</span>
                          </Badge>
                          <Badge variant="secondary">{session.duration}</Badge>
                        </div>
                        <CardTitle className="text-xl">{session.title}</CardTitle>
                        <CardDescription className="mt-1 flex items-center gap-2">
                          <Clock className="h-3 w-3" />
                          {session.time}
                          <span className="mx-1">•</span>
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{session.description}</p>

                    {session.speakers && session.speakers.length > 0 && (
                      <div className="space-y-3">
                        <h4 className="text-sm font-medium">
                          {session.type === "breakout" ? "Breakout Room Moderators:" : "Panelists:"}
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                          {session.speakers.map((speaker) => (
                            <TooltipProvider key={speaker.id}>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Link
                                    href={`/committee/${speaker.id}`}
                                    className="flex items-center gap-2 p-2 rounded-md hover:bg-muted transition-colors"
                                    onClick={() => handleSpeakerClick(speaker.id, speaker.name)}
                                  >
                                    <Avatar className="h-8 w-8">
                                      <AvatarImage src={speaker.image || "/placeholder.svg"} alt={speaker.name} />
                                      <AvatarFallback>{speaker.avatar}</AvatarFallback>
                                    </Avatar>
                                    <div>
                                      <p className="text-sm font-medium leading-none">{speaker.name}</p>
                                      <p className="text-xs text-muted-foreground">{speaker.role}</p>
                                      {speaker.isModerator && <p className="text-xs text-primary">Moderator</p>}
                                    </div>
                                  </Link>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>View {speaker.name}'s profile</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          ))}
                        </div>
                      </div>
                    )}

                    {session.details && session.details.length > 0 && (
                      <div className="mt-4">
                        <h4 className="text-sm font-medium mb-2">Breakout Room Themes:</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          {session.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-primary font-bold">•</span>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Card className="mb-12">
        <CardHeader>
          <CardTitle className="text-2xl">Preparation</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Technical Requirements</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Required Software:</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Zoom client (latest version)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Web browser for accessing Miro boards</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Recommended Setup:</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Stable internet connection</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Webcam for better interaction</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Headphones with microphone</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Second screen (if possible) for viewing Miro while on Zoom</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Pre-Workshop Materials</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Registered participants will receive the following materials one week before the workshop:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Zoom link and access instructions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Miro board access information</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Background reading materials</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Pre-workshop survey</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Registration</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Space is limited to ensure productive breakout sessions. Please register early to secure your place in this
          collaborative workshop.
        </p>
        <Button
          size="lg"
          asChild
          onClick={() =>
            trackEvent("navigation", { destination: "registration", from: "agenda", action: "register_cta" })
          }
        >
          <Link href="/registration">Register for the Workshop</Link>
        </Button>
      </div>
    </div>
  )
}
