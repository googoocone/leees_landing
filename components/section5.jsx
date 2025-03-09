import Image from "next/image";
import React from "react";

const section5 = () => {
  return (
    <div className="w-full h-[892px] sm:h-[584px] bg-[#2C2A28] flex items-center justify-center">
      <Image
        src="/section_5.svg"
        width={980}
        height={416}
        alt="이은성 변호사님 소개"
        className=" hidden sm:block"
      ></Image>
      <Image
        src="/section_5_mb.svg"
        width={343}
        height={730}
        alt="이은성 변호사님 소개"
        className=" sm:hidden"
      ></Image>
    </div>
  );
};

export default section5;
