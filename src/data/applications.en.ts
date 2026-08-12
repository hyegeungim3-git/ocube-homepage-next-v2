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
      line1: ["AI analysis of production and quality data"],
      line2: ["to optimise processes and automate quality"],
    },
    {
      cardCls: "dep-card ax-app-card",
      iconCls: "ax-app-icon",
      icon: "assets/img/business/applications/enterprise-white.webp",
      title: "Enterprise",
      line1: ["AI agents automate repetitive work"],
      line2: ["and support knowledge use and decisions"],
    },
    {
      cardCls: "dep-card ax-app-card",
      iconCls: "ax-app-icon",
      icon: "assets/img/business/applications/mobility-white.webp",
      title: "Mobility",
      line1: ["Using vehicle and traffic data"],
      line2: ["to make movement and operations safer and more efficient"],
    },
    {
      cardCls: "dep-card ax-app-card",
      iconCls: "ax-app-icon",
      icon: "assets/img/business/applications/energy-white.webp",
      title: "Energy",
      line1: ["Analysing energy data and optimising demand and consumption"],
      line2: ["to run energy operations more efficiently"],
    },
    {
      cardCls: "dep-card ax-app-card",
      iconCls: "ax-app-icon",
      icon: "assets/img/business/applications/public-white.webp",
      title: "Public",
      line1: ["Using public data and AI"],
      line2: ["to automate civil, administrative and customer service work"],
    },
  ],
  "business-embedded": [
    {
      cardCls: "dep-card ax-app-card",
      iconCls: "ax-app-icon",
      icon: "assets/img/business/applications/embedded-automotive-white.webp",
      title: "Automotive",
      line1: ["For the many systems and devices inside a vehicle"],
      line2: ["embedded software and vehicle platform delivery"],
    },
    {
      cardCls: "dep-card ax-app-card",
      iconCls: "ax-app-icon",
      icon: "assets/img/business/applications/embedded-ev-charging-white.webp",
      title: "EV & Charging",
      line1: ["For connecting, controlling and operating EVs and chargers"],
      line2: ["embedded software delivery"],
    },
    {
      cardCls: "dep-card ax-app-card",
      iconCls: "ax-app-icon",
      icon: "assets/img/business/applications/embedded-robotics-mobility-white.webp",
      title: "Robotics & Mobility",
      line1: ["Connecting sensors and control systems in robots and mobile equipment"],
      line2: ["for dependable operation and service delivery"],
    },
    {
      cardCls: "dep-card ax-app-card",
      iconCls: "ax-app-icon",
      icon: "assets/img/business/applications/embedded-industrial-device-white.webp",
      title: "Industrial Device",
      line1: ["For industrial equipment and devices"],
      line2: ["control, communication and interface software"],
    },
    {
      cardCls: "dep-card ax-app-card",
      iconCls: "ax-app-icon",
      icon: "assets/img/business/applications/embedded-iot-edge-white.webp",
      title: "IoT & Edge",
      line1: ["Collecting and connecting sensor and equipment data in real time"],
      line2: ["edge and IoT software delivery"],
    },
  ],
  "business-si": [
    {
      cardCls: "dep-card ax-app-card",
      iconCls: "ax-app-icon",
      icon: "assets/img/business/applications/si-financial-white.webp",
      title: "Financial Services",
      line1: ["Mobile banking, payment and group work joined"],
      line2: ["into dependable financial services"],
    },
    {
      cardCls: "dep-card ax-app-card",
      iconCls: "ax-app-icon",
      icon: "assets/img/business/applications/si-enterprise-systems-white.webp",
      title: "Enterprise Systems",
      line1: ["ERP, CRM and business data connected"],
      line2: ["into portals and collaboration systems"],
    },
    {
      cardCls: "dep-card ax-app-card",
      iconCls: "ax-app-icon",
      icon: "assets/img/business/applications/si-public-services-white.webp",
      title: "Public Services",
      line1: ["Public services and citizen work made digital"],
      line2: ["to accessibility and security standards"],
    },
    {
      cardCls: "dep-card ax-app-card",
      iconCls: "ax-app-icon",
      icon: "assets/img/business/applications/si-energy-charging-white.webp",
      title: "Energy & Charging",
      line1: ["Integrating chargers, membership, payment, settlement and monitoring"],
      line2: ["into EV charging and energy operations platforms"],
    },
    {
      cardCls: "dep-card ax-app-card",
      iconCls: "ax-app-icon",
      icon: "assets/img/business/applications/si-smart-home-display-white.webp",
      title: "Smart Home & Display",
      line1: ["Appliances, IoT and webOS displays joined"],
      line2: ["into smart home and enterprise services"],
    },
    {
      cardCls: "dep-card ax-app-card",
      iconCls: "ax-app-icon",
      icon: "assets/img/business/applications/si-mobility-platforms-white.webp",
      title: "Mobility Platforms",
      line1: ["Connecting vehicle, traffic and location data with services"],
      line2: ["to build fleet monitoring and user service platforms"],
    },
  ],
};

// EVCP 히어로 스탯(값 + 라벨) — 표준·연동 지표.
export const evcpStats: readonly { value: readonly RichToken[]; label: readonly RichToken[] }[] = [
  { value: ["OCPP 1.6J"], label: ["Experience integrating and operating chargers"] },
  { value: ["OCPP 2.0.1"], label: ["Features fitted to each business"] },
  {
    value: ["Extension standards"],
    label: [
      "Designed to work with the roaming standard (OCPI) and vehicle-to-charger communication (ISO 15118)",
    ],
  },
  { value: ["LTE Cat M1"], label: ["Our own communication module (2025)"] },
];
