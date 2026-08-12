import { localized } from "@/i18n/localize";
// 문의 폼의 문의 유형 옵션 — 순서가 곧 화면 순서다.
const enquiryTypesKo: readonly string[] = [
  "AI 프로젝트 (QFactory · AgentQ · QData)",
  "AI 서비스 (QDrive · EVCP · QVision)",
  "임베디드 소프트웨어 · 차량 전장 · 디바이스",
  "SI 시스템 구축",
  "제품 및 라이선스 문의 (Qt, Toradex, VisualOn, Protopie, Tuxera)",
  "솔루션 도입 (Cubeon)",
  "기타",
];

// 두 언어. 화면에서는 enquiryTypes[lang] 처럼 언어로 먼저 고른다.
// 영어는 i18n/*.json 사전에서 그리는 시점에 만들어진다 (src/i18n/localize.ts).
export const enquiryTypes = localized(enquiryTypesKo);
