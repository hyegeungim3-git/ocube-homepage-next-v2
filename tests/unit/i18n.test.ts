import { describe, expect, it } from "vitest";
import { OTHER_LANG, assetPath, counterpartHref, pageHref, ui } from "@/config/i18n";
import type { Lang } from "@/config/i18n";

// 주소 규칙은 두 언어를 잇는 뼈대라, 다국어 통합(로드맵 3단계) 때 가장 먼저 깨질 수 있다.
// 지금 동작을 그대로 고정해 둔다.
describe("pageHref", () => {
  it("한국어는 파일명 그대로", () => {
    expect(pageHref("about", "ko")).toBe("about.html");
  });

  it("영어는 en/ 아래로", () => {
    expect(pageHref("about", "en")).toBe("en/about.html");
  });

  it.each([
    ["index", "ko", "index.html"],
    ["index", "en", "en/index.html"],
    ["", "ko", "index.html"],
    ["", "en", "en/index.html"],
  ] as const)("홈은 %s(%s) → %s", (slug, lang, expected) => {
    expect(pageHref(slug, lang as Lang)).toBe(expected);
  });
});

describe("counterpartHref", () => {
  it("한국어에서 영어로는 en/ 로 들어간다", () => {
    expect(counterpartHref("references", "ko")).toBe("en/references.html");
  });

  it("영어에서 한국어로는 한 단계 위로 나간다", () => {
    expect(counterpartHref("references", "en")).toBe("../references.html");
  });

  it("홈도 같은 규칙", () => {
    expect(counterpartHref("index", "ko")).toBe("en/index.html");
    expect(counterpartHref("index", "en")).toBe("../index.html");
  });
});

describe("assetPath", () => {
  it("한국어 화면은 그대로", () => {
    expect(assetPath("assets/img/logo.svg", "ko")).toBe("assets/img/logo.svg");
  });

  it("영어 화면은 한 단계 위 (en/ 아래에 있으므로)", () => {
    expect(assetPath("assets/img/logo.svg", "en")).toBe("../assets/img/logo.svg");
  });
});

describe("언어 상수", () => {
  it("서로를 가리킨다", () => {
    expect(OTHER_LANG.ko).toBe("en");
    expect(OTHER_LANG.en).toBe("ko");
  });

  it("껍데기 문구는 두 언어가 같은 키를 갖는다", () => {
    expect(Object.keys(ui.en).sort()).toEqual(Object.keys(ui.ko).sort());
  });

  it("껍데기 문구에 빈 값이 없다", () => {
    for (const lang of ["ko", "en"] as const) {
      for (const [key, value] of Object.entries(ui[lang])) {
        expect(value, `${lang}.${key}`).not.toBe("");
      }
    }
  });

  it("한국어 화면과 영어 화면의 안내 문구는 서로 달라야 한다 (번역 누락 감시)", () => {
    expect(ui.ko.skip).not.toBe(ui.en.skip);
    expect(ui.ko.contact).not.toBe(ui.en.contact);
    expect(ui.ko.openMenu).not.toBe(ui.en.openMenu);
  });
});
