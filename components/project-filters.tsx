"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

// Define the filter categories
const categories = [
  { id: "all", label: "All Projects" },
  { id: "professional", label: "Professional Projects" },
  { id: "side", label: "Side Projects" },
]

interface ProjectFiltersProps {
  onFilterChange: (category: string) => void
}

export function ProjectFilters({ onFilterChange }: ProjectFiltersProps) {
  const [activeFilter, setActiveFilter] = useState("all")

  const handleFilterClick = (category: string) => {
    setActiveFilter(category)
    onFilterChange(category)
  }

  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {categories.map((category) => (
        <Button
          key={category.id}
          variant={activeFilter === category.id ? "default" : "outline"}
          onClick={() => handleFilterClick(category.id)}
          className="rounded-full"
        >
          {category.label}
        </Button>
      ))}
    </div>
  )
}
