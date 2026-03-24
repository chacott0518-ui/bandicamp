'use client'
import { motion } from 'framer-motion'

const STRENGTHS = [
  {
    title: '파쇄석 사이트',
    desc: '비 오는 날에도 진흙 없이 깔끔한 파쇄석 바닥. 텐트 설치와 철수가 쉽고 쾌적합니다.',
  },
  {
    title: '계곡 도보 인접',
    desc: '캠핑장에서 걸어서 2분, 여름 물놀이 명소. 수심이 얕아 아이들도 안전하게 즐깁니다.',
  },
  {
    title: '반딧불이 서식지',
    desc: '6~8월 밤, 캠핑장 주변에서 반딧불이를 직접 관찰할 수 있는 청정 자연환경입니다.',
  },
]

export default function StatsSection() {
  return (
    <section className="bg-cream py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-5 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          {STRENGTHS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border-l-2 border-gold pl-4 md:pl-5 py-1"
            >
              <h3 className="text-forest font-[700] text-[14px] md:text-[15px] mb-1.5 tracking-[-0.01em]">
                {item.title}
              </h3>
              <p className="text-muted font-[300] text-[12px] md:text-[13px] leading-[1.85]">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}