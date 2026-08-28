import { localized } from "@/i18n/localize";
// 구축 사례 카드(.bcase-card)의 문구와 이미지.
// projectCards 키는 "페이지:섹션id" (예: "business-ax:projects").
// homeCases 는 홈 마퀴용 4건 — 원본은 무한 스크롤을 위해 같은 행을 두 번 쓰지만
// 여기서는 한 번만 적고 컴포넌트가 복제한다.
import type { RichToken } from "@/components/rich-text";

export interface BcaseItem {
  image: { src: string; alt: string; width: string; height: string };
  cat: string;
  title: readonly RichToken[];
  sum: readonly RichToken[];
  bullets: readonly (readonly RichToken[])[];
}

export interface HomeCase extends BcaseItem {
  href: string;
  ariaLabel: string;
}

const projectCardsKo: Record<string, readonly BcaseItem[]> = {
  "business-ax:projects": [
    {
      image: {
        src: "assets/img/case/factory-insight.jpg",
        alt: "Factory Insight AI 화면 예시",
        width: "900",
        height: "506",
      },
      cat: "ROBOT MANUFACTURING",
      title: ["Factory Insight AI"],
      sum: [
        "스크류 체결·",
        "wbr",
        "흡착 이동 로봇의 이상 조기감지 — 원인과 조치 방안은 대화로 확인",
      ],
      bullets: [["LSTM Autoencoder"], ["LLM Assistant"], ["LightGBM"]],
    },
    {
      image: {
        src: "assets/img/case/smart-optimizer.jpg",
        alt: "AI Smart Optimizer 화면 예시",
        width: "900",
        height: "502",
      },
      cat: "PROCESS OPTIMIZATION",
      title: ["AI Smart Optimizer"],
      sum: ["열처리 설비의 이상 감지와 열질량 추정 — 제조 조건까지 함께 권고"],
      bullets: [["XGBoost"], ["Transformer"], ["Edge Gateway"]],
    },
    {
      image: {
        src: "assets/img/case/paper-process-ai.jpg",
        alt: "제지 공정 AI 자율운영 화면 예시",
        width: "900",
        height: "506",
      },
      cat: "AUTONOMOUS OPERATION",
      title: ["제지 공정 AI-OT 자율운영"],
      sum: [
        "제지 공정의 설비·",
        "wbr",
        "에너지·",
        "wbr",
        "품질·",
        "wbr",
        "안전 상태를 하나로 연결한 자율운영 플랫폼",
      ],
      bullets: [["AI-OT"], ["Predictive Maintenance"], ["MLOps"]],
    },
  ],
  "business-embedded:projects": [
    {
      image: {
        src: "assets/img/business/steps/embedded-03-os-platform-v3.webp",
        alt: "차량 제어기 소프트웨어 업데이트 일러스트",
        width: "900",
        height: "506",
      },
      cat: "SDV / OTA UPDATE",
      title: ["현대차 유무선 업데이트 개발·", "wbr", "검증"],
      sum: ["엣지디바이스 OTA 솔루션"],
      bullets: [["DCU · CCU"], ["IVI"], ["AMP · HUD · DSM"], ["Edge Device"]],
    },
    {
      image: {
        src: "assets/img/business/steps/embedded-04-hmi-middleware-v3.webp",
        alt: "차량 화면·미들웨어 일러스트",
        width: "900",
        height: "506",
      },
      cat: "AUTOMOTIVE",
      title: ["AUTOSAR(Mobilgene) 개발"],
      sum: ["ASPICE 프로세스 준수"],
      bullets: [
        ["AAOS · Linux · QNX"],
        ["CarPlay · AndroidAuto 개발·인증"],
        ["Connectivity (Telematics · BT · WiFi)"],
      ],
    },
    {
      image: {
        src: "assets/img/business/steps/embedded-05-hil-safety-v3.webp",
        alt: "차량 사이버보안 위협 분석 일러스트",
        width: "900",
        height: "506",
      },
      cat: "CYBER SECURITY",
      title: ["Global OEM Connected Service"],
      sum: ["CSMS / TARA 대응"],
      bullets: [
        ["ISO/SAE 21434 & R155"],
        ["CSMS · TARA 산출 및 인증"],
        ["Crypto · Secure Lib · HSM 개발"],
      ],
    },
  ],
  "business-si:projects": [
    {
      image: {
        src: "assets/img/business/steps/si-04-development-integration-v3.webp",
        alt: "금융 시스템 개발·통합 일러스트",
        width: "900",
        height: "506",
      },
      cat: "FINANCIAL SERVICE",
      title: ["통합 금융 SI · 그룹 소통앱"],
      sum: ["계열 금융 앱·", "wbr", "모바일 서비스 구축과 고도화 — 다년간 운영·", "wbr", "확장"],
      bullets: [["HCE 선불카드"], ["그룹 소통앱"], ["홈페이지 고도화"]],
    },
    {
      image: {
        src: "assets/img/business/steps/si-02-architecture-ux-v3.webp",
        alt: "아키텍처·UX 설계 일러스트",
        width: "900",
        height: "506",
      },
      cat: "HOME AIoT PLATFORM",
      title: ["ThinQ 홈 AIoT · webOS · 기업용 클라우드"],
      sum: [
        "홈 AIoT 커넥티드 서비스·",
        "wbr",
        "webOS 앱·",
        "wbr",
        "기업용 클라우드 설계·",
        "wbr",
        "구축",
      ],
      bullets: [["ThinQ 앱"], ["webOS 앱"], ["Pro:Centric · SuperSign"]],
    },
    {
      image: {
        src: "assets/img/business/steps/si-06-cutover-operations-v3.webp",
        alt: "이행·운영 일러스트",
        width: "900",
        height: "506",
      },
      cat: "ENERGY INFRA",
      title: ["EV 충전 플랫폼 구축"],
      sum: ["충전기 연동·", "wbr", "관제·", "wbr", "과금 시스템을 기획부터 구축까지 일괄 수행"],
      bullets: [["충전기 연동"], ["관제 · 과금"], ["EVCP 제품화"]],
    },
  ],
};

// 홈 마퀴 — 카테고리별 대표 사례 (2026-08-26 리뷰에서 6건으로 확정).
// 제조 2 · 에너지 1 · 모빌리티 1 · 금융 1 · 홈 AIoT 1. 문구는 references 카드에서 검증된 것을 쓴다.
const homeCasesKo: readonly HomeCase[] = [
  {
    image: {
      src: "assets/home-refresh/case-robot-line.svg",
      alt: "",
      width: "480",
      height: "260",
    },
    cat: "AX · SMART MANUFACTURING",
    title: ["AI Smart Optimizer — 열처리 조건 최적화"],
    sum: ["열처리 상태를 진단해 이상을 감지하고, 제조 조건까지 함께 권고하는 제조 AI"],
    bullets: [
      ["설비 신호 실시간 수집과 이상 감지"],
      ["열질량 추정 기반 제조 조건 권고"],
      ["숙련자의 판단 기준을 데이터로 축적"],
    ],
    href: "business-ax.html",
    ariaLabel: "AI Smart Optimizer — 열처리 조건 최적화 자세히 보기",
  },
  {
    image: {
      src: "assets/home-refresh/case-paper-ai.svg",
      alt: "",
      width: "480",
      height: "260",
    },
    cat: "AX · AUTONOMOUS OPERATION",
    title: ["제지 공정 AI-OT 자율운영"],
    sum: ["설비·에너지·품질·안전 상태를 하나로 연결한 공정 자율운영 플랫폼"],
    bullets: [
      ["흩어진 공정 데이터를 하나의 기준으로 통합"],
      ["에너지 사용과 다운타임 절감"],
      ["설비 교체 시점 예측"],
    ],
    href: "business-ax.html",
    ariaLabel: "제지 공정 AI-OT 자율운영 자세히 보기",
  },
  {
    image: {
      src: "assets/home-refresh/case-ev-charging.svg",
      alt: "",
      width: "480",
      height: "260",
    },
    cat: "ENERGY · EV CHARGING",
    title: ["EV 충전 플랫폼 구축"],
    sum: ["충전기 연동부터 관제·회원·결제까지 연결한 통합 운영 플랫폼"],
    bullets: [
      ["OCPP 기반 충전기 연동"],
      ["지도 기반 실시간 관제와 장애 대응"],
      ["회원·결제·운영 시스템 통합"],
    ],
    href: "solution-evcp.html",
    ariaLabel: "EV 충전 플랫폼 구축 자세히 보기",
  },
  {
    image: {
      src: "assets/home-refresh/case-vehicle-hmi.svg",
      alt: "",
      width: "480",
      height: "260",
    },
    cat: "EMBEDDED · AUTOMOTIVE",
    title: ["차량 IVI CarPlay·", "wbr", "AndroidAuto 개발·", "wbr", "인증"],
    sum: ["유무선 CarPlay·AndroidAuto를 개발하고 인증까지 마친 차량 인포테인먼트 소프트웨어"],
    bullets: [
      ["유무선 CarPlay · AndroidAuto 개발"],
      ["완성차 규격에 맞춘 통합 검증"],
      ["인증 절차 대응과 양산 공급"],
    ],
    href: "business-embedded.html",
    ariaLabel: "차량 IVI CarPlay·AndroidAuto 개발·인증 자세히 보기",
  },
  {
    image: {
      src: "assets/home-refresh/case-finance-si.svg",
      alt: "",
      width: "480",
      height: "260",
    },
    cat: "SI · FINANCIAL SERVICE",
    title: ["통합 금융 SI · 그룹 소통앱"],
    sum: ["모바일 선불카드부터 계열 8개사 소통앱까지, 다년간 함께한 금융 그룹 SI"],
    bullets: [
      ["계열사 금융 앱·모바일 서비스 구축"],
      ["그룹 소통앱 운영과 고도화"],
      ["다년간 운영·확장 대응"],
    ],
    href: "business-si.html",
    ariaLabel: "통합 금융 SI · 그룹 소통앱 자세히 보기",
  },
  {
    image: {
      src: "assets/home-refresh/case-thinq-webos.svg",
      alt: "",
      width: "480",
      height: "260",
    },
    cat: "SI · HOME AIoT",
    title: ["ThinQ 홈 AIoT · webOS · 기업용 클라우드"],
    sum: ["다양한 디바이스와 서비스를 하나의 경험으로 연결한 글로벌 플랫폼"],
    bullets: [
      ["사용자·관리자·업무 시스템 통합 구축"],
      ["다국가·다기기 운영 환경 대응"],
      ["안정적인 B2B 서비스 아키텍처"],
    ],
    href: "business-si.html",
    ariaLabel: "ThinQ 홈 AIoT · webOS · 기업용 클라우드 자세히 보기",
  },
];

// 두 언어. 화면에서는 projectCards[lang] 처럼 언어로 먼저 고른다.
// 영어는 i18n/*.json 사전에서 그리는 시점에 만들어진다 (src/i18n/localize.ts).
export const projectCards = localized(projectCardsKo);
export const homeCases = localized(homeCasesKo);
