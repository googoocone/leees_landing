import type { Metadata } from "next";

import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import FooterMb from "@/components/FooterMb";
import TelBtn from "@/components/TelBtn";
import Script from "next/script";

export const metadata: Metadata = {
  title: "법인 회생, 법인파산 전문 이은성 변호사",
  description:
    "법무법인 스탠다드 이은성 대표변호사, 법인 회생/법인 파산을 전문으로 하며, 변호사 생활동안 오직 법인회생/법인파산만 수임했습니다. ",
  // 여기에 네이버 사이트 인증 메타 태그를 추가합니다.
  verification: {
    other: {
      "naver-site-verification": "afa3743b0b5e43b0837352689ba4912d06cf307b",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          id="boraware-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `var protect_id = 'i117';`,
          }}
        />
        <Script
          src="//script.boraware.kr/protect_script_v2.js"
          strategy="beforeInteractive"
          async
        />
      </head>
      <body className={` antialiased relative`}>
        <Header></Header>
        {children}
        <TelBtn></TelBtn>
        <Footer></Footer>
        <FooterMb></FooterMb>
      </body>
    </html>
  );
}
