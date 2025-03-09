"use client";

import React, { useState } from "react";
import cn from "classnames";

import { LuBuilding } from "react-icons/lu";
import { LuHospital } from "react-icons/lu";
import { TbBuildingEstate } from "react-icons/tb";
import { AiOutlineDesktop } from "react-icons/ai";
import { IoBriefcaseOutline } from "react-icons/io5";
import { IoFastFoodOutline } from "react-icons/io5";
import { RiAdvertisementLine } from "react-icons/ri";
import { MdOutlineAgriculture } from "react-icons/md";
import { PiFactory } from "react-icons/pi";

const menus = [
  {
    number: 1,
    title: "제조업",
    icon: <PiFactory className="w-[30px] h-[30px]" />,
    case_revive: [
      "서울회생법원 제지제조업 법인회생",
      "서울회생법원 애견용품 제조업 법인회생",
      "수원회생법원 컨테이너제조업 법인회생",
      "광주지방법원 현대자동차 2차 벤더사 법인회생",
      "전주지방법원 원사 가공업 법인회생 및 대표자 회생",
      "창원지방법원 현대자동차 1차 벤더 법인회생(채권자대리)",
      "부산회생법원 선박제조업 법인회생",
      "대전지방법원 모래 및 자갈 채취업 법인회생",
    ],
    case_bankruptcy: [
      "의정부지방법원 모피제조업 법인파산",
      "수원회생법원 가구제작업 법인파산",
      "수원회생법원 프린터 개발 및 제조업 법인파산",
      "수원회생법원 가구 제작 및 인테리어업 법인파산",
      "대전지방법원 고철스크랩업 법인파산",
      "대전지방법원 구두제조업 법인파산",
      "대구지방법원 전자부품 제조업 법인파산",
    ],
  },
  {
    number: 2,
    title: "의료업",
    icon: <LuHospital className="w-[30px] h-[30px]" />,
    case_revive: [
      "서울회생법원 논현동 성형외과 일반회생",
      "서울회생법원 신사동 피부과 병원 일반회생",
      "서울회생법원 종합병원 일반회생",
      "의정부지방법원 피부과병원 일반회생",
      "창원지방법원 대형약국 일반회생",
      "창원지방법원 화상외과 일반회생",
    ],
    case_bankruptcy: [
      "부산회생법원 의사 파산 및 면책",
      "전주지방법원 한의사 파산 및 면책",
    ],
  },
  {
    number: 3,
    title: "임대업",
    icon: <TbBuildingEstate className="w-[30px] h-[30px]" />,
    case_revive: [],
    case_bankruptcy: [
      "의정부지방법원 부동산임대업 법인파산",
      "광주지방법원 부동산 임대업 법인파산",
    ],
  },
  {
    number: 4,
    title: "IT업",
    icon: <AiOutlineDesktop className="w-[30px] h-[30px]" />,
    case_revive: [
      "서울회생법원 전자상거래업 법인회생",
      "서울회생법원 정보서비스업 법인회생",
      "서울회생법원 IT/AI 개발 유통회사 법인회생",
      "서울회생법원 영화 영상물 제작업 법인회생",
    ],
    case_bankruptcy: [
      "서울회생법원 가상자산거래소 법인파산",
      "서울회생법원 소프트웨어 개발 및 공급업 법인파산",
      "서울회생법원 벤처기업 및 스타트업 법인파산 다수",
      "서울회생법원 컴퓨터 소프트웨어 도소매업 법인파산",
      "부산회생법원 소프트웨어 개발업 법인파산",
    ],
  },
  {
    number: 5,
    title: "무역업",
    icon: <IoBriefcaseOutline className="w-[30px] h-[30px]" />,
    case_revive: [
      "수원회생법원 무역업 법인회생",
      "부산회생법원 무역업 법인회생",
    ],
    case_bankruptcy: ["광주지방법원 차량용품 제작 및 구매대행업 법인파산"],
  },
  {
    number: 6,
    title: "요식업",
    icon: <IoFastFoodOutline className="w-[30px] h-[30px]" />,
    case_revive: [
      "서울회생법원 역삼동 유명 프랜차이즈 요식업 일반회생",
      "부산지방법원 광안리 소재 횟집 일반회생 외 전국 다수",
      "대구지방법원 빽다방 제휴업체(HACCP인증) 법인회생",
    ],
    case_bankruptcy: [],
  },
  {
    number: 7,
    title: "광고업",
    icon: <RiAdvertisementLine className="w-[30px] h-[30px]" />,
    case_revive: [],
    case_bankruptcy: ["서울회생법원 연예기획사 법인파산"],
  },
  {
    number: 8,
    title: "농업",
    icon: <MdOutlineAgriculture className="w-[30px] h-[30px]" />,
    case_revive: [
      "창원지방법원 영농조합법인 법인회생",
      "인천지방법원 영농인 일반회생",
      "광주지방법원 농업법인 법인회생",
      "대구지방법원 영농조합법인 법인회생",
    ],
    case_bankruptcy: [],
  },
  {
    number: 9,
    title: "건설업",
    icon: <LuBuilding className="w-[30px] h-[30px]" />,
    case_revive: [
      "수원회생법원 전문/종합건설업 법인회생",
      "대구지방법원 건설기자재 제조업 법인회생",
      "대전지방법원 건설업 법인회생",
    ],
    case_bankruptcy: [],
  },
  {
    number: 10,
    title: "기타",
    icon: <PiFactory className="w-[30px] h-[30px]" />,
    case_revive: [
      "서울회생법원 대치동 학원교육업 일반회생 자문",
      "의정부지방법원 HACCP인증업체 법인회생 및 대표자 회생",
    ],
    case_bankruptcy: [
      "서울회생법원 여행업 법인파산",
      "수원회생법원 건강식품유통업 법인파산 외 전국 다수",
      "창원지방법원 철제랙 및 물류창고 제조업",
      "대구지방법원 석재채굴업 법인파산",
      "광주지방법원 태양광 발전사업 법인파산 및 대표자 파산 면책",
    ],
  },
];

const Section6 = () => {
  const [isMenu, setIsMenu] = useState("제조업");

  // 선택된 메뉴에 해당하는 데이터 찾기
  const selectedMenu = menus.find((item) => item.title === isMenu) || menus[0];

  return (
    <div className="w-full h-[1660px] sm:h-[1300px] bg-[#534F4B] flex flex-col gap-15 items-center justify-center">
      <div className="hidden sm:block text-[24px] font-semibold text-center text-white">
        <h2>10여년 도산전문 경력, 중소기업 부터 대기업까지</h2>
        <h2>
          제조업, 병원, 건설업 등 다양한 분야의{" "}
          <span className="text-[#EBDCC8]">기업회생, 파산</span> 경력을 가지고
          있습니다.
        </h2>
      </div>
      <div className="sm:hidden text-[18px] font-semibold text-center text-white">
        <h2>
          10여년 도산전문 경력,
          <br /> 중소기업 부터 대기업까지
        </h2>
        <h2 className="mt-10">
          제조업, 병원, 건설업 등 다양한 분야의 <br />
          <span className="text-[#EBDCC8]">기업회생, 파산</span> 경력을 가지고
          있습니다.
        </h2>
      </div>
      <div className="flex gap-2 w-full sm:w-[1110px] h-[110px] overflow-x-auto sm:overflow-x-hidden whitespace-nowrap">
        {menus.map((item) => (
          <div
            key={item.number}
            onClick={() => setIsMenu(item.title)}
            className={cn(
              "w-[103px] h-[103px] shrink-0 border border-white rounded-xl flex flex-col items-center justify-center gap-2 text-white cursor-pointer hover:border-2 transition-all duration-200",
              isMenu === item.title ? "bg-[#B73D24] border-0" : ""
            )}
          >
            {item.icon}
            {item.title}
          </div>
        ))}
      </div>
      <div className="w-full sm:w-[980px] h-[1000px] sm:h-[620px] flex sm:flex-row flex-col p-5 sm:p-0 gap-5">
        <div className="w-full sm:w-[480px] p-2 sm:p-10 h-full flex flex-col items-center justify-start gap-2 sm:gap-10 bg-white rounded-xl">
          <div className="text-[24px] mt-4 sm:mt-0 font-semibold">회생</div>
          <div className="w-full sm:w-[400px] h-[400px] overflow-y-auto">
            {selectedMenu.case_revive.length > 0 ? (
              selectedMenu.case_revive.map(
                (caseItem, index) =>
                  caseItem && (
                    <div
                      key={index}
                      className=" truncate p-2 text-[16px] text-gray-800 border-b border-gray-300"
                    >
                      {caseItem}
                    </div>
                  )
              )
            ) : (
              <div className="p-2 text-[16px] text-gray-500">
                회생 사례가 없습니다.
              </div>
            )}
          </div>
        </div>
        <div className="w-full sm:w-[480px] p-2 sm:p-10 h-full flex flex-col items-center justify-start gap-2 sm:gap-10 bg-white rounded-xl">
          <div className="text-[24px] mt-4 sm:mt-0 font-semibold">파산</div>
          <div className="w-full sm:w-[400px] h-[480px] overflow-y-auto">
            {selectedMenu.case_bankruptcy.length > 0 ? (
              selectedMenu.case_bankruptcy.map(
                (caseItem, index) =>
                  caseItem && (
                    <div
                      key={index}
                      className="truncate  p-2 text-[16px] text-gray-800 border-b border-gray-300"
                    >
                      {caseItem}
                    </div>
                  )
              )
            ) : (
              <div className="p-2 text-[16px] text-gray-500">
                파산 사례가 없습니다.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section6;
