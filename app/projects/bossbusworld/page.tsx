// Create a new Bossbusworld project page with the pricing images

import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ProjectDetails } from "@/components/project-details"
import { RelatedProjects } from "@/components/related-projects"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Bossbusworld | Developer Platform",
  description:
    "A platform for third-party developers in the travel industry with API integrations for airlines and fleet management systems",
}

export default function BossbusWorldPage() {
  return (
    <div className="container py-10">
      <Link href="/projects" className="inline-flex mb-8">
        <Button variant="ghost" className="gap-2">
          <ArrowLeft className="h-4 w-4" />
          Back to Projects
        </Button>
      </Link>

      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Bossbusworld</h1>
        <p className="text-xl text-muted-foreground">
          A platform for third-party developers in the travel industry with API integrations for airlines and fleet
          management systems
        </p>
      </div>

      <div className="relative aspect-video overflow-hidden rounded-lg mb-12">
        <Image
          src="/data-driven-insights.png"
          alt="Bossbusworld developer platform dashboard showing API usage metrics and integration status"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="md:col-span-2">
          <div className="prose dark:prose-invert max-w-none">
            <h2>Overview</h2>
            <p>
              As the Technical Product Manager for Developer Experience at Bossbusworld, I led the development of a
              platform strategy for third-party developers in the travel industry. The platform focused on API
              integrations with airlines and fleet management systems, creating a robust ecosystem for travel-related
              applications and services.
            </p>

            <h2>The Challenge</h2>
            <p>
              The travel industry faces significant challenges with fragmentation and interoperability. Different
              service providers (airlines, hotels, transportation companies) often use incompatible systems, making it
              difficult for developers to create comprehensive travel solutions. Bossbusworld needed to create a unified
              platform that would:
            </p>
            <ul>
              <li>Simplify integration with multiple travel service providers</li>
              <li>Standardize data formats across different systems</li>
              <li>Provide robust documentation and support for developers</li>
              <li>Ensure secure and reliable API access</li>
              <li>Scale to accommodate growing transaction volumes</li>
            </ul>

            <h2>My Role</h2>
            <p>As Technical Product Manager for Developer Experience, I was responsible for:</p>
            <ul>
              <li>Creating the platform strategy for third-party developers</li>
              <li>Designing the developer onboarding experience</li>
              <li>Developing comprehensive API documentation</li>
              <li>Building the developer portal and resources</li>
              <li>Managing the OAuth 2.0 authentication system</li>
              <li>Establishing developer support processes</li>
              <li>Gathering and implementing developer feedback</li>
            </ul>

            <h2>Key Features Developed</h2>

            <h3>Developer Portal</h3>
            <p>I led the creation of a comprehensive developer portal that included:</p>
            <ul>
              <li>Interactive API documentation with Swagger/OpenAPI</li>
              <li>Code samples in multiple programming languages</li>
              <li>Sandbox environment for testing</li>
              <li>API key management and usage analytics</li>
              <li>Support ticketing system integrated with our internal tools</li>
            </ul>

            <h3>API Integration Framework</h3>
            <p>We developed a unified API framework that standardized access to:</p>
            <ul>
              <li>Flight booking and management systems</li>
              <li>Vehicle fleet management</li>
              <li>Passenger information and preferences</li>
              <li>Payment processing and reconciliation</li>
              <li>Real-time travel updates and notifications</li>
            </ul>

            <h3>Enterprise Platform</h3>
            <p>For larger partners and fleet owners, we created an enterprise platform with:</p>
            <ul>
              <li>Advanced analytics and reporting</li>
              <li>Fleet management tools</li>
              <li>Custom integration options</li>
              <li>White-labeling capabilities</li>
              <li>Priority support and SLAs</li>
            </ul>

            <h2>Pricing Structure</h2>
            <p>
              I worked with the business team to develop a tiered pricing structure that accommodated different types of
              partners, from small developers to large enterprises. The pricing model was designed to be transparent and
              scalable, with clear value at each tier.
            </p>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Enterprise Pricing Plans</h2>
            <Tabs defaultValue="cards" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="cards">Pricing Cards</TabsTrigger>
                <TabsTrigger value="comparison">Detailed Comparison</TabsTrigger>
              </TabsList>
              <TabsContent value="cards" className="mt-6">
                <div className="rounded-lg overflow-hidden border">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bossbus%20enterprise%20Pricing%20and%20plan-ZuktmjBvanhuTTudAX9oZsPdEH10Yr.png"
                    alt="Bossbus Enterprise pricing tiers showing Free, Silver, Gold, and Diamond plans with their respective features and pricing"
                    width={800}
                    height={450}
                    className="w-full h-auto"
                  />
                </div>
              </TabsContent>
              <TabsContent value="comparison" className="mt-6">
                <div className="rounded-lg overflow-hidden border">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bossbus%20enterprise%20Pricing%20and%20plan%20comparison-BwQnKPMVU9A6UfgAGCtPL7Hb1N8GqM.png"
                    alt="Detailed comparison table of Bossbus Enterprise pricing plans showing feature availability across Free, Silver, Gold, and Diamond tiers"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Results and Impact</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                During my time as Technical Product Manager for Developer Experience at Bossbusworld, we achieved
                significant results:
              </p>
              <ul>
                <li>Grew the developer ecosystem from 5 to 50+ active partners</li>
                <li>Implemented OAuth 2.0 authentication for secure API access</li>
                <li>Created comprehensive API documentation that reduced support tickets by 35%</li>
                <li>Established a scalable platform that processed over 10,000 transactions daily</li>
                <li>Developed a tiered pricing model that increased platform revenue by 40%</li>
              </ul>

              <h2>Key Learnings</h2>
              <p>This project provided valuable insights into developer experience design and API platform strategy:</p>
              <ul>
                <li>
                  Developer onboarding is critical - the first 15 minutes of a developer's experience can determine
                  whether they adopt your platform
                </li>
                <li>Documentation quality directly impacts support costs and developer satisfaction</li>
                <li>Sandbox environments significantly reduce integration time and errors</li>
                <li>Regular feedback loops with developers lead to better platform decisions</li>
                <li>Transparent pricing and clear value propositions are essential for platform adoption</li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <ProjectDetails slug="bossbusworld" />
        </div>
      </div>

      <RelatedProjects />
    </div>
  )
}
