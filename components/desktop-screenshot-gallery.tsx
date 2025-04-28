"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface DesktopScreenshot {
  src: string
  alt: string
  description: string
}

interface DesktopScreenshotGalleryProps {
  images: DesktopScreenshot[]
  title?: string
  className?: string
}

export function DesktopScreenshotGallery({ images, title, className }: DesktopScreenshotGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [fullscreenImage, setFullscreenImage] = useState<DesktopScreenshot | null>(null)

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  return (
    <div className={cn("space-y-4", className)}>
      {title && <h3 className="text-xl font-semibold">{title}</h3>}

      <div className="relative overflow-hidden rounded-lg border bg-background">
        <div className="relative aspect-video">
          <Image
            src={images[currentIndex].src || "/placeholder.svg"}
            alt={images[currentIndex].alt}
            fill
            className="object-contain"
            unoptimized
          />
          <Button
            variant="outline"
            size="icon"
            className="absolute right-2 top-2 z-10 bg-background/80 backdrop-blur-sm"
            onClick={() => setFullscreenImage(images[currentIndex])}
          >
            <Maximize2 className="h-4 w-4" />
            <span className="sr-only">View fullscreen</span>
          </Button>
        </div>

        <div className="flex items-center justify-between p-4">
          <Button variant="outline" size="icon" onClick={prevImage}>
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Previous image</span>
          </Button>

          <div className="text-center">
            <p className="text-sm font-medium">{images[currentIndex].description}</p>
            <p className="text-xs text-muted-foreground">
              {currentIndex + 1} of {images.length}
            </p>
          </div>

          <Button variant="outline" size="icon" onClick={nextImage}>
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Next image</span>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-5 gap-2">
        {images.map((image, index) => (
          <button
            key={index}
            className={cn(
              "relative aspect-video overflow-hidden rounded-md border",
              currentIndex === index && "ring-2 ring-primary",
            )}
            onClick={() => setCurrentIndex(index)}
          >
            <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" unoptimized />
          </button>
        ))}
      </div>

      <Dialog open={!!fullscreenImage} onOpenChange={(open) => !open && setFullscreenImage(null)}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>{fullscreenImage?.alt}</DialogTitle>
            <DialogDescription>{fullscreenImage?.description}</DialogDescription>
          </DialogHeader>
          <div className="relative aspect-video w-full">
            {fullscreenImage && (
              <Image
                src={fullscreenImage.src || "/placeholder.svg"}
                alt={fullscreenImage.alt}
                fill
                className="object-contain"
                unoptimized
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
