'use client'
import { useState } from 'react'
import Image from 'next/image'

interface SliderImage {
  src: string
  alt: string
}

interface ImageSliderProps {
  images: SliderImage[]
  height?: string
}

export default function ImageSlider({ images, height = 'h-[280px] md:h-[420px]' }: ImageSliderProps) {
  const [current, setCurrent] = useState(0)

  if (!images || images.length === 0) return null

  return (
    <div>
      <div className={`relative ${height} overflow-hidden bg-forest-light`}>
        <Image
          src={images[current].src}
          alt={images[current].alt}
          fill
          className="object-cover transition-opacity duration-300"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {images.length > 1 && (
        <div className="flex gap-2 mt-3 justify-center">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`rounded-full transition-all duration-200 ${
                i === current
                  ? 'w-5 h-1.5 bg-forest'
                  : 'w-1.5 h-1.5 bg-forest/20 hover:bg-forest/40'
              }`}
              aria-label={`이미지 ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}