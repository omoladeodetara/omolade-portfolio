"use client"

import type React from "react"

import { useState } from "react"
import { ChevronDown, ChevronUp, ExternalLink, Briefcase, Code, Heart } from "lucide-react"
import { cn } from "@/lib/utils"

// Types for our timeline items
export type TimelineItemType = "work" | "education" | "project" | "volunteer"

export interface TimelineItem {
  id: string
  type: TimelineItemType
  title: string
  organization: string
  location?: string
  startDate: string
  endDate?: string
  description: string
  responsibilities?: string[]
  achievements?: string[]
  technologies?: string[]
  links?: Array<{ label: string; url: string }>
  linkedinUrl?: string
}

interface TimelineSectionProps {
  workExperiences: TimelineItem[]
  sideProjects: TimelineItem[]
  volunteerWork: TimelineItem[]
}

export default function TimelineSection({ workExperiences, sideProjects, volunteerWork }: TimelineSectionProps) {
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({})
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  const toggleExpand = (id: string) => {
    setExpandedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  const highlightConnections = (id: string) => {
    setHoveredId(id)
  }

  const removeHighlight = () => {
    setHoveredId(null)
  }

  // Find the corresponding side items for a given work experience
  const findRelatedItems = (workId: string, date: string) => {
    const relatedProjects = sideProjects.filter((project) => {
      const projectStart = new Date(project.startDate)
      const projectEnd = project.endDate ? new Date(project.endDate) : new Date()
      const workDate = new Date(date)
      return projectStart <= workDate && workDate <= projectEnd
    })

    const relatedVolunteer = volunteerWork.filter((vol) => {
      const volStart = new Date(vol.startDate)
      const volEnd = vol.endDate ? new Date(vol.endDate) : new Date()
      const workDate = new Date(date)
      return volStart <= workDate && workDate <= volEnd
    })

    return { relatedProjects, relatedVolunteer }
  }

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Professional Journey</h2>

        <div className="relative">
          {/* Main timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-300 dark:bg-gray-700"></div>

          {/* Timeline content */}
          <div className="relative z-10">
            {workExperiences.map((experience, index) => {
              const { relatedProjects, relatedVolunteer } = findRelatedItems(experience.id, experience.startDate)

              return (
                <div key={experience.id} className="mb-16">
                  <div className="flex items-start">
                    {/* Left column for side projects */}
                    <div className="w-1/3 pr-8">
                      <div className="space-y-4">
                        {relatedProjects.map((project) => (
                          <MinorTimelineItem
                            key={project.id}
                            item={project}
                            isExpanded={!!expandedItems[project.id]}
                            toggleExpand={() => toggleExpand(project.id)}
                            isHighlighted={hoveredId === experience.id}
                            onMouseEnter={() => highlightConnections(experience.id)}
                            onMouseLeave={removeHighlight}
                            align="right"
                            icon={<Code size={16} />}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Center column for work experience */}
                    <div className="w-1/3 flex justify-center">
                      <MainTimelineItem
                        item={experience}
                        isExpanded={!!expandedItems[experience.id]}
                        toggleExpand={() => toggleExpand(experience.id)}
                        onMouseEnter={() => highlightConnections(experience.id)}
                        onMouseLeave={removeHighlight}
                        icon={<Briefcase size={20} />}
                      />
                    </div>

                    {/* Right column for volunteer work */}
                    <div className="w-1/3 pl-8">
                      <div className="space-y-4">
                        {relatedVolunteer.map((vol) => (
                          <MinorTimelineItem
                            key={vol.id}
                            item={vol}
                            isExpanded={!!expandedItems[vol.id]}
                            toggleExpand={() => toggleExpand(vol.id)}
                            isHighlighted={hoveredId === experience.id}
                            onMouseEnter={() => highlightConnections(experience.id)}
                            onMouseLeave={removeHighlight}
                            align="left"
                            icon={<Heart size={16} />}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

interface MainTimelineItemProps {
  item: TimelineItem
  isExpanded: boolean
  toggleExpand: () => void
  onMouseEnter: () => void
  onMouseLeave: () => void
  icon: React.ReactNode
}

function MainTimelineItem({ item, isExpanded, toggleExpand, onMouseEnter, onMouseLeave, icon }: MainTimelineItemProps) {
  return (
    <div
      className={cn(
        "relative bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-5 transition-all duration-200",
        isExpanded ? "shadow-md" : "",
        "hover:shadow-md",
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Timeline dot */}
      <div className="absolute top-5 left-0 transform -translate-x-1/2 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
        {icon}
      </div>

      <div className="ml-2">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold">{item.title}</h3>
        </div>

        <div className="flex items-center mt-1 space-x-2">
          <p className="text-lg font-medium">{item.organization}</p>
          {item.linkedinUrl && (
            <a
              href={item.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
              aria-label={`${item.organization} LinkedIn profile`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
              </svg>
            </a>
          )}
        </div>

        {item.location && <p className="text-gray-600 dark:text-gray-400">{item.location}</p>}

        <p className="text-gray-600 dark:text-gray-400 mt-1">
          {item.startDate} - {item.endDate || "Present"}
        </p>

        <div className="mt-3">
          <p className="text-gray-700 dark:text-gray-300">
            {isExpanded
              ? item.description
              : `${item.description.substring(0, 150)}${item.description.length > 150 ? "..." : ""}`}
          </p>

          {isExpanded && (
            <div className="mt-4 space-y-4 border-t border-gray-200 dark:border-gray-700 pt-4">
              {item.responsibilities && item.responsibilities.length > 0 && (
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Responsibilities:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
                    {item.responsibilities.map((resp, idx) => (
                      <li key={idx}>{resp}</li>
                    ))}
                  </ul>
                </div>
              )}

              {item.achievements && item.achievements.length > 0 && (
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Key Achievements:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
                    {item.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              )}

              {item.technologies && item.technologies.length > 0 && (
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {item.links && item.links.length > 0 && (
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Links:</h4>
                  <div className="space-y-2">
                    {item.links.map((link, idx) => (
                      <a
                        key={idx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-primary hover:underline"
                      >
                        <ExternalLink size={16} className="mr-1" />
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          <button
            onClick={toggleExpand}
            className="mt-3 flex items-center text-primary hover:underline focus:outline-none"
          >
            {isExpanded ? (
              <>
                <ChevronUp size={16} className="mr-1" />
                Show less
              </>
            ) : (
              <>
                <ChevronDown size={16} className="mr-1" />
                Show more
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}

interface MinorTimelineItemProps {
  item: TimelineItem
  isExpanded: boolean
  toggleExpand: () => void
  isHighlighted: boolean
  onMouseEnter: () => void
  onMouseLeave: () => void
  align: "left" | "right"
  icon: React.ReactNode
}

function MinorTimelineItem({
  item,
  isExpanded,
  toggleExpand,
  isHighlighted,
  onMouseEnter,
  onMouseLeave,
  align,
  icon,
}: MinorTimelineItemProps) {
  return (
    <div
      className={cn(
        "relative bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4 transition-all duration-200",
        isHighlighted ? "border-primary" : "",
        isExpanded ? "shadow-md" : "",
        "hover:shadow-md",
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Connection line to main timeline */}
      <div
        className={cn(
          "absolute top-1/2 h-0.5 bg-gray-300 dark:bg-gray-700 w-8",
          align === "left" ? "left-0 transform -translate-x-full" : "right-0 transform translate-x-full",
          isHighlighted ? "bg-primary dark:bg-primary" : "",
        )}
      ></div>

      {/* Timeline dot */}
      <div
        className={cn(
          "absolute top-1/2 transform -translate-y-1/2 w-6 h-6 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center text-gray-700 dark:text-gray-300",
          align === "left" ? "left-0 -translate-x-3" : "right-0 translate-x-3",
          isHighlighted ? "bg-primary text-white" : "",
        )}
      >
        {icon}
      </div>

      <div className={align === "left" ? "ml-0" : "mr-0"}>
        <div className="flex justify-between items-start">
          <h3 className="text-base font-bold">{item.title}</h3>
          <button
            onClick={toggleExpand}
            className="text-gray-500 hover:text-primary focus:outline-none"
            aria-label={isExpanded ? "Collapse details" : "Expand details"}
          >
            {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
        </div>

        <div className="flex items-center mt-1 space-x-2">
          <p className="text-sm font-medium">{item.organization}</p>
          {item.linkedinUrl && (
            <a
              href={item.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
              aria-label={`${item.organization} LinkedIn profile`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
              </svg>
            </a>
          )}
        </div>

        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
          {item.startDate} - {item.endDate || "Present"}
        </p>

        {!isExpanded ? (
          <p className="text-sm text-gray-700 dark:text-gray-300 mt-2 line-clamp-2">{item.description}</p>
        ) : (
          <div className="mt-3 space-y-3">
            <p className="text-sm text-gray-700 dark:text-gray-300">{item.description}</p>

            {item.technologies && item.technologies.length > 0 && (
              <div>
                <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-1">Technologies:</h4>
                <div className="flex flex-wrap gap-1">
                  {item.technologies.map((tech, idx) => (
                    <span key={idx} className="px-2 py-0.5 bg-gray-100 dark:bg-gray-700 rounded-full text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {item.links && item.links.length > 0 && (
              <div>
                <div className="space-y-1">
                  {item.links.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-xs text-primary hover:underline"
                    >
                      <ExternalLink size={12} className="mr-1" />
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
