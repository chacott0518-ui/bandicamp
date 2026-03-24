import type { Metadata } from 'next'
import PageBanner from '@/components/ui/PageBanner'
import Image from 'next/image'

export const metadata: Metadata = {
  title: '캠핑장 소개 | 반딧불캠핑장',
  description: '경기도 양평 서종 반딧불캠핑장 소개. 반딧불이 서식지, 숲속 계곡 감성캠핑, 서울근교 오토캠핑장 이야기.',
}

const TIMELINE = [
  { month: '5月', title: '유충기', desc: '반딧불이 유충 땅 위로 이동, 번데기 준비' },
  { month: '6月', title: '성충 초기', desc: '첫 반딧불이 비행 시작, 밤 9시 이후 관찰' },
  { month: '7月', title: '최성기', desc: '반딧불이 최고 밀집, 비 갠 다음날 최적 관찰' },
  { month: '8月', title: '성수기 마무리', desc: '계곡 물놀이와 반딧불이 동시 즐기기' },
  { month: '9月', title: '시즌 종료', desc: '단풍 캠핑 시즌으로 전환' },
]

const NEARBY = [
  {
    title: '두물머리',
    distance: '15분',
    desc: '북한강과 남한강이 만나는 양평 대표 관광명소',
    img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=75',
    alt: '양평 두물머리 두 강이 만나는 풍경',
  },
  {
    title: '세미원',
    distance: '20분',
    desc: '사계절 아름다운 수생식물원과 연꽃 정원',
    img: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&q=75',
    alt: '양평 세미원 연꽃 수목원',
  },
  {
    title: '양평 레일바이크',
    distance: '20분',
    desc: '폐선 철로를 달리는 가족 체험 레일바이크',
    img: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=400&q=75',
    alt: '양평 레일바이크 북한강',
  },
  {
    title: '서종 카페거리',
    distance: '10분',
    desc: '서종면 감성 카페와 맛집 거리 산책',
    img: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400&q=75',
    alt: '양평 서종 감성 카페 드라이브',
  },
]

export default function AboutPage() {
  return (
    <main className="pb-20 md:pb-0">
      <PageBanner
        engTitle="About Us"
        koTitle="반딧불캠핑장 이야기"
        imageSrc="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=1600&q=80"
        imageAlt="양평 서종 숲속 반딧불캠핑장 전경 서울근교캠핑장"
      />

      {/* 소개 */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="relative h-[260px] md:h-[460px] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1510672981848-a1c4f1cb5ccf?w=900&q=80"
                alt="경기도 양평 감성 오토캠핑 밤풍경 반딧불이"
                fill className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <p className="text-[10px] text-forest/40 tracking-[0.2em] uppercase mb-3">Our Story</p>
              <h2 className="text-forest font-[700] text-[22px] md:text-[38px] tracking-[-0.02em] leading-[1.2] mb-5">
                자연과 사람이<br />만나는 공간
              </h2>
              <p className="text-[13px] md:text-[15px] text-muted font-[300] leading-[2] mb-4">
                반딧불캠핑장은 경기도 양평군 서종면 노문리에 위치한 소규모 감성 오토캠핑장입니다. 북한강 인근 청정 숲속에 자리잡아 공기가 맑고 조용하며, 계곡이 바로 앞에 위치해 여름 물놀이 명소로 손꼽힙니다.
              </p>
              <p className="text-[13px] md:text-[15px] text-muted font-[300] leading-[2]">
                서울근교캠핑장 중에서도 접근성이 뛰어난 곳으로, 서울양양고속도로 서종IC에서 10분 거리라 수도권 당일캠핑·퇴근박이 가능합니다. 두물머리, 세미원 등 양평여행 명소와 인접해 양평가볼만한곳으로도 인기입니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 반딧불이 타임라인 — 모바일 가로 스크롤 */}
      <section className="bg-forest py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-12">
          <p className="text-[10px] text-white/30 tracking-[0.22em] uppercase mb-3">Season</p>
          <h2 className="text-white font-[700] text-[22px] md:text-[38px] tracking-[-0.02em] mb-2">반딧불이 체험 시즌</h2>
          <p className="text-white/50 font-[300] text-[13px] mb-10">6월부터 8월, 반딧불이가 밤하늘을 수놓습니다</p>

          {/* 모바일: 가로 스크롤, PC: 5컬럼 */}
          <div className="flex md:grid md:grid-cols-5 gap-0 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
            {TIMELINE.map((item, i) => (
              <div key={i} className="border-l border-white/10 pl-5 pb-0 min-w-[160px] md:min-w-0 pr-4 md:pr-0">
                <p className="font-cormorant italic text-gold text-[26px] md:text-[28px] font-[700] leading-none mb-2">{item.month}</p>
                <p className="text-white font-[600] text-[12px] md:text-[13px] mb-1.5">{item.title}</p>
                <p className="text-white/50 text-[11px] font-[300] leading-[1.7]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 주변 관광지 */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-12">
          <p className="text-[10px] text-forest/40 tracking-[0.22em] uppercase mb-3">Nearby</p>
          <h2 className="text-forest font-[700] text-[22px] md:text-[38px] tracking-[-0.02em] mb-8">주변 관광지</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {NEARBY.map((place, i) => (
              <div key={i} className="overflow-hidden bg-white">
                <div className="relative h-36 md:h-48">
                  <Image
                    src={place.img}
                    alt={place.alt}
                    fill className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <div className="p-3 md:p-5">
                  <p className="text-forest font-[600] text-[13px] md:text-[15px] mb-1">{place.title}</p>
                  <p className="text-gold text-[10px] md:text-[11px] font-[500] mb-1.5">{place.distance}</p>
                  <p className="text-muted text-[11px] md:text-[13px] font-[300] leading-[1.6] break-keep">{place.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}