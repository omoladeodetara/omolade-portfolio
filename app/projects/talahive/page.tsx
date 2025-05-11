import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Users, Palette, Building, type LucideIcon } from "lucide-react"

export const metadata = {
  title: "TalaHive - Visual Artist Studio Space",
  description:
    "TalaHive: A shared studio space and community for visual artists in Nigeria, providing professional-grade facilities and a supportive environment.",
}

export default function Page() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
          <div>
            <h1 className="text-4xl font-bold mb-4">TalaHive</h1>
            <p className="text-xl text-muted-foreground mb-4">A shared studio space and community for visual artists</p>
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge variant="outline">Visual Arts</Badge>
              <Badge variant="outline">Studio Space</Badge>
              <Badge variant="outline">Artist Community</Badge>
              <Badge variant="outline">Creative Workspace</Badge>
              <Badge variant="outline">Nigeria</Badge>
            </div>
            <div className="text-sm text-muted-foreground">
              <p>September 2018 - February 2019</p>
              <p>Business Concept Development</p>
            </div>
          </div>
          <div className="w-full md:w-1/3">
            <Image
              src="/talahive-images/talahive-logo.png"
              alt="TalaHive Logo"
              width={300}
              height={150}
              className="w-full h-auto"
            />
          </div>
        </div>

        <Tabs defaultValue="overview" className="mb-12">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="facilities">Facilities</TabsTrigger>
            <TabsTrigger value="membership">Membership</TabsTrigger>
            <TabsTrigger value="business">Business Model</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-6">
            <div className="space-y-6">
              <p>
                TalaHive was conceived as Nigeria's first dedicated shared studio space for visual artists, addressing a
                critical gap in the creative infrastructure of the country. The project aimed to provide
                professional-grade facilities and a supportive community environment for painters, sculptors,
                ceramicists, textile artists, fashion designers, graphic artists, and animators.
              </p>

              <p>
                Unlike tech-focused coworking spaces that dominate Nigeria's shared workspace market, TalaHive was
                specifically designed to meet the unique needs of visual artists who require specialized equipment,
                ample space, natural lighting, and freedom from the constraints of traditional 9-to-5 work environments.
              </p>

              <div className="my-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                <FeatureCard
                  icon={Palette}
                  title="Specialized Studios"
                  description="Wet and dry studios equipped for various artistic disciplines"
                />
                <FeatureCard
                  icon={Users}
                  title="Artist Community"
                  description="Collaborative environment for emerging and established artists"
                />
                <FeatureCard
                  icon={Building}
                  title="First in Nigeria"
                  description="Pioneering dedicated artist workspace in the Nigerian market"
                />
              </div>

              <p>
                In 2019, TalaHive was developed as a business concept, showcasing the vision for supporting visual
                artists with professional-grade facilities and a supportive community environment. The project involved
                designing the studio layout, sourcing equipment, developing a membership model, and building a community
                engagement strategy.
              </p>

              <p>
                Although the project didn't proceed to full implementation, it provided valuable insights into the needs
                of visual artists in Nigeria and the challenges of creating a sustainable shared studio space in an
                emerging market.
              </p>
            </div>
          </TabsContent>

          <TabsContent value="facilities" className="mt-6">
            <div className="space-y-6">
              <p>
                TalaHive was designed to offer a range of specialized facilities to accommodate different artistic
                disciplines and working styles. The space was planned to include:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <FacilityCard
                  title="Painting Studios"
                  features={[
                    "Wet studios with natural lighting",
                    "Easels and work tables",
                    "Ventilation systems for oil and acrylic work",
                    "Shared cleaning stations",
                  ]}
                />

                <FacilityCard
                  title="Sculpture & Ceramics"
                  features={[
                    "Dedicated ceramics studio with wheels",
                    "Kilns and hand tools",
                    "Slab rollers and work tables",
                    "Storage for works in progress",
                  ]}
                />

                <FacilityCard
                  title="Textile & Fashion"
                  features={[
                    "Textile studio with large work surfaces",
                    "Sewing equipment and dress forms",
                    "Dyeing facilities",
                    "Pattern-making space",
                  ]}
                />

                <FacilityCard
                  title="Digital Lab"
                  features={[
                    "Computers with graphic design software",
                    "Animation workstations",
                    "High-speed internet",
                    "Printing facilities",
                  ]}
                />
              </div>

              <p>
                All studios were designed to be accessible 24/7 through a digital access control system, allowing
                artists to work according to their own schedules and creative rhythms. Common areas would include
                meeting spaces, a small café, exhibition areas, and secure storage for materials and finished works.
              </p>
            </div>
          </TabsContent>

          <TabsContent value="membership" className="mt-6">
            <div className="space-y-6">
              <p>
                TalaHive's membership model was designed to be flexible and inclusive, catering to artists at different
                career stages and with varying space requirements:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Basic Membership</CardTitle>
                    <CardDescription>For occasional studio users</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Access to common areas</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Limited studio time (40 hours/month)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Wi-Fi and basic amenities</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Community events access</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Working Membership</CardTitle>
                    <CardDescription>For regular studio users</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Unlimited studio access</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Personal storage locker</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Equipment usage</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Exhibition opportunities</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Dedicated Membership</CardTitle>
                    <CardDescription>For full-time artists</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Dedicated personal studio space</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>24/7 keycard access</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Priority equipment booking</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Mentorship opportunities</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <p>
                The membership structure was designed to create a sustainable financial model while ensuring
                accessibility for artists at different career stages. Special rates would be available for art students
                and recent graduates, and a "nomad" membership option was considered to allow artists to access multiple
                TalaHive locations as the network expanded.
              </p>
            </div>
          </TabsContent>

          <TabsContent value="business" className="mt-6">
            <div className="space-y-6">
              <p>
                TalaHive's business model was built around creating a sustainable creative ecosystem that would benefit
                artists while generating sufficient revenue to maintain and expand operations:
              </p>

              <div className="my-8">
                <h3 className="text-xl font-semibold mb-4">Revenue Streams</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Primary Revenue</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span>Membership subscriptions</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span>Day passes for occasional users</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span>Equipment rental fees</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Secondary Revenue</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span>Exhibition space rental</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span>Workshop and event fees</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span>Café and art supply sales</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span>Commission on artwork sales</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="my-8">
                <h3 className="text-xl font-semibold mb-4">Market Differentiation</h3>
                <p className="mb-4">
                  TalaHive would differentiate itself from existing coworking spaces in Nigeria by:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Focusing exclusively on the needs of visual artists rather than tech startups</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Providing specialized equipment and facilities not available elsewhere</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Creating a community specifically for visual artists to collaborate and grow</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Offering 24/7 access to accommodate artists' non-traditional work schedules</span>
                  </li>
                </ul>
              </div>

              <p>
                The business plan acknowledged the challenges of making coworking spaces profitable, with research
                showing that only a minority achieve profitability. To address this, TalaHive planned to focus on
                building a strong community first, keeping overhead costs manageable, and developing multiple revenue
                streams beyond basic membership fees.
              </p>
            </div>
          </TabsContent>
        </Tabs>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Key Learnings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Market Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  The project revealed a significant unmet need for dedicated artist spaces in Nigeria, with existing
                  coworking spaces primarily serving tech startups and not addressing the unique requirements of visual
                  artists.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Community Building</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Word-of-mouth marketing and connections within the local art community proved to be effective channels
                  for generating interest, highlighting the importance of community engagement in the creative sector.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Business Challenges</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Creating a sustainable business model for creative spaces requires careful balance between
                  affordability for artists and generating sufficient revenue to maintain operations and specialized
                  equipment.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Infrastructure Needs</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  The project highlighted the importance of specialized infrastructure for different artistic
                  disciplines and the need for flexible, 24/7 access systems to accommodate artists' non-traditional
                  work schedules.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
}

function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex flex-col items-center text-center">
          <div className="p-2 bg-primary/10 rounded-full mb-4">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <h3 className="font-medium text-lg mb-2">{title}</h3>
          <p className="text-muted-foreground text-sm">{description}</p>
        </div>
      </CardContent>
    </Card>
  )
}

interface FacilityCardProps {
  title: string
  features: string[]
}

function FacilityCard({ title, features }: FacilityCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
