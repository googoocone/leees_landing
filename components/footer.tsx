"use client";

import { useState } from "react";
// React.FormEvent 타입을 사용하기 위해 import가 필요할 수 있습니다.
// import React from 'react';

export default function Footer() {
  // 기존 폼 입력 값 상태
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [field, setField] = useState("");

  // 로딩 상태
  const [isLoading, setIsLoading] = useState(false);

  // **새로운 상태: 모달 표시 여부**
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  // 폼 제출 핸들러 (모달을 띄우는 역할)
  // e의 타입을 React.FormEvent<HTMLFormElement>로 명시하는 것이 더 정확합니다.
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 입력 값 검증
    if (!name || !phone || !field) {
      alert("모든 필수 입력 값을 채워주세요.");
      return;
    }

    // 상담 클릭 커스텀 이벤트 발생! (API 호출 전에 발생)
    window.dispatchEvent(new Event("consultClicked"));

    // 확인 모달 열기
    // setShowConfirmationModal(true);
    confirmAndSubmit();

    // 여기서 실제 API 호출을 하지 않고 모달 확인 후 호출하도록 변경
  };

  // **새로운 함수: 모달에서 확인 후 실제 제출 처리**
  const confirmAndSubmit = async () => {
    setIsLoading(true); // 로딩 시작

    // 모달 닫기 (API 호출 시작과 함께 닫는 것이 일반적)
    setShowConfirmationModal(false);

    try {
      // 여기서 실제 API 호출
      const response = await fetch("/api/submit-consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, field }), // 기존 state 값 사용
      });

      // 두 번째 API 호출
      // 에러 처리를 위해 mailer 변수로 받아서 await 하는 것이 좋습니다.
      await fetch("/api/submit-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, field }), // 기존 state 값 사용
      });

      const result = await response.json();

      // 응답 처리
      if (response.ok) {
        // 성공 시 폼 초기화
        setName("");
        setPhone("");
        setField("");
        alert(result.message);
        // 메일러 응답 처리가 필요한 경우 여기에 추가
        // if (!mailerResponse.ok) { ... }
      } else {
        // 오류 응답 처리
        const errorResult = await response.json();
        throw new Error(
          errorResult.message || `HTTP error! status: ${response.status}`
        );
      }
    } catch (error: unknown) {
      // any 대신 unknown 사용
      console.error("Error:", error);
      // error가 Error 타입인지 확인 후 message에 접근
      if (error instanceof Error) {
        alert("상담 신청 중 오류가 발생했습니다: " + error.message);
      } else {
        // Error 인스턴스가 아닌 경우 일반적인 오류 메시지 표시
        alert("상담 신청 중 알 수 없는 오류가 발생했습니다.");
      }
      // 오류 발생 시 로딩 상태만 해제하고 폼은 열어두어 사용자가 수정할 수 있도록 함
    } finally {
      setIsLoading(false); // 로딩 종료
      // 모달은 confirmAndSubmit 시작 시 닫았으므로 여기서 다시 닫을 필요 없음
    }
  };

  // **새로운 함수: 모달에서 취소 처리**
  const cancelConfirmation = () => {
    setShowConfirmationModal(false); // 모달 닫기
    // 취소 시 폼 입력 값은 그대로 유지 (원하면 초기화도 가능)
  };

  return (
    <>
      <footer className="hidden sm:w-full h-[80px] sm:h-[90px] bg-[#534F4B] fixed bottom-0 sm:flex items-center justify-center z-100">
        <form
          onSubmit={handleSubmit} // 폼 제출 시 handleSubmit 호출 (모달 열기)
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

          <button
            className="sm:block sm:w-[114px] h-[60px] bg-[#b73b24] text-lg font-semibold border-0 cursor-pointer rounded-xl text-white flex items-center justify-center"
            type="submit" // 이 버튼을 누르면 handleSubmit이 실행됨
            disabled={isLoading || showConfirmationModal} // 로딩 중이거나 모달이 열려있으면 버튼 비활성화
          >
            {isLoading ? (
              <div className="w-full h-full flex items-center justify-center text-sm">
                상담신청중...
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

      {/* **확인 모달** */}
      {showConfirmationModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[1000]">
          <div className="w-[400px] h-[250px] bg-white p-6 rounded-lg shadow-xl max-w-sm mx-auto text-left">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              입력 정보 확인
            </h2>
            <div className="mt-10">
              <p className="mb-1 text-gray-700">
                <strong>이름:</strong> {name} {/* 기존 state 값 사용 */}
              </p>
              <p className="mb-4 text-gray-700">
                <strong>연락처:</strong> {phone} {/* 기존 state 값 사용 */}
              </p>
            </div>

            <div className="flex justify-around gap-4 mt-10">
              <button
                onClick={confirmAndSubmit} // 확인 버튼 클릭 시 실제 제출 함수 호출
                className="w-[170px] bg-[#b73b24] text-white px-4 py-2 rounded-md hover:bg-blue-700 disabled:opacity-50"
                disabled={isLoading} // 제출 처리 중에는 확인 버튼 비활성화
              >
                {isLoading ? "확인 중..." : "확인"}
              </button>
              <button
                onClick={cancelConfirmation} // 취소 버튼 클릭 시 모달 닫기 함수 호출
                className="w-[170px] bg-gray-300 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-400"
                disabled={isLoading} // 제출 처리 중에는 취소 버튼 비활성화
              >
                취소
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
