// 솔루션 상단의 이동 문구(히어로 → 밝은 영역으로 옮겨 오는 블록) — 7개 솔루션 공통 구조.
import type { RichToken } from "@/components/rich-text";

export interface SolutionIntro {
  badge: string;
  name: string;
  lines: readonly [readonly RichToken[], readonly RichToken[]];
}

export const solutionIntros: Record<string, SolutionIntro> = {
  "solution-cubeon": {
    badge: "Industrial AI Operating Platform",
    name: "Cubeon",
    lines: [["산업과 비즈니스의 데이터·", "wbr", "AI·", "wbr", "업무 실행을 하나로 연결해"], ["판단부터 승인, 실행과 검증까지 이어지는 운영 체계를 만듭니다."]],
  },
  "solution-dataq": {
    badge: "AI-Ready Data Platform",
    name: "QData",
    lines: [["정형·", "wbr", "비정형·", "wbr", "시계열·", "wbr", "문서 데이터를 연결하고"], ["RAG·", "wbr", "CAG·", "wbr", "TAG 기반 AI가 바로 활용할 수 있는 데이터로 가공합니다."]],
  },
  "solution-factoryq": {
    badge: "M.AX Platform",
    name: "QFactory",
    lines: [["공정·", "wbr", "설비·", "wbr", "품질·", "wbr", "에너지 데이터를 하나로 연결해"], ["이상과 낭비를 예측하고 최적의 공정 조치를 지원합니다."]],
  },
  "solution-agentq": {
    badge: "Enterprise Multi-Agent Platform",
    name: "AgentQ",
    lines: [["문서·음성·데이터베이스를 다루는 전문 에이전트가 업무를 나눠 맡고"], ["중간 결과를 이어받아 검토 가능한 문서와 실행안까지 완성합니다."]],
  },
  "solution-qdrive": {
    badge: "AI Mobility Operations Platform",
    name: "QDrive",
    lines: [["운행기록·", "wbr", "차량진단·", "wbr", "위치·", "wbr", "에너지 데이터를 AI로 분석해"], ["모빌리티의 안전·", "wbr", "운영 효율·", "wbr", "충전·", "wbr", "탄소 성과를 최적화합니다."]],
  },
  "solution-evcp": {
    badge: "AI EV Charging Operations Platform",
    name: "EVCP",
    lines: [["충전기와 이용·", "wbr", "결제·", "wbr", "에너지 데이터를 하나로 연결해"], ["AI로 장애와 수요를 예측하고 충전 운영을 최적화합니다."]],
  },
  "solution-traffic": {
    badge: "Vision AI Safety Platform",
    name: "QVision",
    lines: [["기존 CCTV 영상을 실시간으로 분석해"], ["돌발상황과 위험 행동을 감지하고 개인정보를 즉시 비식별 처리합니다."]],
  },
};
