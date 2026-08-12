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

export const projectCards: Record<string, readonly BcaseItem[]> = {
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
        "Early fault detection on screw-fastening and pick-and-place robots — cause and remedy explored in conversation",
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
      sum: [
        "Anomaly detection and thermal mass estimation for heat-treatment equipment — with recommended process settings",
      ],
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
      title: ["Autonomous operation of a paper mill with AI-OT"],
      sum: [
        "An autonomous operations platform joining equipment, energy, quality and safety across the paper process",
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
      title: ["Hyundai wired and wireless updates"],
      sum: ["Edge device OTA solution"],
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
      title: ["AUTOSAR development with Mobilgene"],
      sum: ["ASPICE process compliance"],
      bullets: [
        ["AAOS · Linux · QNX"],
        ["CarPlay and Android Auto development and certification"],
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
      sum: ["CSMS and TARA compliance"],
      bullets: [
        ["ISO/SAE 21434 & R155"],
        ["CSMS and TARA deliverables and certification"],
        ["Crypto, Secure Lib and HSM development"],
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
      title: ["Integrated financial SI · Group communication app"],
      sum: [
        "Building and improving the group’s banking apps and mobile services — operated and extended over several years",
      ],
      bullets: [["HCE prepaid card"], ["Group communication app"], ["Website improvement"]],
    },
    {
      image: {
        src: "assets/img/business/steps/si-02-architecture-ux-v3.webp",
        alt: "아키텍처·UX 설계 일러스트",
        width: "900",
        height: "506",
      },
      cat: "HOME AIoT PLATFORM",
      title: ["ThinQ home AIoT · webOS · enterprise cloud"],
      sum: ["Home AIoT connected services, webOS apps and enterprise cloud — designed and built"],
      bullets: [["ThinQ app"], ["webOS app"], ["Pro:Centric · SuperSign"]],
    },
    {
      image: {
        src: "assets/img/business/steps/si-06-cutover-operations-v3.webp",
        alt: "이행·운영 일러스트",
        width: "900",
        height: "506",
      },
      cat: "ENERGY INFRA",
      title: ["EV charging platform"],
      sum: ["Charger integration, monitoring and billing — from planning through to delivery"],
      bullets: [["Charger integration"], ["Monitoring and billing"], ["Taking EVCP to product"]],
    },
  ],
};

export const homeCases: readonly HomeCase[] = [
  {
    image: {
      src: "assets/home-refresh/case-robot-line.svg",
      alt: "",
      width: "480",
      height: "260",
    },
    cat: "AX · SMART MANUFACTURING",
    title: ["Factory Insight AI — spotting assembly line faults early"],
    sum: ["A manufacturing AI system that catches equipment anomalies the moment they appear"],
    bullets: [
      ["Robot and equipment time-series data, brought together"],
      ["Early detection of warning signs, and tracing back to the cause"],
      ["Linked into the work flow and alarm screens"],
    ],
    href: "business-ax.html",
    ariaLabel: "Factory Insight AI — 조립 라인 이상 조기감지 자세히 보기",
  },
  {
    image: {
      src: "assets/home-refresh/case-vehicle-hmi.svg",
      alt: "",
      width: "480",
      height: "260",
    },
    cat: "EMBEDDED · AUTOMOTIVE",
    title: ["Vehicle HMI and middleware for a global OEM"],
    sum: [
      "HMI software tuned for the vehicle environment, developed and verified for mass production",
    ],
    bullets: [
      ["In-vehicle UI built on Qt and QML"],
      ["Linux, QNX and Android Automotive (AAOS) platforms applied and verified"],
      ["Testing and verification to mass-production quality standards"],
    ],
    href: "business-embedded.html",
    ariaLabel: "Global OEM 차량 화면·미들웨어 개발 자세히 보기",
  },
  {
    image: {
      src: "assets/home-refresh/case-thinq-webos.svg",
      alt: "",
      width: "480",
      height: "260",
    },
    cat: "SI · CONNECTED SERVICE",
    title: ["ThinQ home AIoT · webOS · enterprise cloud"],
    sum: ["A global platform that joins many devices and services into one experience"],
    bullets: [
      ["User, admin and back-office systems built as one"],
      ["Runs across multiple countries and device types"],
      ["A B2B service architecture that stays up"],
    ],
    href: "business-si.html",
    ariaLabel: "ThinQ 홈 AIoT · webOS · 기업용 클라우드 자세히 보기",
  },
  {
    image: {
      src: "assets/home-refresh/case-ev-charging.svg",
      alt: "",
      width: "480",
      height: "260",
    },
    cat: "ENERGY · EV CHARGING",
    title: ["EV charging platform"],
    sum: [
      "One operating platform, from charger integration through monitoring, membership and payment",
    ],
    bullets: [
      ["Charger integration over OCPP"],
      ["Live monitoring on a map, with fault response"],
      ["Membership, payment and operations in one system"],
    ],
    href: "solution-evcp.html",
    ariaLabel: "EV 충전 플랫폼 구축 자세히 보기",
  },
];
