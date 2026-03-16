"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  ChefHat, Building2, FileText, Search, Star, Bell, User,
  LogOut, Send, X, Check, MapPin, Sparkles, ArrowRight
} from "lucide-react";
import { chefs, brandProposals, type Chef, type Proposal } from "../../lib/data";
import { Great_Vibes } from "next/font/google";


const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});

type Tab = "chefs" | "proposals-in" | "proposals-out" | "recommended" | "profile";

export function BrandDashboard() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<Tab>("chefs");
  const [showRequestModal, setShowRequestModal] = useState(false);
  const [selectedChef, setSelectedChef] = useState<Chef | null>(null);
  const [profileEdit, setProfileEdit] = useState(false);

  const [profile, setProfile] = useState({
    name: "프레시가든",
    category: "유기농 식품",
    location: "서울 강남구",
    description: "프리미엄 유기농 식재료를 제공하는 브랜드입니다. 건강하고 신선한 식재료로 더 나은 식문화를 만들어갑니다.",
    budget: "500만원~1000만원",
    tags: ["유기농", "건강", "프리미엄", "친환경"],
    image: "https://images.unsplash.com/photo-1760020945158-3e953b4d7ea6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwZm9vZCUyMGJyYW5kJTIwaGVhbHRoeXxlbnwxfHx8fDE3NzM2NTQ4Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
  });

  const [proposalForm, setProposalForm] = useState({ title: "", description: "", budget: "" });

  const recommendedChefs = chefs.slice(0, 3);

  const tabs = [
    { id: "chefs" as Tab, label: "셰프 살펴보기", icon: ChefHat },
    { id: "recommended" as Tab, label: "추천 셰프", icon: Sparkles },
    { id: "proposals-in" as Tab, label: "받은 제안서", icon: Bell },
    { id: "proposals-out" as Tab, label: "제안서 쓰기", icon: FileText },
    { id: "profile" as Tab, label: "프로필", icon: User },
  ];

  const getStatusBadge = (status: Proposal["status"]) => {
    const styles = {
      pending: "bg-yellow-100 text-yellow-700",
      accepted: "bg-green-100 text-green-700",
      rejected: "bg-red-100 text-red-700",
    };
    const labels = { pending: "대기중", accepted: "수락됨", rejected: "거절됨" };
    return (
      <span className={`px-2.5 py-1 rounded-full ${styles[status]}`} style={{ fontSize: "0.75rem", fontWeight: 600 }}>
        {labels[status]}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Top Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="text-3xl font-bold text-gray-900 dark:text-white">
              COOC
            </div>
            <div
              className={`${greatVibes.className} text-gray-700 hover:text-zinc-500 transition-colors text-xl tracking-wide dark:text-white translate-y-2`}
              onClick={() => router.push("/beta")}
            >
              beta
            </div>


            <span className="px-2 py-0.5 rounded-full bg-blue-100 text-blue-600" style={{ fontSize: "0.7rem", fontWeight: 600 }}>brand</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Bell className="w-5 h-5 text-muted-foreground cursor-pointer" />
              <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-red-500 text-white flex items-center justify-center" style={{ fontSize: "0.6rem" }}>3</span>
            </div>
            <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-blue-500 cursor-pointer" onClick={() => setActiveTab("profile")}>
              <img src={profile.image} alt="profile" className="w-full h-full object-cover" />
            </div>
            <button onClick={() => router.push("/")} className="text-muted-foreground hover:text-foreground cursor-pointer">
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>
      </nav>

      <div className="pt-16 flex">
        {/* Sidebar */}
        <aside className="hidden lg:block w-64 fixed left-0 top-16 bottom-0 border-r border-border bg-card p-4">
          <div className="space-y-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-blue-50 text-blue-600"
                    : "text-muted-foreground hover:bg-accent"
                }`}
                style={{ fontSize: "0.9rem" }}
              >
                <tab.icon className="w-4.5 h-4.5" />
                {tab.label}
                {tab.id === "proposals-in" && (
                  <span className="ml-auto px-1.5 py-0.5 rounded-full bg-red-500 text-white" style={{ fontSize: "0.65rem" }}>
                    {brandProposals.filter((p) => p.status === "pending").length}
                  </span>
                )}
              </button>
            ))}
          </div>
        </aside>

        {/* Mobile Tab Bar */}
        <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-card border-t border-border z-50">
          <div className="flex justify-around py-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex flex-col items-center gap-1 p-1 cursor-pointer ${
                  activeTab === tab.id ? "text-blue-500" : "text-muted-foreground"
                }`}
              >
                <tab.icon className="w-5 h-5" />
                <span style={{ fontSize: "0.6rem" }}>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <main className="flex-1 lg:ml-64 p-4 sm:p-6 lg:p-8 pb-24 lg:pb-8">
          <div className="max-w-5xl mx-auto">
            {/* Chefs Tab */}
            {activeTab === "chefs" && (
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
                  <h1 style={{ fontSize: "1.5rem", fontWeight: 700 }}>등록된 셰프</h1>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input
                      type="text"
                      placeholder="셰프 검색..."
                      className="pl-10 pr-4 py-2 rounded-lg border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                      style={{ fontSize: "0.875rem" }}
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {chefs.map((chef) => (
                    <div key={chef.id} className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-md transition-shadow">
                      <div className="h-40 overflow-hidden">
                        <img src={chef.image} alt={chef.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="p-4">
                        <div className="flex items-center justify-between mb-1">
                          <h3 style={{ fontWeight: 600 }}>{chef.name}</h3>
                          <div className="flex items-center gap-1">
                            <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                            <span style={{ fontSize: "0.8rem", fontWeight: 600 }}>{chef.rating}</span>
                          </div>
                        </div>
                        <p className="text-muted-foreground mb-1" style={{ fontSize: "0.8rem" }}>{chef.specialty} · 경력 {chef.experience}</p>
                        <p className="text-muted-foreground mb-3" style={{ fontSize: "0.8rem", lineHeight: 1.5 }}>{chef.bio}</p>
                        <div className="flex flex-wrap gap-1.5 mb-3">
                          {chef.tags.map((tag) => (
                            <span key={tag} className="px-2 py-0.5 rounded-full bg-accent text-muted-foreground" style={{ fontSize: "0.7rem" }}>
                              #{tag}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="flex items-center gap-1 text-muted-foreground" style={{ fontSize: "0.75rem" }}>
                            <MapPin className="w-3.5 h-3.5" />{chef.location}
                          </span>
                          <button
                            onClick={() => {
                              setSelectedChef(chef);
                              setShowRequestModal(true);
                            }}
                            className="px-3 py-1.5 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-colors cursor-pointer"
                            style={{ fontSize: "0.8rem" }}
                          >
                            요청하기
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Recommended Chefs */}
            {activeTab === "recommended" && (
              <div>
                <h1 className="mb-2" style={{ fontSize: "1.5rem", fontWeight: 700 }}>추천 셰프</h1>
                <p className="text-muted-foreground mb-6" style={{ fontSize: "0.9rem" }}>
                  브랜드의 카테고리와 필요에 맞게 매칭된 셰프입니다
                </p>
                <div className="space-y-4">
                  {recommendedChefs.map((chef, idx) => (
                    <div key={chef.id} className="bg-card border border-border rounded-xl p-5 flex flex-col sm:flex-row gap-5 hover:shadow-md transition-shadow">
                      <div className="w-full sm:w-48 h-32 rounded-lg overflow-hidden shrink-0">
                        <img src={chef.image} alt={chef.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <h3 style={{ fontWeight: 600 }}>{chef.name}</h3>
                              <span className="px-2 py-0.5 rounded-full bg-blue-100 text-blue-600" style={{ fontSize: "0.7rem", fontWeight: 600 }}>
                                매칭률 {97 - idx * 4}%
                              </span>
                              <div className="flex items-center gap-1">
                                <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                                <span style={{ fontSize: "0.8rem" }}>{chef.rating}</span>
                              </div>
                            </div>
                            <p className="text-muted-foreground" style={{ fontSize: "0.8rem" }}>{chef.specialty} · {chef.location} · 경력 {chef.experience}</p>
                          </div>
                          <Sparkles className="w-5 h-5 text-blue-400" />
                        </div>
                        <p className="text-muted-foreground mt-2 mb-3" style={{ fontSize: "0.85rem", lineHeight: 1.6 }}>{chef.bio}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex gap-1.5">
                            {chef.tags.map((tag) => (
                              <span key={tag} className="px-2 py-0.5 rounded-full bg-accent text-muted-foreground" style={{ fontSize: "0.7rem" }}>
                                #{tag}
                              </span>
                            ))}
                          </div>
                          <button
                            onClick={() => {
                              setSelectedChef(chef);
                              setShowRequestModal(true);
                            }}
                            className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-colors cursor-pointer"
                            style={{ fontSize: "0.85rem" }}
                          >
                            협업 요청 <ArrowRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Received Proposals */}
            {activeTab === "proposals-in" && (
              <div>
                <h1 className="mb-6" style={{ fontSize: "1.5rem", fontWeight: 700 }}>나에게 온 제안서</h1>
                <div className="space-y-4">
                  {brandProposals.map((proposal) => (
                    <div key={proposal.id} className="bg-card border border-border rounded-xl p-5">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <div className="flex items-center gap-3 mb-1">
                            <h3 style={{ fontWeight: 600 }}>{proposal.title}</h3>
                            {getStatusBadge(proposal.status)}
                          </div>
                          <p className="text-muted-foreground" style={{ fontSize: "0.8rem" }}>
                            <ChefHat className="w-3.5 h-3.5 inline mr-1" />
                            {proposal.from} · {proposal.date}
                          </p>
                        </div>
                        {proposal.budget && (
                          <span className="text-blue-500" style={{ fontWeight: 600 }}>{proposal.budget}</span>
                        )}
                      </div>
                      <p className="text-muted-foreground mb-4" style={{ fontSize: "0.85rem", lineHeight: 1.6 }}>{proposal.description}</p>
                      {proposal.status === "pending" && (
                        <div className="flex gap-2">
                          <button className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-green-500 text-white hover:bg-green-600 transition-colors cursor-pointer" style={{ fontSize: "0.85rem" }}>
                            <Check className="w-4 h-4" /> 수락
                          </button>
                          <button className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition-colors cursor-pointer" style={{ fontSize: "0.85rem" }}>
                            <X className="w-4 h-4" /> 거절
                          </button>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Write Proposal */}
            {activeTab === "proposals-out" && (
              <div>
                <h1 className="mb-6" style={{ fontSize: "1.5rem", fontWeight: 700 }}>제안서 작성</h1>
                <div className="bg-card border border-border rounded-xl p-6">
                  <div className="space-y-5">
                    <div>
                      <label className="block mb-1.5" style={{ fontSize: "0.875rem" }}>대상 셰프</label>
                      <select className="w-full px-4 py-2.5 rounded-lg border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-blue-500/20">
                        <option value="">셰프를 선택하세요</option>
                        {chefs.map((c) => (
                          <option key={c.id} value={c.id}>{c.name} - {c.specialty}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block mb-1.5" style={{ fontSize: "0.875rem" }}>제안서 제목</label>
                      <input
                        type="text"
                        value={proposalForm.title}
                        onChange={(e) => setProposalForm({ ...proposalForm, title: e.target.value })}
                        placeholder="제안서 제목을 입력하세요"
                        className="w-full px-4 py-2.5 rounded-lg border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                      />
                    </div>
                    <div>
                      <label className="block mb-1.5" style={{ fontSize: "0.875rem" }}>제안 내용</label>
                      <textarea
                        value={proposalForm.description}
                        onChange={(e) => setProposalForm({ ...proposalForm, description: e.target.value })}
                        rows={6}
                        placeholder="제안 내용을 상세하게 작성해주세요..."
                        className="w-full px-4 py-2.5 rounded-lg border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-blue-500/20 resize-none"
                      />
                    </div>
                    <div>
                      <label className="block mb-1.5" style={{ fontSize: "0.875rem" }}>제안 예산</label>
                      <input
                        type="text"
                        value={proposalForm.budget}
                        onChange={(e) => setProposalForm({ ...proposalForm, budget: e.target.value })}
                        placeholder="예: 500만원"
                        className="w-full px-4 py-2.5 rounded-lg border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                      />
                    </div>
                    <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-500 text-white hover:bg-blue-600 transition-colors cursor-pointer">
                      <Send className="w-4 h-4" /> 제안서 보내기
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Profile */}
            {activeTab === "profile" && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h1 style={{ fontSize: "1.5rem", fontWeight: 700 }}>프로필</h1>
                  <button
                    onClick={() => setProfileEdit(!profileEdit)}
                    className={`px-4 py-2 rounded-lg transition-colors cursor-pointer ${
                      profileEdit ? "bg-green-500 text-white" : "border border-border hover:bg-accent"
                    }`}
                    style={{ fontSize: "0.85rem" }}
                  >
                    {profileEdit ? "저장하기" : "편집하기"}
                  </button>
                </div>
                <div className="bg-card border border-border rounded-xl overflow-hidden">
                  <div className="h-48 bg-gradient-to-r from-blue-400 to-purple-400 relative">
                    <div className="absolute -bottom-12 left-6">
                      <div className="w-24 h-24 rounded-2xl overflow-hidden border-4 border-white shadow-lg">
                        <img src={profile.image} alt="profile" className="w-full h-full object-cover" />
                      </div>
                    </div>
                  </div>
                  <div className="pt-16 p-6">
                    {profileEdit ? (
                      <div className="space-y-4">
                        <div>
                          <label className="block mb-1" style={{ fontSize: "0.8rem" }}>브랜드명</label>
                          <input
                            value={profile.name}
                            onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                            className="w-full px-4 py-2 rounded-lg border border-border bg-input-background focus:outline-none"
                          />
                        </div>
                        <div>
                          <label className="block mb-1" style={{ fontSize: "0.8rem" }}>카테고리</label>
                          <input
                            value={profile.category}
                            onChange={(e) => setProfile({ ...profile, category: e.target.value })}
                            className="w-full px-4 py-2 rounded-lg border border-border bg-input-background focus:outline-none"
                          />
                        </div>
                        <div>
                          <label className="block mb-1" style={{ fontSize: "0.8rem" }}>위치</label>
                          <input
                            value={profile.location}
                            onChange={(e) => setProfile({ ...profile, location: e.target.value })}
                            className="w-full px-4 py-2 rounded-lg border border-border bg-input-background focus:outline-none"
                          />
                        </div>
                        <div>
                          <label className="block mb-1" style={{ fontSize: "0.8rem" }}>소개</label>
                          <textarea
                            value={profile.description}
                            onChange={(e) => setProfile({ ...profile, description: e.target.value })}
                            rows={4}
                            className="w-full px-4 py-2 rounded-lg border border-border bg-input-background focus:outline-none resize-none"
                          />
                        </div>
                        <div>
                          <label className="block mb-1" style={{ fontSize: "0.8rem" }}>예산 범위</label>
                          <input
                            value={profile.budget}
                            onChange={(e) => setProfile({ ...profile, budget: e.target.value })}
                            className="w-full px-4 py-2 rounded-lg border border-border bg-input-background focus:outline-none"
                          />
                        </div>
                      </div>
                    ) : (
                      <div>
                        <h2 style={{ fontSize: "1.25rem", fontWeight: 700 }}>{profile.name}</h2>
                        <p className="text-blue-500 mb-1" style={{ fontSize: "0.9rem" }}>{profile.category}</p>
                        <p className="flex items-center gap-1 text-muted-foreground mb-4" style={{ fontSize: "0.85rem" }}>
                          <MapPin className="w-4 h-4" />{profile.location} · 예산 {profile.budget}
                        </p>
                        <p className="text-muted-foreground mb-4" style={{ fontSize: "0.9rem", lineHeight: 1.7 }}>{profile.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {profile.tags.map((tag) => (
                            <span key={tag} className="px-3 py-1 rounded-full bg-blue-50 text-blue-600" style={{ fontSize: "0.8rem" }}>
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>

      {/* Request Modal */}
      {showRequestModal && selectedChef && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4">
          <div className="bg-card rounded-2xl p-6 w-full max-w-md border border-border shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <h3 style={{ fontWeight: 600 }}>셰프 요청</h3>
              <button onClick={() => setShowRequestModal(false)} className="text-muted-foreground hover:text-foreground cursor-pointer">
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-muted-foreground mb-4" style={{ fontSize: "0.85rem" }}>
              <strong>{selectedChef.name}</strong>에게 협업 요청을 보냅니다
            </p>
            <textarea
              rows={4}
              placeholder="요청 메시지를 작성하세요..."
              className="w-full px-4 py-2.5 rounded-lg border border-border bg-input-background focus:outline-none resize-none mb-4"
            />
            <div className="flex gap-2 justify-end">
              <button onClick={() => setShowRequestModal(false)} className="px-4 py-2 rounded-lg border border-border hover:bg-accent cursor-pointer" style={{ fontSize: "0.85rem" }}>
                취소
              </button>
              <button onClick={() => setShowRequestModal(false)} className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 cursor-pointer" style={{ fontSize: "0.85rem" }}>
                요청 보내기
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}