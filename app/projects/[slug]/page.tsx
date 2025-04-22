import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ProjectGallery } from "@/components/project-gallery"
import { ProjectDetails } from "@/components/project-details"
import { RelatedProjects } from "@/components/related-projects"

// This would typically come from a CMS or API
const getProjectData = (slug: string) => {
  // Mock data - in a real app, fetch from API/CMS
  return {
    title: "Project Title",
    description: "Detailed project description",
    image: "/team-brainstorm.png",
    content: "Full project content...",
  }
}

type Props = {
  params: { slug: string }
}

export function generateMetadata({ params }: Props): Metadata {
  const project = getProjectData(params.slug)

  return {
    title: `${project.title} | Your Portfolio`,
    description: project.description,
  }
}

export default function ProjectPage({ params }: Props) {
  const project = getProjectData(params.slug)

  return (
    <div className="container py-10">
      <Link href="/projects" className="inline-flex mb-8">
        <Button variant="ghost" className="gap-2">
          <ArrowLeft className="h-4 w-4" />
          Back to Projects
        </Button>
      </Link>

      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        <p className="text-xl text-muted-foreground">{project.description}</p>
      </div>

      <div className="relative aspect-video overflow-hidden rounded-lg mb-12">
        <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" priority />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="md:col-span-2">
          <div className="prose dark:prose-invert max-w-none">{project.content}</div>
        </div>
        <div>
          <ProjectDetails />
        </div>
      </div>

      <ProjectGallery />
      <RelatedProjects />
    </div>
  )
}
