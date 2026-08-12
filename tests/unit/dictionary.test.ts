import { describe, expect, it } from "vitest";
import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { t } from "@/i18n/translate";

// 사전이 조용히 빗나가는 것을 막는 검사.
//
// 실제로 겪은 일: 사전 열쇠에 `&apos;` 가 그대로 들어가 있었다. JSX 는 화면에 그릴 때
// `&apos;` 를 진짜 따옴표(')로 바꿔 넘기므로 **열쇠가 맞지 않아 번역이 조용히 실패**했고,
// 영어 화면에 한국어 안내문이 그대로 남았다. 게다가 그 자리는 평소에 숨어 있는 요소라
// '보이는 글자' 를 훑는 검사에도 걸리지 않았다.
//
// 오류를 내지 않고 원문을 그대로 돌려주는 것이 사전의 동작이라, 이런 어긋남은
// 이렇게 따로 막지 않으면 드러나지 않는다.

const DIR = join(process.cwd(), "i18n");
const ENTITY = /&(?:[a-zA-Z][a-zA-Z0-9]+|#\d+|#x[0-9a-fA-F]+);/;

/** 밑줄로 시작하는 파일은 작업용 메모라 사전이 아니다(dictionary.ts 도 제외한다). */
function dictionaryFiles(): string[] {
  return readdirSync(DIR).filter((f) => f.endsWith(".json") && !f.startsWith("_"));
}

describe("사전 위생", () => {
  it.each(dictionaryFiles())("%s — 열쇠·값에 HTML 엔티티가 없다", (file) => {
    const data = JSON.parse(readFileSync(join(DIR, file), "utf-8")) as Record<string, unknown>;
    for (const [key, value] of Object.entries(data)) {
      expect(ENTITY.test(key), `열쇠에 엔티티: ${key}`).toBe(false);
      if (typeof value === "string") {
        expect(ENTITY.test(value), `값에 엔티티: ${value}`).toBe(false);
      }
    }
  });

  it("사례 화면의 빈 상태 안내가 영어로 번역된다", () => {
    const ko =
      "선택한 분야에 아직 공개된 사례가 없습니다. 위에서 다른 분야를 고르거나 '전체' 를 눌러 주십시오.";
    const en = t("en", ko);
    expect(en).not.toBe(ko);
    expect(en).toContain("nothing published");
  });

  it("번역이 없으면 원문을 그대로 돌려준다", () => {
    expect(t("en", "사전에 없는 문장")).toBe("사전에 없는 문장");
    expect(t("ko", "선택한 분야에 아직 공개된 사례가 없습니다.")).toBe(
      "선택한 분야에 아직 공개된 사례가 없습니다.",
    );
  });
});
