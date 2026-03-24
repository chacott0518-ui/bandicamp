'use client'
import Link from 'next/link'

interface LogoProps {
  variant?: 'light' | 'dark'
  size?: 'sm' | 'md' | 'lg'
}

export default function Logo({ variant = 'light', size = 'md' }: LogoProps) {
  const textColor = variant === 'light' ? '#ffffff' : '#1a2818'
  const subColor = variant === 'light' ? 'rgba(255,255,255,0.45)' : 'rgba(26,40,24,0.45)'
  const gold = '#c9a84c'

  const dims = {
    sm: { w: 152, h: 36, r1: 7,  r2: 4.5, r3: 2.5, lineW: 1.2, eng: 9.5, ko: 13 },
    md: { w: 176, h: 42, r1: 9,  r2: 5.5, r3: 3,   lineW: 1.5, eng: 11,  ko: 15 },
    lg: { w: 204, h: 50, r1: 11, r2: 6.5, r3: 3.5, lineW: 1.8, eng: 13,  ko: 17 },
  }

  const d = dims[size]
  const cx = d.r1 + 5
  const cy = d.h / 2
  const tx = cx * 2 + 7
  const rays = [0, 45, 90, 135, 180, 225, 270, 315]

  return (
    <Link
  href="/"
  className="inline-flex items-center select-none flex-shrink-0"
  aria-label="반딧불캠핑장 홈으로"
  onClick={() => window.location.href = '/'}
>
      <svg
        width={d.w}
        height={d.h}
        viewBox={`0 0 ${d.w} ${d.h}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx={cx} cy={cy} r={d.r1} fill={gold} fillOpacity="0.12" />
        <circle cx={cx} cy={cy} r={d.r2} fill={gold} fillOpacity="0.28" />
        <circle cx={cx} cy={cy} r={d.r3} fill={gold} />
        {rays.map((angle, i) => {
          const rad = (angle * Math.PI) / 180
          const inner = d.r1 + 2
          const outer = d.r1 + 5
          return (
            <line
              key={i}
              x1={cx + Math.cos(rad) * inner}
              y1={cy + Math.sin(rad) * inner}
              x2={cx + Math.cos(rad) * outer}
              y2={cy + Math.sin(rad) * outer}
              stroke={gold}
              strokeWidth={d.lineW}
              strokeLinecap="round"
            />
          )
        })}
        <text
          x={tx} y={cy - 2}
          fontFamily="Pretendard, sans-serif"
          fontSize={d.eng} fontWeight="400"
          letterSpacing="0.16em" fill={subColor}
        >
          BANDICAMP
        </text>
        <text
          x={tx} y={cy + d.ko}
          fontFamily="Pretendard, sans-serif"
          fontSize={d.ko} fontWeight="700"
          letterSpacing="0.02em" fill={textColor}
        >
          반딧불캠핑장
        </text>
      </svg>
    </Link>
  )
}