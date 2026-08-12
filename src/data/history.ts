import { localized } from "@/i18n/localize";
// 연혁 타임라인 — 연도 그룹과 이정표. cls 는 리빌 스태거 실측값 그대로.
import type { RichToken } from "@/components/rich-text";

export interface HistoryGroup {
  cls: string;
  year: string;
  sub: string;
  items: readonly (readonly RichToken[])[];
}

const historyGroupsKo: readonly HistoryGroup[] = [
  {
    cls: "hist-row rv",
    year: "2025",
    sub: "~",
    items: [[{ b: ["Mini PCI LTE Cat M1 모듈"] }, " 출시"]],
  },
  {
    cls: "hist-row rv d1",
    year: "2024",
    sub: "~ 2022",
    items: [
      [{ b: ["OCPP 솔루션"] }, " 런칭"],
      ["대구경북지방중소벤처기업청장 표창"],
      ["ProtoPie 파트너십 체결"],
      ["대구광역시장 표창"],
    ],
  },
  {
    cls: "hist-row rv d2",
    year: "2021",
    sub: "~ 2019",
    items: [
      ["LS Electric ", { b: ["R&D Star 파트너사"] }, " 선정"],
      ["Gemalto Distributor Award 수상"],
      ["BlackBerry QNX 공식 파트너 계약"],
      ["기술역량우수기업 인증 (한국기업데이터)"],
      ["mimik 공식 파트너 계약"],
    ],
  },
  {
    cls: "hist-row rv d3",
    year: "2018",
    sub: "~ 2016",
    items: [
      ["VisualOn 공식 파트너 계약"],
      [{ b: ["The Qt Company 한국 공식 파트너 · 공급 총판"] }, " 선정"],
      ["Gemalto M2M 공식 파트너 계약"],
    ],
  },
  {
    cls: "hist-row rv d3",
    year: "2015",
    sub: "~ 2013",
    items: [
      ["고용노동부 강소기업 선정"],
      ["대구 스타기업 우수 성과 기업 수상"],
      ["SW산업인의 날 ", { b: ["국무총리 표창"] }, " 수상"],
      ["우리지역 일하기 좋은 기업 선정"],
    ],
  },
  {
    cls: "hist-row rv d3",
    year: "2012",
    sub: "~ 2010",
    items: [
      ["KISA ISMS 보안인증 획득"],
      [{ b: ["Nokia Qt Certified Partner"] }, " 자격 획득 ", { em: ["(2010년 국내 최초)"] }],
      ["대구광역시 스타기업 선정"],
      ["InnoBiz(기술혁신형) 기업 선정"],
      ["중소기업 우수기업 수상"],
    ],
  },
  {
    cls: "hist-row rv d3",
    year: "2009",
    sub: "~ 2007",
    items: [
      ["벤처기업 · ISO 9001 · ISO 14001 인증"],
      ["Nokia Symbian Platinum Partner"],
      ["Nokia Symbian Platinum Dev.Kit 라이선스"],
      ["Nokia S60 Competence Center 자격 획득"],
      ["기업부설 정보통신연구소 설립"],
      [{ b: ["오큐브 주식회사 설립"] }, " (2007.03.29)"],
    ],
  },
];

// 두 언어. 화면에서는 historyGroups[lang] 처럼 언어로 먼저 고른다.
// 영어는 i18n/*.json 사전에서 그리는 시점에 만들어진다 (src/i18n/localize.ts).
export const historyGroups = localized(historyGroupsKo);
