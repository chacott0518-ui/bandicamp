'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

const CARDS = [
  {
    num: '01 · CAMPSITE',
    title: '캠핑 사이트',
    desc: '5×6m 파쇄석 · 오토캠핑 · 차박 · 와이파이',
    href: '/facilities',
    img: 'https://images.unsplash.com/photo-1537225228614-56cc3556d7ed?w=800&q=75',
    alt: '반딧불캠핑장 파쇄석 오토캠핑 사이트',
  },
  {
    num: '02 · NATURE',
    title: '자연 환경',
    desc: '계곡 인접 · 밤하늘 별 · 반딧불이 서식지',
    href: '/facilities',
    img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=75',
    alt: '양평 밤하늘 별자리 계곡 숲속 캠핑',
  },
  {
    num: '03 · AMENITIES',
    title: '공용 시설',
    desc: '주차 · 매점 · 취사실 · 화장실 · 샤워실',
    href: '/facilities',
    img: 'https://images.unsplash.com/photo-1571863533956-01c88e79957e?w=800&q=75',
    alt: '캠핑장 깨끗한 화장실 샤워실 공용시설',
  },
  {
    num: '04 · VALLEY',
    title: '계곡 물놀이',
    desc: '도보 2분 · 청정 계곡 · 여름 물놀이 명소',
    href: '/facilities',
    img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=75',
    alt: '양평 서종 계곡 물놀이 아이와 캠핑',
  },
  {
    num: '05 · STARRY',
    title: '밤하늘 별 관측',
    desc: '광공해 없는 청정 지역 · 은하수 관측',
    href: '/facilities',
    img: 'https://images.unsplash.com/photo-1464852045489-bccb7d17fe39?w=800&q=75',
    alt: '반딧불이 밤하늘 별자리 관측 캠핑장',
  },
  {
    num: '06 · BARBECUE',
    title: '바베큐 & 불멍',
    desc: '각 사이트 화로대 · 불멍 · 바베큐 가능',
    href: '/facilities',
    img: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=75',
    alt: '캠핑 바베큐 화로대 불멍',
  },
]

export default function FacilitiesPreview() {
  return (
    <section className="bg-white py-14 md:py-24">
      <div className="max-w-7xl mx-auto px-5 md:px-12">

        {/* 헤더 */}
        <div className="flex justify-between items-end mb-7">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-[10px] text-forest/40 tracking-[0.22em] uppercase mb-2">
              Facilities
            </p>
            <h2 className="text-forest font-[700] text-[22px] md:text-[38px] tracking-[-0.02em]">
              시설 안내
            </h2>
          </motion.div>
          <Link
            href="/facilities"
            className="text-[11px] md:text-[12px] text-forest/40 hover:text-forest tracking-[0.06em] hover:underline underline-offset-4 transition-colors"
          >
            자세히 보기 →
          </Link>
        </div>

        {/* 6개 카드 그리드 */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-border">
          {CARDS.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <Link
                href={card.href}
                className="block relative overflow-hidden h-[160px] md:h-[300px] group bg-white"
              >
                <Image
                  src={card.img}
                  alt={card.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/90 via-forest-deep/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3 md:p-6">
                  <p className="font-cormorant italic text-gold/60 text-[8px] md:text-[10px] tracking-[0.15em] mb-1">
                    {card.num}
                  </p>
                  <p className="text-white font-[700] text-[12px] md:text-[17px] mb-0.5 md:mb-1.5">
                    {card.title}
                  </p>
                  <p className="text-white/55 font-[300] text-[9px] md:text-[12px] leading-[1.6] hidden md:block">
                    {card.desc}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}