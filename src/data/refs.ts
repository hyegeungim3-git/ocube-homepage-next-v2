import { localized } from "@/i18n/localize";
// 주요 구축 사례 카드(.ref-card) — references 페이지.
// cls 는 리빌 스태거까지 포함한 원본 클래스 그대로(공식이 아니라 실측값이다 — 계산하지 말 것).
import type { RichToken } from "@/components/rich-text";

export interface RefCard {
  cls: string;
  cat: string;
  badgeCls: string;
  badge: string;
  title: readonly RichToken[];
  client: string;
  sector: string;
  desc: readonly RichToken[];
  note?: string;
}

// 카드 메타 표의 행 이름 — 데이터에 두어 영어판 생성이 함께 따라온다
const refMetaLabelsKo = { client: "발주처", sector: "분야" };

const refCardsKo: readonly RefCard[] = [
  {
    cls: "ref-card rv",
    cat: "mfg",
    badgeCls: "t-b2b",
    badge: "B2B",
    title: ["Factory Insight AI — 조립 라인 이상 조기감지"],
    client: "SL",
    sector: "제조",
    desc: ["체결 신호를 실시간으로 읽어, 후공정에서야 드러나던 불량을 발생 시점에 잡습니다."],
  },
  {
    cls: "ref-card rv d1",
    cat: "mfg",
    badgeCls: "t-b2b",
    badge: "B2B",
    title: ["AI Smart Optimizer — 열처리 조건 최적화"],
    client: "하이박",
    sector: "제조",
    desc: ["열처리 상태를 진단해 이상을 감지하고, 숙련자의 판단 기준을 데이터로 남깁니다."],
    note: "(과제 진행 중)",
  },
  {
    cls: "ref-card rv d2",
    cat: "mfg",
    badgeCls: "t-b2b",
    badge: "B2B",
    title: ["제지 공정 AI-OT 자율운영"],
    client: "비공개",
    sector: "제조",
    desc: ["흩어진 공정 데이터를 하나로 모아 에너지를 줄이고, 설비 교체 시점을 예측합니다."],
    note: "(과제 진행 중)",
  },
  {
    cls: "ref-card rv",
    cat: "mfg",
    badgeCls: "t-b2b",
    badge: "B2B",
    title: ["자재 조회 AI 에이전트"],
    client: "LG전자",
    sector: "제조",
    desc: ["여러 시스템에 흩어진 자재 정보를 대화 한 번으로 찾도록 통합했습니다."],
  },
  {
    cls: "ref-card rv d1",
    cat: "mfg",
    badgeCls: "t-b2b",
    badge: "B2B",
    title: ["AI Vision 조립라인 불량 검출"],
    client: "LG전자",
    sector: "제조",
    desc: ["엣지 디바이스에서 AI Vision으로 조립라인의 제품별 불량을 검출합니다."],
  },
  {
    cls: "ref-card rv d2",
    cat: "mfg",
    badgeCls: "t-b2b",
    badge: "B2B",
    title: ["PLC 개발·", "wbr", "검증 · AI 검증 자동화"],
    client: "LS ELECTRIC",
    sector: "제조",
    desc: ["PLC 기능을 개발하고 검증했으며, AI 기반 검증 자동화 솔루션을 구축했습니다."],
  },
  {
    cls: "ref-card rv d1",
    cat: "mobility",
    badgeCls: "t-global",
    badge: "글로벌",
    title: ["현대차 CCU·", "wbr", "IVI·", "wbr", "AMP·", "wbr", "HUD 무선 업데이트"],
    client: "현대자동차",
    sector: "모빌리티",
    desc: ["제어기 네 종에 무선(OTA)·", "wbr", "USB 업데이트 기능을 개발하고 검증했습니다."],
  },
  {
    cls: "ref-card rv d2",
    cat: "mobility",
    badgeCls: "t-global",
    badge: "글로벌",
    title: ["Global OEM 차량 화면·", "wbr", "미들웨어 개발"],
    client: "글로벌 완성차 OEM",
    sector: "모빌리티",
    desc: ["완성차 규격에 맞춰 차량 화면과 미들웨어 기능을 개발했습니다."],
  },
  {
    cls: "ref-card rv",
    cat: "mobility",
    badgeCls: "t-global",
    badge: "글로벌",
    title: ["Toyota CCS·", "wbr", "TSP 사이버보안 산출"],
    client: "Toyota",
    sector: "모빌리티",
    desc: [
      "커넥티드 서비스와 텔레매틱스 플랫폼의 위협을 분석하고 보안 관리 체계 산출물을 작성했습니다.",
    ],
  },
  {
    cls: "ref-card rv d1",
    cat: "mobility",
    badgeCls: "t-b2b",
    badge: "B2B",
    title: ["차량 인포테인먼트(AVN)·클러스터 SW 양산"],
    client: "국내 완성차·부품사",
    sector: "모빌리티",
    desc: ["인포테인먼트와 계기판 소프트웨어를 다년간 양산 공급했습니다."],
  },
  {
    cls: "ref-card rv d2",
    cat: "mobility",
    badgeCls: "t-global",
    badge: "글로벌",
    title: ["차량 IVI CarPlay·", "wbr", "AndroidAuto 개발·", "wbr", "인증"],
    client: "글로벌 완성차 OEM",
    sector: "모빌리티",
    desc: [
      "유무선 CarPlay·",
      "wbr",
      "AndroidAuto를 다수 개발하고 인증했으며, 클러스터 CarPlay Ultra도 개발했습니다.",
    ],
  },
  {
    cls: "ref-card rv",
    cat: "mobility",
    badgeCls: "t-b2b",
    badge: "B2B",
    title: ["차량 제어기 기능 개발·", "wbr", "솔루션 공급"],
    client: "자동차 부품사(Tier 2)",
    sector: "모빌리티",
    desc: [
      "(H)OTA 리프로그래밍과 UDS·",
      "wbr",
      "CAN 진단 통신을 포함해 차량 제어기 기능을 개발하고 솔루션을 공급했습니다.",
    ],
  },
  {
    cls: "ref-card rv d1",
    cat: "mobility",
    badgeCls: "t-global",
    badge: "글로벌",
    title: ["MCU Secure Lib·", "wbr", "Crypto 개발"],
    client: "TATA 대우",
    sector: "모빌리티",
    desc: ["차량 제어기 MCU에 보안 라이브러리와 암호 기능을 개발했습니다."],
  },
  {
    cls: "ref-card rv d2",
    cat: "energy",
    badgeCls: "t-b2b",
    badge: "B2B",
    title: ["EV 충전 플랫폼 구축"],
    client: "SK에너지",
    sector: "에너지",
    desc: [
      "충전기 연동부터 지도 관제, 회원·",
      "wbr",
      "결제까지 하나로 구축했습니다. 그 경험은 자체 제품 EVCP에 담았습니다.",
    ],
  },
  {
    cls: "ref-card rv",
    cat: "energy",
    badgeCls: "t-global",
    badge: "글로벌",
    title: ["EV 충전기 앱 (북미·유럽향)"],
    client: "LG전자",
    sector: "에너지",
    desc: [
      "급속·",
      "wbr",
      "완속 충전기용 사용자·",
      "wbr",
      "엔지니어 앱을 여러 나라에 맞춰 공급했습니다.",
    ],
  },
  {
    cls: "ref-card rv d1",
    cat: "mobility",
    badgeCls: "t-b2g",
    badge: "B2G",
    title: ["클라우드 인포테인먼트 관제"],
    client: "지역혁신클러스터",
    sector: "모빌리티",
    desc: ["클라우드 관제 플랫폼을 파트너와 함께 개발해 대구에서 실증했습니다."],
    note: "(FIX 2025 전시)",
  },
  {
    cls: "ref-card rv",
    cat: "fin",
    badgeCls: "t-b2b",
    badge: "B2B",
    title: ["통합 금융 SI · 그룹 소통앱"],
    client: "DGB금융그룹",
    sector: "금융",
    desc: ["모바일 선불카드와 계열 8개사 소통앱까지, 다년간 금융 그룹의 SI 파트너로 함께했습니다."],
  },
  {
    cls: "ref-card rv d1",
    cat: "home",
    badgeCls: "t-b2b",
    badge: "B2B",
    title: ["ThinQ 홈 AIoT · webOS · 기업용 클라우드"],
    client: "LG전자",
    sector: "홈 AIoT",
    desc: ["ThinQ 앱과 webOS 앱, 기업용 클라우드를 다년간 연간협력사로 공급했습니다."],
  },
  {
    cls: "ref-card rv d2",
    cat: "home",
    badgeCls: "t-b2b",
    badge: "B2B",
    title: ["Home-IoT · Matter 개발·", "wbr", "인증"],
    client: "현대HT",
    sector: "홈 AIoT",
    desc: ["Home-IoT와 Matter 프로토콜, 기기 연결과 센서를 개발하고 인증했습니다."],
  },
  {
    cls: "ref-card rv d2",
    cat: "enterprise",
    badgeCls: "t-b2b",
    badge: "B2B",
    title: ["AI 고객상담 지원"],
    client: "LG전자",
    sector: "기업서비스",
    desc: ["질문과 관련된 상담 지식을 먼저 찾아 응대 초안 작성을 돕습니다."],
  },
];

// 두 언어. 화면에서는 refMetaLabels[lang] 처럼 언어로 먼저 고른다.
// 영어는 i18n/*.json 사전에서 그리는 시점에 만들어진다 (src/i18n/localize.ts).
export const refMetaLabels = localized(refMetaLabelsKo);
export const refCards = localized(refCardsKo);
