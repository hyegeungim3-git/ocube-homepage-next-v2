import { localized } from "@/i18n/localize";
// 푸터 CTA 밴드의 페이지별 문구 — 템플릿(배지·버튼 위치)은 FctaTop 컴포넌트가 가진다.
import type { RichToken } from "@/components/rich-text";

export interface CtaCopy {
  kicker: string;
  heading: readonly RichToken[];
  lead: readonly RichToken[];
  button: string;
  badgeLabel: string;
}

const ctaCopyKo: Record<string, CtaCopy> = {
  "business-ax": {
    kicker: "CONTACT",
    heading: ["AI 적용 과제와 데이터 준비 상태부터 진단합니다"],
    lead: [
      "업무 목표와 보유 데이터를 바탕으로 우선 적용할 과제와 검증 방법, 시스템 연동 범위를 함께 구체화합니다.",
    ],
    button: "문의하기",
    badgeLabel: "문의하기",
  },
  "business-embedded": {
    kicker: "CONTACT",
    heading: ["제품 개발부터 양산까지 기술을 함께 검토합니다"],
    lead: [
      "개발 환경과 주요 기능, 보안 요구사항에 맞춰 소프트웨어 개발부터 검증과 양산까지 필요한 기술을 제공합니다.",
    ],
    button: "문의하기",
    badgeLabel: "문의하기",
  },
  "business-si": {
    kicker: "CONTACT",
    heading: ["업무에 필요한 시스템과 구축 범위를 함께 정리합니다"],
    lead: [
      "대상 업무와 사용자, 연동할 시스템과 일정을 바탕으로 구축부터 운영까지 필요한 시스템과 프로세스를 함께 만듭니다.",
    ],
    button: "문의하기",
    badgeLabel: "문의하기",
  },
  "license-protopie": {
    kicker: "CONTACT",
    heading: ["아이디어를 제품처럼 검증할 환경을 함께 만듭니다"],
    lead: [
      "라이선스 도입부터 팀 교육과 기술지원, 디자인 시스템 연계까지 효율적인 프로토타이핑 환경을 구축합니다.",
    ],
    button: "도입 상담하기",
    badgeLabel: "문의하기",
  },
  "license-qt": {
    kicker: "CONTACT",
    heading: ["Qt로 구현할 제품 화면을 함께 논의합니다"],
    lead: [
      "라이선스 도입부터 운영체제 포팅과 HMI 개발, 개발자 교육까지 Qt 기반 제품 개발을 지원합니다.",
    ],
    button: "Qt 상담하기",
    badgeLabel: "문의하기",
  },
  "license-telit": {
    kicker: "CONTACT",
    heading: ["제품을 연결할 통신 환경을 함께 설계합니다"],
    lead: [
      "제품과 통신 환경에 맞는 모듈을 선정하고, 안테나 구성부터 통신사 인증까지 상용화에 필요한 과정을 지원합니다.",
    ],
    button: "모듈 도입 상담하기",
    badgeLabel: "문의하기",
  },
  "license-toradex": {
    kicker: "CONTACT",
    heading: ["임베디드 제품의 개발 기간을 함께 줄입니다"],
    lead: [
      "제품 성능과 양산 조건에 맞는 시스템 온 모듈을 선정하고, 캐리어 보드와 운영체제 적용까지 지원합니다.",
    ],
    button: "SoM 도입 상담하기",
    badgeLabel: "문의하기",
  },
  "license-tuxera": {
    kicker: "CONTACT",
    heading: ["데이터를 안전하게 저장할 방법을 함께 설계합니다"],
    lead: [
      "운영체제와 저장장치에 맞는 파일 시스템을 적용하고, 전원 중단 상황과 읽기·",
      "wbr",
      "쓰기 성능을 검증합니다.",
    ],
    button: "제품 도입 상담하기",
    badgeLabel: "문의하기",
  },
  "license-visualon": {
    kicker: "CONTACT",
    heading: ["어떤 환경에서도 안정적인 재생 품질을 함께 만듭니다"],
    lead: [
      "지원할 미디어 형식과 단말 환경에 맞춰 SDK와 코덱을 적용하고, 재생 품질과 성능을 개선합니다.",
    ],
    button: "제품 도입 상담하기",
    badgeLabel: "문의하기",
  },
  "solution-agentq": {
    kicker: "CONTACT",
    heading: ["반복 업무 중 어디부터 자동화할지 함께 고민합니다"],
    lead: [
      "현재 업무 흐름과 데이터, 사용 중인 시스템을 바탕으로 AI Agent를 적용할 업무와 검증 방법을 함께 정리합니다.",
    ],
    button: "문의하기",
    badgeLabel: "문의하기",
  },
  "solution-cubeon": {
    kicker: "CONTACT",
    heading: ["현장에서 활용할 AI 운영 방식을 함께 설계합니다"],
    lead: [
      "이상 탐지와 알림부터 담당자의 확인과 실행, 검증된 업무의 자동화까지 현장에 맞춰 단계적으로 적용합니다.",
    ],
    button: "문의하기",
    badgeLabel: "문의하기",
  },
  "solution-dataq": {
    kicker: "CONTACT",
    heading: ["흩어진 데이터를 연결할 방법을 함께 찾습니다"],
    lead: [
      "현장과 업무 시스템의 데이터를 통합하고 표준화해 분석과 AI에 활용할 수 있는 기반을 구축합니다.",
    ],
    button: "문의하기",
    badgeLabel: "문의하기",
  },
  "solution-evcp": {
    kicker: "CONTACT",
    heading: ["충전 서비스에 필요한 플랫폼 구성을 함께 설계합니다"],
    lead: [
      "사업 규모와 운영 방식, 기존 충전 인프라에 맞춰 충전 서비스의 구축과 시스템 연동을 지원합니다.",
    ],
    button: "문의하기",
    badgeLabel: "문의하기",
  },
  "solution-factoryq": {
    kicker: "CONTACT",
    heading: ["현장 데이터로 개선할 공정 과제를 함께 찾습니다"],
    lead: [
      "보유한 데이터와 개선 목표를 바탕으로 이상 탐지와 품질·",
      "wbr",
      "공정 개선 가능성을 검증하고 적용 범위를 함께 정합니다.",
    ],
    button: "문의하기",
    badgeLabel: "문의하기",
  },
  "solution-qdrive": {
    kicker: "CONTACT",
    heading: ["차량 데이터로 모빌리티 운영 과제를 함께 개선합니다"],
    lead: [
      "차량의 운행과 상태 데이터를 바탕으로 안전운전과 운영비·",
      "wbr",
      "탄소 관리에 필요한 기능을 단계적으로 적용합니다.",
    ],
    button: "문의하기",
    badgeLabel: "문의하기",
  },
  "solution-traffic": {
    kicker: "CONTACT",
    heading: ["영상으로 확인할 위험과 운영 기준을 함께 정의합니다"],
    lead: [
      "도로와 시설의 영상 환경에 맞춰 감지 대상과 알림 방법, 관제 시스템 연동 범위를 함께 설계합니다.",
    ],
    button: "문의하기",
    badgeLabel: "문의하기",
  },
};

// 두 언어. 화면에서는 ctaCopy[lang] 처럼 언어로 먼저 고른다.
// 영어는 i18n/*.json 사전에서 그리는 시점에 만들어진다 (src/i18n/localize.ts).
export const ctaCopy = localized(ctaCopyKo);
