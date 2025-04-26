import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function PlaceholderImagesExample() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Using Placeholder Images</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Using an existing image */}
        <Card>
          <div className="relative h-64">
            <Image
              src="/images/lunar-outpost-construction.png"
              alt="Lunar Workshop Placeholder"
              fill
              className="object-cover rounded-t-lg"
            />
          </div>
          <CardContent className="p-4">
            <h3 className="font-bold mb-2">Lunar Outpost Construction</h3>
            <p className="text-muted-foreground">Visualization of lunar outpost construction activities.</p>
          </CardContent>
        </Card>

        {/* Using the placeholder.svg service */}
        <Card>
          <div className="relative h-64">
            <Image
              src="/images/lunar-outpost-construction-2.png"
              alt="Generated Placeholder"
              fill
              className="object-cover rounded-t-lg"
            />
          </div>
          <CardContent className="p-4">
            <h3 className="font-bold mb-2">Lunar Outpost Assembly</h3>
            <p className="text-muted-foreground">Alternative view of lunar outpost assembly process.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
