"use client";

import { useEffect, useRef, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

import Section1 from "@/components/section1";
import Section2 from "@/components/section2";
import Section3 from "@/components/section3";
import Section4 from "@/components/section4";
import Section5 from "@/components/section5";
import Section6 from "@/components/section6";
import Section7 from "@/components/section7";
import Section8 from "@/components/section8";
import Section9 from "@/components/section9";
import Section10 from "@/components/section10";
import Section11 from "@/components/bottom";

export default function Home() {
  const sessionStartRef = useRef(null);
  // Use separate flags for clarity and correct logic flow
  const sessionEndLoggedRef = useRef(false); // Tracks if a session end log occurred
  const consultationLoggedRef = useRef(false); // Tracks if a consultation log occurred
  const hasConsultedRef = useRef(false); // Keeps track if the consult button was ever clicked in this session

  const getKSTISOString = () => {
    const now = new Date();
    const kstOffset = 9 * 60 * 60 * 1000;
    const kstDate = new Date(now.getTime() + kstOffset);
    return kstDate.toISOString().slice(0, 19);
  };

  const saveVisitorLog = async (isConsultClicked) => {
    const sessionEnd = new Date();
    const durationSec = Math.floor(
      (sessionEnd - sessionStartRef.current) / 1000
    );

    // Only save session end if duration is >= 1 second.
    // Always save consult click regardless of duration (as it's a specific action).
    if (!isConsultClicked && durationSec < 1) {
      // console.log("Duration too short for session end log.");
      return;
    }

    try {
      const res = await fetch("https://api.ipify.org?format=json");
      const ipRes = await res.json();
      // console.log("Attempting to save log...");

      // --- 추가된 부분 ---
      // document.referrer에서 이전 페이지 URL 가져오기
      const referrerUrl = document.referrer || "직접 접속"; // 이전 페이지가 없으면 null 또는 빈 문자열이 될 수 있음
      console.log("referrerUrl", referrerUrl);
      // console.log("Referrer URL:", referrerUrl);
      // --- 추가된 부분 끝 ---

      const { error } = await supabase.from("visitor_logs").insert([
        {
          ip_address: ipRes.ip,
          stay_duration: durationSec,
          consultClicked: isConsultClicked,
          created_at: getKSTISOString(),
          lawyer: "이은성 변호사",
          // --- 추가된 부분 ---
          prev_url: referrerUrl, // 새 컬럼에 이전 URL 저장
          // --- 추가된 부분 끝 ---
        },
      ]);

      if (error) console.error("❌ 저장 실패:", error);
      else
        console.log("✅ 저장 성공!", {
          isConsultClicked,
          durationSec,
          referrerUrl,
        });
    } catch (err) {
      console.error("❌ 예외 발생:", err);
    }
  };

  // Effect for handling session start and end events (beforeunload, visibilitychange)
  useEffect(() => {
    sessionStartRef.current = new Date();
    console.log("Session started");

    const handleBeforeUnload = async () => {
      const durationSec = Math.floor(
        (new Date() - sessionStartRef.current) / 1000
      );
      // Log session end only if consultation wasn't clicked AND session end wasn't already logged
      // Also ensure duration is >= 1 second for non-consult logs
      if (
        !hasConsultedRef.current &&
        !sessionEndLoggedRef.current &&
        durationSec >= 1
      ) {
        // console.log("Triggering save on beforeunload (session end)...");
        await saveVisitorLog(false); // Use await here as it's the last chance to save
        sessionEndLoggedRef.current = true;
      }
    };

    const handleVisibilityChange = () => {
      const durationSec = Math.floor(
        (new Date() - sessionStartRef.current) / 1000
      );
      // Log session end only if page becomes hidden, consultation wasn't clicked,
      // session end wasn't already logged, and duration is >= 1 second.
      if (
        document.visibilityState === "hidden" &&
        !hasConsultedRef.current &&
        !sessionEndLoggedRef.current &&
        durationSec >= 1
      ) {
        // console.log("Triggering save on visibilitychange hidden (session end)...");
        saveVisitorLog(false); // No need for await here, user might return
        sessionEndLoggedRef.current = true;
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Cleanup function
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      console.log("Cleanup: Listeners removed");
    };
  }, []); // Empty dependency array means this effect runs only once on mount

  // Effect for handling the custom consultClicked event
  useEffect(() => {
    const handleConsultClicked = () => {
      console.log("Consult clicked event received.");
      // Log consult click only if it hasn't been logged already in this session
      if (!consultationLoggedRef.current) {
        console.log("Triggering save on consultClicked...");
        hasConsultedRef.current = true; // Mark that consult was clicked
        saveVisitorLog(true); // Save as consult click
        consultationLoggedRef.current = true; // Mark consult log as done
      } else {
        console.log("Consult log already saved for this session.");
      }
    };

    window.addEventListener("consultClicked", handleConsultClicked);

    // Cleanup function
    return () => {
      window.removeEventListener("consultClicked", handleConsultClicked);
      console.log("Cleanup: consultClicked listener removed");
    };
  }, []); // Empty dependency array means this effect runs only once on mount

  return (
    <div className="w-full h-[12000px]">
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4></Section4>
      <Section5></Section5>
      <Section6></Section6>
      <Section7></Section7>
      <Section8></Section8>
      <Section9></Section9>
      <Section10></Section10>
      <Section11></Section11>
    </div>
  );
}
