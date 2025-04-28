"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Maximize2, Smartphone } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface MobileScreenshot {
  src: string
  alt: string
  description: string
  category: string
}

interface MobileAppShowcaseProps {
  screenshots: MobileScreenshot[]
  title?: string
  className?: string
}

export function MobileAppShowcase({ screenshots, title, className }: MobileAppShowcaseProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [fullscreenImage, setFullscreenImage] = useState<MobileScreenshot | null>(null)
  const [activeCategory, setActiveCategory] = useState<string>("all")

  const filteredScreenshots =
    activeCategory === "all" ? screenshots : screenshots.filter((screenshot) => screenshot.category === activeCategory)

  const categories = ["all", ...Array.from(new Set(screenshots.map((s) => s.category)))]

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredScreenshots.length)
  }

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + filteredScreenshots.length) % filteredScreenshots.length)
  }

  return (
    <div className={cn("space-y-4", className)}>
      {title && <h3 className="text-xl font-semibold">{title}</h3>}

      <div className="flex flex-wrap gap-2 mb-4">
        {categories.map((category) => (
          <Button
            key={category}
            variant={activeCategory === category ? "default" : "outline"}
            size="sm"
            onClick={() => {
              setActiveCategory(category)
              setCurrentIndex(0)
            }}
            className="capitalize"
          >
            {category}
          </Button>
        ))}
      </div>

      {filteredScreenshots.length > 0 ? (
        <>
          <div className="relative overflow-hidden rounded-lg border bg-background">
            <div className="flex items-center justify-center p-4 bg-muted">
              <div className="relative w-[280px] h-[560px] overflow-hidden rounded-[32px] border-8 border-gray-800 shadow-lg">
                <div className="absolute top-0 left-0 right-0 h-6 bg-gray-800 z-10"></div>
                <Image
                  src={filteredScreenshots[currentIndex].src || "/placeholder.svg"}
                  alt={filteredScreenshots[currentIndex].alt}
                  fill
                  className="object-cover"
                  unoptimized
                />
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute right-2 top-8 z-10 bg-background/80 backdrop-blur-sm"
                  onClick={() => setFullscreenImage(filteredScreenshots[currentIndex])}
                >
                  <Maximize2 className="h-4 w-4" />
                  <span className="sr-only">View fullscreen</span>
                </Button>
              </div>
            </div>

            <div className="flex items-center justify-between p-4">
              <Button variant="outline" size="icon" onClick={prevImage}>
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Previous image</span>
              </Button>

              <div className="text-center">
                <p className="text-sm font-medium">{filteredScreenshots[currentIndex].description}</p>
                <p className="text-xs text-muted-foreground">
                  {currentIndex + 1} of {filteredScreenshots.length}
                </p>
              </div>

              <Button variant="outline" size="icon" onClick={nextImage}>
                <ChevronRight className="h-4 w-4" />
                <span className="sr-only">Next image</span>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-4 md:grid-cols-6 gap-2">
            {filteredScreenshots.map((screenshot, index) => (
              <button
                key={index}
                className={cn(
                  "relative aspect-[9/16] overflow-hidden rounded-md border",
                  currentIndex === index && "ring-2 ring-primary",
                )}
                onClick={() => setCurrentIndex(index)}
              >
                <Image
                  src={screenshot.src || "/placeholder.svg"}
                  alt={screenshot.alt}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </button>
            ))}
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center p-8 text-center border rounded-lg bg-muted">
          <Smartphone className="h-12 w-12 text-muted-foreground mb-4" />
          <p className="text-muted-foreground">No screenshots available for this category</p>
        </div>
      )}

      <Dialog open={!!fullscreenImage} onOpenChange={(open) => !open && setFullscreenImage(null)}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>{fullscreenImage?.alt}</DialogTitle>
            <DialogDescription>{fullscreenImage?.description}</DialogDescription>
          </DialogHeader>
          <div className="relative aspect-[9/16] w-full max-h-[70vh]">
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
