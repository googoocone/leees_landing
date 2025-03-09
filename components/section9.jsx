import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const section9 = () => {
  const scaleUp = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };
  return (
    <div className="w-full h-[2840px] sm:h-[2500px] bg-[#4e4034] flex flex-col items-center justify-center">
      <div className="w-full flex flex-col text-white items-center justify-center text-center text-[32px] sm:text-[60px] mb-15">
        <h2>
          오직, <strong>스탠다드</strong>만의
        </h2>
        <div className="px-2 py-1 bg-[#B73D24] font-semibold">
          특별 상담 패키지
        </div>
      </div>
      <div className="hidden sm:w-[980px] h-[1820px] gap-5 sm:flex flex-col items-center justify-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={scaleUp} // 적용하고 싶은 효과로 변경 가능
          viewport={{ once: true, amount: 1 }}
          className="w-full h-[420px] relative"
        >
          <Image
            src="/section9_1.svg"
            fill
            alt="법무법인 스탠다드 회생/파산 로펌"
          ></Image>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={scaleUp} // 적용하고 싶은 효과로 변경 가능
          viewport={{ once: true, amount: 1 }}
          className="w-full  h-[450px] sm:h-[370px] relative"
        >
          <Image
            src="/section9_2.svg"
            fill
            alt="법무법인 스탠다드 회생/파산 로펌"
          ></Image>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={scaleUp} // 적용하고 싶은 효과로 변경 가능
          viewport={{ once: true, amount: 1 }}
          className="w-full h-[450px] sm:h-[550px] relative"
        >
          <Image
            src="/section9_3.svg"
            fill
            alt="법무법인 스탠다드 회생/파산 로펌"
          ></Image>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={scaleUp} // 적용하고 싶은 효과로 변경 가능
          viewport={{ once: true, amount: 1 }}
          className="w-full  h-[450px] sm:h-[420px] relative"
        >
          <Image
            src="/section9_4.svg"
            fill
            alt="법무법인 스탠다드 회생/파산 로펌"
          ></Image>
        </motion.div>
      </div>
      <div className="w-full sm:hidden h-[2520px] gap-5 flex flex-col items-center justify-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={scaleUp} // 적용하고 싶은 효과로 변경 가능
          viewport={{ once: true, amount: 1 }}
          className="w-full h-[580px] relative"
        >
          <Image
            src="/section9_1_mb.svg"
            fill
            alt="법무법인 스탠다드 회생/파산 로펌"
          ></Image>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={scaleUp} // 적용하고 싶은 효과로 변경 가능
          viewport={{ once: true, amount: 1 }}
          className="w-full  h-[557px] relative"
        >
          <Image
            src="/section9_2_mb.svg"
            fill
            alt="법무법인 스탠다드 회생/파산 로펌"
          ></Image>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={scaleUp} // 적용하고 싶은 효과로 변경 가능
          viewport={{ once: true, amount: 1 }}
          className="w-full h-[709px] relative"
        >
          <Image
            src="/section9_3_mb.svg"
            fill
            alt="법무법인 스탠다드 회생/파산 로펌"
          ></Image>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={scaleUp} // 적용하고 싶은 효과로 변경 가능
          viewport={{ once: true, amount: 1 }}
          className="w-full  h-[619px] relative"
        >
          <Image
            src="/section9_4_mb.svg"
            fill
            alt="법무법인 스탠다드 회생/파산 로펌"
          ></Image>
        </motion.div>
      </div>
    </div>
  );
};

export default section9;
