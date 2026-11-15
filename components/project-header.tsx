import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"

interface ProjectHeaderProps {
  title: string
  subtitle?: string
  description?: string
}

// The header every project page uses: back link, title, one-line summary.
export function ProjectHeader({ title, subtitle, description }: ProjectHeaderProps) {
  return (
    <>
      <Link href="/projects" className="inline-flex mb-8">
        <Button variant="ghost" className="gap-2">
          <ArrowLeft className="h-4 w-4" />
          Back to Projects
        </Button>
      </Link>
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        {subtitle && <p className="text-xl font-medium mb-2">{subtitle}</p>}
        {description && <p className="text-xl text-muted-foreground">{description}</p>}
      </div>
    </>
  )
}
