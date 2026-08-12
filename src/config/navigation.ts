// GNB 메뉴 구성. 메뉴 이름·순서·설명을 바꾸려면 여기만 고친다.
export interface NavLink {
  label: string;
  href: string;
  description: string;
}

export interface NavItem {
  label: string;
  links: readonly NavLink[];
}

export const headerNavigation: readonly NavItem[] = [
  {
    label: "Business",
    links: [
      {
        label: "AX",
        href: "business-ax.html",
        description: "데이터·AI로 업무와 운영 방식 개선",
      },
      {
        label: "Embedded",
        href: "business-embedded.html",
        description: "차량·산업 장비용 소프트웨어",
      },
      {
        label: "SI",
        href: "business-si.html",
        description: "기업·공공 업무 시스템 구축·운영",
      },
    ],
  },
  {
    label: "Solution",
    links: [
      {
        label: "Cubeon",
        href: "solution-cubeon.html",
        description: "AI 판단을 승인과 실행으로 연결",
      },
      {
        label: "QData",
        href: "solution-dataq.html",
        description: "AI가 쓸 수 있는 데이터 구축",
      },
      {
        label: "QFactory",
        href: "solution-factoryq.html",
        description: "공장 데이터 분석·예측·최적화",
      },
      {
        label: "AgentQ",
        href: "solution-agentq.html",
        description: "사내 데이터 조회·업무 자동화",
      },
      {
        label: "QDrive",
        href: "solution-qdrive.html",
        description: "AI 기반 모빌리티 운영 최적화",
      },
      {
        label: "EVCP",
        href: "solution-evcp.html",
        description: "AI 기반 충전 운영·수요 최적화",
      },
      {
        label: "QVision",
        href: "solution-traffic.html",
        description: "AI 기반 교통·안전 영상 분석",
      },
    ],
  },
  {
    label: "Global Partners",
    links: [
      {
        label: "Qt",
        href: "license-qt.html",
        description: "여러 기기에서 쓰는 앱·화면 개발",
      },
      {
        label: "Telit Cinterion",
        href: "license-telit.html",
        description: "산업·차량용 이동통신 모듈",
      },
      {
        label: "Toradex",
        href: "license-toradex.html",
        description: "산업용 컴퓨터 모듈·보드",
      },
      {
        label: "VisualOn",
        href: "license-visualon.html",
        description: "동영상 재생 소프트웨어",
      },
      {
        label: "Tuxera",
        href: "license-tuxera.html",
        description: "안정적인 파일 저장·복구",
      },
      {
        label: "ProtoPie",
        href: "license-protopie.html",
        description: "코딩 없는 UI·UX 시제품 제작",
      },
    ],
  },
  {
    label: "Company",
    links: [
      {
        label: "About Ocube",
        href: "about.html",
        description: "회사 소개·비전·기업 아이덴티티",
      },
      {
        label: "History",
        href: "company.html#history",
        description: "설립 이후 주요 연혁",
      },
      {
        label: "Use Cases",
        href: "references.html",
        description: "산업별 주요 구축 사례",
      },
      {
        label: "Locations",
        href: "location.html",
        description: "서울·안양·대구 사업장",
      },
    ],
  },
];

// 영어 화면용 메뉴. 항목·순서는 같고 설명 문구만 영어다.
export const headerNavigationEn: readonly NavItem[] = [
  {
    label: "Business",
    links: [
      {
        label: "AX",
        href: "business-ax.html",
        description: "Improving how work and operations run, with data and AI",
      },
      {
        label: "Embedded",
        href: "business-embedded.html",
        description: "Software for vehicles and industrial equipment",
      },
      {
        label: "SI",
        href: "business-si.html",
        description: "Building and running enterprise and public sector systems",
      },
    ],
  },
  {
    label: "Solution",
    links: [
      {
        label: "Cubeon",
        href: "solution-cubeon.html",
        description: "Turning AI judgement into approval and action",
      },
      {
        label: "QData",
        href: "solution-dataq.html",
        description: "Preparing data that AI can actually use",
      },
      {
        label: "QFactory",
        href: "solution-factoryq.html",
        description: "Analysing, predicting and optimising plant data",
      },
      {
        label: "AgentQ",
        href: "solution-agentq.html",
        description: "Querying internal data and automating routine work",
      },
      {
        label: "QDrive",
        href: "solution-qdrive.html",
        description: "AI-driven optimisation of fleet operations",
      },
      {
        label: "EVCP",
        href: "solution-evcp.html",
        description: "AI-driven EV charging operations and demand planning",
      },
      {
        label: "QVision",
        href: "solution-traffic.html",
        description: "AI video analysis for traffic and safety",
      },
    ],
  },
  {
    label: "Global Partners",
    links: [
      {
        label: "Qt",
        href: "license-qt.html",
        description: "Building apps and interfaces across devices",
      },
      {
        label: "Telit Cinterion",
        href: "license-telit.html",
        description: "Cellular modules for industrial and automotive use",
      },
      {
        label: "Toradex",
        href: "license-toradex.html",
        description: "Industrial computer modules and boards",
      },
      {
        label: "VisualOn",
        href: "license-visualon.html",
        description: "Video playback software",
      },
      {
        label: "Tuxera",
        href: "license-tuxera.html",
        description: "Reliable file storage and recovery",
      },
      {
        label: "ProtoPie",
        href: "license-protopie.html",
        description: "UI and UX prototyping without code",
      },
    ],
  },
  {
    label: "Company",
    links: [
      {
        label: "About Ocube",
        href: "about.html",
        description: "Who we are, our vision and identity",
      },
      {
        label: "History",
        href: "company.html#history",
        description: "Milestones since our founding in 2007",
      },
      {
        label: "Use Cases",
        href: "references.html",
        description: "Selected projects by industry",
      },
      {
        label: "Locations",
        href: "location.html",
        description: "Seoul, Anyang and Daegu offices",
      },
    ],
  },
];
