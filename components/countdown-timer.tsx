"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const weddingDate = new Date("2025-11-08T11:00:00").getTime()

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const difference = weddingDate - now

      if (difference > 0) {
        setIsAnimating(true)
        setTimeout(() => setIsAnimating(false), 500)

        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float-heart opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          >
            <div className="text-accent text-xl">💙</div>
          </div>
        ))}
      </div>

      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-sparkle"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
              animationDelay: `${i * 0.3}s`,
            }}
          >
            <div className="w-1 h-1 bg-accent rounded-full"></div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-md mx-auto relative z-10">
        <Card
          className={`p-4 text-center bg-primary text-primary-foreground transition-all duration-500 hover:scale-105 ${
            isAnimating ? "animate-pulse-gentle" : ""
          }`}
        >
          <div className="text-2xl md:text-3xl font-bold font-serif transition-all duration-300 hover:scale-110">
            {timeLeft.days}
          </div>
          <div className="text-sm opacity-90">Days</div>
          {timeLeft.days <= 30 && (
            <div className="absolute -top-2 -right-2 animate-bounce">
              <div className="w-3 h-3 bg-accent rounded-full"></div>
            </div>
          )}
        </Card>

        <Card
          className={`p-4 text-center bg-accent text-accent-foreground transition-all duration-500 hover:scale-105 ${
            isAnimating ? "animate-pulse-gentle" : ""
          }`}
        >
          <div className="text-2xl md:text-3xl font-bold font-serif transition-all duration-300 hover:scale-110">
            {timeLeft.hours}
          </div>
          <div className="text-sm opacity-90">Hours</div>
          {timeLeft.days <= 7 && (
            <div className="absolute -top-2 -right-2 animate-bounce delay-100">
              <div className="w-3 h-3 bg-primary rounded-full"></div>
            </div>
          )}
        </Card>

        <Card
          className={`p-4 text-center bg-secondary text-secondary-foreground transition-all duration-500 hover:scale-105 ${
            isAnimating ? "animate-pulse-gentle" : ""
          }`}
        >
          <div className="text-2xl md:text-3xl font-bold font-serif transition-all duration-300 hover:scale-110">
            {timeLeft.minutes}
          </div>
          <div className="text-sm opacity-90">Minutes</div>
          {timeLeft.days <= 1 && (
            <div className="absolute -top-2 -right-2 animate-bounce delay-200">
              <div className="w-3 h-3 bg-accent rounded-full"></div>
            </div>
          )}
        </Card>

        <Card
          className={`p-4 text-center bg-primary text-primary-foreground transition-all duration-500 hover:scale-105 ${
            isAnimating ? "animate-pulse-gentle" : ""
          }`}
        >
          <div className="text-2xl md:text-3xl font-bold font-serif transition-all duration-300 hover:scale-110">
            {timeLeft.seconds}
          </div>
          <div className="text-sm opacity-90">Seconds</div>
          <div className="absolute -top-1 -right-1 animate-ping">
            <div className="w-2 h-2 bg-accent rounded-full opacity-75"></div>
          </div>
        </Card>
      </div>

      {timeLeft.days <= 7 && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4 animate-bounce">
            <div className="text-accent text-2xl">✨</div>
          </div>
          <div className="absolute bottom-0 left-1/4 transform -translate-y-4 animate-bounce delay-300">
            <div className="text-primary text-xl">💍</div>
          </div>
          <div className="absolute bottom-0 right-1/4 transform -translate-y-4 animate-bounce delay-500">
            <div className="text-accent text-xl">💕</div>
          </div>
        </div>
      )}
    </div>
  )
}
