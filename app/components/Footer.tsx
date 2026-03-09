'use client';

import { Instagram, Youtube, Mail } from 'lucide-react';


export default function Footer() {

  const clickInstagram = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    alert('https://instagram.com/cooc');
  };
  const clickYoutube = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    alert('https://youtube.com/cooc');
  };
  const clickMail = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    alert('no-reply@cooc.agency');
  };


  return (
    <footer className="bg-zinc-800 py-12 text-zinc-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-4">

          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="mb-4 text-2xl font-bold text-white">
              COOC
            </div>

            <p className="mb-4 text-sm">
              CO-creation with our chefs
            </p>

            <div className="flex gap-4">
              <a
                href="#"
                onClick={clickInstagram}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-800 transition-colors hover:bg-zinc-600"
              >
                <Instagram size={20} />
              </a>

              <a
                href="#"
                onClick={clickYoutube}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-800 transition-colors hover:bg-zinc-600"
              >
                <Youtube size={20} />
              </a>

              <a
                href="#"
                onClick={clickMail}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-800 transition-colors hover:bg-zinc-600"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-medium text-white">빠른 링크</h3>

            <ul className="space-y-2 text-sm">
              <li>
                <a href="#services" className="transition-colors hover:text-zinc-100">
                  서비스
                </a>
              </li>
              <li>
                <a href="#chefs" className="transition-colors hover:text-zinc-100">
                  셰프
                </a>
              </li>
              <li>
                <a href="#companies" className="transition-colors hover:text-zinc-100">
                  브랜드
                </a>
              </li>
              <li>
                <a href="#portfolio" className="transition-colors hover:text-zinc-100">
                  포트폴리오
                </a>
              </li>
              <li>
                <a href="#contact" className="transition-colors hover:text-zinc-100">
                  문의하기
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 font-medium text-white">연락처</h3>

            <ul className="space-y-2 text-sm">
              <li>서울시 강남구 테헤란로 123</li>
              <li>빌딩 10층</li>
              <li>TEL: 02-1234-5678</li>
              <li>Email: no-reply@cooc.agency</li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-zinc-700 pt-8 text-sm sm:flex-row">
          <p>&copy; 2026 COOC. All rights reserved.</p>

          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-zinc-100">
              이용약관
            </a>

            <a href="#" className="transition-colors hover:text-zinc-100">
              개인정보처리방침
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}