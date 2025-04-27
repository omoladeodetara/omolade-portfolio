"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface MobileScreenProps {
  screens: {
    id: string
    url: string
    title: string
    description: string
  }[]
  projectSlug?: string
}

export function MobileScreenGallery({ screens, projectSlug }: MobileScreenProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  // Only render for specific projects
  if (projectSlug && projectSlug !== "ash-b") {
    return null
  }

  const nextScreen = () => {
    setActiveIndex((prev) => (prev === screens.length - 1 ? 0 : prev + 1))
  }

  const prevScreen = () => {
    setActiveIndex((prev) => (prev === 0 ? screens.length - 1 : prev - 1))
  }

  const activeScreen = screens[activeIndex]

  return (
    <div className="my-12">
      <h2 className="text-2xl font-bold mb-6">Mobile Interface</h2>

      <div className="flex flex-col md:flex-row gap-8 items-center">
        {/* Mobile frame with screen */}
        <div className="relative mx-auto">
          <div className="relative w-[280px] h-[560px] bg-gray-800 rounded-[36px] p-3 shadow-xl overflow-hidden">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-6 bg-gray-800 rounded-b-xl z-10"></div>

            {/* Screen */}
            <div className="w-full h-full rounded-[28px] overflow-hidden relative">
              <img
                src={activeScreen.url || "/placeholder.svg"}
                alt={activeScreen.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4">
            <Button
              variant="secondary"
              size="icon"
              className="rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30"
              onClick={prevScreen}
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Previous</span>
            </Button>
            <Button
              variant="secondary"
              size="icon"
              className="rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30"
              onClick={nextScreen}
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Next</span>
            </Button>
          </div>
        </div>

        {/* Screen description */}
        <div className="md:w-1/2 space-y-4">
          <h3 className="text-xl font-semibold">{activeScreen.title}</h3>
          <p className="text-muted-foreground">{activeScreen.description}</p>

          {/* Screen thumbnails */}
          <div className="flex flex-wrap gap-2 mt-4">
            {screens.map((screen, index) => (
              <button
                key={screen.id}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "w-16 h-16 rounded-md overflow-hidden border-2 transition-all",
                  index === activeIndex
                    ? "border-primary scale-105"
                    : "border-transparent opacity-70 hover:opacity-100",
                )}
              >
                <img
                  src={screen.url || "/placeholder.svg"}
                  alt={`Thumbnail for ${screen.title}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
