"use client"

import { useState } from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { X } from "lucide-react"

export default function ImageGalleryExample() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const galleryImages = [
    {
      src: "/images/lunar-surface.jpg",
      alt: "Lunar Surface",
      caption: "Lunar surface exploration site",
    },
    {
      src: "/images/lunar-mission.jpg",
      alt: "Lunar Mission",
      caption: "Lunar mission planning and execution",
    },
    {
      src: "/images/speaker-quan.jpg",
      alt: "Dr. Quan Haofang",
      caption: "Dr. Quan Haofang presenting",
    },
    {
      src: "/images/speaker-aarti.jpg",
      alt: "Aarti Holla-Maini",
      caption: "Aarti Holla-Maini during panel discussion",
    },
    {
      src: "/images/speaker-hiroshi.jpg",
      alt: "Dr. Hiroshi Yamakawa",
      caption: "Dr. Hiroshi Yamakawa at previous workshop",
    },
    {
      src: "/images/lunar-outpost-construction.png",
      alt: "Lunar Outpost Construction",
      caption: "Construction of lunar outpost facilities",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Workshop Image Gallery</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {galleryImages.map((image, index) => (
          <Card
            key={index}
            className="overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
            onClick={() => setSelectedImage(image.src)}
          >
            <div className="relative h-64">
              <Image src={image.src || "/placeholder.png"} alt={image.alt} fill className="object-cover" />
            </div>
            <div className="p-3 bg-black/60 absolute bottom-0 w-full">
              <p className="text-white text-sm">{image.caption}</p>
            </div>
          </Card>
        ))}
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute right-2 top-2 z-10 rounded-full bg-black/50 p-2"
          >
            <X className="h-5 w-5 text-white" />
          </button>
          {selectedImage && (
            <div className="relative h-[80vh]">
              <Image src={selectedImage || "/placeholder.png"} alt="Gallery image" fill className="object-contain" />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
