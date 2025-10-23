"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const galleryImages = [
  // preweding
  {
    src: "/pictures/02.jpeg",
    alt: "Pre wedding photo 1",
    category: "prewedding",
  },
  {
    src: "/pictures/03.jpeg",
    alt: "Pre wedding photo 2",
    category: "prewedding",
  },
  {
    src: "/pictures/04.jpeg",
    alt: "Pre wedding photo 3",
    category: "prewedding",
  },
  {
    src: "/pictures/05.jpeg",
    alt: "Pre wedding photo 5",
    category: "prewedding",
  },
  {
    src: "/pictures/06.jpeg",
    alt: "Pre wedding photo 6",
    category: "prewedding",
  },
  {
    src: "/pictures/07.jpeg",
    alt: "Pre wedding photo 7",
    category: "prewedding",
  },
  {
    src: "/pictures/08.jpeg",
    alt: "Pre wedding photo 8",
    category: "prewedding",
  },
  {
    src: "/pictures/09.jpeg",
    alt: "Pre wedding photo 9",
    category: "prewedding",
  },
  {
    src: "/pictures/01.jpeg",
    alt: "Pre wedding photo 10",
    category: "prewedding",
  },
  // photoshoot
  {
    src: "/photoshoot/0.jpg",
    alt: "Photoshoot photo 0",
    category: "photoshoot",
  },
  {
    src: "/photoshoot/1.jpg",
    alt: "Photoshoot photo 1",
    category: "photoshoot",
  },
  {
    src: "/photoshoot/2.jpg",
    alt: "Photoshoot photo 2",
    category: "photoshoot",
  },
  {
    src: "/photoshoot/3.jpg",
    alt: "Photoshoot photo 3",
    category: "photoshoot",
  },
  {
    src: "/photoshoot/4.png",
    alt: "Photoshoot photo 4",
    category: "photoshoot",
  },
  {
    src: "/photoshoot/5.png",
    alt: "Photoshoot photo 5",
    category: "photoshoot",
  },
  {
    src: "/photoshoot/6.png",
    alt: "Photoshoot photo 6",
    category: "photoshoot",
  },
  {
    src: "/photoshoot/7.png",
    alt: "Photoshoot photo 7",
    category: "photoshoot",
  },
  {
    src: "/photoshoot/8.png",
    alt: "Photoshoot photo 8",
    category: "photoshoot",
  },
  {
    src: "/photoshoot/9.png",
    alt: "Photoshoot photo 9",
    category: "photoshoot",
  },
  {
    src: "/photoshoot/10.jpg",
    alt: "Photoshoot photo 10",
    category: "photoshoot",
  },
  {
    src: "/photoshoot/11.png",
    alt: "Photoshoot photo 11",
    category: "photoshoot",
  },
  {
    src: "/photoshoot/12.png",
    alt: "Photoshoot photo 12",
    category: "photoshoot",
  },
  {
    src: "/photoshoot/13.png",
    alt: "Photoshoot photo 13",
    category: "photoshoot",
  },
  {
    src: "/photoshoot/14.png",
    alt: "Photoshoot photo 14",
    category: "photoshoot",
  },
];

export function WeddingGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [filter, setFilter] = useState<"all" | "prewedding" | "photoshoot">(
    "all"
  );

  const filteredImages =
    filter === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === filter);

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
          variant={filter === "prewedding" ? "default" : "outline"}
          onClick={() => setFilter("prewedding")}
          className="bg-accent hover:bg-accent/90 text-accent-foreground"
        >
          Pre-wedding
        </Button>
        <Button
          variant={filter === "photoshoot" ? "default" : "outline"}
          onClick={() => setFilter("photoshoot")}
          className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
        >
          Photo shoot
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredImages.map((image, index) => (
          <Card
            key={index}
            className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300 group p-0"
            onClick={() => setSelectedImage(image.src)}
          >
            <div className="aspect-[2/3] overflow-hidden">
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </Card>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => {
            setSelectedImage(null);
          }}
        >
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
              className="max-w-full max-h-full object-cover object-top"
            />
          </div>
        </div>
      )}
    </div>
  );
}
