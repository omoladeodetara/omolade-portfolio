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
}

const projects: Project[] = [
  {
    id: "founders-and-innovators",
    title: "Founders and Innovators (FANDI)",
    description: "A venture studio and holding company launching startups across multiple sectors.",
    image: "/fandi-images/venture-studio-workspace.png",
    category: "Venture Studio",
    date: "Jan 2021 - Nov 2022",
    tags: ["Product Management", "Entrepreneurship", "Venture Building"],
    featured: true,
  },
  {
    id: "bossbusworld",
    title: "Bossbus",
    description: "A new age of transport solutions with integrated fleet management and travel booking platform.",
    image: "/bossbus-images/bossbus-technologies-homepage.jpeg",
    category: "Transportation",
    date: "Jan 2021 - Nov 2022",
    tags: ["Product Management", "Transportation", "Logistics"],
  },
  {
    id: "monizoom",
    title: "Monizoom",
    description: "Payment solutions for anyone, offering borderless banking and financial services.",
    image: "/monizoom-images/project-thumbnail.png",
    category: "Fintech",
    date: "Mar 2021 - Oct 2022",
    tags: ["Product Management", "Fintech", "Payments"],
  },
  {
    id: "nesthub",
    title: "NestHub",
    description: "Building Nigeria's premium real estate platform connecting developers, owners, and seekers.",
    image: "/nesthub-images/nesthub-homepage.png",
    category: "Real Estate",
    date: "Apr 2021 - Sep 2022",
    tags: ["Product Management", "Real Estate", "Proptech"],
  },
  {
    id: "ash-b",
    title: "ASH B",
    description: "Comprehensive healthcare platform with integrated telemedicine and patient management.",
    image: "/ash-b-images/project-thumbnail.png",
    category: "Healthcare",
    date: "Jun 2021 - Aug 2022",
    tags: ["Product Management", "Healthcare", "Telemedicine"],
  },
  {
    id: "blockchain-africa-summit",
    title: "Blockchain Africa Summit",
    description: "Conference and exhibition focused on blockchain, crypto, and Web 3.0 technologies.",
    image: "/blockchain-africa-summit-images/project-thumbnail.png",
    category: "Event",
    date: "Feb 2022 - Apr 2022",
    tags: ["Event Management", "Blockchain", "Web3"],
  },
  {
    id: "space-convention",
    title: "Space Convention",
    description: "A gathering of space industry professionals, enthusiasts, and policymakers.",
    image: "/space-convention-images/project-thumbnail.png",
    category: "Event",
    date: "Sep 2019 - Nov 2019",
    tags: ["Event Management", "Space", "Policy"],
  },
  {
    id: "africanftart",
    title: "AfricaNFT Art",
    description: "A platform showcasing and selling digital art from African artists as NFTs.",
    image: "/africanft-images/project-thumbnail.png",
    category: "Art & Technology",
    date: "Jul 2021 - Dec 2021",
    tags: ["Product Management", "NFT", "Digital Art"],
  },
  {
    id: "harvest-credit",
    title: "Harvest Credit",
    description: "A microfinance platform providing loans to small businesses and entrepreneurs.",
    image: "/harvest-credit-images/project-thumbnail.png",
    category: "Fintech",
    date: "May 2020 - Aug 2020",
    tags: ["Product Management", "Fintech", "Microfinance"],
  },
  {
    id: "stellarxplora",
    title: "StellarXplora",
    description: "An educational platform about space exploration and astronomy for young learners.",
    image: "/stellarxplora-images/stellarxplora-banner.png",
    category: "Education",
    date: "Jan 2020 - Apr 2020",
    tags: ["Product Management", "Education", "Space"],
  },
  {
    id: "zyleme",
    title: "Zyleme",
    description: "A learning management system for corporate training and development.",
    image: "/zyleme-mobile-learning-dashboard.png",
    category: "Education",
    date: "Mar 2019 - Dec 2019",
    tags: ["Product Management", "Education", "Corporate Training"],
  },
  {
    id: "talahive",
    title: "TalaHive",
    description: "A creative space for artists, designers, and makers to collaborate and create.",
    image: "/talahive-images/talahive-logo.png",
    category: "Creative Space",
    date: "Jun 2018 - Feb 2019",
    tags: ["Space Management", "Art", "Community"],
  },
  {
    id: "moneybase",
    title: "Moneybase",
    description: "A trading platform for stocks, ETFs, and cryptocurrencies.",
    image: "/moneybase-images/project-thumbnail.png",
    category: "Fintech",
    date: "Sep 2017 - May 2018",
    tags: ["Product Management", "Fintech", "Trading"],
  },
  {
    id: "artention-magazine",
    title: "Artention Magazine",
    description: "A digital publication showcasing emerging artists and art trends.",
    image: "/artention-magazine-images/artention-logo.png",
    category: "Media",
    date: "Jan 2017 - Aug 2017",
    tags: ["Content Management", "Art", "Publishing"],
  },
  {
    id: "folktoon",
    title: "Folktoon",
    description: "An animation studio creating content based on African folklore and stories.",
    image: "/folktoon-placeholder.png",
    category: "Entertainment",
    date: "Apr 2016 - Dec 2016",
    tags: ["Production Management", "Animation", "Storytelling"],
  },
]

interface ProjectGridProps {
  filter: string
}

export function ProjectGrid({ filter }: ProjectGridProps) {
  const filteredProjects =
    filter === "all"
      ? projects
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
                {project.tags.slice(0, 2).map((tag) => (
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
