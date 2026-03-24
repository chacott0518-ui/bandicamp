import Image from 'next/image'

interface PageBannerProps {
  engTitle: string
  koTitle: string
  imageSrc: string
  imageAlt: string
}

export default function PageBanner({ engTitle, koTitle, imageSrc, imageAlt }: PageBannerProps) {
  return (
    <section className="relative h-[320px] md:h-[480px] overflow-hidden">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-forest-deep/70 via-forest-deep/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/40 to-transparent" />
      <div className="absolute bottom-10 md:bottom-14 left-6 md:left-[8%] z-10">
        <p className="font-cormorant italic text-gold/75 text-[12px] md:text-[13px] tracking-[0.2em] mb-2 md:mb-3">
          {engTitle}
        </p>
        <h1 className="text-white font-[800] text-[32px] md:text-[52px] leading-[1.1] tracking-[-0.02em]">
          {koTitle}
        </h1>
      </div>
    </section>
  )
}