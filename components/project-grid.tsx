import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

interface Project {
  id: string
  title: string
  description: string
  image: string
  category: string
  date: string
  tags: string[]
  featured?: boolean
  kind: "professional" | "side"
}

const projects: Project[] = [
  {
    id: "section-31",
    title: "Section 31",
    description: "Robotic fleet operations: existing robots, put to work with real teams, from Earth operations to a future in space.",
    image: "/project-cards/section-31.jpg",
    category: "Robotics",
    date: "2026 - Present",
    tags: ["Founder", "Space", "Robotics"],
    featured: true,
    kind: "professional",
  },
  {
    id: "lunar-index",
    title: "Lunar Index",
    description: "Index Stream: a registry for lunar missions, objects and activities, with a map, timeline and conflict alerts.",
    image: "/project-cards/lunar-index.png",
    category: "Space",
    date: "Apr 2025 - Dec 2025",
    tags: ["Product Management", "Registry", "Prototype"],
    featured: true,
    kind: "side",
  },
  {
    id: "tads",
    title: "TADS",
    description: "Real-time satellite telemetry ingestion, threshold anomaly detection and alerting, on AWS Lambda.",
    image: "/project-cards/tads.png",
    category: "Space",
    date: "May 2025",
    tags: ["Telemetry", "Serverless"],
    kind: "side",
  },
  {
    id: "arazzo-visualizer",
    title: "Arazzo Visualizer",
    description: "A React component on npm that lints and draws Arazzo API workflow specs.",
    image: "/project-cards/arazzo-visualizer.png",
    category: "Developer Tools",
    date: "Aug 2025 - Nov 2025",
    tags: ["OpenAPI", "npm"],
    kind: "side",
  },
  {
    id: "interzept",
    title: "Interzept",
    description: "A Chrome extension and npm package to mock, modify and override API calls while you build.",
    image: "/project-cards/interzept.png",
    category: "Developer Tools",
    date: "Dec 2025",
    tags: ["Chrome Extension", "npm"],
    kind: "side",
  },
  {
    id: "aloud",
    title: "Aloud",
    description: "One voice for every AI tool on your machine: Claude Code, Codex, Copilot CLI and browser chats, read aloud live.",
    image: "/project-cards/aloud.png",
    category: "AI Tools",
    date: "Sep 2026 - Oct 2026",
    tags: ["AI Agents", "Python"],
    kind: "side",
  },
  {
    id: "bold-move",
    title: "Bold Move",
    description: "A real-time multiplayer financial prediction game: host a lobby, share the code, compete live.",
    image: "/project-cards/bold-move.png",
    category: "Games",
    date: "Mar 2025 - Present",
    tags: ["Multiplayer", "Fintech"],
    kind: "side",
  },
  {
    id: "promptuary",
    title: "Promptuary",
    description: "The Church of the Prompt: a philosophical toolkit for noticing and rewriting the scripts that shape our lives.",
    image: "/project-cards/promptuary.png",
    category: "Philosophy",
    date: "Jun 2025",
    tags: ["Generative AI", "Writing"],
    kind: "side",
  },
  {
    id: "compact-task-manager",
    title: "Compact Task Manager",
    description: "Dark compact performance graphs at sign-in on Windows, macOS and Linux, with JSON diagnostics for agents.",
    image: "/project-cards/compact-task-manager.png",
    category: "Developer Tools",
    date: "Oct 2026",
    tags: ["PowerShell", "Python"],
    kind: "side",
  },
  {
    id: "founders-and-innovators",
    title: "Founders and Innovators (FANDI)",
    description: "A venture studio and holding company launching startups across multiple sectors.",
    image: "/fandi-images/venture-studio-workspace.png",
    category: "Venture Studio",
    date: "Jan 2021 - Nov 2022",
    tags: ["Product Management", "Entrepreneurship", "Venture Building"],
    featured: true,
    kind: "side",
  },
  {
    id: "bossbusworld",
    title: "Bossbus",
    description: "A new age of transport solutions with integrated fleet management and travel booking platform.",
    image: "/bossbus-images/bossbus-technologies-homepage.jpeg",
    category: "Transportation",
    date: "Jan 2021 - Nov 2022",
    tags: ["Product Management", "Transportation", "Logistics"],
    kind: "professional",
  },
  {
    id: "monizoom",
    title: "Monizoom",
    description: "Payment solutions for anyone, offering borderless banking and financial services.",
    image: "/monizoom-images/project-thumbnail.png",
    category: "Fintech",
    date: "Mar 2021 - Oct 2022",
    tags: ["Product Management", "Fintech", "Payments"],
    kind: "side",
  },
  {
    id: "nesthub",
    title: "NestHub",
    description: "Building Nigeria's premium real estate platform connecting developers, owners, and seekers.",
    image: "/nesthub-images/nesthub-homepage.png",
    category: "Real Estate",
    date: "Apr 2021 - Sep 2022",
    tags: ["Product Management", "Real Estate", "Proptech"],
    kind: "side",
  },
  {
    id: "ash-b",
    title: "ASH B",
    description: "Comprehensive healthcare platform with integrated telemedicine and patient management.",
    image: "/ash-b-images/project-thumbnail.png",
    category: "Healthcare",
    date: "Jun 2021 - Aug 2022",
    tags: ["Product Management", "Healthcare", "Telemedicine"],
    kind: "side",
  },
  {
    id: "blockchain-africa-summit",
    title: "Blockchain Africa Summit",
    description: "Conference and exhibition focused on blockchain, crypto, and Web 3.0 technologies.",
    image: "/blockchain-africa-summit-images/project-thumbnail.png",
    category: "Event",
    date: "Feb 2022 - Apr 2022",
    tags: ["Event Management", "Blockchain", "Web3"],
    kind: "side",
  },
  {
    id: "space-convention",
    title: "Space Convention",
    description: "A gathering of space industry professionals, enthusiasts, and policymakers.",
    image: "/space-convention-images/project-thumbnail.png",
    category: "Event",
    date: "Sep 2019 - Nov 2019",
    tags: ["Event Management", "Space", "Policy"],
    kind: "side",
  },
  {
    id: "africanftart",
    title: "AfricaNFT Art",
    description: "A platform showcasing and selling digital art from African artists as NFTs.",
    image: "/africanft-images/project-thumbnail.png",
    category: "Art & Technology",
    date: "Jul 2021 - Dec 2021",
    tags: ["Product Management", "NFT", "Digital Art"],
    kind: "side",
  },
  {
    id: "harvest-credit",
    title: "Harvest Credit",
    description: "A microfinance platform providing loans to small businesses and entrepreneurs.",
    image: "/harvest-credit-images/project-thumbnail.png",
    category: "Fintech",
    date: "May 2020 - Aug 2020",
    tags: ["Product Management", "Fintech", "Microfinance"],
    kind: "side",
  },
  {
    id: "stellarxplora",
    title: "StellarXplora",
    description: "An educational platform about space exploration and astronomy for young learners.",
    image: "/stellarxplora-images/stellarxplora-banner.png",
    category: "Education",
    date: "Jan 2020 - Apr 2020",
    tags: ["Product Management", "Education", "Space"],
    kind: "side",
  },
  {
    id: "zyleme",
    title: "Zyleme",
    description: "A learning management system for corporate training and development.",
    image: "/zyleme-mobile-learning-dashboard.png",
    category: "Education",
    date: "Mar 2019 - Dec 2019",
    tags: ["Product Management", "Education", "Corporate Training"],
    kind: "side",
  },
  {
    id: "talahive",
    title: "TalaHive",
    description: "A creative space for artists, designers, and makers to collaborate and create.",
    image: "/talahive-images/talahive-logo.png",
    category: "Creative Space",
    date: "Jun 2018 - Feb 2019",
    tags: ["Space Management", "Art", "Community"],
    kind: "side",
  },
  {
    id: "moneybase",
    title: "Moneybase",
    description: "A trading platform for stocks, ETFs, and cryptocurrencies.",
    image: "/moneybase-images/project-thumbnail.png",
    category: "Fintech",
    date: "Sep 2017 - May 2018",
    tags: ["Product Management", "Fintech", "Trading"],
    kind: "side",
  },
  {
    id: "artention-magazine",
    title: "Artention Magazine",
    description: "A digital publication showcasing emerging artists and art trends.",
    image: "/artention-magazine-images/artention-logo.png",
    category: "Media",
    date: "Jan 2017 - Aug 2017",
    tags: ["Content Management", "Art", "Publishing"],
    kind: "side",
  },
  {
    id: "folktoon",
    title: "Folktoon",
    description: "An animation studio creating content based on African folklore and stories.",
    image: "/folktoon-placeholder.png",
    category: "Entertainment",
    date: "Apr 2016 - Dec 2016",
    tags: ["Production Management", "Animation", "Storytelling"],
    kind: "side",
  },
]

interface ProjectGridProps {
  filter: string
}

export function ProjectGrid({ filter }: ProjectGridProps) {
  const filteredProjects =
    filter === "all"
      ? projects
      : filter === "professional" || filter === "side"
        ? projects.filter((project) => project.kind === filter)
        : projects.filter(
          (project) =>
            project.category.toLowerCase() === filter.toLowerCase() ||
            project.tags.some((tag) => tag.toLowerCase() === filter.toLowerCase()),
        )

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {filteredProjects.map((project) => (
        <Link href={`/projects/${project.id}`} key={project.id} className="group">
          <Card className="overflow-hidden h-full transition-all hover:shadow-md">
            <div className="aspect-video relative overflow-hidden">
              <Image
                src={project.image || "/placeholder.svg?height=400&width=600&query=project thumbnail"}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-full object-cover transition-transform group-hover:scale-105"
              />
              {project.featured && (
                <div className="absolute top-2 right-2">
                  <Badge variant="secondary" className="bg-primary text-primary-foreground">
                    Featured
                  </Badge>
                </div>
              )}
            </div>
            <CardContent className="p-5">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold line-clamp-1">{project.title}</h3>
                <span className="text-xs text-muted-foreground whitespace-nowrap ml-2">{project.date}</span>
              </div>
              <p className="text-muted-foreground mb-3 line-clamp-2">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <Badge variant="outline" className="bg-muted/50">
                  {project.category}
                </Badge>
                {project.tags.filter((tag) => tag !== project.category).slice(0, 2).map((tag) => (
                  <Badge key={tag} variant="outline" className="bg-muted/50">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}
