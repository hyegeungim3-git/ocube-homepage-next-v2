import { localized } from "@/i18n/localize";
// 문의 폼의 문의 유형 옵션 — 순서가 곧 화면 순서다.
// key 는 담당자를 찾는 데 쓰는 고정 값이라 번역되지 않는다 (사전에 없는 문자열은 그대로 지나간다).
// 담당자 표는 src/data/enquiry-recipients.ts — 브라우저에서도 읽으므로 그쪽에는 import 를 두지 않는다.

export interface EnquiryType {
  key: string;
  label: string;
}

const enquiryTypesKo: readonly EnquiryType[] = [
  { key: "ai-project", label: "AI 프로젝트 (QFactory · AgentQ · QData)" },
  { key: "ai-service", label: "AI 서비스 (QDrive · EVCP · QVision)" },
  { key: "embedded", label: "임베디드 소프트웨어 · 차량 전장 · 디바이스" },
  { key: "si", label: "SI 시스템 구축" },
  { key: "license", label: "제품 및 라이선스 문의 (Qt, Toradex, VisualOn, Protopie, Tuxera)" },
  { key: "etc", label: "기타" },
];

// 두 언어. 화면에서는 enquiryTypes[lang] 처럼 언어로 먼저 고른다.
// 영어는 i18n/*.json 사전에서 그리는 시점에 만들어진다 (src/i18n/localize.ts).
export const enquiryTypes = localized(enquiryTypesKo);
