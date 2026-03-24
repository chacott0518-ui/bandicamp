'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'

const REVIEWS = [
  {
    name: '캠핑러버맘',
    date: '2024.08',
    text: '밤에 진짜 반딧불이가 날아다니는 걸 보고 아이들이 너무 좋아했어요. 서울에서 1시간밖에 안 되는데 이런 청정 자연환경이라니 정말 놀랐습니다. 계곡도 바로 앞이라 물놀이까지 하고 최고의 여름 추억을 만들었어요.',
  },
  {
    name: '행복한4인가족',
    date: '2024.09',
    text: '파쇄석 사이트라 비 온 다음날도 진흙 없이 깔끔했어요. 샤워실 온수도 잘 나오고 화장실도 너무 깨끗해요. 초보 캠퍼인데 사장님이 이것저것 알려주셔서 첫 캠핑이 정말 즐거웠습니다.',
  },
  {
    name: '별보는캠퍼',
    date: '2024.07',
    text: '서울 1시간 거리에 이런 밤하늘이 펼쳐지다니 정말 감동이었습니다. 아이와 별자리 관측도 하고 반딧불이도 처음 봤는데 아이가 너무 신기해했어요. 체험형 캠핑장으로 최고입니다.',
  },
  {
    name: '커플캠핑러버',
    date: '2024.06',
    text: '감성 캠핑장으로 완벽해요. 나무 사이 조명 텐트, 계곡 소리, 반딧불이까지. 연인과 오기 정말 좋아요. 조용하고 매너타임도 잘 지켜져서 정말 편안하게 쉬었습니다.',
  },
  {
    name: '캠핑초보입문',
    date: '2024.05',
    text: '처음 캠핑인데 와이파이도 잘 되고 매점도 있어서 편했어요. 사이트가 넓어서 대형 텐트도 여유롭게 쳤습니다. 서종IC에서 너무 가까워 접근성도 최고입니다.',
  },
  {
    name: '양평단골캠퍼',
    date: '2024.10',
    text: '가을 단풍 시즌에 왔는데 너무 예뻤어요. 단풍 속 불멍이 최고의 힐링이었습니다. 조용한 캠핑장이라 마음이 편안해져요. 내년 봄에도 꼭 또 올 예정입니다.',
  },
]

export default function ReviewSection() {
  const [current, setCurrent] = useState(0)
  const prev = () => setCurrent((c) => (c - 1 + REVIEWS.length) % REVIEWS.length)
  const next = () => setCurrent((c) => (c + 1) % REVIEWS.length)

  return (
    <section className="bg-cream py-14 md:py-24">
      <div className="max-w-7xl mx-auto px-5 md:px-12">

        {/* 헤더 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-7"
        >
          <p className="text-[10px] text-forest/40 tracking-[0.22em] uppercase mb-2">Reviews</p>
          <h2 className="text-forest font-[700] text-[22px] md:text-[38px] tracking-[-0.02em]">
            방문객 후기
          </h2>
        </motion.div>

        {/* PC: 3컬럼 그리드 */}
        <div className="hidden md:grid grid-cols-3 gap-5">
          {REVIEWS.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="bg-white p-6 border-t-2 border-forest"
            >
              <div className="text-gold text-[12px] tracking-[2px] mb-3">★★★★★</div>
              <p className="text-ink/65 font-[300] text-[13px] leading-[1.9] italic">
                &ldquo;{r.text}&rdquo;
              </p>
              <div className="w-6 h-px bg-border mt-4 mb-3" />
              <p className="text-forest text-[11px] font-[600]">
                {r.name}{' '}
                <span className="text-muted font-[300]">· {r.date}</span>
              </p>
            </motion.div>
          ))}
        </div>

        {/* 모바일: 슬라이더 */}
        <div className="md:hidden">
          {/* 메인 카드 */}
          <div className="bg-white p-5 border-t-2 border-forest mb-3">
            <div className="text-gold text-[12px] tracking-[2px] mb-3">★★★★★</div>
            <p className="text-ink/65 font-[300] text-[13px] leading-[1.9] italic">
              &ldquo;{REVIEWS[current].text}&rdquo;
            </p>
            <div className="w-6 h-px bg-border mt-4 mb-3" />
            <p className="text-forest text-[11px] font-[600]">
              {REVIEWS[current].name}{' '}
              <span className="text-muted font-[300]">· {REVIEWS[current].date}</span>
            </p>
          </div>

          {/* 네비게이터 */}
          <div className="flex items-center justify-between mb-3">
            <button
              onClick={prev}
              className="w-8 h-8 border border-forest/20 flex items-center justify-center hover:border-forest transition text-forest/60"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <div className="flex gap-1.5">
              {REVIEWS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`rounded-full transition-all duration-200 ${
                    i === current ? 'w-4 h-1.5 bg-forest' : 'w-1.5 h-1.5 bg-forest/20'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-8 h-8 border border-forest/20 flex items-center justify-center hover:border-forest transition text-forest/60"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>

          {/* 미니 프리뷰 2개 */}
          <div className="grid grid-cols-2 gap-2">
            {[1, 2].map((offset) => {
              const idx = (current + offset) % REVIEWS.length
              return (
                <div
                  key={offset}
                  onClick={() => setCurrent(idx)}
                  className="bg-white p-3 border-t-2 border-forest/30 opacity-55 cursor-pointer hover:opacity-75 transition"
                >
                  <div className="text-gold text-[9px] tracking-[2px] mb-1.5">★★★★★</div>
                  <p className="text-ink/60 font-[300] text-[10px] leading-[1.7] line-clamp-3">
                    &ldquo;{REVIEWS[idx].text}&rdquo;
                  </p>
                  <p className="text-forest text-[9px] font-[600] mt-2">{REVIEWS[idx].name}</p>
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}