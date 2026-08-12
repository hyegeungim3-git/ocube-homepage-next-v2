// 홈 히어로 슬라이드 4장 — 순서가 곧 화면 순서(첫 장이 활성).
// typewriter 는 줄바꿈(\n) 포함 원문, ariaLabel 은 읽어주기용 한 줄 문장.

export interface HomeSlide {
  media: { kind: "video"; poster: string; src: string } | { kind: "img"; src: string };
  support: string;
  typewriter: string;
  ariaLabel: string;
}

export const homeSlides: readonly HomeSlide[] = [
  {
    media: { kind: "video", poster: "assets/videos/home/ax-poster.jpg", src: "assets/videos/home/ax.mp4" },
    support: "AX, From Intelligence to Action.",
    typewriter: "We turn scattered business data into intelligence AI can act on.",
    ariaLabel: "We turn scattered business data into intelligence AI can act on.",
  },
  {
    media: { kind: "video", poster: "assets/videos/home/embedded-poster.jpg", src: "assets/videos/home/embedded.mp4" },
    support: "Embedded, Built for Reliability.",
    typewriter: "From mobility to industrial devices, we set the standard for integrated embedded solutions.",
    ariaLabel: "From mobility to industrial devices, we set the standard for integrated embedded solutions.",
  },
  {
    media: { kind: "video", poster: "assets/videos/home/si-poster.png", src: "assets/videos/home/si.mp4" },
    support: "SI, Engineered for Reliability.",
    typewriter: "We turn complex B2B and B2G work into stable systems we keep running.",
    ariaLabel: "We turn complex B2B and B2G work into stable systems we keep running.",
  },
  {
    media: { kind: "img", src: "assets/videos/home/global-tech-poster.jpg" },
    support: "Global Tech, Integrated for Production.",
    typewriter: "We match global technology to your product, from licence supply to integration and support.",
    ariaLabel: "We match global technology to your product, from licence supply to integration and support.",
  },
];
