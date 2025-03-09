import Image from "next/image";
import React from "react";

const section10 = () => {
  return (
    <div className="w-full h-[1200px] sm:h-[980px] flex items-center justify-center bg-[#2C2A28]">
      <Image
        src="/section10_1.svg"
        width={960}
        height={720}
        alt="이은성 변호사님 메시지"
        className="hidden sm:block"
      ></Image>
      <div className="w-full sm:hidden h-[1026px] relative">
        <Image
          src="/section10_1_mb.svg"
          fill
          alt="이은성 변호사님 메시지"
          className="sm:hidden"
        ></Image>
      </div>
    </div>
  );
};

export default section10;
