// app/api/submit-email/route.ts
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { name, phone, field } = await req.json();

  const transporter = nodemailer.createTransport({
    service: "naver",
    host: process.env.SMTP_HOST, // 예: smtp.gmail.com
    port: 465, // 예: 465 또는 587
    // secure: process.env.SMTP_SECURE, // true면 465 포트 사용
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
    // tls: {
    //   rejectUnauthorized: false, // 보안상의 이유로 임시로 사용, production에서는 주의
    // },
  });

  const mailOptions = {
    from: process.env.SMTP_USER,
    to: process.env.ALERT_EMAIL, // 알림 받을 이메일 주소
    subject: "새로운 상담 신청 알림",
    text: `새로운 상담 신청이 접수되었습니다.
    
    이름: ${name}
    연락처: ${phone}
    상담 분야: ${field}
    변호사 : 이은성 변호사님
    `,
  };
  const mailOptions2 = {
    from: process.env.SMTP_USER,
    to: process.env.ALERT_EMAIL_SECOND, // 알림 받을 이메일 주소
    subject: "새로운 상담 신청 알림",
    text: `새로운 상담 신청이 접수되었습니다.
    
    이름: ${name}
    연락처: ${phone}
    상담 분야: ${field}
    변호사 : 이은성 변호사님
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    await transporter.sendMail(mailOptions2);
    console.log("이메일 전송 완료", process.env.ALERT_EMAIL);
    return new Response(
      JSON.stringify({
        message: "상담 신청이 완료되었습니다. 확인 메일을 발송했습니다.",
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("메일 전송 에러:", error);
    return new Response(
      JSON.stringify({ message: "메일 전송 중 오류가 발생했습니다." }),
      { status: 500 }
    );
  }
}
