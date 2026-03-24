'use client'
import { useState } from 'react'
import PageBanner from '@/components/ui/PageBanner'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'

const NAVER_URL = 'https://map.naver.com/p/entry/place/2072420773?lng=127.4332071&lat=37.6463936&placePath=/room?fromPanelNum=1'

const FAQS = [
  { q: '예약은 어떻게 하나요?', a: "네이버 예약 플레이스(상단 '예약하기' 클릭)로 온라인 예약 가능합니다. 카카오 채널 상담 예약도 가능하며, 성수기(7~8월) 주말은 조기 마감이 잦으니 최소 2~3주 전 예약을 권장드립니다." },
  { q: '입·퇴실 시간은?', a: '입실 14:00, 퇴실 12:00입니다. 초과 시 시간당 10,000원이 발생하며 최대 2시간 연장 가능합니다.' },
  { q: '차박·트레일러 가능한가요?', a: '소형 차량 차박은 가능하나 트레일러는 반드시 예약 전 카카오 채널 또는 전화로 사전 문의가 필요합니다.' },
  { q: '반려동물 동반 가능한가요?', a: '반려동물 출입이 불가합니다. 장애인 보조 시청각 안내견은 등록증 확인 후 입장 가능합니다.' },
  { q: '환불·취소 정책은?', a: '예약 취소는 카카오 채널 또는 전화로 문의해 주세요. 이용 7일 전 취소 시 전액 환불, 3~6일 전 50% 환불, 2일 이내 취소 시 환불이 불가합니다.' },
]

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="pb-20 md:pb-0">
      <PageBanner
        engTitle="Contact"
        koTitle="문의 게시판"
        imageSrc="https://images.unsplash.com/photo-1510672981848-a1c4f1cb5ccf?w=1600&q=80"
        imageAlt="반딧불캠핑장 저녁 감성캠핑 문의게시판"
      />

      {/* 문의 폼 */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

            <div className="relative h-[240px] md:h-full min-h-[400px] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=900&q=80"
                alt="반딧불캠핑장 문의 캠핑 이미지"
                fill className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <div>
              <p className="text-[10px] text-forest/40 tracking-[0.2em] uppercase mb-3">Contact</p>
              <h2 className="text-forest font-[700] text-[22px] md:text-[36px] tracking-[-0.02em] mb-2">예약 문의</h2>
              <p className="text-muted font-[300] text-[13px] mb-8">빠른 답변은 카카오 채널을 이용해 주세요</p>

              {submitted ? (
                <div className="p-6 bg-forest text-white text-center">
                  <p className="font-[600] text-[15px] mb-2">문의가 접수되었습니다.</p>
                  <p className="text-white/60 font-[300] text-[13px]">빠른 시일 내 연락드리겠습니다.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-[10px] font-[700] tracking-widest uppercase text-muted mb-2">문의자 이름</label>
                    <input
                      type="text" required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="홍길동"
                      className="w-full border-b border-border bg-transparent py-3 text-[14px] text-forest outline-none focus:border-forest transition placeholder-muted/40"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-[700] tracking-widest uppercase text-muted mb-2">전화번호</label>
                    <input
                      type="tel" required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="010-0000-0000"
                      className="w-full border-b border-border bg-transparent py-3 text-[14px] text-forest outline-none focus:border-forest transition placeholder-muted/40"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-[700] tracking-widest uppercase text-muted mb-2">문의 내용</label>
                    <textarea
                      required
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="문의 내용을 입력하세요"
                      rows={4}
                      className="w-full border-b border-border bg-transparent py-3 text-[14px] text-forest outline-none focus:border-forest transition placeholder-muted/40 resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-forest text-white py-4 text-[13px] font-[700] tracking-wider hover:bg-forest-light transition"
                  >
                    문의하기
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 연락처 카드 */}
      <section className="bg-forest py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-5 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            <div className="bg-white/5 border border-white/10 p-6 md:p-8">
              <p className="text-white font-[700] text-[15px] mb-3">카카오 상담</p>
              <p className="text-white/50 font-[300] text-[13px] leading-[1.8] mb-5">카카오 채널에서 빠른 실시간 상담이 가능합니다. 평일·주말 상담 가능.</p>
              <a href="#" className="inline-block px-6 py-2.5 text-[12px] font-[700] tracking-[0.06em] rounded-full bg-gold text-forest-deep">
                카카오 상담하기
              </a>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 md:p-8">
              <p className="text-white font-[700] text-[15px] mb-3">네이버 예약</p>
              <p className="text-white/50 font-[300] text-[13px] leading-[1.8] mb-5">네이버 플레이스에서 날짜·사이트를 선택하고 바로 예약하세요.</p>
              <a href={NAVER_URL} target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-2.5 text-[12px] font-[700] tracking-[0.06em] rounded-full bg-gold text-forest-deep">
                예약하기
              </a>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 md:p-8">
              <p className="text-white font-[700] text-[15px] mb-3">계좌이체</p>
              <p className="text-white/50 font-[300] text-[13px] leading-[1.8]">
                신한은행 110-323-242516<br />예금주: 반딧불캠핑장
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 오시는 길 */}
      <section className="bg-cream py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-5 md:px-12">
          <h2 className="text-forest font-[700] text-[20px] md:text-[32px] tracking-[-0.02em] mb-8">오시는 길</h2>
          <div className="h-[280px] md:h-[400px] overflow-hidden">
            <iframe
              src="https://map.kakao.com/link/map/반딧불캠핑장,37.6463936,127.4332071"
              width="100%" height="100%"
              style={{ border: 0 }}
              title="반딧불캠핑장 위치"
              loading="lazy"
              allowFullScreen
            />
          </div>
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="bg-white p-4">
              <p className="text-forest font-[700] text-[12px] uppercase tracking-widest mb-2">자가용</p>
              <p className="text-muted font-[300] text-[12px] leading-[1.8]">서울양양고속도로 → 서종IC 10분<br />네비 검색: "반딧불캠핑장"</p>
            </div>
            <div className="bg-white p-4">
              <p className="text-forest font-[700] text-[12px] uppercase tracking-widest mb-2">대중교통</p>
              <p className="text-muted font-[300] text-[12px] leading-[1.8]">청량리·용산 → 양평역<br />택시 약 25분</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-5 md:px-12">
          <p className="text-[10px] text-forest/40 tracking-[0.22em] uppercase mb-3">FAQ</p>
          <h2 className="text-forest font-[700] text-[22px] md:text-[36px] tracking-[-0.02em] mb-8">자주 묻는 질문</h2>
          {FAQS.map((faq, i) => (
            <div key={i} className="border-b border-border">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex justify-between items-center py-4 text-left"
              >
                <span className="text-[13px] md:text-[15px] font-[600] text-forest pr-6 leading-[1.6]">{faq.q}</span>
                <span className={`text-gold text-[18px] font-[300] flex-shrink-0 transition-transform duration-200 ${openIndex === i ? 'rotate-45' : ''}`}>+</span>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-5 text-[12px] md:text-[14px] text-muted font-[300] leading-[2]">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

    </main>
  )
}