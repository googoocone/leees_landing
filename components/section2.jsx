"use client";

import React, { useState, useEffect } from "react";

export default function Section2() {
  const cards = [
    {
      number: "01",
      text: "회사 대출연장을 위해서 손실이 발생했지만, 회계를 이익 처리 하였다.",
      bgColor: "#EBDCC8",
      delay: 0,
    },
    {
      number: "02",
      text: "개인의 자금을 회사에 넣기 시작했다.",
      bgColor: "white",
      delay: 0,
    },
    {
      number: "03",
      text: "직원들의 급여를 주기가 힘들다.",
      bgColor: "#EBDCC8",
      delay: 0,
    },
    {
      number: "04",
      text: "금융기관에서 만기 연장이 안되거나, 원리금 갚기가 버거워 지고 있다.",
      bgColor: "white",
      delay: 0,
    },
  ];

  return (
    <section className="w-full h-[780px] sm:h-[850px] p-2 sm:p-30 bg-[#F1F1F1] flex flex-col items-center gap-4 sm:gap-20 justify-center">
      <div className="flex flex-col mb-10 sm:mb-0 sm:mt-0 items-center justify-center text-[#534F4B]">
        <div className="text-[18px] sm:text-2xl font-semibold mb-2">
          지금 1가지라도 해당되는 부분이 있으신가요?
        </div>
        <div className="text-[18px] sm:text-2xl px-5 text-center font-semibold">
          지체 하면 <span className="text-[#B73D24]">골든 타임</span>을 놓칠 수
          있습니다.
        </div>
      </div>
      <div className="flex flex-col sm:flex-row sm:h-[310px] items-center justify-center gap-5">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`w-full h-[84px] sm:w-[230px] gap-4 sm:gap-0 sm:h-[240px] p-6 flex sm:flex-col items-center justify-center sm:justify-start ${
              index % 2 === 1 ? "desktop-mt" : ""
            }`}
            style={{
              backgroundColor: card.bgColor,
            }}
          >
            <div className="sm:w-full h-[70px] flex items-center justify-start text-[32px] sm:text-[60px] text-[#534F4B] font-bold">
              {card.number}
            </div>
            <div className="w-full text-justify text-[#534F4B] mt-0 sm:mt-2 text-[16px] font-semibold sm:text-[18px]">
              {card.text}
            </div>
          </div>
        ))}
      </div>
      <h1 className="text-[24px] sm:text-[40px] px-10 pt-14 sm:p-0 text-center font-semibold">
        이제는 법인회생, 파산을 고려하셔야 합니다.
      </h1>
    </section>
  );
}
