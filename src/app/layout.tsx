import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import MobileBottomBar from '@/components/layout/MobileBottomBar'

export const metadata: Metadata = {
  metadataBase: new URL('https://bandicamp.vercel.app'),
  title: {
    default: '반딧불캠핑장 | 양평 서종 계곡 오토캠핑장 · 서울1시간 · 반딧불이체험',
    template: '%s | 반딧불캠핑장',
  },
  description:
    '경기도 양평 서종면 계곡 앞 반딧불캠핑장. 서울1시간 서울근교캠핑장, 파쇄석 오토캠핑·차박·가족캠핑·키즈캠핑·반딧불이체험. 깨끗한 시설, 수도권당일캠핑 가능.',
  keywords: [
    '양평캠핑장', '경기도캠핑장', '서울근교캠핑장', '수도권캠핑장', '오토캠핑장',
    '캠핑장추천', '경기도오토캠핑장', '서울근교오토캠핑장', '양평가볼만한곳', '양평여행',
    '계곡캠핑장', '수영장캠핑장', '키즈캠핑장', '글램핑', '차박지추천',
    '양평아이와가기좋은캠핑장', '경기도아이와캠핑', '수영장있는캠핑장', '시설좋은캠핑장', '깨끗한캠핑장',
    '양평키즈캠핑장', '어린이캠핑장', '체험형캠핑장', '곤충채집캠핑장', '반딧불이체험',
    '가족캠핑장추천', '4인가족캠핑', '방방이있는캠핑장', '트램폴린캠핑장', '모래놀이캠핑장',
    '안전한캠핑장', '넓은사이트캠핑장', '서울근교가족나들이', '주말아이와여행', '여름방학캠핑',
    '별보기좋은캠핑장', '밤하늘캠핑장', '반딧불이캠핑장', '숲속캠핑장', '힐링캠핑장',
    '감성캠핑장', '조용한캠핑장', '뷰좋은캠핑장', '마운틴뷰캠핑장', '계곡인접캠핑장',
    '양평계곡물놀이', '숲세권캠핑장', '공기좋은캠핑장', '산책로있는캠핑장', '별자리관측',
    '야경예쁜캠핑장', '불멍하기좋은곳', '자연친화적캠핑장', '벚꽃캠핑장', '단풍캠핑장',
    '서종면캠핑장', '양평서종캠핑장', '남양주근처캠핑장', '하남근처캠핑장', '구리근처캠핑장',
    '송파근처캠핑장', '강동근처캠핑장', '서울1시간거리캠핑장', '북한강근처캠핑장', '두물머리근처캠핑장',
    '양평서종면가볼만한곳', '서종IC근처캠핑장', '수도권당일캠핑', '퇴근박캠핑장', '가까운캠핑장추천',
    '파쇄석캠핑장', '데크캠핑장', '화장실깨끗한캠핑장', '개수대온수캠핑장', '샤워실좋은캠핑장',
    '매점있는캠핑장', '와이파이캠핑장', '전기사용캠핑장', '대형텐트사이트', '매너타임엄격한캠핑장',
    '관리잘되는캠핑장', '신축급캠핑장', '캠핑장명당', '사이트넓은캠핑장', '개별부대시설캠핑장',
    '양평캠핑장명당', '반딧불캠핑장후기', '반딧불캠핑장예약', '양평서종맛집', '캠핑장근처마트',
    '양평하나로마트장보기', '캠핑요리메뉴', '초보캠퍼추천캠핑장', '캠크닉장소', '주말양평드라이브',
    '양평서종카페', '커플캠핑장추천', '2박3일캠핑', '캠핑장할인이벤트', '반딧불캠핑장배치도',
  ],
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://bandicamp.net',
    siteName: '반딧불캠핑장',
    title: '반딧불캠핑장 | 양평 서종 계곡 오토캠핑장',
    description: '서울1시간, 경기도 양평 서종면 계곡 앞. 반딧불이체험·오토캠핑·가족캠핑·키즈캠핑.',
    images: [
      {
        url: '/og/main.jpg',
        width: 1200,
        height: 630,
        alt: '반딧불캠핑장 양평 서종 계곡 캠핑 전경',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '반딧불캠핑장 | 양평 서종 오토캠핑',
    description: '서울1시간 경기도 양평 계곡 앞 반딧불캠핑장',
    images: ['/og/main.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  verification: {
    google: 'GOOGLE_VERIFICATION_CODE',
    other: { 'naver-site-verification': 'NAVER_VERIFICATION_CODE' },
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LodgingBusiness',
  name: '반딧불캠핑장',
  description: '경기도 양평 서종면 계곡 앞 오토캠핑장. 반딧불이체험, 가족캠핑, 키즈캠핑, 차박.',
  url: 'https://bandicamp.net',
  telephone: '0507-1373-9650',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '서종면 노문리 417-2',
    addressLocality: '양평군',
    addressRegion: '경기도',
    postalCode: '12547',
    addressCountry: 'KR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 37.6463936,
    longitude: 127.4332071,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '14:00',
    closes: '12:00',
  },
  priceRange: '₩60,000~₩70,000',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileBottomBar />
      </body>
    </html>
  )
}