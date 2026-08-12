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
    media: {
      kind: "video",
      poster: "assets/videos/home/ax-poster.jpg",
      src: "assets/videos/home/ax.mp4",
    },
    support: "AX, From Intelligence to Action.",
    typewriter:
      "산업과 비즈니스 곳곳에 흩어진 데이터를,\nAI가 이해하고 판단하는 지능으로 전환합니다.",
    ariaLabel:
      "산업과 비즈니스 곳곳에 흩어진 데이터를, AI가 이해하고 판단하는 지능으로 전환합니다.",
  },
  {
    media: {
      kind: "video",
      poster: "assets/videos/home/embedded-poster.jpg",
      src: "assets/videos/home/embedded.mp4",
    },
    support: "Embedded, Built for Reliability.",
    typewriter:
      "모빌리티와 산업용 디바이스의 경계를 넘어 설계·개발 검증·보안의 통합 임베디드 솔루션의 기준을 제공합니다.",
    ariaLabel:
      "모빌리티와 산업용 디바이스의 경계를 넘어 설계·개발 검증·보안의 통합 임베디드 솔루션의 기준을 제공합니다.",
  },
  {
    media: {
      kind: "video",
      poster: "assets/videos/home/si-poster.png",
      src: "assets/videos/home/si.mp4",
    },
    support: "SI, Engineered for Reliability.",
    typewriter:
      "복잡한 B2B·B2G 업무를 안정적인 시스템으로 연결하고, 구축 이후 운영까지 책임집니다.",
    ariaLabel: "복잡한 B2B·B2G 업무를 안정적인 시스템으로 연결하고, 구축 이후 운영까지 책임집니다.",
  },
  {
    media: { kind: "img", src: "assets/videos/home/global-tech-poster.jpg" },
    support: "Global Tech, Integrated for Production.",
    typewriter:
      "글로벌 기술 솔루션을 제품 환경에 맞게 선정하고, 라이선스 공급부터 통합·엔지니어링 지원까지 책임집니다.",
    ariaLabel:
      "글로벌 기술 솔루션을 제품 환경에 맞게 선정하고, 라이선스 공급부터 통합·엔지니어링 지원까지 책임집니다.",
  },
];
