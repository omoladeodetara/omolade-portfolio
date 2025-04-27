import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { AlertCircle, Clock } from "lucide-react"

// Project data - in a real app, fetch from API/CMS
const projects = [
  {
    id: 1,
    title: "ASH B",
    description:
      "A comprehensive healthcare platform connecting patients with doctors through mobile/web applications with integrated telemedicine, appointment scheduling, and secure medical record management.",
    image: "/ash-b-main-thumbnail.png",
    tags: ["Healthcare", "Telemedicine", "HIPAA/GDPR", "FHIR", "Mobile Apps"],
    category: "Professional Project",
    period: "January 2023 - Present",
    slug: "ash-b",
    // Removed link property
  },
  {
    id: 2,
    title: "Moneybase",
    description:
      "A product management case study on implementing fractional share trading for a modern fintech platform.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/moneybase-IwSJUYE6IIeTZwUc9ISx9LJbJQaUS1.png",
    tags: ["PM Case Study", "Fintech", "Fractional Shares", "Product Management"],
    category: "Professional Project",
    period: "September 2022",
    slug: "moneybase",
    // No link property
  },
  {
    id: 3,
    title: "Bossbusworld",
    description:
      "A platform for third-party developers in the travel industry with API integrations for airlines and fleet management systems.",
    image: "/data-driven-insights.png",
    tags: ["Node.js", "Express", "MongoDB", "REST APIs", "OAuth 2.0"],
    category: "Professional Project",
    period: "January 2021 - November 2022",
    slug: "bossbusworld",
    link: "https://bossbus-technologies.web.app/",
  },
  {
    id: 4,
    title: "StellarXplora",
    description:
      "A venture studio focused on building, funding, and scaling the best space startups with a focus on the African market.",
    image: "/stellarxplora-thumbnail.png",
    tags: ["Space Technology", "Venture Studio", "Earth Observation", "African Market"],
    category: "Professional Project",
    period: "2022 - Present",
    slug: "stellarxplora",
    link: "https://stellarxplora.decilehub.com/",
    status: "active",
  },
  {
    id: 5,
    title: "Blockchain Africa Summit",
    description:
      "A planned hybrid blockchain conference and exhibition focused on blockchain, crypto, metaverse, and Web 3.0 technologies.",
    image: "/blockchain-summit.png",
    tags: ["Blockchain", "Web3", "Event Planning", "Project Management"],
    category: "Professional Project",
    period: "Planned for April 2022",
    slug: "blockchain-africa-summit",
    status: "postponed",
  },
  {
    id: 6,
    title: "The Space Convention",
    description:
      "A global space industry event bringing together delegates from all sectors that intersect with the space industry.",
    image: "/space-exploration-overview.png",
    tags: ["Space Industry", "Event Planning", "International Collaboration"],
    category: "Professional Project",
    period: "Planned (Postponed)",
    slug: "space-convention",
    status: "postponed",
  },
  {
    id: 7,
    title: "AfricaNFTArt",
    description:
      "A marketplace for African artists to showcase, sell their work as NFTs, and earn royalties on every resale.",
    image: "/vibrant-african-nft-gallery.png",
    tags: ["Blockchain", "NFT", "Digital Art", "Marketplace", "Product Strategy"],
    category: "Professional Project",
    period: "July 2021 - December 2021",
    slug: "africanftart",
    status: "early-stage",
  },
  {
    id: 8,
    title: "Harvest Credit",
    description:
      "An API platform connecting credit facilities to merchants, allowing users to pay with loans directly at checkout.",
    image: "/financial-overview-dashboard.png",
    tags: ["Fintech", "API Development", "Credit Systems", "E-commerce"],
    category: "Professional Project",
    period: "2020",
    slug: "harvest-credit",
    status: "prototype",
  },
  {
    id: 9,
    title: "MoniZoom",
    description: "A borderless banking platform that accelerates global reach with reliable financial services.",
    image: "/financial-overview-dashboard.png",
    tags: ["React", "Next.js", "Tailwind CSS", "Financial APIs"],
    category: "Side Project",
    period: "Mar - Jun 2023",
    slug: "monizoom",
    link: "https://monizoom.vercel.app/",
  },
  {
    id: 10,
    title: "NestHub",
    description: "A platform for connecting property developers with potential homeowners and investors.",
    image: "/modern-real-estate-interface.png",
    tags: ["Node.js", "Express", "MongoDB", "React"],
    category: "Side Project",
    period: "May - Dec 2021",
    slug: "nesthub",
  },
  {
    id: 11,
    title: "Founders and Innovators",
    description: "A community platform for entrepreneurs and innovators to connect and collaborate on projects.",
    image: "/collaborative-growth.png",
    tags: ["Product Strategy", "Community Building"],
    category: "Side Project",
    period: "Jun 2019 - Dec 2020",
    slug: "founders-and-innovators",
    link: "https://www.crunchbase.com/organization/founders-and-innovators",
  },
  {
    id: 12,
    title: "SpaceEd Explorer",
    description: "An interactive space exploration educational tool for students and space enthusiasts.",
    image: "/space-exploration-overview.png",
    tags: ["React", "Three.js", "WebGL", "Astronomy APIs"],
    category: "Side Project",
    period: "Aug 2017 - Mar 2018",
    slug: "space-ed-explorer",
  },
  {
    id: 13,
    title: "Zyleme",
    description: "A learning management system focused on skill development for tech professionals.",
    image: "/digital-classroom-dashboard.png",
    tags: ["Vue.js", "Firebase", "EdTech"],
    category: "Side Project",
    period: "Jan - Jul 2020",
    slug: "zyleme",
  },
  {
    id: 14,
    title: "TalaHive",
    description:
      "A specialized workspace and community hub for visual artists, providing studios for painting, graphics, animation, sculpture, ceramics, fashion, and textile arts.",
    image: "/african-talent-network.png",
    tags: ["Visual Arts", "Studio Space", "Artist Community", "Workspace"],
    category: "Side Project",
    period: "Sep 2018 - Feb 2019",
    slug: "talahive",
    videoUrl: "https://youtu.be/92aq_qREv-A",
  },
]

interface ProjectGridProps {
  filter?: string
}

export function ProjectGrid({ filter = "all" }: ProjectGridProps) {
  // Filter projects based on the active filter
  const filteredProjects = projects.filter((project) => {
    if (filter === "all") return true
    if (filter === "professional") return project.category === "Professional Project"
    if (filter === "side") return project.category === "Side Project"
    return true
  })

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
      {filteredProjects.map((project) => (
        <Card key={project.id} className="overflow-hidden">
          <div className="aspect-video w-full overflow-hidden relative">
            <img
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
            />
            {project.status === "postponed" && (
              <div className="absolute top-2 right-2 bg-amber-500 text-white text-xs px-2 py-1 rounded-full flex items-center">
                <AlertCircle className="h-3 w-3 mr-1" />
                Planned
              </div>
            )}
            {project.status === "planning" && (
              <div className="absolute top-2 right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full flex items-center">
                <Clock className="h-3 w-3 mr-1" />
                In Planning
              </div>
            )}
            {project.status === "active" && (
              <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full flex items-center">
                <AlertCircle className="h-3 w-3 mr-1" />
                Active
              </div>
            )}
          </div>
          <CardContent className="p-4">
            <h3 className="text-xl font-bold">{project.title}</h3>
            <p className="text-sm text-muted-foreground mt-2">{project.description}</p>
            {project.period && <p className="text-xs text-muted-foreground mt-1">{project.period}</p>}
            <div className="flex flex-wrap gap-2 mt-4">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
            <div className="mt-4 flex gap-2">
              <Button asChild variant="outline" className="flex-1">
                <Link href={`/projects/${project.slug}`}>View Details</Link>
              </Button>
              {project.link && (
                <Button asChild variant="default" className="flex-1">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    Visit Site
                  </a>
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
