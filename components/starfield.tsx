"use client"

import { useEffect, useState } from "react"

interface Star {
  id: number
  x: number
  y: number
  size: number
  opacity: number
  speed: number
}

export function Starfield() {
  const [stars, setStars] = useState<Star[]>([])

  useEffect(() => {
    // Create stars
    const starCount = Math.floor((window.innerWidth * window.innerHeight) / 10000) + 50
    const newStars: Star[] = []

    for (let i = 0; i < starCount; i++) {
      newStars.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2,
        speed: Math.random() * 0.05 + 0.01,
      })
    }

    setStars(newStars)

    // Animate stars
    const animateStars = () => {
      setStars((prevStars) =>
        prevStars.map((star) => ({
          ...star,
          y: (star.y + star.speed) % 100,
        })),
      )
    }

    const animationInterval = setInterval(animateStars, 50)

    return () => clearInterval(animationInterval)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            boxShadow: `0 0 ${star.size * 2}px rgba(255, 255, 255, ${star.opacity})`,
          }}
        />
      ))}
    </div>
  )
}
