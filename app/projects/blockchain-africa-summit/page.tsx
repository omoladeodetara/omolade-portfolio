import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ProjectDetails } from "@/components/project-details"
import { RelatedProjects } from "@/components/related-projects"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { AlertCircle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export const metadata: Metadata = {
  title: "Blockchain Africa Summit 2022 | Omolade Jordan Odetara",
  description:
    "A planned blockchain conference and exhibition project focused on creating networking opportunities for professionals in the blockchain industry",
}

export default function BlockchainAfricaSummitPage() {
  return (
    <div className="container py-10">
      <Link href="/projects" className="inline-flex mb-8">
        <Button variant="ghost" className="gap-2">
          <ArrowLeft className="h-4 w-4" />
          Back to Projects
        </Button>
      </Link>

      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Blockchain Africa Summit 2022</h1>
        <p className="text-xl text-muted-foreground">
          A planned hybrid blockchain conference and exhibition focused on blockchain, crypto, metaverse, and Web 3.0
          technologies
        </p>
      </div>

      <Alert className="mb-8 border-amber-500">
        <AlertCircle className="h-4 w-4 text-amber-500" />
        <AlertTitle>Project Status</AlertTitle>
        <AlertDescription>
          This event was fully planned but was postponed indefinitely and has not yet taken place.
        </AlertDescription>
      </Alert>

      <div className="relative aspect-video overflow-hidden rounded-lg mb-12">
        <img
          src="/blockchain-africa-summit-images/project-thumbnail.png"
          alt="Blockchain Africa Summit 2022"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white p-8">
            <h2 className="text-3xl font-bold mb-4">FANDI BLOCKCHAIN FACTORY</h2>
            <h3 className="text-xl mb-2">BLOCKCHAIN AFRICA SUMMIT 2022</h3>
            <p className="text-lg">BLOCKCHAIN, CRYPTO, METAVERSE & WEB 3.0: THE FUTURE & WHY IT MATTERS</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="md:col-span-2">
          <div className="prose dark:prose-invert max-w-none">
            <h2>Project Overview</h2>
            <p>
              The Blockchain Africa Summit was a planned 2-day blockchain conference and exhibition that was scheduled
              to be held on April 13-14, 2022, at the Radisson Blu Anchorage Hotel in Lagos, Nigeria. The event was
              designed to bring together professionals, leaders, enthusiasts, and stakeholders in the blockchain
              industry to raise awareness about the promise of a decentralized world and Africa's role in it.
            </p>

            <p>
              Although the event was fully planned, it was postponed indefinitely due to various factors and has not yet
              taken place. This project page documents the planning process and the vision for the event.
            </p>

            <h2>My Role</h2>
            <p>
              As one of the Project Managers for the Blockchain Africa Summit, I had significant responsibilities in
              planning this major event. My specific duties included:
            </p>

            <ul>
              <li>Co-managing the overall project planning process</li>
              <li>Redesigning the FANDI website to support the event</li>
              <li>Setting up and managing event listings on Eventbrite and Meetup</li>
              <li>
                Coordinating with Bossbus (a planned sponsor) to arrange airport pickups and drop-offs for participants
                from outside Lagos
              </li>
              <li>Contributing to media team activities</li>
              <li>Assisting with investor outreach and coordination</li>
            </ul>

            <h2>Planned Event Structure</h2>
            <div className="not-prose mb-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Proposed Daily Program</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center border-b pb-2">
                      <span className="font-medium">8:30 AM - 11:50 AM</span>
                      <span>Public Open Session</span>
                    </div>
                    <div className="flex justify-between items-center border-b pb-2">
                      <span className="font-medium">11:50 AM - 12:15 PM</span>
                      <span>Tea Break</span>
                    </div>
                    <div className="flex justify-between items-center border-b pb-2">
                      <span className="font-medium">12:15 PM - 3:00 PM</span>
                      <span>Private/Investor Session</span>
                    </div>
                    <div className="flex justify-between items-center border-b pb-2">
                      <span className="font-medium">3:00 PM - 3:45 PM</span>
                      <span>Lunch Break</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">3:45 PM - 7:00 PM</span>
                      <span>Project Presentations/Collaborations/Networking</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <h3>Proposed Discussion Topics</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 not-prose mb-6">
              <Badge className="justify-start">Deploying Blockchain for Africa's Development</Badge>
              <Badge className="justify-start">Blockchain in a Borderless World</Badge>
              <Badge className="justify-start">Creating Use Cases for Africa's Development</Badge>
              <Badge className="justify-start">How Blockchain Can Change Africa</Badge>
              <Badge className="justify-start">Crypto And Blockchain: Building The Future Of Finance</Badge>
              <Badge className="justify-start">The Promise of a Decentralized World</Badge>
              <Badge className="justify-start">Upcoming Crypto Investing Trends</Badge>
              <Badge className="justify-start">Investing in the Bitcoin Ecosystem</Badge>
              <Badge className="justify-start">Current State of DeFi</Badge>
              <Badge className="justify-start">Shifts in Payment Gateways</Badge>
              <Badge className="justify-start">Crypto Asset Management</Badge>
              <Badge className="justify-start">Regulatory Advances in Crypto</Badge>
            </div>

            <h2>Planning Process</h2>
            <p>The event planning followed an 8-week roadmap that included:</p>
            <ul>
              <li>Creating event materials and promotional content</li>
              <li>Setting up event listings and registration systems</li>
              <li>Researching and identifying potential speakers</li>
              <li>Outreach to potential sponsors and exhibitors</li>
              <li>Developing marketing strategies for the event across Africa</li>
              <li>Planning logistics for the venue, catering, and transportation</li>
              <li>Creating systems for managing registrations and inquiries</li>
              <li>Preparing briefing materials for speakers and exhibitors</li>
            </ul>

            <h2>Planned Participation Structure</h2>
            <p>The event was designed to offer different participation options:</p>
            <ul>
              <li>
                <strong>General Participants:</strong> $100 fee covering event registration, summit materials, tea
                breaks, buffet lunch, and access to the Fandi Blockchain community
              </li>
              <li>
                <strong>Project Presenters:</strong> $500 fee for the opportunity to pitch projects to stakeholders and
                investors
              </li>
              <li>
                <strong>Free Attendance:</strong> Available for verified investors, senior-level developers, and
                blockchain developers with experience building blockchain projects
              </li>
            </ul>

            <h2>Sponsorship and Exhibition Plan</h2>
            <p>The event was designed to offer three tiers of sponsorship:</p>
            <ul>
              <li>
                <strong>Platinum Sponsors ($10,000):</strong> Comprehensive branding including roll-up banners, social
                media ads, backdrop presence, digital ads, business presentation, website banner ads, and staff uniform
                branding
              </li>
              <li>
                <strong>Gold Sponsors ($5,000):</strong> Branding including roll-up banners, social media ads, backdrop
                presence, digital ads, and business presentation
              </li>
              <li>
                <strong>Silver Sponsors ($2,500):</strong> Basic branding including roll-up banners, social media ads,
                and backdrop presence
              </li>
            </ul>
            <p>
              Bossbus was identified as a key potential sponsor, with plans to provide airport pickup and drop-off
              services for participants coming from outside Lagos, Nigeria.
            </p>

            <h2>Budget Planning</h2>
            <p>Redacted</p>
            <h2>Key Learnings</h2>
            <p>
              Despite the event not taking place as planned, the project provided valuable insights and experience in:
            </p>
            <ul>
              <li>Planning large-scale technology conferences</li>
              <li>Developing comprehensive event budgets and revenue models</li>
              <li>Creating marketing strategies for specialized technology events</li>
              <li>Designing participation and sponsorship structures</li>
              <li>Coordinating with venues, sponsors, and service providers</li>
              <li>Understanding the blockchain ecosystem in Africa</li>
              <li>
                Adapting to changing circumstances and managing stakeholder expectations when plans need to be adjusted
              </li>
            </ul>
          </div>
        </div>
        <div>
          <ProjectDetails slug="blockchain-africa-summit" />
        </div>
      </div>

      <RelatedProjects />
    </div>
  )
}
