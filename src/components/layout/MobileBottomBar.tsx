'use client'

const NAVER_URL =
  'https://map.naver.com/p/entry/place/2072420773?lng=127.4332071&lat=37.6463936&placePath=/room?fromPanelNum=1'
const KAKAO_MAP_URL =
  'https://map.kakao.com/link/to/반딧불캠핑장,37.6463936,127.4332071'
const TEL = 'tel:0507-1373-9650'

export default function MobileBottomBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden h-14 bg-forest border-t border-white/15">
      <div className="grid grid-cols-3 h-full">

        {/* 상담하기 — 골드 */}
        
        <a
        href={TEL}
          className="flex flex-col items-center justify-center gap-1 hover:bg-white/5 transition-colors active:scale-95"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
            stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013 7.18 2 2 0 014.11 5h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 12.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
          </svg>
          <span className="text-[10px] font-[500] text-gold tracking-[0.04em]">상담하기</span>
        </a>

        {/* 위치보기 — 하늘색으로 구분 */}
        
        <a
        href={KAKAO_MAP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 hover:bg-white/5 transition-colors border-x border-white/15 active:scale-95"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
            stroke="#7eb8d4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
            <circle cx="12" cy="9" r="2.5" />
          </svg>
          <span className="text-[10px] font-[500] text-[#7eb8d4] tracking-[0.04em]">위치보기</span>
        </a>

        {/* 예약하기 — 골드 배경 */}
        
          <a
          href={NAVER_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 bg-gold hover:bg-gold-light active:scale-95 transition-all"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
            stroke="#1a2818" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" />
            <path d="M16 2v4M8 2v4M3 10h18" />
          </svg>
          <span className="text-[11px] font-[700] text-forest-deep tracking-[0.06em]">예약하기</span>
        </a>

      </div>
    </div>
  )
}