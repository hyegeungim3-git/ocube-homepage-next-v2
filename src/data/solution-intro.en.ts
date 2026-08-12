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
    lines: [
      ["Data, AI and day-to-day execution joined into one,"],
      ["from judgement through approval to execution and verification."],
    ],
  },
  "solution-dataq": {
    badge: "AI-Ready Data Platform",
    name: "QData",
    lines: [
      ["Structured, unstructured and document data connected —"],
      ["shaped for RAG, CAG and TAG based AI to use."],
    ],
  },
  "solution-factoryq": {
    badge: "M.AX Platform",
    name: "QFactory",
    lines: [
      ["Process, equipment, quality and energy data joined into one —"],
      ["predicting faults and waste, and pointing to the right action."],
    ],
  },
  "solution-agentq": {
    badge: "Enterprise Multi-Agent Platform",
    name: "AgentQ",
    lines: [
      ["Specialist agents handle documents, speech and data,"],
      ["passing results on to a reviewable document and plan."],
    ],
  },
  "solution-qdrive": {
    badge: "AI Mobility Operations Platform",
    name: "QDrive",
    lines: [
      ["Tachograph, diagnostic, location and energy data read by AI —"],
      ["improving safety, efficiency, charging and carbon performance."],
    ],
  },
  "solution-evcp": {
    badge: "AI EV Charging Operations Platform",
    name: "EVCP",
    lines: [
      ["Chargers, usage, payment and energy data joined into one —"],
      ["with AI predicting faults and demand, and tuning how you operate."],
    ],
  },
  "solution-traffic": {
    badge: "Vision AI Safety Platform",
    name: "QVision",
    lines: [
      ["Existing CCTV analysed live —"],
      ["detecting incidents and unsafe behaviour, masking personal data on the spot."],
    ],
  },
};
