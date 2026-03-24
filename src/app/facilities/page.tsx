import type { Metadata } from 'next'
import PageBanner from '@/components/ui/PageBanner'
import FacilitiesTabs from '@/components/facilities/FacilitiesTabs'
import { IMAGES } from '@/constants/images'

export const metadata: Metadata = {
  title: '시설 안내 | 반딧불캠핑장',
  description: '반딧불캠핑장 파쇄석 오토캠핑 사이트 5x6m. 계곡 인접 자연환경, 화장실·샤워실·취사실 공용시설 안내. 양평 시설좋은캠핑장.',
}

export default function FacilitiesPage() {
  return (
    <main className="pb-20 md:pb-0">
      <PageBanner
        engTitle="Facilities"
        koTitle="시설 안내"
        imageSrc={IMAGES.facilities.banner}
        imageAlt="반딧불캠핑장 야간 조명 텐트 오토캠핑 사이트"
      />
      <FacilitiesTabs />
    </main>
  )
}