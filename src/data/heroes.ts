import { localized } from "@/i18n/localize";
// 서브페이지 히어로 문구. 배지·제목·리드·핵심 포인트를 여기서 고친다.
// lead 는 토큰 배열이다: 문자열은 그대로, "br" 은 문장 구분 줄바꿈, "wbr" 은 줄바꿈 기회.
export interface HeroData {
  decor: readonly (
    { kind: "bg"; image: string } | { kind: "veil" } | { kind: "cube"; hidden: boolean }
  )[];
  id?: string;
  wrapStyle?: React.CSSProperties;
  badge: string;
  title: string;
  lead: readonly string[];
  keys: readonly { k: string; v: string }[];
}

const heroesKo: Record<string, HeroData> = {
  company: {
    id: "top",
    decor: [
      {
        kind: "bg",
        image: "assets/video/company_wire_face.jpg",
      },
      {
        kind: "veil",
      },
      {
        kind: "cube",
        hidden: false,
      },
    ],
    badge: "History",
    title: "연혁",
    lead: [
      "2007년 설립부터 현재까지, 오큐브의 사업 확장과 기술 파트너십, 주요 인증·수상 이력을 연도별로 정리했습니다.",
    ],
    keys: [
      {
        k: "설립",
        v: "2007년 3월",
      },
      {
        k: "사업",
        v: "임베디드 · SI · 산업 AI",
      },
      {
        k: "파트너",
        v: "글로벌 SW 벤더 6종",
      },
    ],
  },
  "license-protopie": {
    decor: [
      {
        kind: "bg",
        image: "assets/video/business_robot_arm.jpg",
      },
      {
        kind: "veil",
      },
    ],
    badge: "GLOBAL PARTNER · PROTOPIE",
    title: "ProtoPie — 고품질 인터랙션 프로토타이핑",
    lead: [
      "ProtoPie는 디자이너가 코딩 없이 실제 제품처럼 움직이는 화면을 만들고,",
      "br",
      " 개발 전에 사용자 흐름과 인터랙션을 검증하도록 돕는 도구입니다.",
    ],
    keys: [
      {
        k: "프로토타이핑",
        v: "코딩 없이 실제 제품처럼",
      },
      {
        k: "연동",
        v: "멀티 디바이스 · 센서 인터랙션",
      },
      {
        k: "오큐브 지원",
        v: "도입 · 교육 · 디자인시스템",
      },
    ],
    wrapStyle: {
      position: "relative",
      zIndex: "3",
    },
  },
  "license-qt": {
    decor: [
      {
        kind: "bg",
        image: "assets/video/business_robot_arm.jpg",
      },
      {
        kind: "veil",
      },
    ],
    badge: "GLOBAL PARTNER · QT",
    title: "Qt — 여러 플랫폼을 위한 소프트웨어 개발",
    lead: [
      "Qt는 하나의 코드로 데스크톱과 임베디드 장비의 애플리케이션을 만들고,",
      "br",
      " 사용자 화면(HMI)까지 함께 개발할 수 있는 프레임워크입니다.",
    ],
    keys: [
      {
        k: "프레임워크",
        v: "필수 모듈 · 프로젝트별 Add-on",
      },
      {
        k: "개발 도구",
        v: "Qt Creator · qmake · CMake",
      },
      {
        k: "오큐브 지원",
        v: "라이선스 · 컨설팅 · 교육",
      },
    ],
    wrapStyle: {
      position: "relative",
      zIndex: "3",
    },
  },
  "license-telit": {
    decor: [
      {
        kind: "bg",
        image: "assets/video/business_robot_arm.jpg",
      },
      {
        kind: "veil",
      },
    ],
    badge: "GLOBAL PARTNER · TELIT CINTERION",
    title: "Telit Cinterion — 산업용 IoT 통신 모듈",
    lead: [
      "산업 장비와 차량, 자산 추적 단말을 이동통신망에 연결하는",
      "br",
      " 장비 간 통신(M2M)·",
      "wbr",
      "사물인터넷(IoT) 모듈과 관련 서비스를 제공합니다.",
    ],
    keys: [
      {
        k: "모듈",
        v: "M2M · IoT 셀룰러 모듈",
      },
      {
        k: "측위",
        v: "GPS · GLONASS 지원",
      },
      {
        k: "오큐브 지원",
        v: "설계 검토 · 인증 · 공급",
      },
    ],
    wrapStyle: {
      position: "relative",
      zIndex: "3",
    },
  },
  "license-toradex": {
    decor: [
      {
        kind: "bg",
        image: "assets/video/business_robot_arm.jpg",
      },
      {
        kind: "veil",
      },
    ],
    badge: "GLOBAL PARTNER · TORADEX",
    title: "Toradex — 임베디드 컴퓨팅 모듈",
    lead: [
      "Toradex는 프로세서와 메모리를 담은 컴퓨터 모듈⁠(SoM)⁠과 캐리어 보드를 공급합니다.",
      "br",
      " 검증된 모듈을 활용해 제품 개발 부담과 출시 기간을 줄일 수 있습니다.",
    ],
    keys: [
      {
        k: "제품",
        v: "SoM · 캐리어 보드",
      },
      {
        k: "강점",
        v: "장기 공급 · 제품군 확장",
      },
      {
        k: "오큐브 지원",
        v: "보드 지원 패키지(BSP) 적용 · 엔지니어링 지원",
      },
    ],
    wrapStyle: {
      position: "relative",
      zIndex: "3",
    },
  },
  "license-tuxera": {
    decor: [
      {
        kind: "bg",
        image: "assets/video/business_robot_arm.jpg",
      },
      {
        kind: "veil",
      },
    ],
    badge: "GLOBAL PARTNER · TUXERA",
    title: "Tuxera — 데이터 저장·복구 솔루션",
    lead: [
      "Tuxera는 자동차, 스마트폰, 산업 장비의 데이터를 안정적으로 저장하고 복구하도록 돕는",
      "br",
      " 파일 시스템과 플래시 메모리 관리 솔루션을 제공합니다.",
    ],
    keys: [
      {
        k: "파일 시스템",
        v: "Reliance Nitro · FlashFX Tera",
      },
      {
        k: "가치",
        v: "전원 차단 내성 · 플래시 수명",
      },
      {
        k: "오큐브 지원",
        v: "포팅 · 성능 검증",
      },
    ],
    wrapStyle: {
      position: "relative",
      zIndex: "3",
    },
  },
  "license-visualon": {
    decor: [
      {
        kind: "bg",
        image: "assets/video/business_robot_arm.jpg",
      },
      {
        kind: "veil",
      },
    ],
    badge: "GLOBAL PARTNER · VISUALON",
    title: "VisualOn — 멀티미디어 재생 개발도구",
    lead: [
      "동영상 서비스(OTT), 차량 인포테인먼트(IVI), 스마트TV와 셋톱박스에서",
      "br",
      " 안정적인 영상 재생을 구현하는 개발도구(SDK)와 코덱을 공급합니다.",
    ],
    keys: [
      {
        k: "플레이어",
        v: "OnStream · ExoPlayer+ · AVPlayer+",
      },
      {
        k: "품질",
        v: "사용자 경험(UX) 모니터 · Software Codecs",
      },
      {
        k: "오큐브 지원",
        v: "단말 통합 · 최적화",
      },
    ],
    wrapStyle: {
      position: "relative",
      zIndex: "3",
    },
  },
  location: {
    id: "top",
    decor: [
      {
        kind: "bg",
        image: "assets/video/company_wire_face.jpg",
      },
      {
        kind: "veil",
      },
    ],
    badge: "Locations",
    title: "오시는 길",
    lead: [
      "서울·",
      "wbr",
      "안양·",
      "wbr",
      "대구 사옥의 주소와 연락처를 안내합니다.",
      "br",
      " 방문할 사업장의 위치와 지도를 아래에서 확인해 주세요.",
    ],
    keys: [
      {
        k: "서울",
        v: "강서구 케이엠빌딩",
      },
      {
        k: "안양",
        v: "금정역 SKV1",
      },
      {
        k: "대구",
        v: "수성구 알파시티",
      },
    ],
  },
  references: {
    id: "top",
    decor: [
      {
        kind: "cube",
        hidden: true,
      },
      {
        kind: "veil",
      },
    ],
    badge: "Use Cases",
    title: "주요 구축 사례",
    lead: [
      "제조·에너지·모빌리티·공공·금융·홈 AIoT·기업서비스 분야의 프로젝트를 정리했습니다.",
      "br",
      " 거래 유형과 발주처, 실제 적용 분야를 함께 확인할 수 있습니다.",
    ],
    keys: [
      {
        k: "분야",
        v: "제조 · 에너지 · 모빌리티 · 공공 · 금융 · 홈 AIoT · 기업서비스",
      },
      {
        k: "거래 유형",
        v: "B2B · B2G · 글로벌",
      },
    ],
  },
};

// 두 언어. 화면에서는 heroes[lang] 처럼 언어로 먼저 고른다.
// 영어는 i18n/*.json 사전에서 그리는 시점에 만들어진다 (src/i18n/localize.ts).
export const heroes = localized(heroesKo);
