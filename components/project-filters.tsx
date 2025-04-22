"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

const categories = ["All", "Web Development", "UI/UX Design", "Mobile Apps", "Branding"]

export function ProjectFilters() {
  const [activeFilter, setActiveFilter] = useState("All")

  return (
    <div className="flex flex-wrap gap-2 mb-8 justify-center">
      {categories.map((category) => (
        <Button
          key={category}
          variant={activeFilter === category ? "default" : "outline"}
          size="sm"
          onClick={() => setActiveFilter(category)}
        >
          {category}
        </Button>
      ))}
    </div>
  )
}
