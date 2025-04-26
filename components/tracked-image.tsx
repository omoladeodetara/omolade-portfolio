"use client"

import { useState, useEffect } from "react"
import Image, { type ImageProps } from "next/image"

interface TrackedImageProps extends ImageProps {
  imageType: string
}

export function TrackedImage({ imageType, onLoad, ...props }: TrackedImageProps) {
  const [loadStart, setLoadStart] = useState<number | null>(null)

  useEffect(() => {
    setLoadStart(performance.now())
    return () => setLoadStart(null)
  }, [props.src])

  const handleLoad = (e: any) => {
    if (loadStart) {
      const duration = performance.now() - loadStart
      // Log performance data to console in development
      if (process.env.NODE_ENV === "development") {
        console.log(`[Performance] Image Load (${imageType}): ${duration}ms`)
      }
    }

    // Call the original onLoad handler if provided
    if (onLoad) {
      onLoad(e)
    }
  }

  return <Image {...props} onLoad={handleLoad} />
}
