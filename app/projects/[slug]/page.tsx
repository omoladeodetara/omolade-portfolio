import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ProjectGallery } from "@/components/project-gallery"
import { ProjectDetails } from "@/components/project-details"
import { RelatedProjects } from "@/components/related-projects"
import { DesignShowcase } from "@/components/design-showcase"
import { MobileScreenGallery } from "@/components/mobile-screen-gallery"
import { DesktopScreenShowcase } from "@/components/desktop-screen-showcase"
import { FigmaShowcase } from "@/components/figma-showcase"

// ASH B mobile screens data
const ashBMobileScreens = [
  {
    id: "audio-calling",
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Message%20-%20Audio%20Screen%20-%20Calling-cPxd1YIriAM6eFuPkyTCTQcgwK1A1E.png",
    title: "Audio Call - Connecting",
    description:
      "The audio call interface when initiating a call with a healthcare provider. The minimalist design reduces anxiety during the connection process, with clear call controls at the bottom for accessibility.",
  },
  {
    id: "audio-connected",
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Message%20-%20Audio%20Screen%20-%20On%20Call-zwCjZNvjJS9hKBRUOfvVHcKWcq7HYN.png",
    title: "Audio Call - In Progress",
    description:
      "Once connected, the interface displays the call duration while maintaining the same intuitive control layout. This consistency helps patients navigate the telemedicine experience with confidence.",
  },
  {
    id: "messages-list",
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Message-BEhvgYU7CLYeqDc1sLICjnSMyINLqC.png",
    title: "Messages Dashboard",
    description:
      "The messages dashboard provides a clear overview of all doctor conversations. The status indicators (green dots) help patients quickly identify which doctors are currently available for immediate consultation.",
  },
  {
    id: "chat-detail",
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Message%20-%20Chat%20Screen.jpg-4gMXcJa4Z6FakooQHGYxnLNUAhBHPJ.jpeg",
    title: "Secure Messaging Interface",
    description:
      "The secure messaging interface allows patients to discuss medical concerns and share images with their doctors. The design supports both text and media sharing while maintaining clinical context.",
  },
  {
    id: "video-calling",
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Message%20-%20Video%20Screen%20-%20Calling-eB4MYU1Hnf0HK7j584BXszcrlC6iBw.png",
    title: "Video Call - Connecting",
    description:
      "The video call interface shows the patient's camera feed while connecting to the doctor. This provides visual feedback that their camera is working properly before the doctor joins.",
  },
  {
    id: "video-connected",
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Message%20-%20Video%20Screen%20-%20On%20Call-sadPNJLi7A4C9DxfokapWNv7BHRWFU.png",
    title: "Video Call - In Progress",
    description:
      "During an active video consultation, the doctor's feed takes center stage while the patient's camera appears in a picture-in-picture view. This layout optimizes the telemedicine experience by focusing on the healthcare provider.",
  },
]

// This would typically come from a CMS or API
const getProjectData = (slug: string) => {
  // Mock data - in a real app, fetch from API/CMS
  const projects = {
    "ash-b": {
      title: "ASH B Healthcare Platform",
      description:
        "A comprehensive healthcare solution connecting patients with doctors through integrated telemedicine",
      image: "/ash-b-main-thumbnail.png", // Updated to use the new main thumbnail
      content: `
        <h2>Overview</h2>
        <p>ASH B is a comprehensive healthcare platform that combines mobile and web applications for patients and doctors with robust backend infrastructure. The platform facilitates telemedicine consultations, appointment scheduling, prescription management, and secure medical record storage.</p>
        
        <h2>Core Features</h2>
        
        <h3>Patient Application</h3>
        <ul>
          <li><strong>Symptom Assessment:</strong> Preliminary form with tick-box symptoms and free-text "others" field for initial consultation preparation</li>
          <li><strong>Appointment System:</strong> Instant bookings (defaulting to general practitioners) or scheduled specialist requests</li>
          <li><strong>Telemedicine:</strong> Integrated voice/video calling (VoIP) and secure messaging for remote consultations</li>
          <li><strong>Medical Management:</strong> Prescription tracking, medication reminders, and private medical history storage</li>
        </ul>
        
        <h3>Doctor Application</h3>
        <ul>
          <li><strong>Dynamic Scheduling:</strong> Real-time patient requests with automatic case assignment (no recurring doctor-patient pairing)</li>
          <li><strong>Consultation Tools:</strong> EHR integration, prescription templates, and referral capabilities within the platform</li>
          <li><strong>Financial System:</strong> Wallet integration with per-consultation/hourly billing and referral bonuses</li>
        </ul>
        
        <h2>Operational Policies</h2>
        
        <h3>Rescheduling Protocol</h3>
        <p>Doctors face penalties for last-minute changes, triggering:</p>
        <ul>
          <li>Automated patient notifications</li>
          <li>Priority reassignment to available specialists</li>
          <li>Performance tracking in admin dashboard</li>
        </ul>
        
        <h3>Payment Models</h3>
        <ul>
          <li><strong>Patient Options:</strong> One-time payments, subscription plans</li>
          <li><strong>Doctor Compensation:</strong> 70-30 platform split (ASH B retains 30%) with referral incentives</li>
        </ul>
        
        <h2>Technical Architecture</h2>
        
        <h3>API Design</h3>
        <ul>
          <li>RESTful architecture for core services</li>
          <li>FHIR-compliant health data exchange</li>
          <li>Third-party integrations:
            <ul>
              <li>Payment gateways (Stripe/PayPal)</li>
              <li>Cloud VoIP solutions</li>
            </ul>
          </li>
        </ul>
        
        <h3>Security Infrastructure</h3>
        <ul>
          <li>CIS2-compliant authentication</li>
          <li>End-to-end encryption for medical data</li>
          <li>Audit logs for all virtual consultations</li>
        </ul>
        
        <h2>UI/UX Considerations</h2>
        
        <h3>Mobile-First Design</h3>
        <ul>
          <li>Responsive layouts for iOS/Android</li>
          <li>Touch-optimized navigation</li>
          <li>Color-coded appointment status indicators</li>
        </ul>
        
        <h3>Dashboard Features</h3>
        <ul>
          <li><strong>Patient-side:</strong> Consultation history, prescription tracker, referral status</li>
          <li><strong>Doctor-side:</strong> Earnings analytics, case load metrics, performance reports</li>
          <li><strong>Admin:</strong> Real-time doctor availability monitoring, financial reconciliation</li>
        </ul>
        
        <h2>Compliance Framework</h2>
        <ul>
          <li>HIPAA/GDPR-compliant data handling</li>
          <li>Transparent Terms & Conditions including:
            <ul>
              <li>24-hour cancellation policy</li>
              <li>£20-50 no-show fees</li>
              <li>Medication non-return clauses</li>
            </ul>
          </li>
        </ul>

        <h2>Design Process</h2>
        <p>The ASH B platform was designed with a user-centered approach, focusing on creating intuitive interfaces for both patients and healthcare providers. The design process included extensive user research, wireframing, prototyping, and iterative testing.</p>

        <h3>Mobile Experience Design</h3>
        <p>The mobile experience was carefully crafted to address the unique challenges of healthcare interactions on smaller screens. Special attention was paid to creating intuitive telemedicine interfaces that reduce technical friction during potentially stressful medical consultations.</p>
        
        <p>The messaging and telemedicine features were designed with both usability and clinical requirements in mind, ensuring that patients can easily communicate with healthcare providers while maintaining the necessary context for effective remote care.</p>

        <h3>Desktop Interface Design</h3>
        <p>The desktop interface was designed specifically for healthcare providers, with a focus on clinical workflows and efficiency. The interface includes:</p>
        <ul>
          <li><strong>Dashboard:</strong> A comprehensive overview with patient requests, upcoming appointments, and consultation history</li>
          <li><strong>Schedule Management:</strong> Intuitive calendar and appointment tracking with integrated communication tools</li>
          <li><strong>Telemedicine Suite:</strong> Advanced video consultation interface with medical record access and prescription capabilities</li>
        </ul>
        <p>The desktop and mobile interfaces work together seamlessly, allowing healthcare providers to transition between devices while maintaining context and access to critical patient information.</p>
      `,
    },
    moneybase: {
      title: "Moneybase Financial Trading Platform",
      description:
        "A modern fintech solution providing seamless cross-border payments, currency exchange services, and fractional share trading",
      image: "/modern-finance-app.png",
      content: `
        <h2>Overview</h2>
        <p>
          Moneybase is a comprehensive financial platform that enables users to manage their finances, 
          make cross-border payments, exchange currencies, and invest in stocks and other financial instruments. 
          As a Product Manager for Moneybase, I was responsible for leading the development of new features 
          and ensuring they met user needs while aligning with business objectives.
        </p>

        <h2>Product Management Case Study: Fractional Shares Trading</h2>
        <p>
          One of the key features I was tasked with implementing was value-based trading (fractional shares), 
          allowing clients to trade equity by value rather than by units. This feature was prioritized by the 
          executive committee and needed to be delivered within a tight 4-week timeframe.
        </p>

        <h3>The Challenge</h3>
        <p>
          I was given responsibility to deliver this feature with a small team consisting of:
        </p>
        <ul>
          <li>1 frontend developer</li>
          <li>1 team lead</li>
          <li>1 backend developer</li>
          <li>1 QA team member</li>
        </ul>
        <p>
          The team was already handling other features and day-to-day support, with one team member being new 
          while another was very experienced with the codebase and business logic.
        </p>

        <h3>My Approach</h3>
            
        <h4>Week 1: Initial Planning and Setup</h4>
        <p>
          I focused on defining the feature scope and gathering requirements. My priorities included:
        </p>
        <ul>
          <li>Defining detailed feature requirements</li>
          <li>Brainstorming technical approaches for value-based trades</li>
          <li>Breaking down the feature into smaller, manageable chunks</li>
          <li>Allocating initial tasks to team members based on expertise</li>
          <li>Identifying dependencies and coordinating with other teams</li>
          <li>Creating UI/UX suggestions including toggle switches, value input fields, and confirmation screens</li>
        </ul>

        <p>
          For the technical implementation, I worked with the team lead to identify key system architecture modifications:
        </p>
        <ul>
          <li>Data model changes to accommodate fractional share representation</li>
          <li>Transaction record updates to log value-based trades</li>
          <li>New API endpoints for value-based trading</li>
          <li>Ensuring backward compatibility for users who prefer the existing method</li>
          <li>Implementing conversion logic to translate investment amounts into fractional shares</li>
        </ul>

        <h4>Weeks 2-3: Development and Testing</h4>
        <p>
          During the development phase, I established:
        </p>
        <ul>
          <li>Daily huddles for quick team sync-ups</li>
          <li>Weekly progress reviews with stakeholders</li>
          <li>Continued customer interviews for feedback</li>
          <li>Balanced workload management to handle existing priorities</li>
          <li>Early QA involvement to identify issues proactively</li>
          <li>Coordination with marketing to prepare for launch</li>
        </ul>

        <h4>Week 4: Launch Preparation</h4>
        <p>
          In the final week, I focused on:
        </p>
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
        <p>
          I established several KPIs to measure success:
        </p>
        <ul>
          <li>User adoption rate of the new feature</li>
          <li>User feedback and satisfaction scores</li>
          <li>Technical performance metrics (load times, error rates)</li>
          <li>Transaction volume comparison between fractional and unit-based trades</li>
          <li>User segmentation analysis</li>
          <li>Financial impact analysis</li>
          <li>Conversion tracking from educational materials to feature usage</li>
        </ul>

        <h3>Results</h3>
        <p>
          The fractional shares trading feature was successfully implemented within the 4-week timeframe, 
          allowing Moneybase users to invest specific monetary amounts rather than being limited to whole 
          share purchases. This made investing more accessible, particularly for users with smaller amounts 
          to invest, and positioned Moneybase competitively in the fintech market.
        </p>

        <h2>Key Learnings</h2>
        <p>
          This project reinforced several important product management principles:
        </p>
        <ul>
          <li>Clear scope definition is essential for tight timelines</li>
          <li>Regular communication keeps stakeholders aligned and informed</li>
          <li>Breaking complex features into smaller components makes them manageable</li>
          <li>Early QA involvement reduces issues later in development</li>
          <li>User education is crucial for adoption of new financial features</li>
          <li>Balancing team workload requires careful planning when handling multiple priorities</li>
        </ul>
      `,
    },
    monizoom: {
      title: "MoniZoom",
      description: "A borderless banking platform that accelerates global reach with reliable financial services",
      image: "/financial-overview-dashboard.png",
      content: `
        <h2>Overview</h2>
        <p>MoniZoom is a modern fintech platform designed to provide seamless cross-border financial services. The platform enables users to send and receive money internationally, manage multiple currencies, and access financial services regardless of their location.</p>
        
        <h2>Key Features</h2>
        <ul>
          <li><strong>Borderless Accounts:</strong> Users can hold, exchange, and manage multiple currencies in one account</li>
          <li><strong>Fast Transfers:</strong> Send money internationally with competitive exchange rates and low fees</li>
          <li><strong>Virtual Cards:</strong> Issue virtual payment cards for online transactions in different currencies</li>
          <li><strong>Financial Dashboard:</strong> Comprehensive overview of transactions, balances, and spending patterns</li>
          <li><strong>Secure Authentication:</strong> Multi-factor authentication and biometric security features</li>
          <li><strong>Regulatory Compliance:</strong> Built-in KYC/AML processes to ensure legal compliance across jurisdictions</li>
        </ul>
        
        <h2>Design Philosophy</h2>
        <p>The MoniZoom interface was designed with a focus on clarity and ease of use, recognizing that financial applications can often be overwhelming. The color scheme uses calming blues and whites to create a sense of trust and reliability, while the layout prioritizes the most important information and actions.</p>
        
        <h2>Technical Implementation</h2>
        <ul>
          <li><strong>Frontend:</strong> React, Next.js, Tailwind CSS for responsive design</li>
          <li><strong>Backend:</strong> Node.js with Express, PostgreSQL database</li>
          <li><strong>APIs:</strong> Integration with multiple payment processors and banking APIs</li>
          <li><strong>Security:</strong> End-to-end encryption for sensitive data, OAuth 2.0 for authentication</li>
        </ul>
        
        <h2>User Experience</h2>
        <p>The application flow was designed to minimize friction in financial transactions, with a streamlined onboarding process and intuitive navigation. User testing was conducted throughout the development process to ensure that the platform met the needs of a diverse user base with varying levels of financial literacy.</p>
      `,
      figmaEmbed: "https://embed.figma.com/design/GVo2NK6aPIJcX64BrDoxYS/Monizoom?node-id=0-1&embed-host=share",
    },
    talahive: {
      title: "TalaHive",
      description: "A specialized workspace and community hub for visual artists",
      image: "/african-talent-network.png",
      content: `
        <h2>Overview</h2>
        <p>TalaHive was conceived as a specialized workspace and community hub for visual artists across multiple disciplines, including painting, graphics, animation, sculpture, ceramics, fashion, and textile arts.</p>
        
        <h2>Key Features</h2>
        <ul>
          <li><strong>Specialized Art Studios:</strong> Purpose-built spaces for different visual art disciplines, including wet studios for painting and ceramics, dry studios for digital art and animation, and specialized workshops for sculpture, fashion, and textile arts.</li>
          <li><strong>Equipment and Resources:</strong> Professional-grade equipment such as easels, pottery wheels, kilns, sewing machines, looms, and digital workstations with industry-standard software for animation and graphic design.</li>
          <li><strong>Exhibition Spaces:</strong> Dedicated areas for artists to showcase their work, fostering visibility and sales opportunities.</li>
          <li><strong>Flexible Membership Model:</strong> Different tiers of membership providing access to various studios and equipment based on artists' needs and budgets.</li>
          <li><strong>Community Events:</strong> Regular workshops, critiques, and collaborative projects to foster skill development and artistic community.</li>
          <li><strong>Digital Access System:</strong> Cloud-based access control allowing members to use the facilities at their convenience, supporting the often non-traditional working hours of artists.</li>
        </ul>
        
        <h2>Y Combinator Application</h2>
        <p>In 2019, TalaHive was submitted as an application to Y Combinator's startup accelerator program, showcasing the business model and vision for supporting visual artists with professional-grade facilities and a supportive community environment.</p>
        
        <h2>Market Need</h2>
        <p>TalaHive addressed the critical need for affordable, accessible studio space for visual artists, who often struggle to find suitable workspaces with the specialized equipment their disciplines require. By creating a shared resource model, TalaHive aimed to make professional-grade facilities accessible to artists at various career stages.</p>
      `,
      videoUrl: "https://youtu.be/92aq_qREv-A",
    },
    default: {
      title: "Project Title",
      description: "Detailed project description",
      image: "/team-brainstorm.png",
      content: "Full project content...",
    },
  }

  return projects[slug as keyof typeof projects] || projects.default
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

interface ProjectDetailsProps {
  slug?: string
  additionalLinks?: Array<{ url: string; label: string }>
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
        {project.videoUrl ? (
          <iframe
            src={`https://www.youtube.com/embed/${project.videoUrl.split("v=")[1] || project.videoUrl.split("/").pop()}`}
            title={project.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        ) : (
          <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" priority />
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="md:col-span-2">
          <div className="prose dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: project.content }} />
        </div>
        <div>
          <ProjectDetails slug={params.slug} />
        </div>
      </div>

      {/* Add the Figma showcase for Monizoom */}
      {project.figmaEmbed && (
        <FigmaShowcase
          projectSlug={params.slug}
          embedUrl={project.figmaEmbed}
          title="Interactive Design Showcase"
          description="Explore the MoniZoom interface design directly in this interactive Figma embed. You can navigate through different screens and components to get a better understanding of the user experience."
        />
      )}

      {/* Add the MobileScreenGallery component for ASH B project */}
      {params.slug === "ash-b" && <MobileScreenGallery screens={ashBMobileScreens} projectSlug={params.slug} />}

      {/* Add the DesktopScreenShowcase component after the MobileScreenGallery component */}
      {params.slug === "ash-b" && <DesktopScreenShowcase />}

      <DesignShowcase projectSlug={params.slug} />
      <ProjectGallery slug={params.slug} />
      <RelatedProjects />
    </div>
  )
}
