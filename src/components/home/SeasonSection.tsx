'use client';

import SafeImage from '@/components/ui/SafeImage';
import { IMAGES } from '@/constants/images';

const SEASONS = [
  {
    eng: 'Spring',
    kor: '봄 캠핑',
    desc: '벚꽃 아래 피크닉 · 3-5월',
    src: IMAGES.seasons.spring,
    alt: '반딧불캠핑장 봄 벚꽃 캠핑',
  },
  {
    eng: 'Summer',
    kor: '여름 캠핑',
    desc: '계곡 물놀이 · 반딧불이 · 6-8월',
    src: IMAGES.seasons.summer,
    alt: '반딧불캠핑장 여름 계곡 물놀이',
  },
  {
    eng: 'Autumn',
    kor: '가을 캠핑',
    desc: '단풍 불멍 · 9-11월',
    src: IMAGES.seasons.autumn,
    alt: '반딧불캠핑장 가을 단풍 캠핑',
  },
  {
    eng: 'Winter',
    kor: '겨울 캠핑',
    desc: '눈꽃 설경 힐링 · 12-2월',
    src: IMAGES.seasons.winter,
    alt: '반딧불캠핑장 겨울 눈꽃 설경',
  },
];

export default function SeasonSection() {
  return (
    <section className="grid grid-cols-2 md:grid-cols-4 h-[240px] md:h-[480px]">
      {SEASONS.map((s) => (
        <div key={s.eng} className="relative overflow-hidden group">
          <SafeImage
            src={s.src}
            alt={s.alt}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 50vw, 25vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/85 to-transparent" />
          <div className="absolute bottom-5 left-5">
            <p className="font-cormorant italic text-gold/80 text-[11px] tracking-[0.2em]">
              {s.eng}
            </p>
            <p className="text-white font-bold text-[16px] md:text-[20px]">
              {s.kor}
            </p>
            <p className="text-white/55 text-[11px] md:text-[12px] font-light mt-1">
              {s.desc}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}
