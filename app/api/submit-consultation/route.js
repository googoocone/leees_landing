import { JWT } from "google-auth-library";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { NextResponse } from "next/server";

// Google Sheets 인증 설정
const serviceAccountAuth = new JWT({
  email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
  key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"), // 개행 문자 처리
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const spreadsheetDocId = process.env.SPREADSHEET_DOC_ID;
const doc = new GoogleSpreadsheet(spreadsheetDocId, serviceAccountAuth);

// 스프레드시트 초기화 함수
async function initializeSheet() {
  await doc.loadInfo();

  const sheet = doc.sheetsByTitle["랜딩 문의 건"];

  if (!sheet) {
    throw new Error("구글 시트를 찾을 수 없습니다.");
  } else {
    console.log("구글 시트를 찾았습니다.");
  }
  await sheet.setHeaderRow(["datetime", "name", "phone", "field", "from"]);
  return sheet;
}

// 한국 시간 변환 함수 (24시간 형식 적용)
function getKoreanDateTime() {
  const now = new Date();
  const options = {
    timeZone: "Asia/Seoul",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hourCycle: "h23", // 24시간 형식 유지
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };

  return new Intl.DateTimeFormat("ko-KR", options)
    .format(now)
    .replace(/\.\s/g, "-") // yyyy-MM-dd 형태로 변환
    .replace(",", ""); // 불필요한 콤마 제거
}

// POST 핸들러
export async function POST(req) {
  try {
    const { name, phone, field } = await req.json();
    const sheet = await initializeSheet();
    const lawyer = "이은성변호사";

    // 현재 한국 시간 가져오기 (24시간 형식)
    const datetime = getKoreanDateTime(); // '2025-03-11 10:49:22' 형태

    await sheet.addRow({
      datetime,
      name: name || "미입력",
      phone: phone || "미입력",
      field: field || "미선택",
      from: lawyer,
    });

    return NextResponse.json(
      { message: "상담 신청이 완료되었습니다." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { message: "상담 신청 중 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
