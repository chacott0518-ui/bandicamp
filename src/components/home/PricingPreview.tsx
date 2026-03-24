'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import ReserveButton from '@/components/ui/ReserveButton'

const TABS = ['비수기', '준성수기', '성수기'] as const
type Tab = typeof TABS[number]

const PRICES: Record<Tab, { weekday: number; fri: number; sat: number }> = {
  비수기:   { weekday: 60000, fri: 65000, sat: 70000 },
  준성수기: { weekday: 65000, fri: 65000, sat: 70000 },
  성수기:   { weekday: 70000, fri: 70000, sat: 70000 },
}

const fmt = (n: number) => n.toLocaleString('ko-KR')

const DETAILS = [
  { label: '기준 인원', value: '성인 2인' },
  { label: '추가 인원', value: '1인 +10,000원' },
  { label: '입실', value: '14:00' },
  { label: '퇴실', value: '12:00' },
]

export default function PricingPreview() {
  const [tab, setTab] = useState<Tab>('비수기')
  const p = PRICES[tab]

  return (
    <section className="bg-forest py-14 md:py-24">
      <div className="max-w-7xl mx-auto px-5 md:px-12">

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <p className="text-[10px] text-white/30 tracking-[0.22em] uppercase mb-2">Pricing</p>
          <h2 className="text-white font-[700] text-[24px] md:text-[40px] tracking-[-0.02em]">이용 요금</h2>
          <p className="text-white/40 font-[300] text-[12px] md:text-[13px] mt-1.5">기준 성인 2인 · 최대 4인 (어른 2 + 아이 2)</p>
        </motion.div>

        <div className="flex items-center justify-between mb-6">
          <div className="flex gap-1 bg-white/5 rounded-full p-1">
            {TABS.map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-3 md:px-5 py-1.5 md:py-2 rounded-full text-[11px] md:text-[13px] font-[600] tracking-[0.03em] transition-all duration-200 ${tab === t ? 'bg-gold text-forest-deep shadow-[0_2px_12px_rgba(201,168,76,0.4)]' : 'text-white/50 hover:text-white/80'}`}
              >
                {t}
              </button>
            ))}
          </div>
          <Link href="/pricing" className="text-gold text-[11px] md:text-[12px] tracking-[0.06em] hover:underline underline-offset-4 ml-3 whitespace-nowrap">
            전체 요금 →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/8 mb-6">
          {[
            { label: '평일', price: p.weekday },
            { label: '금요일', price: p.fri },
            { label: '토요일', price: p.sat },
          ].map((item, idx) => (
            <div
              key={item.label}
              className={`bg-forest p-5 md:p-10 ${idx < 2 ? 'border-b md:border-b-0 border-white/10' : ''}`}
            >
              <p className="text-white/35 text-[10px] tracking-[0.15em] uppercase mb-3">{item.label}</p>
              <div className="flex items-baseline gap-1 mb-3">
                <span className="font-cormorant italic text-white text-[22px] md:text-[32px] font-[600] leading-none whitespace-nowrap">
                  {fmt(item.price)}
                </span>
                <span className="text-white/50 text-[11px] md:text-[13px]">원~</span>
              </div>
              <div className="w-6 h-px bg-gold/30 mb-3" />
              <div className="grid grid-cols-2 md:grid-cols-1 gap-x-2 gap-y-1.5 md:gap-y-3">
                {DETAILS.map((d) => (
                  <div key={d.label} className="flex justify-between text-[10px] md:text-[13px]">
                    <span className="text-white/45 font-[300]">{d.label}</span>
                    <span className="text-white/80 font-[500]">{d.value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 md:p-5 border-l-2 border-gold/30 bg-white/5 mb-6">
          <p className="text-white/35 text-[11px] md:text-[12px] font-[300] leading-[1.9]">
            계좌이체: 신한은행 110-323-242516 (반딧불캠핑장) · 차박·트레일러는 예약 전 문의 필수
          </p>
        </div>

        <div className="hidden lg:flex justify-center">
          <ReserveButton size="md" />
        </div>

      </div>
    </section>
  )
}