'use client';

import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    guests: '',
    date: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    alert('문의가 접수되었습니다. 24시간 이내에 연락드리겠습니다.');

    setFormData({
      name: '',
      email: '',
      phone: '',
      eventType: '',
      guests: '',
      date: '',
      message: '',
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const callSubmit = () => {
    alert('📱 010-0000-0000');
  };


  return (
    <section id="contact" className="bg-gray-50 py-20 text-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl sm:text-4xl md:text-5xl">문의하기</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            궁금하신 사항이 있으시면 언제든지 연락주세요
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div>
              <h3 className="mb-6 text-2xl">연락처 정보</h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-zinc-100">
                    <Phone className="text-zinc-600" size={20} />
                  </div>

                  <div>
                    <p className="mb-1 font-medium">전화</p>
                    <p className="text-gray-600">02-1234-5678</p>
                    <p className="text-sm text-gray-500">평일 09:00 - 18:00</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-zinc-100">
                    <Mail className="text-zinc-600" size={20} />
                  </div>

                  <div>
                    <p className="mb-1 font-medium">이메일</p>
                    <p className="text-gray-600">no-reply@cooc.agency</p>
                    <p className="text-sm text-gray-500">24시간 이내 답변</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-zinc-100">
                    <MapPin className="text-zinc-600" size={20} />
                  </div>

                  <div>
                    <p className="mb-1 font-medium">주소</p>
                    <p className="text-gray-600">서울시 강남구 테헤란로 123</p>
                    <p className="text-sm text-gray-500">빌딩 10층</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-zinc-50 p-6">
              <h4 className="mb-2 font-medium">빠른 상담을 원하시나요?</h4>
              <p className="mb-4 text-sm text-gray-600">
                긴급한 문의는 전화로 연락주시면 즉시 상담해드립니다.
              </p>
              <button 
                className="w-full rounded-lg bg-zinc-600 py-3 text-white transition-colors hover:bg-zinc-700"
                onClick={callSubmit}
              >
                전화 상담 신청
              </button>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    이름 *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-transparent focus:ring-2 focus:ring-zinc-500"
                    placeholder="홍길동"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    전화번호 *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-transparent focus:ring-2 focus:ring-zinc-500"
                    placeholder="010-1234-5678"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  이메일 *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-transparent focus:ring-2 focus:ring-zinc-500"
                  placeholder="example@email.com"
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="eventType"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    이벤트 유형 *
                  </label>
                  <select
                    id="eventType"
                    name="eventType"
                    required
                    value={formData.eventType}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-transparent focus:ring-2 focus:ring-zinc-500"
                  >
                    <option value="">선택하세요</option>
                    <option value="wedding">웨딩</option>
                    <option value="corporate">기업 행사</option>
                    <option value="private">프라이빗 파티</option>
                    <option value="conference">컨퍼런스</option>
                    <option value="other">기타</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="guests"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    예상 인원 *
                  </label>
                  <input
                    type="number"
                    id="guests"
                    name="guests"
                    required
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-transparent focus:ring-2 focus:ring-zinc-500"
                    placeholder="50"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="date"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  희망 날짜
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-transparent focus:ring-2 focus:ring-zinc-500"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  상세 내용
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-transparent focus:ring-2 focus:ring-zinc-500"
                  placeholder="요구사항이나 문의사항을 자유롭게 작성해주세요"
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-zinc-600 py-4 text-white transition-colors hover:bg-zinc-700"
              >
                <Send size={20} />
                상담 신청하기
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}