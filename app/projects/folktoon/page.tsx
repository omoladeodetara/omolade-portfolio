import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ExternalLink } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ProjectDetails } from "@/components/project-details"
import { RelatedProjects } from "@/components/related-projects"

export const metadata: Metadata = {
  title: "Folktoon Network | Portfolio",
  description:
    "A collective of designers, coders, artists & creative strategists specializing in user experience, brand & identity, film & motion graphics",
}

export default function FolktoonPage() {
  return (
    <div className="container py-10">
      <Link href="/projects" className="inline-flex mb-8">
        <Button variant="ghost" className="gap-2">
          <ArrowLeft className="h-4 w-4" />
          Back to Projects
        </Button>
      </Link>

      <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8">
        <div className="relative w-24 h-24 flex-shrink-0">
          <Image
            src="/folktoon-images/folktoon-logo.png"
            alt="Folktoon Network Logo"
            width={96}
            height={96}
            className="object-contain"
            priority
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-2">Folktoon Network</h1>
          <p className="text-xl text-muted-foreground">
            A collective of designers, coders, artists & creative strategists
          </p>
        </div>
      </div>

      <div className="relative aspect-video overflow-hidden rounded-lg mb-12">
        <Image
          src="/folktoon-images/folktoon-hero.png"
          alt="Folktoon Network - Creative Collective"
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
              Folktoon Network is a creative collective bringing together designers, coders, artists, and creative
              strategists. We collaborate to deliver exceptional creative solutions across various digital and
              traditional media formats.
            </p>

            <h2>Our Expertise</h2>
            <p>The Folktoon Network specializes in:</p>
            <ul>
              <li>
                <strong>User Experience Design</strong> - Creating intuitive, engaging, and accessible digital
                experiences
              </li>
              <li>
                <strong>Brand & Identity</strong> - Developing distinctive visual identities and comprehensive brand
                systems
              </li>
              <li>
                <strong>Film & Motion Graphics</strong> - Producing compelling visual storytelling through animation and
                video
              </li>
              <li>
                <strong>Creative Strategy</strong> - Crafting strategic approaches to creative challenges
              </li>
            </ul>

            <h2>Our Approach</h2>
            <p>
              At Folktoon Network, we believe in the power of collaborative creativity. Our diverse team brings together
              different perspectives, skills, and experiences to create work that is both innovative and effective. We
              approach each project with a commitment to:
            </p>
            <ul>
              <li>Understanding the unique needs and goals of our clients</li>
              <li>Pushing creative boundaries while maintaining strategic focus</li>
              <li>Delivering polished, professional results that exceed expectations</li>
              <li>Building lasting relationships based on trust and mutual respect</li>
            </ul>

            <h2>Services</h2>
            <p>Our comprehensive service offerings include:</p>

            <h3>Design</h3>
            <ul>
              <li>UI/UX Design</li>
              <li>Web & Mobile Design</li>
              <li>Brand Identity</li>
              <li>Logo Design</li>
              <li>Typography</li>
              <li>Print & Packaging</li>
            </ul>

            <h3>Development</h3>
            <ul>
              <li>Frontend Development</li>
              <li>Interactive Experiences</li>
              <li>Prototyping</li>
              <li>CMS Implementation</li>
            </ul>

            <h3>Motion & Film</h3>
            <ul>
              <li>Motion Graphics</li>
              <li>Animation</li>
              <li>Video Production</li>
              <li>Visual Effects</li>
              <li>Editing & Post-production</li>
            </ul>

            <h3>Strategy</h3>
            <ul>
              <li>Brand Strategy</li>
              <li>Content Strategy</li>
              <li>Creative Direction</li>
              <li>Art Direction</li>
              <li>Campaign Development</li>
            </ul>

            <h2>Our Process</h2>
            <p>Our collaborative process ensures that every project benefits from our collective expertise:</p>
            <ol>
              <li>
                <strong>Discovery</strong> - Understanding the project goals, audience, and context
              </li>
              <li>
                <strong>Strategy</strong> - Developing a creative approach that aligns with objectives
              </li>
              <li>
                <strong>Concept</strong> - Exploring creative directions and refining ideas
              </li>
              <li>
                <strong>Production</strong> - Bringing concepts to life with attention to detail
              </li>
              <li>
                <strong>Delivery</strong> - Finalizing and implementing the creative solution
              </li>
              <li>
                <strong>Evaluation</strong> - Assessing results and gathering feedback
              </li>
            </ol>

            <div className="mt-8">
              <a
                href="https://www.instagram.com/folktoon_ng/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary hover:underline"
              >
                <ExternalLink size={16} className="mr-2" />
                Follow Folktoon Network on Instagram
              </a>
            </div>
          </div>
        </div>
        <div>
          <ProjectDetails slug="folktoon" />
        </div>
      </div>

      <RelatedProjects />
    </div>
  )
}
