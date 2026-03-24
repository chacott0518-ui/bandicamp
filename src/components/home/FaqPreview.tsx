'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

const FAQS = [
  {
    q: '예약은 어떻게 하나요?',
    a: "네이버 예약 플레이스(상단 '예약하기' 클릭)로 온라인 예약 가능합니다. 카카오 채널 상담 예약도 가능하며, 성수기(7~8월) 주말은 조기 마감이 잦으니 최소 2~3주 전 예약을 권장드립니다. 예약 후 계좌이체(신한 110-323-242516)로 예약금을 입금해 주세요.",
  },
  {
    q: '입·퇴실 시간과 초과 요금은?',
    a: '입실 14:00, 퇴실 12:00입니다. 초과 시 시간당 10,000원이 발생하며 최대 2시간 연장 가능합니다. 다음 예약자가 있는 경우 연장 불가하니 퇴실 1시간 전에 미리 문의해 주세요. 차박이나 트레일러 이용은 반드시 예약 전 사전 문의가 필요합니다.',
  },
  {
    q: '요금이 어떻게 되나요?',
    a: '기준 성인 2인, 비수기 평일 60,000원부터 성수기 70,000원까지입니다. 추가 인원 1인당 10,000원, 최대 4인(어른2+아이2) 이용 가능합니다. 금요일은 평일+5,000원, 토요일은 시즌 무관 70,000원입니다. 결제는 계좌이체로만 가능합니다.',
  },
  {
    q: '반려동물 동반이 가능한가요?',
    a: '반려동물 출입이 불가합니다. 알레르기 캠퍼와 아이들을 위한 정책입니다. 장애인 보조 시청각 안내견은 등록증 확인 후 입장 가능합니다. 인근 펫 허용 캠핑장 정보가 필요하시면 상담을 통해 안내드리겠습니다.',
  },
  {
    q: '전기 용량 제한이 있나요?',
    a: '각 사이트 220V 콘센트 제공, 600W 초과 시 차단기 자동 차단됩니다. 문어발 멀티탭 사용 금지, 릴선은 완전히 풀어서 사용하세요. 텐트 내 화기용품 사용은 절대 금지이며, 안전한 캠핑을 위해 입실 후 소화기 위치를 먼저 확인해 주세요.',
  },
]

export default function FaqPreview() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="bg-white py-14 md:py-24">
      <div className="max-w-4xl mx-auto px-5 md:px-12">

        {/* 헤더 */}
        <div className="flex justify-between items-end mb-7">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-[10px] text-forest/40 tracking-[0.22em] uppercase mb-2">FAQ</p>
            <h2 className="text-forest font-[700] text-[22px] md:text-[36px] tracking-[-0.02em]">
              자주 묻는 질문
            </h2>
          </motion.div>
          <Link
            href="/faq"
            className="text-[11px] text-forest/40 hover:text-forest tracking-[0.06em] hover:underline underline-offset-4 transition-colors hidden sm:block"
          >
            전체 보기 →
          </Link>
        </div>

        {/* 아코디언 */}
        <div>
          {FAQS.map((faq, i) => (
            <div key={i} className="border-b border-border">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex justify-between items-center py-4 md:py-5 text-left group"
              >
                <span className="text-[13px] md:text-[15px] font-[600] text-forest pr-6 leading-[1.6] tracking-[-0.01em]">
                  {faq.q}
                </span>
                <span
                  className={`text-gold text-[18px] md:text-[20px] font-[300] flex-shrink-0 transition-transform duration-200 ${
                    openIndex === i ? 'rotate-45' : ''
                  }`}
                >
                  +
                </span>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <p className="pb-5 text-[12px] md:text-[14px] text-muted font-[300] leading-[2]">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="mt-5 sm:hidden">
          <Link
            href="/faq"
            className="text-[11px] text-forest/40 hover:text-forest tracking-[0.06em] hover:underline underline-offset-4 transition-colors"
          >
            전체 보기 →
          </Link>
        </div>

      </div>
    </section>
  )
}