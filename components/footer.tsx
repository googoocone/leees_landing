"use client"; // 클라이언트 컴포넌트로 지정

import { useState } from "react";

export default function Footer() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [field, setField] = useState("");
  const [isLoading, setIsLoading] = useState(false); // 로딩 상태 추가

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true); // 로딩 시작

    try {
      const response = await fetch("/api/submit-consultation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, phone, field }),
      });

      const mailer = await fetch("api/submit-email", {
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
        alert(result.message);
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("상담 신청 중 오류가 발생했습니다.");
    } finally {
      setIsLoading(false); // 요청 완료 후 로딩 종료
    }
  };

  return (
    <footer className="hidden sm:w-full h-[80px] sm:h-[90px] bg-[#534F4B] fixed bottom-0 sm:flex items-center justify-center z-100">
      <form
        onSubmit={handleSubmit}
        className="w-[950px] h-[60px] flex items-center justify-center gap-2"
      >
        <div className="w-[122px] h-[57px] flex flex-col items-center justify-center mr-5">
          <p className="text-sm text-white">변호사 직접상담</p>
          <p className="text-2xl text-white font-semibold">1899-7754</p>
        </div>
        <div className="hidden sm:w-[180px] h-[60px] rounded-xl bg-[#75726f] sm:flex items-center justify-center gap-2">
          <div className="w-10 text-white text-lg font-semibold">이름</div>
          <input
            placeholder="이름 입력"
            className="w-[100px] h-[40px] bg-transparent border-0 text-lg text-white focus:border-0 focus:outline-none"
            id="nameInput"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="hidden sm:w-[240px] h-[60px] rounded-xl bg-[#75726f] sm:flex items-center justify-center gap-2">
          <div className="w-15 text-white text-lg font-semibold">연락처</div>
          <input
            placeholder="연락처 입력"
            className="w-[140px] h-[40px] bg-transparent border-0 text-lg text-white focus:border-0 focus:outline-none"
            id="phoneInput"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div className="hidden sm:w-[240px] h-[60px] rounded-xl bg-[#75726f] sm:flex items-center justify-center gap-2">
          <div className="w-[80px] text-white text-lg font-semibold">
            상담분야
          </div>
          <select
            className="w-[120px] h-[40px] bg-transparent border-0 text-lg text-white focus:border-0 focus:outline-none cursor-pointer"
            id="fieldSelect"
            value={field}
            onChange={(e) => setField(e.target.value)}
            required
          >
            <option className="text-white bg-[#75726f]" value="">
              (선택)
            </option>

            <option className="text-white bg-[#75726f]" value="법인회생">
              법인회생
            </option>
            <option className="text-white bg-[#75726f]" value="법인파산">
              법인파산
            </option>
          </select>
        </div>

        {/* 상담 신청 버튼 (로딩 UI 추가) */}
        <button
          className="sm:block sm:w-[114px] h-[60px] bg-[#b73b24] text-lg font-semibold border-0 cursor-pointer rounded-xl text-white flex items-center justify-center"
          type="submit"
          disabled={isLoading} // 로딩 중이면 클릭 방지
        >
          {isLoading ? (
            <div className="w-full h-full flex items-center justify-center text-sm">
              상담신청중..
              <svg
                className="animate-spin h-6 w-6 mr-2 text-white mx-auto"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                ></path>
              </svg>
            </div>
          ) : (
            "상담신청"
          )}
        </button>
      </form>
    </footer>
  );
}
