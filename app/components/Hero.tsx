'use client';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function Hero() {

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
    <section
      id="hero"
      className="relative flex h-screen items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1666052974990-8f89aac6f673?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
          alt="Michelin Star Natural Cuisine"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 text-center text-white sm:px-6 lg:px-8">
        <h1 className="mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          COOC
        </h1>

        <p className="mx-auto mb-8 max-w-3xl text-lg text-gray-200 sm:text-xl md:text-2xl">
          Co-creation with Our Chefs
        </p>

        <button
          className="inline-flex items-center gap-2 rounded-full bg-zinc-600 px-8 py-4 text-lg text-white transition-all hover:scale-105 hover:bg-zinc-700"
          onClick={() => scrollToSection('contact')}
        >
          상담하기
          <ArrowRight size={20} />
        </button>
      </div>
    </section>
  );
}