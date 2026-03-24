'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function IntroSection() {
  return (
    <section className="bg-cream py-14 md:py-24">
      <div className="max-w-7xl mx-auto px-5 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">

          {/* 이미지 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[240px] md:h-[460px] overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=900&q=80"
              alt="경기도 양평 서종 숲속 오토캠핑장 반딧불캠핑장 전경"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>

          {/* 텍스트 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-[10px] text-forest/40 tracking-[0.2em] uppercase mb-3">
              About Bandicamp
            </p>
            <h2 className="font-[700] text-[24px] md:text-[42px] text-forest leading-[1.2] tracking-[-0.02em] mb-5">
              경기도 양평,<br />자연이 숨쉬는 곳
            </h2>
            <p className="text-[13px] md:text-[15px] text-muted font-[300] leading-[2] mb-4">
              서울근교캠핑장 중 단연 손꼽히는 청정 자연환경, 반딧불캠핑장은 경기도 양평 서종면 계곡인접 오토캠핑장입니다. 서울양양고속도로 서종IC에서 불과 10분 거리로 수도권 당일캠핑, 퇴근박이 모두 가능하며 양평가볼만한곳으로 각광받고 있습니다.
            </p>
            <p className="text-[13px] md:text-[15px] text-muted font-[300] leading-[2] mb-6">
              파쇄석 사이트로 비 오는 날도 진흙 걱정 없이 쾌적하며, 화장실·샤워실(온수)·취사실·매점이 완비된 시설좋은캠핑장입니다. 6~8월 반딧불이체험이 가능한 양평 키즈캠핑장·가족캠핑장추천 1순위입니다.
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                '#양평캠핑장',
                '#서울근교오토캠핑',
                '#반딧불이체험',
                '#계곡캠핑',
                '#키즈캠핑장',
                '#감성캠핑',
                '#가족캠핑',
              ].map((tag) => (
                <span
                  key={tag}
                  className="bg-forest text-gold text-[10px] md:text-[11px] font-[500] px-3 py-1.5 tracking-[0.04em]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}