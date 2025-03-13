import Image from "next/image";
import Link from "next/link";

export default function TelBtn() {
  return (
    <>
      <div className="sm:hidden fixed bottom-[90px] right-4 w-[40px] h-[40px] rounded-full bg-[#b73d24] flex items-center justify-center z-100">
        <Link href="tel:1899-7754" className="rounded-full">
          <Image src="/phone.png" width={30} height={30} alt="전화버튼"></Image>
        </Link>
      </div>
      <div className="hidden text-white text-[18px] font-semibold fixed bottom-[120px] right-4 px-4 py-2 rounded-full bg-[#b73d24] sm:flex sm:flex-col items-center justify-center z-100">
        <div className="text-[16px] font-normal">즉시 상담</div>
        <div>1899-7754</div>
      </div>
    </>
  );
}
