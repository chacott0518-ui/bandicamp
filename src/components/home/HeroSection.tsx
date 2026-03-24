'use client'
import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import ReserveButton from '@/components/ui/ReserveButton'

const STATS = [
  { num: '1', unit: 'h', label: '서울 한 시간' },
  { num: '6–8', unit: '月', label: '반딧불이 시즌' },
  { num: '4', unit: '인', label: '최대 가족' },
  { num: '365', unit: 'days', label: '연중 운영' },
]

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    videoRef.current?.play().catch(() => {})
  }, [])

  return (
    <section className="relative w-full h-screen min-h-[640px] overflow-hidden">

      <video
        ref={videoRef}
        autoPlay muted loop playsInline
        poster="https://images.unsplash.com/photo-1510672981848-a1c4f1cb5ccf?w=1600&q=60"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/video/camp.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-r from-forest-deep/80 via-forest-deep/45 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/70 via-transparent to-transparent" />

      <div className="relative z-10 h-full flex flex-col justify-center pb-[120px] md:pb-36 px-6 md:pl-[8%] md:pr-[48%]">

        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-gold text-[10px] md:text-[11px] font-[500] tracking-[0.28em] uppercase mb-4 md:mb-6"
        >
          Yangpyeong · Gyeonggi · Since 2020
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.22 }}
          className="text-white leading-[1.08] tracking-[-0.025em] mb-5 md:mb-8"
        >
          <span className="block font-[300] text-[32px] md:text-[56px] lg:text-[70px]">자연이 선물하는</span>
          <span className="block font-[900] text-[40px] md:text-[68px] lg:text-[86px]">반딧불의 밤</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.34 }}
          className="text-white/65 font-[300] text-[13px] md:text-[16px] leading-[1.95] mb-7 md:mb-10 max-w-[380px]"
        >
          서울에서 단 1시간,<br />
          경기도 양평 서종면 계곡 앞<br />
          반딧불이와 함께하는 특별한 하룻밤
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.46 }}
          className="flex flex-row items-center gap-3"
        >
          <div className="hidden md:block">
            <ReserveButton size="lg" />
          </div>
          <Link
            href="/facilities"
            className="inline-flex items-center justify-center rounded-full border border-white/35 text-white font-[300] text-[12px] md:text-[13px] tracking-[0.08em] px-6 md:px-9 py-2.5 md:py-3 hover:border-white/70 hover:bg-white/5 transition-all duration-200 whitespace-nowrap"
          >
            시설 둘러보기
          </Link>
        </motion.div>
      </div>

      <div className="absolute bottom-14 md:bottom-0 left-0 right-0 z-10 bg-forest-deep/75 backdrop-blur-md">
        <div className="grid grid-cols-4 w-full">
          {STATS.map((s, i) => (
            <div key={i} className="py-3 md:py-5 text-center border-r border-white/10 last:border-r-0">
              <div className="leading-none mb-1">
                <span className="font-cormorant italic text-gold text-[22px] md:text-[36px] font-[600]">{s.num}</span>
                <span className="text-gold/55 text-[10px] md:text-[13px] ml-0.5">{s.unit}</span>
              </div>
              <p className="text-white/35 text-[8px] md:text-[10px] tracking-[0.06em] uppercase leading-tight">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}