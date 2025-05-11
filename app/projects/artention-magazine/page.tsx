import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ChevronRight, Instagram } from "lucide-react"

import { Button } from "@/components/ui/button"
import { RelatedProjects } from "@/components/related-projects"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Artention Magazine | Portfolio",
  description:
    "An art magazine platform showcasing diverse artistic talents and exhibitions across various specializations",
}

export default function ArtentionMagazinePage() {
  return (
    <div className="bg-[#1C1C1C] text-white min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[50vh] md:h-[70vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#1C1C1C] z-10"></div>
        <Image
          src="/artention-magazine-images/magazine-cover.jpeg"
          alt="Artention Magazine Cover"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="container relative z-20 h-full flex flex-col justify-end pb-16">
          <div className="max-w-3xl">
            <div className="relative w-full h-24 mb-6">
              <Image
                src="/artention-magazine-images/header.png"
                alt="Artention Magazine Header"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
            <p className="text-xl md:text-2xl text-gray-200 max-w-2xl">
              A digital and print magazine platform showcasing diverse artistic talents and exhibitions
            </p>
          </div>
        </div>
      </div>

      <div className="container py-10">
        <Link href="/projects" className="inline-flex mb-8">
          <Button variant="ghost" className="gap-2 text-white hover:text-[#A41111]">
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Button>
        </Link>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2">
            {/* Brand Showcase */}
            <Tabs defaultValue="brand" className="mb-12">
              <TabsList className="bg-[#2A2A2A] border-b border-[#A41111]/30 w-full justify-start mb-6">
                <TabsTrigger value="brand" className="text-white data-[state=active]:text-[#A41111]">
                  Brand Identity
                </TabsTrigger>
                <TabsTrigger value="magazine" className="text-white data-[state=active]:text-[#A41111]">
                  Magazine
                </TabsTrigger>
                <TabsTrigger value="digital" className="text-white data-[state=active]:text-[#A41111]">
                  Digital Presence
                </TabsTrigger>
              </TabsList>

              <TabsContent value="brand" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-white p-8 rounded-lg flex items-center justify-center">
                    <Image
                      src="/artention-magazine-images/artention-logo.png"
                      alt="Artention Magazine Logo"
                      width={280}
                      height={100}
                      className="object-contain"
                    />
                  </div>
                  <div className="relative aspect-video overflow-hidden rounded-lg">
                    <Image
                      src="/artention-magazine-images/letterhead.jpeg"
                      alt="Artention Magazine Letterhead"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="mb-8">
                  <Image
                    src="/artention-magazine-images/logo-concept.png"
                    alt="Artention Magazine Logo Concept"
                    width={800}
                    height={400}
                    className="rounded-lg w-full"
                  />
                </div>
                <div className="mb-8">
                  <Image
                    src="/artention-magazine-images/brand-guide.png"
                    alt="Artention Magazine Brand Guide"
                    width={800}
                    height={1000}
                    className="rounded-lg bg-white w-full"
                  />
                </div>
              </TabsContent>

              <TabsContent value="magazine" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="flex justify-center">
                    <div className="relative w-64 h-96 overflow-hidden rounded-lg bg-gray-900 shadow-xl">
                      <Image
                        src="/artention-magazine-images/magazine-cover.jpeg"
                        alt="Artention Magazine Cover"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <div className="relative w-full max-w-md h-96 overflow-hidden rounded-lg shadow-xl">
                      <Image
                        src="/artention-magazine-images/artention-magazine-call.png"
                        alt="Artention Magazine Call to Artists"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="digital" className="mt-0">
                <div className="mb-8 overflow-hidden rounded-lg shadow-xl">
                  <Image
                    src="/artention-magazine-images/website.png"
                    alt="Artention Magazine Website"
                    width={800}
                    height={600}
                    className="rounded-lg w-full"
                  />
                </div>
                <div className="flex justify-center">
                  <Link
                    href="https://www.instagram.com/artentionmagazine/"
                    target="_blank"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all"
                  >
                    <Instagram className="h-5 w-5" />
                    Follow on Instagram
                  </Link>
                </div>
              </TabsContent>
            </Tabs>

            {/* Content Sections */}
            <div className="prose prose-invert max-w-none">
              <h2 className="text-3xl font-bold text-[#A41111] border-b border-[#A41111]/30 pb-2">Brand Identity</h2>
              <p className="text-lg">
                The Artention Magazine brand was carefully crafted to represent the intersection of art and attention.
                The logo combines three key elements: a palette, a brush, and an attention symbol, creating a
                distinctive mark that embodies the magazine's mission to draw attention to artistic talent.
              </p>

              <h2 className="text-3xl font-bold text-[#A41111] border-b border-[#A41111]/30 pb-2 mt-12">
                Brand Guidelines
              </h2>
              <p className="text-lg">
                The magazine follows strict brand guidelines with a color palette of deep red (#A41111) and rich black
                (#1C1C1C), creating a bold and sophisticated visual identity. Typography includes Trebuchet MS as the
                primary typeface and Roboto as the secondary typeface, ensuring readability across print and digital
                platforms.
              </p>

              <div className="grid grid-cols-2 gap-4 my-8">
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 rounded-full bg-[#A41111] mb-2"></div>
                  <p className="text-sm text-center">#A41111</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 rounded-full bg-[#1C1C1C] border border-gray-700 mb-2"></div>
                  <p className="text-sm text-center">#1C1C1C</p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-[#A41111] border-b border-[#A41111]/30 pb-2 mt-12">Overview</h2>
              <p className="text-lg">
                Artention Magazine was created as a platform to showcase and promote diverse artistic talents,
                exhibitions, and creative events. The magazine features articles, stories, interviews, and reports on
                past and upcoming exhibitions across various art specializations.
              </p>

              <h2 className="text-3xl font-bold text-[#A41111] border-b border-[#A41111]/30 pb-2 mt-12">Mission</h2>
              <p className="text-lg">
                The core mission of Artention Magazine was to provide visibility to artists from different disciplines
                and create a community platform for art enthusiasts. The magazine aimed to bridge the gap between
                artists and audiences by providing accessible content about art events and creative works.
              </p>

              <div className="bg-[#2A2A2A] p-6 rounded-lg my-8 border-l-4 border-[#A41111]">
                <blockquote className="text-xl italic">
                  "Artention Magazine aims to draw attention to artistic talent and create a platform where art can be
                  discovered, appreciated, and discussed."
                </blockquote>
              </div>

              <h2 className="text-3xl font-bold text-[#A41111] border-b border-[#A41111]/30 pb-2 mt-12">
                Content Strategy
              </h2>
              <p className="text-lg">
                Artention Magazine accepted submissions across a wide range of art specializations, including:
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 my-6">
                {[
                  "Painting",
                  "Sculpture",
                  "Ceramics",
                  "Graphics",
                  "Photography",
                  "Textile",
                  "Fashion",
                  "Crafts",
                  "Other forms of art",
                ].map((category) => (
                  <div key={category} className="bg-[#2A2A2A] rounded-lg p-3 text-center">
                    {category}
                  </div>
                ))}
              </div>

              <p className="text-lg">
                The magazine operated with an open submission policy, allowing artists to submit their work through
                various channels including WhatsApp, email, and the website. This inclusive approach ensured that
                diverse artistic voices could be featured.
              </p>

              <h2 className="text-3xl font-bold text-[#A41111] border-b border-[#A41111]/30 pb-2 mt-12">
                Digital Presence
              </h2>
              <p className="text-lg">
                In addition to the print magazine, Artention Magazine maintained a strong digital presence through its
                website and social media platforms, allowing for broader reach and engagement with the art community.
              </p>

              <h2 className="text-3xl font-bold text-[#A41111] border-b border-[#A41111]/30 pb-2 mt-12">
                Distribution Channels
              </h2>
              <div className="grid grid-cols-2 gap-4 my-6">
                {[
                  { name: "Print magazine", icon: "📖" },
                  { name: "Digital publication", icon: "💻" },
                  { name: "Website content", icon: "🌐" },
                  { name: "Social media platforms", icon: "📱" },
                ].map((channel) => (
                  <div key={channel.name} className="flex items-center gap-3 bg-[#2A2A2A] rounded-lg p-4">
                    <span className="text-2xl">{channel.icon}</span>
                    <span>{channel.name}</span>
                  </div>
                ))}
              </div>

              <h2 className="text-3xl font-bold text-[#A41111] border-b border-[#A41111]/30 pb-2 mt-12">
                Business Model
              </h2>
              <p className="text-lg">The magazine was supported through:</p>
              <ul className="space-y-2 my-6">
                {[
                  "Sponsorships from art organizations and businesses",
                  "Advertisement placements",
                  "Subscription revenue",
                  "Event partnerships",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-[#A41111] flex-shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h2 className="text-3xl font-bold text-[#A41111] border-b border-[#A41111]/30 pb-2 mt-12">
                Impact and Reach
              </h2>
              <p className="text-lg">Artention Magazine successfully created a platform that:</p>
              <ul className="space-y-2 my-6">
                {[
                  "Provided exposure for emerging and established artists",
                  "Connected art enthusiasts with exhibitions and events",
                  "Documented and archived important art movements and exhibitions",
                  "Created networking opportunities within the art community",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-[#A41111] flex-shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h2 className="text-3xl font-bold text-[#A41111] border-b border-[#A41111]/30 pb-2 mt-12">
                Key Learnings
              </h2>
              <p className="text-lg">Managing Artention Magazine provided valuable insights into:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                {[
                  "Content curation and editorial processes",
                  "Building and engaging with creative communities",
                  "Art promotion and marketing strategies",
                  "Managing submissions and contributor relationships",
                  "Balancing creative vision with business sustainability",
                ].map((learning, index) => (
                  <Card key={index} className="bg-[#2A2A2A] border-[#A41111]/20">
                    <CardContent className="p-4">
                      <p>{learning}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-[#2A2A2A] border border-[#A41111]/30 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold mb-6 text-white border-b border-[#A41111]/30 pb-2">Project Details</h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-medium text-gray-400 mb-2">Client</h4>
                    <p className="text-white">Self-initiated</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-gray-400 mb-2">Role</h4>
                    <p className="text-white">Founder & Editor</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-gray-400 mb-2">Timeline</h4>
                    <p className="text-white">June 2018 - 2019</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-gray-400 mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Art Magazine",
                        "Content Curation",
                        "Editorial Design",
                        "Digital Publishing",
                        "Social Media Management",
                        "Community Building",
                        "Art Promotion",
                        "Exhibition Coverage",
                      ].map((tech) => (
                        <Badge
                          key={tech}
                          className="bg-[#A41111]/10 text-white border-[#A41111]/50 hover:bg-[#A41111]/20"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 space-y-4">
                  <a
                    href="https://www.instagram.com/artentionmagazine/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#A41111] text-white hover:bg-[#A41111]/90 h-10 px-4 py-2 w-full"
                  >
                    <Instagram className="h-4 w-4" />
                    Instagram Page
                  </a>
                </div>
              </div>

              {/* Featured Image */}
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg mb-8">
                <Image
                  src="/artention-magazine-images/magazine-cover.jpeg"
                  alt="Artention Magazine Cover"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                  <p className="text-sm text-white">Featured Issue Cover</p>
                </div>
              </div>

              {/* Call to Artists */}
              <div className="relative aspect-video overflow-hidden rounded-lg">
                <Image
                  src="/artention-magazine-images/artention-magazine-call.png"
                  alt="Artention Magazine Call to Artists"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Related Projects Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-[#A41111] mb-8">Related Projects</h2>
          <RelatedProjects />
        </div>
      </div>
    </div>
  )
}
