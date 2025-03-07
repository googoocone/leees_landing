import { JWT } from "google-auth-library";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { NextResponse } from "next/server";

// Google Sheets 인증 설정
const serviceAccountAuth = new JWT({
  email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
  key: process.env.GOOGLE_PRIVATE_KEY,
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

console.log(
  "GOOGLE_PRIVATE_KEY length:",
  process.env.GOOGLE_PRIVATE_KEY?.length
); // 키 길이 확인
console.log(
  "GOOGLE_PRIVATE_KEY snippet:",
  process.env.GOOGLE_PRIVATE_KEY?.slice(0, 50)
); // 키 일부 출력

const spreadsheetDocId = process.env.SPREADSHEET_DOC_ID;
const doc = new GoogleSpreadsheet(spreadsheetDocId, serviceAccountAuth);

// 스프레드시트 초기화 함수
async function initializeSheet() {
  await doc.loadInfo();
  const sheet = doc.sheetsByTitle["시트1"];
  if (!sheet) {
    throw new Error("시트1을 찾을 수 없습니다.");
  } else {
    console.log("시트 1을 찾았습니다.");
  }
  await sheet.setHeaderRow(["name", "phone", "field"]);
  return sheet;
}

// POST 핸들러
export async function POST(req) {
  try {
    const { name, phone, field } = await req.json();
    const sheet = await initializeSheet();

    await sheet.addRow({
      name: name || "미입력",
      phone: phone || "미입력",
      field: field || "미선택",
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
