import Link from 'next/link'
import Logo from './Logo'

const NAVER_BOOKING = 'https://map.naver.com/p/entry/place/2072420773?lng=127.4332071&lat=37.6463936&placePath=/room?fromPanelNum=1'
const KAKAO_MAP = 'https://map.kakao.com/link/to/반딧불캠핑장,37.6463936,127.4332071'

const MENU_ITEMS = [
  { label: 'ABOUT', href: '/about' },
  { label: '시설안내', href: '/facilities' },
  { label: '이용안내·요금', href: '/pricing' },
  { label: '문의게시판', href: '/contact' },
  { label: 'FAQ', href: '/faq' },
]

const RESERVATION_ITEMS = [
  { label: '요금 안내', href: '/pricing' },
  { label: '이용 수칙', href: '/pricing' },
  { label: '캠핑장 배치도', href: '/facilities' },
]

export default function Footer() {
  return (
    <footer className="bg-forest-deep">
      <div className="max-w-7xl mx-auto px-5 md:px-12 py-10 md:py-16">

        {/* PC 4컬럼 */}
        <div className="hidden md:grid md:grid-cols-4 gap-10">

          <div>
            <Logo variant="light" size="md" />
            <p className="mt-4 text-[12px] text-white/40 font-[300] leading-[2] max-w-[220px]">
              경기도 양평 서종면, 반딧불이와 함께하는 감성 오토캠핑장.
            </p>
            <div className="flex gap-3 mt-5">
              <a href="#" aria-label="인스타그램" className="text-white/40 hover:text-gold transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a href="#" aria-label="블로그" className="text-white/40 hover:text-gold transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M8 9h8M8 12h6M8 15h4" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <p className="text-[10px] text-white/25 tracking-[0.18em] uppercase mb-5">Menu</p>
            <ul className="space-y-2.5">
              {MENU_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-[12px] text-white/50 font-[300] hover:text-gold transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[10px] text-white/25 tracking-[0.18em] uppercase mb-5">Reservation</p>
            <ul className="space-y-2.5">
              <li>
                <a href={NAVER_BOOKING} target="_blank" rel="noopener noreferrer" className="text-[12px] text-white/50 font-[300] hover:text-gold transition-colors">
                  네이버 예약하기
                </a>
              </li>
              {RESERVATION_ITEMS.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-[12px] text-white/50 font-[300] hover:text-gold transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[10px] text-white/25 tracking-[0.18em] uppercase mb-5">Location</p>
            <p className="text-[12px] text-white/50 font-[300] leading-[2] mb-3">
              경기도 양평군 서종면 노문리 417-2
            </p>
            <p className="text-[12px] text-white/35 font-[300] leading-[1.8] mb-4">
              서울양양고속도로 서종IC 10분
            </p>
            <a href={KAKAO_MAP} target="_blank" rel="noopener noreferrer" className="text-[11px] text-gold font-[500] tracking-[0.06em] hover:underline underline-offset-4">
              지도 보기 →
            </a>
          </div>

        </div>

        {/* 모바일 전용 */}
        <div className="md:hidden">
          <div className="flex items-start justify-between mb-6">
            <div>
              <Logo variant="light" size="sm" />
              <div className="flex gap-3 mt-3">
                <a href="#" aria-label="인스타그램" className="text-white/40 hover:text-gold transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                  </svg>
                </a>
                <a href="#" aria-label="블로그" className="text-white/40 hover:text-gold transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M8 9h8M8 12h6M8 15h4" />
                  </svg>
                </a>
              </div>
            </div>
            <p className="text-[11px] text-white/35 font-[300] leading-[1.8] text-right">
              경기도 양평군<br />서종면 노문리 417-2
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-6 border-t border-white/8 pt-5">
            <div>
              <p className="text-[9px] text-white/25 tracking-[0.16em] uppercase mb-3">Menu</p>
              <ul className="space-y-2">
                {MENU_ITEMS.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-[11px] text-white/50 font-[300] hover:text-gold transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[9px] text-white/25 tracking-[0.16em] uppercase mb-3">Reservation</p>
              <ul className="space-y-2">
                <li>
                  <a href={NAVER_BOOKING} target="_blank" rel="noopener noreferrer" className="text-[11px] text-white/50 font-[300] hover:text-gold transition-colors">
                    네이버 예약하기
                  </a>
                </li>
                {RESERVATION_ITEMS.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="text-[11px] text-white/50 font-[300] hover:text-gold transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </div>

      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-5 md:px-12 py-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-1.5">
          <p className="text-[10px] text-white/20 font-[300]">
            사업자번호: 232-79-00603 · 대표: 윤지온 · 경기도 양평군 서종면 노문리 417-2
          </p>
          <p className="text-[10px] text-white/20 font-[300]">
            © 2026 반딧불캠핑장. All rights reserved.
          </p>
        </div>
      </div>

    </footer>
  )
}