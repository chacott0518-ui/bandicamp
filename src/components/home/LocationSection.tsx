'use client'
import { motion } from 'framer-motion'
import ReserveButton from '@/components/ui/ReserveButton'

const INFO = [
  {
    title: 'Address',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
        <circle cx="12" cy="9" r="2.5" />
      </svg>
    ),
    text: '경기도 양평군 서종면 노문리 417-2',
  },
  {
    title: 'By Car',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" rx="2" />
        <path d="M16 8h5l3 5v3h-8V8z" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
    text: '서울양양고속도로 → 서종IC 10분\n네비 검색: "반딧불캠핑장"',
  },
  {
    title: 'Transit',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="3" width="16" height="16" rx="2" />
        <path d="M4 11h16M12 3v16" />
      </svg>
    ),
    text: '청량리·용산 → 양평역 → 택시 25분',
  },
  {
    title: 'Nearby',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    text: '두물머리 15분 · 세미원 20분\n양평레일바이크 20분',
  },
]

export default function LocationSection() {
  return (
    <section className="bg-cream py-14 md:py-24">
      <div className="max-w-7xl mx-auto px-5 md:px-12">

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <p className="text-[10px] text-forest/40 tracking-[0.22em] uppercase mb-2">Location</p>
          <h2 className="text-forest font-[700] text-[22px] md:text-[38px] tracking-[-0.02em]">오시는 길</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          <motion.div
            initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="h-[220px] md:h-[340px] overflow-hidden"
          >
            <iframe
              src="https://map.kakao.com/link/map/반딧불캠핑장,37.6463936,127.4332071"
              width="100%" height="100%"
              style={{ border: 0 }}
              title="반딧불캠핑장 위치"
              loading="lazy"
              allowFullScreen
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="grid grid-cols-2 md:grid-cols-1 gap-2 md:gap-0">
              {INFO.map((item, i) => (
                <div key={i} className="flex gap-3 items-start p-3 md:p-0 md:py-4 bg-white md:bg-transparent md:border-b md:border-border last:border-0">
                  <div className="w-7 h-7 md:w-8 md:h-8 bg-forest flex-shrink-0 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[9px] md:text-[10px] font-[700] tracking-[0.12em] text-forest uppercase mb-1">{item.title}</p>
                    <p className="text-[11px] md:text-[13px] text-muted font-[300] leading-[1.8] whitespace-pre-line">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="hidden lg:block mt-7">
              <ReserveButton size="md" fullWidth />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}