import type { Metadata } from 'next'
import PageBanner from '@/components/ui/PageBanner'
import { IMAGES } from '@/constants/images'
import ReserveButton from '@/components/ui/ReserveButton'

export const metadata: Metadata = {
  title: '이용안내 요금 | 반딧불캠핑장',
  description: '반딧불캠핑장 이용 요금 안내. 비수기 60,000원~성수기 70,000원. 입퇴실 14:00·12:00. 이용수칙 13가지.',
}

const RULES = [
  { num: '01', title: '입퇴실 시간', desc: '입실 14:00 · 퇴실 12:00. 초과 시간당 10,000원.' },
  { num: '02', title: '반려동물 출입 금지', desc: '안내견 등록증 확인 입장 가능.' },
  { num: '03', title: '전기·화기 제한', desc: '600W 초과 차단기 자동 차단.' },
  { num: '04', title: '소화기 확인', desc: '입실 후 위치·사용법 확인 필수.' },
  { num: '05', title: '경보기 설치', desc: '화재·일산화탄소 경보기 텐트 내 설치.' },
  { num: '06', title: '과대불판 금지', desc: '화재 및 이웃 캠퍼 피해 방지.' },
  { num: '07', title: '문어발 콘센트 금지', desc: '화재 예방 필수 규칙.' },
  { num: '08', title: '전기선 풀어 사용', desc: '릴선 완전히 풀어 과열 방지.' },
  { num: '09', title: '전 구간 금연', desc: '지정 흡연구역만 이용.' },
  { num: '10', title: '분리배출', desc: '자연환경 보호에 동참해 주세요.' },
  { num: '11', title: '귀중품 관리', desc: '분실 시 캠핑장 미책임.' },
  { num: '12', title: '매너 타임', desc: '22:00~07:00 소음 금지. 위반 시 강제 퇴장.' },
  { num: '13', title: '차박·트레일러', desc: '예약 전 반드시 사전 문의.' },
]

export default function PricingPage() {
  return (
    <main className="pb-20 md:pb-0">
      <PageBanner
        engTitle="Pricing"
        koTitle="이용 안내 & 요금"
        imageSrc={IMAGES.pricing.banner}
        imageAlt="반딧불캠핑장 이용요금 텐트 낮풍경"
      />

      {/* 요금표 */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-5 md:px-12">
          <p className="text-[10px] text-forest/40 tracking-[0.22em] uppercase mb-3">Pricing</p>
          <h2 className="text-forest font-[700] text-[24px] md:text-[40px] tracking-[-0.02em] mb-2">이용 요금</h2>
          <p className="text-muted font-[300] text-[13px] mb-8">기준 성인 2인 · 최대 4인 (어른 2 + 아이 2)</p>

          {/* PC 테이블 */}
          <div className="hidden md:block overflow-hidden mb-6">
            <div className="grid grid-cols-4 bg-forest text-white">
              {['구분', '평일', '금요일', '토요일'].map((h) => (
                <div key={h} className="py-4 px-6 text-[12px] font-[600] tracking-[0.04em]">{h}</div>
              ))}
            </div>
            {[
              { label: '비수기', w: 60000, f: 65000, s: 70000 },
              { label: '준성수기', w: 65000, f: 65000, s: 70000 },
              { label: '성수기', w: 70000, f: 70000, s: 70000 },
            ].map((row) => (
              <div key={row.label} className="grid grid-cols-4 border-b border-border hover:bg-cream transition">
                <div className="py-5 px-6 text-[14px] font-[600] text-forest">{row.label}</div>
                {[row.w, row.f, row.s].map((price, i) => (
                  <div key={i} className="py-5 px-6">
                    <span className="font-cormorant italic text-forest text-[24px] font-[600] whitespace-nowrap">{price.toLocaleString('ko-KR')}</span>
                    <span className="text-muted text-[13px] ml-1">원</span>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* 모바일 테이블 — 숫자 한 줄 */}
          <div className="md:hidden mb-6 overflow-hidden">
            <div className="grid grid-cols-4 bg-forest text-white">
              <div className="py-3 px-2 text-[10px] font-[600]">구분</div>
              <div className="py-3 px-2 text-[10px] font-[600]">평일</div>
              <div className="py-3 px-2 text-[10px] font-[600]">금요일</div>
              <div className="py-3 px-2 text-[10px] font-[600]">토요일</div>
            </div>
            {[
              { label: '비수기', w: 60000, f: 65000, s: 70000 },
              { label: '준성수기', w: 65000, f: 65000, s: 70000 },
              { label: '성수기', w: 70000, f: 70000, s: 70000 },
            ].map((row) => (
              <div key={row.label} className="grid grid-cols-4 border-b border-border">
                <div className="py-3 px-2 text-[11px] font-[600] text-forest leading-tight">{row.label}</div>
                {[row.w, row.f, row.s].map((price, i) => (
                  <div key={i} className="py-3 px-1">
                    <span className="font-cormorant italic text-forest text-[14px] font-[600] whitespace-nowrap">{price.toLocaleString('ko-KR')}</span>
                    <span className="text-muted text-[9px]">원</span>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* 추가요금 */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-forest-deep text-white p-5 md:p-8">
              <p className="text-white/50 text-[11px] mb-1">추가 인원</p>
              <p className="text-white/70 text-[12px] font-[300] mb-3">성인 1인 초과 시</p>
              <div className="flex items-baseline gap-1">
                <span className="font-cormorant italic text-gold text-[26px] md:text-[36px] font-[600] whitespace-nowrap">10,000</span>
                <span className="text-white/50 text-[12px]">원/인</span>
              </div>
            </div>
            <div className="bg-gold/10 border border-gold p-5 md:p-8">
              <p className="text-forest text-[11px] font-[500] mb-1">초과 이용</p>
              <p className="text-muted text-[12px] font-[300] mb-3">퇴실 후 초과 시</p>
              <div className="flex items-baseline gap-1">
                <span className="font-cormorant italic text-forest text-[26px] md:text-[36px] font-[600] whitespace-nowrap">10,000</span>
                <span className="text-muted text-[12px]">원/시간</span>
              </div>
            </div>
          </div>

          <div className="p-4 md:p-6 bg-cream border-l-4 border-forest mb-8">
            <p className="text-[12px] md:text-[13px] text-muted font-[300] leading-[2]">
              계좌이체: 신한은행 110-323-242516 (반딧불캠핑장) · 차박·트레일러는 반드시 예약 전 전화 또는 카카오 상담으로 사전 문의 바랍니다.
            </p>
          </div>

          {/* PC에서만 예약하기 */}
          <div className="hidden lg:flex justify-center">
            <ReserveButton size="lg" />
          </div>
        </div>
      </section>

      {/* 이용수칙 — 모바일 2열 그리드 */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-5 md:px-12">
          <p className="text-[10px] text-forest/40 tracking-[0.22em] uppercase mb-3">Rules</p>
          <h2 className="text-forest font-[700] text-[22px] md:text-[38px] tracking-[-0.02em] mb-2">이용 수칙</h2>
          <p className="text-muted font-[300] text-[13px] mb-8">안전하고 즐거운 캠핑을 위한 13가지 규칙</p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
            {RULES.map((rule) => (
              <div key={rule.num} className="bg-white p-3 md:p-6 flex gap-2 md:gap-4 items-start">
                <span className="font-cormorant italic text-forest/10 text-[22px] md:text-[38px] leading-none font-[700] flex-shrink-0 w-8 md:w-10">
                  {rule.num}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-forest font-[700] text-[11px] md:text-[14px] mb-0.5 leading-tight break-keep">{rule.title}</p>
                  <p className="text-muted font-[300] text-[10px] md:text-[12px] leading-[1.6] break-keep">{rule.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}