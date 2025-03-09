export default function Section1() {
  return (
    <section className="w-full">
      <video
        autoPlay
        muted
        loop
        className="mx-auto"
        preload="auto"
        poster="/landing_poster.png"
      >
        <source
          src="/landingMv_mb.mp4"
          type="video/mp4"
          media="(max-width: 768px)"
        />
        <source src="/landingMv_2.mp4" type="video/mp4" />
        브라우저가 비디오를 지원하지 않습니다.
      </video>
    </section>
  );
}
