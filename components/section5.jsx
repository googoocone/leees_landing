import Image from "next/image";
import React from "react";

const section5 = () => {
  return (
    <div className="w-full h-[1020px] sm:h-[584px] bg-[#2C2A28] flex items-center justify-center">
      <Image
        src="/section5.svg"
        width={1280}
        height={584}
        alt="이은성 변호사님 소개"
        className=" hidden sm:block"
      ></Image>
      <Image
        src="/section5_mb.svg"
        width={375}
        height={1000}
        alt="이은성 변호사님 소개"
        className=" sm:hidden"
      ></Image>
    </div>
  );
};

export default section5;
