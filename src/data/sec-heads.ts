// 섹션 머리(킥커·제목·부제)의 표준형 문구 — 키는 "페이지:섹션id".
// 표준형이 아닌 섹션 머리는 각 페이지에 인라인으로 남아 있다(README 참고).
import type { RichToken } from "@/components/rich-text";

export interface SecHeadCopy {
  cls: string;
  kicker: string;
  title: readonly RichToken[];
  titleWhite?: boolean;
  titleCls?: string;
  sub?: readonly RichToken[];
  subCls?: string;
}

export const secHeads: Record<string, SecHeadCopy> = {
  "about:greeting": {
    cls: "sec-head rv",
    kicker: "CEO Greeting",
    title: ["CEO 인사말"],
    titleCls: "loc-h",
  },
  "about:value": {
    cls: "sec-head center rv",
    kicker: "Core Value",
    title: ["핵심 가치"],
  },
  "about:ci": {
    cls: "rv",
    kicker: "Corporate Identity",
    title: ["CI"],
    titleCls: "loc-h",
  },
  "business-ax:applications": {
    cls: "reveal",
    kicker: "Applications",
    title: ["적용 분야"],
    sub: ["데이터와 AI를 산업과 업무에 연결해 운영 방식의 실질적인 변화를 지원합니다."],
    subCls: "sec-sub",
  },
  "business-embedded:applications": {
    cls: "reveal",
    kicker: "Applications",
    title: ["적용 분야"],
    sub: [
      "자동차부터 산업 장비와 IoT 엣지까지, 제품 환경에 맞는 임베디드 소프트웨어를 제공합니다.",
    ],
    subCls: "sec-sub",
  },
  "business-si:applications": {
    cls: "reveal",
    kicker: "Applications",
    title: ["적용 분야"],
    sub: [
      "금융부터 기업·",
      "wbr",
      "공공·",
      "wbr",
      "에너지·",
      "wbr",
      "스마트홈·",
      "wbr",
      "모빌리티까지, 업무와 서비스를 안정적인 시스템으로 구현합니다.",
    ],
    subCls: "sec-sub",
  },
  "license-protopie:tech": {
    cls: "sec-head rv",
    kicker: "Core Technology",
    title: ["코드 없이 실제 제품에 가깝게 검증하는 핵심 기능"],
  },
  "license-protopie:industry": {
    cls: "reveal",
    kicker: "Industries",
    title: ["ProtoPie가 사용되는 산업"],
  },
  "license-qt:framework": {
    cls: "sec-head rv",
    kicker: "Qt Developer Framework",
    title: ["한 코드베이스를 여러 플랫폼으로 확장하는 모듈과 도구"],
  },
  "license-qt:tools": {
    cls: "reveal",
    kicker: "Qt Development Tools",
    title: ["개발 도구"],
  },
  "license-qt:partner": {
    cls: "reveal",
    kicker: "Partnership",
    title: ["오큐브 × The Qt Company"],
    sub: [
      "오큐브는 2010년 국내 최초로 Nokia Qt Certified Partner 자격을 취득한 The Qt Company 공식 파트너입니다.",
    ],
    subCls: "sec-sub",
  },
  "license-qt:portfolio": {
    cls: "sec-head rv",
    kicker: "Qt-based Portfolio",
    title: ["Qt 기반 개발 실적"],
  },
  "license-telit:modules": {
    cls: "sec-head rv",
    kicker: "M2M Modules & Terminals",
    title: ["다양한 셀룰러 표준을 하나의 모듈 제품군으로 지원합니다"],
  },
  "license-telit:usecase": {
    cls: "reveal",
    kicker: "Applications",
    title: ["적용 분야"],
  },
  "license-toradex:som": {
    cls: "sec-head rv",
    kicker: "What is SoM?",
    title: ["System on Module (SoM)이란?"],
  },
  "license-toradex:benefits": {
    cls: "reveal",
    kicker: "Benefits",
    title: ["System on Module 사용 시 장점"],
  },
  "license-toradex:why": {
    cls: "reveal",
    kicker: "Why Toradex",
    title: ["왜 Toradex인가"],
    sub: [
      "Toradex는 성능·엔지니어링 지원·장기 공급·제품 유지관리를 함께 고려해 개발부터 양산 이후까지 필요한 제품군과 지원 체계를 제공합니다.",
    ],
    subCls: "sec-sub",
  },
  "license-tuxera:products": {
    cls: "sec-head rv",
    kicker: "Tuxera Main Products",
    title: ["주요 제품"],
  },
  "license-tuxera:apply": {
    cls: "reveal",
    kicker: "Applications",
    title: ["적용 분야"],
  },
  "license-visualon:onstream": {
    cls: "sec-head rv",
    kicker: "Product Line",
    title: ["VisualOn 제품군"],
  },
  "license-visualon:apply": {
    cls: "reveal",
    kicker: "Applications",
    title: ["적용 분야"],
  },
  "solution-agentq:overview": {
    cls: "reveal",
    kicker: "Overview",
    title: ["한 번의 요청을 여러 전문 에이전트가 이어받아 결과물까지 완성합니다"],
    sub: [
      "업무 포털에 요청하면 필요한 전문 에이전트가 문서·지식·데이터를 이어서 처리해 반복 가능한 AI 업무 흐름을 만듭니다.",
    ],
    subCls: "sec-sub",
  },
  "solution-agentq:proof": {
    cls: "reveal",
    kicker: "Prototype Workflows",
    title: ["전문 에이전트가 역할을 나눠 결과를 완성합니다"],
    sub: [
      "프로토타입은 서로 다른 전문 기능을 순서대로 연결해 사람이 검토할 수 있는 업무 결과물을 만드는 흐름을 보여줍니다.",
    ],
    subCls: "sec-sub",
  },
  "solution-agentq:scenarios": {
    cls: "reveal",
    kicker: "Ideal Use Cases",
    title: ["이런 상황에서 효과가 큽니다"],
    sub: [
      "문서·데이터·규정이 함께 얽혀 있고, 결과물의 근거와 운영 통제가 필요한 업무에 적합합니다.",
    ],
    subCls: "sec-sub",
  },
  "solution-cubeon:overview": {
    cls: "reveal",
    kicker: "Overview",
    title: ["데이터와 AI를 조직의 실행 체계로 연결합니다"],
    titleWhite: true,
    sub: [
      "Cubeon은 데이터 연결부터 AI 모델·",
      "wbr",
      "에이전트 운영, 담당자 승인과 실행 결과 확인까지 하나의 플랫폼에서 관리합니다.",
    ],
    subCls: "sec-sub",
  },
  "solution-cubeon:fit": {
    cls: "reveal",
    kicker: "Ideal Use Cases",
    title: ["이런 조직에 적합합니다"],
    sub: [
      "분산된 데이터와 AI 서비스를 하나의 운영 기준으로 연결하고 실행까지 관리하려는 조직에 적합합니다.",
    ],
    subCls: "sec-sub",
  },
  "solution-dataq:overview": {
    cls: "reveal",
    kicker: "Overview",
    title: ["서로 다른 형식과 기준으로 쌓인 데이터를 하나로 연결합니다"],
    sub: [
      "QData는 여러 시스템과 조직에 흩어진 데이터를 연결해 분석과 AI에 활용할 수 있는 형태로 정리합니다.",
    ],
    subCls: "sec-sub",
  },
  "solution-dataq:fit": {
    cls: "reveal",
    kicker: "Ideal Use Cases",
    title: ["이런 조직에 적합합니다"],
    sub: ["데이터가 흩어져 AI 도입을 시작하기 어려운 조직에 적합합니다."],
    subCls: "sec-sub",
  },
  "solution-evcp:overview": {
    cls: "reveal",
    kicker: "Overview",
    title: ["충전 데이터를 더 안정적이고 효율적인 운영으로 연결합니다"],
    sub: [
      "EVCP는 충전기 연결부터 회원·",
      "wbr",
      "결제·",
      "wbr",
      "관제까지 통합하고 AI 분석으로 장애 대응과 에너지 운영을 지원합니다.",
    ],
    subCls: "sec-sub",
  },
  "solution-evcp:fit": {
    cls: "reveal",
    kicker: "Ideal Use Cases",
    title: ["이런 사업자에게 적합합니다"],
    sub: ["충전 사업을 새로 시작하거나 운영 범위를 넓히는 사업자에게 적합합니다."],
    subCls: "sec-sub",
  },
  "solution-factoryq:overview": {
    cls: "reveal",
    kicker: "Overview",
    title: ["설비 한 대가 아니라 공장 운영 전체를 지능화합니다"],
    sub: [
      "QFactory는 기존 설비를 유지한 채 필요한 공정의 데이터를 모아 예측 결과를 공정 조치로 연결합니다.",
    ],
    subCls: "sec-sub",
  },
  "solution-factoryq:fit": {
    cls: "reveal",
    kicker: "Ideal Use Cases",
    title: ["이런 공장에 적합합니다"],
    sub: ["알람만으로는 잡히지 않는 변화를 다뤄야 하는 공장에 적합합니다."],
    subCls: "sec-sub",
  },
  "solution-qdrive:overview": {
    cls: "reveal",
    kicker: "Overview",
    title: ["차량 운행 데이터를 더 나은 운영으로 연결합니다"],
    titleWhite: true,
    sub: ["운행·진단 데이터로 위험운전과 운영·비용·탄소 성과를 확인합니다."],
    subCls: "sec-sub",
  },
  "solution-qdrive:fit": {
    cls: "reveal",
    kicker: "Ideal Use Cases",
    title: ["이런 모빌리티 사업에 적합합니다"],
    sub: ["차량 운행·안전·에너지·탄소 정보를 통합 관리하는 조직에 적합합니다."],
    subCls: "sec-sub",
  },
  "solution-traffic:overview": {
    cls: "reveal",
    kicker: "Overview",
    title: ["기존 CCTV를 교통·", "wbr", "안전 감지 센서로 활용합니다"],
    sub: [
      "CCTV 영상으로 차종별 통행량을 분석하고, 실시간으로 포트홀과 돌발상황을 감지해 관제 시스템에 전달합니다.",
    ],
    subCls: "sec-sub",
  },
  "solution-traffic:fit": {
    cls: "reveal",
    kicker: "Ideal Use Cases",
    title: ["이런 환경에 적합합니다"],
    sub: ["이미 설치된 카메라를 더 쓰임새 있게 만들어야 하는 환경에 적합합니다."],
    subCls: "sec-sub",
  },
};
