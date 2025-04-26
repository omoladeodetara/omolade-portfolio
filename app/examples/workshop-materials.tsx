import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function WorkshopMaterialsExample() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Workshop Materials</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <div className="relative h-48">
            <Image
              src="/images/lunar-surface.jpg"
              alt="Workshop Materials"
              fill
              className="object-cover rounded-t-lg"
            />
          </div>
          <CardContent className="p-4">
            <h3 className="font-bold mb-2">Preparation Guide</h3>
            <p className="text-muted-foreground">Essential materials to review before the workshop.</p>
          </CardContent>
        </Card>

        <Card>
          <div className="relative h-48">
            <Image src="/images/lunar-mission.jpg" alt="Workshop Slides" fill className="object-cover rounded-t-lg" />
          </div>
          <CardContent className="p-4">
            <h3 className="font-bold mb-2">Workshop Slides</h3>
            <p className="text-muted-foreground">Presentation slides for the May 2025 workshop.</p>
          </CardContent>
        </Card>

        <Card>
          <div className="relative h-48">
            <Image
              src="/images/lunar-outpost-construction.png"
              alt="Technical Documentation"
              fill
              className="object-cover rounded-t-lg"
            />
          </div>
          <CardContent className="p-4">
            <h3 className="font-bold mb-2">Technical Documentation</h3>
            <p className="text-muted-foreground">Detailed technical specifications and guidelines.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
