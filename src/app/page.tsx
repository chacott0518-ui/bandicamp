import HeroSection from '@/components/home/HeroSection'
import StatsSection from '@/components/home/StatsSection'
import IntroSection from '@/components/home/IntroSection'
import SeasonSection from '@/components/home/SeasonSection'
import FacilitiesPreview from '@/components/home/FacilitiesPreview'
import PricingPreview from '@/components/home/PricingPreview'
import ReviewSection from '@/components/home/ReviewSection'
import FaqPreview from '@/components/home/FaqPreview'
import LocationSection from '@/components/home/LocationSection'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LodgingBusiness',
  name: '반딧불캠핑장',
  description: '경기도 양평 서종면 계곡 앞 반딧불캠핑장.',
  url: 'https://bandicamp.net',
  telephone: '+82-507-1373-9650',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '서종면 노문리 417-2',
    addressLocality: '양평군',
    addressRegion: '경기도',
    postalCode: '12564',
    addressCountry: 'KR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 37.6463936,
    longitude: 127.4332071,
  },
  priceRange: '₩60,000 ~ ₩70,000',
  openingHours: 'Mo-Su 14:00-12:00',
}

export default function HomePage() {
  return (
    <div className="pb-20 md:pb-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      <StatsSection />
      <IntroSection />
      <SeasonSection />
      <FacilitiesPreview />
      <PricingPreview />
      <ReviewSection />
      <FaqPreview />
      <LocationSection />
    </div>
  )
}