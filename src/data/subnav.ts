// 섹션 서브 내비(숨김 소스)의 앵커·라벨 — 순서가 곧 화면 순서다.
// 라벨에는 줄바꿈 기회(wbr)가 섞일 수 있어 RichToken 배열로 둔다.
import type { RichToken } from "@/components/rich-text";
export const subnavItems: Record<string, readonly { href: string; label: readonly RichToken[] }[]> =
  {
    "solution-agentq": [
      { href: "#overview", label: ["개요"] },
      { href: "#features", label: ["핵심 기능"] },
      { href: "#pipeline", label: ["처리 흐름"] },
      { href: "#proof", label: ["업무 흐름"] },
      { href: "#scenarios", label: ["적합한 곳"] },
    ],
    "solution-cubeon": [
      { href: "#overview", label: ["개요"] },
      { href: "#features", label: ["핵심 기능"] },
      { href: "#arch", label: ["아키텍처"] },
      { href: "#structure", label: ["제품 구조"] },
      { href: "#operation", label: ["운영 단계"] },
      { href: "#fit", label: ["적합한 곳"] },
    ],
    "solution-dataq": [
      { href: "#overview", label: ["개요"] },
      { href: "#arch", label: ["아키텍처"] },
      { href: "#features", label: ["핵심 기능"] },
      { href: "#standards", label: ["표준·", "wbr", "관리"] },
      { href: "#fit", label: ["적합한 곳"] },
    ],
    "solution-evcp": [
      { href: "#overview", label: ["개요"] },
      { href: "#features", label: ["핵심 기능"] },
      { href: "#msa", label: ["서비스 구조"] },
      { href: "#proof", label: ["레퍼런스"] },
      { href: "#fit", label: ["적합한 곳"] },
    ],
    "solution-factoryq": [
      { href: "#overview", label: ["개요"] },
      { href: "#applications", label: ["적용 범위"] },
      { href: "#features", label: ["핵심 기능"] },
      { href: "#why", label: ["왜 AI"] },
      { href: "#fit", label: ["적합한 곳"] },
    ],
    "solution-qdrive": [
      { href: "#overview", label: ["개요"] },
      { href: "#features", label: ["역할별 기능"] },
      { href: "#standards", label: ["데이터 연결"] },
      { href: "#effect", label: ["도입 효과"] },
      { href: "#fit", label: ["적합한 곳"] },
    ],
    "solution-traffic": [
      { href: "#overview", label: ["개요"] },
      { href: "#features", label: ["핵심 기능"] },
      { href: "#tms", label: ["TMS"] },
      { href: "#detect", label: ["돌발검지"] },
      { href: "#fit", label: ["적합한 곳"] },
    ],
  };
