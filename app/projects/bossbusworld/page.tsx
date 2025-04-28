import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ProjectDetails } from "@/components/project-details"
import { RelatedProjects } from "@/components/related-projects"
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
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dashboard-tYIWbHBp1VtYZCgUisoYmBiO6FnIlv.png",
      alt: "Bossbus Main Dashboard",
      description: "Main dashboard showing key metrics and transaction overview",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dashboard%20drivers-Xnwi74HPVLYVb1QeW7vgPWDv1Uu527.png",
      alt: "Driver Management Interface",
      description: "Interface for adding and managing driver information",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dashboard%20car-KQgajxp5sO5SRYss267rFFxvTloeL5.png",
      alt: "Vehicle Management Interface",
      description: "Dashboard for managing the fleet of vehicles with availability status",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dashboard%20Customers%20Delete-PRUnNzkNzm6iLsF2x50xkZppwXNxtB.png",
      alt: "Customer Management Interface",
      description: "Interface for managing customer profiles and information",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dashboard%20-%20Vendor-KOmuaEC7WmEy4P5O3QmMoyJ2FS8j27.png",
      alt: "Vendor Dashboard",
      description: "Vendor view showing drivers, ratings, and trip statistics",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dashboard%20Customers%20Grid%20View-8MWlPSLqeK6CpFGGwZvoD1hhO9Eq0k.png",
      alt: "Airline Partners Management",
      description: "Interface for managing airline partnerships and integrations",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dashboard%20add-sgUXt6g6hA2geEvLUDlZ3mmrRw598H.png",
      alt: "Service Overview Dashboard",
      description: "Analytics dashboard showing service performance and metrics",
    },
  ]

  // Premium service web interfaces
  const premiumServiceImages = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Premium%20Air-SmccFTOhINM02SkMD8t6C7sZ9pdWvm.png",
      alt: "Premium Air - Private Jets",
      description: "Web interface for booking private jets with filtering options",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Premium%20Air-1-kupC86GJR80RB2M1IjlMD4QonFxPKf.png",
      alt: "Premium Air - Helicopters",
      description: "Web interface for booking helicopters with filtering options",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Premium%20Air-2-j0k2PcRn9TB3dZFLx4kdvFROrdxwKk.png",
      alt: "Premium Sea - Speed Boats",
      description: "Web interface for booking speed boats with filtering options",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Premium%20Air-3-U1HVjb4v3ZJy8gxE9pyZygE7eOnUmU.png",
      alt: "Premium Sea - Jet Skis",
      description: "Web interface for booking jet skis with filtering options",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Premium%20Air-5-3eIkQaJ0H9DD0avubSZOtdPMJbIT0m.png",
      alt: "Premium Land - Luxury Cars",
      description: "Web interface for booking luxury cars with filtering options",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Premium%20Air-4-pslWV7yXI7orph03r3OBextRObJilq.png",
      alt: "Premium Sea - Yachts",
      description: "Web interface for booking yachts with filtering options",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ride%20charter-aykmvgppRXR3YeZ1vK6HS0NCsdWB0V.png",
      alt: "Ride Charter Landing Pages",
      description: "Multiple landing pages for different premium transportation services",
    },
  ]

  // Partner integration images
  const integrationImages = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3rd%20party%20integration%20product-ZxTe5jhq9FfMpiocrCOPQ8RBZk3ZTL.png",
      alt: "Third-Party Integration - Ride Selection",
      description: "Partner integration showing vehicle selection and booking interface",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3rd%20party%20integration%20summary-ehfFRVIk3VB1pljWM4T274bf5K4ieN.png",
      alt: "Third-Party Integration - Booking Summary",
      description: "Partner integration showing ride details and payment summary",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jet%20Pooling%20Screen-SdFzuRq9xgHCrP7LvkEewcLbUi9vB0.png",
      alt: "Premium Jet Pooling Service",
      description: "Specialized service for booking shared private jet flights",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jet%20Pooling%20Screen-1-oSATmBrUTAFxigzMdo2QKjRwxHwCjK.png",
      alt: "Jet Pooling Booking Modal",
      description: "Modal for selecting seats on a private jet flight",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jet%20Pooling%20Screen-2-abiBjicmO7B1aPsZDae8Uv4zXJQ9Nb.png",
      alt: "Jet Details Page",
      description: "Detailed information about a private jet with specifications",
    },
  ]

  // Mobile app screenshots
  const mobileAppScreenshots = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mobile%20Home%20Screen-lywuSSgQlfR3YkpszNewLWu1fzfjaD.png",
      alt: "Bossbusworld Mobile Home Screen",
      description: "Personalized home screen with service categories and popular options",
      category: "core",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mobile%20car%20land-Xghzupt9Ib7qYJRR82O8WYnzHcoUsW.png",
      alt: "Vehicle Details Screen",
      description: "Detailed view of a vehicle with features and booking option",
      category: "ride",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mobile%20all%20cars-Etw7Nz9GMD238EhACZgbeICwXQwNVW.png",
      alt: "All Vehicles Screen",
      description: "Grid view of available vehicles with search functionality",
      category: "ride",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mobile%20ride%20not%20available-37h6yXpBW6Uq05IpOkDxRC4vzuT9au.png",
      alt: "Ride Not Available Screen",
      description: "Error screen with alternative vehicle recommendations",
      category: "ride",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mobile%20interstate-2pX8H5NbHd4HkDLIJEk98eeQcnK9l1.png",
      alt: "Interstate Trip Booking",
      description: "Form for booking interstate trips with additional service options",
      category: "ride",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mobile%20request-iKeELo7bWXgv9LMWPFuk5PyhXSwtfC.png",
      alt: "Ride Requests Screen",
      description: "List of ride requests with customer details and action buttons",
      category: "ride",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mobile%20trip%20summary-f8kzP45rOZlSbA13UIlQ7Hu2sgUTNb.png",
      alt: "Trip Summary Screen",
      description: "Summary of trip details before proceeding with booking",
      category: "ride",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mobile%20boat%20Page-2se0sfG2ugshQ0doAQjzAPEuSSJTw4.png",
      alt: "Boat Charter Screen",
      description: "Boat charter page with top destinations and available options",
      category: "boat",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mobile%20Boat%20Cruise-sBgUTbfoMyGRU4o5L0AIBvTfPYnpyY.png",
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
                      Supporting resources for developers and content creators with API documentation for integration
                      and content guidelines and templates.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <div className="bg-muted rounded-md p-4">
                        <h4 className="font-medium mb-2">API Integration Points</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>OAuth 2.0 authentication</li>
                          <li>RESTful API endpoints</li>
                          <li>Webhook event subscriptions</li>
                          <li>Rate limiting and quota management</li>
                        </ul>
                      </div>
                      <div className="bg-muted rounded-md p-4">
                        <h4 className="font-medium mb-2">Developer Resources</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Interactive API documentation</li>
                          <li>Code samples in multiple languages</li>
                          <li>Developer sandbox environment</li>
                          <li>Integration testing tools</li>
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
                      Industry-specific services for corporate clients with tailored solutions for various industries
                      and focus on efficiency and scalability.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <div className="bg-muted rounded-md p-4">
                        <h4 className="font-medium mb-2">API Integration Points</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Industry-specific endpoints</li>
                          <li>Custom workflow integration</li>
                          <li>Enterprise resource planning connectors</li>
                          <li>Compliance and reporting tools</li>
                        </ul>
                      </div>
                      <div className="bg-muted rounded-md p-4">
                        <h4 className="font-medium mb-2">Developer Resources</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Industry solution templates</li>
                          <li>Vertical-specific integration guides</li>
                          <li>Compliance documentation</li>
                          <li>Case studies and implementation examples</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="prose dark:prose-invert max-w-none mt-12">
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

            <h3>Mobile Application</h3>
            <p>We developed a comprehensive mobile application that provided:</p>
            <ul>
              <li>Seamless booking experience for various transportation services</li>
              <li>Multi-modal transportation options (cars, boats, jets)</li>
              <li>Real-time availability and pricing information</li>
              <li>Secure payment processing</li>
              <li>User profiles and booking history</li>
              <li>Interstate travel booking with additional service options</li>
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
                    unoptimized
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
                    unoptimized
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
