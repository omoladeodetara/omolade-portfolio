import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ProjectDetails } from "@/components/project-details"
import { RelatedProjects } from "@/components/related-projects"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Rocket, Globe, Lightbulb, Target, Calendar, AlertCircle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export const metadata: Metadata = {
  title: "The Space Convention | Omolade Jordan Odetara",
  description:
    "A global space industry event bringing together delegates from all sectors that intersect with the space industry",
}

export default function SpaceConventionPage() {
  return (
    <div className="container py-10">
      <Link href="/projects" className="inline-flex mb-8">
        <Button variant="ghost" className="gap-2">
          <ArrowLeft className="h-4 w-4" />
          Back to Projects
        </Button>
      </Link>

      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">The Space Convention</h1>
        <p className="text-xl text-muted-foreground">
          A global space industry event bringing together delegates from all sectors that intersect with the space
          industry
        </p>
      </div>

      <Alert className="mb-8 border-amber-500">
        <AlertCircle className="h-4 w-4 text-amber-500" />
        <AlertTitle>Project Status</AlertTitle>
        <AlertDescription>
          This event was fully planned but has been postponed indefinitely and has not yet taken place.
        </AlertDescription>
      </Alert>

      <div className="relative aspect-video overflow-hidden rounded-lg mb-12 bg-gradient-to-r from-indigo-900 to-purple-900 flex items-center justify-center">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('/space-exploration-overview.png')] bg-cover bg-center"></div>
        </div>
        <div className="text-center text-white p-8 relative z-10">
          <h2 className="text-3xl font-bold mb-4">THE SPACE CONVENTION</h2>
          <h3 className="text-xl mb-2">CONNECTING THE GLOBAL SPACE COMMUNITY</h3>
          <p className="text-lg max-w-2xl mx-auto">
            Where all global space actors come together to exchange ideas, foster partnerships, and shape the future of
            space exploration
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="md:col-span-2">
          <div className="prose dark:prose-invert max-w-none">
            <h2>Event Overview</h2>
            <p>
              The Space Convention was planned as a premier event where all global space actors would come together.
              Organized by Stellar Xplora, the event was designed to start a broader conversation about space
              exploration and its impact across various sectors. With a target of attracting 1,000 participants in its
              first year, the convention would have covered all space sectors and topics, offering attendees the latest
              space information and developments in academia and industry, networking opportunities, contacts, and
              potential partnerships.
            </p>

            <div className="not-prose grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
              <Card className="bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-950 dark:to-indigo-900 border-indigo-200 dark:border-indigo-800">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Rocket className="h-10 w-10 text-indigo-600 dark:text-indigo-400 mb-4" />
                  <h3 className="text-lg font-bold mb-2">Space Innovation</h3>
                  <p className="text-sm text-muted-foreground">
                    Showcasing cutting-edge technologies and breakthroughs in space exploration
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900 border-purple-200 dark:border-purple-800">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Globe className="h-10 w-10 text-purple-600 dark:text-purple-400 mb-4" />
                  <h3 className="text-lg font-bold mb-2">Global Collaboration</h3>
                  <p className="text-sm text-muted-foreground">
                    Fostering international partnerships and cooperation in space initiatives
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 border-blue-200 dark:border-blue-800">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Lightbulb className="h-10 w-10 text-blue-600 dark:text-blue-400 mb-4" />
                  <h3 className="text-lg font-bold mb-2">Knowledge Exchange</h3>
                  <p className="text-sm text-muted-foreground">
                    Sharing expertise and insights across academia, industry, and government
                  </p>
                </CardContent>
              </Card>
            </div>

            <h2>Vision & Mission</h2>
            <div className="not-prose mb-8">
              <Card>
                <CardContent className="p-6">
                  <div className="mb-6">
                    <h3 className="text-xl font-bold mb-2 flex items-center">
                      <Target className="h-5 w-5 mr-2 text-indigo-600 dark:text-indigo-400" /> Vision
                    </h3>
                    <p className="text-muted-foreground">
                      To be the world's premier organization to inspire, educate, connect, and advocate on behalf of the
                      global space community.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 flex items-center">
                      <Rocket className="h-5 w-5 mr-2 text-indigo-600 dark:text-indigo-400" /> Mission
                    </h3>
                    <p className="text-muted-foreground">
                      Be the preeminent resource for space education, a trusted source of space information, and a
                      provider of exceptional forums for the exchange of ideas.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <h2>Target Audience</h2>
            <p>
              The Space Convention targets attendees who represent all sectors of the space community from multiple
              space-faring nations:
            </p>
            <ul>
              <li>Space agencies</li>
              <li>Commercial space businesses and associated subcontractors</li>
              <li>Military, national security, and intelligence organizations</li>
              <li>Cybersecurity organizations</li>
              <li>Federal and state government agencies and organizations</li>
              <li>Research and development facilities</li>
              <li>Think tanks</li>
              <li>Educational institutions</li>
              <li>Space entrepreneurs and private space travel providers</li>
              <li>Businesses engaged in adapting, manufacturing, or selling space technologies</li>
              <li>Media that inspire and educate space enthusiasts and the general public about space</li>
            </ul>

            <p>
              Bringing all of these groups together in one place poses a unique opportunity to examine space issues from
              multiple perspectives, to promote dialogue, and to focus attention on critical space issues.
            </p>

            <h2>Event Structure</h2>
            <div className="not-prose mb-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <Calendar className="h-5 w-5 mr-2 text-indigo-600 dark:text-indigo-400" /> Program Overview
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Main Conference</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Keynote presentations from industry leaders</li>
                        <li>Panel discussions on current space topics</li>
                        <li>Technical sessions and workshops</li>
                        <li>Networking events and receptions</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Exhibition</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Showcase of latest space technologies</li>
                        <li>Interactive demonstrations</li>
                        <li>Art exhibitions related to space</li>
                        <li>Educational displays</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Special Events</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Pitch deck sessions for space startups</li>
                        <li>Think tank working groups</li>
                        <li>Student and young professional programs</li>
                        <li>Awards ceremony</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <h2>Key Discussion Topics</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 not-prose mb-6">
              <Badge className="justify-start">Space Exploration & Discovery</Badge>
              <Badge className="justify-start">Commercial Space Opportunities</Badge>
              <Badge className="justify-start">Space Policy & Regulation</Badge>
              <Badge className="justify-start">Earth Observation & Climate</Badge>
              <Badge className="justify-start">Space Resources & Mining</Badge>
              <Badge className="justify-start">Space Tourism</Badge>
              <Badge className="justify-start">Satellite Technology</Badge>
              <Badge className="justify-start">Space Debris Management</Badge>
              <Badge className="justify-start">International Cooperation</Badge>
              <Badge className="justify-start">Space Education & Outreach</Badge>
              <Badge className="justify-start">Space Medicine & Health</Badge>
              <Badge className="justify-start">Deep Space Communications</Badge>
            </div>

            <h2>Strategic Plan</h2>
            <p>
              The Space Convention strategic plan is based on three pillars, each focusing on our core strengths and
              capabilities:
            </p>
            <ol>
              <li>
                <strong>Education and Outreach:</strong> Reaching out to many people, space-inclined or not, to make
                them understand how space cuts across different fields, communicating in the simplest form to spur the
                interest of people with the aim of getting more space enthusiasts globally.
              </li>
              <li>
                <strong>Networking and Collaboration:</strong> Creating a platform for professionals, academics, and
                enthusiasts to connect, share ideas, and form partnerships that advance space exploration and
                utilization.
              </li>
              <li>
                <strong>Innovation and Development:</strong> Showcasing and promoting innovative technologies, research,
                and applications that drive the space industry forward.
              </li>
            </ol>

            <p>
              Our commitment to excellence includes placing great importance on the continued support and development of
              our team. We invite you to join us in our endeavors.
            </p>

            <h2>Expected Outcomes</h2>
            <ul>
              <li>Increased awareness and interest in space-related fields</li>
              <li>Formation of new partnerships and collaborations</li>
              <li>Knowledge exchange between different sectors of the space community</li>
              <li>Inspiration for the next generation of space professionals</li>
              <li>Advancement of space policy discussions</li>
              <li>Showcase of cutting-edge space technologies and applications</li>
            </ul>

            <h2>My Role</h2>
            <p>As part of the organizing team for The Space Convention, I was responsible for:</p>
            <ul>
              <li>Developing the event concept and strategic vision</li>
              <li>Creating marketing and promotional materials</li>
              <li>Coordinating with speakers and exhibitors</li>
              <li>Managing the digital presence and online engagement</li>
              <li>Designing the program structure and content</li>
              <li>Facilitating partnerships with space organizations and sponsors</li>
            </ul>

            <p>
              This project leverages my background in space advocacy and my experience in event planning, allowing me to
              contribute to the growth and development of the space community while creating meaningful connections
              between different stakeholders in the industry.
            </p>

            <p>
              Although the event was fully planned, it was postponed indefinitely due to various factors and has not yet
              taken place. This project page documents the planning process and the vision for the event.
            </p>
          </div>
        </div>
        <div>
          <ProjectDetails slug="space-convention" />
        </div>
      </div>

      <RelatedProjects />
    </div>
  )
}
