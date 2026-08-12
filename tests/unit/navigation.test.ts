import { describe, expect, it } from "vitest";
import { headerNavigation, headerNavigationEn } from "@/config/navigation";
import type { NavItem } from "@/config/navigation";

// 로드맵 3단계에서 ko/en 메뉴를 Record<Lang, ...> 한 벌로 합칠 예정이다.
// 합치기 전에 "지금 두 벌이 정확히 무엇을 공유하고 무엇만 다른지" 를 못 박아 둔다.
// 이 계약이 유지되면 합쳐도 화면이 달라지지 않는다.

const shape = (nav: readonly NavItem[]) =>
  nav.map((item) => ({ label: item.label, links: item.links.map((l) => l.href) }));

describe("GNB 구조", () => {
  it("대메뉴 4개", () => {
    expect(headerNavigation).toHaveLength(4);
    expect(headerNavigation.map((i) => i.label)).toEqual([
      "Business",
      "Solution",
      "Global Partners",
      "Company",
    ]);
  });

  it("중메뉴 20개", () => {
    expect(headerNavigation.flatMap((i) => i.links)).toHaveLength(20);
  });

  it("모든 주소가 .html 이거나 앵커가 붙은 .html", () => {
    for (const link of headerNavigation.flatMap((i) => i.links)) {
      expect(link.href, link.label).toMatch(/^[a-z0-9-]+\.html(#[a-z-]+)?$/);
    }
  });

  it("주소가 중복되지 않는다", () => {
    const hrefs = headerNavigation.flatMap((i) => i.links).map((l) => l.href);
    expect(new Set(hrefs).size).toBe(hrefs.length);
  });
});

describe("한국어·영어 메뉴 대조", () => {
  it("대메뉴 라벨·중메뉴 주소·순서가 완전히 같다", () => {
    expect(shape(headerNavigationEn)).toEqual(shape(headerNavigation));
  });

  it("중메뉴 라벨도 같다 (원래 영문 표기라 번역 대상이 아니다)", () => {
    expect(headerNavigationEn.flatMap((i) => i.links.map((l) => l.label))).toEqual(
      headerNavigation.flatMap((i) => i.links.map((l) => l.label)),
    );
  });

  it("설명 문구만 다르다 — 20개 전부 번역돼 있다", () => {
    const ko = headerNavigation.flatMap((i) => i.links);
    const en = headerNavigationEn.flatMap((i) => i.links);
    ko.forEach((link, index) => {
      expect(en[index]?.description, `${link.label} 설명이 한국어 그대로다`).not.toBe(
        link.description,
      );
      expect(en[index]?.description.trim(), `${link.label} 설명이 비었다`).not.toBe("");
    });
  });
});
