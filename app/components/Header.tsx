'use client';
import Link from "next/link";
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Great_Vibes } from "next/font/google";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const scrollToSection = (id: string) => {
  const element = document.getElementById(id);

  if (element) {
    element.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
    });

    setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          
          {/* Logo */}
          <div className="text-3xl font-bold text-gray-900" onClick={() => scrollToSection('hero')}>
            COOC
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden space-x-8 md:flex">
            <button className="text-gray-700 hover:text-zinc-500 transition-colors" onClick={() => scrollToSection('hero')}>
              홈
            </button>
            <button className="text-gray-700 hover:text-zinc-500 transition-colors" onClick={() => scrollToSection('services')}>
              서비스
            </button>
            <button className="text-gray-700 hover:text-zinc-500 transition-colors" onClick={() => scrollToSection('chefs')}>
              셰프
            </button>
            <button className="text-gray-700 hover:text-zinc-500 transition-colors" onClick={() => scrollToSection('brands')}>
              브랜드
            </button>
            <button className="text-gray-700 hover:text-zinc-500 transition-colors" onClick={() => scrollToSection('process')}>
              프로세스
            </button>
            <button className="text-gray-700 hover:text-zinc-500 transition-colors" onClick={() => scrollToSection('portfolio')}>
              포트폴리오
            </button>
            <button className="text-gray-700 hover:text-zinc-500 transition-colors" onClick={() => scrollToSection('contact')}>
              문의하기
            </button>

            <Link
              href="/beta"
              className={`${greatVibes.className} text-gray-700 hover:text-zinc-500 transition-colors text-xl tracking-wide translate-y-1`}
            >
              beta
            </Link>

          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="rounded-md p-2 text-gray-700 hover:bg-gray-100 md:hidden"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="space-y-2 py-4 md:hidden">
            <button className="block w-full rounded-md px-4 py-2 text-left text-gray-700 hover:bg-gray-100" onClick={() => scrollToSection('hero')}>
              홈
            </button>
            <button className="block w-full rounded-md px-4 py-2 text-left text-gray-700 hover:bg-gray-100" onClick={() => scrollToSection('services')}>
              서비스
            </button>
            <button className="block w-full rounded-md px-4 py-2 text-left text-gray-700 hover:bg-gray-100" onClick={() => scrollToSection('chefs')}>
              셰프
            </button>
            <button className="block w-full rounded-md px-4 py-2 text-left text-gray-700 hover:bg-gray-100" onClick={() => scrollToSection('brands')}>
              브랜드
            </button>
            <button className="block w-full rounded-md px-4 py-2 text-left text-gray-700 hover:bg-gray-100" onClick={() => scrollToSection('process')}>
              프로세스
            </button>
            <button className="block w-full rounded-md px-4 py-2 text-left text-gray-700 hover:bg-gray-100" onClick={() => scrollToSection('portfolio')}>
              포트폴리오
            </button>
            <button className="block w-full rounded-md px-4 py-2 text-left text-gray-700 hover:bg-gray-100" onClick={() => scrollToSection('contact')}>
              문의하기
            </button>

            <Link
              href="/beta"
              className={`${greatVibes.className} block w-full rounded-md px-4 py-2 text-left text-gray-700 hover:text-zinc-500 transition-colors text-xl tracking-wide`}
            >
              beta
            </Link>

          </nav>
        )}
      </div>
    </header>
  );
}