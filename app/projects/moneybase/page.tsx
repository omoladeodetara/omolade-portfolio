import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ProjectDetails } from "@/components/project-details"
import { RelatedProjects } from "@/components/related-projects"

export const metadata: Metadata = {
  title: "Moneybase | Financial Trading Platform",
  description:
    "A modern fintech solution providing seamless cross-border payments, currency exchange services, and fractional share trading",
}

export default function MoneybasePage() {
  return (
    <div className="container py-10">
      <Link href="/projects" className="inline-flex mb-8">
        <Button variant="ghost" className="gap-2">
          <ArrowLeft className="h-4 w-4" />
          Back to Projects
        </Button>
      </Link>

      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Moneybase PM Interview Assessment</h1>
        <p className="text-xl text-muted-foreground">
          A product management case study on implementing fractional share trading for a modern fintech platform
        </p>
      </div>

      <div className="relative aspect-video overflow-hidden rounded-lg mb-12">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/moneybase-IwSJUYE6IIeTZwUc9ISx9LJbJQaUS1.png"
          alt="Moneybase fractional shares trading interface showing the purchase flow"
          fill
          className="object-contain bg-[#1AA7FF]"
          priority
        />
      </div>

      <p className="text-center text-sm text-muted-foreground -mt-8 mb-12">
        Moneybase mobile app interface showing the fractional shares trading flow from share selection to successful
        purchase
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="md:col-span-2">
          <div className="prose dark:prose-invert max-w-none">
            <h2>Overview</h2>
            <p>
              This case study was part of a Product Manager interview assessment for Moneybase, a comprehensive
              financial platform that enables users to manage their finances, make cross-border payments, exchange
              currencies, and invest in stocks. The assessment focused on how I would approach implementing a fractional
              shares trading feature.
            </p>

            <h2>Product Management Case Study: Fractional Shares Trading</h2>
            <p>
              For this interview assessment, I was asked how I would implement value-based trading (fractional shares),
              allowing clients to trade equity by value rather than by units. The feature was described as a priority
              for the executive committee with a tight 4-week implementation timeframe.
            </p>

            <h3>The Challenge</h3>
            <p>
              In the assessment scenario, I would be responsible for delivering this feature with a small team
              consisting of:
            </p>
            <ul>
              <li>1 frontend developer</li>
              <li>1 team lead</li>
              <li>1 backend developer</li>
              <li>1 QA team member</li>
            </ul>
            <p>
              The team was already handling other features and day-to-day support, with one team member being new while
              another was very experienced with the codebase and business logic.
            </p>

            <h3>My Approach</h3>

            <h4>Week 1: Initial Planning and Setup</h4>
            <p>I focused on defining the feature scope and gathering requirements. My priorities included:</p>
            <ul>
              <li>Defining detailed feature requirements</li>
              <li>Brainstorming technical approaches for value-based trades</li>
              <li>Breaking down the feature into smaller, manageable chunks</li>
              <li>Allocating initial tasks to team members based on expertise</li>
              <li>Identifying dependencies and coordinating with other teams</li>
              <li>
                Creating UI/UX suggestions including toggle switches, value input fields, and confirmation screens
              </li>
            </ul>

            <p>
              For the technical implementation, I worked with the team lead to identify key system architecture
              modifications:
            </p>
            <ul>
              <li>Data model changes to accommodate fractional share representation</li>
              <li>Transaction record updates to log value-based trades</li>
              <li>New API endpoints for value-based trading</li>
              <li>Ensuring backward compatibility for users who prefer the existing method</li>
              <li>Implementing conversion logic to translate investment amounts into fractional shares</li>
            </ul>

            <h4>Weeks 2-3: Development and Testing</h4>
            <p>During the development phase, I established:</p>
            <ul>
              <li>Daily huddles for quick team sync-ups</li>
              <li>Weekly progress reviews with stakeholders</li>
              <li>Continued customer interviews for feedback</li>
              <li>Balanced workload management to handle existing priorities</li>
              <li>Early QA involvement to identify issues proactively</li>
              <li>Coordination with marketing to prepare for launch</li>
            </ul>

            <h4>Week 4: Launch Preparation</h4>
            <p>In the final week, I focused on:</p>
            <ul>
              <li>Deployment preparation</li>
              <li>User documentation and final team review</li>
              <li>Performance benchmarking</li>
              <li>Intensive testing and final bug fixes</li>
              <li>Security review</li>
              <li>Planning a phased rollout strategy (beta launch followed by full rollout)</li>
              <li>Creating educational resources for users</li>
            </ul>

            <h3>Post-Launch Monitoring</h3>
            <p>I established several KPIs to measure success:</p>
            <ul>
              <li>User adoption rate of the new feature</li>
              <li>User feedback and satisfaction scores</li>
              <li>Technical performance metrics (load times, error rates)</li>
              <li>Transaction volume comparison between fractional and unit-based trades</li>
              <li>User segmentation analysis</li>
              <li>Financial impact analysis</li>
              <li>Conversion tracking from educational materials to feature usage</li>
            </ul>

            <h3>Proposed Results</h3>
            <p>
              In my assessment response, I outlined how the fractional shares trading feature could be successfully
              implemented within the 4-week timeframe, allowing Moneybase users to invest specific monetary amounts
              rather than being limited to whole share purchases. This would make investing more accessible,
              particularly for users with smaller amounts to invest, and position Moneybase competitively in the fintech
              market.
            </p>

            <h2>Key Learnings</h2>
            <p>This project reinforced several important product management principles:</p>
            <ul>
              <li>Clear scope definition is essential for tight timelines</li>
              <li>Regular communication keeps stakeholders aligned and informed</li>
              <li>Breaking complex features into smaller components makes them manageable</li>
              <li>Early QA involvement reduces issues later in development</li>
              <li>User education is crucial for adoption of new financial features</li>
              <li>Balancing team workload requires careful planning when handling multiple priorities</li>
            </ul>
          </div>
        </div>
        <div>
          <ProjectDetails slug="moneybase" />
        </div>
      </div>

      <RelatedProjects />
    </div>
  )
}
