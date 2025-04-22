import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { ProjectFilters } from "@/components/project-filters"
import { ProjectGrid } from "@/components/project-grid"

export const metadata: Metadata = {
  title: "Projects | Your Portfolio",
  description: "Explore my projects and case studies",
}

export default function ProjectsPage() {
  return (
    <div className="container py-10">
      <PageHeader heading="My Projects" subheading="A collection of my work, case studies, and personal projects" />
      <ProjectFilters />
      <ProjectGrid />
    </div>
  )
}
