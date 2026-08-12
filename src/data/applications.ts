// 비즈니스 3쪽의 적용 분야 카드 — 아이콘·제목·2줄 설명.
import type { RichToken } from "@/components/rich-text";

export interface AppCard {
  cardCls: string;
  iconCls: string;
  icon: string;
  title: string;
  line1: readonly RichToken[];
  line2: readonly RichToken[];
}

export const appCards: Record<string, readonly AppCard[]> = {
  "business-ax": [
    {
      cardCls: "dep-card ax-app-card",
      iconCls: "ax-app-icon",
      icon: "assets/img/business/applications/manufacturing-white.webp",
      title: "Manufacturing",
      line1: ["생산·", "wbr", "설비·", "wbr", "품질 데이터를 AI로 분석하여"],
      line2: ["공정 최적화 및 품질 향상 자동화"],
    },
    {
      cardCls: "dep-card ax-app-card",
      iconCls: "ax-app-icon",
      icon: "assets/img/business/applications/enterprise-white.webp",
      title: "Enterprise",
      line1: ["AI Agent와 데이터 분석을 활용해 반복 업무를 자동화하고"],
      line2: ["업무 지식 활용과 의사결정 지원"],
    },
    {
      cardCls: "dep-card ax-app-card",
      iconCls: "ax-app-icon",
      icon: "assets/img/business/applications/mobility-white.webp",
      title: "Mobility",
      line1: ["차량과 교통 데이터를 활용해"],
      line2: ["안전하고 효율적인 이동과 운영 환경 지원"],
    },
    {
      cardCls: "dep-card ax-app-card",
      iconCls: "ax-app-icon",
      icon: "assets/img/business/applications/energy-white.webp",
      title: "Energy",
      line1: ["에너지 데이터를 분석하고 수요와 사용량을 최적화하여"],
      line2: ["효율적인 에너지 운영 환경 구현"],
    },
    {
      cardCls: "dep-card ax-app-card",
      iconCls: "ax-app-icon",
      icon: "assets/img/business/applications/public-white.webp",
      title: "Public",
      line1: ["공공 데이터와 AI를 활용해"],
      line2: ["민원·", "wbr", "행정·", "wbr", "고객 서비스의 업무 자동화 지원"],
    },
  ],
  "business-embedded": [
    {
      cardCls: "dep-card ax-app-card",
      iconCls: "ax-app-icon",
      icon: "assets/img/business/applications/embedded-automotive-white.webp",
      title: "Automotive",
      line1: ["차량 내 다양한 시스템과 디바이스를 위한"],
      line2: ["Embedded Software 및 차량 플랫폼 제공"],
    },
    {
      cardCls: "dep-card ax-app-card",
      iconCls: "ax-app-icon",
      icon: "assets/img/business/applications/embedded-ev-charging-white.webp",
      title: "EV & Charging",
      line1: ["전기차와 충전기의 연결·", "wbr", "제어·", "wbr", "운영을 위한"],
      line2: ["Embedded Software 제공"],
    },
    {
      cardCls: "dep-card ax-app-card",
      iconCls: "ax-app-icon",
      icon: "assets/img/business/applications/embedded-robotics-mobility-white.webp",
      title: "Robotics & Mobility",
      line1: ["로봇과 이동형 장비의 센서·", "wbr", "제어 시스템을 연결하여"],
      line2: ["안정적인 동작 및 서비스 구현 지원"],
    },
    {
      cardCls: "dep-card ax-app-card",
      iconCls: "ax-app-icon",
      icon: "assets/img/business/applications/embedded-industrial-device-white.webp",
      title: "Industrial Device",
      line1: ["산업용 장비와 디바이스에 필요한"],
      line2: ["제어·", "wbr", "통신·", "wbr", "인터페이스 소프트웨어 제공"],
    },
    {
      cardCls: "dep-card ax-app-card",
      iconCls: "ax-app-icon",
      icon: "assets/img/business/applications/embedded-iot-edge-white.webp",
      title: "IoT & Edge",
      line1: ["센서와 장비 데이터를 실시간으로 수집하고 연결하는"],
      line2: ["Edge 및 IoT 소프트웨어 제공"],
    },
  ],
  "business-si": [
    {
      cardCls: "dep-card ax-app-card",
      iconCls: "ax-app-icon",
      icon: "assets/img/business/applications/si-financial-white.webp",
      title: "Financial Services",
      line1: ["모바일 금융과 결제·", "wbr", "인증·", "wbr", "그룹 업무를 연결하여"],
      line2: ["안정적인 금융 서비스와 운영 시스템 구축"],
    },
    {
      cardCls: "dep-card ax-app-card",
      iconCls: "ax-app-icon",
      icon: "assets/img/business/applications/si-enterprise-systems-white.webp",
      title: "Enterprise Systems",
      line1: ["ERP·", "wbr", "CRM 등 사내 시스템과 업무 데이터를 연결하여"],
      line2: ["기업 포털과 업무·", "wbr", "협업 시스템 구축"],
    },
    {
      cardCls: "dep-card ax-app-card",
      iconCls: "ax-app-icon",
      icon: "assets/img/business/applications/si-public-services-white.webp",
      title: "Public Services",
      line1: ["공공 업무와 시민 서비스를 디지털로 전환하고"],
      line2: ["접근성·", "wbr", "보안 기준을 갖춘 행정 시스템 구축"],
    },
    {
      cardCls: "dep-card ax-app-card",
      iconCls: "ax-app-icon",
      icon: "assets/img/business/applications/si-energy-charging-white.webp",
      title: "Energy & Charging",
      line1: [
        "충전기·",
        "wbr",
        "회원·",
        "wbr",
        "결제·",
        "wbr",
        "정산·",
        "wbr",
        "관제 기능을 통합하여",
      ],
      line2: ["전기차 충전 및 에너지 운영 플랫폼 구축"],
    },
    {
      cardCls: "dep-card ax-app-card",
      iconCls: "ax-app-icon",
      icon: "assets/img/business/applications/si-smart-home-display-white.webp",
      title: "Smart Home & Display",
      line1: ["가전·", "wbr", "IoT와 webOS 기반 디스플레이를 연결하여"],
      line2: ["스마트홈 및 기업용 디스플레이 서비스 구축"],
    },
    {
      cardCls: "dep-card ax-app-card",
      iconCls: "ax-app-icon",
      icon: "assets/img/business/applications/si-mobility-platforms-white.webp",
      title: "Mobility Platforms",
      line1: ["차량·", "wbr", "교통·", "wbr", "위치 데이터를 서비스와 연결하여"],
      line2: ["모빌리티 관제 및 사용자 서비스 플랫폼 구축"],
    },
  ],
};

// EVCP 히어로 스탯(값 + 라벨) — 표준·연동 지표.
export const evcpStats: readonly { value: readonly RichToken[]; label: readonly RichToken[] }[] = [
  { value: ["OCPP 1.6J"], label: ["충전기 연동·", "wbr", "관제 운영 경험"] },
  { value: ["OCPP 2.0.1"], label: ["사업 요건별 기능 적용"] },
  { value: ["확장 표준"], label: ["충전 로밍 표준(OCPI) · 차량 충전 통신(ISO 15118) 연계 설계"] },
  { value: ["LTE Cat M1"], label: ["자체 통신 모듈(2025)"] },
];
