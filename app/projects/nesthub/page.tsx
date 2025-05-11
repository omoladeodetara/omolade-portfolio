import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function NestHubPage() {
  return (
    <div className="container py-10">
      <Link href="/projects" className="inline-flex mb-8">
        <Button variant="ghost" className="gap-2">
          <ArrowLeft className="h-4 w-4" />
          Back to Projects
        </Button>
      </Link>

      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">NestHub Africa Limited</h1>
        <p className="text-xl text-muted-foreground">
          A comprehensive property marketplace connecting developers, owners, and seekers across Africa.
        </p>
      </div>

      <div className="relative aspect-video overflow-hidden rounded-lg mb-12">
        <Image
          src="/nesthub-images/nesthub-homepage.png"
          alt="NestHub Homepage showing 'Building Africa's Premium Real Estate Platform'"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="md:col-span-2">
          <div className="prose dark:prose-invert max-w-none">
            <h2>Project Overview</h2>
            <p>
              NestHub is a comprehensive real estate platform designed to connect property developers, owners, and
              seekers across Africa. The platform facilitates property listings, rentals, sales, and short-term stays
              while providing a seamless experience for all stakeholders in the real estate ecosystem.
            </p>

            <h2>Key Features</h2>
            <ul>
              <li>
                <strong>Property Marketplace:</strong> A centralized platform for buying, selling, and renting
                properties
              </li>
              <li>
                <strong>Short-Stay Accommodations:</strong> Options for temporary housing and vacation rentals
              </li>
              <li>
                <strong>Subletting Management:</strong> Tools for tenants to sublet their properties legally and safely
              </li>
              <li>
                <strong>Affiliate Network:</strong> A system for real estate agents and brokers to participate in the
                ecosystem
              </li>
              <li>
                <strong>Verification System:</strong> Document verification for property owners and affiliates
              </li>
              <li>
                <strong>Payment Processing:</strong> Secure payment handling for transactions
              </li>
              <li>
                <strong>Property Inspection:</strong> Scheduling and management of property viewings
              </li>
            </ul>

            <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-lg overflow-hidden">
                <Image
                  src="/nesthub-images/nesthub-projects-listing.png"
                  alt="NestHub Projects Listing Page"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
                <p className="text-sm text-muted-foreground mt-2 text-center">
                  Projects listing page showing available properties
                </p>
              </div>
              <div className="rounded-lg overflow-hidden">
                <Image
                  src="/nesthub-images/nesthub-property-detail.png"
                  alt="NestHub Property Detail Page for Hillsidecity"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
                <p className="text-sm text-muted-foreground mt-2 text-center">
                  Property detail page for Hillsidecity development in Abuja
                </p>
              </div>
            </div>

            <h2>Technical Implementation</h2>
            <p>
              NestHub was built using a modern tech stack including Node.js, Express, MongoDB, and React. The platform
              features a responsive design that works seamlessly across desktop and mobile devices, ensuring that users
              can access the service from anywhere.
            </p>

            <p>
              The backend architecture includes robust APIs for property management, user authentication, payment
              processing, and notification systems. The database design accommodates complex relationships between
              properties, owners, renters, and affiliates while maintaining performance at scale.
            </p>

            <h2>Market Impact</h2>
            <p>NestHub addresses critical challenges in the African real estate market, including:</p>
            <ul>
              <li>Lack of transparency in property transactions</li>
              <li>Limited access to verified property listings</li>
              <li>Inefficient processes for property inspections and transactions</li>
              <li>Challenges in finding short-term accommodations</li>
              <li>Limited opportunities for property subletting</li>
            </ul>

            <p>
              By providing a comprehensive solution to these challenges, NestHub aims to transform the real estate
              experience across Africa, making property transactions more accessible, transparent, and efficient.
            </p>

            <h2>User-Centered Design Process</h2>
            <p>The NestHub platform was developed using a rigorous user-centered design process that included:</p>
            <ul>
              <li>Extensive user research with property buyers, sellers, and real estate professionals</li>
              <li>Competitive analysis of existing real estate platforms</li>
              <li>Creation of detailed user personas and journey maps</li>
              <li>Iterative wireframing and prototyping</li>
              <li>Usability testing with target users</li>
              <li>Continuous refinement based on user feedback</li>
            </ul>

            <p>
              This approach ensured that the platform addressed the actual needs and pain points of all stakeholders in
              the real estate ecosystem, resulting in a more intuitive and effective user experience.
            </p>

            <h2>Technical Architecture</h2>
            <p>NestHub was built on a modern, scalable architecture that included:</p>
            <ul>
              <li>React and Next.js for the frontend, providing a fast and responsive user interface</li>
              <li>Node.js backend with RESTful APIs for seamless data exchange</li>
              <li>MongoDB for flexible data storage and quick iteration</li>
              <li>AWS infrastructure for reliable hosting and scaling</li>
              <li>Google Maps API integration for location-based features</li>
              <li>Three.js for 3D property visualizations</li>
            </ul>

            <p>
              This technical stack allowed us to rapidly develop and iterate on features while maintaining high
              performance and reliability, even as the platform scaled to handle thousands of property listings and
              users.
            </p>
          </div>
        </div>

        <div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm mb-6">
            <Image
              src="/nesthub-images/nesthub-homepage.png"
              alt="NestHub Logo and Homepage"
              width={300}
              height={200}
              className="mx-auto"
            />
          </div>

          <div className="space-y-6 bg-muted/50 p-6 rounded-lg">
            <h3 className="text-xl font-bold">Project Details</h3>

            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-2">Client</h4>
              <p>NestHub Africa Limited</p>
            </div>

            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-2">Role</h4>
              <p>Lead Developer & Product Strategist</p>
            </div>

            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-2">Timeline</h4>
              <p>May - December 2021</p>
            </div>

            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-2">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Node.js",
                  "Express",
                  "MongoDB",
                  "React",
                  "Real Estate",
                  "Payment APIs",
                  "Geolocation",
                  "Document Verification",
                  "Responsive Design",
                ].map((tech) => (
                  <Badge key={tech} variant="outline">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 bg-muted/50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Key Achievements</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="bg-primary/20 text-primary rounded-full p-1 mr-2 mt-0.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-check"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </span>
                <span>
                  Developed a scalable platform connecting property developers with potential buyers across Africa
                </span>
              </li>
              <li className="flex items-start">
                <span className="bg-primary/20 text-primary rounded-full p-1 mr-2 mt-0.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-check"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </span>
                <span>Implemented secure document verification system for property ownership</span>
              </li>
              <li className="flex items-start">
                <span className="bg-primary/20 text-primary rounded-full p-1 mr-2 mt-0.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-check"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </span>
                <span>Created an affiliate network for real estate agents to participate in the ecosystem</span>
              </li>
              <li className="flex items-start">
                <span className="bg-primary/20 text-primary rounded-full p-1 mr-2 mt-0.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-check"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </span>
                <span>Designed and implemented a responsive UI that works across all devices</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Platform Architecture</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>User Management System</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>Authentication and authorization for different user types</li>
                <li>Profile management for property seekers, owners, and affiliates</li>
                <li>Document verification workflow for identity confirmation</li>
                <li>User preferences and saved searches</li>
                <li>Notification system for property updates and communications</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Property Management System</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>Comprehensive property listing database with metadata</li>
                <li>Advanced search and filtering capabilities</li>
                <li>Property verification and quality control processes</li>
                <li>Media management for property photos and videos</li>
                <li>Geolocation services for property mapping</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Transaction System</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>Secure payment processing for property transactions</li>
                <li>Escrow services for property purchases</li>
                <li>Rental payment tracking and management</li>
                <li>Commission calculation for affiliate transactions</li>
                <li>Transaction history and reporting</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Inspection Management</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>Scheduling system for property viewings</li>
                <li>Access control for property inspections</li>
                <li>Feedback collection after property viewings</li>
                <li>Coordination between property owners, seekers, and affiliates</li>
                <li>Virtual tour options for remote viewing</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Future Development Roadmap</h2>
        <div className="relative">
          <div className="absolute left-4 h-full w-0.5 bg-muted-foreground/20"></div>
          <div className="space-y-8 relative pl-10">
            <div>
              <div className="absolute -left-1 mt-1.5 h-6 w-6 rounded-full border border-muted-foreground/20 bg-background flex items-center justify-center">
                <div className="h-3 w-3 rounded-full bg-primary"></div>
              </div>
              <h3 className="text-xl font-semibold">Phase 1: Core Platform (Completed)</h3>
              <p className="text-muted-foreground mt-2">
                Development of the basic property marketplace with listing, search, and user management capabilities.
              </p>
            </div>

            <div>
              <div className="absolute -left-1 mt-1.5 h-6 w-6 rounded-full border border-muted-foreground/20 bg-background flex items-center justify-center">
                <div className="h-3 w-3 rounded-full bg-primary"></div>
              </div>
              <h3 className="text-xl font-semibold">Phase 2: Expansion to Key African Markets</h3>
              <p className="text-muted-foreground mt-2">
                Localization and adaptation of the platform for Nigeria, Ghana, Kenya, and South Africa with
                region-specific features.
              </p>
            </div>

            <div>
              <div className="absolute -left-1 mt-1.5 h-6 w-6 rounded-full border border-muted-foreground/20 bg-background flex items-center justify-center">
                <div className="h-3 w-3 rounded-full bg-muted"></div>
              </div>
              <h3 className="text-xl font-semibold">Phase 3: Advanced Features</h3>
              <p className="text-muted-foreground mt-2">
                Implementation of AI-powered property recommendations, virtual reality tours, and blockchain-based
                property verification.
              </p>
            </div>

            <div>
              <div className="absolute -left-1 mt-1.5 h-6 w-6 rounded-full border border-muted-foreground/20 bg-background flex items-center justify-center">
                <div className="h-3 w-3 rounded-full bg-muted"></div>
              </div>
              <h3 className="text-xl font-semibold">Phase 4: Financial Services Integration</h3>
              <p className="text-muted-foreground mt-2">
                Addition of mortgage calculators, financing options, and partnerships with financial institutions to
                facilitate property purchases.
              </p>
            </div>

            <div>
              <div className="absolute -left-1 mt-1.5 h-6 w-6 rounded-full border border-muted-foreground/20 bg-background flex items-center justify-center">
                <div className="h-3 w-3 rounded-full bg-muted"></div>
              </div>
              <h3 className="text-xl font-semibold">Phase 5: Pan-African Expansion</h3>
              <p className="text-muted-foreground mt-2">
                Scaling the platform to cover all major African markets with comprehensive localization and regional
                partnerships.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
