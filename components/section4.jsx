import Image from "next/image";
import React from "react";
import { Typewriter } from "react-simple-typewriter";

const section4 = () => {
  return (
    <div className="w-full h-[720px] relative sm:h-[852px] flex items-center justify-center">
      <Image
        src="/section_4.svg"
        width={632}
        height={612}
        alt="lawyer description"
        className="hidden sm:block"
      ></Image>
      <Image
        src="/section_4_mb.svg"
        width={343}
        height={608}
        alt="lawyer description"
        className="sm:hidden"
      ></Image>
    </div>
  );
};

export default section4;
