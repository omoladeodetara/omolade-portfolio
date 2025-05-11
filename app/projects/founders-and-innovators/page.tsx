import { Button } from "@/components/ui/button"
import { ProjectDetails } from "@/components/project-details"
import Link from "next/link"
import { ArrowLeft, ExternalLink } from "lucide-react"

export default function FoundersAndInnovatorsPage() {
  return (
    <div className="container py-10">
      <div className="mb-6">
        <Button asChild variant="ghost" className="mb-6">
          <Link href="/projects" className="flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
        </Button>
        <h1 className="text-4xl font-bold mb-4">Founders and Innovators (FANDI)</h1>
        <p className="text-xl text-muted-foreground mb-6">
          A venture studio and holding company building technological solutions for housing, finance, transportation,
          sustainable energy, and more across Nigeria.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="md:col-span-2">
          <div className="rounded-lg overflow-hidden mb-8">
            <img
              src="/fandi-images/venture-studio-workspace.png"
              alt="FANDI Venture Studio Workspace in Lagos"
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="text-foreground space-y-6">
            <h2 className="text-2xl font-bold mt-8 mb-4">About FANDI Venture Studio</h2>
            <p className="text-muted-foreground">
              Founders and Innovators (FANDI) was established as a venture studio and holding company focused on
              building, funding, and scaling innovative technology solutions across various sectors in Nigeria. As a
              collective of entrepreneurs, developers, and visionaries, FANDI identified critical challenges in the
              Nigerian market and developed targeted solutions through its portfolio companies.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Our Mission</h2>
            <p className="text-muted-foreground">
              FANDI's mission was to empower communities across Nigeria through technological innovation. We believed in
              creating sustainable, scalable solutions that addressed fundamental challenges in transportation, finance,
              real estate, healthcare, and blockchain technology.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Portfolio Companies</h2>
            <div>
              <div className="flex flex-nowrap overflow-x-auto gap-4 py-4 my-4">
                <PortfolioCompanyCard
                  title="Bossbus"
                  description="A new age of transport solutions with integrated fleet management and travel booking platform."
                  slug="bossbusworld"
                  image="/bossbus-images/project-thumbnail.png"
                />

                <PortfolioCompanyCard
                  title="Monizoom"
                  description="Payment solutions for anyone, offering borderless banking and financial services."
                  slug="monizoom"
                  image="/monizoom-images/project-thumbnail.png"
                />

                <PortfolioCompanyCard
                  title="NestHub"
                  description="Building Nigeria's premium real estate platform connecting developers, owners, and seekers."
                  slug="nesthub"
                  image="/nesthub-images/nesthub-homepage.png"
                />

                <PortfolioCompanyCard
                  title="ASH B"
                  description="Comprehensive healthcare platform with integrated telemedicine and patient management."
                  slug="ash-b"
                  image="/ash-b-images/project-thumbnail.png"
                />

                <PortfolioCompanyCard
                  title="Blockchain Africa Summit"
                  description="Conference and exhibition focused on blockchain, crypto, and Web 3.0 technologies."
                  slug="blockchain-africa-summit"
                  image="/blockchain-africa-summit-images/project-thumbnail.png"
                />
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Our Approach</h2>
            <p className="text-muted-foreground">
              As a venture studio, FANDI took a hands-on approach to building companies:
            </p>
            <ul className="space-y-3 text-muted-foreground my-4 pl-6">
              <li className="list-disc">
                <strong>Ideation & Validation:</strong> Identifying market gaps and validating solutions through
                research and MVP testing
              </li>
              <li className="list-disc">
                <strong>Team Building:</strong> Assembling dedicated teams with the right expertise for each venture
              </li>
              <li className="list-disc">
                <strong>Resource Allocation:</strong> Providing initial funding, technical resources, and strategic
                guidance
              </li>
              <li className="list-disc">
                <strong>Growth Strategy:</strong> Developing scalable business models and go-to-market strategies
              </li>
              <li className="list-disc">
                <strong>Network Access:</strong> Leveraging our network of partners, investors, and industry experts
              </li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">Impact</h2>
            <p className="text-muted-foreground">
              During its active period from 2021 to 2022, FANDI helped launch and develop multiple ventures that
              continued to grow independently. Our portfolio companies have collectively served thousands of users
              across Nigeria, creating jobs and introducing innovative solutions to long-standing challenges in the
              Nigerian market.
            </p>
          </div>
        </div>

        <div>
          <ProjectDetails
            slug="founders-and-innovators"
            role="Co-founder and Lead Product Manager"
            timeline="January 2021 - November 2022"
          />

          <div className="mt-6 space-y-6">
            <div className="bg-muted/50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Key Achievements</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center mr-2 mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>
                    Launched 5+ ventures across transportation, fintech, real estate, healthcare, and blockchain
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center mr-2 mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Created a collaborative ecosystem for Nigerian entrepreneurs and innovators</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center mr-2 mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Developed technology solutions addressing critical infrastructure gaps in Nigeria</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center mr-2 mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Established partnerships with local and international organizations</span>
                </li>
              </ul>
            </div>

            <div className="bg-muted/50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Node.js</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">MongoDB</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">AWS</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Flutter</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Firebase</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Blockchain</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

interface PortfolioCompanyCardProps {
  title: string
  description: string
  slug: string
  image: string
}

function PortfolioCompanyCard({ title, description, slug, image }: PortfolioCompanyCardProps) {
  return (
    <div className="border rounded-lg overflow-hidden bg-card flex-shrink-0" style={{ width: "240px" }}>
      <div className="aspect-video overflow-hidden">
        <img src={image || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{description}</p>
        <div className="mt-4">
          <Button asChild size="sm">
            <Link href={`/projects/${slug}`}>
              View <ExternalLink className="ml-1 h-3 w-3" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
