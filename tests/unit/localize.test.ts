import { describe, expect, it } from "vitest";
import { localized } from "@/i18n/localize";
import { offices } from "@/data/site";
import { depCards } from "@/data/cards";
import { heroes } from "@/data/heroes";

// 화면 데이터를 그리는 시점에 두 언어로 내놓는 규칙.
//
// 이 검사는 원래 "생성된 src/data/*.en.ts 와 값이 같은가" 를 16쌍 통째로 대조하는 것이었고,
// 그 대조가 통과한 뒤에야 생성물을 지웠다(플레이북 11절). 생성물이 사라졌으니 이제는
// **규칙 자체**를 붙잡아 둔다 — 실제 회귀는 528건 DOM 게이트가 잡는다.

describe("localized — 두 언어로 내놓기", () => {
  it("한국어 쪽은 원본 그대로 (같은 객체)", () => {
    const ko = { title: "회사소개" };
    expect(localized(ko).ko).toBe(ko);
  });

  it("문자열을 사전의 영어로 바꾼다", () => {
    expect(localized({ title: "개인정보처리방침" }).en).toEqual({ title: "Privacy Policy" });
  });

  it("사전에 없으면 한국어를 그대로 둔다", () => {
    expect(localized({ x: "사전에 없는 문장입니다" }).en).toEqual({ x: "사전에 없는 문장입니다" });
  });

  it("앞뒤 여백을 남긴다 — 인라인 요소 앞의 띄어쓰기가 사라지면 안 된다", () => {
    expect(localized({ x: "개인정보처리방침 " }).en).toEqual({ x: "Privacy Policy " });
  });

  it('"wbr" 로 갈라진 문장은 이어 붙인 뒤 찾는다', () => {
    expect(localized({ v: ["개인정보", "wbr", "처리방침"] }).en).toEqual({ v: ["Privacy Policy"] });
  });

  it('"br"(문장 구분 줄바꿈)은 이어 붙이지 않는다', () => {
    // 처음에 "이웃한 문자열은 다 잇는다" 로 썼다가 br 까지 뭉개져 대조 검사가 잡아냈다
    const out = localized({ v: ["개인정보처리방침", "br", "개인정보처리방침"] }).en;
    expect(out).toEqual({ v: ["Privacy Policy", "br", "Privacy Policy"] });
  });

  it("중첩된 객체·배열까지 내려간다", () => {
    expect(localized({ a: [{ b: ["개인정보처리방침"] }] }).en).toEqual({
      a: [{ b: ["Privacy Policy"] }],
    });
  });

  it("주소·경로처럼 사전에 없는 값은 손대지 않는다", () => {
    expect(localized({ src: "assets/img/logo.svg" }).en).toEqual({ src: "assets/img/logo.svg" });
  });
});

describe("실제 데이터가 두 언어로 나온다", () => {
  it("거점 주소 — 영어 화면에서는 영어 주소", () => {
    const ko = offices.ko.find((o) => o.code === "SEOUL");
    const en = offices.en.find((o) => o.code === "SEOUL");
    expect(ko?.address).toContain("서울");
    expect(en?.address).toContain("Seoul");
  });

  it("카드 문구 — 키는 그대로, 값만 언어별로", () => {
    expect(Object.keys(depCards.en)).toEqual(Object.keys(depCards.ko));
  });

  it("히어로 — 두 언어의 화면 목록이 같다", () => {
    expect(Object.keys(heroes.en)).toEqual(Object.keys(heroes.ko));
  });
});
