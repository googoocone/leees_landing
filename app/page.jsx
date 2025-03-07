"use client";

import { useEffect, useState, useRef } from "react";

import Section1 from "@/components/section1";
import Section2 from "@/components/section2";

export default function Home() {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);

  const [section2Ratio, setSection2Ratio] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const visibilityRatio = entry.intersectionRatio;

          if (entry.target === section1Ref.current) {
            entry.target.style.opacity = visibilityRatio;
            entry.target.style.transform = `translateY(${
              (1 - visibilityRatio) * 100
            }px)`;
          } else if (entry.target === section2Ref.current) {
            setSection2Ratio(visibilityRatio); // Section2에 전달
          }
        });
      },
      { threshold: Array.from({ length: 101 }, (_, i) => i / 100) }
    );

    if (section1Ref.current) observer.observe(section1Ref.current);
    if (section2Ref.current) observer.observe(section2Ref.current);

    return () => {
      if (section1Ref.current) observer.unobserve(section1Ref.current);
      if (section2Ref.current) observer.unobserve(section2Ref.current);
    };
  }, []);

  return (
    <div className="w-full h-[4000px]">
      <Section1></Section1>
      <div className="w-full" ref={section2Ref}>
        <Section2 visibilityRatio={section2Ratio} />
      </div>
    </div>
  );
}
