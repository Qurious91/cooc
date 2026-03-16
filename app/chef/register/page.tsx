"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ChefHat, ArrowLeft, KeyRound } from "lucide-react";

export default function ChefRegisterPage() {
  const router = useRouter();
  const [code, setCode] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (code.toLowerCase() === "test") {
      router.push("/chef/dashboard");
    } else {
      setError("올바른 코드를 입력해주세요. (힌트: test)");
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <button
          onClick={() => router.push("/")}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          홈으로 돌아가기
        </button>

        <div className="bg-card border border-border rounded-2xl p-8 shadow-lg">
          <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 mb-6 mx-auto">
            <ChefHat className="w-7 h-7 text-white" />
          </div>

          <h1
            className="text-center mb-2"
            style={{ fontSize: "1.5rem", fontWeight: 700 }}
          >
            셰프 등록
          </h1>

          <p
            className="text-center text-muted-foreground mb-8"
            style={{ fontSize: "0.9rem" }}
          >
            셰프 프로필을 등록하고 브랜드와 연결되세요
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                className="block mb-1.5"
                style={{ fontSize: "0.875rem" }}
              >
                <span className="flex items-center gap-1.5">
                  <KeyRound className="w-4 h-4" />
                  등록 코드
                </span>
              </label>

              <input
                type="text"
                value={code}
                onChange={(e) => {
                  setCode(e.target.value);
                  setError("");
                }}
                placeholder="등록 코드를 입력하세요"
                className="w-full px-4 py-2.5 rounded-lg border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-primary/20"
              />

              {error && (
                <p
                  className="mt-2 text-destructive"
                  style={{ fontSize: "0.8rem" }}
                >
                  {error}
                </p>
              )}

              <p
                className="mt-2 text-muted-foreground"
                style={{ fontSize: "0.75rem" }}
              >
                * &apos;test&apos;를 입력하면 셰프 대시보드로 이동합니다
              </p>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white hover:opacity-90 transition-opacity cursor-pointer"
            >
              셰프로 등록하기
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}