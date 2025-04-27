"use client"

import { useState } from "react"
import { PageHeader } from "@/components/page-header"
import { ProjectFilters } from "@/components/project-filters"
import { ProjectGrid } from "@/components/project-grid"

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("all")

  return (
    <div className="container py-10">
      <PageHeader
        title="Projects"
        description="A collection of my professional work and side projects in product management, development, and design."
      />

      <ProjectFilters onFilterChange={setActiveFilter} />

      <ProjectGrid filter={activeFilter} />
    </div>
  )
}
