"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

const galleryImages = [
  {
    src: "/romantic-engagement-photo-of-couple-in-elegant-set.jpg",
    alt: "Engagement Photo 1",
    category: "engagement",
  },
  {
    src: "/beautiful-pre-wedding-photo-with-blue-and-gold-the.jpg",
    alt: "Pre-wedding Photo 1",
    category: "prewedding",
  },
  {
    src: "/couple-portrait-in-elegant-formal-wear.jpg",
    alt: "Engagement Photo 2",
    category: "engagement",
  },
  {
    src: "/romantic-outdoor-pre-wedding-photography.jpg",
    alt: "Pre-wedding Photo 2",
    category: "prewedding",
  },
  {
    src: "/elegant-couple-photo-with-floral-background.jpg",
    alt: "Engagement Photo 3",
    category: "engagement",
  },
  {
    src: "/beautiful-pre-wedding-photo-in-natural-setting.jpg",
    alt: "Pre-wedding Photo 3",
    category: "prewedding",
  },
]

export function WeddingGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [filter, setFilter] = useState<"all" | "engagement" | "prewedding">("all")

  const filteredImages = filter === "all" ? galleryImages : galleryImages.filter((img) => img.category === filter)

  return (
    <div className="space-y-6">
      <div className="flex justify-center gap-4 flex-wrap">
        <Button
          variant={filter === "all" ? "default" : "outline"}
          onClick={() => setFilter("all")}
          className="bg-primary hover:bg-primary/90"
        >
          All Photos
        </Button>
        <Button
          variant={filter === "engagement" ? "default" : "outline"}
          onClick={() => setFilter("engagement")}
          className="bg-accent hover:bg-accent/90 text-accent-foreground"
        >
          Engagement
        </Button>
        <Button
          variant={filter === "prewedding" ? "default" : "outline"}
          onClick={() => setFilter("prewedding")}
          className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
        >
          Pre-wedding
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredImages.map((image, index) => (
          <Card
            key={index}
            className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300 group"
            onClick={() => setSelectedImage(image.src)}
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </Card>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl max-h-full">
            <Button
              variant="ghost"
              size="icon"
              className="absolute -top-12 right-0 text-white hover:bg-white/20"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-6 w-6" />
            </Button>
            <img
              src={selectedImage || "/placeholder.svg"}
              alt="Gallery image"
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
      )}
    </div>
  )
}
