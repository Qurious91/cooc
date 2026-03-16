"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  ChefHat, Building2, FileText, Search, Star, Calendar, Bell, User,
  LogOut, Send, Eye, EyeOff, X, Check, Clock, MapPin, Sparkles, ArrowRight
} from "lucide-react";
import { brands, myProposals, scheduleItems, type Brand, type Proposal, type ScheduleItem } from "../../lib/data";
import { Great_Vibes } from "next/font/google";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});



type Tab = "brands" | "proposals-in" | "proposals-out" | "recommended" | "schedule" | "profile";


export function ChefDashboard() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<Tab>("brands");
  const [schedule, setSchedule] = useState<ScheduleItem[]>(scheduleItems);
  const [showProposalModal, setShowProposalModal] = useState(false);
  const [showRequestModal, setShowRequestModal] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState<Brand | null>(null);
  const [profileEdit, setProfileEdit] = useState(false);

  const [profile, setProfile] = useState({
    name: "AAA 셰프",
    specialty: "한식 파인다이닝",
    experience: "15년",
    location: "서울 강남구",
    bio: "미쉐린 2스타 레스토랑 출신으로 한식의 현대화를 추구합니다. 전통적인 한식의 깊은 맛을 현대적인 기법으로 재해석하는 것에 집중하고 있습니다.",
    tags: ["한식", "파인다이닝", "미쉐린", "모던한식"],
    image: "https://images.unsplash.com/photo-1697659602792-31dcb2a5a4ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjaGVmJTIwY29va2luZyUyMGtpdGNoZW58ZW58MXx8fHwxNzczNjMyNDYzfDA&ixlib=rb-4.1.0&q=80&w=1080",
  });

  const [proposalForm, setProposalForm] = useState({ title: "", description: "", budget: "" });

  const toggleSchedulePublic = (id: string) => {
    setSchedule((prev) =>
      prev.map((s) => (s.id === id ? { ...s, isPublic: !s.isPublic } : s))
    );
  };

  const recommendedBrands = brands.slice(0, 3);

  const tabs = [
    { id: "brands" as Tab, label: "브랜드 살펴보기", icon: Building2 },
    { id: "recommended" as Tab, label: "추천 브랜드", icon: Sparkles },
    { id: "proposals-in" as Tab, label: "받은 제안서", icon: Bell },
    { id: "proposals-out" as Tab, label: "제안서 쓰기", icon: FileText },
    { id: "schedule" as Tab, label: "일정 관리", icon: Calendar },
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
            <span className="px-2 py-0.5 rounded-full bg-orange-100 text-orange-600" style={{ fontSize: "0.7rem", fontWeight: 600 }}>Chef</span>

          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Bell className="w-5 h-5 text-muted-foreground cursor-pointer" />
              <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-red-500 text-white flex items-center justify-center" style={{ fontSize: "0.6rem" }}>2</span>
            </div>
            <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-orange-500 cursor-pointer" onClick={() => setActiveTab("profile")}>
              <img src={profile.image} alt="profile" className="w-full h-full object-cover" />
            </div>
            <button
              onClick={() => router.push("/")}
              className="text-muted-foreground hover:text-foreground cursor-pointer"
            >
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
                    ? "bg-orange-50 text-orange-600"
                    : "text-muted-foreground hover:bg-accent"
                }`}
                style={{ fontSize: "0.9rem" }}
              >
                <tab.icon className="w-4.5 h-4.5" />
                {tab.label}
                {tab.id === "proposals-in" && (
                  <span className="ml-auto px-1.5 py-0.5 rounded-full bg-red-500 text-white" style={{ fontSize: "0.65rem" }}>
                    {myProposals.filter((p) => p.status === "pending").length}
                  </span>
                )}
              </button>
            ))}
          </div>
        </aside>

        {/* Mobile Tab Bar */}
        <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-card border-t border-border z-50">
          <div className="flex justify-around py-2">
            {tabs.slice(0, 5).map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex flex-col items-center gap-1 p-1 cursor-pointer ${
                  activeTab === tab.id ? "text-orange-500" : "text-muted-foreground"
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
            {/* Brands Tab */}
            {activeTab === "brands" && (
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
                  <h1 style={{ fontSize: "1.5rem", fontWeight: 700 }}>등록된 브랜드</h1>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input
                      type="text"
                      placeholder="브랜드 검색..."
                      className="pl-10 pr-4 py-2 rounded-lg border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                      style={{ fontSize: "0.875rem" }}
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {brands.map((brand) => (
                    <div key={brand.id} className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-md transition-shadow">
                      <div className="h-40 overflow-hidden">
                        <img src={brand.image} alt={brand.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="p-4">
                        <div className="flex items-center justify-between mb-1">
                          <h3 style={{ fontWeight: 600 }}>{brand.name}</h3>
                          <span className="text-muted-foreground" style={{ fontSize: "0.75rem" }}>{brand.category}</span>
                        </div>
                        <p className="text-muted-foreground mb-3" style={{ fontSize: "0.8rem", lineHeight: 1.5 }}>{brand.description}</p>
                        <div className="flex flex-wrap gap-1.5 mb-3">
                          {brand.tags.map((tag) => (
                            <span key={tag} className="px-2 py-0.5 rounded-full bg-accent text-muted-foreground" style={{ fontSize: "0.7rem" }}>
                              #{tag}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="flex items-center gap-1 text-muted-foreground" style={{ fontSize: "0.75rem" }}>
                            <MapPin className="w-3.5 h-3.5" />{brand.location}
                          </span>
                          <button
                            onClick={() => {
                              setSelectedBrand(brand);
                              setShowRequestModal(true);
                            }}
                            className="px-3 py-1.5 rounded-lg bg-orange-500 text-white hover:bg-orange-600 transition-colors cursor-pointer"
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

            {/* Recommended Brands */}
            {activeTab === "recommended" && (
              <div>
                <h1 className="mb-2" style={{ fontSize: "1.5rem", fontWeight: 700 }}>추천 브랜드</h1>
                <p className="text-muted-foreground mb-6" style={{ fontSize: "0.9rem" }}>
                  셰프님의 전문 분야와 경력을 기반으로 매칭된 브랜드입니다
                </p>
                <div className="space-y-4">
                  {recommendedBrands.map((brand, idx) => (
                    <div key={brand.id} className="bg-card border border-border rounded-xl p-5 flex flex-col sm:flex-row gap-5 hover:shadow-md transition-shadow">
                      <div className="w-full sm:w-48 h-32 rounded-lg overflow-hidden shrink-0">
                        <img src={brand.image} alt={brand.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <h3 style={{ fontWeight: 600 }}>{brand.name}</h3>
                              <span className="px-2 py-0.5 rounded-full bg-orange-100 text-orange-600" style={{ fontSize: "0.7rem", fontWeight: 600 }}>
                                매칭률 {95 - idx * 5}%
                              </span>
                            </div>
                            <p className="text-muted-foreground" style={{ fontSize: "0.8rem" }}>{brand.category} · {brand.location}</p>
                          </div>
                          <Sparkles className="w-5 h-5 text-orange-400" />
                        </div>
                        <p className="text-muted-foreground mt-2 mb-3" style={{ fontSize: "0.85rem", lineHeight: 1.6 }}>{brand.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-muted-foreground" style={{ fontSize: "0.8rem" }}>예산: {brand.budget}</span>
                          <button
                            onClick={() => {
                              setSelectedBrand(brand);
                              setShowRequestModal(true);
                            }}
                            className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-orange-500 text-white hover:bg-orange-600 transition-colors cursor-pointer"
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
                  {myProposals.map((proposal) => (
                    <div key={proposal.id} className="bg-card border border-border rounded-xl p-5">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <div className="flex items-center gap-3 mb-1">
                            <h3 style={{ fontWeight: 600 }}>{proposal.title}</h3>
                            {getStatusBadge(proposal.status)}
                          </div>
                          <p className="text-muted-foreground" style={{ fontSize: "0.8rem" }}>
                            <Building2 className="w-3.5 h-3.5 inline mr-1" />
                            {proposal.from} · {proposal.date}
                          </p>
                        </div>
                        {proposal.budget && (
                          <span className="text-orange-500" style={{ fontWeight: 600 }}>{proposal.budget}</span>
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
                      <label className="block mb-1.5" style={{ fontSize: "0.875rem" }}>대상 브랜드</label>
                      <select className="w-full px-4 py-2.5 rounded-lg border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-orange-500/20">
                        <option value="">브랜드를 선택하세요</option>
                        {brands.map((b) => (
                          <option key={b.id} value={b.id}>{b.name}</option>
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
                        className="w-full px-4 py-2.5 rounded-lg border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                      />
                    </div>
                    <div>
                      <label className="block mb-1.5" style={{ fontSize: "0.875rem" }}>제안 내용</label>
                      <textarea
                        value={proposalForm.description}
                        onChange={(e) => setProposalForm({ ...proposalForm, description: e.target.value })}
                        rows={6}
                        placeholder="제안 내용을 상세하게 작성해주세요..."
                        className="w-full px-4 py-2.5 rounded-lg border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-orange-500/20 resize-none"
                      />
                    </div>
                    <div>
                      <label className="block mb-1.5" style={{ fontSize: "0.875rem" }}>희망 예산</label>
                      <input
                        type="text"
                        value={proposalForm.budget}
                        onChange={(e) => setProposalForm({ ...proposalForm, budget: e.target.value })}
                        placeholder="예: 500만원"
                        className="w-full px-4 py-2.5 rounded-lg border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                      />
                    </div>
                    <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-orange-500 text-white hover:bg-orange-600 transition-colors cursor-pointer">
                      <Send className="w-4 h-4" /> 제안서 보내기
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Schedule */}
            {activeTab === "schedule" && (
              <div>
                <h1 className="mb-2" style={{ fontSize: "1.5rem", fontWeight: 700 }}>일정 관리</h1>
                <p className="text-muted-foreground mb-6" style={{ fontSize: "0.9rem" }}>
                  공개 여부를 설정하여 브랜드에게 일정을 공유할 수 있습니다
                </p>
                <div className="space-y-3">
                  {schedule.map((item) => (
                    <div key={item.id} className="bg-card border border-border rounded-xl p-4 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="text-center min-w-[50px]">
                          <p className="text-orange-500" style={{ fontSize: "0.75rem", fontWeight: 600 }}>
                            {new Date(item.date).toLocaleDateString("ko-KR", { month: "short", day: "numeric" })}
                          </p>
                          <p className="text-muted-foreground" style={{ fontSize: "0.7rem" }}>
                            {new Date(item.date).toLocaleDateString("ko-KR", { weekday: "short" })}
                          </p>
                        </div>
                        <div className="w-px h-10 bg-border" />
                        <div>
                          <p style={{ fontWeight: 500 }}>{item.title}</p>
                          <p className="flex items-center gap-1 text-muted-foreground" style={{ fontSize: "0.8rem" }}>
                            <Clock className="w-3.5 h-3.5" />{item.time}
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={() => toggleSchedulePublic(item.id)}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                          item.isPublic
                            ? "bg-green-100 text-green-700"
                            : "bg-gray-100 text-gray-500"
                        }`}
                        style={{ fontSize: "0.8rem" }}
                      >
                        {item.isPublic ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                        {item.isPublic ? "공개" : "비공개"}
                      </button>
                    </div>
                  ))}
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
                  <div className="h-48 bg-gradient-to-r from-orange-400 to-red-400 relative">
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
                          <label className="block mb-1" style={{ fontSize: "0.8rem" }}>이름</label>
                          <input
                            value={profile.name}
                            onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                            className="w-full px-4 py-2 rounded-lg border border-border bg-input-background focus:outline-none"
                          />
                        </div>
                        <div>
                          <label className="block mb-1" style={{ fontSize: "0.8rem" }}>전문 분야</label>
                          <input
                            value={profile.specialty}
                            onChange={(e) => setProfile({ ...profile, specialty: e.target.value })}
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
                            value={profile.bio}
                            onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                            rows={4}
                            className="w-full px-4 py-2 rounded-lg border border-border bg-input-background focus:outline-none resize-none"
                          />
                        </div>
                      </div>
                    ) : (
                      <div>
                        <h2 style={{ fontSize: "1.25rem", fontWeight: 700 }}>{profile.name}</h2>
                        <p className="text-orange-500 mb-1" style={{ fontSize: "0.9rem" }}>{profile.specialty}</p>
                        <p className="flex items-center gap-1 text-muted-foreground mb-4" style={{ fontSize: "0.85rem" }}>
                          <MapPin className="w-4 h-4" />{profile.location} · 경력 {profile.experience}
                        </p>
                        <p className="text-muted-foreground mb-4" style={{ fontSize: "0.9rem", lineHeight: 1.7 }}>{profile.bio}</p>
                        <div className="flex flex-wrap gap-2">
                          {profile.tags.map((tag) => (
                            <span key={tag} className="px-3 py-1 rounded-full bg-orange-50 text-orange-600" style={{ fontSize: "0.8rem" }}>
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
      {showRequestModal && selectedBrand && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4">
          <div className="bg-card rounded-2xl p-6 w-full max-w-md border border-border shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <h3 style={{ fontWeight: 600 }}>브랜드 요청</h3>
              <button onClick={() => setShowRequestModal(false)} className="text-muted-foreground hover:text-foreground cursor-pointer">
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-muted-foreground mb-4" style={{ fontSize: "0.85rem" }}>
              <strong>{selectedBrand.name}</strong>에 협업 요청을 보냅니다
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
              <button onClick={() => setShowRequestModal(false)} className="px-4 py-2 rounded-lg bg-orange-500 text-white hover:bg-orange-600 cursor-pointer" style={{ fontSize: "0.85rem" }}>
                요청 보내기
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}