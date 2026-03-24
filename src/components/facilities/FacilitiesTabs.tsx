'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import ReserveButton from '@/components/ui/ReserveButton'

const TABS = [
  { id: 'campsite', label: '캠핑 사이트' },
  { id: 'nature', label: '자연 환경' },
  { id: 'amenities', label: '공용 시설' },
  { id: 'valley', label: '계곡 물놀이' },
  { id: 'starry', label: '밤하늘 별' },
  { id: 'barbecue', label: '바베큐 & 불멍' },
]

interface ContentItem {
  title: string
  desc: string[]
  specs?: { label: string; value: string }[]
  tags?: string[]
  images: { src: string; alt: string }[]
}

const CONTENT: Record<string, ContentItem> = {
  campsite: {
    title: '캠핑 사이트',
    desc: [
      '반딧불캠핑장의 캠핑 사이트는 5×6m 파쇄석 바닥으로 조성되어 있습니다. 비 오는 날에도 진흙 걱정 없이 쾌적한 캠핑이 가능하며, 오토캠핑·차박·트레일러(사전 문의) 등 다양한 방식의 캠핑을 즐길 수 있습니다.',
      '각 사이트마다 전기 콘센트(220V)와 와이파이가 제공됩니다. 기준 인원 성인 2인, 최대 4인(어른 2+아이 2)까지 이용 가능합니다.',
    ],
    specs: [
      { label: '사이트 크기', value: '5 × 6 (m)' },
      { label: '바닥재', value: '파쇄석' },
      { label: '기준 인원', value: '성인 2인' },
      { label: '최대 인원', value: '4인 (어른2+아이2)' },
      { label: '차박', value: '소형 차량 가능' },
      { label: '트레일러', value: '사전 문의 필수' },
    ],
    tags: ['#파쇄석사이트', '#오토캠핑', '#차박가능', '#와이파이', '#넓은사이트'],
    images: [
      { src: 'https://images.unsplash.com/photo-1537225228614-56cc3556d7ed?w=900&q=80', alt: '반딧불캠핑장 파쇄석 오토캠핑 사이트 야간 조명' },
      { src: 'https://images.unsplash.com/photo-1563299796-17596ed6b017?w=900&q=80', alt: '파쇄석 오토캠핑 사이트 차박 가능' },
    ],
  },
  nature: {
    title: '자연 환경',
    desc: [
      '반딧불캠핑장은 경기도 양평 서종면 청정 숲속에 자리잡고 있습니다. 계곡이 도보 2분 거리에 위치해 여름 물놀이 명소로 유명하며, 도심 광공해가 없어 밤하늘의 별과 반딧불이를 생생하게 관찰할 수 있습니다.',
      '6월부터 8월까지는 반딧불이가 서식하는 시즌으로, 밤이 되면 수십 마리의 반딧불이가 캠핑장 주변을 수놓습니다. 울창한 숲 속 산책로도 조성되어 있어 아침 힐링 산책을 즐기실 수 있습니다.',
    ],
    tags: ['#반딧불이체험', '#숲세권', '#힐링산책', '#자연친화적', '#청정자연'],
    images: [
      { src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=900&q=80', alt: '양평 밤하늘 별자리 관측 숲속 캠핑' },
      { src: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=900&q=80', alt: '경기도 양평 숲속 산책로 힐링 캠핑' },
    ],
  },
  amenities: {
    title: '공용 시설',
    desc: [
      '반딧불캠핑장은 초보 캠퍼도 불편함 없이 이용할 수 있도록 편의시설을 완비하고 있습니다. 남녀 구분 샤워실(온수 24시간), 청결하게 관리되는 화장실, 넓은 취사실, 매점이 운영됩니다.',
      '주차장은 각 사이트 인접에 위치하며 대형 SUV도 주차 가능합니다. 모든 시설은 주기적으로 청소·관리되어 항상 쾌적하게 이용하실 수 있습니다.',
    ],
    specs: [
      { label: '샤워실', value: '남녀 구분 · 온수 24h' },
      { label: '화장실', value: '주기적 청소 관리' },
      { label: '취사실', value: '개수대 온수 완비' },
      { label: '매점', value: '캠핑용품·식재료' },
      { label: '주차장', value: '사이트 인접' },
      { label: '와이파이', value: '전 구역 제공' },
    ],
    tags: ['#깨끗한캠핑장', '#시설좋은캠핑장', '#샤워실온수', '#매점있는캠핑장'],
    images: [
      { src: 'https://images.unsplash.com/photo-1571863533956-01c88e79957e?w=900&q=80', alt: '캠핑장 공용시설 샤워실 화장실 취사실' },
      { src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=900&q=80', alt: '캠핑장 취사실 개수대 온수' },
    ],
  },
  valley: {
    title: '계곡 물놀이',
    desc: [
      '캠핑장에서 걸어서 단 2분, 청정 계곡이 바로 앞에 있습니다. 수심이 얕아 어린아이들도 안전하게 물놀이를 즐길 수 있으며, 여름 성수기(6~8월)에는 가족 단위 캠퍼들에게 최고의 피서지가 됩니다.',
      '물이 맑고 깨끗하여 양평 계곡 물놀이 명소로 손꼽힙니다. 단, 장마철 우기에는 수위가 높아질 수 있으니 물놀이 전 현장 상황을 꼭 확인해 주세요.',
    ],
    tags: ['#계곡캠핑장', '#양평계곡물놀이', '#키즈캠핑장', '#수영장캠핑장', '#여름방학캠핑'],
    images: [
      { src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=80', alt: '양평 서종 계곡 물놀이 아이와 캠핑 가족' },
      { src: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=900&q=80', alt: '경기도 양평 여름 계곡 청정 물놀이' },
    ],
  },
  starry: {
    title: '밤하늘 별 관측',
    desc: [
      '도심의 광공해가 없는 청정 지역에 위치해 맑은 날 밤이면 은하수와 수많은 별자리를 맨눈으로 관측할 수 있습니다. 6~8월에는 반딧불이까지 더해져 환상적인 밤하늘 풍경이 펼쳐집니다.',
      '비가 갠 다음날 밤, 달빛이 없는 그믐 무렵 오후 9시~11시 사이가 관찰 최적 시간입니다. 조명을 끄고 조용히 기다리면 수십 마리의 반딧불이를 만날 수 있습니다.',
    ],
    tags: ['#별보기좋은캠핑장', '#밤하늘캠핑장', '#별자리관측', '#반딧불이캠핑장', '#불멍하기좋은곳'],
    images: [
      { src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=900&q=80', alt: '양평 밤하늘 은하수 별자리 반딧불이 관측' },
      { src: 'https://images.unsplash.com/photo-1464852045489-bccb7d17fe39?w=900&q=80', alt: '반딧불이 밤하늘 별보기 좋은 캠핑장' },
    ],
  },
  barbecue: {
    title: '바베큐 & 불멍',
    desc: [
      '각 사이트마다 화로대 사용이 가능합니다. 장작 타는 소리와 함께하는 불멍은 캠핑의 진수입니다. 단, 과대불판 사용 및 텐트 내 화기 사용은 안전을 위해 엄격히 금지됩니다.',
      '매점에서 바베큐 재료 구매도 가능합니다. 안전한 캠핑을 위해 입실 후 소화기 위치와 사용법을 반드시 확인해 주세요.',
    ],
    tags: ['#불멍하기좋은곳', '#바베큐캠핑', '#감성캠핑장', '#뷰좋은캠핑장'],
    images: [
      { src: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=900&q=80', alt: '캠핑 바베큐 화로대 불멍 감성 캠핑' },
      { src: 'https://images.unsplash.com/photo-1510672981848-a1c4f1cb5ccf?w=900&q=80', alt: '저녁 바베큐 캠핑 불멍 양평' },
    ],
  },
}

export default function FacilitiesTabs() {
  const [active, setActive] = useState('campsite')
  const [imgIndex, setImgIndex] = useState(0)
  const content = CONTENT[active]

  const handleTabChange = (id: string) => {
    setActive(id)
    setImgIndex(0)
  }

  return (
    <section className="bg-cream py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-5 md:px-12">

        {/* 탭 버튼 — 가로 스크롤 */}
        <div className="flex overflow-x-auto gap-2 mb-10 pb-1 scrollbar-hide">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={`
                flex-shrink-0 px-4 py-2.5 text-[12px] md:text-[13px] font-[600]
                tracking-[0.03em] transition-all duration-200 rounded-full
                ${active === tab.id
                  ? 'bg-forest text-white shadow-[0_2px_12px_rgba(26,40,24,0.25)]'
                  : 'bg-white text-forest/60 hover:text-forest border border-border'
                }
              `}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 콘텐츠 영역 */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start"
          >
            {/* 이미지 슬라이더 */}
            <div>
              <div className="relative h-[260px] md:h-[420px] overflow-hidden bg-forest-light">
                <Image
                  src={content.images[imgIndex].src}
                  alt={content.images[imgIndex].alt}
                  fill
                  className="object-cover transition-opacity duration-300"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              {content.images.length > 1 && (
                <div className="flex gap-2 mt-3 justify-center">
                  {content.images.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setImgIndex(i)}
                      className={`rounded-full transition-all duration-200 ${
                        i === imgIndex
                          ? 'w-5 h-1.5 bg-forest'
                          : 'w-1.5 h-1.5 bg-forest/20 hover:bg-forest/40'
                      }`}
                      aria-label={`이미지 ${i + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* 텍스트 콘텐츠 */}
            <div>
              <h2 className="text-forest font-[700] text-[24px] md:text-[32px] tracking-[-0.02em] mb-6">
                {content.title}
              </h2>

              {content.desc.map((p, i) => (
                <p key={i} className="text-muted font-[300] text-[14px] leading-[2] mb-4">
                  {p}
                </p>
              ))}

              {/* 스펙 그리드 */}
              {content.specs && (
                <div className="grid grid-cols-2 gap-3 mt-8">
                  {content.specs.map((spec) => (
                    <div key={spec.label} className="bg-white p-4 border-b-2 border-forest">
                      <p className="text-[10px] text-muted uppercase tracking-widest font-[400] mb-1">
                        {spec.label}
                      </p>
                      <p className="text-forest font-[700] text-[14px]">{spec.value}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* 태그 */}
              {content.tags && (
                <div className="flex flex-wrap gap-2 mt-6">
                  {content.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-forest text-gold text-[11px] font-[500] px-3 py-1.5 tracking-[0.04em]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <div className="mt-8">
                <ReserveButton size="md" />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  )
}