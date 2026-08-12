// 전 페이지 푸터가 공유하는 회사 정보. 화면 문구를 바꾸려면 여기만 고친다.
export const footerLogo = {
  src: "assets/logo_korean_t.png",
  alt: "오큐브(주) | OCUBE CO.,LTD.",
  width: 672,
  height: 70,
} as const;

export const offices = [
  {
    code: "SEOUL",
    address: "서울 강서구 강서로56가길 141 KM빌딩 2·3층",
  },
  {
    code: "ANYANG",
    address: "안양 동안구 LS로 142 금정역SKV1센터 722·723·710호",
  },
  {
    code: "DAEGU",
    address: "대구광역시 수성구 알파시티1로31길 18",
  },
] as const;

export const footerColumns = [
  {
    title: "Business",
    links: [
      {
        label: "AX",
        href: "business-ax.html",
      },
      {
        label: "Embedded",
        href: "business-embedded.html",
      },
      {
        label: "SI",
        href: "business-si.html",
      },
    ],
  },
  {
    title: "Solution",
    links: [
      {
        label: "Cubeon",
        href: "solution-cubeon.html",
      },
      {
        label: "QData",
        href: "solution-dataq.html",
      },
      {
        label: "QFactory",
        href: "solution-factoryq.html",
      },
      {
        label: "AgentQ",
        href: "solution-agentq.html",
      },
      {
        label: "QDrive",
        href: "solution-qdrive.html",
      },
      {
        label: "EVCP",
        href: "solution-evcp.html",
      },
      {
        label: "QVision",
        href: "solution-traffic.html",
      },
    ],
  },
  {
    title: "Global Partners",
    links: [
      {
        label: "Qt",
        href: "license-qt.html",
      },
      {
        label: "Telit Cinterion",
        href: "license-telit.html",
      },
      {
        label: "Toradex",
        href: "license-toradex.html",
      },
      {
        label: "VisualOn",
        href: "license-visualon.html",
      },
      {
        label: "Tuxera",
        href: "license-tuxera.html",
      },
      {
        label: "ProtoPie",
        href: "license-protopie.html",
      },
    ],
  },
  {
    title: "Company",
    links: [
      {
        label: "About Ocube",
        href: "about.html",
      },
      {
        label: "History",
        href: "company.html",
      },
      {
        label: "Use Cases",
        href: "references.html",
      },
      {
        label: "Locations",
        href: "location.html",
      },
      {
        label: "Contact",
        href: "contact.html",
      },
    ],
  },
] as const;

export const legal = {
  copyright: "Copyright © OCUBE Co., Ltd. All rights reserved.",
  links: [
    {
      label: "sales@ocube.co.kr",
      href: "mailto:sales@ocube.co.kr",
    },
    {
      label: "Privacy Policy",
      href: "privacy.html",
    },
  ],
} as const;
