"use client"

import type React from "react"

import { useState } from "react"
import {
  Briefcase,
  GraduationCap,
  Award,
  Rocket,
  Code,
  ChevronDown,
  ChevronUp,
  Linkedin,
  ArrowRight,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FeaturedBlogPosts } from "@/components/sections/featured-blog-posts"
// Add the import for LinkedInFeaturedPosts at the top of the file with the other imports
import { MediaAppearances } from "@/components/sections/media-appearances"
import Link from "next/link"
import {
  type ExperienceDetail,
  professionalExperiences,
  sideProjects,
  volunteerActivities,
} from "@/lib/experience"

const coreSkills = [
  "Inference and API product strategy",
  "Pricing and packaging",
  "Usage-based billing and metering",
  "Developer platforms and portals",
  "Enterprise discovery",
  "Success metrics and product analytics",
  "OpenAPI",
  "JSON Schema",
  "MCP servers for AI agents",
  "ML lifecycle",
  "ONNX",
  "MLflow",
]

export default function Home() {
  // Track expanded items by their IDs
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set())

  const toggleExpand = (id: string) => {
    setExpandedItems((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(id)) {
        newSet.delete(id)
      } else {
        newSet.add(id)
      }
      return newSet
    })
  }

  const highlightConnections = (connectionId: string) => {
    try {
      const elements = document.querySelectorAll(`[data-connection="${connectionId}"]`)
      elements.forEach((element) => {
        if (element instanceof HTMLElement) {
          element.classList.add("highlighted")
        }
      })
    } catch (error) {
      console.error("Error highlighting connections:", error)
    }
  }

  const removeHighlight = () => {
    try {
      const elements = document.querySelectorAll(".highlighted")
      elements.forEach((element) => {
        if (element instanceof HTMLElement) {
          element.classList.remove("highlighted")
        }
      })
    } catch (error) {
      console.error("Error removing highlights:", error)
    }
  }

  return (
    <div>
      <div className="container py-12 px-4 mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Omolade Jordan Odetara</h1>
          <p className="text-xl text-[#62748e] max-w-2xl mx-auto">
            Technical Product Manager · API platforms, model inference and AI pricing
          </p>
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            <Badge className="bg-[#615fff] hover:bg-[#615fff]/80">Space Exploration</Badge>
            <Badge className="bg-[#615fff] hover:bg-[#615fff]/80">Air Travel</Badge>
            <Badge className="bg-[#615fff] hover:bg-[#615fff]/80">Developer Experiences</Badge>
            <Badge className="bg-[#615fff] hover:bg-[#615fff]/80">Infrastructure</Badge>
          </div>
          <div className="flex justify-center gap-4 mt-6">
            <a href="mailto:omoladeodetara@gmail.com" className="text-[#00d5be] hover:underline">
              omoladeodetara@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/omoladeodetara" className="text-[#00d5be] hover:underline">
              LinkedIn
            </a>
            <a href="https://omoladeodetara.hashnode.dev" className="text-[#00d5be] hover:underline">
              Blog
            </a>
          </div>
        </div>

        {/* Timeline Legend */}
        <div className="flex flex-wrap justify-center gap-6 mb-10">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-[#615fff]"></div>
            <span>Main Professional Experience</span>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-[#ffb86a]"></div>
            <span>Volunteer Space Activities</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-[#00d5be]"></div>
            <span>Side & Freelance Projects</span>
          </div>
        </div>

        {/* Education and Skills */}
        <div className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <GraduationCap className="mr-2 text-[#ffb86a]" /> Education
            </h2>
            <div className="space-y-4">
              <EducationItem institution="Utiva" degree="Product School, Agile Product Management" />
              <EducationItem
                institution="Obafemi Awolowo University"
                degree="Bachelor of Arts - BA, Fine Arts: Painting/Graphics"
              />
              <EducationItem institution="Ife Business School" degree="Business Development and Entrepreneurship" />
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Award className="mr-2 text-[#ffb86a]" /> Certifications
            </h2>
            <div className="space-y-4">
              <Card>
                <CardContent className="p-4">
                  <p className="font-medium">Application Security Analyst Explorer Award</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <p className="font-medium">Ch.DMP, PDG.SMDM, ACISMDM</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <p className="font-medium">Toggl Hire Product Development Skill Test Certificate</p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Award className="mr-2 text-[#ffb86a]" /> Core Skills
            </h2>
            <div className="flex flex-wrap gap-2">
              {coreSkills.map((skill) => (
                <Badge key={skill} className="bg-[#314158] hover:bg-[#314158]/80">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline Headers */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6">
          <div className="md:col-span-6">
            <h2 className="text-2xl font-bold flex items-center text-[#615fff]">
              <Briefcase className="mr-2" /> Professional Experience
            </h2>
          </div>
          <div className="md:col-span-3">
            <h2 className="text-xl font-bold flex items-center text-[#ffb86a]">
              <Rocket className="mr-2" /> Space Activities
            </h2>
          </div>
          <div className="md:col-span-3">
            <h2 className="text-xl font-bold flex items-center text-[#00d5be]">
              <Code className="mr-2" /> Side Projects
            </h2>
          </div>
        </div>

        {/* Parallel Timelines */}
        <div className="relative">
          {/* Time markers */}
          <div className="hidden md:block absolute left-0 top-0 bottom-0 w-16 border-r border-dashed border-gray-200">
            <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-white px-2 text-sm font-bold text-[#62748e]">
              2024
            </div>
            <div className="absolute top-[20%] right-0 transform translate-x-1/2 -translate-y-1/2 bg-white px-2 text-sm font-bold text-[#62748e]">
              2023
            </div>
            <div className="absolute top-[40%] right-0 transform translate-x-1/2 -translate-y-1/2 bg-white px-2 text-sm font-bold text-[#62748e]">
              2022
            </div>
            <div className="absolute top-[60%] right-0 transform translate-x-1/2 -translate-y-1/2 bg-white px-2 text-sm font-bold text-[#62748e]">
              2021
            </div>
            <div className="absolute top-[80%] right-0 transform translate-x-1/2 -translate-y-1/2 bg-white px-2 text-sm font-bold text-[#62748e]">
              2020
            </div>
            <div className="absolute bottom-0 right-0 transform translate-x-1/2 translate-y-1/2 bg-white px-2 text-sm font-bold text-[#62748e]">
              2017
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:pl-16">
            {/* Main Professional Timeline */}
            <div className="md:col-span-6 space-y-8 relative">
              <div className="absolute top-0 bottom-0 left-3 w-px bg-[#615fff]/30 z-0"></div>

              <MainTimelineItem
                id="2024-sii"
                color="#615fff"
                title="Product Definition Analyst"
                company="Amadeus"
                companyLinkedIn={professionalExperiences.find((exp) => exp.id === "2024-sii")?.companyLinkedIn}
                period="July 2024 - Present"
                location="France · contractor via SII"
                tags={["Airlines", "Travel", "API and Data Model Governance", "AI Pricing"]}
                current={true}
                connectionId="2024-sii"
                isExpanded={expandedItems.has("2024-sii")}
                onToggleExpand={() => toggleExpand("2024-sii")}
                details={professionalExperiences.find((exp) => exp.id === "2024-sii")}
              />

              <MainTimelineItem
                id="2023-leanspace"
                color="#615fff"
                title="Product Owner"
                company="Leanspace"
                companyLinkedIn={professionalExperiences.find((exp) => exp.id === "2023-leanspace")?.companyLinkedIn}
                period="November 2022 - August 2023"
                location="Strasbourg, France"
                tags={["Space", "Satellites", "SaaS"]}
                connectionId="2023-leanspace"
                isExpanded={expandedItems.has("2023-leanspace")}
                onToggleExpand={() => toggleExpand("2023-leanspace")}
                details={professionalExperiences.find((exp) => exp.id === "2023-leanspace")}
              />

              <MainTimelineItem
                id="2021-bossbusworld"
                color="#615fff"
                title="Technical Product Manager"
                company="Bossbus"
                companyLinkedIn={professionalExperiences.find((exp) => exp.id === "2021-bossbusworld")?.companyLinkedIn}
                period="January 2021 - November 2022"
                location="Lagos, Nigeria"
                tags={["Travel", "SaaS", "Developer Ecosystem"]}
                connectionId="2021-bossbusworld"
                isExpanded={expandedItems.has("2021-bossbusworld")}
                onToggleExpand={() => toggleExpand("2021-bossbusworld")}
                details={professionalExperiences.find((exp) => exp.id === "2021-bossbusworld")}
              />

              <MainTimelineItem
                id="2019-pledre"
                color="#615fff"
                title="Product Manager"
                company="Pledre"
                companyLinkedIn={professionalExperiences.find((exp) => exp.id === "2019-pledre")?.companyLinkedIn}
                period="January 2019 - January 2021"
                location="Lagos, Nigeria"
                tags={["Education", "Infrastructure", "B2B"]}
                connectionId="2019-pledre"
                isExpanded={expandedItems.has("2019-pledre")}
                onToggleExpand={() => toggleExpand("2019-pledre")}
                details={professionalExperiences.find((exp) => exp.id === "2019-pledre")}
              />

              <MainTimelineItem
                id="2017-artquake"
                color="#615fff"
                title="Software Engineer"
                company="ArtQuake"
                companyLinkedIn={professionalExperiences.find((exp) => exp.id === "2017-artquake")?.companyLinkedIn}
                period="May 2017 - December 2018"
                location="Lagos, Nigeria"
                tags={["UI", "Interactivity", "Digital Experiences"]}
                connectionId="2017-artquake"
                isExpanded={expandedItems.has("2017-artquake")}
                onToggleExpand={() => toggleExpand("2017-artquake")}
                details={professionalExperiences.find((exp) => exp.id === "2017-artquake")}
                last={true}
              />
            </div>

            {/* Volunteer Space Activities Timeline */}
            <div className="md:col-span-3 space-y-8 relative">
              <div className="absolute top-0 bottom-0 left-3 w-px bg-[#ffb86a]/30 z-0"></div>

              <div className="h-[100px] md:h-[120px]"></div>

              <MinorTimelineItem
                id="vol-2023-mva"
                color="#ffb86a"
                title="MVA - Lunar Technical Coordination"
                period="Sep 2023 - Present"
                connectionId="2023-leanspace"
                isExpanded={expandedItems.has("vol-2023-mva")}
                onToggleExpand={() => toggleExpand("vol-2023-mva")}
                details={volunteerActivities.find((exp) => exp.id === "vol-2023-mva")}
              />

              <MinorTimelineItem
                id="vol-2021-mva"
                color="#ffb86a"
                title="MVA - Interoperability Subgroup Co-Chair"
                period="Jan 2021 - Sep 2023"
                connectionId="2021-bossbusworld"
                isExpanded={expandedItems.has("vol-2021-mva")}
                onToggleExpand={() => toggleExpand("vol-2021-mva")}
                details={volunteerActivities.find((exp) => exp.id === "vol-2021-mva")}
              />

              <MinorTimelineItem
                id="vol-2020-spacehubs"
                color="#ffb86a"
                title="Spacehubs Africa Analyst"
                period="Aug 2020 - Aug 2021"
                connectionId="2020-spacehubs"
                isExpanded={expandedItems.has("vol-2020-spacehubs")}
                onToggleExpand={() => toggleExpand("vol-2020-spacehubs")}
                details={volunteerActivities.find((exp) => exp.id === "vol-2020-spacehubs")}
              />

              <MinorTimelineItem
                id="vol-2020-spaceapps"
                color="#ffb86a"
                title="NASA SpaceApps Lagos Lead"
                period="Aug 2020 - Aug 2021"
                connectionId="2020-spaceapps"
                isExpanded={expandedItems.has("vol-2020-spaceapps")}
                onToggleExpand={() => toggleExpand("vol-2020-spaceapps")}
                details={volunteerActivities.find((exp) => exp.id === "vol-2020-spaceapps")}
              />

              <MinorTimelineItem
                id="vol-2020-sgac"
                color="#ffb86a"
                title="SGAC - Commercial Space Project"
                period="Jul 2020 - Aug 2021"
                connectionId="2020-sgac"
                isExpanded={expandedItems.has("vol-2020-sgac")}
                onToggleExpand={() => toggleExpand("vol-2020-sgac")}
                details={volunteerActivities.find((exp) => exp.id === "vol-2020-sgac")}
              />

              <MinorTimelineItem
                id="vol-2020-spacegen"
                color="#ffb86a"
                title="SpaceGen United Delegate"
                period="Jul 2020"
                connectionId="2020-spacegen"
                isExpanded={expandedItems.has("vol-2020-spacegen")}
                onToggleExpand={() => toggleExpand("vol-2020-spacegen")}
                details={volunteerActivities.find((exp) => exp.id === "vol-2020-spacegen")}
                last={true}
              />
            </div>

            {/* Side Projects Timeline */}
            <div className="md:col-span-3 space-y-8 relative">
              <div className="absolute top-0 bottom-0 left-3 w-px bg-[#00d5be]/30 z-0"></div>

              <div className="h-[100px] md:h-[120px]"></div>

              <MinorTimelineItem
                id="side-monizoom"
                color="#00d5be"
                title="MoniZoom"
                period="Mar - Jun 2023"
                connectionId="2023-leanspace"
                isExpanded={expandedItems.has("side-monizoom")}
                onToggleExpand={() => toggleExpand("side-monizoom")}
                details={sideProjects.find((exp) => exp.id === "side-monizoom")}
              />

              <MinorTimelineItem
                id="side-nesthub"
                color="#00d5be"
                title="NestHub"
                period="May - Dec 2021"
                connectionId="2021-bossbusworld"
                isExpanded={expandedItems.has("side-nesthub")}
                onToggleExpand={() => toggleExpand("side-nesthub")}
                details={sideProjects.find((exp) => exp.id === "side-nesthub")}
              />

              <MinorTimelineItem
                id="side-founders"
                color="#00d5be"
                title="Co-founder and Lead Product Manager"
                company="Founders and Innovators (FANDI)"
                period="January 2021 - November 2022"
                connectionId="2021-bossbusworld"
                isExpanded={expandedItems.has("side-founders")}
                onToggleExpand={() => toggleExpand("side-founders")}
                details={sideProjects.find((exp) => exp.id === "side-founders")}
              />

              <MinorTimelineItem
                id="side-zyleme"
                color="#00d5be"
                title="Zyleme"
                period="Jan - Jul 2020"
                connectionId="2019-pledre"
                isExpanded={expandedItems.has("side-zyleme")}
                onToggleExpand={() => toggleExpand("side-zyleme")}
                details={sideProjects.find((exp) => exp.id === "side-zyleme")}
              />

              <MinorTimelineItem
                id="side-talahive"
                color="#00d5be"
                title="TalaHive"
                period="Sep 2018 - Feb 2019"
                connectionId="2017-artquake"
                isExpanded={expandedItems.has("side-talahive")}
                onToggleExpand={() => toggleExpand("side-talahive")}
                details={sideProjects.find((exp) => exp.id === "side-talahive")}
                last={true}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Media & Presentations Section */}
      <MediaAppearances />

      {/* Featured Blog Posts Section */}
      <FeaturedBlogPosts />
    </div>
  )
}

interface EducationItemProps {
  institution: string
  degree: string
}

const EducationItem: React.FC<EducationItemProps> = ({ institution, degree }) => {
  return (
    <Card>
      <CardContent className="p-4">
        <p className="font-medium">{institution}</p>
        <p className="text-sm text-gray-500">{degree}</p>
      </CardContent>
    </Card>
  )
}

interface TimelineItemProps {
  id: string
  color: string
  title: string
  company?: string
  companyLinkedIn?: string
  period: string
  location?: string
  tags?: string[]
  current?: boolean
  last?: boolean
  connectionId: string
  isExpanded: boolean
  onToggleExpand: () => void
  details?: ExperienceDetail
}

interface MainTimelineItemProps {
  id: string
  color: string
  title: string
  company?: string
  companyLinkedIn?: string
  period: string
  location?: string
  tags: string[]
  current?: boolean
  last?: boolean
  connectionId: string
  isExpanded: boolean
  onToggleExpand: () => void
  details?: ExperienceDetail
}

// Update the MainTimelineItem component to include the LinkedIn link
function MainTimelineItem({
  id,
  color,
  title,
  company,
  companyLinkedIn,
  period,
  location,
  tags,
  current,
  last,
  connectionId,
  isExpanded,
  onToggleExpand,
  details,
}: MainTimelineItemProps) {
  const highlightConnections = (connectionId: string) => {
    try {
      const elements = document.querySelectorAll(`[data-connection="${connectionId}"]`)
      elements.forEach((element) => {
        if (element instanceof HTMLElement) {
          element.classList.add("highlighted")
        }
      })
    } catch (error) {
      console.error("Error highlighting connections:", error)
    }
  }

  const removeHighlight = () => {
    try {
      const elements = document.querySelectorAll(".highlighted")
      elements.forEach((element) => {
        if (element instanceof HTMLElement) {
          element.classList.remove("highlighted")
        }
      })
    } catch (error) {
      console.error("Error removing highlights:", error)
    }
  }

  return (
    <div
      className="relative pl-8 pb-8 z-10"
      data-connection={connectionId}
      onMouseEnter={() => highlightConnections(connectionId)}
      onMouseLeave={() => removeHighlight()}
    >
      {/* Timeline dot */}
      <div
        className={`absolute top-0 left-0 h-6 w-6 rounded-full border-2`}
        style={{ borderColor: color, backgroundColor: current ? color : "white" }}
      ></div>

      {/* Card */}
      <div
        className={`rounded-lg shadow-sm border bg-[#f8fafc] transition-all duration-300 ${
          isExpanded ? "shadow-md" : ""
        }`}
        style={{ borderColor: `${color}30` }}
      >
        {/* Card Header - Always visible */}
        <div className="p-6">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-3">
            <div>
              <h3 className="text-xl font-bold" style={{ color: color }}>
                {title}
              </h3>
              {company && (
                <div className="flex items-center gap-2">
                  <p className="text-lg font-medium text-[#314158]">{company}</p>
                  {companyLinkedIn && (
                    <a
                      href={companyLinkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${company} LinkedIn`}
                      className="text-[#0077b5] hover:text-[#0077b5]/80 transition-colors"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                  )}
                </div>
              )}
            </div>
            <div className="text-[#62748e] text-sm md:text-right">
              <p>{period}</p>
              {location && <p>{location}</p>}
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {tags &&
              tags.map((tag, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="bg-[#f8fafc] border-[#90a1b9]/30"
                  style={{ color: color }}
                >
                  {tag}
                </Badge>
              ))}
          </div>

          <Button
            variant="ghost"
            size="sm"
            onClick={onToggleExpand}
            className="flex items-center gap-1 text-[#62748e] hover:text-[#314158] transition-colors"
          >
            {isExpanded ? (
              <>
                <ChevronUp className="h-4 w-4" />
                <span>Show less</span>
              </>
            ) : (
              <>
                <ChevronDown className="h-4 w-4" />
                <span>Show more</span>
              </>
            )}
          </Button>
        </div>

        {/* Expandable Content */}
        {isExpanded && details && (
          <div className="px-6 pb-6 pt-0 border-t border-[#90a1b9]/10">
            {details.description && (
              <div className="mb-4">
                <h4 className="text-md font-semibold mb-2 text-[#314158]">Description</h4>
                <p className="text-[#314158]">{details.description}</p>
              </div>
            )}

            {details.responsibilities && details.responsibilities.length > 0 && (
              <div className="mb-4">
                <h4 className="text-md font-semibold mb-2 text-[#314158]">Responsibilities</h4>
                <ul className="list-disc pl-5 text-[#314158] space-y-1">
                  {details.responsibilities.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {details.achievements && details.achievements.length > 0 && (
              <div className="mb-4">
                <h4 className="text-md font-semibold mb-2 text-[#314158]">Key Achievements</h4>
                <ul className="list-disc pl-5 text-[#314158] space-y-1">
                  {details.achievements.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {details.technologies && details.technologies.length > 0 && (
              <div className="mb-4">
                <h4 className="text-md font-semibold mb-2 text-[#314158]">Technologies & Tools</h4>
                <div className="flex flex-wrap gap-2">
                  {details.technologies.map((tech, index) => (
                    <Badge key={index} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {details.links && details.links.length > 0 && (
              <div>
                <h4 className="text-md font-semibold mb-2 text-[#314158]">Related Links</h4>
                <ul className="space-y-1">
                  {details.links.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#00d5be] hover:underline"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

// Update the MinorTimelineItem props interface to include companyLinkedIn
interface MinorTimelineItemProps {
  id: string
  color: string
  title: string
  period: string
  company?: string
  companyLinkedIn?: string
  last?: boolean
  connectionId: string
  isExpanded: boolean
  onToggleExpand: () => void
  details?: ExperienceDetail
}

// Update the MinorTimelineItem component to include the LinkedIn link
function MinorTimelineItem({
  id,
  color,
  title,
  period,
  company,
  companyLinkedIn,
  last,
  connectionId,
  isExpanded,
  onToggleExpand,
  details,
}: MinorTimelineItemProps) {
  const highlightConnections = (connectionId: string) => {
    try {
      const elements = document.querySelectorAll(`[data-connection="${connectionId}"]`)
      elements.forEach((element) => {
        if (element instanceof HTMLElement) {
          element.classList.add("highlighted")
        }
      })
    } catch (error) {
      console.error("Error highlighting connections:", error)
    }
  }

  const removeHighlight = () => {
    try {
      const elements = document.querySelectorAll(".highlighted")
      elements.forEach((element) => {
        if (element instanceof HTMLElement) {
          element.classList.remove("highlighted")
        }
      })
    } catch (error) {
      console.error("Error removing highlights:", error)
    }
  }

  return (
    <div
      className="relative pl-8 pb-8 z-10"
      data-connection={connectionId}
      onMouseEnter={() => highlightConnections(connectionId)}
      onMouseLeave={() => removeHighlight()}
    >
      {/* Timeline dot */}
      <div className={`absolute top-0 left-0 h-4 w-4 rounded-full`} style={{ backgroundColor: color }}></div>

      {/* Card */}
      <div
        className={`rounded-lg shadow-sm border bg-[#f8fafc] transition-all duration-300 ${
          isExpanded ? "shadow-md" : ""
        }`}
        style={{ borderColor: `${color}30` }}
      >
        {/* Card Header - Always visible */}
        <div className="p-3">
          <div className="flex justify-between items-start mb-1">
            <div className="flex-1">
              <h3 className="text-sm font-bold" style={{ color: color }}>
                {title}
              </h3>
              {details?.company && isExpanded && (
                <div className="flex items-center gap-1 mt-1">
                  <p className="text-xs text-[#314158]">{details.company}</p>
                  {details.companyLinkedIn && (
                    <a
                      href={details.companyLinkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${details.company} LinkedIn`}
                      className="text-[#0077b5] hover:text-[#0077b5]/80 transition-colors"
                    >
                      <Linkedin className="h-3 w-3" />
                    </a>
                  )}
                </div>
              )}
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6 p-0 text-[#62748e] hover:text-[#314158]"
              onClick={onToggleExpand}
            >
              {isExpanded ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />}
            </Button>
            {details?.slug && (
              <div className="mt-1">
                <Link
                  href={`/projects/${details.slug}`}
                  className="text-xs text-[#00d5be] hover:underline flex items-center"
                >
                  View Project <ArrowRight className="h-3 w-3 ml-1" />
                </Link>
              </div>
            )}
          </div>
          <p className="text-xs text-[#62748e]">{period}</p>
        </div>

        {/* Expandable Content */}
        {isExpanded && details && (
          <div className="px-3 pb-3 pt-1 border-t border-[#90a1b9]/10">
            {details.description && <p className="text-xs text-[#314158] mb-2">{details.description}</p>}

            {details.responsibilities && details.responsibilities.length > 0 && (
              <div className="mb-2">
                <h4 className="text-xs font-semibold mb-1 text-[#314158]">Responsibilities</h4>
                <ul className="list-disc pl-4 text-xs text-[#314158] space-y-1">
                  {details.responsibilities.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {details.achievements && details.achievements.length > 0 && (
              <div className="mb-2">
                <h4 className="text-xs font-semibold mb-1 text-[#314158]">Achievements</h4>
                <ul className="list-disc pl-4 text-xs text-[#314158] space-y-1">
                  {details.achievements.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {details.technologies && details.technologies.length > 0 && (
              <div className="mb-2">
                <h4 className="text-xs font-semibold mb-1 text-[#314158]">Technologies</h4>
                <div className="flex flex-wrap gap-1">
                  {details.technologies.map((tech, index) => (
                    <Badge key={index} variant="secondary" className="text-[0.65rem] px-1.5 py-0">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {details.links && details.links.length > 0 && (
              <div>
                <h4 className="text-xs font-semibold mb-1 text-[#314158]">Links</h4>
                <ul className="space-y-1">
                  {details.links.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-[#00d5be] hover:underline"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
