import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const section8 = () => {
  const scaleUp = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="w-full h-[1280px] sm:h-[1080px] flex flex-col items-center justify-center bg-[#f1f1f1]">
      <div className="w-full text-[18px] sm:text-[24px] text-[#534f4b] text-center">
        의사가 아닌 자가 수술을 할 수 없듯이
      </div>
      <div className="w-full text-[24px] px-2 sm:text-[40px] mt-5 mb-10 sm:mb-20 font-semibold text-red-700 text-center">
        <h2>비법률가에게 맡긴 사건은</h2>
        <h2>불만족을 넘어 회사의 존폐가 달라질 수 있습니다</h2>
      </div>
      <div className="w-full sm:w-[850px] h-[920px] sm:h-[580px] flex flex-col sm:flex-row items-center justify-between">
        <motion.div className="w-[320px] sm:w-[400px] h-[450px] sm:h-[570px] relative">
          <Image src="/section_8_1.svg" fill alt="타사 회생/파산 로펌"></Image>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={scaleUp} // 적용하고 싶은 효과로 변경 가능
          viewport={{ once: true, amount: 1 }}
          className="w-[320px] sm:w-[400px] h-[450px] sm:h-[570px] relative"
        >
          <Image
            src="/section_8_2.svg"
            fill
            alt="법무법인 스탠다드 회생/파산 로펌"
          ></Image>
        </motion.div>
      </div>
    </div>
  );
};

export default section8;
