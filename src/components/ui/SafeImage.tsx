'use client'
import Image, { ImageProps } from 'next/image'
import { useState } from 'react'

interface SafeImageProps extends Omit<ImageProps, 'onError'> {
  fallbackClassName?: string
}

export default function SafeImage({
  fallbackClassName,
  className,
  alt,
  ...props
}: SafeImageProps) {
  const [error, setError] = useState(false)

  if (error) {
    return (
      <div
        className={`bg-forest-light ${fallbackClassName ?? className ?? ''}`}
        aria-label={alt}
        role="img"
      />
    )
  }

  return (
    <Image
      {...props}
      alt={alt}
      className={className}
      onError={() => setError(true)}
    />
  )
}