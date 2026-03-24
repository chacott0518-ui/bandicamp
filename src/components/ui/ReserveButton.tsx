'use client'

const NAVER_URL =
  'https://map.naver.com/p/entry/place/2072420773?lng=127.4332071&lat=37.6463936&placePath=/room?fromPanelNum=1'

interface ReserveButtonProps {
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
  className?: string
}

export default function ReserveButton({
  size = 'md',
  fullWidth = false,
  className = '',
}: ReserveButtonProps) {
  const sizes = {
    sm: 'px-5 py-2 text-[11px]',
    md: 'px-7 py-2.5 text-[12px]',
    lg: 'px-10 py-3.5 text-[13px]',
  }

  return (
    
      <a
      href={NAVER_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        inline-flex items-center justify-center
        rounded-full
        bg-gold
        text-forest-deep
        font-[700]
        tracking-[0.08em]
        shadow-[0_4px_20px_rgba(201,168,76,0.35)]
        hover:shadow-[0_6px_28px_rgba(201,168,76,0.55)]
        hover:scale-105
        hover:bg-gold-light
        active:scale-100
        transition-all duration-200
        whitespace-nowrap
        ${sizes[size]}
        ${fullWidth ? 'w-full text-center' : ''}
        ${className}
      `}
    >
      예약하기
    </a>
  )
}