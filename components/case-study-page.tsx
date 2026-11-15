import type { Metadata } from "next"

import { ProjectHeader } from "@/components/project-header"
import { type CaseStudy, caseStudies } from "@/lib/case-studies"

export function caseStudyMetadata(slug: string): Metadata {
  const study = caseStudies[slug]
  return {
    title: `${study.title} | Omolade Jordan Odetara`,
    description: study.description,
  }
}

// The same layout as the MoniZoom page: header, image, Project Overview, then sections.
export function CaseStudyPage({ slug }: { slug: string }) {
  const study: CaseStudy = caseStudies[slug]

  return (
    <main className="container py-10">
      <ProjectHeader title={study.title} subtitle={study.subtitle} description={study.description} />

      {study.image && (
        <div className="mt-8 mb-16 rounded-xl overflow-hidden border border-border">
          <img src={study.image.src} alt={study.image.alt} className="w-full h-auto" />
        </div>
      )}

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">Client</h3>
            <p className="text-muted-foreground">{study.client}</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Timeline</h3>
            <p className="text-muted-foreground">{study.timeline}</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Role</h3>
            <p className="text-muted-foreground">{study.role}</p>
          </div>
        </div>
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-2">Technologies</h3>
          <div className="flex flex-wrap gap-2">
            {study.technologies.map((tech) => (
              <span key={tech} className="px-3 py-1 bg-muted rounded-full text-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {study.sections.map((section) => (
        <section key={section.heading} className="mb-16 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">{section.heading}</h2>
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-lg mb-4 text-muted-foreground">
              {paragraph}
            </p>
          ))}
          {section.points && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {section.points.map((point) => (
                <div key={point.title} className="bg-muted/50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">{point.title}</h3>
                  <p className="text-muted-foreground">{point.body}</p>
                </div>
              ))}
            </div>
          )}
        </section>
      ))}

      {study.extraImage && (
        <section className="mb-16">
          <figure className="rounded-xl overflow-hidden border border-border">
            <img src={study.extraImage.src} alt={study.extraImage.alt} className="w-full h-auto" />
          </figure>
          <p className="mt-3 text-sm text-muted-foreground">{study.extraImage.caption}</p>
        </section>
      )}

      {(study.links.length > 0 || study.note) && (
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Links</h2>
          {study.links.length > 0 && (
            <div className="flex flex-wrap gap-3">
              {study.links.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-md border border-border hover:bg-muted transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
          {study.note && <p className="text-muted-foreground mt-4">{study.note}</p>}
        </section>
      )}
    </main>
  )
}
