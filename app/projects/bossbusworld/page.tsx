import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { DesktopScreenshotGallery } from "@/components/desktop-screenshot-gallery"
import { MobileAppShowcase } from "@/components/mobile-app-showcase"

export const metadata: Metadata = {
  title: "Bossbusworld | Developer Platform",
  description:
    "A platform for third-party developers in the travel industry with API integrations for airlines and fleet management systems",
}

export default function BossbusWorldPage() {
  // Dashboard and admin screenshots
  const dashboardImages = [
    {
      src: "/bossbus-images/desktop/dashboard-main.png",
      alt: "Bossbus Main Dashboard",
      description: "Main dashboard showing key metrics and transaction overview",
    },
    {
      src: "/bossbus-images/desktop/dashboard-drivers.png",
      alt: "Driver Management Interface",
      description: "Interface for adding and managing driver information",
    },
    {
      src: "/bossbus-images/desktop/dashboard-vehicles.png",
      alt: "Vehicle Management Interface",
      description: "Dashboard for managing the fleet of vehicles with availability status",
    },
    {
      src: "/bossbus-images/desktop/dashboard-customers.png",
      alt: "Customer Management Interface",
      description: "Interface for managing customer profiles and information",
    },
    {
      src: "/bossbus-images/desktop/dashboard-vendor.png",
      alt: "Vendor Dashboard",
      description: "Vendor view showing drivers, ratings, and trip statistics",
    },
    {
      src: "/bossbus-images/desktop/dashboard-airline-partners.png",
      alt: "Airline Partners Management",
      description: "Interface for managing airline partnerships and integrations",
    },
    {
      src: "/bossbus-images/desktop/dashboard-service-overview.png",
      alt: "Service Overview Dashboard",
      description: "Analytics dashboard showing service performance and metrics",
    },
  ]

  // Premium service web interfaces
  const premiumServiceImages = [
    {
      src: "/bossbus-images/desktop/premium-air-jets.png",
      alt: "Premium Air - Private Jets",
      description: "Web interface for booking private jets with filtering options",
    },
    {
      src: "/bossbus-images/desktop/premium-air-helicopters.png",
      alt: "Premium Air - Helicopters",
      description: "Web interface for booking helicopters with filtering options",
    },
    {
      src: "/bossbus-images/desktop/premium-sea-speedboats.png",
      alt: "Premium Sea - Speed Boats",
      description: "Web interface for booking speed boats with filtering options",
    },
    {
      src: "/bossbus-images/desktop/premium-sea-jetskis.png",
      alt: "Premium Sea - Jet Skis",
      description: "Web interface for booking jet skis with filtering options",
    },
    {
      src: "/bossbus-images/desktop/premium-land-luxury.png",
      alt: "Premium Land - Luxury Cars",
      description: "Web interface for booking luxury cars with filtering options",
    },
    {
      src: "/bossbus-images/desktop/premium-sea-yachts.png",
      alt: "Premium Sea - Yachts",
      description: "Web interface for booking yachts with filtering options",
    },
    {
      src: "/bossbus-images/desktop/ride-charter-landing.png",
      alt: "Ride Charter Landing Pages",
      description: "Multiple landing pages for different premium transportation services",
    },
  ]

  // Partner integration images
  const integrationImages = [
    {
      src: "/bossbus-images/desktop/integration-ride-selection.png",
      alt: "Third-Party Integration - Ride Selection",
      description: "Partner integration showing vehicle selection and booking interface",
    },
    {
      src: "/bossbus-images/desktop/integration-booking-summary.png",
      alt: "Third-Party Integration - Booking Summary",
      description: "Partner integration showing ride details and payment summary",
    },
    {
      src: "/bossbus-images/desktop/jet-pooling-service.png",
      alt: "Premium Jet Pooling Service",
      description: "Specialized service for booking shared private jet flights",
    },
    {
      src: "/bossbus-images/desktop/jet-pooling-booking.png",
      alt: "Jet Pooling Booking Modal",
      description: "Modal for selecting seats on a private jet flight",
    },
    {
      src: "/bossbus-images/desktop/jet-details.png",
      alt: "Jet Details Page",
      description: "Detailed information about a private jet with specifications",
    },
  ]

  // Mobile app screenshots
  const mobileAppScreenshots = [
    {
      src: "/bossbus-images/mobile/home-screen.png",
      alt: "Bossbusworld Mobile Home Screen",
      description: "Personalized home screen with service categories and popular options",
      category: "core",
    },
    {
      src: "/bossbus-images/mobile/vehicle-details.png",
      alt: "Vehicle Details Screen",
      description: "Detailed view of a vehicle with features and booking option",
      category: "ride",
    },
    {
      src: "/bossbus-images/mobile/all-vehicles.png",
      alt: "All Vehicles Screen",
      description: "Grid view of available vehicles with search functionality",
      category: "ride",
    },
    {
      src: "/bossbus-images/mobile/ride-unavailable.png",
      alt: "Ride Not Available Screen",
      description: "Error screen with alternative vehicle recommendations",
      category: "ride",
    },
    {
      src: "/bossbus-images/mobile/interstate-booking.png",
      alt: "Interstate Trip Booking",
      description: "Form for booking interstate trips with additional service options",
      category: "ride",
    },
    {
      src: "/bossbus-images/mobile/ride-requests.png",
      alt: "Ride Requests Screen",
      description: "List of ride requests with customer details and action buttons",
      category: "ride",
    },
    {
      src: "/bossbus-images/mobile/trip-summary.png",
      alt: "Trip Summary Screen",
      description: "Summary of trip details before proceeding with booking",
      category: "ride",
    },
    {
      src: "/bossbus-images/mobile/boat-charter.png",
      alt: "Boat Charter Screen",
      description: "Boat charter page with top destinations and available options",
      category: "boat",
    },
    {
      src: "/bossbus-images/mobile/boat-details.png",
      alt: "Boat Details Screen",
      description: "Detailed view of a boat with features and booking option",
      category: "boat",
    },
  ]

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
          src="/bossbus-images/bossbus-technologies-homepage.jpeg"
          alt="Bossbusworld platform showing the Bossbus Technologies homepage with luxury ride services"
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

            <h2>Platform Strategy</h2>
            <p>
              As the Technical Product Manager for Developer Experience, I developed a comprehensive platform strategy
              that focused on:
            </p>
            <ul>
              <li>Creating a seamless developer onboarding experience</li>
              <li>Building robust API documentation and resources</li>
              <li>Implementing a secure authentication system</li>
              <li>Designing a scalable architecture for high transaction volumes</li>
              <li>Establishing clear pricing and value propositions</li>
            </ul>

            <p>
              The platform was designed to address the fragmentation in the travel industry by providing standardized
              APIs that could connect various service providers, making it easier for developers to create comprehensive
              travel solutions.
            </p>

            <h2>Developer Experience</h2>
            <p>A key focus of my role was ensuring an exceptional developer experience. This included:</p>
            <ul>
              <li>Creating interactive API documentation with Swagger/OpenAPI</li>
              <li>Developing comprehensive code samples in multiple programming languages</li>
              <li>Building a sandbox environment for testing</li>
              <li>Implementing a developer support system</li>
              <li>Gathering and incorporating developer feedback</li>
            </ul>

            <p>
              By prioritizing developer experience, we were able to significantly reduce the time it took for partners
              to integrate with our platform, leading to faster adoption and fewer support tickets.
            </p>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Platform Screenshots</h2>
            <Tabs defaultValue="dashboard" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="dashboard">Admin Dashboard</TabsTrigger>
                <TabsTrigger value="premium">Premium Services</TabsTrigger>
                <TabsTrigger value="integration">Partner Integrations</TabsTrigger>
                <TabsTrigger value="mobile">Mobile App</TabsTrigger>
              </TabsList>
              <TabsContent value="dashboard" className="mt-6">
                <DesktopScreenshotGallery images={dashboardImages} />
              </TabsContent>
              <TabsContent value="premium" className="mt-6">
                <DesktopScreenshotGallery images={premiumServiceImages} />
              </TabsContent>
              <TabsContent value="integration" className="mt-6">
                <DesktopScreenshotGallery images={integrationImages} />
              </TabsContent>
              <TabsContent value="mobile" className="mt-6">
                <MobileAppShowcase screenshots={mobileAppScreenshots} />
              </TabsContent>
            </Tabs>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Product Ecosystem</h2>
            <p className="text-muted-foreground mb-6">
              Bossbusworld offered a comprehensive suite of products and services designed to meet the needs of various
              customer segments. As Technical Product Manager, I worked across this ecosystem to ensure seamless
              integration and consistent developer experience.
            </p>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg font-medium">Bossbus Premium</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2">
                    <p className="text-muted-foreground">
                      A premium service targeting high-net-worth individuals (HNIs) with exclusive ride-hailing
                      services, personalized customer support, and luxury vehicle options.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <div className="bg-muted rounded-md p-4">
                        <h4 className="font-medium mb-2">API Integration Points</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Luxury vehicle availability endpoints</li>
                          <li>VIP customer profile management</li>
                          <li>Priority booking system</li>
                        </ul>
                      </div>
                      <div className="bg-muted rounded-md p-4">
                        <h4 className="font-medium mb-2">Developer Resources</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Premium service SDK</li>
                          <li>White-label integration guides</li>
                          <li>Concierge service API documentation</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg font-medium">Bossbus Enterprise</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2">
                    <p className="text-muted-foreground">
                      A suite of services tailored for corporate clients and enterprises with corporate ride-hailing
                      solutions, industry-specific services, and scalable enterprise packages.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <div className="bg-muted rounded-md p-4">
                        <h4 className="font-medium mb-2">API Integration Points</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Corporate account management</li>
                          <li>Bulk booking endpoints</li>
                          <li>Employee transportation management</li>
                          <li>Expense reporting integration</li>
                        </ul>
                      </div>
                      <div className="bg-muted rounded-md p-4">
                        <h4 className="font-medium mb-2">Developer Resources</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Enterprise integration playbooks</li>
                          <li>Corporate billing API documentation</li>
                          <li>Fleet management system connectors</li>
                          <li>Custom reporting API</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg font-medium">Ride-Hailing Services</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2">
                    <p className="text-muted-foreground">
                      Core ride-hailing services for general users with affordable and reliable transportation, wide
                      coverage area, and user-friendly app interface.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <div className="bg-muted rounded-md p-4">
                        <h4 className="font-medium mb-2">API Integration Points</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Ride booking and management</li>
                          <li>Fare calculation and estimation</li>
                          <li>Driver matching algorithms</li>
                          <li>Real-time ride tracking</li>
                        </ul>
                      </div>
                      <div className="bg-muted rounded-md p-4">
                        <h4 className="font-medium mb-2">Developer Resources</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Core API documentation</li>
                          <li>Mobile SDK for iOS and Android</li>
                          <li>Webhook integration guides</li>
                          <li>Geolocation service integration</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-lg font-medium">Dashboard Features</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2">
                    <p className="text-muted-foreground">
                      A centralized dashboard for managing Bossbus services and analytics with real-time data
                      visualization, user and driver management tools, and performance tracking.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <div className="bg-muted rounded-md p-4">
                        <h4 className="font-medium mb-2">API Integration Points</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Analytics data endpoints</li>
                          <li>User management APIs</li>
                          <li>Performance metrics collection</li>
                          <li>Reporting and export functionality</li>
                        </ul>
                      </div>
                      <div className="bg-muted rounded-md p-4">
                        <h4 className="font-medium mb-2">Developer Resources</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Dashboard widget SDK</li>
                          <li>Data visualization components</li>
                          <li>Custom reporting API documentation</li>
                          <li>White-label dashboard solutions</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-lg font-medium">3rd Party Integration API</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2">
                    <p className="text-muted-foreground">
                      A comprehensive API platform for third-party developers to integrate Bossbus services into their
                      applications with standardized endpoints, authentication, and documentation.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <div className="bg-muted rounded-md p-4">
                        <h4 className="font-medium mb-2">API Features</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>RESTful API architecture</li>
                          <li>OAuth 2.0 authentication</li>
                          <li>Rate limiting and quotas</li>
                          <li>Webhook notifications</li>
                          <li>Sandbox testing environment</li>
                        </ul>
                      </div>
                      <div className="bg-muted rounded-md p-4">
                        <h4 className="font-medium mb-2">Developer Tools</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Interactive API documentation</li>
                          <li>Client libraries for multiple languages</li>
                          <li>Sample applications and code snippets</li>
                          <li>Developer forum and support</li>
                          <li>API status dashboard</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger className="text-lg font-medium">Corporate Services</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2">
                    <p className="text-muted-foreground">
                      Specialized transportation solutions for businesses with employee shuttle services, corporate
                      event transportation, and business travel management.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <div className="bg-muted rounded-md p-4">
                        <h4 className="font-medium mb-2">Service Offerings</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Employee shuttle programs</li>
                          <li>Corporate event transportation</li>
                          <li>Business travel management</li>
                          <li>Airport transfer services</li>
                          <li>Corporate account management</li>
                        </ul>
                      </div>
                      <div className="bg-muted rounded-md p-4">
                        <h4 className="font-medium mb-2">Integration Features</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Corporate booking portal</li>
                          <li>Expense management integration</li>
                          <li>Employee transportation tracking</li>
                          <li>Custom reporting and analytics</li>
                          <li>Centralized billing system</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Live Websites</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-medium mb-3">Bossbus Technologies</h3>
                <div className="relative aspect-video overflow-hidden rounded-lg mb-3">
                  <Image
                    src="/bossbus-images/bossbus-technologies-homepage.jpeg"
                    alt="Bossbus Technologies website homepage"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-sm text-muted-foreground">
                  The main consumer-facing website with the "Pay small, ride big!" campaign
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-3">Bossbus Charter Services</h3>
                <div className="relative aspect-video overflow-hidden rounded-lg mb-3">
                  <Image
                    src="/bossbus-images/bossbus-global-charter.jpeg"
                    alt="Bossbus Charter Services booking interface"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-sm text-muted-foreground">
                  The charter services platform offering ride, boat, and air transportation options
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden md:block">
          <div className="sticky top-20">
            <div className="mb-8 border-b pb-4">
              <h3 className="text-lg font-semibold mb-2">Links</h3>
              <ul className="text-sm space-y-3">
                <li>
                  <Link
                    href="https://bossbus-technologies.web.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="underline underline-offset-2"
                  >
                    Bossbusworld Website
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://bossbus-global.web.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="underline underline-offset-2"
                  >
                    Bossbus Charter Services
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Technologies Used</h3>
              <ul className="text-sm space-y-3">
                <li>Next.js</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
                <li>Lucide React</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
