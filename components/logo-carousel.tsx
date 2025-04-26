"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface PartnerLogo {
  name: string
  logo: string
  url: string
  alt: string
}

export function LogoCarousel() {
  const [isHovering, setIsHovering] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const partnerLogos: PartnerLogo[] = [
    {
      name: "LOGIC",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-logic.jpg-2OjCoBZTtOL9EwPw8gPvp3XmI1q7KK.jpeg",
      url: "https://logic.jhuapl.edu/",
      alt: "LOGIC - Lunar Operating Guidelines for Infrastructure Consortium",
    },
    {
      name: "LSIC",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-lsic.jpg-uJX4E8SD5dWBCTQlb2Wad5oGt7o5EH.jpeg",
      url: "https://lsic.jhuapl.edu/",
      alt: "LSIC - Lunar Surface Innovation Consortium",
    },
    {
      name: "GEGSLA",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-gegsla.jpg-whOFtcTJvOq0SGMaj1UcCVMzmacUXF.jpeg",
      url: "https://moonvillageassociation.org/gegsla/about/",
      alt: "GEGSLA - Global Expert Group on Sustainable Lunar Activities",
    },
    {
      name: "MVA",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-mva.jpg-tQeqsAU5xvxdXDV1PNXJ2WWPZRNrgW.jpeg",
      url: "https://moonvillageassociation.org/",
      alt: "MVA - Moon Village Association",
    },
    {
      name: "JHU APL",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-jh.jpg-YQoRDxlgeZi35piBVAHc8Yt9RCwbIC.jpeg",
      url: "https://www.jhuapl.edu/",
      alt: "Johns Hopkins Applied Physics Laboratory",
    },
  ]

  useEffect(() => {
    if (isHovering || !containerRef.current) return

    let animationId: number
    const duration = 15000 // 15 seconds for one complete cycle
    const totalLogos = partnerLogos.length

    const animate = (timestamp: number) => {
      if (!containerRef.current) return

      // Calculate progress based on time
      const progress = (timestamp % duration) / duration

      // Calculate the translateX value for the animation
      // We want to move the full width of the container during the animation cycle
      const translateX = -progress * (100 / totalLogos) * totalLogos

      // When logos are about to go completely off-screen, reset position
      if (progress > 0.99) {
        containerRef.current.style.transition = "none"
        containerRef.current.style.transform = `translateX(0%)`

        // Force a reflow to make the transition reset take effect
        containerRef.current.offsetHeight

        // Restore the transition for the next animation cycle
        containerRef.current.style.transition = "transform 1000ms linear"
      } else {
        containerRef.current.style.transform = `translateX(${translateX}%)`
      }

      animationId = requestAnimationFrame(animate)
    }

    // Set initial transition
    if (containerRef.current) {
      containerRef.current.style.transition = "transform 1000ms linear"
    }

    animationId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [isHovering, partnerLogos.length])

  return (
    <div
      className="w-full overflow-hidden bg-gradient-to-r from-gray-50/50 to-gray-100/50 dark:from-gray-900/30 dark:to-gray-800/30 rounded-lg p-6 shadow-sm"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="relative w-full overflow-hidden">
        {/* Container that will be animated - set to 120% to show 4 full logos and 1/4 of the 5th */}
        <div ref={containerRef} className="flex" style={{ width: `120%` }}>
          {/* Render each logo twice to ensure continuous scrolling */}
          {[...partnerLogos, ...partnerLogos].map((logo, index) => (
            <TooltipProvider key={`logo-${index}`}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={logo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "flex-shrink-0 flex items-center justify-center p-3 h-20 transition-all",
                      "hover:shadow-md hover:scale-105",
                    )}
                    style={{ width: `25%` }} // Each logo takes equal width
                    aria-label={`Visit ${logo.name} website`}
                  >
                    <div className="relative h-full w-full">
                      <Image
                        src={logo.logo || "/placeholder.svg"}
                        alt={logo.alt}
                        fill
                        className="object-contain"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement
                          target.src = "/placeholder.svg"
                        }}
                      />
                    </div>
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{logo.alt}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
      </div>
    </div>
  )
}
