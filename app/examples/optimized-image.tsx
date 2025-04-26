import Image from "next/image"

export default function OptimizedImageExample() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Optimized Images Example</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Basic Image with fixed dimensions */}
        <div>
          <h2 className="text-xl font-bold mb-4">Fixed Size Image</h2>
          <div className="relative w-[400px] h-[300px]">
            <Image src="/images/lunar-surface.jpg" alt="Lunar Surface" fill className="object-cover rounded-lg" />
          </div>
        </div>

        {/* Responsive Image */}
        <div>
          <h2 className="text-xl font-bold mb-4">Responsive Image</h2>
          <Image
            src="/images/lunar-mission.jpg"
            alt="Workshop Collaboration"
            width={600}
            height={400}
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  )
}
