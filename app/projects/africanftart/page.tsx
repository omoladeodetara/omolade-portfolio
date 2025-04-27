import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { RelatedProjects } from "@/components/related-projects"

export default function AfricaNftArtPage() {
  return (
    <div className="container py-10">
      <Link href="/projects" className="inline-flex mb-8">
        <Button variant="ghost" className="gap-2">
          <ArrowLeft className="h-4 w-4" />
          Back to Projects
        </Button>
      </Link>

      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">AfricaNFTArt</h1>
        <p className="text-xl text-muted-foreground">
          A marketplace for African artists to showcase, sell their work as NFTs, and earn royalties on every resale
        </p>
      </div>

      <div className="relative aspect-video overflow-hidden rounded-lg mb-12">
        <Image
          src="/vibrant-african-nft-gallery.png"
          alt="AfricaNFTArt Marketplace"
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
              AfricaNFTArt is a one-stop solution to a long-overdue problem within the Art Industry. The project
              provides a digitized marketplace for artists to display and sell their works as NFTs, earning royalties
              for every resale of their artwork by collectors. This helps eliminate the market-value gap that exists in
              artworks sold locally by artists and encourages long-term legacy build-up.
            </p>

            <h2>Problem Statement</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 not-prose mb-8">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-bold mb-2">Authenticity</h3>
                  <p className="text-sm text-muted-foreground">
                    The art world has had issues with fraud and proving chains of custody, making art buyers skeptical
                    and increasing the need for professional verification.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-bold mb-2">Ownership</h3>
                  <p className="text-sm text-muted-foreground">
                    Art can be easily and endlessly duplicated, but non-fungible tokens allow buyers to confirm
                    ownership of digital assets.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-bold mb-2">Royalties</h3>
                  <p className="text-sm text-muted-foreground">
                    In traditional art markets, only a selected few artists see long-lasting support for their work in
                    monetary form, with mega-dealers and mega-collectors benefiting most.
                  </p>
                </CardContent>
              </Card>
            </div>

            <h2>Our Solution</h2>
            <p>
              We combine various blockchain infrastructures with a user-friendly interface where artists can mint their
              work. Our platform adopts fast, secure, and almost cost-free gas fees for transactions, making us a go-to
              for NFT minting. Our applications support both mobile and web for even low-configuration devices and poor
              internet, allowing more artists to be seen even if they dwell in remote areas.
            </p>

            <h3>Marketplace</h3>
            <p>
              Our marketplace gives users the power to discover new artists and their incredible creations across
              various art genres. Collectors can acquire amazing items from a growing library of unique digital arts in
              the form of social commerce.
            </p>

            <h3>Virtual Galleries/Storefront</h3>
            <p>
              Our storefront empowers art galleries, creators, and brands to build direct relationships with their
              audiences. In minutes, users can set up their online store straight from their dashboard, creating custom
              virtual galleries to showcase their collections.
            </p>

            <h2>Market Validation</h2>
            <div className="not-prose mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-bold mb-2">July 24, 2021</h3>
                    <p className="text-sm text-muted-foreground">
                      Within a week of coming together to build this, we secured an exclusive partnership with "Araism
                      Movement," a leading group of artists in Nigeria, and "Universal Studios of Art," a top group of
                      artists and art collectors.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-bold mb-2">August 13, 2021</h3>
                    <p className="text-sm text-muted-foreground">
                      Partnership with Benin Guild of Sculptors established, expanding our network of traditional
                      artists entering the digital space.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <h2>Market Size</h2>
            <p>
              According to Nasdaq, the NFT market could grow by 1,000X. In 2020, the global NFT market did about $338
              million in transaction volume. By Q3 2021, this had grown to $10.7 billion. The global collectibles market
              – including physical trading cards, games, toys, cars, and more – is a $370 billion market.
            </p>

            <h2>Business Model</h2>
            <p>
              The global demand in the NFT market is blazing, and the art market in Africa is also strong and
              skyrocketing with a deep presence of culture and preservation of history. We are here to plug them
              together, connecting African artists to the global market and helping them with royalties, ownership
              verification, authenticity, and data.
            </p>
            <p>
              Many of the artists we speak to already hear and read about crypto/blockchain and NFTs, but they have no
              idea when, where, and how to start. Our platform bridges this knowledge gap.
            </p>

            <h3>Revenue Model</h3>
            <p>
              We take a percentage fee depending on the transaction type. Our team is actively working on alternative
              solutions to the high minting fees in the NFT industry, especially for high-traffic networks such as
              Ethereum.
            </p>
            <p>
              From our data gathering, we intend to capture 2% of the current NFT market share (approximately $10.7
              billion) in our first year. We aim to increase from 2% to 5% in two years, representing about 150% growth.
            </p>

            <h2>Team</h2>
            <div className="not-prose mb-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-bold mb-1">Omolade Odetara</h3>
                    <p className="text-sm text-muted-foreground mb-2">Product Manager & Visual Artist</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-bold mb-1">Michael Olanipekun</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      Data Scientist, Blockchain Expert & NFT Collector
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-bold mb-1">Olasehinde Omoriwo</h3>
                    <p className="text-sm text-muted-foreground mb-2">Blockchain Enthusiast & NFT Collector</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-bold mb-1">Collins Imoyeh</h3>
                    <p className="text-sm text-muted-foreground mb-2">Full Stack Engineer & Blockchain Dev</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-bold mb-1">Samuel Odemakin</h3>
                    <p className="text-sm text-muted-foreground mb-2">Data Analyst & Project Manager</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-bold mb-1">Tolulope Ajayi</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      Digital Marketing & Blockchain Development Enthusiast
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
        <div>
          <ProjectDetailsNFT />
        </div>
      </div>

      <RelatedProjects />
    </div>
  )
}

function ProjectDetailsNFT() {
  return (
    <div className="space-y-6 bg-muted/50 p-6 rounded-lg">
      <h3 className="text-xl font-bold">Project Details</h3>

      <div>
        <h4 className="text-sm font-medium text-muted-foreground mb-2">Role</h4>
        <p>Product Strategy & Blockchain Consultant</p>
      </div>

      <div>
        <h4 className="text-sm font-medium text-muted-foreground mb-2">Timeline</h4>
        <p>July 2021 - December 2021</p>
      </div>

      <div>
        <h4 className="text-sm font-medium text-muted-foreground mb-2">Technologies</h4>
        <div className="flex flex-wrap gap-2">
          {[
            "Blockchain",
            "NFT",
            "Smart Contracts",
            "Ethereum",
            "React",
            "Node.js",
            "Web3.js",
            "Digital Art",
            "Marketplace",
            "Virtual Galleries",
            "Product Strategy",
            "UX/UI Design",
          ].map((tech) => (
            <Badge key={tech} variant="outline">
              {tech}
            </Badge>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-sm font-medium text-muted-foreground mb-2">Status</h4>
        <Badge variant="outline" className="bg-amber-500/10 text-amber-500 border-amber-500/20">
          Early Stage
        </Badge>
      </div>
    </div>
  )
}
