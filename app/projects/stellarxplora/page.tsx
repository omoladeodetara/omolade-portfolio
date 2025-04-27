import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { RelatedProjects } from "@/components/related-projects"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Rocket, Globe, Users, Target } from "lucide-react"

export const metadata: Metadata = {
  title: "StellarXplora | Omolade Jordan Odetara",
  description:
    "A venture studio focused on building, funding, and scaling the best space startups with a focus on the African market",
}

export default function StellarXploraPage() {
  return (
    <div className="container py-10">
      <Link href="/projects" className="inline-flex mb-8">
        <Button variant="ghost" className="gap-2">
          <ArrowLeft className="h-4 w-4" />
          Back to Projects
        </Button>
      </Link>

      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">StellarXplora</h1>
        <p className="text-xl text-muted-foreground">
          A venture studio focused on building, funding, and scaling the best space startups with a focus on the African
          market
        </p>
      </div>

      <div className="relative overflow-hidden rounded-lg mb-12">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-VyNvxMuA0cVzGjYNUD3XtUYQqUyq4o.png"
          alt="StellarXplora hero image showing spacecraft engine with text: StellarXplora is where the best space startups are built, funded and scaled."
          width={1200}
          height={400}
          className="w-full"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="md:col-span-2">
          <div className="prose dark:prose-invert max-w-none">
            <h2>Overview</h2>
            <p>
              StellarXplora is a venture studio dedicated to building, funding, and scaling innovative space technology
              companies with a particular focus on the African market. We aim to launch 42 companies and support over
              100 founders in the next 6 years, addressing critical challenges and opportunities in the NewSpace
              ecosystem.
            </p>

            <div className="not-prose grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
              <Card className="bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-950 dark:to-indigo-900 border-indigo-200 dark:border-indigo-800">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Rocket className="h-10 w-10 text-indigo-600 dark:text-indigo-400 mb-4" />
                  <h3 className="text-lg font-bold mb-2">Venture Building</h3>
                  <p className="text-sm text-muted-foreground">
                    Creating and launching innovative space technology companies from the ground up
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900 border-purple-200 dark:border-purple-800">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Globe className="h-10 w-10 text-purple-600 dark:text-purple-400 mb-4" />
                  <h3 className="text-lg font-bold mb-2">African Focus</h3>
                  <p className="text-sm text-muted-foreground">
                    Developing space solutions tailored to the unique needs and opportunities of the African market
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 border-blue-200 dark:border-blue-800">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Users className="h-10 w-10 text-blue-600 dark:text-blue-400 mb-4" />
                  <h3 className="text-lg font-bold mb-2">Founder Support</h3>
                  <p className="text-sm text-muted-foreground">
                    Providing comprehensive resources, mentorship, and funding to space entrepreneurs
                  </p>
                </CardContent>
              </Card>
            </div>

            <h2>Our Mission</h2>
            <p>
              StellarXplora's mission is to accelerate the development of the space industry in Africa by building
              innovative companies that address critical challenges and capitalize on unique opportunities. We believe
              that space technology has the potential to transform economies, improve lives, and create sustainable
              development across the continent.
            </p>

            <h2>Rembrandt: Our First Venture</h2>
            <p>
              Rembrandt is the first company being developed within the StellarXplora venture studio. It focuses on
              providing advanced Earth observation data and analytics specifically tailored for African markets and use
              cases.
            </p>

            <div className="not-prose mb-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <Target className="h-5 w-5 mr-2 text-indigo-600 dark:text-indigo-400" /> Rembrandt Key Features
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Earth Observation Analytics</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Specialized data processing for African geographical contexts</li>
                        <li>AI-powered analytics for agriculture, infrastructure, and natural resources</li>
                        <li>Custom solutions for local governments and businesses</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Market Applications</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Agricultural monitoring and yield prediction</li>
                        <li>Infrastructure development and monitoring</li>
                        <li>Natural resource management</li>
                        <li>Disaster response and management</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Technology Stack</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Cloud-based processing platform</li>
                        <li>Machine learning algorithms optimized for satellite imagery</li>
                        <li>API integrations with major satellite data providers</li>
                        <li>Mobile and web interfaces for data access and visualization</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <h2>The African Space Opportunity</h2>
            <p>
              Africa represents one of the most promising frontiers for space technology applications. With rapidly
              growing economies, increasing urbanization, and significant challenges in areas like agriculture,
              infrastructure, and resource management, the continent offers unique opportunities for space-based
              solutions.
            </p>

            <p>
              The African space economy is projected to grow significantly in the coming years, with several countries
              developing national space programs and policies. However, there remains a gap in locally-developed space
              technology companies that understand the specific needs and contexts of African markets.
            </p>

            <h2>Our Venture Studio Approach</h2>
            <p>As a venture studio, StellarXplora takes a hands-on approach to building space technology companies:</p>
            <ol>
              <li>
                <strong>Idea Generation:</strong> We identify promising opportunities in the space sector with
                particular relevance to African markets.
              </li>
              <li>
                <strong>Validation:</strong> We rigorously test concepts through market research, stakeholder
                interviews, and prototype development.
              </li>
              <li>
                <strong>Company Building:</strong> We assemble dedicated teams, develop MVPs, and establish the
                operational foundation for each venture.
              </li>
              <li>
                <strong>Scaling:</strong> We provide ongoing support, additional funding, and strategic guidance to help
                our ventures grow and succeed.
              </li>
            </ol>

            <h2>Location and Facilities</h2>
            <p>
              StellarXplora is headquartered in Lagos, Nigeria, with plans to establish satellite offices in other
              African tech hubs. Our facilities include collaborative workspace, technical development resources, and
              access to specialized equipment and expertise in space technology.
            </p>

            <h2>Revenue Model</h2>
            <p>StellarXplora operates on a venture studio model with multiple revenue streams:</p>
            <ul>
              <li>Equity stakes in launched companies (typically 30-50%)</li>
              <li>Management fees for ongoing operational support</li>
              <li>Success fees tied to funding milestones</li>
              <li>Strategic partnerships with space agencies and industry players</li>
            </ul>

            <h2>Competitive Advantages</h2>
            <p>StellarXplora differentiates itself through several key advantages:</p>
            <ul>
              <li>Deep understanding of African markets and their unique challenges</li>
              <li>Specialized expertise in space technology applications</li>
              <li>Strong network of industry partners and investors</li>
              <li>Comprehensive venture building methodology tailored for space startups</li>
              <li>Focus on practical applications with immediate market potential</li>
            </ul>

            <h2>My Role</h2>
            <p>
              As a founding team member of StellarXplora, I contributed to the development of the venture studio
              concept, business model, and initial company pipeline. My responsibilities included:
            </p>
            <ul>
              <li>Developing the venture studio methodology and processes</li>
              <li>Conducting market research on space technology opportunities in Africa</li>
              <li>Contributing to the conceptualization and validation of Rembrandt</li>
              <li>Establishing partnerships with key stakeholders in the space industry</li>
              <li>Creating pitch materials and investor documentation</li>
            </ul>

            <p>
              This project leverages my background in space advocacy and product development, allowing me to contribute
              to the growth of the African space ecosystem while creating meaningful solutions to pressing challenges.
            </p>
          </div>
        </div>
        <div>
          <ProjectDetailsStellarXplora />
        </div>
      </div>

      <RelatedProjects />
    </div>
  )
}

function ProjectDetailsStellarXplora() {
  return (
    <div className="space-y-6 bg-muted/50 p-6 rounded-lg">
      <h3 className="text-xl font-bold">Project Details</h3>

      <div>
        <h4 className="text-sm font-medium text-muted-foreground mb-2">Role</h4>
        <p>Founding Team Member & Strategy Lead</p>
      </div>

      <div>
        <h4 className="text-sm font-medium text-muted-foreground mb-2">Timeline</h4>
        <p>2022 - Present</p>
      </div>

      <div>
        <h4 className="text-sm font-medium text-muted-foreground mb-2">Technologies</h4>
        <div className="flex flex-wrap gap-2">
          {[
            "Space Technology",
            "Venture Studio",
            "Earth Observation",
            "Satellite Data",
            "AI/ML",
            "Cloud Computing",
            "Business Development",
            "Product Strategy",
            "Market Analysis",
          ].map((tech) => (
            <Badge key={tech} variant="outline">
              {tech}
            </Badge>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-sm font-medium text-muted-foreground mb-2">Status</h4>
        <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/20">
          Active
        </Badge>
      </div>

      <div>
        <h4 className="text-sm font-medium text-muted-foreground mb-2">Location</h4>
        <p>Lagos, Nigeria</p>
      </div>

      <div>
        <a
          href="https://stellarxplora.decilehub.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
        >
          Visit Website
        </a>
      </div>
    </div>
  )
}
