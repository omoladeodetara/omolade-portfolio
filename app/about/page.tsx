import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Globe } from "lucide-react"
import { LogoCarousel } from "@/components/logo-carousel"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tighter mb-4">About the Workshop</h1>
        <p className="text-muted-foreground text-lg">
          Learn more about the LOGIC/LSIC/GEGSLA Virtual Workshop and our mission to advance lunar exploration through
          collaboration.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div className="order-2 lg:order-1">
          <h2 className="text-3xl font-bold tracking-tighter mb-6">Our Mission</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              The LOGIC/LSIC/GEGSLA Virtual Workshop brings together researchers, industry professionals, and space
              agencies to address key challenges in lunar exploration and collaboration.
            </p>
            <p>
              Our mission is to foster international cooperation, develop standardized lunar activities databases,
              improve interoperability between systems and missions, and establish common standards for lunar
              operations.
            </p>
            <p>
              Through this collaborative approach, we aim to accelerate progress in lunar exploration and create a
              sustainable framework for future missions and activities on the Moon.
            </p>
          </div>
        </div>
        <div className="relative h-[400px] rounded-lg overflow-hidden order-1 lg:order-2">
          <Image src="/images/lunar-mission.jpg" alt="Lunar Mission" fill className="object-cover" />
        </div>
      </div>

      {/* Partner Organizations */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold tracking-tighter mb-8 text-center">Partners</h2>
        <LogoCarousel />
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold tracking-tighter mb-8 text-center">Organizers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="rounded-full bg-primary/20 p-2">
                  <Globe className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-bold text-lg">LOGIC</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                The Lunar Operating Guidelines for Infrastructure Consortium (LOGIC) brings together the international
                and commercial lunar community around adopting, adapting, and potentially authoring interoperability
                standards, ensuring that lunar infrastructure systems can function within a cohesive ecosystem.
              </p>
              <p className="text-muted-foreground mb-4">
                Sponsored by the Defense Advanced Research Projects Agency (DARPA) and managed by Johns Hopkins Applied
                Physics Laboratory (APL), LOGIC's mission is to become the trusted, independent focal point for
                architecting interoperability and facilitating information sharing in support of a commercial,
                international lunar economy.
              </p>
              <Button variant="outline" size="sm" asChild className="mt-2">
                <Link href="https://logic.jhuapl.edu/" target="_blank" rel="noopener noreferrer">
                  <Globe className="mr-2 h-4 w-4" />
                  Visit LOGIC Website
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="rounded-full bg-primary/20 p-2">
                  <Globe className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-bold text-lg">LSIC</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                The Lunar Surface Innovation Consortium (LSIC) is a collaborative community of lunar experts from
                academia, industry, non-profits, and government dedicated to advancing technologies needed for
                successful lunar surface exploration.
              </p>
              <p className="text-muted-foreground mb-4">
                Managed by the Johns Hopkins Applied Physics Laboratory (APL), LSIC focuses on key technology areas
                including dust mitigation, excavation and construction, extreme environments, and communications and
                navigation systems to enable a sustainable human and robotic presence on the lunar surface.
              </p>
              <Button variant="outline" size="sm" asChild className="mt-2">
                <Link href="https://lsic.jhuapl.edu/" target="_blank" rel="noopener noreferrer">
                  <Globe className="mr-2 h-4 w-4" />
                  Visit LSIC Website
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="rounded-full bg-primary/20 p-2">
                  <Globe className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-bold text-lg">GEGSLA</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                The Global Expert Group on Sustainable Lunar Activities (GEGSLA) is an international, interdisciplinary,
                and independent platform working to develop recommendations for lunar activities coordination and
                information-sharing.
              </p>
              <p className="text-muted-foreground mb-4">
                Initiated by the Moon Village Association (MVA) in 2020, GEGSLA brings together experts from diverse
                backgrounds including Space Agencies, Government, Industry, International Organizations, NGOs, and
                Universities to address challenges related to sustainable lunar exploration and utilization, with a
                focus on international cooperation and governance frameworks.
              </p>
              <Button variant="outline" size="sm" asChild className="mt-2">
                <Link href="https://moonvillageassociation.org/gegsla/about/" target="_blank" rel="noopener noreferrer">
                  <Globe className="mr-2 h-4 w-4" />
                  Visit GEGSLA Website
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold tracking-tighter mb-8 text-center">Workshop Focus Areas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Lunar Activities Database",
              description:
                "Developing standardized databases to track and coordinate lunar activities across multiple missions and organizations.",
            },
            {
              title: "Interoperability",
              description:
                "Ensuring systems and equipment from different missions can work together seamlessly on the lunar surface.",
            },
            {
              title: "International Cooperation",
              description:
                "Fostering collaboration between space agencies, private companies, and research institutions worldwide.",
            },
            {
              title: "Standards Development",
              description:
                "Creating common standards and protocols for lunar operations, data exchange, and resource utilization.",
            },
          ].map((area, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="rounded-full bg-primary/20 p-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg">{area.title}</h3>
                </div>
                <p className="text-muted-foreground">{area.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold tracking-tighter mb-8 text-center">Committee</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              id: 1,
              name: "Timothy Cichan",
              organization: "Lockheed Martin",
              image: "/images/organizer-timothy.jpg",
            },
            {
              id: 2,
              name: "Wesley Fuhrman",
              organization: "Johns Hopkins Applied Physics Laboratory",
              image: "/images/organizer-wesley.jpg",
            },
            {
              id: 3,
              name: "Anna Shin",
              organization: "Johns Hopkins Applied Physics Laboratory",
              image: "/images/organizer-anna.jpg",
            },
            {
              id: 4,
              name: "Marchel Holle",
              organization: "ispace",
              image: "/images/speaker-hiroshi.jpg",
            },
            {
              id: 5,
              name: "Shreya Santra",
              organization: "Tohoku University",
              image: "/images/speaker-krystal.jpg",
            },
            {
              id: 6,
              name: "Bernd Hoefer",
              organization: "A9C Capital",
              image: "/images/organizer-bernd.jpg",
            },
            {
              id: 7,
              name: "Ekaterina Seltikova",
              organization: "Advanced Space Concepts and Technologies",
              image: "/images/organizer-ekaterina.jpg",
            },
            {
              id: 8,
              name: "Omolade Odetara",
              organization: "GEGSLA",
              image: "/images/organizer-omolade.jpg",
            },
            {
              id: 9,
              name: "Hasan Galal",
              organization: "Egyptian Space Agency",
              image: "/images/organizer-hasan.jpg",
            },
            {
              id: 10,
              name: "Daniel Meidenbauer",
              organization: "Johns Hopkins Applied Physics Laboratory",
              image: "/images/organizer-daniel.jpg",
            },
            {
              id: 11,
              name: "Jamie Porter",
              organization: "Johns Hopkins Applied Physics Laboratory",
              image: "/images/organizer-jamie.jpg",
            },
            {
              id: 12,
              name: "Kristin Jaburek",
              organization: "Johns Hopkins Applied Physics Laboratory",
              image: "/images/organizer-kristin.jpg",
            },
          ].map((organizer) => (
            <Card key={organizer.id} className="overflow-hidden">
              <div className="relative h-64">
                <Image src={organizer.image || "/placeholder.svg"} alt={organizer.name} fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-1">{organizer.name}</h3>
                <p className="text-muted-foreground mb-1">{organizer.organization}</p>
                <Button variant="outline" size="sm" asChild>
                  <Link href={`/committee/${organizer.id}`}>View Profile</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="bg-muted rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Join Us for This Important Event</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
          Registration is free and open to professionals in space exploration, database management, standards
          development, and related fields.
        </p>
        <Button size="lg" asChild>
          <Link href="/registration">Register Now</Link>
        </Button>
      </div>
    </div>
  )
}
