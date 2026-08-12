// 연혁 타임라인 — 연도 그룹과 이정표. cls 는 리빌 스태거 실측값 그대로.
import type { RichToken } from "@/components/rich-text";

export interface HistoryGroup {
  cls: string;
  year: string;
  sub: string;
  items: readonly (readonly RichToken[])[];
}

export const historyGroups: readonly HistoryGroup[] = [
  {
    cls: "hist-row rv",
    year: "2025",
    sub: "~",
    items: [[{ b: ["Mini PCI LTE Cat M1 module"] }, " released"]],
  },
  {
    cls: "hist-row rv d1",
    year: "2024",
    sub: "~ 2022",
    items: [
      [{ b: ["OCPP solution"] }, " launched"],
      ["Commendation from the Daegu·Gyeongbuk Regional Office of SMEs and Startups"],
      ["ProtoPie partnership signed"],
      ["Commendation from the Mayor of Daegu"],
    ],
  },
  {
    cls: "hist-row rv d2",
    year: "2021",
    sub: "~ 2019",
    items: [
      ["LS Electric ", { b: ["named an R&D Star partner"] }, " "],
      ["Gemalto Distributor Award"],
      ["Official partner agreement with BlackBerry QNX"],
      ["Certified for technical capability (Korea Enterprise Data)"],
      ["Official partner agreement with mimik"],
    ],
  },
  {
    cls: "hist-row rv d3",
    year: "2018",
    sub: "~ 2016",
    items: [
      ["Official partner agreement with VisualOn"],
      [{ b: ["Appointed official Korean partner and distributor for The Qt Company"] }, " "],
      ["Official partner agreement with Gemalto M2M"],
    ],
  },
  {
    cls: "hist-row rv d3",
    year: "2015",
    sub: "~ 2013",
    items: [
      ["Named a Strong Small Business by the Ministry of Employment and Labor"],
      ["Award for outstanding performance among Daegu Star Enterprises"],
      ["Software Industry Day — ", { b: ["Prime Minister’s Commendation"] }, " "],
      ["Named a good place to work in the region"],
    ],
  },
  {
    cls: "hist-row rv d3",
    year: "2012",
    sub: "~ 2010",
    items: [
      ["KISA ISMS information security certification"],
      [{ b: ["Nokia Qt Certified Partner"] }, "  ", { em: ["(first in Korea, 2010)"] }],
      ["Selected as a Daegu Star Enterprise"],
      ["Certified as an InnoBiz technology innovation company"],
      ["Award for excellence among small and medium enterprises"],
    ],
  },
  {
    cls: "hist-row rv d3",
    year: "2009",
    sub: "~ 2007",
    items: [
      ["Venture business certification · ISO 9001 · ISO 14001"],
      ["Nokia Symbian Platinum Partner"],
      ["Nokia Symbian Platinum Dev.Kit licence"],
      ["Certified as a Nokia S60 Competence Center"],
      ["In-house ICT research institute established"],
      [{ b: ["OCUBE CO., LTD. founded"] }, " (2007.03.29)"],
    ],
  },
];
