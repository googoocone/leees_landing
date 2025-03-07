"use client"; // 클라이언트 컴포넌트로 지정

import { useState } from "react";

export default function FooterMb() {
  const [isFormOpen, setIsFormOpen] = useState(false); // 폼 표시 상태
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [field, setField] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/submit-consultation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, phone, field }),
      });

      const result = await response.json();
      if (response.ok) {
        setName("");
        setPhone("");
        setField("");
        setIsFormOpen(false); // 제출 후 폼 닫기
        alert(result.message);
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("상담 신청 중 오류가 발생했습니다.");
    }
  };

  return (
    <footer className="sm:hidden fixed bottom-0 w-full bg-[#534F4B] z-50">
      {/* 상담신청 버튼 (폼이 닫혀 있을 때만 표시) */}
      {!isFormOpen && (
        <div className="flex justify-center py-2">
          <button
            className="w-[90%] h-[50px] bg-[#b73b24] text-lg font-semibold text-white rounded-xl"
            onClick={() => setIsFormOpen(true)}
          >
            상담신청
          </button>
        </div>
      )}

      {/* 상담신청 폼 (열릴 때 위로 올라오는 애니메이션) */}
      {isFormOpen && (
        <div
          className="w-full bg-[#534F4B] p-4 animate-slide-up"
          style={{ boxShadow: "0 -2px 10px rgba(0, 0, 0, 0.3)" }}
        >
          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="flex items-center bg-[#75726f] rounded-xl p-2">
              <label className="w-30 text-white text-lg font-semibold">
                이름
              </label>
              <input
                placeholder="이름 입력"
                className="w-full h-[40px] bg-transparent border-0 text-lg text-white focus:border-0 focus:outline-none"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="flex items-center bg-[#75726f] rounded-xl p-2">
              <label className="w-30 text-white text-lg font-semibold">
                연락처
              </label>
              <input
                placeholder="연락처 입력"
                className="w-full h-[40px] bg-transparent border-0 text-lg text-white focus:border-0 focus:outline-none"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <div className="flex items-center bg-[#75726f] rounded-xl p-2">
              <label className="w-30 text-white text-lg font-semibold">
                상담분야
              </label>
              <select
                className="w-full h-[40px] bg-transparent border-0 text-lg text-white focus:border-0 focus:outline-none"
                value={field}
                onChange={(e) => setField(e.target.value)}
                required
              >
                <option className="text-white bg-[#75726f]" value="">
                  (선택)
                </option>
                <option className="text-white bg-[#75726f]" value="개인회생">
                  개인회생
                </option>
                <option className="text-white bg-[#75726f]" value="개인파산">
                  개인파산
                </option>
                <option className="text-white bg-[#75726f]" value="법인회생">
                  법인회생
                </option>
                <option className="text-white bg-[#75726f]" value="법인파산">
                  법인파산
                </option>
              </select>
            </div>
            <div className="flex gap-2">
              <button
                type="submit"
                className="w-1/2 h-[50px] bg-[#b73b24] text-lg font-semibold text-white rounded-xl"
              >
                제출
              </button>
              <button
                type="button"
                className="w-1/2 h-[50px] bg-gray-600 text-lg font-semibold text-white rounded-xl"
                onClick={() => setIsFormOpen(false)}
              >
                닫기
              </button>
            </div>
          </form>
        </div>
      )}
    </footer>
  );
}
