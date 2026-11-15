import type { Metadata } from "next"
import Link from "next/link"

import PageHeader from "@/components/page-header"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { type ExperienceDetail, professionalExperiences, volunteerActivities } from "@/lib/experience"

export const metadata: Metadata = {
  title: "About | Omolade Jordan Odetara",
  description:
    "Technical product manager for API platforms, model inference and AI pricing. Amadeus, Leanspace, Bossbus, and co-author of the lunar framework presented to UN COPUOS.",
}

const focusAreas = [
  "Travel",
  "Space",
  "Mobility",
  "Enterprise API platforms",
]

const skills = [
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

export default function AboutPage() {
  return (
    <div className="container py-10">
      <PageHeader
        title="About Me"
        description="Technical Product Manager · API platforms, model inference and AI pricing"
      />

      <section className="max-w-3xl mx-auto space-y-4 text-lg leading-relaxed mb-16">
        <h2 className="text-3xl font-bold">My Story</h2>
        <p>
          I'm a technical product manager with 9 years building product integrations, shipping API products,
          developer platforms and AI-driven pricing systems for enterprise customers in travel, space and mobility. I
          own the contract between models and the systems that consume them, and the governance that lets change
          happen rapidly.
        </p>
        <p>
          At Amadeus I work on airline dynamic pricing: a pricing cockpit for airline analysts, API and data model
          governance, and the input contracts for production ML models. Before that I led telemetry and anomaly
          detection and the developer platform strategy at Leanspace, a cloud platform for space operators, and the
          airline integrations and developer platform at Bossbus.
        </p>
        <p>
          Since November 2021 I have been a technical co-author and expert delegate for the Moon Village Association
          and the Global Expert Group on Sustainable Lunar Activities. Our framework for sustainable lunar activities
          was presented to the UN Committee on the Peaceful Uses of Outer Space.
        </p>
        <p>
          I am also the founder of{" "}
          <Link href="https://last-price.ai" className="underline underline-offset-4">
            Last Price
          </Link>
          , price computation as a service.
        </p>
      </section>

      <section className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-4">Where I work</h3>
            <div className="flex flex-wrap gap-2">
              {focusAreas.map((area) => (
                <Badge key={area} variant="secondary">
                  {area}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-4">What I do</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge key={skill} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-6">Experience</h2>
        <ExperienceList items={professionalExperiences} />
      </section>

      <section className="max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-6">Space volunteering</h2>
        <ExperienceList items={volunteerActivities} />
        <p className="mt-8 text-muted-foreground">
          The details, side projects and links are on the{" "}
          <Link href="/" className="underline underline-offset-4">
            timeline on the home page
          </Link>
          .
        </p>
      </section>
    </div>
  )
}

function ExperienceList({ items }: { items: ExperienceDetail[] }) {
  return (
    <ul className="divide-y divide-border border-y border-border">
      {items.map((item) => (
        <li key={item.id} className="py-4 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
          <div>
            <p className="font-semibold">{item.title}</p>
            <p className="text-muted-foreground">
              {[item.company, item.location].filter(Boolean).join(" · ")}
            </p>
          </div>
          <p className="text-sm text-muted-foreground sm:text-right shrink-0">{item.period}</p>
        </li>
      ))}
    </ul>
  )
}
