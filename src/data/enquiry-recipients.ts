// 문의 유형별 담당자 (2026-08-26 리뷰 결정). 표에 없는 유형은 기본 담당자에게 간다.
//
// ⚠️ 이 파일은 **브라우저에서도 읽는다** (문의 폼이 Client Component).
// 사전(src/i18n/dictionary.ts, 267KB)을 끌어오지 않도록 여기에는 아무것도 import 하지 않는다.
// 그래서 유형 라벨이 아니라 번역되지 않는 key 로 담당자를 찾는다.

export const defaultRecipients: readonly string[] = ["adola@ocube.co.kr"];

export const enquiryRecipients: Readonly<Record<string, readonly string[]>> = {
  "ai-project": ["demy2580@ocube.co.kr", "scbyun@ocube.co.kr"],
  "ai-service": ["demy2580@ocube.co.kr", "scbyun@ocube.co.kr"],
  si: ["demy2580@ocube.co.kr", "heesun.cho@ocube.co.kr"],
};

/** 문의 유형 key 로 받는 사람을 찾는다. 모르는 key 는 기본 담당자. */
export function recipientsFor(key: string): readonly string[] {
  return enquiryRecipients[key] ?? defaultRecipients;
}
