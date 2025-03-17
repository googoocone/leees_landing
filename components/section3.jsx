"use client";

import Image from "next/image";
import React from "react";
import { Typewriter } from "react-simple-typewriter";

const Section3 = () => {
  return (
    <div className="relative w-full h-[610px] sm:h-[900px] flex items-center justify-center">
      <Image
        src="/section_3_bg.png"
        fill
        alt="lawyer"
        style={{ objectFit: "cover" }}
      />
      <div className="w-[750px] h-[450px] sm:h-[620px]  z-10 flex flex-col items-center">
        <h1 className="text-[24px] h-[53px] hidden sm:block sm:text-[40px] font-semibold text-white text-center">
          <span className="blinking-text">
            그럼, 어떤 변호사와 진행을 해야 할까요?
          </span>
          <style jsx>{`
            @keyframes blink {
              0%,
              100% {
                opacity: 1;
              }
              50% {
                opacity: 0.1;
              }
            }
            .blinking-text {
              animation: blink 2s ease-in-out infinite;
            }
          `}</style>
        </h1>
        <h1 className="text-[24px] sm:hidden sm:text-[40px] font-semibold text-white text-center">
          <Typewriter
            words={["그럼, 어떤 변호사와...", "진행을 해야 할까요?"]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={110}
            deleteSpeed={100}
            delaySpeed={500} // 문장 간 대기 시간
          />
        </h1>
        <h4 className="hidden sm:block text-[24px] font-semibold text-[#FFF5E9] mb-20 mt-2 text-center">
          상담을 진행한 기업대표 분들에게 물어보았습니다.
        </h4>
        <h4 className="text-[18px] sm:hidden font-semibold text-[#FFF5E9]  mt-4 mb-12 text-center">
          상담을 진행한 기업대표
          <br /> 분들에게 물어보았습니다.
        </h4>
        <Image
          className="hidden sm:block"
          src="/section_3_talk.svg"
          width={720}
          height={417}
          alt="talk"
        />
        <Image
          className="sm:hidden mx-auto"
          src="/section_3_mb_talk.svg"
          width={329}
          height={259}
          alt="lawyer talk"
        />
      </div>
    </div>
  );
};

export default Section3;
