"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const fadeInFromLeft = {
  hidden: { opacity: 0, x: -100 }, // 왼쪽에서 시작
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }, // 오른쪽으로 이동하며 나타남
};

const fadeInOut = {
  hidden: { opacity: 0, y: 50 },
  animate: (custom) => ({
    opacity: [0, 1, 1, 0],
    y: [50, 0, 0, -50],
    transition: {
      delay: custom, // custom 값으로 각 이미지에 딜레이 적용
      duration: 5, // 애니메이션 전체 지속 시간 (예: 5초)
      times: [0, 0.2, 0.8, 1], // 각 단계별 타이밍 (20%에 도달하면 완전히 나타나고, 80%까지 유지 후 마지막에 사라짐)
      repeat: Infinity, // 무한 반복
      repeatDelay: 2, // 한 싸이클 후 2초 대기
    },
  }),
};

const Section7 = () => {
  return (
    <>
      {/* 데스크탑 버전 */}
      <div className="hidden w-full h-[2000px] bg-white sm:flex flex-col items-center justify-center">
        <div className="w-full text-center text-[32px] font-semibold flex flex-col items-center justify-center">
          <h2 className="text-red-700">빚과의 전쟁에서</h2>
          <h2>이은성 변호사만의 차별점</h2>
        </div>
        <div className="text-[40px] mt-5 font-semibold text-[#4e4043]">
          "속도와 디테일을 함께 잡은 회생, 파산 전문로펌"
        </div>
        <div className="mt-15 w-[980px] ">
          <motion.div
            className="w-full h-[320px] bg-[#f1f1f1] relative"
            initial="hidden"
            whileInView="visible"
            variants={fadeInFromLeft}
            viewport={{ once: true, amount: 0.5 }}
          >
            <Image src="/section_7_1.svg" fill alt="이은성 변호사의 차별점 1" />
          </motion.div>
          <motion.div
            className="w-full h-[605px] my-5 relative"
            initial="hidden"
            whileInView="visible"
            variants={fadeInFromLeft}
            viewport={{ once: true, amount: 0.5 }}
          >
            <img
              src="/section7_2.gif"
              alt="GIF 애니메이션"
              className="absolute top-5 left-5 w-[580px] h-[580px] z-10"
            />
            <Image src="/section7_2.svg" fill alt="이은성 변호사의 차별점 2" />
          </motion.div>
          <motion.div
            className="w-full h-[490px] relative"
            initial="hidden"
            whileInView="visible"
            variants={fadeInFromLeft}
            viewport={{ once: true, amount: 0.5 }}
          >
            <Image src="/section_7_3.svg" fill alt="이은성 변호사의 차별점 3" />
          </motion.div>
        </div>
      </div>

      {/* 모바일 버전 */}
      <div className="w-full sm:hidden flex flex-col items-center justify-center h-[2200px] bg-white">
        <div className="w-full text-[20px] font-semibold text-center">
          <h2 className="text-red-700">빚과의 전쟁에서</h2>
          <div className="text-[#534f4b]">이은성 변호사만의 차별점</div>
        </div>
        <div className="mt-5 w-full text-[24px] text-[#534f4b] font-semibold text-center">
          "속도와 디테일을 함께 잡은 <br />
          회생, 파산 전문로펌"
        </div>
        <div className="w-[343px] mt-15">
          <motion.div
            className="w-full h-[358px] relative"
            initial="hidden"
            whileInView="visible"
            variants={fadeInFromLeft}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Image
              src="/section_7_1_mb.svg"
              fill
              alt="이은성변호사의 차별점 1"
            />
          </motion.div>
          <motion.div
            className="w-full h-[1007px] relative my-5"
            initial="hidden"
            whileInView="visible"
            variants={fadeInFromLeft}
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div className="absolute top-60 left-4 w-[320px] h-[726px] z-10 bg-[#f1f1f1]">
              {/* 이미지 1: custom delay 0초 */}
              <motion.div
                custom={0}
                initial="hidden"
                animate="animate"
                variants={fadeInOut}
                key="test_1"
              >
                <img src="/test_1.svg" alt="test 1" />
              </motion.div>

              {/* 이미지 2: custom delay 1초 */}
              <motion.div
                custom={1}
                initial="hidden"
                animate="animate"
                variants={fadeInOut}
                key="test_2"
              >
                <img src="/test_2.svg" alt="test 2" />
              </motion.div>

              {/* 이미지 3: custom delay 2초 */}
              <motion.div
                custom={2}
                initial="hidden"
                animate="animate"
                variants={fadeInOut}
                key="test_3"
              >
                <img src="/test_3.svg" alt="test 3" />
              </motion.div>
            </motion.div>

            <Image
              src="/section7_2_mb_test.svg"
              fill
              alt="이은성변호사의 차별점 2"
            />
          </motion.div>
          <motion.div
            className="w-full h-[543px] relative"
            initial="hidden"
            whileInView="visible"
            variants={fadeInFromLeft}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Image
              src="/section_7_3_mb.svg"
              fill
              alt="이은성변호사의 차별점 3"
            />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Section7;
