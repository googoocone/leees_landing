export default function Section2() {
  return (
    <section className="w-full  p-30 bg-[#F1F1F1] flex flex-col items-center gap-20 justify-center">
      <div className=" flex flex-col items-center justify-center text-[#534F4B] ">
        <div className="text-2xl font-semibold mb-2">
          지금 1가지라도 해당되는 부분이 있으신가요?
        </div>
        <div className="text-2xl font-semibold">
          지체 하면 <span className="text-[#B73D24]">골든 타임</span>을 놓칠 수
          있습니다.
        </div>
      </div>
      <div className="flex h-[310px] items-center justify-center gap-5">
        <div className="w-[230px] h-[240px] bg-[#EBDCC8] p-6 flex flex-col items-center justify-start">
          <div className="w-full h-[70px] flex items-center justify-start text-[60px] text-[#534F4B] font-bold">
            01
          </div>
          <div className="w-full text-justify mt-2 text-[18px]">
            회사 대출연장을 위해서 손실이 발생했지만, 회계를 이익 처리 하였다.
          </div>
        </div>
        <div className="w-[230px] h-[240px] mt-20 bg-white p-6 flex flex-col items-center justify-start">
          <div className="w-full h-[70px] flex items-center justify-start text-[60px] text-[#534F4B] font-bold">
            02
          </div>
          <div className="w-full text-justify mt-2 text-[18px]">
            개인의 자금을 회사에 넣기 시작했다.
          </div>
        </div>
        <div className="w-[230px] h-[240px] bg-[#EBDCC8] p-6 flex flex-col items-center justify-start">
          <div className="w-full h-[70px] flex items-center justify-start text-[60px] text-[#534F4B] font-bold">
            03
          </div>
          <div className="w-full text-justify mt-2 text-[18px]">
            직원들의 급여를 주기가 힘들다.
          </div>
        </div>
        <div className="w-[230px] h-[240px] mt-20 bg-white p-6 flex flex-col items-center justify-start">
          <div className="w-full h-[70px] flex items-center justify-start text-[60px] text-[#534F4B] font-bold">
            04
          </div>
          <div className="w-full text-justify mt-2 text-[18px]">
            금융기관에서 만기연장이 안되거나, 원리금 갚기가 버거워 지고 있다.
          </div>
        </div>
      </div>
      <h1 className="text-[40px] font-semibold">
        이제는 법인인회생, 파산을 고려하셔야 합니다.
      </h1>
    </section>
  );
}
