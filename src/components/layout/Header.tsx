'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Logo from './Logo'
import ReserveButton from '@/components/ui/ReserveButton'

const NAV_ITEMS = [
  { label: 'ABOUT', href: '/about' },
  { label: '시설안내', href: '/facilities' },
  { label: '이용안내·요금', href: '/pricing' },
  { label: '문의게시판', href: '/contact' },
  { label: 'FAQ', href: '/faq' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 right-0 z-40 h-16
          transition-all duration-300
          ${scrolled
            ? 'bg-forest-deep/95 backdrop-blur-xl shadow-[0_1px_0_rgba(255,255,255,0.06)]'
            : 'bg-transparent'
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-10 h-full flex items-center justify-between">
          <Logo variant="light" size="sm" />

          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[13px] font-[400] text-white/70 hover:text-white tracking-[0.03em] transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <ReserveButton size="sm" />
          </div>

          {/* 모바일 MENU 버튼 — 언더바 제거 */}
          <button
            className="md:hidden flex items-center py-2 pl-4 z-40"
            onClick={() => setMenuOpen(true)}
            aria-label="메뉴 열기"
          >
            <span className="text-white text-[11px] font-[600] tracking-[0.18em] uppercase">
              Menu
            </span>
          </button>
        </div>
      </header>

      {menuOpen && (
        <div
          className="fixed inset-0 z-50"
          onClick={() => setMenuOpen(false)}
        >
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

          {/* 드로어 — 배경 딥포레스트그린 */}
          <div
            className="absolute top-0 right-0 h-full w-[260px] bg-[#1a2818] flex flex-col shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="h-16 flex items-center justify-between px-5">
              <Logo variant="light" size="sm" />
              <button
                onClick={() => setMenuOpen(false)}
                aria-label="메뉴 닫기"
                className="w-8 h-8 flex items-center justify-center text-white/50 hover:text-white transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M2 2L14 14M14 2L2 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            {/* 메뉴 링크 — 밑줄 없음 */}
            <nav className="flex flex-col px-6 pt-4 flex-1">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-[14px] font-[500] text-white/75 hover:text-gold py-4 tracking-[0.02em] transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* 모바일 드로어 예약하기 버튼 제거 */}
          </div>
        </div>
      )}
    </>
  )
}