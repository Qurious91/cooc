"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  ChefHat,
  Building2,
  ArrowRight,
  Star,
  Users,
  Handshake,
  TrendingUp,
} from "lucide-react";
import { Great_Vibes } from "next/font/google";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});

const heroImage =
  "https://images.unsplash.com/photo-1731156679850-e73fbc21564c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVmJTIwY29va2luZyUyMGtpdGNoZW4lMjBjb2xsYWJvcmF0aW9ufGVufDF8fHx8MTc3MzY1NTc5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

export default function BetaPage() {
  const router = useRouter();

  const stats = [
    { icon: Users, label: "등록 셰프", value: "2,400+" },
    { icon: Building2, label: "파트너 브랜드", value: "850+" },
    { icon: Handshake, label: "성사된 콜라보", value: "5,200+" },
    { icon: TrendingUp, label: "월 평균 성장률", value: "23%" },
  ];

  const testimonials = [
    {
      name: "김민수 셰프",
      role: "한식 파인다이닝",
      text: "이 플랫폼 덕분에 대형 식품 브랜드와의 협업 기회를 얻었습니다. 셰프로서의 영역을 넓힐 수 있었어요.",
      rating: 5,
    },
    {
      name: "프레시가든",
      role: "유기농 식품 브랜드",
      text: "전문 셰프와의 협업으로 제품의 퀄리티를 한층 끌어올릴 수 있었습니다. 매출도 30% 증가했어요.",
      rating: 5,
    },
    {
      name: "이하윤 셰프",
      role: "프렌치 디저트",
      text: "다양한 브랜드의 제안서를 한 곳에서 관리할 수 있어 정말 편리합니다.",
      rating: 4,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="text-3xl font-bold text-gray-900 hover:text-zinc-400 dark:text-white" onClick={() => router.push("/")}>
              COOC
            </div>
            <div
              className={`${greatVibes.className} text-gray-700 transition-colors text-xl tracking-wide dark:text-white translate-y-2`}
            >
              beta
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => router.push("/chef/register")}
              className="px-4 py-2 rounded-lg bg-zinc-200 text-zinc-700 hover:bg-zinc-300 transition-colors cursor-pointer"
            >
              셰프 등록
            </button>
            <button
              onClick={() => router.push("/brand/register")}
              className="px-4 py-2 rounded-lg bg-zinc-800 text-white hover:bg-zinc-600 transition-colors cursor-pointer"
            >
              브랜드 등록
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent mb-6">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                <span
                  className="text-muted-foreground"
                  style={{ fontSize: "0.875rem" }}
                >
                  현재 120+ 프로젝트 진행 중
                </span>
              </div>

              <h1
                className="mb-6"
                style={{ fontSize: "2.5rem", fontWeight: 700, lineHeight: 1.2 }}
              >
                최고의{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
                  셰프
                </span>
                와
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                  브랜드
                </span>
                를 연결합니다
              </h1>

              <p
                className="text-muted-foreground mb-8"
                style={{ fontSize: "1.125rem", lineHeight: 1.7 }}
              >
                전문 셰프의 노하우와 브랜드의 비전을 결합하여
                <br />
                새로운 F&B 비즈니스 기회를 만들어 보세요.
              </p>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => router.push("/chef/register")}
                  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-200 text-zinc-700 hover:bg-zinc-300 transition-colors cursor-pointer"
                >
                  <ChefHat className="w-5 h-5" />
                  셰프로 시작하기
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => router.push("/brand/register")}
                  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-800 text-white hover:bg-zinc-600 transition-colors cursor-pointer"
                >
                  <Building2 className="w-5 h-5" />
                  브랜드로 시작하기
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl relative w-full h-[400px]">
                <Image
                  src={heroImage}
                  alt="Chef"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="absolute -bottom-6 -left-6 bg-white text-gray-900 dark:bg-black dark:text-white p-4 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center text-white">
                    <Handshake className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">
                      이번 달 매칭
                    </p>
                    <p className="text-orange-500 text-xl font-bold">
                      +127건
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-accent/50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                <p style={{ fontSize: "1.75rem", fontWeight: 700 }}>
                  {stat.value}
                </p>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 style={{ fontSize: "2rem", fontWeight: 700 }}>
              어떻게 작동하나요?
            </h2>
            <p className="text-muted-foreground mt-3">
              간단한 3단계로 셰프와 브랜드가 만납니다
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "프로필 등록",
                desc: "셰프 또는 브랜드로 프로필을 등록하고 전문 분야를 소개하세요.",
              },
              {
                step: "02",
                title: "매칭 & 제안",
                desc: "AI 추천 시스템이 최적의 파트너를 매칭해드리고, 제안서를 주고받을 수 있습니다.",
              },
              {
                step: "03",
                title: "협업 시작",
                desc: "일정을 조율하고 프로젝트를 시작하세요. 성공적인 콜라보레이션을 만들어 보세요.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="relative p-6 rounded-2xl border border-border hover:shadow-lg transition-shadow"
              >
                <span
                  className="text-accent dark:text-zinc-100"
                  style={{ fontSize: "3rem", fontWeight: 800 }}
                >
                  {item.step}
                </span>
                <h3 className="mt-2 mb-2" style={{ fontWeight: 600 }}>
                  {item.title}
                </h3>
                <p
                  className="text-muted-foreground"
                  style={{ fontSize: "0.9rem", lineHeight: 1.6 }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-accent/30 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 style={{ fontSize: "2rem", fontWeight: 700 }}>
              파트너들의 이야기
            </h2>
            <p className="text-muted-foreground mt-3">
              COOC와 함께한 셰프와 브랜드의 후기
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-card p-6 rounded-2xl border border-border"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p
                  className="text-muted-foreground mb-4"
                  style={{ fontSize: "0.9rem", lineHeight: 1.7 }}
                >
                  "{t.text}"
                </p>
                <div>
                  <p style={{ fontWeight: 600 }}>{t.name}</p>
                  <p
                    className="text-muted-foreground"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {t.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <span style={{ fontWeight: 700 }}>COOC</span>
            </div>
            <p
              className="text-muted-foreground"
              style={{ fontSize: "0.85rem" }}
            >
              © 2026 COOC. CO-creation with Our Chefs.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}