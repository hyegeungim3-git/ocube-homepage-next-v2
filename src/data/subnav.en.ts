// 섹션 서브 내비(숨김 소스)의 앵커·라벨 — 순서가 곧 화면 순서다.
// 라벨에는 줄바꿈 기회(wbr)가 섞일 수 있어 RichToken 배열로 둔다.
import type { RichToken } from "@/components/rich-text";
export const subnavItems: Record<string, readonly { href: string; label: readonly RichToken[] }[]> =
  {
    "solution-agentq": [
      { href: "#overview", label: ["Overview"] },
      { href: "#features", label: ["Key features"] },
      { href: "#pipeline", label: ["How it runs"] },
      { href: "#proof", label: ["Workflow"] },
      { href: "#scenarios", label: ["Where it fits"] },
    ],
    "solution-cubeon": [
      { href: "#overview", label: ["Overview"] },
      { href: "#features", label: ["Key features"] },
      { href: "#arch", label: ["Architecture"] },
      { href: "#structure", label: ["Product structure"] },
      { href: "#operation", label: ["Stages of operation"] },
      { href: "#fit", label: ["Where it fits"] },
    ],
    "solution-dataq": [
      { href: "#overview", label: ["Overview"] },
      { href: "#arch", label: ["Architecture"] },
      { href: "#features", label: ["Key features"] },
      { href: "#standards", label: ["Standards and governance"] },
      { href: "#fit", label: ["Where it fits"] },
    ],
    "solution-evcp": [
      { href: "#overview", label: ["Overview"] },
      { href: "#features", label: ["Key features"] },
      { href: "#msa", label: ["Service structure"] },
      { href: "#proof", label: ["Reference"] },
      { href: "#fit", label: ["Where it fits"] },
    ],
    "solution-factoryq": [
      { href: "#overview", label: ["Overview"] },
      { href: "#applications", label: ["Coverage"] },
      { href: "#features", label: ["Key features"] },
      { href: "#why", label: ["Why AI"] },
      { href: "#fit", label: ["Where it fits"] },
    ],
    "solution-qdrive": [
      { href: "#overview", label: ["Overview"] },
      { href: "#features", label: ["By role"] },
      { href: "#standards", label: ["Connect"] },
      { href: "#effect", label: ["What you gain"] },
      { href: "#fit", label: ["Where it fits"] },
    ],
    "solution-traffic": [
      { href: "#overview", label: ["Overview"] },
      { href: "#features", label: ["Key features"] },
      { href: "#tms", label: ["TMS"] },
      { href: "#detect", label: ["Incident detection"] },
      { href: "#fit", label: ["Where it fits"] },
    ],
  };
