'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', phone: '', message: '' });
  };

  if (submitted) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <div className="text-center">
          <p className="text-[20px] font-bold text-forest">문의가 접수되었습니다</p>
          <p className="mt-2 text-[13px] text-muted font-light">
            빠른 시일 내 연락드리겠습니다.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="mt-6 text-[12px] text-gold hover:underline underline-offset-4"
          >
            다시 문의하기
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div>
        <h2 className="text-[28px] md:text-[36px] font-bold text-forest tracking-[-0.02em]">
          예약 문의
        </h2>
        <p className="mt-2 text-[13px] text-muted font-light">
          빠른 답변은 카카오 채널을 이용해 주세요
        </p>
      </div>

      <div>
        <label className="block text-[10px] font-bold uppercase tracking-widest text-muted mb-2">
          이름
        </label>
        <input
          type="text"
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full border-b border-border bg-transparent py-3 text-[14px] text-ink outline-none focus:border-forest transition-colors placeholder:text-muted/40"
          placeholder="문의자 이름"
        />
      </div>

      <div>
        <label className="block text-[10px] font-bold uppercase tracking-widest text-muted mb-2">
          전화번호
        </label>
        <input
          type="tel"
          required
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          className="w-full border-b border-border bg-transparent py-3 text-[14px] text-ink outline-none focus:border-forest transition-colors placeholder:text-muted/40"
          placeholder="010-0000-0000"
        />
      </div>

      <div>
        <label className="block text-[10px] font-bold uppercase tracking-widest text-muted mb-2">
          문의 내용
        </label>
        <textarea
          required
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full h-32 resize-none border-b border-border bg-transparent py-3 text-[14px] text-ink outline-none focus:border-forest transition-colors placeholder:text-muted/40"
          placeholder="문의 내용을 입력하세요"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-forest text-white py-4 text-[14px] font-bold tracking-wider hover:bg-forest-light transition-colors"
      >
        문의하기
      </button>
    </form>
  );
}
