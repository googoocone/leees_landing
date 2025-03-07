import Image from "next/image";
import Link from "next/link";

export default function TelBtn() {
  return (
    <div className="fixed bottom-[90px] right-4 w-[40px] h-[40px] rounded-full bg-[#b73d24] flex items-center justify-center">
      <Link href="tel:1899-7754" className="rounded-full">
        <Image src="/phone.png" width={30} height={30} alt="전화버튼"></Image>
      </Link>
    </div>
  );
}
